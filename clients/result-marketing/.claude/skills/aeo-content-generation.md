# AEO Content Generation Skill

**Purpose:** Generate all 220 AEO blog posts for Result Marketing using parallel background agents with progress tracking.

**Last Updated:** 2026-01-25

---

## Overview

This skill generates all 220 AEO blog posts defined in `AEO-CONTENT-TRACKER.md` using parallel background Task agents.

**Key Features:**
- Parallel processing (5+ agents running simultaneously)
- Progress tracking with auto-resume capability
- D/A/F workflow for quality control
- Category-based batching for efficient execution

---

## Prerequisites

Before invoking this skill, ensure:

1. ✅ `AEO-CONTENT-TRACKER.md` exists and contains all 220 slugs
2. ✅ `BLOG-STANDARD.md` exists with content template
3. ✅ Folder structure exists: `clients/result-marketing/content/en/blogs/{D,A,F}/`
4. ✅ Progress tracker file: `AEO-GENERATION-PROGRESS.md`

---

## Input Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `category` | string\|number | "all" | Category 1-8, or "all" for complete generation |
| `batchSize` | number | 5 | Number of parallel agents to run |
| `startFrom` | string | null | Slug to resume from (for interrupted processes) |

---

## Execution Workflow

### Phase 1: Initialization (1-2 minutes)

**Actions:**
1. Read `AEO-CONTENT-TRACKER.md` to parse all 220 slugs
2. Create/update `AEO-GENERATION-PROGRESS.md` with current status
3. Filter slugs based on `category` and `startFrom` parameters
4. Prepare work queue of pending slugs

**Output:**
```
📋 AEO Content Generation Started
📊 Total to generate: [N] posts
🚀 Parallel agents: [batchSize]
📁 Output: clients/result-marketing/content/en/blogs/D/
📄 Progress tracker: AEO-GENERATION-PROGRESS.md
```

---

### Phase 2: Parallel Generation (Variable - ~30-60 minutes total)

**Strategy:**
- Launch `batchSize` Task agents in parallel (default: 5)
- Each agent processes ONE slug at a time
- After completing a slug, agent reports result and picks next pending slug
- Continue until all slugs in queue are processed

**Agent Prompt:**
```
You are an AEO blog post generator for Result Marketing.

GENERATE ONE BLOG POST:

Slug: {slug}
Category: {category}
Subcategory: {subcategory}

REQUIREMENTS:
1. Read: clients/result-marketing/BLOG-STANDARD.md (follow exactly)
2. Read: clients/result-marketing/AEO-CONTENT-TRACKER.md (template structure)
3. Word count: 800-1,200 words
4. Structure:
   - Summary box with key takeaways
   - Table of contents
   - Direct Answer Block (50-75 words for AI engines)
   - The Problem section (with data/statistics)
   - The Solution section (framework, steps)
   - Industry-specific application
   - 3 CTAs (after intro, middle, end)
   - FAQ section (3-5 questions)
   - Schema markup (Article + FAQPage)

5. Target audience: Local businesses in Malaysia/SEA
6. Tone: 70% educational, 30% direct response
7. Category-specific guidelines from AEO-CONTENT-TRACKER.md

AFTER GENERATING:
1. Save to: clients/result-marketing/content/en/blogs/D/aeo-{slug}.md
2. Update: AEO-GENERATION-PROGRESS.md
   - Change: [PENDING] → [DONE] for this slug
   - Update completion count
3. Print: ✅ Generated: {slug}

IF FAILED:
1. Update: AEO-GENERATION-PROGRESS.md
   - Change: [PENDING] → [FAILED] with reason
2. Print: ❌ Failed: {slug} - {reason}
```

**Monitoring:**
Every 30 seconds, print progress summary:
```
📊 AEO Generation Progress:
✅ Completed: 15/220 (6.8%)
🔄 In Progress: 5 agents
⏳ Remaining: 205
⏱️ Elapsed: 5m 20s
📁 Output: clients/result-marketing/content/en/blogs/D/
```

---

### Phase 3: Completion & Summary

**When all agents finish:**

1. Print final summary:
```
✅ AEO Content Generation Complete!

📊 Results:
✅ Completed: 218/220 (99.1%)
❌ Failed: 2/220 (0.9%)
⏱️ Total time: 45m 30s
📁 Location: clients/result-marketing/content/en/blogs/D/

❌ Failed posts:
- aeo-[slug-1]: [reason]
- aeo-[slug-2]: [reason]

📋 Next steps:
1. Review D/ folder (218 files)
2. Run quality check on each file
3. Move good files to A/
4. Move bad files to F/
5. Update AEO-CONTENT-TRACKER.md with published posts
```

2. Update `AEO-GENERATION-PROGRESS.md` with final status

---

## Progress Tracker Format

**File:** `clients/result-marketing/AEO-GENERATION-PROGRESS.md`

```markdown
# AEO Content Generation Progress

**Started:** 2026-01-25 10:00:00
**Last Updated:** 2026-01-25 10:45:30
**Total Posts:** 220

## Overall Progress
- [IN_PROGRESS] Category 1: Permission (30 posts) - 28/30 complete
- [PENDING] Category 2: AI Visibility (35 posts) - 0/35 complete
- [PENDING] Category 3: Outcome & Fit (30 posts) - 0/30 complete
- [PENDING] Category 4: Provider Selection (40 posts) - 0/40 complete
- [PENDING] Category 5: Risk & Trust (25 posts) - 0/25 complete
- [PENDING] Category 6: Pricing & ROI (25 posts) - 0/25 complete
- [PENDING] Category 7: DIY vs Hire (15 posts) - 0/15 complete
- [PENDING] Category 8: Measurement (20 posts) - 0/20 complete

## Detailed Progress

### Category 1: Permission (TOFU)
- [DONE] is-seo-dead-2026
- [DONE] do-ai-overviews-kill-seo-traffic
- [DONE] if-people-dont-click-whats-point-of-seo
- [FAILED] what-still-works-seo-vs-ads-vs-social - Reason: Insufficient keyword data
- [IN_PROGRESS] how-to-get-brand-into-ai-answers
- [PENDING] zero-click-search-rise-2026
[... all 220 slugs with status]
```

