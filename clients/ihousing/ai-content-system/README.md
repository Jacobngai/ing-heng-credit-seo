# AI Content Generation System

**Automated content production for iHousing SEO strategy**

**Production Target:** 180 posts/month = 60 EN + 60 ZH + 60 MS

---

## System Overview

This system automates the generation of SEO-optimized blog content for iHousing across 3 languages (English, Chinese, Malay). It consists of 4 main components:

| Component | File | Purpose |
|-----------|------|---------|
| **Keyword-to-Post Mapper** | `keyword-to-post-mapper.ts` | Auto-assigns keywords to content posts |
| **Content Templates** | `templates/content-templates.ts` | Pre-built templates for each content type |
| **AI Prompt Library** | `prompts/ai-prompt-library.ts` | Curated prompts for AI content generation |
| **Publishing Scheduler** | `scheduler/publishing-scheduler.ts` | Automates scheduling and deployment |

---

## Quick Start

### 1. Generate Monthly Schedule

```typescript
import { generateMonthlySchedule } from "./scheduler/publishing-scheduler";

// Generate schedule for current month
const schedule = generateMonthlySchedule(
  new Date().getMonth() + 1,
  new Date().getFullYear()
);

console.log(`Total posts: ${schedule.totalPosts}`);
console.log(`EN: ${schedule.byLanguage.en}`);
console.log(`ZH: ${schedule.byLanguage.zh}`);
console.log(`MS: ${schedule.byLanguage.ms}`);
```

### 2. Assign Keywords to Posts

```typescript
import { assignKeywordsForMonth } from "./keyword-to-post-mapper";

// Get 60 English posts for this month
const enPosts = assignKeywordsForMonth("en", 1, 2025);

// Each post includes:
// - Target keyword (primary SEO focus)
// - Secondary keywords (related terms)
// - Awareness stage (funnel position)
// - Content type (blog/landing/guide)
```

### 3. Generate Content Using Template

```typescript
import { getTemplate } from "./templates/content-templates";
import { generateContentPrompt } from "./prompts/ai-prompt-library";

// Get template for this category
const template = getTemplate(post.category, post.language);

// Generate AI prompt
const prompt = generateContentPrompt(post, template);

// Send to AI (Claude/GPT-4) to generate content
const content = await callAI(prompt);
```

### 4. Quality Check & Deploy

```typescript
import { runQualityChecks } from "./scheduler/publishing-scheduler";
import { prepareDeploymentBundles } from "./scheduler/publishing-scheduler";

// Run quality checks
const quality = runQualityChecks(post);

if (quality.approved) {
  // Prepare for deployment
  const bundles = prepareDeploymentBundles(allPosts, month, year);

  // Deploy to Vercel (3 separate projects)
  for (const bundle of bundles) {
    await deployToVercel(bundle);
  }
}
```

---

## Content Categories

| Category | Awareness Stage | Posts/Month | Focus |
|----------|----------------|-------------|-------|
| Problem-Aware (Empty) | Problem-Aware | 20 | Empty property pain points |
| Problem-Aware (Tenant) | Problem-Aware | 10 | Tenant nightmare stories |
| Solution-Aware | Solution-Aware | 30 | Airbnb education, ROI |
| Product-Aware | Product-Aware | 15 | Self-manage vs hire |
| Decision-Stage | Decision | 15 | Pricing, switching |
| Financial/ROI | Solution-Aware | 20 | Cost breakdown, calculator |
| Condo-Specific | Product-Aware | 20 | 10 condos × 2 pages each |
| Furnishing/Setup | Implementation | 30 | Practical guides |
| Cost/Budget | Solution-Aware | 20 | Startup costs breakdown |

---

## Critical Business Rules

### 1. FLAT FEE PRICING (Parkland Avenue ONLY)

**Parkland Avenue by the Sea:**
- 1 Room: RM200/month
- 2 Rooms: RM250/month
- 3 Rooms: RM300/month
- **CTA:** "Pre-register now" / "Lock in your pricing"

**All Other Condos (Silverscape, The Shore, etc.):**
- Pricing: Discussed via WhatsApp
- **CTA:** "WhatsApp us for custom pricing for [Condo Name]"
- **NEVER mention flat fee** for non-Parkland condos

