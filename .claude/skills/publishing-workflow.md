# Publishing Workflow Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Deploy all approved content (A/ prefix) to production websites with Git and Vercel automation for a specific client.

## Prerequisites
- Employee has reviewed and approved content (renamed D/ to A/)
- Client website repository exists at: `/example-clients/[client-name]/website/`
- Vercel deployment configured

## Workflow Steps

### Step 1: Find Approved Content for Client
Scan the specified client's folder for A/ prefixed files:

```bash
Scan: /example-clients/[client-name]/drafts/A/*.md

Example finds:
/example-clients/acme-corp/drafts/A/2025-11-01-excavator-guide-en.md
/example-clients/acme-corp/drafts/A/2025-11-01-excavator-guide-zh.md
/example-clients/acme-corp/drafts/A/2025-11-01-excavator-guide-ms.md
```

**Process one client at a time** for efficient workflow.

---

### Step 2: Generate Final Blog Posts
For each approved file:

#### 2.1 Read Approved Draft
```
Read: /example-clients/[client-name]/drafts/A/[filename].md
```

#### 2.2 Validate Frontmatter
Ensure all required fields exist:
```yaml
---
title: "..."
description: "..."
pubDate: YYYY-MM-DD
author: "..."
language: "en" | "zh" | "ms"
persona: "..."
keywords: [...]
status: "draft" ← Will change to "published"
---
```

#### 2.3 Update Status
Change frontmatter:
```yaml
status: "published"
publishedDate: YYYY-MM-DD
```

#### 2.4 Add Schema Markup
For FAQ section, add JSON-LD schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is equipment financing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Equipment financing is..."
      }
    }
  ]
}
```

#### 2.5 Optimize Images (if any)
- Compress images
- Add alt text with keywords
- Use WebP format
- Lazy loading attributes

---

### Step 3: Move to Website Folder
Organize by language and date:

```bash
Source: /example-clients/[client-name]/drafts/A/2025-11-01-excavator-guide-en.md

Destination: /example-clients/[client-name]/website/src/content/posts/en/2025/11/excavator-guide.md

Language structure:
/example-clients/[client-name]/website/src/content/posts/
├── en/
│   └── 2025/
│       └── 11/
│           └── excavator-guide.md
├── zh/
│   └── 2025/
│       └── 11/
│           └── excavator-guide.md
└── ms/
    └── 2025/
        └── 11/
            └── excavator-guide.md
```

**Auto-create** year/month folders if they don't exist.

---

### Step 4: Update Sitemap & RSS
For each client website:

#### 4.1 Update sitemap.xml with Proper Hreflang Implementation

**CRITICAL: Complete Hreflang Best Practices**

Each URL entry MUST include:
1. Self-referencing hreflang tag (e.g., en page includes `hreflang="en"` pointing to itself)
2. Alternate language tags (bidirectional linking)
3. x-default tag (pointing to primary/default language)
4. Consistent URL format (trailing slashes, protocols)

```xml
<!-- ✅ CORRECT: Complete hreflang implementation -->
<url>
  <loc>https://acme-corp.com/en/blog/excavator-guide/</loc>
  <lastmod>2025-11-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  <!-- Self-reference -->
  <xhtml:link rel="alternate" hreflang="en" href="https://acme-corp.com/en/blog/excavator-guide/"/>
  <!-- Alternate languages -->
  <xhtml:link rel="alternate" hreflang="zh" href="https://acme-corp.com/zh/blog/excavator-guide/"/>
  <xhtml:link rel="alternate" hreflang="ms" href="https://acme-corp.com/ms/blog/excavator-guide/"/>
  <!-- Default fallback -->
  <xhtml:link rel="alternate" hreflang="x-default" href="https://acme-corp.com/en/blog/excavator-guide/"/>
</url>

<url>
  <loc>https://acme-corp.com/zh/blog/excavator-guide/</loc>
  <lastmod>2025-11-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  <!-- Self-reference -->
  <xhtml:link rel="alternate" hreflang="zh" href="https://acme-corp.com/zh/blog/excavator-guide/"/>
  <!-- Alternate languages -->
  <xhtml:link rel="alternate" hreflang="en" href="https://acme-corp.com/en/blog/excavator-guide/"/>
  <xhtml:link rel="alternate" hreflang="ms" href="https://acme-corp.com/ms/blog/excavator-guide/"/>
  <!-- Default fallback -->
  <xhtml:link rel="alternate" hreflang="x-default" href="https://acme-corp.com/en/blog/excavator-guide/"/>
</url>

<url>
  <loc>https://acme-corp.com/ms/blog/excavator-guide/</loc>
  <lastmod>2025-11-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  <!-- Self-reference -->
  <xhtml:link rel="alternate" hreflang="ms" href="https://acme-corp.com/ms/blog/excavator-guide/"/>
  <!-- Alternate languages -->
  <xhtml:link rel="alternate" hreflang="en" href="https://acme-corp.com/en/blog/excavator-guide/"/>
  <xhtml:link rel="alternate" hreflang="zh" href="https://acme-corp.com/zh/blog/excavator-guide/"/>
  <!-- Default fallback -->
  <xhtml:link rel="alternate" hreflang="x-default" href="https://acme-corp.com/en/blog/excavator-guide/"/>
