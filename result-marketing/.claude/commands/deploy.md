---
description: Deploy website with Playwright QA verification (zero 404s policy)
---

# Deploy Command

You are the **Result Marketing Deployment Agent**. Your job is to deploy the website safely with automatic QA testing.

## Your Mission

1. **Check what changed** - Show files to be deployed
2. **Build the site** - Run Astro build
3. **Run Playwright QA** - Check ALL links (zero 404s)
4. **Update sitemap** - Auto-generate from content
5. **Deploy if QA passes** - Only deploy when no broken links
6. **Report results** - Show live URLs

---

## Process

### Step 1: Pre-Flight Check

```bash
cd result-marketing/website
git status
```

**Show user:**
- What files changed
- Estimated build time
- Ask for confirmation

---

### Step 2: Build Site

```bash
npm run build
```

**If build fails:**
```
❌ Build Failed!

Error: [show error]

Likely cause: [diagnose]

Options:
1. Show me the error
2. Try to fix it
3. Cancel deployment
```

**If build succeeds:**
Continue to QA.

---

### Step 3: Playwright QA (Critical)

**Run sitemap checker:**

```bash
# Start local server for testing
npx serve dist --listen 3000 &

# Run Playwright to check all links
npx playwright test sitemap-check.spec.ts
```

**What Playwright checks:**
- All internal links return 200 OK
- No 404 errors
- No redirects to non-existent pages
- Images load correctly
- Meta tags present on all pages

**If QA fails:**
```
❌ QA Failed - Broken Links Found!

Issues:
  - /blog/missing-page → 404
  - /services/xyz → 404

Zero 404 Policy: Cannot deploy with broken links.

Options:
1. Fix broken pages first
2. Remove broken links
3. Cancel deployment
```

**If QA passes:**
Continue to deployment.

---

### Step 4: Deploy to Vercel

```bash
vercel --prod
```

**Monitor deployment:**
- Show build progress
- Extract deployment URL
- Verify no errors

---

### Step 5: Final Verification

**Test live site:**

```bash
# Test all language routes
curl -I https://[deployment-url]/en/
curl -I https://[deployment-url]/ms/
curl -I https://[deployment-url]/zh/

# Test new content pages
curl -I https://[deployment-url]/blog/[new-post]
```

---

### Step 6: Success Report

```
🎉 Deployment Complete!

✅ Build: Success
✅ QA: All links working (zero 404s)
✅ Deployed: Live

📊 Summary:
   - Files changed: N
   - Pages added: N
   - Build time: X min
   - QA time: X min

🌐 Live URLs:
   - EN: https://[domain]/en/
   - MS: https://[domain]/ms/
   - ZH: https://[domain]/zh/

📝 New Content:
   - [Page 1] → https://[domain]/[url]
   - [Page 2] → https://[domain]/[url]

📈 SEO:
   - Sitemap updated: ✅
   - Meta tags verified: ✅
   - Internal links: ✅

🔗 Next Steps:
   - Test the live site
   - Check analytics in 24h
   - Monitor search indexing

---
Deployment completed in X minutes
All systems operational ✅
```

---

## Zero 404 Policy (CRITICAL)

**Never deploy if:**
- Any internal link returns 404
- Sitemap references non-existent pages
- New content not added to sitemap
- Images are broken

**Always:**
- Run Playwright QA before deploy
- Check sitemap completeness
- Verify all language routes
- Test new content pages

---

## Sitemap Auto-Generation

**The sitemap is generated from content automatically.**

When content is added to `content/complete/`:
1. Build process scans all markdown files
2. Astro generates sitemap.xml
3. All published content included
4. No manual tracking needed

**Sitemap configuration (astro.config.mjs):**
```javascript
sitemap({
  hostname: SITE_URL,
  buildSitemap: true,
})
```

---

## Error Recovery

### Build Error

```
❌ Build Failed: SyntaxError in Hero.astro:45

This looks like a syntax error.

Should I:
1. Show you the problematic code
2. Try to fix it automatically
3. Revert to last working version
```

### QA Failure

```
❌ QA Found 3 Broken Links:

1. /blog/excavator-guide → 404
2. /services/xyz → 404
3. /case-studies/missing → 404

Likely causes:
- Pages deleted but still linked
- Slug mismatch
- Case sensitivity

Options:
1. Fix broken pages
2. Remove broken links
3. Cancel deployment
```

### Deploy Failure

```
❌ Vercel Deploy Failed

Error: [vercel error]

Should I:
1. Retry deployment
2. Check Vercel dashboard
3. Roll back to previous version
```

---

## Deployment History

Auto-log to: `content/memory/deployments.md`

```markdown
## [DATE] - Deployment Summary

- **Status:** Success
- **Files changed:** N
- **Pages added:** N
- **Build time:** X min
- **QA result:** Pass (0 broken links)
- **Deployed by:** [User]

### Changes:
- content/complete/[post-1].md
- content/complete/[post-2].md

### URLs:
- https://[domain]/[url-1]
- https://[domain]/[url-2]
```

---

## Quick Reference

```bash
# Full deployment (most common)
/deploy

# Just build (no deploy)
"Build the site"

# Just QA (no deploy)
"Run QA tests"

# Check what changed
"What's the deployment status?"
```

---

## Safety Checklist

Before deploying, verify:

- [ ] Build succeeds without errors
- [ ] Playwright QA passes (zero 404s)
- [ ] Sitemap includes all pages
- [ ] All language routes work
- [ ] New content pages load
- [ ] No broken internal links
- [ ] Meta tags present
- [ ] Images load correctly

**If any item fails:** Stop and ask user what to do.

---

## Multilingual Deployment

Result Marketing uses ONE Vercel project with 3 languages:

**Structure:**
```
website/
├── src/pages/
│   ├── en/          ← English pages
│   ├── ms/          ← Malay pages
│   └── zh/          ← Chinese pages
```

**After deploy, test:**
```bash
# EN
curl -I https://[domain]/en/

# MS
curl -I https://[domain]/ms/

# ZH
curl -I https://[domain]/zh/
```

**All must return 200 OK.**

---

**Remember:** Zero 404s is our goal. Deploy only when QA passes.
