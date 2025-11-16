# Command ⑦ /7-build-blog

**Phase:** BUILD
**Primary Agent:** content-generation
**Time:** 2-4 hours (AI working)

## Purpose
Generate SEO-optimized blog post (1,500-2,500 words) targeting specific keyword and search intent.

---

## 🚀 PARALLEL BATCH EXECUTION (NEW: High-Volume Content Generation)

**For Claude Code users with 1M context window:** Generate **30 blogs at once** using parallel multi-agent execution.

### Token Budget Analysis

**Your Context Window:**
- Total available: 1,000,000 tokens
- Output limit per response: 64,000 tokens
- Safe operating zone: Use 40-50% of context (~400-500K tokens)

**Per Blog Token Cost:**
- Input context (instructions, CSV data, personas): ~12K tokens
- Output generation (blog content + schema): ~4K tokens
- **Total per blog:** ~16K tokens

**30 Blogs Calculation:**
- 30 blogs × 16K tokens = **480K tokens** ✅
- Buffer remaining: **520K tokens**
- Risk level: **LOW** (well within safe zone)

---

### Optimal Parallel Strategy: 10 Agents × 3 Languages

**Architecture:**
```
Agent 1 → Keyword #1 → EN blog + MS blog + ZH blog
Agent 2 → Keyword #2 → EN blog + MS blog + ZH blog
Agent 3 → Keyword #3 → EN blog + MS blog + ZH blog
...
Agent 10 → Keyword #10 → EN blog + MS blog + ZH blog

Total: 10 parallel agents = 30 blogs (10 keywords × 3 languages)
```

**Why This Strategy?**
- ✅ Each agent maintains keyword context across translations
- ✅ Consistent messaging across EN/MS/ZH versions
- ✅ Each agent outputs ~12K tokens (well within 64K limit)
- ✅ 10 parallel agents = manageable coordination
- ✅ Translation quality is better (agent remembers EN version when writing MS/ZH)

---

### Step-by-Step Parallel Execution

**STEP 1: SELECT 10 HIGH-PRIORITY KEYWORDS**

From `clients/[client-name]/onboarding/long-tail-keywords.csv`, pick 10 keywords with:
- Priority = "high"
- Different topic clusters (diversity)
- Mix of search intents (informational, commercial, transactional)

**Example Selection:**
```
1. "how to apply for excavator financing Malaysia" (60 vol, commercial)
2. "excavator financing bad credit Malaysia" (45 vol, transactional)
3. "forklift financing Malaysia no deposit" (45 vol, transactional)
4. "forklift leasing vs buying Malaysia" (38 vol, informational)
5. "lorry financing Malaysia fast approval" (85 vol, transactional)
6. "lorry financing bad credit Malaysia" (60 vol, transactional)
7. "prime mover financing Malaysia" (120 vol, commercial)
8. "crane financing hire purchase Malaysia" (50 vol, commercial)
9. "bulldozer financing used equipment Malaysia" (40 vol, commercial)
10. "refrigerated truck financing cold chain Malaysia" (35 vol, commercial)
```

**STEP 2: LAUNCH 10 PARALLEL AGENTS**

Use Claude Code's Task tool to launch agents in parallel:

```markdown
**IMPORTANT:** I need to launch 10 agents IN PARALLEL in a SINGLE message.

Generate 30 blog posts (10 keywords × 3 languages) using parallel agents:

FOR EACH KEYWORD BELOW, LAUNCH ONE AGENT:

[Call Task tool 10 times in single message - one per keyword]

Agent 1 - Keyword: "how to apply for excavator financing Malaysia"
Agent 2 - Keyword: "excavator financing bad credit Malaysia"
Agent 3 - Keyword: "forklift financing Malaysia no deposit"
Agent 4 - Keyword: "forklift leasing vs buying Malaysia"
Agent 5 - Keyword: "lorry financing Malaysia fast approval"
Agent 6 - Keyword: "lorry financing bad credit Malaysia"
Agent 7 - Keyword: "prime mover financing Malaysia"
Agent 8 - Keyword: "crane financing hire purchase Malaysia"
Agent 9 - Keyword: "bulldozer financing used equipment Malaysia"
Agent 10 - Keyword: "refrigerated truck financing cold chain Malaysia"

Each agent should generate 3 blogs (EN, MS, ZH) for their assigned keyword.
```

