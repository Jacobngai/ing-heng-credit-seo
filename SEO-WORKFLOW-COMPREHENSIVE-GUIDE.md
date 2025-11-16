# SEO Workflow: Comprehensive Guide
## The 4-Phase System (Designed for 5th Grader Simplicity)

**Version:** 2.0
**Last Updated:** 2025-11-10
**Philosophy:** Keep commands simple. Let agents and skills do the complex work.

---

## 🎯 Core Principle: Separation of Concerns

After reviewing our SEO-pro.md knowledge and current structure, we identified a critical problem:

❌ **BEFORE:** Everything was lumped into "build"
✅ **AFTER:** Clear phases with distinct purposes

### The Problem We Solved

**Previous approach:**
- Commands were scattered and unclear
- "Build" phase was overloaded with research, creation, AND quality checks
- No clear workflow for beginners
- Hard to know what to do next

**New approach:**
- **4 distinct phases:** Onboard → Build → Review → Publish
- **13 total commands** (3-4 per phase)
- **Each command is simple** (complexity hidden in agents/skills)
- **Linear workflow** anyone can follow

---

## 📊 The 4-Phase Workflow

```
ONBOARD (Research & Planning)
    ↓
BUILD (Content Creation)
    ↓
REVIEW (Quality Assurance)
    ↓
PUBLISH (Multi-Language Deployment)
```

---

## 🔍 PHASE 1: ONBOARD (Research & Planning)

**Philosophy:** Understand before you build. Garbage in = garbage out.

### Why This Phase Exists
From SEO-pro.md Chapter 2: "Understanding search intent is the foundation of effective SEO strategy."

**Problem it solves:**
- Building content without understanding user needs
- Targeting wrong keywords
- Missing E-E-A-T opportunities
- No competitive advantage

### Commands in This Phase

#### 1. `/research-business`
**What it does:** Deep dive into client's business, competitors, and market

**Uses:**
- **Agent:** `competitor-intelligence` (analyzes competitor SEO strategies)
- **Agent:** `client-onboarding` (structures business information)
- **Skill:** `competitive-analysis` (SERP analysis, keyword gap)
- **Skill:** `market-research` (industry trends, user personas)
- **Skill:** `persona-identification` (target audience mapping)

**SEO-pro.md connection:** Chapter 3 (Competitor Analysis), Chapter 1 (Understanding the landscape)

**Output:**
```
📁 client-name/
  ├── business-brief.md (mission, services, USP)
  ├── competitor-report.md (top 5 competitors analyzed)
  ├── keyword-opportunities.md (gap analysis)
  └── target-personas.md (3-5 buyer personas)
```

**When to run:** Day 1 of new client onboarding

---

#### 2. `/organize-by-intent`
**What it does:** Maps all keywords and content ideas to the 4 search intents

**Uses:**
- **Agent:** `hub-and-spoke-architect` (creates content cluster strategy)
- **Skill:** `keyword-research` (finds keywords via tools)
- **Skill:** `intent-mapping` (classifies as informational/commercial/transactional/local)
- **Skill:** `content-clustering` (groups related topics)

**SEO-pro.md connection:** Chapter 2 (The Four Pillars of Search Intent)

**The 4 Intents:**
1. **Informational:** How-to guides, educational content
2. **Commercial Investigation:** Comparisons, "best X for Y"
3. **Transactional:** Product/service pages, booking pages
4. **Navigational:** Brand searches, location pages

**Output:**
```
📁 content-strategy/
  ├── intent-map.md (keywords organized by intent)
  ├── hub-and-spoke-plan.md (pillar content + supporting posts)
  ├── priority-matrix.md (what to build first, second, third)
  └── keyword-database.csv (searchable keyword list)
```

**When to run:** After `/research-business`, before building any content

---

#### 3. `/plan-authority`
**What it does:** Designs E-E-A-T strategy and author profiles

**Uses:**
- **Agent:** `eeat-documentation` (builds authority framework)
- **Skill:** `author-credential-documentation` (writes credentials)
- **Skill:** `trust-signal-identification` (finds trust opportunities)
- **Skill:** `experience-evidence-collection` (gathers proof of expertise)

**SEO-pro.md connection:** Chapter 4 (E-E-A-T Implementation)

**What it plans:**
- Author profiles with real credentials
- Trust signals to implement (reviews, certifications, press)
- Experience documentation (case studies, original photos)
- Authority building tactics (speaking, publishing)

**Output:**
```
📁 authority-plan/
  ├── author-profiles.md (bios for 2-3 key authors)
  ├── eeat-strategy.md (how to demonstrate expertise)
  ├── trust-signals.md (badges, certifications, memberships)
  └── content-guidelines.md (how to write with authority)
```

**When to run:** After `/organize-by-intent`, before building content

---

#### 4. `/design-brand-options`
**What it does:** Creates 10 comprehensive HTML mockups showing different brand identity options

**Uses:**
- **Agent:** `brand-identity` (brand design expert)
- **Skill:** `brand-material-analysis` (analyzes provided materials)
- **Skill:** `color-palette-generation` (creates professional color schemes)
- **Skill:** `typography-selection` (chooses font pairings)
- **Skill:** `design-system-creation` (builds complete design system)
- **Skill:** `html-mockup-generation` (creates interactive HTML demos)
- **Skill:** `brand-personality-mapping` (maps tone to visual style)