</url>
```

**Common Sitemap Hreflang Errors to Avoid:**
- ❌ Missing self-reference tags
- ❌ Inconsistent trailing slashes (`/en/blog/post` vs `/en/blog/post/`)
- ❌ Mixed protocols (`http://` vs `https://`)
- ❌ Missing x-default tag
- ❌ Pointing to non-existent URLs (e.g., EN and ZH published but MS not yet live)

#### 4.2 Validate Hreflang Requirements

Before finalizing sitemap, verify:

**URL Consistency Check:**
```bash
# All URLs must use consistent format
✅ https://acme-corp.com/en/blog/post/
✅ https://acme-corp.com/zh/blog/post/
✅ https://acme-corp.com/ms/blog/post/

❌ https://acme-corp.com/en/blog/post
❌ http://acme-corp.com/en/blog/post/
```

**Bidirectional Linking Verification:**
- EN page hreflang tags → point to ZH and MS
- ZH page hreflang tags → point to EN and MS
- MS page hreflang tags → point to EN and ZH
- All three pages include self-reference
- All three pages include x-default (usually pointing to EN)

**URL Existence Validation:**
```bash
# Ensure all hreflang URLs actually exist before publishing sitemap
# If publishing only EN and ZH today, DO NOT include MS URLs in hreflang
# Wait until MS is live, then update sitemap with complete hreflang set
```

#### 4.3 Update RSS feed
Add to rss.xml (per language):
```xml
<item>
  <title>Equipment Financing Guide 2025</title>
  <link>https://acme-corp.com/en/blog/excavator-guide/</link>
  <pubDate>Fri, 01 Nov 2025 00:00:00 GMT</pubDate>
  <description>Complete guide to equipment financing for Malaysian contractors...</description>
</item>
```

---

### Step 5: Git Commit & Push

#### 5.1 Git Add
```bash
cd /example-clients/[client-name]/website/
git add src/content/posts/
git add public/sitemap.xml
git add public/rss.xml
```

#### 5.2 Git Commit
Use standardized commit message template:

```bash
git commit -m "$(cat <<'EOF'
feat: Add new blog posts for 2025-11-01

Published content:
- Equipment Financing Guide (EN/ZH/MS)

Total posts: 3 (1 topic × 3 languages)
Personas: contractor-bob, logistics-lee

Auto-generated via Claude Code SEO Platform

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

**Commit message format:**
```
feat: Add new blog posts for [DATE]

Published content:
- [Topic Title] (languages)
- [Topic Title] (languages)

Total posts: [count]
Personas: [list]

Auto-generated via Claude Code SEO Platform

Co-Authored-By: Claude <noreply@anthropic.com>
```

#### 5.3 Git Push

**For Single-Deployment Clients:**
```bash
cd /example-clients/[client-name]/website/
git push origin main
```

**For Multi-Deployment Clients** (see `multi-language-deployment.md`):
```bash
cd /example-clients/[client-name]/website/
# Push to main branch
git push origin main

# Also push to all language deployment branches for this client
git push origin main:deploy-en --force
git push origin main:deploy-zh --force
git push origin main:deploy-ms --force
```

This triggers separate Vercel deployments for each language version simultaneously.

**Error handling:**
- If push fails → retry once
- If still fails → save error log and notify user
- If conflicts → abort and notify user for manual resolution

---

### Step 5.5: Validate Hreflang Implementation

**CRITICAL: Pre-deployment hreflang validation prevents Google Search Console errors**

Before pushing to production, run comprehensive validation checks.

#### 5.5.1 Pre-Deployment Checklist

**✅ Required Validations:**

1. **Self-Referencing Tags**
   - Every page includes hreflang pointing to itself
   - Example: EN page has `<link rel="alternate" hreflang="en" href="[self-url]" />`

2. **Bidirectional Linking (Return Tags)**
   - EN page links to ZH/MS, AND ZH/MS pages link back to EN
   - Verify complete bidirectional chains for all language pairs

3. **URL Existence Verification**
   - All hreflang URLs return 200 status (not 404)
   - Check BEFORE publishing sitemap
   - Common error: Publishing EN/ZH but referencing unpublished MS URLs

4. **URL Consistency**
   - All URLs use same protocol (`https://`)
   - All URLs have consistent trailing slash treatment
   - All URLs use same domain (no subdomain mixing)

5. **Canonical Tag Validation**
   - Canonical URL doesn't conflict with hreflang
   - Each language page has self-referencing canonical
   - Example: EN page canonical = `https://site.com/en/blog/post/`

6. **X-Default Tag Present**
   - One language designated as default (usually EN)
   - All pages include `hreflang="x-default"` pointing to default language