**STEP 3: AGENT INSTRUCTIONS (Per Agent)**

Each agent receives these instructions:

```
You are Agent [N]. Generate 3 blog posts (EN, MS, ZH) for this keyword:

TARGET KEYWORD: [keyword]
CLIENT: ing-heng

TASK: Create 3 language versions of the same blog post:
1. English version → clients/ing-heng/website/src/pages/en/blog/[slug].astro
2. Malay version → clients/ing-heng/website/src/pages/ms/blog/[slug].astro
3. Chinese version → clients/ing-heng/website/src/pages/zh/blog/[slug].astro

CRITICAL WORKFLOW:
1. Load keyword data from long-tail-keywords.csv
2. Research top 3 competitors (SERP analysis)
3. Generate English blog first (1,500-2,500 words)
4. Translate to Malay (maintain SEO optimization)
5. Translate to Chinese (maintain SEO optimization)
6. Save all 3 files with matching slugs
7. Report completion with file paths

CONSISTENCY RULES:
- Same slug across languages: /en/blog/keyword-slug, /ms/blog/keyword-slug, /zh/blog/keyword-slug
- Same structure: Same H2/H3 hierarchy across languages
- Same schema: Article schema + FAQ schema in all languages
- Same CTAs: Translate CTAs but maintain positioning
- Same internal links: Link to corresponding language versions

TRANSLATION QUALITY:
- Malay: Natural Bahasa Malaysia (not literal translation)
- Chinese: Simplified Chinese for Malaysia market
- Localize examples: Use Malaysian context/currency/regulations
- Cultural adaptation: Adjust idioms, metaphors, examples

SEO OPTIMIZATION (ALL LANGUAGES):
- Meta title: 50-60 chars (including Chinese characters)
- Meta description: 150-160 chars
- Keyword in first 100 words
- FAQ section (5-8 questions)
- Internal links (2-5 per post)
- Schema markup (Article + FAQ)

OUTPUT FORMAT:
Report completion as:
✅ Agent [N] COMPLETE
- EN: clients/ing-heng/website/src/pages/en/blog/[slug].astro
- MS: clients/ing-heng/website/src/pages/ms/blog/[slug].astro
- ZH: clients/ing-heng/website/src/pages/zh/blog/[slug].astro
- Word count: EN: 2,100 | MS: 1,950 | ZH: 1,800
- Keywords optimized: ✅
- Schema implemented: ✅
```

---

### Execution Template (Copy-Paste Ready)

```markdown
PARALLEL BLOG GENERATION: 30 BLOGS (10 KEYWORDS × 3 LANGUAGES)

Launch 10 agents in parallel using Task tool. Each agent generates EN + MS + ZH versions.

KEYWORDS:
1. "how to apply for excavator financing Malaysia"
2. "excavator financing bad credit Malaysia"
3. "forklift financing Malaysia no deposit"
4. "forklift leasing vs buying Malaysia"
5. "lorry financing Malaysia fast approval"
6. "lorry financing bad credit Malaysia"
7. "prime mover financing Malaysia"
8. "crane financing hire purchase Malaysia"
9. "bulldozer financing used equipment Malaysia"
10. "refrigerated truck financing cold chain Malaysia"

AGENT TASK:
- Client: ing-heng
- Generate 3 blogs per keyword (EN, MS, ZH)
- 1,500-2,500 words per blog
- Full SEO optimization
- Schema markup (Article + FAQ)
- Save to src/pages/{lang}/blog/[slug].astro
- Maintain slug consistency across languages

LAUNCH ALL 10 AGENTS IN PARALLEL NOW.
```

---

### Quality Assurance Checklist (After Completion)

**Verify File Structure:**
```bash
# Should have 30 files total (10 keywords × 3 languages)
clients/ing-heng/website/src/pages/en/blog/  → 10 files
clients/ing-heng/website/src/pages/ms/blog/  → 10 files
clients/ing-heng/website/src/pages/zh/blog/  → 10 files
```

