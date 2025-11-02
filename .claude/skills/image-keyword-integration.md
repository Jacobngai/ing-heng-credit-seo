# Image Keyword Integration Skill

## Purpose
Extract keywords from client photos and **integrate them back into the keyword research** to enhance the SEO strategy with visual asset opportunities.

## Key Principle
**Images are keyword goldmines** - Product photos, testimonials, and premises contain valuable keywords that should be added to the main keyword strategy, not just documented in image briefs.

## Problem This Solves

**Without this skill:**
```
Phase 1: Keyword research from questionnaire → 100 keywords
Phase 1.5: Image analysis extracts 50 keywords → Documented in briefs
Phase 2: Website uses 100 keywords only → 50 image keywords LOST!
```

**With this skill:**
```
Phase 1: Keyword research from questionnaire → 100 keywords
Phase 1.5: Image analysis extracts 50 keywords → MERGED into keyword research
        → Re-validate and prioritize → 150 keywords (combined)
Phase 2: Website uses 150 keywords → All opportunities captured!
```

---

## Integration Workflow

### Step 1: Extract Keywords from Images

**Input:** All approved image briefs (A/ files)

**Process:**
```
For each approved image brief:
  Read: /image-briefs/A/[image-name].md
  Extract:
    - Primary keywords (e.g., "Caterpillar excavator Malaysia")
    - Secondary keywords (e.g., "used excavator Selangor")
    - Long-tail keywords (e.g., "how to finance used excavator Malaysia")
    - Language-specific keywords (EN/ZH/MS)
```

**Output:**
```json
{
  "image_keywords": {
    "en": [
      {
        "keyword": "Caterpillar excavator Malaysia",
        "source": "caterpillar-320-excavator.jpg",
        "search_volume": "500-1000/month",
        "difficulty": "medium",
        "intent": "commercial"
      },
      {
        "keyword": "used excavator Selangor",
        "source": "caterpillar-320-excavator.jpg",
        "search_volume": "100-200/month",
        "difficulty": "low",
        "intent": "commercial"
      }
    ],
    "zh": [
      {
        "keyword": "卡特彼勒挖掘机马来西亚",
        "source": "caterpillar-320-excavator.jpg",
        "search_volume": "200-500/month",
        "difficulty": "low",
        "intent": "commercial"
      }
    ],
    "ms": [
      {
        "keyword": "jengkaut Caterpillar Malaysia",
        "source": "caterpillar-320-excavator.jpg",
        "search_volume": "50-100/month",
        "difficulty": "low",
        "intent": "commercial"
      }
    ]
  }
}
```

---

### Step 2: Merge with Existing Keywords

**Input:**
- Existing keyword research from Phase 1 (A/ files)
- Image keywords from Step 1

**Process:**

#### 2.1 Load Existing Keywords
```
Read: /keyword-research/A/primary-keywords-en.md
Read: /keyword-research/A/primary-keywords-zh.md
Read: /keyword-research/A/primary-keywords-ms.md
Read: /keyword-research/A/long-tail-keywords.md
```

Extract existing keywords into structured format.

#### 2.2 Identify New Keywords
Compare image keywords vs existing keywords:

```
For each image keyword:
  If keyword already exists in research:
    → Mark as "VALIDATED BY VISUAL ASSETS" (increases priority)
    → Add image source reference
  Else:
    → Add as NEW KEYWORD
    → Tag with "image-derived" flag
    → Prioritize based on search volume
```

**Example:**

```markdown
# Existing Keyword
**Keyword:** equipment financing Malaysia
**Source:** Questionnaire + competitor analysis
**Search Volume:** 1000-2000/month
**Priority:** HIGH
**Validation:** ✅ Confirmed by visual assets (office-front.jpg)

# New Keyword (from images)
**Keyword:** Caterpillar excavator Malaysia
**Source:** Image analysis (caterpillar-320-excavator.jpg)
**Search Volume:** 500-1000/month
**Priority:** HIGH
**Validation:** ✅ Visual asset available
**Content Opportunity:** Product landing page + blog series
```

#### 2.3 Re-prioritize Combined Keywords
Use scoring algorithm:

```
Keyword Score =
  Search Volume (0-10) +
  Difficulty (-5 to +5, lower is better) +
  Visual Asset Bonus (+3 if image exists) +
  Competitor Gap (+5 if competitors don't rank) +
  Language Coverage (+2 per language version)
```

**Result:** Keywords with visual assets get higher priority!

---

### Step 3: Generate Enhanced Keyword Research

**Output new draft files with merged keywords:**

#### `/keyword-research/D/enhanced-primary-keywords-en.md`

