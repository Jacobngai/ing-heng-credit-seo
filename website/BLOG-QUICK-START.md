# Blog System Quick Start Guide

**For:** Ing Heng Credit Website
**Date:** October 10, 2025

---

## Files Created

### Components (All Complete ✅)
1. `src/components/RelatedPosts.astro` - Related blog posts display
2. `src/components/TableOfContents.astro` - Auto-generated TOC with active highlighting
3. `src/components/ShareButtons.astro` - Social media share buttons
4. `src/components/NewsletterSignup.astro` - Email subscription form

### Layouts (Complete ✅)
1. `src/layouts/BlogLayout.astro` - Full-featured blog post template

### Directories Created (Complete ✅)
1. `src/content/blogs/en/` - English blog posts
2. `src/content/blogs/zh/` - Mandarin blog posts
3. `src/content/blogs/ms/` - Malay blog posts
4. `src/pages/en/blog/` - English blog pages
5. `src/pages/zh/blog/` - Mandarin blog pages
6. `src/pages/ms/blog/` - Malay blog pages

---

## Next Steps to Complete Blog System

### Step 1: Create Blog Index Pages (15 minutes)

Copy the **Template A** from `BLOG-SYSTEM-IMPLEMENTATION-REPORT.md` section II to create:

```
src/pages/en/blog/index.astro
src/pages/zh/blog/index.astro
src/pages/ms/blog/index.astro
```

**What to change in each file:**
- Line 13: Change `const locale = 'en'` to `'zh'` or `'ms'`
- That's it! Translations are automatic.

---

### Step 2: Create Dynamic Blog Post Pages (15 minutes)

Copy the **Template B** from `BLOG-SYSTEM-IMPLEMENTATION-REPORT.md` section II to create:

```
src/pages/en/blog/[slug].astro
src/pages/zh/blog/[slug].astro
src/pages/ms/blog/[slug].astro
```

**What to change in each file:**
- Line 10: Change `const locale = 'en'` to `'zh'` or `'ms'`
- That's it! Everything else is automatic.

---

### Step 3: Migrate Existing Blog Posts (30 minutes)

**Copy files from parent project:**

```bash
# English
cp "../en/blogs/equipment-financing-seasonal-cash-flow.md" "src/content/blogs/en/"

# Mandarin
cp "../zh/blogs/lorry-financing-fleet-expansion-guide.md" "src/content/blogs/zh/"

# Malay
cp "../ms/blogs/panduan-pembiayaan-forklift-sewa-vs-beli.md" "src/content/blogs/ms/"
```

**Update frontmatter in each file:**

1. Change these field names:
   - `date` → `publishDate`
   - `updated` → `updatedDate`
   - `meta_description` → `description`
   - `language` → `locale`
   - `featured_image` → `ogImage`
   - `estimated_reading_time` → `readingTime` (number only)

2. Remove these fields:
   - `slug` (Astro uses filename)
   - `target_keyword` (move to keywords array)
   - `secondary_keywords` (merge into keywords array)
   - `featured_image_alt` (not needed)
   - `schema_type` (handled automatically)
   - `internal_links` (not needed in frontmatter)
   - `cta_primary` (not needed in frontmatter)
   - `cta_secondary` (not needed in frontmatter)
   - `seo_priority` (not needed)
   - `featured_snippet_target` (not needed)

3. Convert `related_personas` to `persona` (choose primary one):
   - `related_personas: ["Excavator Contractor"]` → `persona: "Contractor Ahmad"`

4. Set `locale`:
   - English files: `locale: "en"`
   - Mandarin files: `locale: "zh"`
   - Malay files: `locale: "ms"`

**Example Conversion:**

**Before:**
```yaml
---
title: "How Equipment Financing Helps..."
meta_description: "Learn how equipment financing..."
slug: equipment-financing-seasonal-cash-flow
date: 2025-10-10
updated: 2025-10-10
category: Equipment Financing
tags:
  - equipment financing
  - seasonal cash flow
author: Ing Heng Credit
featured_image: /images/blog/construction-seasonal-cash-flow.jpg
target_keyword: equipment financing seasonal cash flow
secondary_keywords:
  - construction equipment financing
  - seasonal cash flow management
related_personas:
  - Excavator Contractor
estimated_reading_time: 9 minutes
language: en
---
```

**After:**
```yaml
---
title: "How Equipment Financing Helps..."
description: "Learn how equipment financing..."
publishDate: 2025-10-10
updatedDate: 2025-10-10
author: "Ing Heng Credit & Leasing"
category: "Equipment Financing"
tags:
  - equipment financing
  - seasonal cash flow
  - construction equipment financing
  - seasonal cash flow management
keywords:
  - equipment financing seasonal cash flow
  - construction equipment financing
  - seasonal cash flow management
ogImage: "/images/blog/construction-seasonal-cash-flow.jpg"
persona: "Contractor Ahmad"
featured: false
draft: false
locale: "en"
readingTime: 9
---
```

