# Multi-Language Deployment Guide

This guide explains how to deploy the Result Marketing website to Vercel with three separate language-specific projects.

## Architecture Overview

**Single Codebase, Multiple Deployments:**
- One GitHub repository contains all language versions
- Three separate Vercel projects (English, Malay, Chinese)
- Each project reads `PUBLIC_DEFAULT_LOCALE` environment variable
- Users access their language via different domains

**Deployment Strategy:**
- Manual CLI deployments (no GitHub auto-deploy)
- Each deployment targets a specific Vercel project
- Environment variables configure language per project

## Prerequisites

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Verify Repository Structure
Ensure you're in the correct directory:
```bash
cd clients/result-marketing/website
pwd  # Should end with: /clients/result-marketing/website
```

## Vercel Project Setup

### Project IDs

You'll need to create three Vercel projects (one per language):

| Language | Domain | Project ID | Status |
|----------|--------|------------|--------|
| English (EN) | www.resultmarketing.my | `[TO BE CREATED]` | Pending |
| Malay (MS) | ms.resultmarketing.my | `[TO BE CREATED]` | Pending |
| Chinese (ZH) | zh.resultmarketing.my | `[TO BE CREATED]` | Pending |

**Team/Organization ID**: `[TO BE CREATED]`

### Creating Projects

**Option A: Via Vercel Dashboard**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Create three separate projects:
   - `result-marketing-en`
   - `result-marketing-ms`
   - `result-marketing-zh`
3. **Important**: Do NOT connect to GitHub (we deploy via CLI)
4. Note each project's Project ID from Settings → General
5. Configure environment variables (see section below)

**Option B: Via CLI (First Deployment)**

```bash
# First deployment will create the project
vercel --prod --yes

# After creation, note the Project ID from the output
# Update .vercel/project.json with the IDs
```

## Environment Variables

Each Vercel project MUST have these environment variables configured:

### English Project (EN)
```bash
PUBLIC_DEFAULT_LOCALE=en
DEFAULT_LOCALE=en
PUBLIC_SITE_URL=https://www.resultmarketing.my
SITE_URL=https://www.resultmarketing.my
```

### Malay Project (MS)
```bash
PUBLIC_DEFAULT_LOCALE=ms
DEFAULT_LOCALE=ms
PUBLIC_SITE_URL=https://ms.resultmarketing.my
SITE_URL=https://ms.resultmarketing.my
```

### Chinese Project (ZH)
```bash
PUBLIC_DEFAULT_LOCALE=zh
DEFAULT_LOCALE=zh
PUBLIC_SITE_URL=https://zh.resultmarketing.my
SITE_URL=https://zh.resultmarketing.my
```

**Setting Variables via Dashboard:**

1. Go to project Settings → Environment Variables
2. Add each variable
3. Select "Production" scope
4. **Important**: Ensure NO trailing spaces or newlines
5. Save changes

**Setting Variables via CLI:**
```bash
# Format: vercel env add VARIABLE_NAME production
vercel env add PUBLIC_DEFAULT_LOCALE production
# Enter value when prompted
```

## Deployment Process

### Step 1: Update .vercel/project.json

Before each deployment, update the `.vercel/project.json` file to target the correct project:

**For English (EN):**
```bash
echo '{"projectId":"[EN_PROJECT_ID]","orgId":"[YOUR_ORG_ID]"}' > .vercel/project.json
```

**For Malay (MS):**
```bash
echo '{"projectId":"[MS_PROJECT_ID]","orgId":"[YOUR_ORG_ID]"}' > .vercel/project.json
```

**For Chinese (ZH):**
```bash
echo '{"projectId":"[ZH_PROJECT_ID]","orgId":"[YOUR_ORG_ID]"}' > .vercel/project.json
```

### Step 2: Deploy to Production

Deploy with environment variables inline:

**Deploy English (EN):**
```bash
cd clients/result-marketing/website

# Update project.json
echo '{"projectId":"[EN_PROJECT_ID]","orgId":"[YOUR_ORG_ID]"}' > .vercel/project.json

# Deploy with EN environment variables
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://www.resultmarketing.my \
  --env SITE_URL=https://www.resultmarketing.my
```

