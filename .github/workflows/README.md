# GitHub Actions Automation Workflows

Complete automation system for the Ing Heng Credit multi-language Astro website.

## Overview

This automation system handles:
- ✅ Content quality validation (keyword density, readability, fact-checking)
- 🚀 Automated deployment to 3 Vercel projects (EN, MS, ZH)
- 🗺️ Sitemap generation and submission to search engines
- 🔄 Automated PR creation and merging
- 📊 Quality reports and deployment summaries

## Workflows

### 1. `content-quality-check.yml`

**Purpose**: Validates blog post content quality before publishing

**Triggers**: Called by other workflows

**Quality Gates**:
- **Keyword Density**: 2-3% (optimal range)
- **Readability Score**: Flesch Reading Ease ≥ 60 (Standard/Fairly Easy)
- **Link Validation**: Checks all URLs in content
- **Fact Verification**: Validates key company facts

**Inputs**:
- `file_path`: Path to content file
- `language`: Language code (en, ms, zh)

**Outputs**:
- `passed`: Boolean indicating if all checks passed
- `report`: JSON report with detailed metrics

### 2. `publish-blog-post.yml`

**Purpose**: Main workflow for publishing new blog posts

**Triggers**:
- **Manual**: `workflow_dispatch` with custom inputs
- **Automatic**: Pull requests modifying blog files

**Process**:
1. Detect affected languages
2. Run quality checks for each language
3. Create feature branch and PR
4. Auto-merge if quality checks pass (optional)
5. Trigger deployment to Vercel
6. Update sitemaps

**Inputs** (Manual Trigger):
- `content_file`: Path to blog post file
- `languages`: Languages to publish (all, en, ms, zh, or combinations)
- `skip_quality_check`: Skip quality gates (not recommended)
- `deploy_immediately`: Auto-deploy after merge

### 3. `deploy-to-vercel.yml`

**Purpose**: Deploy to Vercel production for each language

**Triggers**:
- Called by `publish-blog-post.yml`
- Manual trigger via `workflow_dispatch`

**Process**:
- Deploys to 3 separate Vercel projects:
  - **EN**: https://www.inghengcredit.com (prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw)
  - **MS**: https://www.kreditloan.my (prj_eKJtQcTcOd69sER92xq8NeS1SD4y)
  - **ZH**: https://www.inghengcredit.my (prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7)

**Environment Variables** (per project):
- `PUBLIC_DEFAULT_LOCALE`: Language code
- `DEFAULT_LOCALE`: Language code
- `PUBLIC_SITE_URL`: Production URL
- `SITE_URL`: Production URL

### 4. `update-sitemaps.yml`

**Purpose**: Regenerate sitemaps and submit to search engines

**Triggers**:
- Called after successful deployment
- Manual trigger
- Scheduled: Weekly on Mondays at 00:00 UTC

**Process**:
1. Build site for each language
2. Extract generated sitemaps
3. Validate XML structure
4. Submit to Google Search Console
5. Submit to Bing Webmaster

## Setup Instructions

### 1. GitHub Secrets

Add these secrets to your repository:

**Settings → Secrets and variables → Actions → New repository secret**

```
VERCEL_TOKEN          = [Your Vercel token]
VERCEL_ORG_ID         = team_ZRACGuujUQkB6IRfNtWpe0T6
```

**How to get Vercel Token**:
1. Go to https://vercel.com/account/tokens
2. Create new token
3. Name it "GitHub Actions"
4. Copy and save as secret

### 2. Vercel Project Configuration

Each Vercel project must have environment variables configured:

**EN Project** (www.inghengcredit.com):
```
PUBLIC_DEFAULT_LOCALE = en
DEFAULT_LOCALE = en
PUBLIC_SITE_URL = https://www.inghengcredit.com
SITE_URL = https://www.inghengcredit.com
```

**MS Project** (www.kreditloan.my):
```
PUBLIC_DEFAULT_LOCALE = ms
DEFAULT_LOCALE = ms
PUBLIC_SITE_URL = https://www.kreditloan.my
SITE_URL = https://www.kreditloan.my
```

**ZH Project** (www.inghengcredit.my):
```
PUBLIC_DEFAULT_LOCALE = zh
DEFAULT_LOCALE = zh
PUBLIC_SITE_URL = https://www.inghengcredit.my
SITE_URL = https://www.inghengcredit.my
```

