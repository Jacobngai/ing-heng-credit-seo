# Command ⑨ /9-review-seo

**Phase:** REVIEW
**Primary Agent:** content-qa
**Time:** 30 minutes (AI working)

## Purpose
Comprehensive technical and on-page SEO audit to ensure content meets Google's standards.

## Prerequisites

✅ **Required: At least 1 built page from BUILD phase:**
- From ⑤ `/build-author` OR
- From ⑥ `/build-hub-page` OR
- From ⑦ `/build-blog` OR
- From ⑧ `/build-service-page`

### Validation Check
```
❌ If no content exists:
→ Go back: Run BUILD commands ⑤⑥⑦⑧ to create content first

Check for .astro files in:
✅ clients/[client-name]/website/src/pages/en/authors/
✅ clients/[client-name]/website/src/pages/en/guides/
✅ clients/[client-name]/website/src/pages/en/blog/
✅ clients/[client-name]/website/src/pages/en/services/
```

## What This Command Does

The **content-qa** agent will:

1. **Technical SEO Audit** (SEO-pro.md Chapter 3)
   - [ ] HTTPS implemented
   - [ ] Mobile-friendly (responsive)
   - [ ] Page speed (Core Web Vitals targets)
   - [ ] No broken links
   - [ ] Canonical tags present
   - [ ] XML sitemap entry
   - [ ] Robots.txt allows crawling

2. **Core Web Vitals Check**
   - [ ] LCP ≤ 2.5s (Largest Contentful Paint)
   - [ ] INP ≤ 200ms (Interaction to Next Paint)
   - [ ] CLS ≤ 0.1 (Cumulative Layout Shift)
   - Image optimization (< 200KB per image)
   - Lazy loading implemented

3. **On-Page SEO Audit** (SEO-pro.md Chapter 4)
   - [ ] Unique title tag (50-60 chars)
   - [ ] Target keyword in title (front-loaded)
   - [ ] Unique meta description (150-160 chars)
   - [ ] One H1 per page with keyword
   - [ ] Proper heading hierarchy (H1→H2→H3)
   - [ ] Keyword in first 100 words
   - [ ] Internal links present (2-5)
   - [ ] Images have alt text
   - [ ] URL is descriptive and keyword-rich

4. **Schema Markup Validation**
   - [ ] Appropriate schema type (Article/Service/Product/Person)
   - [ ] No validation errors
   - [ ] Breadcrumb schema (if applicable)
   - [ ] FAQ schema (if FAQ section exists)
   - [ ] Author schema (for articles)

5. **Image Optimization**
   - [ ] WebP or AVIF format
   - [ ] Compressed (< 200KB each)
   - [ ] Dimensions specified (width/height)
   - [ ] Descriptive alt text
   - [ ] Lazy loading (except above-fold)

## Output File Created

```
clients/[client-name]/reviews/[page-name]-seo-audit.md
```

**Example:** `reviews/equipment-financing-guide-seo-audit.md`

## Report Format

```markdown
# SEO Audit Report: [Page Name]

**Date:** 2025-11-10
**Page:** /en/blog/equipment-financing-guide
**Status:** ✅ PASS / ⚠️ NEEDS WORK / ❌ FAIL

---

## Technical SEO: 85/100 ⚠️

### HTTPS: ✅ PASS
- Certificate valid
- All resources loaded via HTTPS

### Mobile-Friendly: ✅ PASS
- Responsive design implemented
- Touch targets adequate (48px+)
- No horizontal scrolling

### Core Web Vitals: ⚠️ NEEDS WORK (2 issues)
❌ **LCP: 3.2s** (target: ≤2.5s)
   Issue: Hero image is 800KB
   Fix: Compress to WebP, target <200KB
   Estimated fix time: 10 minutes

✅ **INP: 180ms** (target: ≤200ms)
   Good: JavaScript execution optimized

❌ **CLS: 0.15** (target: ≤0.1)
   Issue: Images missing width/height attributes
   Fix: Add dimensions to 3 images
   Estimated fix time: 5 minutes

---

## On-Page SEO: 90/100 ✅

### Title Tag: ✅ PASS
"Equipment Financing Guide 2025 | Save 30% - Ing Heng"
- Length: 57 characters (optimal)
- Keyword front-loaded
- Brand included

### Meta Description: ✅ PASS
Length: 155 characters (optimal)
Includes keyword + CTA

### Headers: ⚠️ NEEDS WORK (1 issue)
✅ H1: Present and optimized
⚠️ Heading hierarchy: H2→H4 skip (should be H2→H3)
   Fix: Change H4 to H3 on line 47

### Keywords: ✅ PASS
- In title: Yes
- In H1: Yes
- In first 100 words: Yes
- Density: 1.2% (optimal)

### Internal Links: ✅ PASS
- Count: 4 (optimal range: 2-5)
- Anchor text: Descriptive
- Targets: Relevant pages

### Images: ⚠️ NEEDS WORK (1 issue)
✅ Alt text: All images have descriptive alt text
❌ Optimization: 1 image is 650KB (should be <200KB)
   Fix: Compress hero image

---

## Schema Markup: ✅ PASS (100/100)
✅ Article schema: Valid
✅ Author schema: Valid
✅ Breadcrumb schema: Valid
✅ FAQ schema: Valid
- No errors in Google Rich Results Test

---

## PRIORITY FIXES (Do these before ⑫ translate-content)

1. **HIGH:** Compress hero image 800KB → <200KB
   - Impact: Fixes LCP (Core Web Vital)
   - Time: 10 minutes
   - File: /images/hero-equipment.jpg

2. **HIGH:** Add width/height to 3 images
   - Impact: Fixes CLS (Core Web Vital)
   - Time: 5 minutes
   - Files: Lines 47, 89, 112

3. **MEDIUM:** Fix heading hierarchy H4→H3
   - Impact: Better content structure
   - Time: 2 minutes
   - File: Line 47

---

## OVERALL SCORE: 88/100 ⚠️ NEEDS WORK

**Status:** Fix 3 issues above, then re-run this review.
**Estimated fix time:** 20 minutes total
**Blocking:** Cannot proceed to ⑫ until all issues fixed and score ≥90
```

