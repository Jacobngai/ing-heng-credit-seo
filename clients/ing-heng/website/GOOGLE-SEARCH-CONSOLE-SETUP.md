# Google Search Console Setup Guide for Ing Heng Credit & Leasing

## Overview
Google Search Console (GSC) is a free tool from Google that helps you monitor, maintain, and troubleshoot your website's presence in Google Search results. This guide will walk you through the complete setup process for the Ing Heng Credit multilingual website.

**Website:** https://ingheng-credit.vercel.app
**Languages:** English (EN), Mandarin (ZH), Bahasa Malaysia (MS)

---

## 1. Initial Setup

### Step 1.1: Create Google Account (if needed)
- Use business email: enquiry@inghengcredit.com
- Or create dedicated account: webmaster@inghengcredit.com

### Step 1.2: Access Google Search Console
1. Go to: https://search.google.com/search-console
2. Sign in with Google account
3. Click "Start Now" or "Add Property"

---

## 2. Property Setup

### Step 2.1: Choose Property Type

**Option A: Domain Property (Recommended)**
- Verifies entire domain including all subdomains and protocols
- URL: `ingheng-credit.vercel.app`
- Requires DNS verification

**Option B: URL Prefix Property**
- Verifies specific URL prefix
- URL: `https://ingheng-credit.vercel.app`
- Multiple verification methods available

**Recommendation:** Use Domain Property for complete coverage

### Step 2.2: Add Domain Property
1. Click "Add Property" in Google Search Console
2. Select "Domain" option
3. Enter: `ingheng-credit.vercel.app`
4. Click "Continue"

---

## 3. Verification Methods

### Method 1: DNS Verification (Recommended for Domain Property)

**Step-by-step:**
1. Google will provide a TXT record like:
   ```
   google-site-verification=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
   ```

2. Add to DNS records:
   - For Vercel domains, go to: https://vercel.com/dashboard
   - Select project: Ing Heng Credit
   - Go to Settings > Domains
   - Add DNS record:
     - Type: `TXT`
     - Name: `@` or leave blank
     - Value: `google-site-verification=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`
     - TTL: `3600` or Auto

3. Wait for DNS propagation (5 minutes - 48 hours)

4. Return to Google Search Console and click "Verify"

**Verify DNS Record:**
```bash
nslookup -type=TXT ingheng-credit.vercel.app
```

### Method 2: HTML Tag Verification (Alternative)

**Step-by-step:**
1. Google will provide meta tag like:
   ```html
   <meta name="google-site-verification" content="AbCdEfGhIjKlMnOpQrStUvWxYz1234567890" />
   ```

2. Add to website `<head>` section:
   - Open: `src/layouts/BaseLayout.astro`
   - Add meta tag in `<head>` section
   - Deploy to production

3. Return to Google Search Console and click "Verify"

### Method 3: Google Analytics Verification

**Requirements:**
- Google Analytics 4 already set up
- Using same Google account for both GSC and GA4
- GA4 tracking code on all pages

**Step-by-step:**
1. Select "Google Analytics" verification method
2. Click "Verify"
3. Google will automatically verify via GA4 tracking code

### Method 4: Google Tag Manager Verification

**If using GTM:**
1. Select "Google Tag Manager" method
2. Ensure GTM container code is on all pages
3. Click "Verify"

---

## 4. Sitemap Submission

### Step 4.1: Verify Sitemap Exists
- Astro automatically generates sitemap via `@astrojs/sitemap` integration
- Sitemap URL: `https://ingheng-credit.vercel.app/sitemap-index.xml`
- Test by visiting URL in browser (should see XML content)

### Step 4.2: Submit Sitemap to GSC
1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `sitemap-index.xml`
3. Click "Submit"
4. Status should change to "Success" within 24-48 hours

### Step 4.3: Submit Language-Specific Sitemaps (Optional)
If Astro generates separate sitemaps per language:
1. Submit: `en/sitemap.xml`
2. Submit: `zh/sitemap.xml`
3. Submit: `ms/sitemap.xml`