#### 5.5.2 Automated Validation Script

Create and run validation script before each deployment:

```javascript
// hreflang-validator.js
// Run: node hreflang-validator.js [client-name]

const languages = ['en', 'zh', 'ms'];
const baseUrl = 'https://acme-corp.com';
const newPosts = [
  '/blog/excavator-guide/',
  '/blog/forklift-financing/'
];

async function validateHreflang() {
  const errors = [];

  for (const post of newPosts) {
    for (const lang of languages) {
      const url = `${baseUrl}/${lang}${post}`;

      // 1. Check URL exists
      const response = await fetch(url);
      if (response.status !== 200) {
        errors.push(`❌ URL not found: ${url}`);
        continue;
      }

      // 2. Parse HTML and extract hreflang tags
      const html = await response.text();
      const hreflangTags = extractHreflangTags(html);

      // 3. Validate self-reference
      const selfRef = hreflangTags.find(tag =>
        tag.hreflang === lang && tag.href === url
      );
      if (!selfRef) {
        errors.push(`❌ Missing self-reference: ${url} (hreflang="${lang}")`);
      }

      // 4. Validate bidirectional links
      for (const otherLang of languages) {
        if (otherLang !== lang) {
          const altUrl = `${baseUrl}/${otherLang}${post}`;
          const altRef = hreflangTags.find(tag =>
            tag.hreflang === otherLang && tag.href === altUrl
          );
          if (!altRef) {
            errors.push(`❌ Missing alternate link: ${url} -> ${altUrl}`);
          }
        }
      }

      // 5. Validate x-default
      const xDefault = hreflangTags.find(tag => tag.hreflang === 'x-default');
      if (!xDefault) {
        errors.push(`❌ Missing x-default: ${url}`);
      }

      // 6. Check URL consistency (trailing slashes)
      const inconsistentUrls = hreflangTags.filter(tag =>
        !tag.href.endsWith('/') || !tag.href.startsWith('https://')
      );
      if (inconsistentUrls.length > 0) {
        errors.push(`❌ Inconsistent URL format: ${url}`);
      }
    }
  }

  return errors;
}

function extractHreflangTags(html) {
  const regex = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
  const tags = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    tags.push({
      hreflang: match[1],
      href: match[2]
    });
  }

  return tags;
}

// Run validation
validateHreflang().then(errors => {
  if (errors.length === 0) {
    console.log('✅ All hreflang validations passed!');
    process.exit(0);
  } else {
    console.error('❌ Hreflang validation errors found:');
    errors.forEach(error => console.error(error));
    process.exit(1);
  }
});
```

#### 5.5.3 Common Publishing Errors & Fixes

**Error 1: Partial Language Rollout**
```
❌ Problem: Published EN and ZH, but MS not ready
❌ Hreflang includes: hreflang="ms" href="/ms/blog/post/"
❌ MS URL returns 404

✅ Solution: Only include hreflang for PUBLISHED languages
✅ Wait until all 3 languages are live before adding complete hreflang set
✅ Or use phased approach:
   - Day 1: EN only (no hreflang alternates)
   - Day 2: Add EN + ZH hreflang (bidirectional)
   - Day 3: Add complete EN + ZH + MS hreflang (all bidirectional)
```

**Error 2: Inconsistent Trailing Slashes**
```
❌ EN: https://site.com/en/blog/post/  (with trailing slash)
❌ ZH: https://site.com/zh/blog/post   (without trailing slash)

✅ Standardize all URLs with trailing slashes:
   https://site.com/en/blog/post/
   https://site.com/zh/blog/post/
   https://site.com/ms/blog/post/
```

**Error 3: Missing Self-Reference**
```
❌ EN page hreflang tags:
   <link rel="alternate" hreflang="zh" href="/zh/blog/post/" />
   <link rel="alternate" hreflang="ms" href="/ms/blog/post/" />
   (Missing self-reference!)

✅ EN page hreflang tags:
   <link rel="alternate" hreflang="en" href="/en/blog/post/" />
   <link rel="alternate" hreflang="zh" href="/zh/blog/post/" />
   <link rel="alternate" hreflang="ms" href="/ms/blog/post/" />
   <link rel="alternate" hreflang="x-default" href="/en/blog/post/" />
```

**Error 4: Canonical Conflict**
```
❌ ZH page has:
   <link rel="canonical" href="/en/blog/post/" />
   <link rel="alternate" hreflang="zh" href="/zh/blog/post/" />
   (Canonical points to EN, creating conflict)

✅ ZH page should have:
   <link rel="canonical" href="/zh/blog/post/" />
   <link rel="alternate" hreflang="zh" href="/zh/blog/post/" />
   (Each language version is its own canonical)
```

#### 5.5.4 Pre-Deployment Validation Commands