**Verify Slug Consistency:**
```bash
# Same slug across languages
/en/blog/excavator-financing-application-guide
/ms/blog/excavator-financing-application-guide  ← Same slug
/zh/blog/excavator-financing-application-guide  ← Same slug
```

**Verify Content Quality (Spot Check 3 Random Blogs):**
- [ ] 1,500-2,500 words ✅
- [ ] Target keyword in title, H1, first 100 words ✅
- [ ] 4-6 H2 sections ✅
- [ ] FAQ section with 5-8 questions ✅
- [ ] 2-5 internal links ✅
- [ ] Schema markup (Article + FAQ) ✅
- [ ] Meta title 50-60 chars ✅
- [ ] Meta description 150-160 chars ✅

**Verify Translation Quality:**
- [ ] Malay: Natural Bahasa Malaysia (not Google Translate quality)
- [ ] Chinese: Simplified Chinese, Malaysia context
- [ ] Currency: RM used in all languages
- [ ] Examples: Localized to Malaysian market

**Run Build Test:**
```bash
cd clients/ing-heng/website
npm run build
```
- [ ] Build succeeds with 0 errors ✅
- [ ] All 30 blog pages render correctly ✅

---

### Performance Expectations

**Generation Time:**
- 10 parallel agents: ~20-30 minutes total
- Each agent works simultaneously
- No sequential bottleneck

**Token Usage:**
- Total: ~480K tokens (48% of 1M context)
- Safe buffer: 520K tokens remaining
- Output: ~120K tokens (30 blogs × 4K each)

**Success Rate:**
- Expected: 100% (all 10 agents complete successfully)
- If any agent fails: Re-run that agent individually
- Partial success: Still get 27+ blogs (90%+ completion rate)

---

### Scaling Beyond 30 Blogs

**Want to generate more?**

**Option A: 60 BLOGS (20 keywords × 3 languages)**
- Launch 20 agents in parallel
- Token usage: ~960K (96% of context)
- Risk: Medium (close to limit, but feasible)
- Time: ~40-50 minutes

**Option B: 90 BLOGS (30 keywords × 3 languages)**
- Split into 3 batches:
  - Batch 1: Keywords 1-10 (30 blogs)
  - Batch 2: Keywords 11-20 (30 blogs)
  - Batch 3: Keywords 21-30 (30 blogs)
- Token usage per batch: ~480K (safe)
- Total time: ~60-90 minutes

**Option C: ALL 358 KEYWORDS (1,074 BLOGS)**
- Split into 36 batches of 10 keywords each
- Run over multiple sessions
- Estimated total time: 18-24 hours of AI work
- Your time: ~30 min per batch to launch + QA

---

### Troubleshooting Parallel Execution

**Problem:** Agent fails mid-execution
**Solution:** Re-run that specific agent individually with same keyword

**Problem:** Translation quality is poor (too literal)
**Solution:** Add explicit instruction: "Translate naturally for Malaysian audience, not word-for-word"

**Problem:** Slugs don't match across languages
**Solution:** Specify slug format in agent instructions: "Use same slug for all 3 languages"

**Problem:** Build fails due to import path errors
**Solution:** Verify all agents use correct relative import paths (../../ for Level 1 pages)

**Problem:** Context window fills up (>800K tokens)
**Solution:** Reduce batch size to 8 agents (24 blogs) or 5 agents (15 blogs)

---

## How to Choose Target Keyword

You have **2 ways** to select which keyword to target:

### Option 1: Follow the Calendar (RECOMMENDED)
Open `clients/[client-name]/content-strategy/12-month-longtail-calendar.md`
- Month 1, Week 1, Post #1: "how to apply for excavator financing Malaysia"
- Use that exact keyword

### Option 2: Pick from CSV Files
Open `clients/[client-name]/onboarding/long-tail-keywords.csv`
- Sort by priority = "high"
- Pick any keyword you want to target
- Example: "excavator financing bad credit Malaysia"

**The keyword data is already researched - just pick one!**

## Prerequisites

