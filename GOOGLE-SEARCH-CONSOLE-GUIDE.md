# Google Search Console Guide - Re-indexing Your Sites

This guide helps you get Google to re-index your Ing Heng Credit sites after removing 404 pages.

---

## 1. Access Google Search Console

Go to: https://search.google.com/search-console

You need to verify ownership of all 3 properties:
- https://www.inghengcredit.com
- https://www.kreditloan.my
- https://www.inghengcredit.my

**Verification Methods:**
- HTML file upload (recommended for quick setup)
- DNS record
- Google Analytics
- Google Tag Manager

---

## 2. Submit Updated Sitemaps

After deploying your sites with the updated sitemap:

### Step-by-Step for Each Site:

#### For www.inghengcredit.com (English):
1. Select property: www.inghengcredit.com
2. Go to: Sitemaps in left sidebar
3. Click: "Add a new sitemap"
4. Enter: `https://www.inghengcredit.com/sitemap-index.xml`
5. Click: "Submit"
6. Wait for "Success" message (usually instant)
7. Click "Sitemap was submitted" to view status

#### For www.kreditloan.my (Malay):
1. Select property: www.kreditloan.my
2. Go to: Sitemaps
3. Enter: `https://www.kreditloan.my/sitemap-index.xml`
4. Click: "Submit"

#### For www.inghengcredit.my (Chinese):
1. Select property: www.inghengcredit.my
2. Go to: Sitemaps
3. Enter: `https://www.inghengcredit.my/sitemap-index.xml`
4. Click: "Submit"

**Expected Results:**
- Total URLs submitted: ~150 per site
- Discovered URLs: Should show increasing over 24-48 hours
- Indexed URLs: Check under "Coverage" report

---

## 3. Request Re-indexing for Key Pages

Using URL Inspection tool for high-priority pages:

### Key Pages to Re-index:

**Homepage:**
- https://www.inghengcredit.com/en/
- https://www.kreditloan.my/ms/
- https://www.inghengcredit.my/zh/

**Main Category Pages:**
- https://www.inghengcredit.com/en/equipment
- https://www.inghengcredit.com/en/services
- https://www.inghengcredit.com/en/blog

**Equipment Pages:**
- https://www.inghengcredit.com/en/equipment/excavator
- https://www.inghengcredit.com/en/equipment/lorry
- https://www.inghengcredit.com/en/equipment/forklift

### Step-by-Step:

1. In Search Console, click: "URL Inspection" in left sidebar
2. Enter URL in the search bar at top
3. Click: "Inspect" button
4. Wait for results (usually 5-30 seconds)

### Reading Inspection Results:

**If URL is indexed:**
- Status: "URL is on Google"
- Indexing: "Success"
- Coverage: "Page is available to Google"
- Action: Nothing needed

**If URL is NOT indexed:**
- Status: "URL is not on Google"
- Error message will explain why (404, server error, etc.)
- Follow recommendations provided

### Requesting Re-indexing:

**Method 1: Request Indexing Button**
- After inspection, click: "Request Indexing"
- This tells Google to crawl the page now
- Available: 3 times per URL per day

**Method 2: Live Test**
- Use: https://search.google.com/search-console/live-test
- Test URL to see how Google renders it
- Useful for debugging indexing issues

---

## 4. Submit Removal Requests for 404 Spam URLs

### Spam URLs to Remove:

```
https://www.inghengcredit.com/motor-insurance
https://www.inghengcredit.com/personal-insurance
https://www.inghengcredit.com/immediate-edge-review-in-the-uk-legit-or-a-scam-app-545
https://www.kreditloan.my/motor-insurance
https://www.kreditloan.my/personal-insurance
https://www.inghengcredit.my/motor-insurance
https://www.inghengcredit.my/personal-insurance
```

### Removal Process:

#### For Each Property:

1. Select property (e.g., www.inghengcredit.com)
2. Go to: "Removals" in left sidebar
3. Click: "New Request"
4. Select: "Remove a URL"
5. Choose: "Only this URL"
6. Enter URL: e.g., `https://www.inghengcredit.com/motor-insurance`
7. Click: "Submit"

**Processing Time:**
- Usually takes: 24-72 hours
- You'll receive email confirmation
- Status updates in "Removals" section

**Verification:**
1. After 72 hours, verify URL is removed
2. Go to: Google search
3. Search for: `site:inghengcredit.com motor-insurance`
4. Should show: "No results found"