```bash
# Before Step 6 (Vercel deployment), run these checks:

# 1. Validate all new blog post URLs exist locally
cd /example-clients/[client-name]/website/
npm run build

# 2. Check generated HTML for hreflang tags
grep -r "hreflang" dist/en/blog/excavator-guide/index.html
grep -r "hreflang" dist/zh/blog/excavator-guide/index.html
grep -r "hreflang" dist/ms/blog/excavator-guide/index.html

# 3. Validate sitemap hreflang completeness
node scripts/validate-sitemap-hreflang.js

# 4. Check for bidirectional linking
node scripts/check-bidirectional-hreflang.js

# Expected output:
# ✅ All hreflang tags valid
# ✅ Bidirectional linking complete
# ✅ Self-references present
# ✅ x-default tags present
# ✅ URL consistency verified
```

**STOP deployment if validation fails. Fix errors before proceeding to Step 6.**

---

### Step 6: Vercel Deployment (Automated via MCP)

**Trigger 3 deployments in parallel** using Vercel MCP tools:

#### 6.1 Deploy to All Language Projects
```javascript
// Use mcp__vercel__deploy_to_vercel for each project
// Projects: [client-name]-en, [client-name]-ms, [client-name]-zh

Parallel deployments:
1. Deploy [client-name]-en (English default)
2. Deploy [client-name]-ms (Malay default)
3. Deploy [client-name]-zh (Chinese default)
```

#### 6.2 Monitor Deployment Status
```bash
Use mcp__vercel__get_deployment to check status:
- ⏳ EN: Building...
- ⏳ MS: Building...
- ⏳ ZH: Building...

Wait for all to complete (2-3 minutes):
- ✅ EN: Ready
- ✅ MS: Ready
- ✅ ZH: Ready
```

#### 6.3 Handle Deployment Errors
If any deployment fails:
```bash
Use mcp__vercel__get_deployment_build_logs to retrieve error details

Report to user:
❌ Deployment failed for [client-name]-ms
Error: [build log excerpt]

Other deployments:
✅ EN: Success
❌ MS: Failed
✅ ZH: Success
```

**Deployment URLs:**
```
https://[client-name]-en.vercel.app  (or custom domain)
https://[client-name]-ms.vercel.app  (or custom domain)
https://[client-name]-zh.vercel.app  (or custom domain)
```

**Verify deployment:**
- Check deployment logs
- Verify URLs are live (all 3)
- Test language redirects
- Validate sitemap for each deployment

---

### Step 7: Archive Approved Drafts
Move published files from A/ to archive:

```bash
Source: /example-clients/[client-name]/drafts/A/2025-11-01-excavator-guide-en.md

Destination: /example-clients/[client-name]/drafts/archive/2025/11/2025-11-01-excavator-guide-en.md
```

**Keep drafts folder clean:**
- A/ → archive/ (published)
- D/ → (pending review)
- F/ → (failed, needs revision)

---

### Step 8: Update Content Calendar
Mark published topics in keyword-strategy.json:

```json
{
  "content_calendar": {
    "2025-11": [
      {
        "topic": "Equipment Financing Guide",
        "keyword": "equipment financing Malaysia",
        "status": "published",
        "published_date": "2025-11-01",
        "urls": {
          "en": "/en/blog/excavator-guide",
          "zh": "/zh/blog/excavator-guide",
          "ms": "/ms/blog/excavator-guide"
        }
      }
    ]
  }
}
```

---

## Single Client Processing

### Process One Client at a Time
For clarity and manageable workflow:

```bash
For the specified client:
  1. Generate final posts
  2. Move to website folder
  3. Git add
  4. Git commit
  5. Git push
  6. Verify Vercel deployment
```

**Single client commit message:**
```
feat: Publish daily content for [client-name]

Total posts published: 3
- 1 topic
- 3 languages (EN/ZH/MS)

Client: [client-name]
Topics: [list topics]

Auto-generated via Claude Code SEO Platform

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## Error Handling

### Common Errors

**1. Git conflicts**
```
Error: Conflict in src/content/posts/en/2025/11/excavator-guide.md

Action: Abort and notify user
Message: "Manual intervention needed: Git conflict in acme-corp repo"
```

**2. Vercel deployment failure**
```
Error: Build failed - Missing dependency

Action: Rollback and notify user
Message: "Deployment failed for acme-corp: [error details]"
```

**3. Missing frontmatter**
```
Error: File missing required field 'language'

Action: Skip file and log error
Message: "Skipped: 2025-11-01-post.md - incomplete frontmatter"
```

---

## Post-Publication Verification

### Automated Checks
After deployment, verify:

✅ All URLs accessible (200 status)
✅ Hreflang tags correct
✅ Sitemap updated
✅ RSS feed updated
✅ Schema markup valid
✅ Meta tags correct

### Comprehensive Hreflang Post-Deployment Validation

**Run these checks within 1 hour of deployment to catch errors early.**

#### Test 1: URL Accessibility Verification
```bash
# Test all published URLs return 200 status
curl -I https://[client-name].com/en/blog/excavator-guide/
curl -I https://[client-name].com/zh/blog/excavator-guide/
curl -I https://[client-name].com/ms/blog/excavator-guide/

