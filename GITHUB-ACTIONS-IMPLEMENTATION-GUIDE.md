# GitHub Actions Automation - Implementation Guide

Complete step-by-step guide to set up the automated content publishing system for Ing Heng Credit's multi-language website.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [Testing the System](#testing-the-system)
5. [AI Integration](#ai-integration)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)

---

## Overview

This automation system provides:

- ✅ **Quality Gates**: Automated validation of keyword density, readability, and content quality
- 🚀 **Multi-Language Deployment**: Deploy to 3 separate Vercel projects (EN, MS, ZH)
- 🗺️ **SEO Automation**: Automatic sitemap generation and search engine submission
- 🤖 **AI Integration**: API-ready for AI content generation systems
- 📊 **Reporting**: Detailed quality reports and deployment summaries

### Architecture

```
┌─────────────────┐
│  AI Content     │
│  Generator      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitHub Repo    │  ←── Automated Workflows
│  (Master)       │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌─────────┐ ┌─────────┐
│ Quality │ │  Build  │
│ Checks  │ │ & Test  │
└────┬────┘ └────┬────┘
     │           │
     └─────┬─────┘
           ▼
    ┌─────────────┐
    │  Vercel     │
    │  (3 sites)  │
    └──────┬──────┘
           │
      ┌────┴────┬────────┐
      ▼         ▼        ▼
   ┌────┐    ┌────┐   ┌────┐
   │ EN │    │ MS │   │ ZH │
   └────┘    └────┘   └────┘
      │         │        │
      └─────────┴────────┘
              ▼
      ┌──────────────┐
      │   Google     │
      │   Search     │
      │   Console    │
      └──────────────┘
```

---

## Prerequisites

### 1. GitHub Account Setup

- ✅ Repository owner or admin access
- ✅ Ability to create GitHub Actions workflows
- ✅ Permissions to manage secrets

### 2. Vercel Account Setup

- ✅ 3 Vercel projects created:
  - EN: prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw
  - MS: prj_eKJtQcTcOd69sER92xq8NeS1SD4y
  - ZH: prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7
- ✅ Vercel team ID: team_ZRACGuujUQkB6IRfNtWpe0T6

### 3. Required Tools

```bash
# Node.js 20+
node --version  # Should be v20.x.x or higher

# npm
npm --version

# Git
git --version

# Vercel CLI (optional for local testing)
npm install -g vercel
```

---

## Setup Instructions

### Step 1: GitHub Secrets Configuration

1. **Navigate to GitHub Settings**
   ```
   Repository → Settings → Secrets and variables → Actions
   ```

2. **Create Repository Secrets**

   Click **New repository secret** and add:

   **Secret 1: VERCEL_TOKEN**
   ```
   Name: VERCEL_TOKEN
   Value: [Your Vercel API Token]
   ```

   **How to get Vercel Token:**
   - Go to https://vercel.com/account/tokens
   - Click **Create Token**
   - Name: "GitHub Actions Automation"
   - Scope: Full Account
   - Expiration: No expiration (or custom)
   - Copy the token immediately

   **Secret 2: VERCEL_ORG_ID**
   ```
   Name: VERCEL_ORG_ID
   Value: team_ZRACGuujUQkB6IRfNtWpe0T6
   ```

3. **Verify Secrets**
   ```
   Settings → Secrets and variables → Actions
   ```
   You should see:
   - ✅ VERCEL_TOKEN
   - ✅ VERCEL_ORG_ID

### Step 2: Vercel Project Configuration

For each Vercel project, add environment variables:

#### EN Project (www.inghengcredit.com)

1. Go to https://vercel.com/dashboard
2. Select project: `ing-heng-credit-en`
3. Settings → Environment Variables
4. Add the following:

```
PUBLIC_DEFAULT_LOCALE = en
DEFAULT_LOCALE = en
PUBLIC_SITE_URL = https://www.inghengcredit.com
SITE_URL = https://www.inghengcredit.com
```

**Important**: No trailing newlines or spaces!

#### MS Project (www.kreditloan.my)

1. Select project: `ing-heng-credit-ms`
2. Settings → Environment Variables
3. Add:

```
PUBLIC_DEFAULT_LOCALE = ms
DEFAULT_LOCALE = ms
PUBLIC_SITE_URL = https://www.kreditloan.my
SITE_URL = https://www.kreditloan.my
```

#### ZH Project (www.inghengcredit.my)

1. Select project: `ing-heng-credit-zh`
2. Settings → Environment Variables
3. Add:

```
PUBLIC_DEFAULT_LOCALE = zh
DEFAULT_LOCALE = zh
PUBLIC_SITE_URL = https://www.inghengcredit.my
SITE_URL = https://www.inghengcredit.my
```

### Step 3: Verify Workflow Files

Ensure these files exist in your repository:

```
.github/
├── workflows/
│   ├── content-quality-check.yml
│   ├── publish-blog-post.yml
│   ├── deploy-to-vercel.yml
│   ├── update-sitemaps.yml
│   └── README.md
├── scripts/
│   ├── ai-content-publisher.js
│   └── package.json
└── link-check-config.json
```

If any files are missing, they should have been created by this setup process.

### Step 4: Install Script Dependencies (Optional)

For using the AI content publisher script:

```bash
cd .github/scripts
npm install
```

### Step 5: Configure Branch Protection (Recommended)

1. Go to: **Settings → Branches**
2. Add rule for `master` branch:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - Select status checks: `quality-check-en`, `quality-check-ms`, `quality-check-zh`

### Step 6: Test the Setup

#### Test 1: Manual Workflow Trigger

1. Go to **Actions** tab
2. Select **Publish Blog Post**
3. Click **Run workflow**
4. Fill in:
   ```
   content_file: clients/ing-heng/website/src/pages/en/blog/test-post.astro
   languages: en
   skip_quality_check: false
   deploy_immediately: false
   ```
5. Click **Run workflow**
6. Monitor the workflow execution

**Expected Result**: Workflow should run quality checks and create a PR.

#### Test 2: Quality Check Validation

Create a test blog post:

```astro
---
title: "Test Blog Post for Quality Checks"
description: "This is a test post to validate our quality check system"
keywords: ["equipment financing", "test", "quality check"]
target_keywords: ["equipment financing", "quality check"]
date: "2025-01-22"
author: "Ing Heng Credit Team"
category: "Testing"
---

# Test Blog Post

This is a test blog post for the Ing Heng Credit equipment financing platform.

Equipment financing is essential for businesses. Equipment financing helps companies grow.
Equipment financing provides flexible payment options. Equipment financing is available in Malaysia.

Ing Heng Credit has 40+ years of experience in equipment financing. We are licensed by KPKT
and have helped over 4,000+ companies with their financing needs.

Contact us today for equipment financing solutions.
```

Expected quality check results:
- ✅ Keyword density: ~3% for "equipment financing"
- ✅ Readability: Should be above 60
- ✅ Facts verified: Ing Heng Credit, 40+ years, KPKT, 4,000+ companies

#### Test 3: Deployment Test

1. Merge a test PR
2. Verify deployment workflow triggers
3. Check deployment URLs:
   - https://www.inghengcredit.com
   - https://www.kreditloan.my
   - https://www.inghengcredit.my

---

## Testing the System

### Manual Testing Checklist

- [ ] Create test blog post
- [ ] Trigger manual workflow
- [ ] Verify quality checks pass
- [ ] Review quality report
- [ ] Check PR creation
- [ ] Merge PR
- [ ] Verify deployment to all 3 sites
- [ ] Check sitemap generation
- [ ] Verify sitemap submission to Google

### Automated Testing

Run workflow validation:

```bash
# Validate workflow syntax
cd .github/workflows
for file in *.yml; do
  echo "Validating $file..."
  # Use GitHub CLI to validate
  gh workflow view $file
done
```

---

## AI Integration

### Option 1: Using the AI Content Publisher Script

```bash
# Setup
cd .github/scripts
npm install

# Set environment variable
export GITHUB_TOKEN="your_github_token"

# Publish content
node ai-content-publisher.js \
  --file /path/to/generated-content.astro \
  --languages all \
  --deploy-immediately
```

### Option 2: Direct GitHub API Integration

**Python Example:**

```python
import requests
import base64

GITHUB_TOKEN = "your_token"
REPO_OWNER = "your-org"
REPO_NAME = "ing-heng-credit-seo"

def publish_blog_post(content, file_path, languages="all"):
    """Publish AI-generated blog post to GitHub"""

    # Trigger workflow
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/actions/workflows/publish-blog-post.yml/dispatches"

    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json"
    }

    data = {
        "ref": "master",
        "inputs": {
            "content_file": file_path,
            "languages": languages,
            "skip_quality_check": "false",
            "deploy_immediately": "true"
        }
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 204:
        print("✅ Workflow triggered successfully")
        return True
    else:
        print(f"❌ Failed to trigger workflow: {response.text}")
        return False

# Usage
content = generate_blog_content()  # Your AI generation function
publish_blog_post(content, "clients/ing-heng/website/src/pages/en/blog/ai-post.astro")
```

**Node.js Example:**

```javascript
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

async function publishBlogPost(content, filePath, languages = 'all') {
  try {
    // Trigger workflow
    await octokit.rest.actions.createWorkflowDispatch({
      owner: 'your-org',
      repo: 'ing-heng-credit-seo',
      workflow_id: 'publish-blog-post.yml',
      ref: 'master',
      inputs: {
        content_file: filePath,
        languages: languages,
        skip_quality_check: 'false',
        deploy_immediately: 'true'
      }
    });

    console.log('✅ Workflow triggered successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to trigger workflow:', error.message);
    return false;
  }
}

// Usage
const content = await generateBlogContent();
await publishBlogPost(content, 'clients/ing-heng/website/src/pages/en/blog/ai-post.astro');
```

### Option 3: Webhook Integration

Set up a webhook endpoint that receives AI-generated content:

```javascript
// Express.js webhook endpoint
app.post('/api/publish-content', async (req, res) => {
  const { content, title, language } = req.body;

  // Validate request
  if (!content || !title) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Generate filename from title
  const filename = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const filePath = `clients/ing-heng/website/src/pages/${language}/blog/${filename}.astro`;

  // Trigger workflow
  const result = await publishBlogPost(content, filePath, language);

  if (result) {
    res.json({
      success: true,
      message: 'Content published successfully',
      filePath,
      workflowUrl: `https://github.com/your-org/ing-heng-credit-seo/actions`
    });
  } else {
    res.status(500).json({
      success: false,
      error: 'Failed to publish content'
    });
  }
});
```

---

## Troubleshooting

### Common Issues

#### 1. Workflow Not Triggering

**Symptoms**: Workflow doesn't run after pushing changes

**Solutions**:
```bash
# Check workflow file syntax
cd .github/workflows
cat publish-blog-post.yml