### 3. Google Search Console (Optional)

For advanced sitemap submission with authentication:

1. Create service account in Google Cloud Console
2. Download credentials JSON
3. Add as GitHub secret: `GOOGLE_SEARCH_CONSOLE_CREDENTIALS`
4. Update `update-sitemaps.yml` to use authenticated submission

## Usage

### Publishing a New Blog Post

#### Option 1: Manual Trigger (Recommended for AI-Generated Content)

1. Navigate to **Actions** tab
2. Select **Publish Blog Post** workflow
3. Click **Run workflow**
4. Fill in parameters:
   - **content_file**: `clients/ing-heng/website/src/pages/en/blog/my-new-post.astro`
   - **languages**: `all` (or specific: `en,ms` or `en`)
   - **skip_quality_check**: `false` (recommended)
   - **deploy_immediately**: `true` (auto-deploy) or `false` (manual review)

5. Click **Run workflow**

**What happens**:
- ✅ Quality checks run automatically
- ✅ Creates PR if checks pass
- ✅ Auto-merges if `deploy_immediately=true`
- ✅ Deploys to Vercel
- ✅ Updates sitemaps
- ✅ Submits to search engines

#### Option 2: Pull Request (Manual Review)

1. Create feature branch
2. Add/edit blog posts
3. Push to GitHub
4. Create Pull Request
5. Quality checks run automatically
6. Review quality report in PR comments
7. Merge PR manually
8. Deployment triggers automatically

### Viewing Reports

**Quality Check Reports**:
- View in PR comments
- Download artifacts from workflow run
- Check step logs for detailed metrics

**Deployment Reports**:
- View in workflow summary
- Check deployment URLs
- Verify each language deployment

**Sitemap Reports**:
- View in workflow summary
- Download sitemap artifacts
- Check submission status

## Quality Gates Details

### Keyword Density Check

**Target**: 2-3% for primary keywords

**How it works**:
- Extracts keywords from frontmatter
- Counts occurrences in content
- Calculates density percentage
- Flags if outside optimal range

**Status**:
- ✅ **Optimal**: 2-3%
- ⚠️ **Low**: < 2%
- ❌ **High**: > 3% (keyword stuffing)

### Readability Score

**Target**: ≥ 60 (Flesch Reading Ease)

**Scale**:
- 90-100: Very Easy (5th grade)
- 80-90: Easy (6th grade)
- 70-80: Fairly Easy (7th grade)
- 60-70: Standard (8th-9th grade) ✅
- 50-60: Fairly Difficult (10th-12th grade) ⚠️
- 30-50: Difficult (College) ❌
- 0-30: Very Confusing (College graduate) ❌

**Interpretation**:
- **60+**: ✅ Good - Easy to read
- **50-59**: ⚠️ Acceptable - Consider simplifying
- **<50**: ❌ Too difficult - Must simplify

### Link Validation

**Checks**:
- All internal and external links
- Returns HTTP status codes
- Identifies broken links
- Configurable retry logic

### Fact Verification

**Verifies**:
- Company name: "Ing Heng Credit"
- Years of experience: "40+ years"
- License: "KPKT"
- Track record: "4,000+ companies"

**Note**: This is a basic pattern-matching check. For advanced fact verification, integrate with AI fact-checking services.

## Best Practices

### 1. Content Creation

**Blog Post Template**:
```astro
---
title: "Your SEO-Optimized Title"
description: "Compelling meta description"
keywords: ["primary keyword", "secondary keyword", "long-tail keyword"]
target_keywords: ["equipment financing", "Malaysia", "contractor"]
date: "2025-01-22"
author: "Ing Heng Credit Team"
category: "Equipment Financing Tips"
readTime: 8
---

[Your content here]
```

**Tips**:
- Use target keywords naturally (2-3% density)
- Write in simple, clear language (Flesch ≥ 60)
- Include company facts and credentials
- Add internal links to related content
- Use short paragraphs and bullet points

### 2. Quality Check Workflow

1. **Write content** with AI or manual writing
2. **Test locally** for formatting
3. **Run workflow** with quality checks
4. **Review report** and fix issues
5. **Deploy** when checks pass

### 3. Deployment Strategy

**For critical content**:
- Use `deploy_immediately: false`
- Review quality report
- Manual merge after approval

**For routine updates**:
- Use `deploy_immediately: true`
- Auto-deploy if quality checks pass
- Monitor deployment status