**SEO-pro.md connection:** Brand consistency across all touchpoints (Chapter 4)

**What it creates:**

The agent reads whatever materials the employee provides:
- Existing logos
- Brand guidelines (if any)
- Competitor examples
- Industry references
- Color preferences
- Personality descriptors

Then generates 10 complete HTML mockups:

```
clients/[client-name]/brand-identity/
├── ci-option-1.html (Industrial Trust - Bronze/Blue)
├── ci-option-2.html (Modern Professional - Navy/Green)
├── ci-option-3.html (Approachable Expert - Orange/Gray)
├── ci-option-4.html (Premium Finance - Gold/Black)
├── ci-option-5.html (Tech Forward - Purple/White)
├── ci-option-6.html (Traditional Stability - Brown/Cream)
├── ci-option-7.html (Dynamic Growth - Red/Yellow)
├── ci-option-8.html (Clean Minimal - Black/White)
├── ci-option-9.html (Friendly Local - Green/Orange)
└── ci-option-10.html (Bold Disruptor - Pink/Black)
```

**Each HTML file includes:**
- Complete color palette (primary, secondary, accent, neutrals)
- Typography system (headings, body, UI fonts)
- Button styles (primary, secondary, outline)
- Card components
- Navigation examples
- Hero section mockup
- Content section mockup
- Footer design
- Actual client content (not lorem ipsum)
- Responsive design preview

**Example structure:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Option 1: Industrial Trust</title>
    <style>
        /* Complete design system */
        :root {
            --primary: #8B4513;
            --secondary: #2C5F8D;
            --accent: #D4A574;
            /* ... all colors ... */
        }
        /* All component styles */
    </style>
</head>
<body>
    <!-- Full page mockup with real content -->
    <nav>...</nav>
    <header class="hero">
        <h1>[Client Business Name]</h1>
        <p>[Their actual tagline]</p>
    </header>
    <main>
        <!-- Service cards, testimonials, etc. -->
    </main>
    <footer>...</footer>