# Verify file paths in triggers
# Ensure paths match your blog directory structure

# Check GitHub Actions permissions
# Settings → Actions → General → Workflow permissions
# Should be: "Read and write permissions"
```

#### 2. Quality Checks Failing

**Symptoms**: Quality checks fail with keyword density errors

**Solutions**:
```markdown
# Adjust keyword density
- Add more natural mentions of target keywords
- Use keyword variations and synonyms
- Ensure keywords appear in headings and first paragraph

# Improve readability
- Use shorter sentences (< 20 words)
- Break up long paragraphs
- Add bullet points and lists
- Replace complex words
```

#### 3. Deployment Failures

**Symptoms**: Vercel deployment fails

**Solutions**:
```bash
# Verify Vercel token
vercel whoami

# Check token in GitHub secrets
# Settings → Secrets → VERCEL_TOKEN

# Verify project IDs are correct
# .github/workflows/deploy-to-vercel.yml

# Test local build
cd clients/ing-heng/website
npm install
npm run build
```

#### 4. Sitemap Not Updating

**Symptoms**: Sitemap doesn't reflect new content

**Solutions**:
```bash
# Verify sitemap integration
# clients/ing-heng/website/astro.config.mjs
# Should have @astrojs/sitemap

# Check build output
npm run build
ls dist/sitemap*.xml