# Expected: HTTP/2 200 OK
# If 404: Deployment failed or URL structure incorrect
```

#### Test 2: Hreflang Tag Inspection
```bash
# Fetch and parse hreflang tags from live pages
curl -s https://[client-name].com/en/blog/excavator-guide/ | grep -o '<link[^>]*hreflang[^>]*>' | sort

# Verify each page includes:
# 1. Self-reference (hreflang="en" for EN page)
# 2. All alternate languages
# 3. x-default tag
```

#### Test 3: Bidirectional Link Validation
```bash
# Use automated script to verify return links
node scripts/verify-bidirectional-hreflang.js \
  --url https://[client-name].com/en/blog/excavator-guide/ \
  --languages en,zh,ms

# Expected output:
# ✅ EN -> ZH bidirectional link verified
# ✅ EN -> MS bidirectional link verified
# ✅ ZH -> EN bidirectional link verified
# ✅ ZH -> MS bidirectional link verified
# ✅ MS -> EN bidirectional link verified
# ✅ MS -> ZH bidirectional link verified
```

**Bidirectional Verification Script:**
```javascript
// verify-bidirectional-hreflang.js
async function verifyBidirectional(baseUrl, languages) {
  const errors = [];

  for (const lang1 of languages) {
    const url1 = `${baseUrl}`.replace('/en/', `/${lang1}/`);
    const html1 = await fetchPage(url1);
    const hreflang1 = extractHreflang(html1);

    for (const lang2 of languages) {
      if (lang1 === lang2) continue;

      // Check if lang1 page links to lang2
      const linkToLang2 = hreflang1.find(tag => tag.hreflang === lang2);
      if (!linkToLang2) {
        errors.push(`❌ ${lang1} page missing link to ${lang2}`);
        continue;
      }

      // Check if lang2 page links back to lang1
      const url2 = linkToLang2.href;
      const html2 = await fetchPage(url2);
      const hreflang2 = extractHreflang(html2);
      const returnLink = hreflang2.find(tag => tag.hreflang === lang1);

      if (!returnLink) {
        errors.push(`❌ ${lang2} page missing return link to ${lang1}`);
      } else if (returnLink.href !== url1) {
        errors.push(`❌ Return link URL mismatch: ${returnLink.href} != ${url1}`);
      } else {
        console.log(`✅ ${lang1} <-> ${lang2} bidirectional link verified`);
      }
    }
  }

  return errors;
}
```

#### Test 4: Sitemap Hreflang Validation
```bash
# Download and validate sitemap
curl -s https://[client-name].com/sitemap.xml > sitemap.xml

# Check for proper hreflang structure in sitemap
node scripts/validate-sitemap-hreflang.js sitemap.xml

# Verify:
# ✅ Each URL has self-reference hreflang
# ✅ Each URL has alternate language hreflang tags
# ✅ Each URL has x-default tag
# ✅ No orphan URLs (URLs without translations)
```

#### Test 5: Google Search Console Submission

**Submit Sitemaps Immediately After Deployment:**

1. **For Single-Domain Multi-Language Sites:**
   ```
   Submit to GSC: https://[client-name].com/sitemap.xml

   Verify in GSC:
   - Coverage report shows all new URLs
   - Alternate pages section shows proper hreflang clustering
   ```

2. **For Multi-Domain (per language) Sites:**
   ```
   Submit to EN GSC: https://[client-name].com/sitemap-en.xml
   Submit to ZH GSC: https://zh.[client-name].com/sitemap-zh.xml
   Submit to MS GSC: https://ms.[client-name].com/sitemap-ms.xml
   ```

**Monitor Google Search Console for Hreflang Errors:**

Within 24-48 hours, check:
```
Google Search Console > Coverage > Alternate pages

Expected:
✅ "Alternate page with proper canonical tag"
✅ No errors in International Targeting report

Common errors to watch for:
❌ "Alternate page with missing return link"
❌ "Alternate page with missing self-referencing hreflang"
❌ "Alternate page without canonical tag"
❌ "Conflicting URL in sitemap"
```

#### Test 6: Manual Browser Testing

**Test Language Switching on Live Site:**

1. Visit EN page: `https://[client-name].com/en/blog/excavator-guide/`
2. Use browser language switcher (if available)
3. Verify switch to ZH shows correct content: `https://[client-name].com/zh/blog/excavator-guide/`
4. Verify switch to MS shows correct content: `https://[client-name].com/ms/blog/excavator-guide/`
5. Check browser language detection (use Chrome language settings)

**Verify Google's Language Detection:**
```
1. Open Google Search Console
2. Go to URL Inspection tool
3. Inspect: https://[client-name].com/en/blog/excavator-guide/
4. Click "View Tested Page" > More Info > HTML
5. Verify hreflang tags appear in rendered HTML
```

#### Test 7: Validate Canonical URLs