**Deploy Malay (MS):**
```bash
cd clients/result-marketing/website

# Update project.json
echo '{"projectId":"[MS_PROJECT_ID]","orgId":"[YOUR_ORG_ID]"}' > .vercel/project.json

# Deploy with MS environment variables
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://ms.resultmarketing.my \
  --env SITE_URL=https://ms.resultmarketing.my
```

**Deploy Chinese (ZH):**
```bash
cd clients/result-marketing/website

# Update project.json
echo '{"projectId":"[ZH_PROJECT_ID]","orgId":"[YOUR_ORG_ID]"}' > .vercel/project.json

# Deploy with ZH environment variables
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://zh.resultmarketing.my \
  --env SITE_URL=https://zh.resultmarketing.my
```

### Step 3: Deploy All Languages (Script)

**Automated Deployment Script:**

Create a deployment script `deploy-all.sh`:

```bash
#!/bin/bash

# Result Marketing Multi-Language Deployment Script
# Usage: ./deploy-all.sh

set -e  # Exit on any error

PROJECT_DIR="clients/result-marketing/website"
ORG_ID="[YOUR_ORG_ID]"

# Project IDs
EN_PROJECT_ID="[EN_PROJECT_ID]"
MS_PROJECT_ID="[MS_PROJECT_ID]"
ZH_PROJECT_ID="[ZH_PROJECT_ID]"

echo "🚀 Starting Result Marketing Multi-Language Deployment..."
echo ""

cd "$PROJECT_DIR"

# 1. Deploy English (EN)
echo "📦 Deploying English (EN) to www.resultmarketing.my..."
echo "{\"projectId\":\"$EN_PROJECT_ID\",\"orgId\":\"$ORG_ID\"}" > .vercel/project.json

vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://www.resultmarketing.my \
  --env SITE_URL=https://www.resultmarketing.my

echo "✅ English deployment complete!"
echo ""

# 2. Deploy Malay (MS)
echo "📦 Deploying Malay (MS) to ms.resultmarketing.my..."
echo "{\"projectId\":\"$MS_PROJECT_ID\",\"orgId\":\"$ORG_ID\"}" > .vercel/project.json

vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://ms.resultmarketing.my \
  --env SITE_URL=https://ms.resultmarketing.my

echo "✅ Malay deployment complete!"
echo ""

# 3. Deploy Chinese (ZH)
echo "📦 Deploying Chinese (ZH) to zh.resultmarketing.my..."
echo "{\"projectId\":\"$ZH_PROJECT_ID\",\"orgId\":\"$ORG_ID\"}" > .vercel/project.json

vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://zh.resultmarketing.my \
  --env SITE_URL=https://zh.resultmarketing.my

echo "✅ Chinese deployment complete!"
echo ""

echo "🎉 All deployments successful!"
echo ""
echo "URLs:"
echo "  EN: https://www.resultmarketing.my"
echo "  MS: https://ms.resultmarketing.my"
echo "  ZH: https://zh.resultmarketing.my"
```

**Usage:**
```bash
chmod +x deploy-all.sh
./deploy-all.sh
```

## Domain Configuration

### Vercel Dashboard Setup

For each project, configure the domain:

**English Project (EN):**
- Primary: `www.resultmarketing.my`
- Redirect: `resultmarketing.my` → `www.resultmarketing.my`

**Malay Project (MS):**
- Primary: `ms.resultmarketing.my`

**Chinese Project (ZH):**
- Primary: `zh.resultmarketing.my`

### DNS Configuration

Add these records to your DNS provider:

```
# English (EN)
A     @              76.76.21.21
CNAME www            cname.vercel-dns.com

# Malay (MS)
CNAME ms             cname.vercel-dns.com

# Chinese (ZH)
CNAME zh             cname.vercel-dns.com
```

**Note**: DNS propagation can take 24-48 hours.

## Verification

After deployment, verify each language version:

