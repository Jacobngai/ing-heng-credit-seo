# Command ⑬ /13-deploy-multilang

**Phase:** PUBLISH
**Primary Agent:** publishing
**Time:** 15 minutes (AI working)

## Purpose
Deploy the same codebase to 3 separate Vercel projects with different environment variables for EN, MS, and ZH versions.

## Prerequisites

✅ **Required files from ⑫ /12-translate-content:**
- English pages in `/en/` directory
- Malay pages in `/ms/` directory
- Chinese pages in `/zh/` directory
- Hreflang tags implemented

✅ **Required configuration:**
- Vercel CLI installed
- 3 Vercel project IDs configured
- Team ID configured

### Validation Check
```
❌ If translations missing:
→ Go back: Run ⑫ /12-translate-content first

❌ If Vercel CLI not configured:
→ Setup: Install Vercel CLI, authenticate, configure project IDs

Check:
✅ clients/[client-name]/website/src/pages/ms/ has content
✅ clients/[client-name]/website/src/pages/zh/ has content
✅ .vercel/project.json exists
```

## What This Command Does

The **publishing** agent will:

1. **Validate Prerequisites**
   - Check translated files exist (EN, MS, ZH)
   - Verify Vercel CLI is installed
   - Confirm project IDs are configured

2. **Deploy English Version (EN)**
   - Update `.vercel/project.json` → EN project ID
   - Set environment variables:
     - `PUBLIC_DEFAULT_LOCALE=en`
     - `DEFAULT_LOCALE=en`
     - `PUBLIC_SITE_URL=https://www.inghengcredit.com`
     - `SITE_URL=https://www.inghengcredit.com`
   - Run: `vercel --prod --yes`
   - Verify deployment succeeded
   - Test: Visit www.inghengcredit.com

3. **Deploy Malay Version (MS)**
   - Update `.vercel/project.json` → MS project ID
   - Set environment variables:
     - `PUBLIC_DEFAULT_LOCALE=ms`
     - `DEFAULT_LOCALE=ms`
     - `PUBLIC_SITE_URL=https://www.kreditloan.my`
     - `SITE_URL=https://www.kreditloan.my`
   - Run: `vercel --prod --yes`
   - Verify deployment succeeded
   - Test: Visit www.kreditloan.my

4. **Deploy Chinese Version (ZH)**
   - Update `.vercel/project.json` → ZH project ID
   - Set environment variables:
     - `PUBLIC_DEFAULT_LOCALE=zh`
     - `DEFAULT_LOCALE=zh`
     - `PUBLIC_SITE_URL=https://www.inghengcredit.my`
     - `SITE_URL=https://www.inghengcredit.my`
   - Run: `vercel --prod --yes`
   - Verify deployment succeeded
   - Test: Visit www.inghengcredit.my

5. **Verify All Deployments**
   - Check each site loads correctly
   - Verify correct language is default
   - Test language switcher
   - Check no mixed language content

## Output

```
Deployment Complete ✅

## English (EN)
✅ Deployed to: https://www.inghengcredit.com
✅ Project: prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw
✅ Default locale: en
✅ Build time: 2m 34s
✅ Status: READY
✅ Tested: Homepage loads in English

## Malay (MS)
✅ Deployed to: https://www.kreditloan.my
✅ Project: prj_eKJtQcTcOd69sER92xq8NeS1SD4y
✅ Default locale: ms
✅ Build time: 2m 41s
✅ Status: READY
✅ Tested: Homepage loads in Malay

## Chinese (ZH)
✅ Deployed to: https://www.inghengcredit.my
✅ Project: prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7
✅ Default locale: zh
✅ Build time: 2m 38s
✅ Status: READY
✅ Tested: Homepage loads in Chinese

## Verification Checklist
✅ All 3 sites load correctly
✅ Each defaults to correct language
✅ Language switcher works
✅ Hreflang tags present
✅ No mixed language content
✅ Internal links work correctly

Next step: Run ⑭ /14-submit-search
```