```bash
# Check each language version has self-referencing canonical
curl -s https://[client-name].com/en/blog/excavator-guide/ | grep -o '<link[^>]*rel="canonical"[^>]*>'
# Expected: <link rel="canonical" href="https://[client-name].com/en/blog/excavator-guide/" />

curl -s https://[client-name].com/zh/blog/excavator-guide/ | grep -o '<link[^>]*rel="canonical"[^>]*>'
# Expected: <link rel="canonical" href="https://[client-name].com/zh/blog/excavator-guide/" />

curl -s https://[client-name].com/ms/blog/excavator-guide/ | grep -o '<link[^>]*rel="canonical"[^>]*>'
# Expected: <link rel="canonical" href="https://[client-name].com/ms/blog/excavator-guide/" />
```

**CRITICAL: Canonical should NOT point to different language version**
```
❌ WRONG: ZH page canonical points to EN page
✅ CORRECT: ZH page canonical points to itself
```

#### Test 8: Structured Data Validation

```bash
# Validate JSON-LD schema includes correct language and hreflang
curl -s https://[client-name].com/en/blog/excavator-guide/ | grep -o '<script type="application/ld\+json">[^<]*</script>'

# Test with Google Rich Results Test
https://search.google.com/test/rich-results?url=https://[client-name].com/en/blog/excavator-guide/
```

### Comprehensive Post-Deployment Checklist

**Within 1 Hour of Deployment:**
- [ ] All URLs return 200 status (not 404)
- [ ] Hreflang self-references present on all pages
- [ ] Bidirectional links verified for all language pairs
- [ ] x-default tags point to correct default language
- [ ] URL consistency verified (trailing slashes, protocols)
- [ ] Canonical tags don't conflict with hreflang
- [ ] Sitemap updated with new URLs and hreflang
- [ ] RSS feeds updated per language
- [ ] Schema markup valid (Google Rich Results Test)

**Within 24 Hours:**
- [ ] Sitemaps submitted to Google Search Console (all properties)
- [ ] URL Inspection tool shows correct hreflang rendering
- [ ] No hreflang errors in GSC International Targeting report
- [ ] Google Search Console Coverage report includes new URLs

**Within 1 Week:**
- [ ] New pages appear in Google Search (site:domain.com query)
- [ ] Language versions properly clustered in search results
- [ ] Mobile-friendliness test passed
- [ ] Page speed scores acceptable (>80)
- [ ] Social media preview cards correct (Open Graph tags)

### Troubleshooting Common Hreflang Errors

**Error: "Alternate page with missing return link"**
```
Problem: EN page links to ZH, but ZH doesn't link back to EN

Fix:
1. Check ZH page hreflang tags in live HTML
2. Verify ZH page includes: <link rel="alternate" hreflang="en" href="[en-url]" />
3. If missing, check Astro component generating hreflang
4. Redeploy with correct bidirectional links
```

**Error: "Conflicting URL in sitemap"**
```
Problem: Sitemap includes both /en/blog/post and /en/blog/post/ (with and without trailing slash)

Fix:
1. Standardize all URLs to include trailing slash
2. Update sitemap generation logic
3. Regenerate and resubmit sitemap
```

**Error: "Alternate page without canonical tag"**
```
Problem: Hreflang present but canonical tag missing

Fix:
1. Add canonical tag to all pages
2. Ensure canonical is self-referencing (not cross-language)
3. Redeploy with canonical tags
```

### Manual Checks (Optional but Recommended)
- [ ] Google Search Console submission (CRITICAL for hreflang)
- [ ] Social media preview (Facebook Sharing Debugger, Twitter Card Validator)
- [ ] Mobile responsiveness (Google Mobile-Friendly Test)
- [ ] Page speed score (PageSpeed Insights, GTmetrix)
- [ ] Accessibility audit (WAVE, Lighthouse)
- [ ] Broken link check (use Screaming Frog or ahrefs Site Audit)

---

## Automated Hreflang Validation Tools

### 1. Complete Validation Script Package

Create a comprehensive validation suite at: `/scripts/hreflang-validation/`

**Directory Structure:**
```
/scripts/hreflang-validation/
├── validate-all.js           # Main validation runner
├── check-self-references.js  # Validates self-referencing tags
├── check-bidirectional.js    # Validates return links
├── check-url-consistency.js  # Validates URL format consistency
├── check-sitemap.js          # Validates sitemap hreflang
├── test-live-urls.js         # Tests URL accessibility (200 status)
└── report-generator.js       # Generates validation report
```