# Manually trigger sitemap update
# Actions → Update Sitemaps → Run workflow
```

#### 5. Environment Variables Not Working

**Symptoms**: Build fails with missing environment variables

**Solutions**:
```bash
# Verify Vercel env vars are set correctly
vercel env ls

# Check for trailing newlines (common issue!)
# Edit in Vercel dashboard, ensure no extra spaces

# Verify variable names match exactly
# PUBLIC_DEFAULT_LOCALE (not public_default_locale)
```

### Debug Mode

Enable workflow debugging:

1. Go to **Settings → Secrets**
2. Add secrets:
   ```
   ACTIONS_STEP_DEBUG = true
   ACTIONS_RUNNER_DEBUG = true
   ```
3. Re-run workflow
4. Check detailed logs

---

## Best Practices

### 1. Content Creation

**Blog Post Template:**

```astro
---
/**
 * [Language] Blog Post Template
 *
 * SEO Checklist:
 * - Primary keyword in title
 * - Keyword density 2-3%
 * - Readability score ≥ 60
 * - Include company facts
 * - Internal linking
 */

title: "Primary Keyword + Value Proposition"
description: "Compelling 150-160 character description with primary keyword"
keywords: ["primary keyword", "secondary keyword", "long-tail keyword"]
target_keywords: ["primary keyword", "secondary keyword"]
date: "2025-01-22"
author: "Ing Heng Credit Team"
category: "Equipment Financing Tips"
readTime: 7
image: "/images/blog/featured-image.jpg"
---