✅ **Required files from ONBOARD phase:**
- `long-tail-keywords.csv` (from ①b) - keywords with metadata
- `keyword-opportunities.csv` (from ①) - seed keywords
- `personas.md` (from ①) - Target audience (personas)
- `12-month-longtail-calendar.md` (from ①b) - Publishing schedule
- `author-profiles.md` (from ③) - Author attribution (OPTIONAL)
- `Selected brand design` (from ④) - Visual styling

### Validation Check
```
❌ If ANY file missing:
→ Go back: Complete ONBOARD phase ① and ①b first

Specifically check:
✅ clients/[client-name]/onboarding/long-tail-keywords.csv exists
✅ clients/[client-name]/onboarding/personas.md exists
✅ clients/[client-name]/content-strategy/12-month-longtail-calendar.md exists

NOTE: content-strategy-map.md is OPTIONAL - we use CSV files + calendar instead
```

## What This Command Does

The **content-generation** agent will:

1. **Load Keyword Data from CSV**
   - Read long-tail-keywords.csv (358 keywords) OR keyword-opportunities.csv (118 keywords)
   - Find target keyword (user specifies OR takes from 12-month-longtail-calendar.md)
   - Extract metadata: search volume, difficulty, intent, topic cluster, target persona
   - Load target persona from personas.md (understand audience)

2. **Research Competitors** (Content Analysis Only - NO Keyword Research)
   - Google the target keyword
   - Analyze top 3 ranking articles (CONTENT approach, structure, depth)
   - Identify content gaps (what they miss)
   - Apply Skyscraper Technique (plan to make yours 10x better)

3. **Generate Optimized Blog Post** (SEO-pro.md Chapter 4)
   - **Length:** 1,500-2,500 words
   - **Structure:**
     - Engaging introduction (100-150 words)
     - 4-6 major sections (H2s)
     - H3 subsections (question-based)
     - FAQ section (5-8 questions)
     - Conclusion with CTA
   - **Optimization:**
     - Keyword in title (front-loaded)
     - Keyword in H1
     - Keyword in first 100 words
     - Keyword in 2-3 H2s (natural)
     - Semantic keywords throughout
     - Featured snippet formatting

4. **Add E-E-A-T Elements**
   - Author byline with link
   - First-person experience (if applicable)
   - Cited sources (3-5 authoritative links)
   - Publication date
   - Last updated date

5. **Optimize for Engagement**
   - Short paragraphs (2-4 sentences)
   - Bullet points and lists
   - Images every 300-500 words
   - Internal links to related content (2-5 links)
   - Clear takeaways

6. **Implement Technical Elements**
   - Meta title (50-60 chars)
   - Meta description (150-160 chars)
   - Article schema
   - Breadcrumb schema
   - FAQ schema
   - Image alt text

## Output File Created

```
clients/[client-name]/website/src/pages/en/blog/[post-slug].astro
```

**Example:** `src/pages/en/blog/equipment-financing-guide-2025.astro`

## Skills Used
- `blog-post-generation` - Create optimized blog structure
- `seo-optimization` - Keyword placement, meta tags
- `featured-snippet-formatting` - Structure for snippet capture
- `keyword-placement` - Natural keyword integration
- `readability-optimization` - Clear, scannable content

## Agent Instructions