```markdown
# Enhanced Primary Keywords (English) - With Image Analysis

## High-Priority Keywords (Score 20+)

### 1. Caterpillar excavator Malaysia ⭐ NEW FROM IMAGES
**Search Volume:** 500-1000/month
**Difficulty:** Medium
**Intent:** Commercial investigation
**Current Ranking:** Not ranking
**Visual Asset:** ✅ caterpillar-320-excavator.jpg
**Content Opportunities:**
- Landing page: "Caterpillar Excavator Financing Malaysia"
- Blog: "Caterpillar 320 Excavator Review 2025"
- Blog: "How to Finance Used Caterpillar Equipment"
- FAQ: "What is the best excavator for construction in Malaysia?"

**Why This Keyword Matters:**
- We have actual visual asset (product photo)
- Can create highly relevant content with real images
- Lower competition than generic "excavator Malaysia"
- Specific brand intent (higher conversion)

---

### 2. Equipment financing Malaysia ✅ VALIDATED BY IMAGES
**Search Volume:** 1000-2000/month
**Difficulty:** High
**Intent:** Commercial transaction
**Current Ranking:** #15
**Visual Asset:** ✅ office-front.jpg, multiple product photos
**Validation:** STRONG - Confirmed by 12 visual assets

**Image Evidence:**
- Office photo shows "Equipment Financing" signage
- Product photos show financed equipment
- Testimonial photos show happy customers

**Enhanced Content Opportunities:**
- Can use real office photo on landing page (trust signal)
- Can show actual financed equipment (social proof)
- Can feature real customer testimonials with photos

---

## Medium-Priority Keywords (Score 15-19)

### 3. Used excavator Selangor ⭐ NEW FROM IMAGES
**Search Volume:** 100-200/month
**Difficulty:** Low
**Intent:** Commercial investigation
**Visual Asset:** ✅ excavator-at-site.jpg
**Long-tail Expansion:**
- "used excavator for sale Selangor"
- "second hand excavator Klang Valley"
- "pre-owned construction equipment Selangor"

---

[Continue for all keywords...]

---

## Keywords Added from Image Analysis

**Total new keywords discovered:** 47
**Languages covered:** EN (32), ZH (28), MS (25)

**Categories:**
- Product-specific: 18 keywords (excavator models, forklift brands, etc.)
- Location-based: 12 keywords (Klang, Selangor, Klang Valley)
- Service-specific: 10 keywords (financing, rental, leasing)
- Long-tail: 7 keywords (how-to, comparison, calculator)

**High-value discoveries:**
1. "Caterpillar 320 excavator Malaysia" - Specific model with visual proof
2. "forklift rental Klang Valley" - Location-specific with warehouse photo
3. "used construction equipment Selangor" - Broad match with multiple images
4. "excavator financing calculator Malaysia" - Tool opportunity (content gap)

---

## Visual Asset Inventory

**Total images analyzed:** 47
**Keywords extracted:** 284 (unique: 47 after deduplication)

**Image Categories:**
- Products: 23 images → 32 keywords
- Testimonials: 12 images → 8 keywords
- Premises: 5 images → 5 keywords
- Team: 4 images → 2 keywords
- Misc: 3 images → 0 keywords

**Content Opportunities Enabled by Images:**
- Product landing pages: 18 (with real photos)
- Blog posts with visual examples: 32
- Testimonial pages: 12
- Location page (office): 1

---

## Keyword Research Enhancement Summary

**Before Image Analysis:**
- Total keywords: 100
- With visual assets: 0
- Content gaps: 45

**After Image Analysis:**
- Total keywords: 147 (+47)
- With visual assets: 47 (+47)
- Content gaps: 32 (-13, filled by image content)

**Impact:**
- 47% more keywords to target
- 100% of new keywords have supporting visual assets
- 29% reduction in content gaps (can create content with real images)
- Higher conversion potential (real product photos vs stock images)
```

---

### Step 4: Generate Content Gap Analysis

**New file:** `/keyword-research/D/image-driven-content-opportunities.md`

```markdown
# Image-Driven Content Opportunities

## Content We Can Now Create (Because We Have Images)

### Product Landing Pages (18 opportunities)

#### 1. Caterpillar Excavator Financing Malaysia
**Visual Assets:**
- caterpillar-320-excavator.jpg (hero image)
- excavator-at-construction-site.jpg (use case)
- customer-with-excavator.jpg (testimonial)

**Keywords Targeted:**
- Caterpillar excavator Malaysia (500-1000/month)
- CAT 320 financing (50-100/month)
- used excavator Selangor (100-200/month)

**Content Outline:**
- Hero: "Finance Your Caterpillar Excavator Today" + excavator photo
- Features: Specs with product photo
- Financing options: Calculator with visual breakdown
- Testimonial: Customer Ahmad with his excavator
- CTA: Apply now with office photo (trust signal)

**Conversion Advantage:**
- Real equipment photos (not stock images)
- Actual customer testimonial (social proof)
- Office photo (legitimacy)

---

#### 2. Forklift Rental Klang Valley
**Visual Assets:**
- forklift-warehouse.jpg
- forklift-in-action.jpg

**Keywords Targeted:**
- forklift rental Klang Valley (200-500/month)
- warehouse equipment lease (100-200/month)

[Continue for all 18 landing pages...]

---

### Blog Posts with Visual Examples (32 opportunities)

#### 1. "Caterpillar 320 Excavator Review: Is It Worth Financing in Malaysia?"
**Visual Assets:**
- caterpillar-320-excavator.jpg (featured image)
- excavator-specs-plate.jpg (OCR extracted: CAT 320D)

**Keywords:**
- Caterpillar 320 review Malaysia (100-200/month)
- is CAT excavator worth it (50-100/month)

**Outline:**
- Introduction with excavator photo
- Specifications (with spec plate photo)
- Financing options
- Customer case study (with testimonial photo)

**SEO Advantage:**
- Featured snippet potential (review + image)
- Higher click-through (real product photo in SERP)
- Better engagement (visual content)

[Continue for all 32 blog posts...]

---

## Content Gaps Filled by Images

**Before Image Analysis:**
```
Gap: No product photos for landing pages
Gap: No customer testimonial visuals
Gap: No local presence proof (office photos)
Gap: Limited location-specific content
```

**After Image Analysis:**
```
✅ Filled: 18 product landing pages now possible
✅ Filled: 12 testimonial pages with real photos
✅ Filled: Local SEO content (office, Klang, Selangor)
✅ Filled: Location-specific keywords with proof
```

**Content Creation Acceleration:**
- Before: 2-3 blog posts/week (limited by stock photo search)
- After: 5-7 blog posts/week (images ready to use)
- Time saved: ~2 hours/week (no stock photo hunting)
```