## Skills Used
- `technical-seo-audit` - Check crawlability, indexing, performance
- `on-page-checklist` - Verify title, meta, headers, keywords
- `performance-check` - Core Web Vitals measurement
- `schema-validation` - Structured data errors
- `mobile-friendliness-check` - Responsive design verification

## Agent Instructions

```
You are the content-qa agent. Perform comprehensive SEO audit.

CLIENT: [client-name]
PAGE: [page-path] (e.g., /en/blog/equipment-financing-guide)

STEP 1: LOAD PAGE
Read the .astro file from:
clients/[client-name]/website/src/pages/[page-path].astro

STEP 2: TECHNICAL SEO AUDIT
Check (SEO-pro.md Chapter 3):
- HTTPS (should be enforced)
- Mobile-friendly (responsive design)
- Core Web Vitals (LCP, INP, CLS targets)
- Images optimized (<200KB, WebP)
- No broken links
- Canonical tags

STEP 3: ON-PAGE SEO AUDIT
Check (SEO-pro.md Chapter 4):
- Title tag (50-60 chars, keyword front-loaded)
- Meta description (150-160 chars, compelling)
- H1 (one per page, includes keyword)
- Heading hierarchy (H1→H2→H3, no skips)
- Keyword in first 100 words
- Internal links (2-5 contextual)
- Image alt text (descriptive, keyword-relevant)
- URL structure (descriptive, keyword-rich)

STEP 4: SCHEMA VALIDATION
Check:
- Appropriate schema type for page
- All required properties present
- No validation errors (use schema.org spec)
- Breadcrumb schema
- FAQ schema (if FAQ section)

STEP 5: SCORE & REPORT
Calculate scores:
- Technical SEO: 0-100
- On-Page SEO: 0-100
- Schema Markup: 0-100
- Overall: Average

Status determination:
- 90-100: ✅ PASS (ready for ⑫)
- 75-89: ⚠️ NEEDS WORK (fix issues, re-review)
- 0-74: ❌ FAIL (major issues, must fix)

STEP 6: CREATE PRIORITIZED FIX LIST
HIGH: Blocks Core Web Vitals
MEDIUM: Impacts rankings
LOW: Nice to have improvements

STEP 7: SAVE REPORT
Output to: clients/[client-name]/reviews/[page-name]-seo-audit.md

Include:
- Detailed findings
- Priority fixes with time estimates
- Pass/Fail status
- Next steps
```

## Success Criteria
- [ ] Audit report created with detailed findings
- [ ] All sections scored (Technical, On-Page, Schema)
- [ ] Priority fixes listed with time estimates
- [ ] Clear PASS/FAIL status
- [ ] Report saved in `clients/[client-name]/reviews/`

## Next Step
If **PASS** (score ≥90):
→ Run **⑩ /10-review-eeat**

If **NEEDS WORK** or **FAIL**:
→ Fix the issues listed in report
→ Re-run **⑨ /9-review-seo** to verify fixes
→ Repeat until PASS

## Common Errors

**Error:** `No .astro files found`
**Solution:** Run **⑤⑥⑦⑧ BUILD commands** to create content first

**Error:** `Page path not specified`
**Solution:** Provide page path (e.g., `/en/blog/post-slug`)

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