### 2. Key Differentiators (Always Include)

1. **100+ Properties Managed** - Social proof, 8 years experience
2. **5-Platform Listing** - Airbnb + Booking.com + Agoda + Expedia + VRBO = 60% more bookings
3. **In-House Cleaning** - No markup, consistent quality
4. **Melaka Focus** - Local SEO domination
5. **Switching Made Easy** - Smooth transition process

### 3. WhatsApp CTA (Every Page)

**Primary CTA:**
```
"Enter your phone number and we'll WhatsApp you with a free analysis of your condo's potential."
```

**Parkland Avenue CTA:**
```
"Pre-register for Parkland Avenue now and lock in exclusive flat fee pricing."
```

---

## Content Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CONTENT PIPELINE                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. KEYWORD RESEARCH (D/)                                           │
│     ├── 285 keywords identified                                    │
│     ├── KD < 20 (low competition)                                   │
│     └── Organized by category + language                            │
│                                                                     │
│  2. KEYWORD-TO-POST MAPPER                                          │
│     ├── Auto-assign keywords to posts                               │
│     ├── 60 posts/language/month                                     │
│     └── Determine content type + stage                              │
│                                                                     │
│  3. TEMPLATE SELECTION                                              │
│     ├── Choose template by category                                 │
│     ├── Get structure, SEO config, CTA                              │
│     └── Generate AI prompt                                          │
│                                                                     │
│  4. AI CONTENT GENERATION                                           │
│     ├── Send prompt to Claude/GPT-4                                 │
│     ├── Receive structured content                                  │
│     └── Include: title, body, meta, CTA                             │
│                                                                     │
│  5. QUALITY CHECKS                                                  │
│     ├── SEO: keyword density, meta description                     │
│     ├── Content: word count, headings                               │
│     ├── Brand: iHousing mentions, data points                      │
│     └── CTA: WhatsApp included?                                     │
│                                                                     │
│  6. SLUG MANIFEST UPDATE                                            │
│     ├── Add slug to SLUG_MANIFEST.json                              │
│     ├── Prevents orphaned pages                                     │
│     └── Single source of truth                                      │
│                                                                     │
│  7. PUBLISH (Skip D/A/F for blogs)                                  │
│     ├── Create .astro or .md file                                   │
│     ├── Add frontmatter metadata                                    │
│     └── Commit to git                                               │
│                                                                     │
│  8. DEPLOY                                                          │
│     ├── Build site locally                                          │
│     ├── Run sitemap checker                                         │
│     ├── Deploy to 3 Vercel projects (EN/ZH/MS)                     │
│     └── GitHub Action runs link check                               │
│                                                                     │
│  9. GSC FEEDBACK LOOP                                               │
│     ├── Monitor impressions/CTR/position                            │
│     ├── Low impressions → update SEO                                │
│     ├── Low CTR → rewrite title/meta                                │
│     └── High performance → create similar content                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
clients/ihousing/ai-content-system/
├── keyword-to-post-mapper.ts      # Auto-assign keywords to posts
├── templates/
│   └── content-templates.ts       # Pre-built content templates
├── prompts/
│   └── ai-prompt-library.ts       # Curated AI generation prompts
├── scheduler/
│   └── publishing-scheduler.ts   # Scheduling + deployment automation
├── README.md                      # This file
└── USAGE.md                       # Detailed usage guide
```

---

## Usage Examples

### Example 1: Generate Single Blog Post

```typescript
import { assignKeywordsForMonth } from "./keyword-to-post-mapper";
import { getTemplate } from "./templates/content-templates";
import { generateContentPrompt } from "./prompts/ai-prompt-library";

// Step 1: Get next pending English keyword
const posts = assignKeywordsForMonth("en", 1, 2025);
const post = posts[0]; // First post

// Step 2: Get template
const template = getTemplate(post.category, "en");

// Step 3: Generate AI prompt
const prompt = generateContentPrompt(post, template);

// Step 4: Send to AI (pseudo-code)
const content = await claude.generate(prompt);

// Step 5: Create file
const filePath = `clients/ihousing/website/src/pages/en/blog/${post.slug}.md`;
await writeFile(filePath, content);