### 1. Check Homepage Redirect
```bash
curl -I https://www.resultmarketing.my/
# Should redirect to /en/
```

### 2. Check Language-Specific Content
```bash
# English
curl https://www.resultmarketing.my/en/ | grep "<html lang=\"en\""

# Malay
curl https://ms.resultmarketing.my/ms/ | grep "<html lang=\"ms\""

# Chinese
curl https://zh.resultmarketing.my/zh/ | grep "<html lang=\"zh\""
```

### 3. Check Sitemap
```bash
curl https://www.resultmarketing.my/sitemap-0.xml | grep "<loc>"
# Should only contain /en/ URLs
```

### 4. Check Build Logs
```bash
vercel logs [deployment-url]
```

## Rollback Procedure

If a deployment fails or has issues:

### Option A: Rollback via Dashboard
1. Go to project Deployments page
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

### Option B: Rollback via CLI
```bash
# List recent deployments
vercel ls

# Promote a specific deployment
vercel promote [deployment-url] --prod
```

## Troubleshooting

### Issue: Wrong language showing

**Cause**: Environment variables not set correctly

**Solution**:
1. Check Vercel Dashboard → Project Settings → Environment Variables
2. Verify `PUBLIC_DEFAULT_LOCALE` matches expected language
3. Redeploy after fixing variables

### Issue: 404 errors on pages

**Cause**: Build output missing pages

**Solution**:
```bash
# Test build locally
npm run build
npm run preview

# Check dist/ folder contents
ls -la dist/en/
ls -la dist/ms/
ls -la dist/zh/
```

### Issue: Sitemap contains all languages

**Cause**: Sitemap filter not working

**Solution**:
1. Check `astro.config.mjs` sitemap filter
2. Verify `DEFAULT_LOCALE` is set correctly
3. Rebuild and redeploy

### Issue: Environment variables not available

**Cause**: Variables set in wrong scope or misspelled

**Solution**:
1. Variables must be prefixed with `PUBLIC_` for client-side
2. Variables must be set in "Production" scope
3. Restart dev server after changing `.env`

### Issue: Deployment fails with "Project not found"

**Cause**: `.vercel/project.json` has wrong Project ID

**Solution**:
1. Get correct Project ID from Vercel Dashboard
2. Update `.vercel/project.json`
3. Try deployment again

### Issue: Build exceeds time limit

**Cause**: Too many pages or heavy processing

**Solution**:
1. Check build output for warnings
2. Optimize images in `public/` folder
3. Consider splitting into incremental deployments

## Monitoring

### Vercel Analytics

Each project has Vercel Web Analytics enabled:

1. Go to project Analytics tab
2. View metrics:
   - Page views
   - Visitors
   - Performance scores
   - Geographic distribution

### Build Notifications

Set up build notifications:

1. Go to Project Settings → Notifications
2. Add notification webhook or email
3. Choose events: "Deployment Failed", "Deployment Ready"

## Best Practices

### Before Deploying

- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Run type checking: `npm run check`
- [ ] Verify environment variables are correct
- [ ] Check content is up to date
- [ ] Review recent code changes

### During Deployment

- [ ] Update `.vercel/project.json` for correct project
- [ ] Deploy one language at a time
- [ ] Monitor build logs for errors
- [ ] Wait for deployment to complete before next one

### After Deployment

- [ ] Test each language homepage
- [ ] Verify navigation works
- [ ] Check blog pages render correctly
- [ ] Test contact forms
- [ ] Review performance metrics
- [ ] Check sitemap content

## CI/CD Automation (Future)

While currently using manual deployments, you can automate with GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [master]
    paths:
      - 'clients/result-marketing/website/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        locale: [en, ms, zh]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Deploy ${{ matrix.locale }}
        run: |
          # Deployment script here
```

## Support

For deployment issues:
- Check Vercel Status: [vercel-status.com](https://vercel-status.com)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Internal Support: dev-team@resultmarketing.my

---

**Last Updated**: January 2025
**Deployment Method**: Manual CLI via Vercel
**Projects**: 3 (EN, MS, ZH)