```
You are the content-generation agent. Create SEO-optimized blog post.

CLIENT: [client-name]
TARGET KEYWORD: [keyword]
SEARCH INTENT: [informational/commercial/transactional]

STEP 1: LOAD STRATEGY & KEYWORD DATA
Read:
- clients/[client-name]/onboarding/long-tail-keywords.csv (358 keywords with metadata)
- clients/[client-name]/onboarding/keyword-opportunities.csv (118 seed keywords)
- clients/[client-name]/onboarding/personas.md (9 personas)
- clients/[client-name]/eeat-strategy/author-profiles.md (if exists)
- clients/[client-name]/content-strategy/12-month-longtail-calendar.md (publishing schedule)

Look up [target keyword] in CSV files to get:
- Search volume
- Difficulty level
- Search intent (informational/commercial/transactional)
- Topic cluster
- Target persona
- Priority level

STEP 2: RESEARCH COMPETITORS ONLY (NO KEYWORD RESEARCH)
- Google: [target keyword]
- Analyze top 3 results for CONTENT approach only
- Identify content gaps (what they miss)
- Plan how to make yours better (Skyscraper Technique)

NOTE: DO NOT use DataForSEO MCP tools - keyword data already exists in CSV files!

STEP 3: CREATE OUTLINE
Structure based on intent:

INFORMATIONAL:
- How-to or explanation format
- Educational, no hard sell
- Link to related commercial content

COMMERCIAL INVESTIGATION:
- Comparison or review format
- Objective, helpful analysis
- Guide toward transaction

TRANSACTIONAL:
- Clear benefits and features
- Strong CTAs throughout
- Trust signals prominent

STEP 4: WRITE CONTENT (1,500-2,500 words)
Follow SEO-pro.md Chapter 4:
- Engaging hook (first 100 words)
- Clear structure (H2/H3 hierarchy)
- Short paragraphs (mobile-friendly)
- Bullet points for scannability
- Internal links (2-5 contextual)
- FAQ section (featured snippet optimized)
- Compelling conclusion

STEP 5: OPTIMIZE
- Title: [Target Keyword] | [Benefit/Hook] - [Brand]
- H1: Matches title intent
- First paragraph: Contains keyword naturally
- H2s: Use semantic variations
- H3s: Question-based formats
- Alt text: Descriptive, keyword-relevant

STEP 6: ADD E-E-A-T
- Author byline
- First-person where appropriate
- Cite 3-5 authoritative sources
- Original insights/opinions
- Publish date + last updated

STEP 7: IMPLEMENT SCHEMA
json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "dateModified": "..."
}

Plus FAQPage schema if FAQ section exists.

STEP 8: SAVE BLOG POST FILE

**✅ DEFAULT: Use Markdown Content Collections** (Recommended for all new posts)

```
Output to: clients/[client-name]/website/src/content/blogs/en/[slug].md

Format: Markdown with frontmatter (see TEMPLATE-example.md for reference)
```

**Frontmatter Example:**
```yaml
---
title: 'Your Blog Post Title'
description: 'Your 150-160 char meta description for SEO'
author: 'Ing Heng Credit & Leasing'
publishDate: 2025-11-13
category: 'Equipment Financing'
tags: ['tag1', 'tag2', 'tag3']
locale: 'en'
featured: false
draft: false
readingTime: 7
keywords:
  - 'keyword 1'
  - 'keyword 2'
faqSchema:
  - question: 'Your FAQ question?'
    answer: 'Your FAQ answer...'
---

# Your Blog Post Title

Content here in markdown...

## FAQ

**Q: Question 1?**
A: Answer 1...

## Conclusion

Wrap-up...
```

**Benefits:**
- ✅ Blog index auto-discovers via Astro.glob + getCollection()
- ✅ No manual array updates needed
- ✅ Clean markdown editing (not 800-line .astro files)
- ✅ Type-safe with Zod validation
- ✅ Faster to write and maintain

**Location:** See `src/content/blogs/en/TEMPLATE-example.md` for full template

STEP 9: VERIFY AUTO-DISCOVERY (Optional Verification)

**The blog index page NOW uses hybrid auto-discovery:**
- Auto-finds .astro blog posts (existing posts)
- Auto-finds .md blog posts (Content Collections)
- Auto-merges and sorts by date
- Auto-calculates category counts
- Auto-selects featured posts

**✅ NO MANUAL UPDATES NEEDED!**

Your blog post will appear on `http://localhost:4321/en/blog` automatically after build.

**If you want to verify:**
```bash
npm run build
npm run dev
# Visit http://localhost:4321/en/blog
# Your new post should appear in Recent Articles section
```

STEP 10: AUTO-TRANSLATE TO ALL CLIENT LANGUAGES

🌍 **CRITICAL: Read client CLAUDE.md to determine languages**

**Check:** `clients/[client-name]/CLAUDE.md` for language configuration

**Example (Ing Heng):**
```yaml
Multi-language website:
- English (PRIMARY)
- Malay
- Chinese
```