---

### Step 4: Test Locally (10 minutes)

```bash
cd website
npm run dev
```

Visit:
- http://localhost:4321/en/blog
- http://localhost:4321/zh/blog
- http://localhost:4321/ms/blog

Check:
- ✅ Blog index loads
- ✅ Blog posts display
- ✅ Search works
- ✅ Category filter works
- ✅ Share buttons work
- ✅ TOC navigation works
- ✅ Related posts appear

---

### Step 5: Fix Any Errors (Variable time)

Run type check:
```bash
npm run astro check
```

Common issues and fixes:

**Error:** "Property 'publishDate' is missing"
**Fix:** Add `publishDate: 2025-10-10` to frontmatter

**Error:** "Type 'string' is not assignable to type 'Date'"
**Fix:** Ensure dates are in YYYY-MM-DD format, not full ISO strings

**Error:** "Property 'locale' is missing"
**Fix:** Add `locale: "en"` (or "zh"/"ms") to frontmatter

**Error:** "Category 'X' is not valid"
**Fix:** Must use one of these exact values from config.ts:
- Equipment Financing
- Construction Equipment
- Logistics Equipment
- Business Tips
- Industry News
- Case Studies
- Financing Guides

---

## Creating New Blog Posts

### Using Multilingual SEO Specialist Agent

The quickest way to create new blog posts is using the custom agent:

**In your terminal/chat:**
```
Use the Multilingual SEO Specialist agent to create a blog post about "Excavator Financing for Contractors" in all 3 languages.
```

The agent will:
1. Research keywords for each language independently
2. Create culturally-adapted content (not translations)
3. Format with proper frontmatter
4. Include FAQ schema
5. Add internal links
6. Optimize for SEO

### Manual Creation

Create a new file: `src/content/blogs/en/new-post-slug.md`

```yaml
---
title: "Your Blog Post Title"
description: "Meta description 150-160 characters"
publishDate: 2025-10-10
author: "Ing Heng Credit & Leasing"

category: "Equipment Financing"
tags:
  - excavator
  - financing
  - contractors

keywords:
  - excavator financing
  - construction equipment loans
  - contractor financing

ogImage: "/images/blog/new-post-slug.jpg"
persona: "Contractor Ahmad"
featured: false
draft: false
locale: "en"
readingTime: 8

faqSchema:
  - question: "How long does excavator financing approval take?"
    answer: "With Ing Heng Credit, you can get approved in 2 hours..."
  - question: "What's the minimum down payment?"
    answer: "We accept down payments as low as 10%..."
---

# Your Blog Post Title

Your introduction paragraph here...

## First Section

Content here...

## Second Section

More content...

## Frequently Asked Questions

### How long does excavator financing approval take?

With Ing Heng Credit, you can get approved in 2 hours...

### What's the minimum down payment?

We accept down payments as low as 10%...

## Conclusion

Final thoughts and CTA...
```

---

## Blog Content Checklist

Every blog post should have:

### Structure
- [ ] H1 title (only one)
- [ ] 4-6 H2 sections
- [ ] H3 subsections where needed
- [ ] Introduction (150-200 words)
- [ ] Conclusion (150-200 words)
- [ ] 1,500-2,500 words total

### SEO
- [ ] Primary keyword in title
- [ ] Primary keyword in first paragraph
- [ ] 5-8 keywords throughout
- [ ] Meta description 150-160 chars
- [ ] Alt text for images
- [ ] 3-5 internal links
- [ ] 2-3 external links

### Engagement
- [ ] 2-3 CTAs in content
- [ ] WhatsApp CTA in conclusion
- [ ] FAQ section (5-7 questions)
- [ ] Schema markup (in frontmatter)
- [ ] Category and tags
- [ ] Featured image

### Multilingual
- [ ] Culturally adapted (not just translated)
- [ ] Language-specific examples
- [ ] Appropriate tone for locale
- [ ] Local references and context

---

## Adding Blog Links to Navigation

### Header.astro

Find the navigation section and add:

```astro
<!-- Desktop Navigation -->
<nav class="hidden md:flex items-center gap-6">
  <a href={`/${lang}`}>Home</a>
  <a href={`/${lang}/services`}>Services</a>
  <a href={`/${lang}/equipment`}>Equipment</a>
  <a href={`/${lang}/blog`}>Blog</a> <!-- ADD THIS -->
  <a href={`/${lang}/about`}>About</a>
  <a href={`/${lang}/contact`}>Contact</a>
</nav>

<!-- Mobile Navigation -->
<nav class="md:hidden">
  <a href={`/${lang}`}>Home</a>
  <a href={`/${lang}/services`}>Services</a>
  <a href={`/${lang}/equipment`}>Equipment</a>
  <a href={`/${lang}/blog`}>Blog</a> <!-- ADD THIS -->
  <a href={`/${lang}/about`}>About</a>
  <a href={`/${lang}/contact`}>Contact</a>
</nav>
```

### Footer.astro

Find the quick links section and add:

```astro
<div>
  <h4>Resources</h4>
  <ul>
    <li><a href={`/${lang}/blog`}>Blog</a></li>
    <li><a href={`/${lang}/blog/category/equipment-financing`}>Equipment Financing</a></li>
    <li><a href={`/${lang}/blog/category/construction-equipment`}>Construction</a></li>
  </ul>
</div>
```

---

## Newsletter Integration

### Mailchimp Setup

1. **Get your Mailchimp API key and List ID**
2. **Create API endpoint:** `src/pages/api/newsletter-subscribe.ts`

```typescript
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, locale } = await request.json();

    // Mailchimp API call
    const MAILCHIMP_API_KEY = import.meta.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = import.meta.env.MAILCHIMP_LIST_ID;
    const DATACENTER = MAILCHIMP_API_KEY.split('-')[1];

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            LANGUAGE: locale,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Mailchimp API error');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Subscription failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
```

3. **Update `.env` file:**
```
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_LIST_ID=your-list-id-here
```

4. **Uncomment the fetch in NewsletterSignup.astro**

---

## Image Requirements

For each blog post, prepare:

### Featured Image (OG Image)
- **Size:** 1200×630px
- **Format:** JPG (optimized, <200KB)
- **Location:** `/public/images/blog/[slug].jpg`
- **Naming:** Use slug (e.g., `equipment-financing-seasonal-cash-flow.jpg`)

### Where to Get Images
- Unsplash.com (free, high-quality)
- Pexels.com (free)
- Canva.com (create custom graphics)
- DALL-E / Midjourney (AI-generated)
- Hire designer on Fiverr

### Optimization Tools
- TinyPNG.com - Compress JPG/PNG
- Squoosh.app - Google's image optimizer
- ImageOptim (Mac app)

---

## Testing Before Launch

### Local Testing
```bash
npm run dev
# Visit http://localhost:4321/en/blog
```

### Build Testing
```bash
npm run build
npm run preview
# Visit http://localhost:4321/en/blog
```

### Type Checking
```bash
npm run astro check
```

### Performance Testing
1. Open Chrome DevTools
2. Run Lighthouse audit
3. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

---

## Deployment

### Deploy to Vercel/Netlify

```bash
git add .
git commit -m "Add complete blog system with multilingual support"
git push origin main
```

Vercel/Netlify will auto-deploy.

### Manual Build

```bash
npm run build
# Upload `dist/` folder to your server
```

---

## Post-Launch Tasks

### Day 1
- [ ] Submit sitemap to Google Search Console
- [ ] Test all blog links work
- [ ] Share first blog post on social media
- [ ] Send email to existing customers

### Week 1
- [ ] Monitor Google Analytics for blog traffic
- [ ] Check for any 404 errors
- [ ] Review most popular posts
- [ ] Plan next 3 blog topics

### Month 1
- [ ] Analyze blog performance
- [ ] Optimize top-performing posts
- [ ] Create internal links from services to blog
- [ ] Set up content calendar

---

## Common Issues & Solutions

### Issue: Blog posts not appearing
**Solution:** Check `draft: false` in frontmatter and `locale` matches page

### Issue: Images not loading
**Solution:** Ensure images are in `/public/images/blog/` and paths start with `/`

### Issue: Schema errors in Google
**Solution:** Use Rich Results Test: https://search.google.com/test/rich-results

### Issue: Related posts not showing
**Solution:** Need at least 2 posts in same category for related posts to appear

### Issue: TOC not highlighting
**Solution:** Ensure headings have IDs (Astro auto-generates them)

### Issue: Search not working
**Solution:** Clear browser cache and reload page

---

## Support & Documentation

**Full Report:** `BLOG-SYSTEM-IMPLEMENTATION-REPORT.md`

**Astro Docs:**
- Content Collections: https://docs.astro.build/en/guides/content-collections/
- Markdown: https://docs.astro.build/en/guides/markdown-content/

**SEO Tools:**
- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/

---

**Quick Start Complete!**

You now have everything needed to launch a world-class multilingual blog system.

Next step: Copy the templates and start creating content!