### 4. Sitemap Management

**Automatic updates**:
- After each deployment
- Weekly scheduled run
- Ensures search engines have latest URLs

**Manual trigger**:
- Use when major site changes occur
- Re-submit after fixing 404 errors

## Troubleshooting

### Quality Check Failures

**Keyword Density Too Low**:
```
Solution: Add more natural mentions of target keywords
- Include keywords in headings
- Use keywords in first paragraph
- Add keyword variations
```

**Keyword Stuffing (Density Too High)**:
```
Solution: Reduce keyword repetition
- Use synonyms and variations
- Focus on natural writing
- Remove forced keyword insertions
```

**Low Readability Score**:
```
Solution: Simplify content
- Use shorter sentences
- Break up long paragraphs
- Add bullet points and lists
- Replace complex words with simpler alternatives
```

### Deployment Failures

**Vercel Token Invalid**:
```
Solution: Regenerate token
1. Create new token in Vercel dashboard
2. Update VERCEL_TOKEN secret in GitHub
3. Re-run workflow
```

**Build Errors**:
```
Solution: Check build logs
1. Review error messages in workflow logs
2. Test build locally: npm run build
3. Fix syntax errors or missing dependencies
4. Push fixes and re-run
```

### Sitemap Submission Issues

**Sitemap Not Found**:
```
Solution: Verify sitemap generation
1. Check build output for sitemap files
2. Verify Astro sitemap integration is enabled
3. Check vercel.json configuration
```

**Google Search Console Rejection**:
```
Solution: Validate sitemap
1. Check sitemap at https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Ensure all URLs are accessible
3. Fix any 404 errors
4. Re-submit
```

## Monitoring and Analytics

### GitHub Actions Dashboard

**View workflow runs**:
- Go to **Actions** tab
- Filter by workflow name
- Check status and logs

### Workflow Metrics

**Track**:
- Success rate of quality checks
- Deployment frequency
- Average deployment time
- Failed checks and reasons

### Quality Trends

**Monitor**:
- Keyword density trends
- Readability score improvements
- Common quality issues
- Content optimization patterns

## Advanced Configuration

### Custom Quality Rules

Edit `.github/workflows/content-quality-check.yml`:

```javascript
// Adjust keyword density targets
const MIN_DENSITY = 2.0; // Lower bound
const MAX_DENSITY = 3.0; // Upper bound

// Adjust readability threshold
const MIN_READABILITY = 60; // Minimum acceptable score
```

### Custom Deployment Environments

Add staging environments:

```yaml
deploy-staging:
  environment:
    name: staging
    url: https://staging.inghengcredit.com
```

### Notifications

Add Slack/Discord notifications:

```yaml
- name: Notify on success
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "✅ Blog post deployed successfully"
      }
```

## Integration with AI Content Generation

### Recommended Workflow

1. **AI generates content** (ChatGPT, Claude, etc.)
2. **AI commits to GitHub** (via GitHub API)
3. **Workflow automatically triggers**
4. **Quality checks validate content**
5. **Auto-deploy if checks pass**

### GitHub API Integration

```javascript
// Example: Commit content via GitHub API
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

await octokit.rest.repos.createOrUpdateFileContents({
  owner: 'your-org',
  repo: 'ing-heng-credit-seo',
  path: 'clients/ing-heng/website/src/pages/en/blog/new-post.astro',
  message: 'feat: Add AI-generated blog post',
  content: Buffer.from(content).toString('base64'),
  branch: 'main'
});
```

## Security Considerations

### Secrets Management

- ✅ Use GitHub Secrets for sensitive data
- ✅ Rotate Vercel tokens regularly
- ✅ Use environment-specific secrets
- ❌ Never commit secrets to repository

### Access Control

- ✅ Require PR reviews for manual merges
- ✅ Use protected branches
- ✅ Limit workflow permissions
- ✅ Enable branch protection rules

### Content Validation

- ✅ Always run quality checks
- ✅ Review AI-generated content
- ✅ Validate external links
- ✅ Check for malicious content

## Support

**Issues?**
- Check workflow logs for errors
- Review troubleshooting section
- Create GitHub issue with details

**Questions?**
- Review documentation
- Check workflow comments
- Contact development team

---

**Last Updated**: 2025-01-22
**Version**: 1.0.0
**Maintained by**: Ing Heng Credit Development Team