---

### Step 5: Update Keyword Strategy Files

Save enhanced keyword research as **NEW DRAFTS (D/)**:

```
/clients/apex-machinery/keyword-research/D/
├── enhanced-primary-keywords-en.md
├── enhanced-primary-keywords-zh.md
├── enhanced-primary-keywords-ms.md
├── enhanced-long-tail-keywords.md
├── image-driven-content-opportunities.md
└── keyword-integration-report.md
```

**Employee reviews these NEW drafts** alongside Phase 1 keyword research.

**Decision:**
- If image keywords add value → Approve enhanced versions (D/ → A/)
- If image keywords redundant → Keep original Phase 1 keywords
- Can mix: Approve some image keywords, reject others

---

## Agent Workflow Integration

### Brand Identity Agent (Phase 1.5) Updated Flow:

**OLD (Incorrect):**
```
1. Analyze images
2. Generate image briefs
3. Generate CI options
4. Done (keywords orphaned!)
```

**NEW (Correct):**
```
1. Analyze images
2. Generate image briefs
3. Extract keywords from images
4. Merge keywords with Phase 1 research  ← NEW STEP
5. Generate enhanced keyword strategy      ← NEW STEP
6. Generate CI options
7. Save all as D/ for review
```

**Output:**
```
/clients/apex-machinery/
├── /image-briefs/D/*.md                    ← Image analysis
├── /brand-identity/D/*.md                  ← CI options
└── /keyword-research/D/enhanced-*.md       ← UPDATED keyword research
```

**Employee reviews:**
1. ✅ Image briefs (are keywords accurate?)
2. ✅ Enhanced keyword research (do image keywords add value?)
3. ✅ CI options (which brand identity?)
4. Approve all → D/ to A/

---

## Success Criteria

✅ All keywords from images extracted
✅ Image keywords merged with existing research
✅ Duplicates identified and marked as "validated"
✅ New keywords prioritized by search volume
✅ Enhanced keyword research files generated (D/)
✅ Content opportunities documented
✅ Visual asset inventory created
✅ Employee can review and approve enhanced keywords

---

## Example: Before vs After

**Phase 1 Keyword Research (Questionnaire Only):**
```
Total keywords: 100
- Equipment financing Malaysia
- Forklift rental Malaysia
- Excavator leasing Selangor
... (generic, broad terms)
```

**Phase 1.5 Enhanced (After Image Analysis):**
```
Total keywords: 147 (+47 from images)

Validated by images:
- Equipment financing Malaysia ✅ (office photo confirms)
- Forklift rental Malaysia ✅ (forklift photos confirm)

New from images:
- Caterpillar excavator Malaysia ⭐ (specific model visible)
- CAT 320D financing ⭐ (OCR from model plate)
- Used excavator Selangor ⭐ (location-specific product)
- Forklift rental Klang Valley ⭐ (warehouse in Klang)
... (specific, actionable terms with visual proof)
```

**Impact:**
- 47% more keywords
- Higher specificity (model numbers, locations)
- Visual validation (credibility)
- More content opportunities (real images available)

---

## Execution Timing

- Extract keywords from 47 images: ~5 minutes
- Merge with existing research: ~3 minutes
- Re-prioritize and score: ~2 minutes
- Generate enhanced drafts: ~3 minutes
- **Total: ~13 minutes** (added to Phase 1.5)

## Agent Usage

This skill is executed by: **Brand Identity Agent**
Part of: Phase 1.5 (after image analysis, before CI generation)

## Integration Points

- **Invoked after:** `image-analysis.md`
- **Invokes:** `keyword-research.md` (for validation and scoring)
- **Invoked before:** `brand-identity-generation.md`

---

**This skill ensures image keywords are NOT orphaned but integrated into the main SEO strategy! 🚀**