**Status Values:**
- `[PENDING]` - Not started
- `[IN_PROGRESS]` - Currently being generated
- `[DONE]` - Successfully generated in D/ folder
- `[FAILED]` - Generation failed (reason logged)

---

## Error Handling

### If an Agent Fails

**Automatic retry:**
- Agent attempts to regenerate the same slug
- If fails 3 times, mark as `[FAILED]` and continue to next

**Common failures:**
- Insufficient keyword data → Use generic AEO keywords
- Template parsing error → Check BLOG-STANDARD.md format
- File write error → Check folder permissions

---

### If Process is Interrupted

**Resume capability:**
1. Check `AEO-GENERATION-PROGRESS.md` for last status
2. Note the next `[PENDING]` slug or last `[IN_PROGRESS]`
3. Re-invoke skill with `startFrom` parameter

**Example resume:**
```
Original run interrupted at slug "aeo-vs-seo-differences"

Resume command:
/generate-aeo-content --start-from aeo-vs-seo-differences
```

**Resume behavior:**
- Skips all `[DONE]` slugs
- Retries `[FAILED]` slugs
- Continues from `startFrom` slug if provided

---

## Content Quality Standards

Every generated post must meet:

| Requirement | Standard |
|-------------|----------|
| Word count | 800-1,200 words |
| Direct Answer Block | 50-75 words (AI-scannable) |
| CTAs | 3 (intro, middle, end) |
| FAQ section | 3-5 questions with schema |
| Schema markup | Article + FAQPage |
| Meta description | 150-160 characters |
| Key takeaways | 3-4 bullet points |
| Table of contents | Numbered list with anchor links |
| Tone | 70% educational, 30% direct response |

**Quality check happens in D/A/F review phase, not during generation.**

---

## Post-Generation Workflow (D/A/F)

After generation is complete:

### Step 1: Review D/ Folder
- Expected: 220 files (or less if some failed)
- Each file: `aeo-[slug].md`

### Step 2: Quality Check Each File
For each file in D/:
1. Read content
2. Validate against BLOG-STANDARD.md
3. Check word count, structure, schema

### Step 3: Move to Appropriate Folder
```
Good quality → Move to A/
Bad quality → Move to F/ with failure notes
Needs edits → Edit in place, then move to A/
```

### Step 4: Update Tracker
Update `AEO-CONTENT-TRACKER.md`:
```markdown
- [x] is-seo-dead-2026  ✅ Published 2026-01-25
```

---

## Category Batching Strategy

For efficiency, posts are generated in category order:

### Priority 1: Foundation (Categories 1-2)
- Category 1: Permission (30 posts)
- Category 2: AI Visibility (35 posts)
- **Total: 65 posts**
- **Estimated time:** 15-20 minutes with 5 agents

### Priority 2: Business Case (Categories 3-4)
- Category 3: Outcome & Fit (30 posts)
- Category 4: Provider Selection (40 posts)
- **Total: 70 posts**
- **Estimated time:** 15-20 minutes with 5 agents

### Priority 3: Decision Support (Categories 5-8)
- Category 5: Risk & Trust (25 posts)
- Category 6: Pricing & ROI (25 posts)
- Category 7: DIY vs Hire (15 posts)
- Category 8: Measurement (20 posts)
- **Total: 85 posts**
- **Estimated time:** 20-25 minutes with 5 agents

**Total estimated time: 50-65 minutes for all 220 posts**

---

## Success Metrics

✅ **Generation Complete:**
- All 220 posts generated (or attempted)
- Progress tracker shows 220/220 processed
- D/ folder contains 218-220 files (allowing for some failures)

✅ **Quality Complete (after D/A/F review):**
- A/ folder contains approved posts
- F/ folder contains rejected posts (with reasons)
- AEO-CONTENT-TRACKER.md updated with published posts

---

## Example Invocation

**Generate all 220 posts:**
```
/aeo-content-generation
```

**Generate only Category 1 (Permission):**
```
/aeo-content-generation --category 1
```

**Generate with 10 parallel agents:**
```
/aeo-content-generation --batchSize 10
```

**Resume from interrupted process:**
```
/aeo-content-generation --startFrom aeo-vs-seo-differences
```

---

## Files Used

| File | Purpose |
|------|---------|
| `AEO-CONTENT-TRACKER.md` | Source of truth for all 220 slugs |
| `BLOG-STANDARD.md` | Content template and formatting rules |
| `AEO-GENERATION-PROGRESS.md` | Real-time progress tracking |
| `content/en/blogs/D/` | Draft output folder |
| `content/en/blogs/A/` | Approved content folder |
| `content/en/blogs/F/` | Failed content folder |

---

## Related Skills

- `content-quality-check.md` - For D/A/F review phase
- `multi-language-content.md` - For MS/ZH translation phase
- `publishing-workflow.md` - For publishing to production

---

**Remember: ALWAYS update progress tracker BEFORE moving to next item. Process is interrupt-safe and resumable.**
