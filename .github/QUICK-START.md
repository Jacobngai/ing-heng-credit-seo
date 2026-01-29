# Quick Start Guide - GitHub Actions Automation

Get started with automated content publishing in 5 minutes.

## Prerequisites

- GitHub repository access
- Vercel account with 3 projects set up
- Vercel API token

## Setup (One-Time)

### 1. Add GitHub Secrets (2 minutes)

```bash
# Go to: Settings → Secrets and variables → Actions → New repository secret

Secret 1:
Name: VERCEL_TOKEN
Value: [Paste your Vercel token from https://vercel.com/account/tokens]

Secret 2:
Name: VERCEL_ORG_ID
Value: team_ZRACGuujUQkB6IRfNtWpe0T6
```

### 2. Verify Vercel Environment Variables (1 minute)

Each Vercel project should have these variables set:

**EN Project:**
```
PUBLIC_DEFAULT_LOCALE = en
DEFAULT_LOCALE = en
PUBLIC_SITE_URL = https://www.inghengcredit.com
SITE_URL = https://www.inghengcredit.com
```

**MS Project:**
```
PUBLIC_DEFAULT_LOCALE = ms
DEFAULT_LOCALE = ms
PUBLIC_SITE_URL = https://www.kreditloan.my
SITE_URL = https://www.kreditloan.my
```

**ZH Project:**
```
PUBLIC_DEFAULT_LOCALE = zh
DEFAULT_LOCALE = zh
PUBLIC_SITE_URL = https://www.inghengcredit.my
SITE_URL = https://www.inghengcredit.my
```

## Usage

### Method 1: Manual Trigger (Easiest)

1. Go to **Actions** tab in GitHub
2. Click **Publish Blog Post**
3. Click **Run workflow**
4. Fill in:
   ```
   content_file: clients/ing-heng/website/src/pages/en/blog/your-post.astro
   languages: all
   skip_quality_check: false
   deploy_immediately: true
   ```
5. Click **Run workflow**

**Done!** The system will:
- ✅ Run quality checks
- ✅ Create PR (if needed)
- ✅ Deploy to Vercel
- ✅ Update sitemaps
- ✅ Submit to Google

### Method 2: Git Push (Automatic)

1. Create/edit blog post:
   ```bash
   # Create new post
   cp template.astro clients/ing-heng/website/src/pages/en/blog/new-post.astro

   # Edit the file
   code clients/ing-heng/website/src/pages/en/blog/new-post.astro
   ```

2. Commit and push:
   ```bash
   git add .
   git commit -m "feat: Add new blog post"
   git push origin master
   ```

3. Create Pull Request:
   - Quality checks run automatically
   - Review quality report in PR comments
   - Merge when ready

**Done!** Deployment triggers on merge.

### Method 3: API Integration (For AI)

```javascript
// Using Octokit (Node.js)
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: 'your_github_token' });

await octokit.rest.actions.createWorkflowDispatch({
  owner: 'your-org',
  repo: 'ing-heng-credit-seo',
  workflow_id: 'publish-blog-post.yml',
  ref: 'master',
  inputs: {
    content_file: 'clients/ing-heng/website/src/pages/en/blog/ai-post.astro',
    languages: 'all',
    skip_quality_check: 'false',
    deploy_immediately: 'true'
  }
});
```

## Blog Post Template

Use this template for new posts:

```astro
---
title: "Your SEO-Optimized Title Here"
description: "Compelling 150-160 character meta description with primary keyword"
keywords: ["primary keyword", "secondary keyword", "long-tail keyword"]
target_keywords: ["primary keyword", "secondary keyword"]
date: "2025-01-22"
author: "Ing Heng Credit Team"
category: "Equipment Financing Tips"
readTime: 7
---

import BaseLayout from '../../../layouts/BaseLayout.astro';

<BaseLayout title={frontmatter.title} description={frontmatter.description}>

# Your Main Title (H1)

Opening paragraph with primary keyword in first 100 words...

## Subheading (H2)

Content with natural keyword placement (2-3% density).

### Key Points

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Another Section

More valuable content...

Include company credibility: Ing Heng Credit has 40+ years of experience,
is licensed by KPKT, and has helped over 4,000+ companies.

## Conclusion

Summary and call to action...

</BaseLayout>
```

## Quality Standards

Your content must meet these criteria:

| Check | Target | Status |
|-------|--------|--------|
| Keyword Density | 2-3% | Auto-checked |
| Readability Score | ≥ 60 (Flesch) | Auto-checked |
| Link Validation | All valid | Auto-checked |
| Company Facts | Present | Auto-checked |

**If quality checks fail:**
- Review the quality report
- Adjust content as needed
- Re-run workflow

## Monitoring

**Check workflow status:**
- Go to: **Actions** tab
- View recent runs
- Click on run for details

**Check deployment:**
- EN: https://www.inghengcredit.com
- MS: https://www.kreditloan.my
- ZH: https://www.inghengcredit.my

**Check sitemaps:**
- EN: https://www.inghengcredit.com/sitemap-index.xml
- MS: https://www.kreditloan.my/sitemap-index.xml
- ZH: https://www.inghengcredit.my/sitemap-index.xml

## Troubleshooting

### Workflow Failed

**Check logs:**
1. Go to Actions tab
2. Click failed workflow run
3. Expand failed step
4. Read error message

**Common issues:**
- Missing file: Check file path
- Quality check failed: Review quality report
- Build error: Check syntax in blog post
- Deployment failed: Verify Vercel token

### Quality Checks Failed

**Keyword density too low (<2%):**
```
Solution: Add more natural mentions of target keywords
- Include in headings
- Mention in introduction
- Use variations throughout
```

**Keyword density too high (>3%):**
```
Solution: Reduce keyword repetition
- Use synonyms
- Focus on natural writing
- Remove forced insertions
```

**Readability too low (<60):**
```
Solution: Simplify content
- Shorter sentences
- Smaller paragraphs
- More bullet points
- Simpler words
```

## Need Help?

**Documentation:**
- Full guide: `GITHUB-ACTIONS-IMPLEMENTATION-GUIDE.md`
- Workflow docs: `.github/workflows/README.md`

**Support:**
- Create GitHub issue
- Check workflow logs
- Contact dev team

---

## Next Steps

1. ✅ Complete setup (secrets + env vars)
2. ✅ Test with sample content
3. ✅ Review quality reports
4. ✅ Set up AI integration
5. ✅ Monitor deployments

**Ready to publish?** Go to Actions → Publish Blog Post → Run workflow

---

*Last updated: 2025-01-22*