**Master Validation Runner:**
```javascript
// validate-all.js
// Usage: node scripts/hreflang-validation/validate-all.js [client-name]

const checkSelfReferences = require('./check-self-references');
const checkBidirectional = require('./check-bidirectional');
const checkUrlConsistency = require('./check-url-consistency');
const checkSitemap = require('./check-sitemap');
const testLiveUrls = require('./test-live-urls');
const generateReport = require('./report-generator');

async function runFullValidation(clientName) {
  console.log(`🔍 Running hreflang validation for ${clientName}...\n`);

  const results = {
    clientName,
    timestamp: new Date().toISOString(),
    tests: []
  };

  // Test 1: Self-references
  console.log('📝 Test 1: Checking self-references...');
  const selfRefResults = await checkSelfReferences(clientName);
  results.tests.push({
    name: 'Self-References',
    passed: selfRefResults.errors.length === 0,
    errors: selfRefResults.errors
  });

  // Test 2: Bidirectional linking
  console.log('📝 Test 2: Checking bidirectional links...');
  const bidirectionalResults = await checkBidirectional(clientName);
  results.tests.push({
    name: 'Bidirectional Links',
    passed: bidirectionalResults.errors.length === 0,
    errors: bidirectionalResults.errors
  });

  // Test 3: URL consistency
  console.log('📝 Test 3: Checking URL consistency...');
  const consistencyResults = await checkUrlConsistency(clientName);
  results.tests.push({
    name: 'URL Consistency',
    passed: consistencyResults.errors.length === 0,
    errors: consistencyResults.errors
  });

  // Test 4: Sitemap validation
  console.log('📝 Test 4: Validating sitemap...');
  const sitemapResults = await checkSitemap(clientName);
  results.tests.push({
    name: 'Sitemap Hreflang',
    passed: sitemapResults.errors.length === 0,
    errors: sitemapResults.errors
  });

  // Test 5: Live URL tests
  console.log('📝 Test 5: Testing live URLs...');
  const liveUrlResults = await testLiveUrls(clientName);
  results.tests.push({
    name: 'Live URL Accessibility',
    passed: liveUrlResults.errors.length === 0,
    errors: liveUrlResults.errors
  });

  // Generate report
  const report = generateReport(results);
  console.log('\n' + report);

  // Exit with error if any test failed
  const allPassed = results.tests.every(test => test.passed);
  process.exit(allPassed ? 0 : 1);
}

// Get client name from command line or environment
const clientName = process.argv[2] || process.env.CLIENT_NAME;
if (!clientName) {
  console.error('❌ Error: Client name required');
  console.error('Usage: node validate-all.js [client-name]');
  process.exit(1);
}

runFullValidation(clientName);
```

### 2. Quick Pre-Deployment Check

**One-line validation command:**
```bash
# Run before deploying
npm run validate:hreflang [client-name]

# Add to package.json:
{
  "scripts": {
    "validate:hreflang": "node scripts/hreflang-validation/validate-all.js"
  }
}
```

### 3. CI/CD Integration (GitHub Actions)

**Automated validation on every deployment:**

```yaml
# .github/workflows/validate-hreflang.yml
name: Validate Hreflang

on:
  push:
    branches: [main, deploy-*]
  pull_request:
    branches: [main]

jobs:
  validate-hreflang:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Run hreflang validation
        run: |
          npm run validate:hreflang ${{ github.event.repository.name }}

      - name: Upload validation report
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: hreflang-validation-report
          path: reports/hreflang-validation-*.json
```

### 4. Post-Deployment Monitoring Script

**Check live site after deployment:**

```javascript
// post-deployment-check.js
// Run after Vercel deployment completes

const fetch = require('node-fetch');

async function postDeploymentCheck(domains) {
  const errors = [];

  for (const domain of domains) {
    console.log(`\n🔍 Checking ${domain}...`);

    // Test homepage
    const homeUrl = `https://${domain}/`;
    const homeResponse = await fetch(homeUrl);

    if (homeResponse.status !== 200) {
      errors.push(`❌ ${domain}: Homepage returned ${homeResponse.status}`);
      continue;
    }

    // Test sample blog post (replace with actual URL)
    const blogUrl = `https://${domain}/en/blog/excavator-guide/`;
    const blogResponse = await fetch(blogUrl);

    if (blogResponse.status !== 200) {
      errors.push(`❌ ${domain}: Blog post returned ${blogResponse.status}`);
      continue;
    }

    // Parse and validate hreflang
    const html = await blogResponse.text();
    const hreflangTags = extractHreflangTags(html);

    if (hreflangTags.length === 0) {
      errors.push(`❌ ${domain}: No hreflang tags found`);
    } else {
      console.log(`✅ ${domain}: ${hreflangTags.length} hreflang tags found`);
    }

    // Check for self-reference
    const selfRef = hreflangTags.find(tag => tag.href.includes(blogUrl));
    if (!selfRef) {
      errors.push(`❌ ${domain}: Missing self-reference hreflang`);
    }
  }

  return errors;
}

// Run for all deployments
const domains = [
  'acme-corp.com',           // EN primary
  'zh.acme-corp.com',        // ZH primary (if multi-deployment)
  'ms.acme-corp.com'         // MS primary (if multi-deployment)
];