</body>
</html>
```

**Output:**
```
📁 clients/[client-name]/brand-identity/
  ├── ci-option-1.html
  ├── ci-option-2.html
  ├── ...
  └── ci-option-10.html
  └── README.md (explains each option's personality)
```

**Client selection process:**
1. Employee shares materials with AI
2. AI generates 10 options (takes 10-15 minutes)
3. Client reviews HTML files in browser
4. Client picks favorite (or asks for variations)
5. Selected design becomes the Tailwind config

**When to run:** During onboarding, after business brief but before building website

---

### Onboard Phase Summary

| Command | Purpose | Time | Output |
|---------|---------|------|--------|
| `/research-business` | Understand client & market | 2-4 hrs | Business brief + competitor analysis |
| `/organize-by-intent` | Map content to search intent | 2-3 hrs | Content strategy map |
| `/plan-authority` | Design E-E-A-T strategy | 1-2 hrs | Authority plan + author profiles |
| `/design-brand-options` | Create 10 brand mockups | 15 min | 10 HTML files for client selection |

**Total time:** 5-9 hours (most is AI working)
**Result:** Complete roadmap + brand direction for building phase

---

## 🏗️ PHASE 2: BUILD (Content Creation)

**Philosophy:** Create exceptional content that serves users and demonstrates expertise.

### Why This Phase Exists
From SEO-pro.md Chapter 4: "Perfect technical execution means nothing without compelling, valuable content."

### Commands in This Phase

#### 1. `/build-author`
**What it does:** Creates author bio pages with credentials and E-E-A-T signals

**Uses:**
- **Agent:** `content-generation` (writes compelling copy)
- **Skill:** `author-page-generation` (creates Astro component)
- **Skill:** `schema-markup` (adds Person schema)
- **Skill:** `credential-formatting` (displays certifications properly)

**SEO-pro.md connection:** Chapter 4 (Demonstrating Expertise)

**What gets built:**
```astro
---
// src/pages/en/authors/john-smith.astro
import Layout from '@layouts/Layout.astro';
import SEOHead from '@components/SEOHead.astro';
---

<Layout>
  <SEOHead
    title="John Smith - Senior CRM Consultant"
    description="John Smith has 12 years of CRM implementation experience..."
  />

  <article itemscope itemtype="https://schema.org/Person">
    <h1 itemprop="name">John Smith</h1>
    <p itemprop="jobTitle">Senior CRM Consultant</p>

    <!-- Credentials -->
    <section class="credentials">
      <h2>Qualifications</h2>
      <ul>
        <li>Certified Salesforce Administrator</li>
        <li>MBA in Information Systems, Northwestern</li>
        <li>200+ successful implementations</li>
      </ul>
    </section>

    <!-- Experience Evidence -->
    <section class="experience">
      <h2>Experience</h2>
      <p>After implementing CRM systems for 12 years, I've learned...</p>
      <!-- First-person, detailed experience -->
    </section>

    <!-- Trust Signals -->
    <section class="recognition">
      <h2>Recognition</h2>
      <ul>
        <li>Speaker at SaaS Summit 2024</li>
        <li>Published in CRM Magazine</li>
      </ul>
    </section>
  </article>
</Layout>
```

**Output:** `src/pages/[locale]/authors/[author-name].astro`

**When to run:** After `/plan-authority`, before building content

---

#### 2. `/build-hub-page`
**What it does:** Creates comprehensive pillar content (3,000-5,000 words)

**Uses:**
- **Agent:** `content-generation` (writes comprehensive content)
- **Agent:** `hub-and-spoke-architect` (structures hub-spoke model)
- **Skill:** `hub-page-generation` (creates ultimate guide)
- **Skill:** `internal-linking` (links to spoke pages)
- **Skill:** `semantic-optimization` (adds LSI keywords)

**SEO-pro.md connection:** Chapter 4 (The Hub and Spoke Model)

**Hub Page Structure:**
```markdown
# Complete Guide to [Topic] (H1)

## Introduction (150 words)
- What this guide covers
- Who it's for
- What you'll learn

## Section 1: [Subtopic] (H2)
### Subsection 1.1 (H3)
### Subsection 1.2 (H3)

## Section 2: [Subtopic] (H2)
[Pattern repeats...]

## Related Guides (Links to spoke pages)
- [Spoke 1 Title]
- [Spoke 2 Title]
- [Spoke 3 Title]

## Frequently Asked Questions (H2)
### Question 1? (H3)
[Optimized for featured snippet]

## Conclusion (H2)
[Summary + CTA]
```

**Key features:**
- 3,000-5,000 words minimum
- 8-12 H2 sections
- Question-based H3s for featured snippets
- Internal links to 8-12 spoke pages
- Author byline with credentials
- Table of contents
- Original images/diagrams

**Output:** `src/pages/[locale]/guides/[topic-name].astro`

**When to run:** After content strategy is mapped

---

#### 3. `/build-blog`
**What it does:** Generates blog post (1,500-2,500 words) optimized for keyword

**Uses:**
- **Agent:** `content-generation` (writes engaging content)
- **Skill:** `blog-post-generation` (creates optimized post)
- **Skill:** `seo-optimization` (keyword placement, meta tags)
- **Skill:** `featured-snippet-formatting` (structures for snippets)

**SEO-pro.md connection:** Chapter 4 (Content Types That Perform)

**Blog Post Structure:**
```markdown
# [Title with Target Keyword] (H1)

[Opening paragraph with keyword in first 100 words]

## [Question or Subtopic] (H2)
[Answer in 40-60 words for featured snippet potential]

[Detailed explanation 200-400 words]

## [Related Subtopic] (H2)
[Pattern repeats 4-6 times]

## Frequently Asked Questions (H2)
### [Question 1]? (H3)
[Concise answer]

## Conclusion (H2)
[Summary + internal link to related content]
```

**Key features:**
- 1,500-2,500 words
- Target keyword in title, H1, first paragraph, 2-3 H2s
- 2-5 internal links to related content
- Featured snippet optimization
- Author byline
- Image every 300-500 words
- FAQ section with schema

**Output:** `src/pages/[locale]/blog/[post-slug].astro`

**When to run:** Regularly based on content calendar

---

#### 4. `/build-service-page`
**What it does:** Creates service/product page with conversion focus

**Uses:**
- **Agent:** `content-generation` (writes conversion-focused copy)
- **Skill:** `service-page-generation` (creates optimized service page)
- **Skill:** `conversion-optimization` (CTAs, trust signals)
- **Skill:** `local-seo-signals` (for local businesses)

**SEO-pro.md connection:** Chapter 4 (Transactional Intent Optimization)

**Service Page Structure:**
```markdown
# [Service Name] in [Location] (H1)

## [Benefit-Focused Subheading]
[Value proposition, 100-150 words]

[CTA Button]

## What You Get (H2)
- Benefit 1
- Benefit 2
- Benefit 3

## How It Works (H2)
### Step 1: [Action] (H3)
### Step 2: [Action] (H3)
### Step 3: [Action] (H3)

## Why Choose Us (H2)
- [Trust signal 1]
- [Trust signal 2]
- [Trust signal 3]

## Customer Success Stories (H2)
[Testimonials with real names/photos]

## Pricing (H2)
[Transparent pricing or starting from]

[CTA Button]

## Frequently Asked Questions (H2)
[5-10 common questions]

## Service Area (H2) [For local businesses]
[Map of coverage area]
```

**Key features:**
- 800-1,200 words
- Multiple CTAs (above fold, middle, bottom)
- Trust signals (reviews, certifications, guarantees)
- LocalBusiness schema (for local businesses)
- Product/Service schema
- Conversion-focused (not just informational)

**Output:** `src/pages/[locale]/services/[service-name].astro`

**When to run:** For each core service/product offering

---

### Build Phase Summary

| Command | Purpose | Time | Output |
|---------|---------|------|--------|
| `/build-author` | Author bio page | 1-2 hrs | Author page with credentials |
| `/build-hub-page` | Comprehensive guide | 4-8 hrs | 3,000-5,000 word pillar content |
| `/build-blog` | Blog post | 2-4 hrs | 1,500-2,500 word optimized post |
| `/build-service-page` | Service/product page | 2-3 hrs | Conversion-focused service page |

**Note:** Each command builds content in ONE language (English first). Translation happens in PUBLISH phase.

---

## ✅ PHASE 3: REVIEW (Quality Assurance)

**Philosophy:** Great content isn't great until it's been reviewed and refined.

### Why This Phase Exists
From SEO-pro.md Chapter 3: "No amount of great content can overcome fundamental technical problems."

**The review phase catches:**
- Technical SEO issues
- Missing E-E-A-T signals
- Poor readability
- Broken conversion paths
- Performance problems

### Commands in This Phase

#### 1. `/review-seo`
**What it does:** Comprehensive technical and on-page SEO audit

**Uses:**
- **Agent:** `content-qa` (systematic quality checks)
- **Skill:** `technical-seo-audit` (crawlability, indexing, performance)
- **Skill:** `on-page-checklist` (title tags, headers, keywords)
- **Skill:** `performance-check` (Core Web Vitals)

**SEO-pro.md connection:** Chapter 3 (Technical SEO Essentials), Chapter 4 (On-Page Optimization)

**What it checks:**

**Technical SEO:**
- [ ] HTTPS implemented
- [ ] XML sitemap exists and is valid
- [ ] Robots.txt configured correctly
- [ ] Canonical tags present
- [ ] No broken links
- [ ] Mobile-friendly (responsive design)
- [ ] Core Web Vitals passing:
  - [ ] LCP ≤ 2.5s
  - [ ] INP ≤ 200ms
  - [ ] CLS ≤ 0.1

**On-Page SEO:**
- [ ] Unique title tag (50-60 chars)
- [ ] Target keyword in title (front-loaded)
- [ ] Unique meta description (150-160 chars)
- [ ] One H1 per page with keyword
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Keyword in first 100 words
- [ ] Internal links present (2-5 per page)
- [ ] Images have alt text
- [ ] Images compressed (<200KB)
- [ ] URL is descriptive and keyword-rich

**Schema Markup:**
- [ ] Appropriate schema type implemented
- [ ] No validation errors
- [ ] Author schema (if article/blog)
- [ ] Breadcrumb schema
- [ ] FAQ schema (if applicable)
- [ ] LocalBusiness schema (if local business)

**Output:**
```markdown
# SEO Audit Report: [Page Name]

## Status: ✅ PASS / ⚠️ NEEDS WORK / ❌ FAIL

## Technical Issues (3 found)
❌ **Core Web Vitals - LCP:** 3.2s (target: ≤2.5s)
   Fix: Optimize hero image (currently 800KB, should be <200KB WebP)

⚠️ **Mobile:** Touch targets too small (40px, need 48px)
   Fix: Increase button padding

✅ **HTTPS:** Properly configured

## On-Page Issues (2 found)
❌ **Title Tag:** 72 characters (too long, will be truncated)
   Current: "The Complete Ultimate Comprehensive Guide to Running Shoes..."
   Suggested: "Running Shoes Guide 2025: How to Choose the Best Pair"

⚠️ **Internal Links:** Only 1 found (should have 2-5)
   Add: Link to related hub page, related product page

## Priority Fixes
1. **HIGH:** Compress hero image (blocks LCP)
2. **MEDIUM:** Shorten title tag
3. **LOW:** Add 2-3 more internal links

## Estimated Fix Time: 30 minutes
```

**When to run:** After building content, before publishing

---

#### 2. `/review-eeat`
**What it does:** Verifies E-E-A-T signals are strong

**Uses:**
- **Agent:** `eeat-documentation` (E-E-A-T expert)
- **Agent:** `content-qa` (quality checks)
- **Skill:** `eeat-checklist` (systematic verification)
- **Skill:** `trust-signal-verification` (checks trust elements)
- **Skill:** `credential-validation` (verifies author credentials)

**SEO-pro.md connection:** Chapter 4 (E-E-A-T Implementation)

**What it checks:**

**Experience (First E):**
- [ ] First-person language ("I tested," "In my experience")
- [ ] Specific details only possible through experience
- [ ] Original photos/videos
- [ ] Before/after results
- [ ] Timestamps and dates
- [ ] Personal anecdotes

**Expertise (Second E):**
- [ ] Author byline with credentials
- [ ] Author bio page linked
- [ ] Professional qualifications mentioned
- [ ] Industry terminology (explained clearly)
- [ ] Data-backed claims
- [ ] Cited credible sources
- [ ] Technical accuracy

**Authoritativeness:**
- [ ] Comprehensive topical coverage
- [ ] High-quality backlinks (check existing)
- [ ] Brand mentions
- [ ] Industry recognition mentioned
- [ ] Original research or insights

**Trustworthiness:**
- [ ] Contact information visible
- [ ] Privacy policy linked
- [ ] Terms of service linked
- [ ] About page exists
- [ ] Customer reviews visible
- [ ] Security badges (if applicable)
- [ ] No misleading headlines
- [ ] Last updated date shown
- [ ] Fact-checked information

**Output:**
```markdown
# E-E-A-T Audit: [Page Name]

## Overall Score: 75/100 (Good)

## Experience: 15/25 ⚠️
❌ Missing: First-person experience language
❌ Missing: Original photos (using stock images)
✅ Has: Specific details
⚠️ Weak: Only 1 personal anecdote (add 2-3 more)

## Expertise: 22/25 ✅
✅ Has: Author byline with credentials
✅ Has: Author bio linked
✅ Has: Professional qualifications
⚠️ Missing: 2-3 more cited sources

## Authoritativeness: 18/25 ⚠️
✅ Has: Comprehensive coverage
❌ Missing: Industry recognition/awards
❌ Missing: Original research

## Trustworthiness: 20/25 ✅
✅ Has: Contact info, privacy policy
✅ Has: Last updated date
⚠️ Missing: Customer testimonials

## Priority Improvements
1. **Add personal experience:** Rewrite intro with "After testing 15 running shoes over 6 months..."
2. **Replace stock photos:** Use original photos of products being tested
3. **Add trust signals:** Include 2-3 customer testimonials with photos
4. **Cite more sources:** Add 3-4 authoritative sources (studies, industry reports)

## Estimated Fix Time: 2 hours
```

**When to run:** After `/review-seo`, before publishing

---

#### 3. `/review-readability`
**What it does:** Checks content quality, UX, and conversion elements

**Uses:**
- **Agent:** `content-qa` (quality expert)
- **Skill:** `readability-scoring` (Flesch-Kincaid, grade level)
- **Skill:** `ux-checklist` (user experience elements)
- **Skill:** `conversion-audit` (CTA effectiveness)

**SEO-pro.md connection:** Chapter 4 (Content Quality), Chapter 2 (User Intent)

**What it checks:**

**Readability:**
- [ ] Flesch Reading Ease: 60-70 (target)
- [ ] Grade level: 8th grade or below
- [ ] Sentence length: Average 15-20 words
- [ ] Paragraph length: 2-4 sentences max
- [ ] Transition words: 30%+ of sentences
- [ ] Passive voice: <10% of sentences
- [ ] Subheadings: Every 300 words

**Formatting:**
- [ ] Short paragraphs (mobile-friendly)
- [ ] Bullet points used for lists
- [ ] Bold/italic for emphasis (not overused)
- [ ] Images break up text (every 300-500 words)
- [ ] White space utilized effectively
- [ ] Font size readable (16px minimum)

**User Experience:**
- [ ] Clear value proposition above fold
- [ ] Scannable content (headers, bullets, bold)
- [ ] Logical flow and structure
- [ ] No intrusive popups
- [ ] No auto-play videos
- [ ] Easy navigation back to main site

**Conversion (for transactional pages):**
- [ ] Clear primary CTA above fold
- [ ] CTA repeated 2-3 times throughout
- [ ] Trust signals near CTA
- [ ] No broken CTAs/forms
- [ ] Mobile CTAs thumb-friendly
- [ ] Value proposition clear

**Output:**
```markdown
# Readability Audit: [Page Name]

## Readability Score: 58/100 ⚠️

### Reading Ease: 55 (target: 60-70)
- Current: Fairly difficult
- Target: Standard (8th grade)
- Issue: Average sentence length 28 words (should be 15-20)

### Grade Level: 11th grade (target: 8th)
- Too complex for average reader

### Issues Found:
❌ **Long sentences:** 15 sentences over 25 words
❌ **Dense paragraphs:** 8 paragraphs with 5+ sentences
⚠️ **Passive voice:** 18% (should be <10%)

## UX Score: 75/100 ✅

### What's Good:
✅ Images every 400 words
✅ Bullet points used effectively
✅ Subheadings every 250 words

### What Needs Work:
❌ **No table of contents** (add for long content)
⚠️ **Font too small:** 14px (increase to 16px)

## Conversion Score: 60/100 ⚠️

### Issues:
❌ **Primary CTA below fold** (move up)
❌ **Only 1 CTA** (add 2 more throughout)
⚠️ **Weak CTA copy:** "Click here" (change to "Get Your Free Quote")

## Priority Fixes:
1. **Break up long sentences** (split 15 sentences)
2. **Shorten paragraphs** (split 8 dense paragraphs)
3. **Move CTA above fold**
4. **Improve CTA copy** (action-oriented)

## Estimated Fix Time: 1.5 hours
```

**When to run:** After `/review-eeat`, before publishing

---

### Review Phase Summary

| Command | Purpose | Time | Output |
|---------|---------|------|--------|
| `/review-seo` | Technical + on-page audit | 30 min | SEO audit report with fixes |
| `/review-eeat` | Authority signal check | 30 min | E-E-A-T score with improvements |
| `/review-readability` | Content quality + UX | 30 min | Readability report with fixes |

**Total time:** 1.5 hours
**Result:** List of improvements to make before publishing

---

## 🚀 PHASE 4: PUBLISH (Multi-Language Deployment)

**Philosophy:** Content should reach users in their preferred language, deployed correctly.

### Why This Phase Exists
Our architecture: **One codebase → 3 languages → 3 domains**

**The complexity:**
- Translate EN → MS → ZH
- Maintain cultural appropriateness
- Deploy to 3 separate Vercel projects
- Configure environment variables correctly
- Submit to search engines

### Commands in This Phase

#### 1. `/translate-content`
**What it does:** Translates content into MS and ZH with cultural adaptation

**Uses:**
- **Agent:** `content-generation` (translation + localization)
- **Skill:** `translation-localization` (accurate translation)
- **Skill:** `cultural-adaptation` (makes content culturally appropriate)
- **Skill:** `hreflang-generation` (creates hreflang tags)

**SEO-pro.md connection:** Chapter 3 (International SEO)

**What it does:**

1. **Translates content:**
   - EN (source) → MS (Malay)
   - EN (source) → ZH (Chinese)

2. **Cultural adaptation:**
   - Adjusts examples for local context
   - Changes currency (RM instead of $)
   - Adapts idioms and phrases
   - Modifies images if needed (text in images)

3. **Maintains SEO:**
   - Keeps keyword optimization
   - Preserves heading structure
   - Maintains internal links (translated URLs)
   - Adds hreflang tags

**Process:**
```
src/pages/en/blog/running-shoes-guide.astro
    ↓
[Translation + Adaptation]
    ↓
src/pages/ms/blog/panduan-kasut-lari.astro (Malay)
src/pages/zh/blog/跑步鞋指南.astro (Chinese)
```

**What gets created:**
- Translated `.astro` files in `/ms/` and `/zh/` directories
- Updated i18n files (`src/i18n/ms.json`, `src/i18n/zh.json`)
- Hreflang tags in each version
- Sitemap entries for all languages

**Output:**
```markdown
# Translation Complete

## Files Created:
✅ /ms/blog/panduan-kasut-lari.astro (Malay version)
✅ /zh/blog/跑步鞋指南.astro (Chinese version)

## Cultural Adaptations Made:
- Changed currency $ → RM
- Updated examples: "Chicago" → "Kuala Lumpur"
- Adapted idioms for local understanding
- Changed measurement units where appropriate

## SEO Maintained:
✅ Target keywords translated and optimized
✅ Heading structure preserved
✅ Internal links updated to translated URLs
✅ Meta descriptions rewritten (not just translated)
✅ Hreflang tags added to all 3 versions

## Ready for deployment
```

**When to run:** After all reviews passed, before deployment

---

#### 2. `/deploy-multilang`
**What it does:** Deploys to 3 Vercel projects with correct configuration

**Uses:**
- **Agent:** `publishing` (deployment automation)
- **Skill:** `multi-language-deployment` (handles 3-project deploy)
- **Skill:** `vercel-deployment` (Vercel CLI operations)
- **Skill:** `environment-configuration` (sets env variables)

**What it does:**

Deploys the SAME codebase to 3 separate Vercel projects:

1. **English (EN):**
   - Project: `prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw`
   - Domain: `www.inghengcredit.com`
   - Env: `PUBLIC_DEFAULT_LOCALE=en`

2. **Malay (MS):**
   - Project: `prj_eKJtQcTcOd69sER92xq8NeS1SD4y`
   - Domain: `www.kreditloan.my`
   - Env: `PUBLIC_DEFAULT_LOCALE=ms`

3. **Chinese (ZH):**
   - Project: `prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7`
   - Domain: `www.inghengcredit.my`
   - Env: `PUBLIC_DEFAULT_LOCALE=zh`

**The process:**
```bash
# For each language:
1. Update .vercel/project.json (switch project ID)
2. Deploy with correct environment variables
3. Verify deployment succeeded
4. Check live site

# All automated by the agent
```

**Output:**
```markdown
# Deployment Complete ✅

## English (EN)
✅ Deployed to: https://www.inghengcredit.com
✅ Project: prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw
✅ Default locale: en
✅ Build time: 2m 34s
✅ Status: READY

## Malay (MS)
✅ Deployed to: https://www.kreditloan.my
✅ Project: prj_eKJtQcTcOd69sER92xq8NeS1SD4y
✅ Default locale: ms
✅ Build time: 2m 41s
✅ Status: READY

## Chinese (ZH)
✅ Deployed to: https://www.inghengcredit.my
✅ Project: prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7
✅ Default locale: zh
✅ Build time: 2m 38s
✅ Status: READY

## Next Step: Run `/submit-search` to notify search engines
```

**When to run:** After translation is complete

---

#### 3. `/submit-search`
**What it does:** Submits URLs to search engines and requests indexing

**Uses:**
- **Agent:** `publishing` (handles search engine submission)
- **Skill:** `sitemap-generation` (creates/updates sitemaps)
- **Skill:** `search-console-submission` (submits via API)
- **Skill:** `indexing-request` (requests immediate indexing)

**What it does:**

1. **Generates sitemaps:**
   - `sitemap-index.xml` (main sitemap)
   - `sitemap-pages.xml` (static pages)
   - `sitemap-blog.xml` (blog posts)
   - `sitemap-images.xml` (image sitemap)

2. **Submits to Google Search Console:**
   - For all 3 domains
   - Via Search Console API
   - Requests indexing for new/updated pages

3. **Submits to Bing Webmaster:**
   - For all 3 domains
   - Via Bing API

4. **Generates robots.txt** (if not exists)

**Output:**
```markdown
# Search Engine Submission Complete

## Sitemaps Generated:
✅ sitemap-index.xml (3 language versions)
✅ sitemap-pages.xml (47 pages)
✅ sitemap-blog.xml (12 posts)
✅ sitemap-images.xml (89 images)

## Google Search Console:
✅ www.inghengcredit.com (EN) - Submitted 59 URLs
✅ www.kreditloan.my (MS) - Submitted 59 URLs
✅ www.inghengcredit.my (ZH) - Submitted 59 URLs

## Bing Webmaster:
✅ www.inghengcredit.com (EN) - Submitted
✅ www.kreditloan.my (MS) - Submitted
✅ www.inghengcredit.my (ZH) - Submitted

## Indexing Requested:
✅ 12 new blog posts (priority indexing)

## Expected Indexing Time:
- Google: 1-7 days
- Bing: 3-14 days

## Monitoring:
Check Google Search Console coverage report in 7 days
```

**When to run:** After deployment is complete

---

### Publish Phase Summary

| Command | Purpose | Time | Output |
|---------|---------|------|--------|
| `/translate-content` | Translate EN → MS → ZH | 1-2 hrs | 3 language versions |
| `/deploy-multilang` | Deploy to 3 Vercel projects | 15 min | Live on 3 domains |
| `/submit-search` | Submit to search engines | 10 min | Indexed in Google/Bing |

**Total time:** 1.5-2.5 hours
**Result:** Content live in 3 languages, search engines notified

---

## 📊 Complete Workflow Overview

### From Zero to Published

```
DAY 1: ONBOARD
├─ /research-business (2-4 hrs)
├─ /organize-by-intent (2-3 hrs)
└─ /plan-authority (1-2 hrs)
   Total: 5-9 hours
   Output: Complete content strategy

DAY 2-5: BUILD
├─ /build-author (1-2 hrs) [One-time]
├─ /build-hub-page (4-8 hrs) [For pillar content]
├─ /build-blog (2-4 hrs) [Per blog post]
└─ /build-service-page (2-3 hrs) [Per service]
   Total: Varies by content volume
   Output: All pages created in English

DAY 6: REVIEW
├─ /review-seo (30 min per page)
├─ /review-eeat (30 min per page)
└─ /review-readability (30 min per page)
   Total: 1.5 hrs per page
   Output: Quality-checked content

DAY 7: PUBLISH
├─ /translate-content (1-2 hrs)
├─ /deploy-multilang (15 min)
└─ /submit-search (10 min)
   Total: 1.5-2.5 hours
   Output: Live on 3 domains
```

---

## 🎓 The 5th Grader Test: Did We Pass?

### Before This System:
❌ "Should I run keyword research or competitor analysis first?"
❌ "Is author page part of build or setup?"
❌ "When do I design the brand?"
❌ "When do I deploy?"
❌ "How do I handle 3 languages?"

### After This System:
✅ **Onboard:** Research first, always (including brand design)
✅ **Build:** Create content in English first
✅ **Review:** Check quality before publishing
✅ **Publish:** Translate, deploy, submit

**A 5th grader can now:**
1. Open terminal
2. Run `/research-business`
3. Run `/organize-by-intent`
4. Run `/plan-authority`
5. Run `/design-brand-options` (client picks favorite)
6. Run `/build-blog`
7. Run `/review-seo`
8. Run `/review-eeat`
9. Run `/review-readability`
10. Run `/translate-content`
11. Run `/deploy-multilang`
12. Run `/submit-search`

**Done.** Content is live in 3 languages with professional branding.

---

## 📁 Recommended Folder Structure

```
.claude/
├── commands/
│   ├── onboard/
│   │   ├── research-business.md
│   │   ├── organize-by-intent.md
│   │   └── plan-authority.md
│   ├── build/
│   │   ├── build-author.md
│   │   ├── build-hub-page.md
│   │   ├── build-blog.md
│   │   └── build-service-page.md
│   ├── review/
│   │   ├── review-seo.md
│   │   ├── review-eeat.md
│   │   └── review-readability.md
│   └── publish/
│       ├── translate-content.md
│       ├── deploy-multilang.md
│       └── submit-search.md
├── agents/
│   ├── competitor-intelligence.md
│   ├── client-onboarding.md
│   ├── hub-and-spoke-architect.md
│   ├── eeat-documentation.md
│   ├── content-generation.md
│   ├── content-qa.md
│   └── publishing.md
└── skills/
    ├── competitive-analysis.md
    ├── market-research.md
    ├── persona-identification.md
    ├── keyword-research.md
    ├── intent-mapping.md
    ├── content-clustering.md
    ├── author-credential-documentation.md
    ├── trust-signal-identification.md
    ├── experience-evidence-collection.md
    ├── author-page-generation.md
    ├── hub-page-generation.md
    ├── blog-post-generation.md
    ├── service-page-generation.md
    ├── internal-linking.md
    ├── semantic-optimization.md
    ├── conversion-optimization.md
    ├── technical-seo-audit.md
    ├── on-page-checklist.md
    ├── performance-check.md
    ├── eeat-checklist.md
    ├── trust-signal-verification.md
    ├── readability-scoring.md
    ├── ux-checklist.md
    ├── conversion-audit.md
    ├── translation-localization.md
    ├── cultural-adaptation.md
    ├── multi-language-deployment.md
    ├── vercel-deployment.md
    ├── sitemap-generation.md
    └── search-console-submission.md
```

---

## 🔑 Key Principles (Never Forget)

### 1. Commands Stay Simple
Commands are like menu items at a restaurant - simple choices.
Agents are the chefs - they do the complex work.
Skills are the recipes - specific techniques.

**You order from the menu. The kitchen handles the rest.**

### 2. Linear Workflow
Always go in order:
1. Onboard (research)
2. Build (create)
3. Review (check)
4. Publish (deploy)

Don't skip steps. Don't go backwards (unless fixing issues).

### 3. English First
Always build in English first. Translate in the Publish phase.

Why?
- Easier to review quality in one language
- Most SEO tools are English-focused
- Faster iteration

### 4. Review Before Publish
Never deploy without reviewing. The review phase catches:
- SEO mistakes
- Missing authority signals
- Poor UX
- Technical issues

**15 minutes of review saves hours of fixing later.**

### 5. One Command = One Job
Each command does ONE thing well:
- `/research-business` = understand client
- `/build-blog` = create blog post
- `/review-seo` = check SEO

Don't combine. Keep it simple.

---

## 🚀 Quick Start: First Blog Post

New to the system? Follow this:

```bash
# Day 1: Research (first time only)
/research-business
/organize-by-intent
/plan-authority

# Day 2: Create author (first time only)
/build-author

# Day 3: Write blog
/build-blog

# Day 4: Check quality
/review-seo
/review-eeat
/review-readability

# Day 5: Go live
/translate-content
/deploy-multilang
/submit-search
```

**Total time:** 5 days, 15-20 hours
**Result:** Professional blog post live in 3 languages

---

## 🎯 Command Cheat Sheet

| Phase | Commands | When to Use |
|-------|----------|-------------|
| **ONBOARD** | `/research-business`<br>`/organize-by-intent`<br>`/plan-authority`<br>`/design-brand-options` | New client (one time) |
| **BUILD** | `/build-author`<br>`/build-hub-page`<br>`/build-blog`<br>`/build-service-page` | Every new page/post |
| **REVIEW** | `/review-seo`<br>`/review-eeat`<br>`/review-readability` | Before every publish |
| **PUBLISH** | `/translate-content`<br>`/deploy-multilang`<br>`/submit-search` | After review passes |

**Total:** 14 commands. That's it.

---

## 📚 SEO-Pro.md Knowledge Mapping

### Where Each Phase Gets Its Wisdom

**ONBOARD Phase:**
- Chapter 1: Understanding the current landscape
- Chapter 2: Understanding search intent (the foundation)
- Chapter 3: Competitor analysis techniques

**BUILD Phase:**
- Chapter 4: On-page optimization & content strategy
- Chapter 4: E-E-A-T implementation
- Chapter 4: The hub and spoke model
- Chapter 4: Content types that perform

**REVIEW Phase:**
- Chapter 3: Technical SEO checklist
- Chapter 3: Core Web Vitals requirements
- Chapter 4: E-E-A-T verification
- Chapter 4: Content quality standards

**PUBLISH Phase:**
- Chapter 3: International SEO (hreflang)
- Chapter 3: XML sitemaps
- Multi-language deployment (our custom architecture)

---

## 🔄 Maintenance: Monthly Workflow

After initial setup, follow this monthly:

```bash
# Week 1: Content Creation
/build-blog (2-4 new posts)

# Week 2: Review & Publish
/review-seo (all new content)
/review-eeat (all new content)
/review-readability (all new content)
/translate-content
/deploy-multilang
/submit-search

# Week 3: Performance Review
Check analytics
Identify underperforming content
Plan refreshes

# Week 4: Content Refresh
Update outdated posts (manual editing)
Run review commands again
Republish updates
```

---

## ✅ Implementation Checklist

### Phase 1: Setup (One Time)
- [ ] Review this document
- [ ] View swimlane diagram (SEO-WORKFLOW-SWIMLANE.html)
- [ ] Understand the 4 phases
- [ ] Install necessary tools (Vercel CLI, etc.)

### Phase 2: Create Command Files
- [ ] Create `/commands/onboard/` folder
- [ ] Create `/commands/build/` folder
- [ ] Create `/commands/review/` folder
- [ ] Create `/commands/publish/` folder
- [ ] Write 13 command files (templates in this doc)

### Phase 3: Test Workflow
- [ ] Run research commands on test client
- [ ] Build one test blog post
- [ ] Run all review commands
- [ ] Test translation process
- [ ] Test deployment process

### Phase 4: Go Live
- [ ] Run full workflow on real client
- [ ] Document any issues
- [ ] Refine commands as needed
- [ ] Train team on workflow

---

## 🎉 Success Metrics

### You'll know this system works when:

✅ **New team members** can follow the workflow without help
✅ **No steps are skipped** (because the workflow is clear)
✅ **Quality is consistent** (because review is built-in)
✅ **Deployment is error-free** (because it's automated)
✅ **Content ranks** (because SEO-pro.md knowledge is baked in)

### Warning Signs (System Not Working):

❌ Team asks "What do I do next?" (workflow unclear)
❌ Content published without review (steps being skipped)
❌ Deployment failures (publish phase needs improvement)
❌ Low quality content (build or review phase needs work)
❌ SEO basics missed (review phase not catching issues)

---

## 📞 Support & Questions

If confused:
1. Re-read this guide
2. View the swimlane diagram
3. Check the SEO-pro.md for underlying principles
4. Ask: "What phase am I in?" (Onboard, Build, Review, or Publish)

Remember: **Simple is better than complex.**

If a command feels too complicated, break it into smaller pieces (agents/skills).

---

## 🏆 Final Words

This system took the 30-year wisdom from SEO-pro.md and organized it into a workflow a 5th grader can follow.

**The genius is in the simplicity:**
- 4 phases anyone can understand
- 14 commands total (not overwhelming)
- 8 specialized agents do the complex work (hidden from user)
- 35+ reusable skills (modular and maintainable)
- Linear progression (no confusion about "what's next")

**Now go build great content that ranks.**

---

**Document Version:** 2.0
**Last Updated:** 2025-11-10
**Author:** Claude Code (Based on SEO-pro.md by 30-year SEO veteran)
**Status:** Ready for Implementation