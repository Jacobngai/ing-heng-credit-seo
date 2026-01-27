#!/usr/bin/env node

/**
 * AI Content Publisher Script
 *
 * This script allows AI systems to automatically publish blog posts to GitHub
 * and trigger the automated quality check and deployment workflow.
 *
 * Usage:
 *   node ai-content-publisher.js --file path/to/content.astro --languages en,ms,zh
 *
 * Environment Variables:
 *   GITHUB_TOKEN - Personal Access Token with repo permissions
 *   GITHUB_OWNER - Repository owner (default: your-org)
 *   GITHUB_REPO - Repository name (default: ing-heng-credit-seo)
 */

const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  owner: process.env.GITHUB_OWNER || 'your-org',
  repo: process.env.GITHUB_REPO || 'ing-heng-credit-seo',
  token: process.env.GITHUB_TOKEN,
  baseBranch: 'master'
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const params = {
    file: null,
    languages: 'all',
    skipQuality: false,
    deployImmediately: true,
    createPR: false
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--file':
      case '-f':
        params.file = args[++i];
        break;
      case '--languages':
      case '-l':
        params.languages = args[++i];
        break;
      case '--skip-quality':
        params.skipQuality = true;
        break;
      case '--no-deploy':
        params.deployImmediately = false;
        break;
      case '--create-pr':
        params.createPR = true;
        break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        printHelp();
        process.exit(1);
    }
  }

  if (!params.file) {
    console.error('Error: --file parameter is required');
    printHelp();
    process.exit(1);
  }

  return params;
}

function printHelp() {
  console.log(`
AI Content Publisher

Usage:
  node ai-content-publisher.js [options]

Options:
  -f, --file <path>        Path to content file (required)
  -l, --languages <langs>  Languages to publish (default: all)
                           Examples: en, en,ms, all
  --skip-quality           Skip quality checks (not recommended)
  --no-deploy              Don't deploy immediately (create PR only)
  --create-pr              Create PR instead of direct commit
  -h, --help               Show this help message

Examples:
  # Publish to all languages with auto-deploy
  node ai-content-publisher.js --file ./content/my-post.astro

  # Publish to English only, create PR for review
  node ai-content-publisher.js --file ./content/my-post.astro --languages en --create-pr

  # Publish without quality checks (emergency)
  node ai-content-publisher.js --file ./content/my-post.astro --skip-quality

Environment Variables:
  GITHUB_TOKEN   GitHub Personal Access Token (required)
  GITHUB_OWNER   Repository owner (default: your-org)
  GITHUB_REPO    Repository name (default: ing-heng-credit-seo)
`);
}

// Validate environment
function validateEnvironment() {
  if (!config.token) {
    console.error('Error: GITHUB_TOKEN environment variable is required');
    console.error('Create a token at: https://github.com/settings/tokens');
    console.error('Required scopes: repo');
    process.exit(1);
  }
}