## Skills Used
- `multi-language-deployment` - Handle 3-project deployment
- `vercel-deployment` - Vercel CLI operations
- `environment-configuration` - Set env variables correctly
- `build-optimization` - Optimize build process
- `deployment-verification` - Test deployments

## Project IDs Reference

```
English (EN):
- Project ID: prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw
- Domain: www.inghengcredit.com

Malay (MS):
- Project ID: prj_eKJtQcTcOd69sER92xq8NeS1SD4y
- Domain: www.kreditloan.my

Chinese (ZH):
- Project ID: prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7
- Domain: www.inghengcredit.my

Team ID (all projects):
- team_ZRACGuujUQkB6IRfNtWpe0T6
```

## Agent Instructions

```
You are the publishing agent. Deploy to 3 Vercel projects.

CLIENT: [client-name]

STEP 1: VALIDATE PREREQUISITES
Check files exist:
✅ clients/[client-name]/reviews/*-seo-audit.md (status: PASS)
✅ clients/[client-name]/reviews/*-eeat-score.md (score: ≥85)
✅ clients/[client-name]/reviews/*-readability-report.md (score: ≥85)

If ANY review failed: ABORT
Error message: "Cannot deploy. Reviews must pass first. Run ⑨⑩⑪ again."

Check translations exist:
✅ src/pages/ms/ has content
✅ src/pages/zh/ has content

STEP 2: DEPLOY ENGLISH (EN)
cd clients/[client-name]/website

# Update project.json
echo '{"projectId":"prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json

# Deploy to production
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://www.inghengcredit.com \
  --env SITE_URL=https://www.inghengcredit.com

# Wait for completion, verify

STEP 3: DEPLOY MALAY (MS)
# Update project.json
echo '{"projectId":"prj_eKJtQcTcOd69sER92xq8NeS1SD4y","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json

# Deploy to production
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://www.kreditloan.my \
  --env SITE_URL=https://www.kreditloan.my

# Wait for completion, verify

STEP 4: DEPLOY CHINESE (ZH)
# Update project.json
echo '{"projectId":"prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json

# Deploy to production
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://www.inghengcredit.my \
  --env SITE_URL=https://www.inghengcredit.my

# Wait for completion, verify

STEP 5: VERIFY ALL DEPLOYMENTS
For each site, check:
✅ Homepage loads
✅ Correct language is default
✅ Language switcher works
✅ New content is visible
✅ No 404 errors
✅ No mixed language content

STEP 6: CREATE DEPLOYMENT REPORT
Document:
- Deployment times
- Build durations
- Verification status
- Any warnings or issues
- Next steps

STEP 7: SAVE REPORT
Output to: clients/[client-name]/deployments/deployment-[date].md

Ready for ⑭ search engine submission.
```

## Success Criteria
- [ ] All 3 projects deployed successfully
- [ ] EN site live at www.inghengcredit.com
- [ ] MS site live at www.kreditloan.my
- [ ] ZH site live at www.inghengcredit.my
- [ ] Each site defaults to correct language
- [ ] Language switcher works on all sites
- [ ] No build errors
- [ ] Deployment report created

## Next Step
After this completes:
→ Run **⑭ /14-submit-search** to notify search engines

## Common Errors

**Error:** `Translations not found`
**Solution:** Run **⑫ /12-translate-content** first

**Error:** `Review status is NEEDS WORK`
**Solution:** Fix issues, re-run **⑨⑩⑪**, ensure all PASS

**Error:** `Vercel CLI not authenticated`
**Solution:** Run `vercel login` first

**Error:** `Build failed on deployment`
**Solution:** Check build logs, fix errors, re-deploy

**Error:** `Wrong language showing as default`
**Solution:** Verify `PUBLIC_DEFAULT_LOCALE` env variable is correct

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
