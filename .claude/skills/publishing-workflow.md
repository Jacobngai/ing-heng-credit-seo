# Publishing Workflow Skill

## Purpose
Deploy all approved content (A/ prefix) to production websites with Git and Vercel automation.

## Prerequisites
- Employee has reviewed and approved content (renamed D/ to A/)
- Client website repository exists
- Vercel deployment configured

## Workflow Steps

### Step 1: Find All Approved Content
Scan all client folders for A/ prefixed files:

```bash
Scan: /clients/*/drafts/A/*.md

Example finds:
/clients/acme-corp/drafts/A/2025-11-01-excavator-guide-en.md
/clients/acme-corp/drafts/A/2025-11-01-excavator-guide-zh.md
/clients/acme-corp/drafts/A/2025-11-01-excavator-guide-ms.md
/clients/tech-startup/drafts/A/2025-11-01-cloud-migration-en.md
...
```

**Group by client** for efficient processing.

---

### Step 2: Generate Final Blog Posts
For each approved file:

#### 2.1 Read Approved Draft
```
Read: /clients/[client]/drafts/A/[filename].md
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
Source: /clients/acme-corp/drafts/A/2025-11-01-excavator-guide-en.md

Destination: /clients/acme-corp/website/src/content/posts/en/2025/11/excavator-guide.md

Language structure:
/website/src/content/posts/
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

#### 4.1 Update sitemap.xml
Add new URLs:
```xml
<url>
  <loc>https://acme-corp.com/en/blog/excavator-guide</loc>
  <lastmod>2025-11-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  <xhtml:link rel="alternate" hreflang="zh" href="https://acme-corp.com/zh/blog/excavator-guide"/>
  <xhtml:link rel="alternate" hreflang="ms" href="https://acme-corp.com/ms/blog/excavator-guide"/>
</url>
```

#### 4.2 Update RSS feed
Add to rss.xml (per language):
```xml
<item>
  <title>Equipment Financing Guide 2025</title>
  <link>https://acme-corp.com/en/blog/excavator-guide</link>
  <pubDate>Fri, 01 Nov 2025 00:00:00 GMT</pubDate>
  <description>Complete guide to equipment financing for Malaysian contractors...</description>
</item>
```

---

### Step 5: Git Commit & Push

#### 5.1 Git Add
```bash
cd /clients/acme-corp/website/
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
git push origin main
```

**For Multi-Deployment Clients** (see `multi-language-deployment.md`):
```bash
# Push to main
git push origin main

# Also push to all language deployment branches
git push origin main:deploy-en --force
git push origin main:deploy-zh --force
git push origin main:deploy-ms --force
```

This triggers separate Vercel deployments for each language version.

**Error handling:**
- If push fails → retry once
- If still fails → save error log and notify user
- If conflicts → abort and notify user for manual resolution

---

### Step 6: Vercel Auto-Deploy

**Single Deployment:**
Vercel automatically deploys on push to main branch.

**Multi-Deployment:**
Vercel deploys all language versions in parallel (one build per language branch).

**Monitoring:**
```
Wait for Vercel webhook response:
- Building... (1-2 minutes per deployment)
- Deploying... (30 seconds per deployment)
- Success! ✅

Single-deployment URL:
https://acme-corp.vercel.app

Multi-deployment URLs:
- EN: https://acme-corp.vercel.app
- ZH: https://zh.acme-corp.vercel.app
- MS: https://ms.acme-corp.vercel.app
```

**Verify deployment:**
- Check deployment logs
- Verify URLs are live
- Test hreflang tags
- Validate sitemap

---

### Step 7: Archive Approved Drafts
Move published files from A/ to archive:

```bash
Source: /clients/acme-corp/drafts/A/2025-11-01-excavator-guide-en.md

Destination: /clients/acme-corp/drafts/archive/2025/11/2025-11-01-excavator-guide-en.md
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

## Batch Processing

### Process Multiple Clients
For efficiency, process all clients in one Git workflow:

```bash
For each client with A/ files:
  1. Generate final posts
  2. Move to website folder
  3. Git add

After all clients processed:
  1. Git commit (batch message)
  2. Git push (batch)
  3. Vercel deploys all sites in parallel
```

**Batch commit message:**
```
feat: Publish daily content for 50 clients

Total posts published: 150
- 50 topics
- 3 languages per topic (EN/ZH/MS)

Clients updated:
- acme-corp (3 posts)
- tech-startup (3 posts)
- retail-co (3 posts)
... [list all]

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

### Manual Checks (Optional)
- Google Search Console submission
- Social media preview
- Mobile responsiveness
- Page speed score

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

Total clients processed: 50
Total posts published: 150
- English: 50
- Mandarin: 50
- Malay: 50

Git commits: 50 (1 per client)
Vercel deployments: 50 (parallel)

All deployments successful ✅

Published URLs:
- https://acme-corp.com/en/blog/excavator-guide
- https://acme-corp.com/zh/blog/excavator-guide
- https://acme-corp.com/ms/blog/excavator-guide
... [list all]

Execution time: 5 minutes 23 seconds
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