// Read content file
function readContentFile(filePath) {
  try {
    const fullPath = path.resolve(filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }
}

// Extract metadata from content
function extractMetadata(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return { title: 'Untitled Post', description: 'No description' };
  }

  const frontmatter = frontmatterMatch[1];
  const title = frontmatter.match(/title:\s*["'](.+?)["']/)?.[1] || 'Untitled Post';
  const description = frontmatter.match(/description:\s*["'](.+?)["']/)?.[1] || 'No description';

  return { title, description };
}

// Generate target path based on languages
function generateTargetPath(sourceFile, language) {
  const filename = path.basename(sourceFile);
  return `clients/ing-heng/website/src/pages/${language}/blog/${filename}`;
}

// Commit content to GitHub
async function commitToGitHub(octokit, params, content, targetPath) {
  try {
    // Get current file SHA if it exists (for updates)
    let sha = null;
    try {
      const { data } = await octokit.rest.repos.getContent({
        owner: config.owner,
        repo: config.repo,
        path: targetPath,
        ref: config.baseBranch
      });
      sha = data.sha;
      console.log(`File exists, will update: ${targetPath}`);
    } catch (error) {
      console.log(`File doesn't exist, will create: ${targetPath}`);
    }

    // Create or update file
    const metadata = extractMetadata(content);
    const message = sha
      ? `chore: Update blog post - ${metadata.title}`
      : `feat: Add new blog post - ${metadata.title}`;

    const response = await octokit.rest.repos.createOrUpdateFileContents({
      owner: config.owner,
      repo: config.repo,
      path: targetPath,
      message: `${message}\n\nLanguages: ${params.languages}\nAuto-generated by AI Content Publisher`,
      content: Buffer.from(content).toString('base64'),
      branch: config.baseBranch,
      ...(sha && { sha })
    });

    console.log(`✅ Committed to ${targetPath}`);
    return response.data.commit.sha;
  } catch (error) {
    console.error(`❌ Failed to commit: ${error.message}`);
    throw error;
  }
}

// Create Pull Request
async function createPullRequest(octokit, params, targetPaths) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const branchName = `ai-content/${timestamp}`;

  try {
    // Get base branch SHA
    const { data: baseRef } = await octokit.rest.git.getRef({
      owner: config.owner,
      repo: config.repo,
      ref: `heads/${config.baseBranch}`
    });

    // Create new branch
    await octokit.rest.git.createRef({
      owner: config.owner,
      repo: config.repo,
      ref: `refs/heads/${branchName}`,
      sha: baseRef.object.sha
    });

    console.log(`✅ Created branch: ${branchName}`);

    // Commit files to new branch
    for (const targetPath of targetPaths) {
      const content = readContentFile(params.file);
      await commitToGitHub(octokit, params, content, targetPath);
    }

    // Create Pull Request
    const metadata = extractMetadata(readContentFile(params.file));
    const { data: pr } = await octokit.rest.pulls.create({
      owner: config.owner,
      repo: config.repo,
      title: `🤖 AI-Generated: ${metadata.title}`,
      head: branchName,
      base: config.baseBranch,
      body: `## 🤖 AI-Generated Blog Post

**Title**: ${metadata.title}
**Description**: ${metadata.description}
**Languages**: ${params.languages}

### Quality Checks
${params.skipQuality ? '⚠️ Quality checks will be skipped' : '✅ Quality checks will run automatically'}

### Deployment
${params.deployImmediately ? '🚀 Will auto-deploy after merge' : '⏸️ Manual deployment required'}

---
*Auto-generated by AI Content Publisher*`
    });

    console.log(`✅ Pull request created: ${pr.html_url}`);
    return pr;
  } catch (error) {
    console.error(`❌ Failed to create PR: ${error.message}`);
    throw error;
  }
}

// Trigger workflow
async function triggerWorkflow(octokit, params) {
  try {
    await octokit.rest.actions.createWorkflowDispatch({
      owner: config.owner,
      repo: config.repo,
      workflow_id: 'publish-blog-post.yml',
      ref: config.baseBranch,
      inputs: {
        content_file: params.file,
        languages: params.languages,
        skip_quality_check: params.skipQuality.toString(),
        deploy_immediately: params.deployImmediately.toString()
      }
    });

    console.log('✅ Workflow triggered successfully');
  } catch (error) {
    console.error(`❌ Failed to trigger workflow: ${error.message}`);
    throw error;
  }
}

// Main execution
async function main() {
  console.log('🤖 AI Content Publisher\n');

  // Parse arguments
  const params = parseArgs();

  // Validate environment
  validateEnvironment();

  // Initialize Octokit
  const octokit = new Octokit({ auth: config.token });

  // Read content
  console.log(`📖 Reading content from: ${params.file}`);
  const content = readContentFile(params.file);
  const metadata = extractMetadata(content);

  console.log(`📝 Title: ${metadata.title}`);
  console.log(`📝 Description: ${metadata.description}`);
  console.log(`🌍 Languages: ${params.languages}`);
  console.log('');

  // Determine target languages
  const languages = params.languages === 'all'
    ? ['en', 'ms', 'zh']
    : params.languages.split(',').map(l => l.trim());

  // Generate target paths
  const targetPaths = languages.map(lang => generateTargetPath(params.file, lang));

  console.log('📂 Target paths:');
  targetPaths.forEach(p => console.log(`   - ${p}`));
  console.log('');

  if (params.createPR) {
    // Create Pull Request workflow
    console.log('🔄 Creating Pull Request...');
    const pr = await createPullRequest(octokit, params, targetPaths);
    console.log('');
    console.log('✨ Success! Pull Request created:');
    console.log(`   ${pr.html_url}`);
  } else {
    // Direct commit workflow
    console.log('🔄 Committing content...');
    for (const targetPath of targetPaths) {
      await commitToGitHub(octokit, params, content, targetPath);
    }
    console.log('');

    // Trigger workflow
    console.log('🔄 Triggering deployment workflow...');
    await triggerWorkflow(octokit, params);
    console.log('');
    console.log('✨ Success! Content published and workflow triggered.');
    console.log(`   View workflow runs: https://github.com/${config.owner}/${config.repo}/actions`);
  }

  console.log('');
  console.log('Next steps:');
  if (params.createPR) {
    console.log('  1. Review the Pull Request');
    console.log('  2. Check quality reports in PR comments');
    console.log('  3. Merge the PR to deploy');
  } else {
    console.log('  1. Monitor workflow execution');
    console.log('  2. Review quality check results');
    console.log('  3. Verify deployment');
  }
}

// Run
main().catch(error => {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
});
