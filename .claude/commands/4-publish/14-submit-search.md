# Command ⑭ /14-submit-search

**Phase:** PUBLISH
**Primary Agent:** publishing
**Time:** 10 minutes (AI working)

## Purpose
Submit sitemaps to search engines, request indexing, and notify Google/Bing about new content.

## Prerequisites

✅ **Required: Live websites from ⑬ /13-deploy-multilang:**
- www.inghengcredit.com (EN) - LIVE
- www.kreditloan.my (MS) - LIVE
- www.inghengcredit.my (ZH) - LIVE

✅ **Required access:**
- Google Search Console (all 3 properties)
- Bing Webmaster Tools (all 3 properties)

### Validation Check
```
❌ If sites not deployed:
→ Go back: Run ⑬ /13-deploy-multilang first

❌ If Search Console not configured:
→ Setup: Add all 3 domains to Google Search Console
→ Setup: Verify ownership of all 3 domains

Test deployments:
✅ curl https://www.inghengcredit.com (should return 200)
✅ curl https://www.kreditloan.my (should return 200)
✅ curl https://www.inghengcredit.my (should return 200)
```

## What This Command Does

The **publishing** agent will:

1. **Generate/Update Sitemaps**
   For each language (EN, MS, ZH):
   - `sitemap-index.xml` (main sitemap)
   - `sitemap-pages.xml` (static pages)
   - `sitemap-blog.xml` (blog posts)
   - `sitemap-images.xml` (image sitemap)

2. **Update robots.txt**
   Ensure includes:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://www.inghengcredit.com/sitemap-index.xml
   Sitemap: https://www.kreditloan.my/sitemap-index.xml
   Sitemap: https://www.inghengcredit.my/sitemap-index.xml
   ```

3. **Submit to Google Search Console**
   For each domain:
   - Submit sitemap-index.xml
   - Request indexing for new/updated pages
   - Verify submission success

4. **Submit to Bing Webmaster Tools**
   For each domain:
   - Submit sitemap-index.xml
   - Request indexing

5. **Request Priority Indexing** (if applicable)
   For new blog posts:
   - Use Google Indexing API (if configured)
   - Prioritize new content

## Output File Created

```
clients/[client-name]/search-engines/submission-[date].md
```

**Example:** `search-engines/submission-2025-11-10.md`

## Submission Report Format

```markdown
# Search Engine Submission Report

**Date:** 2025-11-10
**Client:** Ing Heng Credit
**Content:** Equipment Financing Guide (blog post)

---

## Sitemaps Generated

### English (EN) - www.inghengcredit.com
✅ sitemap-index.xml (master)
✅ sitemap-pages.xml (47 pages)
✅ sitemap-blog.xml (13 posts) ← NEW POST ADDED
✅ sitemap-images.xml (89 images)

### Malay (MS) - www.kreditloan.my
✅ sitemap-index.xml (master)
✅ sitemap-pages.xml (47 pages)
✅ sitemap-blog.xml (13 posts) ← NEW POST ADDED
✅ sitemap-images.xml (89 images)

### Chinese (ZH) - www.inghengcredit.my
✅ sitemap-index.xml (master)
✅ sitemap-pages.xml (47 pages)
✅ sitemap-blog.xml (13 posts) ← NEW POST ADDED
✅ sitemap-images.xml (89 images)

---

## Google Search Console Submissions

### www.inghengcredit.com (EN)
✅ Sitemap submitted: sitemap-index.xml
✅ Status: Pending processing
✅ URLs submitted: 60 total (1 new)
✅ Priority indexing requested: /en/blog/equipment-financing-guide

### www.kreditloan.my (MS)
✅ Sitemap submitted: sitemap-index.xml
✅ Status: Pending processing
✅ URLs submitted: 60 total (1 new)
✅ Priority indexing requested: /ms/blog/panduan-pembiayaan-peralatan

### www.inghengcredit.my (ZH)
✅ Sitemap submitted: sitemap-index.xml
✅ Status: Pending processing
✅ URLs submitted: 60 total (1 new)
✅ Priority indexing requested: /zh/blog/设备融资指南

---

## Bing Webmaster Submissions

### All 3 Domains
✅ www.inghengcredit.com - Sitemap submitted
✅ www.kreditloan.my - Sitemap submitted
✅ www.inghengcredit.my - Sitemap submitted

---

## Expected Indexing Timeline

**Google:**
- Sitemap processing: 24-48 hours
- New page discovery: 1-7 days
- Full indexing: 3-14 days

**Bing:**
- Sitemap processing: 48-72 hours
- New page discovery: 3-14 days
- Full indexing: 7-30 days

---

## Monitoring Instructions

### Week 1:
Check Google Search Console → Coverage Report
- Look for: URL is on Google

### Week 2:
Check rankings:
- Google: site:www.inghengcredit.com "equipment financing"
- Monitor impressions in Search Console

### Week 4:
Full performance review:
- Impressions, clicks, CTR
- Average position
- Core Web Vitals status

---

## Next Steps