import BaseLayout from '../../../layouts/BaseLayout.astro';
import BlogPost from '../../../layouts/BlogPost.astro';

<BlogPost>

# H1 Title (Include Primary Keyword)

**Lead paragraph**: Introduce the topic with primary keyword in first 100 words.

## H2 Subheading (Use Secondary Keywords)

Content with natural keyword placement.

### Key Points

- Bullet point with keyword variation
- Value proposition
- Call to action

## H2 Another Section

More valuable content.

**Company credibility**: Mention Ing Heng Credit's 40+ years experience, KPKT license,
and track record of helping 4,000+ companies.

## Conclusion

Summarize key points and provide clear call to action.

**Contact us**: Link to contact page or WhatsApp.

</BlogPost>
```

### 2. Quality Standards

**Keyword Optimization:**
- ✅ Primary keyword: 2-3% density
- ✅ Secondary keywords: 1-2% density
- ✅ Long-tail keywords: Natural placement
- ❌ Keyword stuffing: Avoid repetition

**Readability:**
- ✅ Flesch score: 60-80 (Standard to Fairly Easy)
- ✅ Sentence length: Average 15-20 words
- ✅ Paragraph length: 3-4 sentences max
- ✅ Use bullet points and numbered lists

**Content Structure:**
- ✅ H1: One per page (main title)
- ✅ H2: 3-5 subheadings
- ✅ H3: Supporting points
- ✅ Images: Optimized with alt text
- ✅ Internal links: 2-3 relevant pages
- ✅ External links: 1-2 authoritative sources

### 3. Deployment Strategy

**Development Workflow:**
```
1. AI generates content
   ↓
2. Quality checks (automated)
   ↓
3. Create PR (automated)
   ↓
4. Human review (optional)
   ↓
5. Merge PR
   ↓
6. Deploy to Vercel (automated)
   ↓
7. Update sitemaps (automated)
   ↓
8. Submit to search engines (automated)
```

**For Critical Content:**
- Create PR for review
- Manual merge after approval
- Monitor deployment

**For Routine Updates:**
- Auto-deploy enabled
- Quality checks enforced
- Monitor via notifications

### 4. Monitoring

**Weekly Review:**
- [ ] Check workflow success rate
- [ ] Review quality check reports
- [ ] Monitor deployment status
- [ ] Verify sitemap submissions
- [ ] Check for 404 errors

**Monthly Review:**
- [ ] Analyze content performance
- [ ] Review keyword rankings
- [ ] Optimize quality thresholds
- [ ] Update templates
- [ ] Rotate Vercel tokens (security)

---

## Next Steps

### Immediate Actions

1. ✅ Complete GitHub secrets setup
2. ✅ Configure Vercel environment variables
3. ✅ Test workflow with sample content
4. ✅ Verify deployment to all 3 sites
5. ✅ Set up AI integration

### Future Enhancements

1. **Advanced Quality Checks**
   - Plagiarism detection
   - Fact-checking API integration
   - SEO score calculation
   - Image optimization

2. **Enhanced Automation**
   - Automatic image generation
   - Multi-language translation
   - A/B testing for titles
   - Performance monitoring

3. **Analytics Integration**
   - Google Analytics reporting
   - Search Console integration
   - Keyword ranking tracking
   - Traffic attribution

4. **Notification System**
   - Slack/Discord notifications
   - Email alerts for failures
   - Daily/weekly reports
   - Performance dashboards

---

## Support Resources

**Documentation:**
- GitHub Actions: https://docs.github.com/en/actions
- Vercel Deployment: https://vercel.com/docs
- Astro Framework: https://docs.astro.build

**Community:**
- GitHub Discussions: Enable for your repo
- Team Chat: Slack/Discord channel
- Issue Tracker: GitHub Issues

**Monitoring:**
- GitHub Actions Dashboard: Repository → Actions
- Vercel Dashboard: https://vercel.com/dashboard
- Google Search Console: https://search.google.com/search-console

---

**Last Updated**: 2025-01-22
**Version**: 1.0.0
**Maintained by**: Ing Heng Credit Development Team

For questions or issues, create a GitHub issue or contact the development team.