---

## 5. Monitor Coverage Report

Check: "Coverage" report in Search Console

### Key Metrics to Watch:

**Indexing Status:**
- Valid: Pages with no errors
- Valid with warnings: Pages indexed but have issues
- Excluded: Pages not in index (404s, noindex, blocked by robots)

**Page Experience:**
- Mobile Usability: Should be all green
- Core Web Vitals: LCP, FID, CLS scores
- HTTPS: All pages should be secure

**Enhancements:**
- Structured data: Check for errors
- AMP status: Not needed for static sites

### Common Issues to Fix:

| Issue | Solution |
|-------|----------|
| 404 errors | Redirect to valid pages (already added in vercel.json) |
| Blocked by robots.txt | Review robots.txt blocking rules |
| Server error (5xx) | Check Vercel deployment status |
| Redirect chain | Reduce redirects, use 301 not 302 |
| Duplicate pages | Add canonical tags |

---

## 6. Use Google Indexing API (Optional)

For faster, programmatic indexing, you can set up the Indexing API.

### Setup Steps:

1. **Create Google Cloud Project**
   - Go to: https://console.cloud.google.com
   - Create new project: "Ing Heng Credit SEO"
   - Enable: "Indexing API"

2. **Create OAuth2 Credentials**
   - Go to: Credentials page in Cloud Console
   - Create: OAuth 2.0 Client ID
   - Add: Authorized redirect URI: `https://www.inghengcredit.com/api/index/publish?callback`

3. **Get Access Token**
   - Use OAuth 2.0 flow to get access token
   - Token validity: 1 hour (refreshable)

4. **Submit URLs Programmatically**
   - Endpoint: `https://indexing.googleapis.com/v3/urlNotifications:publish`
   - Method: POST
   - Headers: `Content-Type: application/json`
   - Body:
   ```json
   {
     "url": "https://www.inghengcredit.com/en/equipment/excavator",
     "type": "URL_UPDATED"
     "notification": {
       "url": "https://www.inghengcredit.com/api/index/publish"
       "type": "WEBHOOK"
     }
   }
   ```

### API Endpoint Ready:
- Internal endpoint created: `src/pages/api/index/publish.astro`
- For production: Add OAuth2 authentication
- Documentation: https://developers.google.com/search/docs/indexing-api/v3/quick-start

---

## 7. Expected Timeline

| Time | What Happens |
|------|--------------|
| Immediately | Sitemap submitted, URLs queued for crawling |
| 1-24 hours | Google discovers new sitemap, starts crawling |
| 24-72 hours | Spam removal requests processed |
| 3-7 days | Most pages re-indexed (depends on crawl schedule) |
| 1-2 weeks | Full index refreshed, 404s gone from search |

---

## 8. HTML Sitemap Access

For human-readable sitemap (created in this update):

- English: `https://www.inghengcredit.com/sitemap/`
- Malay: `https://www.kreditloan.my/sitemap/ms.html`
- Chinese: `https://www.inghengcredit.my/sitemap/zh.html`

These pages show all site URLs in a user-friendly format.

---

## Quick Reference Commands

### Deploy All 3 Sites:

```bash
# English (EN)
cd clients/ing-heng/website
echo '{"projectId":"prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://www.inghengcredit.com \
  --env SITE_URL=https://www.inghengcredit.com

# Malay (MS)
echo '{"projectId":"prj_eKJtQcTcOd69sER92xq8NeS1SD4y","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://www.kreditloan.my \
  --env SITE_URL=https://www.kreditloan.my

# Chinese (ZH)
echo '{"projectId":"prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://www.inghengcredit.my \
  --env SITE_URL=https://www.inghengcredit.my
```

---

## Summary of Changes Made

### Code Changes:
- Deleted 18 404 blog files from codebase
- Added 301 redirects in `vercel.json` for spam URLs
- Updated `astro.config.mjs` with proper lastmod and changefreq
- Created HTML sitemap pages at `/sitemap/`
- Created Indexing API endpoint at `/api/index/publish`

### Actions Required:
1. Deploy all 3 sites with updated code
2. Submit sitemaps in Google Search Console
3. Request re-indexing for key pages
4. Submit removal requests for 7 spam URLs

### Monitor:
- Check "Coverage" report daily for 1 week
- Verify spam URLs are removed from search results
- Confirm new pages are being indexed