postDeploymentCheck(domains).then(errors => {
  if (errors.length === 0) {
    console.log('\n✅ All post-deployment checks passed!');
  } else {
    console.error('\n❌ Post-deployment errors found:');
    errors.forEach(error => console.error(error));
    process.exit(1);
  }
});
```

### 5. Google Search Console API Integration

**Automate GSC submission and monitoring:**

```javascript
// gsc-hreflang-monitor.js
// Monitor hreflang errors in Google Search Console

const { google } = require('googleapis');

async function checkGSCHreflangErrors(siteUrl) {
  // Authenticate with GSC API
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GSC_SERVICE_ACCOUNT_KEY,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  // Get hreflang errors from International Targeting report
  const response = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: getDateDaysAgo(7),
      endDate: getTodayDate(),
      dimensions: ['page'],
      type: 'web',
      rowLimit: 1000
    }
  });

  // Parse for hreflang-related issues
  const hreflangErrors = [];

  // Check for common errors
  const commonErrors = [
    'alternate page with missing return link',
    'alternate page without canonical tag',
    'conflicting hreflang',
    'incorrect hreflang'
  ];

  // Query each error type
  for (const errorType of commonErrors) {
    const errors = await searchconsole.urlInspection.index.inspect({
      inspectionUrl: `${siteUrl}*`,
      includeRequestBody: {
        richResultsTypes: [],
        requestFilter: {
          canonicalUrl: errorType
        }
      }
    });

    if (errors.data && errors.data.inspectionResult) {
      hreflangErrors.push({
        type: errorType,
        count: errors.data.inspectionResult.indexStatusResult.verdict,
        urls: errors.data.inspectionResult.indexStatusResult.coverageState
      });
    }
  }

  return hreflangErrors;
}

// Monitor all properties
const sites = [
  'https://acme-corp.com/',
  'https://zh.acme-corp.com/',
  'https://ms.acme-corp.com/'
];

Promise.all(sites.map(checkGSCHreflangErrors)).then(results => {
  console.log('📊 GSC Hreflang Error Report\n');

  results.forEach((errors, index) => {
    console.log(`\n${sites[index]}:`);
    if (errors.length === 0) {
      console.log('✅ No hreflang errors');
    } else {
      errors.forEach(error => {
        console.log(`❌ ${error.type}: ${error.count} pages affected`);
      });
    }
  });
});
```

### 6. Validation Dashboard

**Real-time monitoring dashboard:**

```javascript
// Start validation server
node scripts/hreflang-validation/dashboard.js

// Access at: http://localhost:3000/validation-dashboard
// Shows:
// - Latest validation results
// - Historical error trends
// - Per-language status
// - GSC error tracking
```

---

## Execution Timing
- Per client (3 posts): ~30 seconds
- 50 clients (150 posts): ~5 minutes total
- Includes: file moves, Git operations, Vercel deployment

## Agent Usage
This skill is executed by: **Publishing Agent**
Triggered by command: `/publish-approved`

## Success Criteria
✅ All A/ files published to website
✅ Git commits successful
✅ Vercel deployments successful
✅ All URLs live and accessible
✅ Content calendar updated
✅ Approved drafts archived
✅ No errors in deployment logs

## Output Summary
```
📊 PUBLISHING SUMMARY

Client: [client-name]
Total posts published: 3
- English: 1
- Mandarin: 1
- Malay: 1

Git commits: 1
Vercel deployments: 1 (or 3 if multi-deployment)

Deployment successful ✅

Published URLs:
- https://[client-name].com/en/blog/[slug]
- https://[client-name].com/zh/blog/[slug]
- https://[client-name].com/ms/blog/[slug]

(Or language-specific subdomains if multi-deployment)

Execution time: 2-5 minutes
```

---

## Multi-Language Deployment Support

**For clients with multiple Vercel deployments per language**, this workflow automatically handles deployment to all language versions.

### How It Works

1. **Content is written once** in `/content/[lang]/blogs/`
2. **Shared across all deployments** (no duplication)
3. **Git push goes to multiple branches:**
   - `main` → primary branch
   - `deploy-en` → English-primary deployment
   - `deploy-zh` → Chinese-primary deployment
   - `deploy-ms` → Malay-primary deployment
4. **Vercel builds all in parallel** (5 min total, not 15 min)

### Client Configuration

Check client's `website/config/` folder:

**If single deployment:**
- Only `vercel.json` exists
- Use standard push: `git push origin main`

**If multi-deployment:**
- `config/deploy-en.json`, `config/deploy-zh.json`, `config/deploy-ms.json` exist
- Use multi-push:
  ```bash
  git push origin main:deploy-en --force
  git push origin main:deploy-zh --force
  git push origin main:deploy-ms --force
  ```

### Benefits

✅ **No content duplication** - write once, deploy many times
✅ **Parallel deployment** - all language versions update simultaneously
✅ **Language-specific domains** - apexmachinery.com, zh.apexmachinery.com, ms.apexmachinery.com
✅ **Better SEO** - each language has its own "primary" site

**See `multi-language-deployment.md` for complete architecture details.**