**Auto-translate the blog post to ALL client languages:**

**For each language, generate professional translation:**

1. **Translate to Malay (if applicable):**
   - Output: `clients/[client-name]/website/src/content/blogs/ms/[slug].md`
   - Use NATURAL Bahasa Malaysia (not Google Translate)
   - Cultural adaptation (respectful, service-oriented tone)
   - Same frontmatter structure, update:
     - `title`: Translate title
     - `description`: Translate description
     - `locale`: 'ms'
     - `keywords`: Translate keywords
     - `category`: Keep English (schema requirement)
     - `faqSchema`: Translate questions and answers

2. **Translate to Chinese (if applicable):**
   - Output: `clients/[client-name]/website/src/content/blogs/zh/[slug].md`
   - Use Simplified Chinese (简体中文)
   - Cultural adaptation (relationship-focused, trust-building)
   - Same frontmatter structure, update:
     - `title`: Translate title
     - `description`: Translate description
     - `locale`: 'zh'
     - `keywords`: Translate keywords
     - `category`: Keep English (schema requirement)
     - `faqSchema`: Translate questions and answers

3. **Translate to other languages** (check client CLAUDE.md)

**Translation Quality Requirements:**
- ✅ Natural language (NOT literal Google Translate)
- ✅ Cultural adaptation per language
- ✅ Same structure and sections as English
- ✅ Same SEO optimization (keywords, internal links)
- ✅ Same CTAs (translated)
- ✅ Same word count target (1,500-2,500 words)

**Example slug naming:**
- EN: `excavator-financing-guide.md`
- MS: `excavator-financing-guide.md` (same slug, different folder)
- ZH: `excavator-financing-guide.md` (same slug, different folder)

**Result:** If client has 3 languages, you create 3 blog post files!

STEP 11: MARK CALENDAR AS COMPLETED
Edit: clients/[client-name]/content-strategy/12-month-longtail-calendar.md

Find the keyword entry for the blog post you just created.

Change:
```markdown
1. **"your keyword here"** (60 vol, LOW diff)
   - **Publish:** Dec 2, 2025
```

To:
```markdown
1. ✅ **"your keyword here"** (60 vol, LOW diff) [COMPLETED 2025-11-13]
   - **Publish:** Dec 2, 2025
   - **URL:** /en/blog/your-post-slug
```

Ready for ⑨⑩⑪ REVIEW phase.
```

## Success Criteria
- [ ] Blog post is 1,500-2,500 words (EN version)
- [ ] Target keyword optimized naturally
- [ ] Has 4-6 H2 sections
- [ ] Has FAQ section with 5-8 questions
- [ ] Author attribution present
- [ ] 2-5 internal links included
- [ ] Schema markup implemented
- [ ] Brand design applied
- [ ] ✅ EN blog post saved to Content Collections
- [ ] ✅ MS blog post saved (if client uses Malay)
- [ ] ✅ ZH blog post saved (if client uses Chinese)
- [ ] ✅ All translations are NATURAL (not Google Translate)
- [ ] ✅ Blog posts auto-discovered on all language blog indexes
- [ ] ✅ Calendar entry marked as completed with ✅ and URLs for all languages

## Next Step
After this completes:
→ Run **⑨ /9-review-seo**
→ Run **⑩ /10-review-eeat**
→ Run **⑪ /11-review-readability**
→ Fix any issues, re-review until all PASS
→ Then run **⑫ /12-translate-content**

## Common Errors

**Error:** `long-tail-keywords.csv not found`
**Solution:** Run **①b /1b-research-long-tail-keywords** first

**Error:** `personas.md not found`
**Solution:** Run **① /1-research-business** first

**Error:** `Keyword not found in CSV files`
**Solution:**
- Check spelling matches exactly (case-sensitive)
- OR add custom keyword to long-tail-keywords.csv manually
- OR use a different keyword from the calendar

**Error:** `No brand design selected`
**Solution:** Run **④ /4-design-brand-options** first

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-13
- v2.0.1: Added blog index auto-update + calendar tracking (band-aid for legacy)
- v2.1.0: Updated to support Content Collections architecture (proper fix)