### Expected Sitemap Structure
```
https://ingheng-credit.vercel.app/sitemap-index.xml
├── /en/sitemap.xml (English pages)
├── /zh/sitemap.xml (Mandarin pages)
└── /ms/sitemap.xml (Malay pages)
```

---

## 5. Property Settings Configuration

### Step 5.1: International Targeting
1. Go to **Settings** (gear icon)
2. Scroll to **Geographic target**
3. Select country: **Malaysia**
4. Save changes

**Note:** This tells Google your primary target audience is in Malaysia

### Step 5.2: User Management
1. Go to **Settings** > **Users and permissions**
2. Add team members:
   - Owner: Primary webmaster
   - Full access: Marketing team
   - Restricted access: Content writers (view only)

**Recommended users:**
- enquiry@inghengcredit.com (Owner)
- marketing@inghengcredit.com (Full)
- content@inghengcredit.com (Restricted)

### Step 5.3: Data Retention
- Default: 16 months of data
- Cannot be changed (Google's policy)
- Export data regularly for long-term storage

---

## 6. URL Inspection Tool

### Step 6.1: Test Homepage
1. Click **URL Inspection** (top search bar)
2. Enter: `https://ingheng-credit.vercel.app/en/`
3. Press Enter
4. Review results:
   - **Coverage:** URL is on Google
   - **Indexing:** Allowed or indexed
   - **Mobile Usability:** No issues
   - **Rich Results:** Schema detected

### Step 6.2: Request Indexing
If page not indexed:
1. Click "Request Indexing"
2. Wait for Google to crawl (usually 1-7 days)
3. Check back later for status update

### Step 6.3: Test Key Pages
Test these priority pages:
- `/en/` (homepage)
- `/en/equipment/excavator`
- `/en/equipment/lorry`
- `/en/equipment/forklift`
- `/en/blogs/[first-blog-post]`
- `/en/contact`
- `/zh/` (Mandarin homepage)
- `/ms/` (Malay homepage)

---

## 7. Performance Monitoring

### Step 7.1: Performance Report
**Location:** Search results > Performance

**Metrics to Monitor:**
- **Total Clicks:** Users who clicked your site in search results
- **Total Impressions:** Times your site appeared in search results
- **Average CTR:** Click-through rate (clicks / impressions)
- **Average Position:** Average ranking position in search results

**Filters:**
- **Date range:** Last 28 days, last 3 months, last 16 months
- **Search type:** Web, Image, Video, News
- **Query:** Specific search terms
- **Page:** Specific URLs
- **Country:** Malaysia, Singapore, etc.
- **Device:** Desktop, Mobile, Tablet

### Step 7.2: Top Queries Analysis
1. Go to **Performance** > **Queries** tab
2. Sort by clicks (descending)
3. Identify:
   - Top performing keywords
   - High-impression, low-click keywords (opportunities)
   - Ranking positions for target keywords

**Action Items:**
- Optimize pages for high-impression, low-click keywords
- Create content for related keywords
- Improve meta titles/descriptions for better CTR

### Step 7.3: Top Pages Analysis
1. Go to **Performance** > **Pages** tab
2. Sort by clicks or impressions
3. Identify:
   - Best performing pages
   - Pages with declining traffic
   - Pages with low CTR

**Action Items:**
- Update underperforming pages
- Create more content on successful topics
- Improve internal linking to top pages

### Step 7.4: Device Analysis
1. Go to **Performance** > **Devices** tab
2. Compare mobile vs desktop performance
3. Ensure mobile traffic is growing (mobile-first indexing)

---

## 8. Coverage Report

### Step 8.1: Index Coverage Overview
**Location:** Indexing > Pages

**Four Status Types:**
1. **Indexed:** Pages successfully indexed by Google ✅
2. **Excluded:** Valid pages, but not indexed (intentional or not)
3. **Error:** Pages with indexing problems ❌
4. **Valid with warnings:** Indexed, but with issues ⚠

### Step 8.2: Review Errors
1. Click on **Error** status
2. Review error types:
   - **Server error (5xx):** Check server health
   - **Redirect error:** Fix redirect chains
   - **Submitted URL not found (404):** Remove from sitemap
   - **Submitted URL blocked by robots.txt:** Update robots.txt

**Fix all errors immediately**

### Step 8.3: Review Excluded Pages
Common exclusions:
- **Duplicate content:** Canonical tag pointing elsewhere
- **Crawled - currently not indexed:** Low priority for Google
- **Discovered - currently not indexed:** Page found, not yet crawled
- **Alternate page with proper canonical tag:** Expected for hreflang
- **Excluded by robots.txt:** Intentional (check robots.txt)
- **Excluded by noindex tag:** Intentional (check meta tags)

**Action Items:**
- Verify exclusions are intentional
- If unintentional, fix and request re-indexing
- For "Crawled - not indexed," improve content quality

### Step 8.4: Monitor Coverage Over Time
- Check weekly for new errors
- Track indexed page count (should increase with new content)
- Set up email alerts for critical errors

---

## 9. Mobile Usability Report

### Step 9.1: Check Mobile Usability
**Location:** Enhancements > Mobile Usability

**Common Issues:**
- **Text too small to read:** Increase font size to 16px+
- **Clickable elements too close:** Increase spacing, min 44x44px
- **Content wider than screen:** Fix overflow, use responsive design
- **Viewport not set:** Add viewport meta tag (already in Astro)

### Step 9.2: Fix Mobile Issues
1. Click on specific error type
2. See affected URLs
3. Fix issues on website
4. Click "Validate Fix"
5. Google will re-crawl and verify (takes days/weeks)

**Expected Result:** Zero mobile usability issues

---

## 10. Core Web Vitals Report

### Step 10.1: Review Core Web Vitals
**Location:** Experience > Core Web Vitals

**Three Metrics:**
1. **LCP (Largest Contentful Paint):** < 2.5s (Good), 2.5-4s (Needs Improvement), > 4s (Poor)
2. **FID (First Input Delay):** < 100ms (Good), 100-300ms (Needs Improvement), > 300ms (Poor)
3. **CLS (Cumulative Layout Shift):** < 0.1 (Good), 0.1-0.25 (Needs Improvement), > 0.25 (Poor)

### Step 10.2: Identify Poor URLs
1. Click on "Poor" or "Needs Improvement" status
2. See affected URLs
3. Use PageSpeed Insights to diagnose issues
4. Fix performance problems
5. Monitor improvements over time

**Target:** All URLs in "Good" category

---

## 11. Rich Results Testing

### Step 11.1: Check Rich Results Eligibility
**Location:** Enhancements > Rich Results

**Supported Rich Results:**
- Article (for blog posts)
- FAQ
- Product
- Review
- Organization
- LocalBusiness

### Step 11.2: Validate Schema Markup
1. Go to: https://search.google.com/test/rich-results
2. Enter URL to test
3. Review detected schema types
4. Fix any errors or warnings
5. Request re-indexing

### Step 11.3: Monitor Rich Results Performance
- Track impressions and clicks for rich results
- Compare CTR with and without rich results
- Expand schema markup to more pages

---

## 12. Manual Actions

### Step 12.1: Check for Manual Actions
**Location:** Security & Manual Actions > Manual Actions

**What are manual actions?**
- Penalties applied by Google reviewers for policy violations
- Examples: Spammy links, thin content, hacked site, cloaking

**Expected:** "No issues detected" ✅

### Step 12.2: If Manual Action Exists
1. Read the issue description carefully
2. Fix all violations on website
3. Submit reconsideration request
4. Wait for Google review (weeks to months)

---

## 13. Security Issues

### Step 13.1: Monitor Security Issues
**Location:** Security & Manual Actions > Security Issues

**Potential Issues:**
- Hacked site
- Malware
- Phishing

**Expected:** "No issues detected" ✅

### Step 13.2: If Security Issue Detected
1. Take site offline immediately
2. Identify and fix security vulnerability
3. Remove malicious content
4. Request review in GSC
5. Implement additional security measures

---

## 14. Link Management

### Step 14.1: Review External Links
**Location:** Links > External links

- See top linking sites
- Identify valuable backlinks
- Spot potential spammy links

**Action Items:**
- Thank and nurture quality backlink sources
- Disavow spammy or harmful links (if necessary)
- Reach out for more backlinks from similar sites

### Step 14.2: Review Internal Links
**Location:** Links > Internal links

- See most linked pages
- Identify orphan pages (few/no internal links)
- Improve internal linking structure

**Action Items:**
- Add internal links to orphan pages
- Strengthen links to important pages (equipment, contact)
- Create logical link hierarchy

---

## 15. Email Alerts Setup

### Step 15.1: Configure Email Notifications
1. Go to **Settings** > **Users and permissions**
2. Click on your user
3. Enable email notifications for:
   - **Critical coverage issues:** Server errors, manual actions
   - **All coverage issues:** Including warnings
   - **Performance degradation:** Significant traffic drops
   - **Rich results issues:** Schema markup errors

### Step 15.2: Set Up Weekly Reports
- Google Search Console sends weekly email reports automatically
- Review summary of clicks, impressions, and issues
- Check inbox every Monday for reports

---

## 16. Monthly Maintenance Checklist

### Every Week:
- [ ] Check Performance report for traffic trends
- [ ] Review any new errors in Coverage report
- [ ] Monitor Core Web Vitals status

### Every Month:
- [ ] Analyze top performing queries
- [ ] Identify new keyword opportunities
- [ ] Check for manual actions or security issues
- [ ] Review external backlinks
- [ ] Export performance data for records
- [ ] Compare month-over-month growth

### Every Quarter:
- [ ] Comprehensive performance analysis
- [ ] Competitor comparison (manual research)
- [ ] Schema markup audit
- [ ] Mobile usability review
- [ ] User access review and updates

---

## 17. Advanced Features

### Step 17.1: URL Parameters (if needed)
- Configure how Google handles URL parameters
- Useful for filtering, sorting, pagination
- **Not needed for Ing Heng Credit** (clean URLs)

### Step 17.2: Crawl Stats
- See how often Google crawls your site
- Monitor server response times
- Identify crawl budget issues (for large sites)

### Step 17.3: Removals
- Temporarily remove URLs from Google Search
- Useful for outdated or sensitive content
- Use sparingly (not a permanent solution)

---

## 18. Integration with Other Tools

### Step 18.1: Link GSC with Google Analytics 4
1. In GA4, go to **Admin** > **Search Console Links**
2. Click "Link" and select GSC property
3. Confirm linking
4. Benefits:
   - See search queries in GA4
   - Combine search and behavior data
   - Enhanced reporting

### Step 18.2: Export Data
- **Performance data:** Export to CSV or Google Sheets
- **Coverage data:** Export for technical audits
- **Use for:** Monthly reports, trend analysis, client presentations

---

## 19. Multilingual Considerations

### Step 19.1: Monitor Each Language Separately
1. Use **Page** filter in Performance report
2. Filter by:
   - `/en/*` for English pages
   - `/zh/*` for Mandarin pages
   - `/ms/*` for Malay pages

### Step 19.2: Language-Specific Queries
- Analyze search queries per language
- Identify which language drives most traffic
- Optimize underperforming language versions

### Step 19.3: Hreflang Validation
- Check **International Targeting** report
- Ensure hreflang tags detected correctly
- Verify no conflicting signals

---

## 20. Troubleshooting Common Issues

### Issue: "Sitemap could not be read"
**Solutions:**
- Check sitemap URL is accessible (visit in browser)
- Ensure sitemap is valid XML (use validator)
- Check robots.txt allows sitemap
- Wait 24 hours and resubmit

### Issue: "Submitted URL not found (404)"
**Solutions:**
- Remove non-existent URLs from sitemap
- Check for typos in sitemap URLs
- Ensure page is published and accessible
- Request re-indexing after fixing

### Issue: "Crawled - currently not indexed"
**Solutions:**
- Improve content quality and length
- Add internal links to the page
- Ensure page provides unique value
- Check for thin or duplicate content
- Request indexing manually

### Issue: "Redirect error"
**Solutions:**
- Fix redirect chains (multiple redirects)
- Use 301 (permanent) instead of 302 (temporary)
- Avoid redirect loops
- Update sitemap with final destination URLs

### Issue: "Blocked by robots.txt"
**Solutions:**
- Review `/public/robots.txt`
- Ensure you're not blocking important pages
- Update robots.txt and resubmit sitemap
- Request re-crawling

---

## 21. Success Metrics

### Week 1-2 (After Setup):
- [x] Property verified
- [x] Sitemap submitted and processed
- [ ] All key pages indexed
- [ ] Zero critical errors

### Month 1:
- [ ] 50+ pages indexed
- [ ] 100+ impressions per day
- [ ] Zero mobile usability issues
- [ ] Zero security issues

### Month 3:
- [ ] 100+ pages indexed
- [ ] 500+ impressions per day
- [ ] 50+ clicks per day
- [ ] Average position < 20 for target keywords

### Month 6:
- [ ] 200+ pages indexed
- [ ] 1,000+ impressions per day
- [ ] 100+ clicks per day
- [ ] Average position < 10 for target keywords
- [ ] Rich results appearing in search

### Month 12:
- [ ] 300+ pages indexed
- [ ] 3,000+ impressions per day
- [ ] 300+ clicks per day
- [ ] Top 5 rankings for primary keywords
- [ ] Consistent month-over-month growth

---

## 22. Resources

### Official Google Resources:
- **Search Console Help:** https://support.google.com/webmasters
- **SEO Starter Guide:** https://developers.google.com/search/docs/beginner/seo-starter-guide
- **Search Central Blog:** https://developers.google.com/search/blog
- **Google Search Status Dashboard:** https://status.search.google.com

### Recommended Tools:
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Schema Markup Validator:** https://validator.schema.org

### Community:
- **Google Search Central Community:** https://support.google.com/webmasters/community
- **Reddit r/SEO:** https://reddit.com/r/SEO
- **WebmasterWorld:** https://www.webmasterworld.com

---

## 23. Quick Reference

### Essential URLs:
- **Google Search Console:** https://search.google.com/search-console
- **Your Property:** https://search.google.com/search-console?resource_id=sc-domain:ingheng-credit.vercel.app
- **URL Inspection:** Top search bar in GSC
- **Performance Report:** Search results > Performance
- **Coverage Report:** Indexing > Pages
- **Sitemap:** https://ingheng-credit.vercel.app/sitemap-index.xml

### Key Contacts:
- **Webmaster:** webmaster@inghengcredit.com
- **Support Email:** enquiry@inghengcredit.com
- **Phone:** +60-17-570-0889

---

**Setup Completion Checklist:**

- [ ] Google Account created
- [ ] Property added to GSC
- [ ] Domain verified (DNS or HTML tag)
- [ ] Sitemap submitted
- [ ] International targeting set to Malaysia
- [ ] Key pages inspected and indexed
- [ ] Email alerts configured
- [ ] No errors in Coverage report
- [ ] No mobile usability issues
- [ ] Linked to Google Analytics 4
- [ ] Team members added with appropriate permissions

---

**Last Updated:** 2025-10-10
**Version:** 1.0
**Maintainer:** Ing Heng Credit Web Team

This guide should be reviewed whenever Google updates Search Console features or when the website undergoes major changes.