// Step 6: Update SLUG_MANIFEST.json
await updateSlugManifest({
  slug: post.slug,
  title: post.title,
  category: post.category,
  language: "en",
});
```

### Example 2: Batch Generate Month Content

```typescript
import { generateMonthlySchedule, queueContentForGeneration } from "./scheduler/publishing-scheduler";
import { prioritizePosts } from "./scheduler/publishing-scheduler";

// Step 1: Generate schedule
const schedule = generateMonthlySchedule(1, 2025);

// Step 2: Queue all posts
const tasks = queueContentForGeneration(schedule);

// Step 3: Prioritize by strategic value
const prioritized = prioritizePosts(tasks);

// Step 4: Generate in batches
const batchSize = 10;
for (let i = 0; i < prioritized.length; i += batchSize) {
  const batch = prioritized.slice(i, i + batchSize);

  // Process batch in parallel
  await Promise.all(batch.map(async (post) => {
    const content = await generateContent(post);
    await saveContent(post, content);
  }));

  console.log(`Batch ${i / batchSize + 1} complete`);
}
```

### Example 3: Deploy to Vercel (3 Languages)

```bash
#!/bin/bash

# 1. Deploy English
echo '{"projectId":"prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://en.ihousing-temp.vercel.app \
  --env SITE_URL=https://en.ihousing-temp.vercel.app

# 2. Deploy Malay
echo '{"projectId":"prj_eKJtQcTcOd69sER92xq8NeS1SD4y","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://ms.ihousing-temp.vercel.app \
  --env SITE_URL=https://ms.ihousing-temp.vercel.app

# 3. Deploy Chinese
echo '{"projectId":"prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://zh.ihousing-temp.vercel.app \
  --env SITE_URL=https://zh.ihousing-temp.vercel.app
```

---

## Project IDs (Vercel)

| Language | Project ID | Domain |
|----------|------------|--------|
| EN | `prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw` | en.ihousing-temp.vercel.app |
| ZH | `prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7` | zh.ihousing-temp.vercel.app |
| MS | `prj_eKJtQcTcOd69sER92xq8NeS1SD4y` | ms.ihousing-temp.vercel.app |

**Team ID:** `team_ZRACGuujUQkB6IRfNtWpe0T6`

---

## Tracking & Analytics

### Google Search Console (GSC)

**Track:**
- Impressions per keyword
- Click-through rate (CTR)
- Average position
- Top performing pages

**Feedback Loop:**
1. Monthly GSC export
2. Identify low-performing content (<100 impressions)
3. Update title/meta description
4. Add internal links
5. Monitor improvement

### Monthly KPIs

| Metric | Month 1 Target | Month 6 Target | Month 12 Target |
|--------|----------------|----------------|------------------|
| Keywords in Top 10 | 30 | 150 | 220+ |
| Organic traffic | 500 | 1,500 | 2,500+ |
| WhatsApp leads | 50 | 150 | 250+ |
| Avg. position | 15 | 8 | <5 |

---

## Important Reminders

1. **SLUG_MANIFEST.json**: ALWAYS update when creating/deleting pages
2. **Sitemap check**: Run `npm run check-sitemap` after deploy
3. **Parkland pricing**: Flat fee ONLY for Parkland Avenue
4. **Other condos**: "WhatsApp for custom pricing"
5. **No D/A/F for blogs**: Publish directly after quality check
6. **WhatsApp CTA**: Every page must have it
7. **3 languages**: 60 posts each = 180 total/month

---

## Troubleshooting

### Issue: Build fails with 404 errors

**Solution:**
1. Check SLUG_MANIFEST.json - is the slug listed?
2. Check file exists in correct location
3. Run sitemap checker locally first
4. Fix broken links before deploying

### Issue: Content not ranking

**Solution:**
1. Check GSC - impressions < 100? Improve SEO
2. Check CTR < 2%? Rewrite title/meta
3. Add internal links from related posts
4. Consider creating condo-specific variation

### Issue: Flat fee mentioned for wrong condo

**Solution:**
1. Search content for "flat fee" or "RM200"
2. Replace with "WhatsApp us for custom pricing"
3. Update CTA to be context-specific

---

**Last Updated:** 2026-01-23
**Status:** Ready for Production
**Next Step:** Begin generating Month 1 content (180 posts)