✅ **Workflow Complete!** Content is live in 3 languages.

**Ongoing:**
1. Monitor Search Console (weekly)
2. Track rankings (bi-weekly)
3. Create more content (run ⑦ /7-build-blog)
4. Update existing content (quarterly refresh)

**Monthly:**
- Run performance analytics
- Identify content opportunities
- Plan next content batch
```

## Skills Used
- `sitemap-generation` - Create XML sitemaps
- `search-console-submission` - Submit via GSC API
- `indexing-request` - Priority indexing requests
- `robots-txt-configuration` - Update robots.txt
- `bing-webmaster-submission` - Submit to Bing

## Agent Instructions

```
You are the publishing agent. Submit content to search engines.

CLIENT: [client-name]

STEP 1: VALIDATE DEPLOYMENTS
Check all 3 sites are live:
✅ curl https://www.inghengcredit.com (200 OK)
✅ curl https://www.kreditloan.my (200 OK)
✅ curl https://www.inghengcredit.my (200 OK)

If any fails:
❌ ABORT: Run ⑬ /13-deploy-multilang first

STEP 2: GENERATE SITEMAPS
For each language, create:
- sitemap-index.xml (references all sitemaps)
- sitemap-pages.xml (static pages)
- sitemap-blog.xml (blog posts)
- sitemap-images.xml (images)

Follow XML sitemap spec:
- Max 50,000 URLs per sitemap
- Include <lastmod> dates
- Set <priority> (homepage=1.0, blog=0.8, deep=0.5)
- Include <changefreq>

STEP 3: UPDATE ROBOTS.TXT
Ensure robots.txt includes sitemap references for all 3 domains:

User-agent: *
Allow: /

Sitemap: https://www.inghengcredit.com/sitemap-index.xml
Sitemap: https://www.kreditloan.my/sitemap-index.xml
Sitemap: https://www.inghengcredit.my/sitemap-index.xml

STEP 4: SUBMIT TO GOOGLE SEARCH CONSOLE
For each domain:
1. Access Search Console via API (or manual if no API)
2. Submit sitemap-index.xml
3. Request indexing for NEW/UPDATED pages only
4. Record submission status

STEP 5: SUBMIT TO BING WEBMASTER
For each domain:
1. Access Bing Webmaster via API (or manual)
2. Submit sitemap-index.xml
3. Record submission status

STEP 6: REQUEST PRIORITY INDEXING (if new content)
If Indexing API configured:
- Submit new blog posts for priority indexing
- Limit: 200 requests/day

STEP 7: CREATE REPORT
Document:
- Sitemaps generated (file counts)
- Google submissions (status, URL counts)
- Bing submissions (status)
- Expected indexing timelines
- Monitoring instructions

STEP 8: SAVE REPORT
Output to: clients/[client-name]/search-engines/submission-[date].md
```

## Success Criteria
- [ ] Sitemaps generated for all 3 languages
- [ ] Sitemaps submitted to Google Search Console (3 domains)
- [ ] Sitemaps submitted to Bing Webmaster (3 domains)
- [ ] robots.txt updated with sitemap references
- [ ] New pages requested for priority indexing
- [ ] Submission report created with monitoring plan

## Next Step

🎉 **WORKFLOW COMPLETE!**

Content is now:
- ✅ Created in English (BUILD)
- ✅ Quality-checked (REVIEW)
- ✅ Translated to MS & ZH (PUBLISH)
- ✅ Live on 3 domains (PUBLISH)
- ✅ Submitted to search engines (PUBLISH)

**What happens next:**
1. **Wait 1-7 days:** Google discovers and indexes content
2. **Monitor Search Console:** Check coverage report
3. **Track rankings:** Monitor target keywords
4. **Create more content:** Run ⑦ /7-build-blog again
5. **Monthly review:** Analyze performance, plan next batch

## Common Errors

**Error:** `Sites not deployed`
**Solution:** Run **⑬ /13-deploy-multilang** first

**Error:** `Search Console access denied`
**Solution:** Verify ownership of all 3 domains in Google Search Console

**Error:** `Sitemap generation failed`
**Solution:** Check Astro build succeeded, verify page files exist

**Error:** `Indexing API quota exceeded`
**Solution:** Wait 24 hours, or submit manually via Search Console

---

## 🏆 Congratulations!

You've successfully completed the entire SEO workflow:

**① ONBOARD** → Researched and planned
**② ONBOARD** → Organized content by intent
**③ ONBOARD** → Planned authority strategy
**④ ONBOARD** → Created brand options
**⑤ BUILD** → Built author pages
**⑥-⑧ BUILD** → Created content
**⑨-⑪ REVIEW** → Ensured quality
**⑫ PUBLISH** → Translated to 3 languages
**⑬ PUBLISH** → Deployed to 3 domains
**⑭ PUBLISH** → Notified search engines

**Result:** Professional SEO content live in 3 languages

**Now repeat ⑦→⑨→⑩→⑪→⑫→⑬→⑭ for each new blog post!**

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
