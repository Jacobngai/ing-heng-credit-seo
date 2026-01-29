# AI Content System - Usage Guide

**Complete guide for generating, publishing, and tracking 180 posts/month**

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Monthly Workflow](#monthly-workflow)
3. [Content Generation](#content-generation)
4. [Quality Control](#quality-control)
5. [Deployment](#deployment)
6. [Tracking & Analytics](#tracking--analytics)
7. [Troubleshooting](#troubleshooting)

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     AI CONTENT SYSTEM                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐    ┌───────────────────┐                  │
│  │ Keyword Database │───>│ Keyword Mapper    │                  │
│  │ (285 keywords)   │    │ (Auto-assign)     │                  │
│  └──────────────────┘    └────────┬──────────┘                  │
│                                    │                             │
│                                    ▼                             │
│  ┌──────────────────┐    ┌───────────────────┐                  │
│  │ Content Templates │<───│ Scheduler         │                  │
│  │ (15 templates)   │    │ (180 posts/mo)    │                  │
│  └──────────────────┘    └────────┬──────────┘                  │
│                                    │                             │
│                                    ▼                             │
│  ┌──────────────────┐    ┌───────────────────┐                  │
│  │ AI Prompt Library │───>│ Content Generator │                  │
│  │ (Curated prompts) │    │ (Claude/GPT-4)     │                  │
│  └──────────────────┘    └────────┬──────────┘                  │
│                                    │                             │
│                                    ▼                             │
│  ┌──────────────────┐    ┌───────────────────┐                  │
│  │ Quality Checker   │<───│ Content Output    │                  │
│  │ (Auto-validate)   │    │ (.astro / .md)    │                  │
│  └──────────────────┘    └────────┬──────────┘                  │
│                                    │                             │
│                                    ▼                             │
│  ┌──────────────────┐    ┌───────────────────┐                  │
│  │ SLUG Manifest     │<───│ Deploy (Vercel)   │                  │
│  │ (Track all URLs)  │    │ (3 projects)       │                  │
│  └──────────────────┘    └───────────────────┘                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Monthly Workflow

### Week 1: Planning & Setup

```bash
# 1. Generate monthly schedule
npm run generate:schedule

# Output:
# - Monthly calendar with post dates
# - 180 posts assigned (60 EN, 60 ZH, 60 MS)
# - Weekly themes and categories
```

```typescript
// Example: Generate schedule for January 2025
import { generateMonthContent } from "./index";

const result = await generateMonthContent(1, 2025, {
  languages: ["en", "zh", "ms"],
  dryRun: true, // Preview without generating
});

// Review schedule
console.log(result.schedule);
```

### Week 2: Content Generation

```bash
# Generate content in batches (10 posts at a time)
npm run generate:content -- --batch=10 --lang=en

# Repeat for ZH and MS
npm run generate:content -- --batch=10 --lang=zh
npm run generate:content -- --batch=10 --lang=ms
```

```typescript
// Programmatic usage
import { generateSinglePost } from "./index";

const { post, template, prompt } = await generateSinglePost(
  "what to do with empty condo in melaka",
  "en"
);

// Send prompt to AI
const content = await claude.messages.create({
  model: "claude-sonnet-4-20250514",
  maxTokens: 4096,
  messages: [{
    role: "user",
    content: prompt
  }]
});
```

### Week 3: Quality Control & Publishing

```bash
# Run quality checks on generated content
npm run quality:check

# Output: Issues found, fixes needed
```

```typescript
import { runQualityChecks } from "./index";

const quality = runQualityChecks(generatedPost);

if (!quality.approved) {
  console.log("Issues:", quality.issues);
  // Fix issues or regenerate
}
```

### Week 4: Deployment

```bash
# Update SLUG manifest
npm run manifest:update

# Validate manifest
npm run manifest:validate

# Deploy all languages
npm run deploy:all
```

---

## Content Generation

### Option 1: Generate Single Post

```typescript
import { generateSinglePost } from "./index";

// Specify keyword and language
const { post, template, prompt } = await generateSinglePost(
  "what to do with empty condo in melaka",
  "en"
);

console.log("Title:", post.title);
console.log("Slug:", post.slug);
console.log("Keywords:", post.secondaryKeywords);

// Use the prompt to generate content
const aiResponse = await callAI(prompt);

// Save to file
const filePath = `clients/ihousing/website/src/pages/en/blog/${post.slug}index.astro`;
await writeFile(filePath, aiResponse.content);
```

### Option 2: Batch Generate Month

```typescript
import { generateMonthContent } from "./index";

// Generate full month content
const result = await generateMonthContent(1, 2025, {
  languages: ["en", "zh", "ms"],
  skipQualityCheck: false,
  dryRun: false,
});

// Result includes:
// - schedule: Monthly calendar
// - posts: All generated posts
// - qualityChecks: Validation results
// - deploymentBundles: Ready for Vercel
```

### Option 3: Category-Specific Generation

```typescript
import { getKeywordsByCategory, generatePostFromKeyword } from "./index";

// Get all Problem-Aware keywords
const keywords = getKeywordsByCategory("en", "problem-aware-empty");

// Generate posts for this category
for (const keyword of keywords) {
  const post = generatePostFromKeyword(keyword);
  const content = await generateContentForPost(post);
  await savePost(post, content);
}
```

### Option 4: Condo-Specific Pages

```typescript
import { getCondoSwitchKeywords } from "./index";

// Get "Switch to Us" keywords
const switchKeywords = getCondoSwitchKeywords();

for (const keyword of switchKeywords) {
  const post = generatePostFromKeyword(keyword);
  post.type = "landing"; // Landing page, not blog

  const content = await generateLandingPage(post);
  await savePage(post, content);
}
```

---

## Content Templates

### Available Templates

| Template ID | Category | Language | Use For |
|-------------|----------|----------|---------|
| `problem-aware-empty-en` | Problem-Aware (Empty) | EN | Empty property pain points |
| `problem-aware-tenant-en` | Problem-Aware (Tenant) | EN | Tenant nightmare stories |
| `solution-aware-roi-en` | Solution-Aware | EN | ROI and earnings potential |
| `decision-pricing-en` | Decision-Stage | EN | Pricing comparison |
| `condo-switch-en` | Condo-Specific | EN | Switch to Us landing pages |
| `problem-aware-empty-zh` | Problem-Aware | ZH | Chinese problem-aware content |
| `problem-aware-empty-ms` | Problem-Aware | MS | Malay problem-aware content |

### Using Templates

```typescript
import { getTemplate } from "./templates/content-templates";

// Get template by category and language
const template = getTemplate("problem-aware-empty", "en");

// Template includes:
// - structure: Array of sections with prompts
// - seoConfig: Title template, meta description
// - ctaConfig: Primary/secondary CTAs
// - wordCountTarget: Target word count

// Use template to generate AI prompt
import { generateContentPrompt } from "./prompts/ai-prompt-library";
const prompt = generateContentPrompt(post, template);
```

---

## Quality Control

### Automatic Quality Checks

The system checks:

1. **SEO Quality**
   - Target keyword in H1
   - Target keyword in first 100 words
   - Keyword density 1-1.5%
   - Meta description 150-160 characters

2. **Content Quality**
   - Minimum 800 words
   - Proper heading structure (H1 → H2 → H3)
   - Short paragraphs (3-5 sentences)
   - Bullet points for readability

3. **Brand Alignment**
   - iHousing mentioned appropriately
   - 5-platform listing advantage included
   - In-house cleaning advantage included
   - **CRITICAL:** Flat fee ONLY for Parkland Avenue

4. **CTA Quality**
   - WhatsApp CTA included
   - CTA compelling and specific

### Running Quality Checks

```bash
# Check all generated content
npm run quality:check

# Check specific file
npm run quality:check -- --file=path/to/post.md
```

```typescript
import { runQualityChecks } from "./index";

const quality = runQualityChecks(post);

if (!quality.approved) {
  // Fix issues
  for (const issue of quality.issues) {
    console.log("Issue:", issue);
  }
}
```

### Manual Review Checklist

Before publishing, verify:

- [ ] Title includes target keyword
- [ ] Meta description 150-160 characters
- [ ] Content 800+ words
- [ ] H2 headings included
- [ ] WhatsApp CTA present
- [ ] Internal links suggested
- [ ] Data points included (RM amounts)
- [ ] iHousing mentioned naturally
- [ ] No flat fee for non-Parkland condos
- [ ] Accurate information (no false promises)

---

## Deployment

### SLUG Manifest Update

**CRITICAL:** Always update SLUG_MANIFEST.json before deploying.

```bash
npm run manifest:update
```

```typescript
// Update manifest with new post
await updateSlugManifest({
  slug: "what-to-do-with-empty-condo-melaka",
  title: "What to Do with Empty Condo in Melaka (2025)",
  category: "problem-aware-empty",
  language: "en",
  publishedAt: "2025-01-15",
  updatedAt: "2025-01-15",
});
```

### Vercel Deployment (3 Projects)

```bash
# Deploy all 3 languages
npm run deploy:all

# Or deploy individually
npm run deploy:en  # English
npm run deploy:zh  # Chinese
npm run deploy:ms  # Malay
```

### Deployment Scripts

```bash
#!/bin/bash
# scripts/deploy-en.sh

echo "Deploying English version..."

# Set project
echo '{"projectId":"prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json

# Deploy
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://en.ihousing-temp.vercel.app \
  --env SITE_URL=https://en.ihousing-temp.vercel.app

echo "English deployment complete!"
```

### Post-Deployment Checklist

```bash
# 1. Verify deployment
curl -I https://en.ihousing-temp.vercel.app/

# 2. Check sitemap
curl https://en.ihousing-temp.vercel.app/sitemap-index.xml

# 3. Run link checker
npm run sitemap:check

# 4. Verify in GSC (add new URLs)
# https://search.google.com/search-console
```

---

## Tracking & Analytics

### Google Search Console (GSC)

**Weekly Tasks:**

1. Check performance for new pages
2. Identify low-performing content
3. Submit sitemap if needed

**Monthly Tasks:**

1. Export all keyword data
2. Analyze impressions/CTR/position
3. Create content adjustment plan

```typescript
import { analyzeGSCFeedback } from "./scheduler/publishing-scheduler";

const adjustments = analyzeGSCFeedback(gscData);

for (const adj of adjustments) {
  if (adj.action === "update") {
    console.log(`Update ${adj.postId}: ${adj.reason}`);
  }
}
```

### GSC Feedback Loop

| Metric | Good | Needs Work | Action |
|--------|------|------------|--------|
| Impressions | >100 | <100 | Improve SEO, add internal links |
| CTR | >5% | <2% | Rewrite title/meta |
| Position | <10 | >20 | Improve content quality |
| Clicks | >10 | 0 | Check search intent match |

### Monthly KPI Tracking

```bash
# Export GSC data
npm run gsc:analyze

# Output:
# - Top 50 performing keywords
# - Bottom 50 keywords (needs update)
# - Content adjustment recommendations
```

---

## Troubleshooting

### Issue: "Keyword not found"

**Cause:** Keyword not in database

**Solution:**
```typescript
// Check if keyword exists
import { findKeyword } from "./index";

const keyword = findKeyword("your keyword here");
if (!keyword) {
  // Add to keyword database first
  console.log("Keyword not found. Please add to database.");
}
```

### Issue: "No template found"

**Cause:** Category has no template

**Solution:**
```typescript
// Categories with fallback
const fallbackMap = {
  "furnishing-buying": "solution-aware",
  "setup-operational": "solution-aware",
  "cost-budget": "solution-aware",
  // ...
};

const fallbackCategory = fallbackMap[yourCategory];
const template = getTemplate(fallbackCategory, language);
```

### Issue: "Quality check failed"

**Cause:** Content doesn't meet standards

**Solution:**
```typescript
// See what failed
const quality = runQualityChecks(post);

for (const issue of quality.issues) {
  if (issue.includes("flat fee") && !post.targetCondo?.includes("Parkland")) {
    // Fix: Replace with WhatsApp CTA
    fixFlatFeeMention(content);
  }
}
```

### Issue: "Build fails with 404"

**Cause:** Slug not in manifest

**Solution:**
```bash
# Validate manifest
npm run manifest:validate

# Fix: Add missing slug
npm run manifest:update
```

---

## Best Practices

### 1. Content Generation

- **Start with Problem-Aware** - Highest conversion
- **Use real data** - RM7,000-9,000/year, 19-22% occupancy
- **Be specific** - Use actual condo names, locations
- **Include CTAs** - Every page must have WhatsApp CTA

### 2. Quality Control

- **Never skip quality checks** - Even for AI content
- **Review Parkland content** - Ensure flat fee is correct
- **Check internal links** - Should link to relevant pages
- **Verify accuracy** - No false promises

### 3. Deployment

- **Update manifest first** - Prevents 404 errors
- **Run sitemap check** - Catch broken links before deploy
- **Deploy in order** - EN → ZH → MS
- **Verify after deploy** - Check live site

### 4. Tracking

- **Check GSC weekly** - Catch issues early
- **Analyze monthly** - Look for patterns
- **Adjust strategy** - Based on data
- **Create more of what works** - High CTR = similar content

---

## Quick Reference

### Generate Single Post

```typescript
const { post, prompt } = await generateSinglePost("keyword", "en");
const content = await claude.generate(prompt);
await saveFile(`./en/blog/${post.slug}index.astro`, content);
```

### Generate Month Content

```bash
npm run generate:schedule
npm run generate:content -- --all
npm run quality:check
npm run manifest:update
npm run deploy:all
```

### Check Quality

```typescript
const quality = runQualityChecks(post);
console.log(quality.approved ? "✅ Approved" : "❌ Issues:", quality.issues);
```

### Deploy

```bash
# All languages
npm run deploy:all

# Single language
npm run deploy:en
```

---

**Last Updated:** 2026-01-23
