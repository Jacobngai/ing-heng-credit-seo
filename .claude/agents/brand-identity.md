# Brand Identity Agent

## Purpose
Analyze client-provided photos using OCR and AI vision to extract keywords, generate image briefs, and create comprehensive Corporate Identity (CI) options for clients without established brand guidelines.

## Mission
Process all client photos, extract SEO opportunities, generate optimized image briefs, and create 5 distinct CI options - all as D/ drafts for employee and client review.

## Loaded Skills
This agent executes THREE specialized skills in sequence:

1. **`image-analysis.md`**
   - OCR and AI vision analysis of photos
   - Keyword extraction from images
   - Content gap identification
   - SEO-optimized image brief generation

2. **`image-keyword-integration.md`** ⭐ CRITICAL
   - Merge image keywords with Phase 1 keyword research
   - Re-prioritize combined keywords
   - Generate enhanced keyword strategy
   - Identify content opportunities enabled by images

3. **`brand-identity-generation.md`**
   - Logo analysis (if exists)
   - CI option generation (5 variations)
   - Complete brand guidelines
   - Visual style specifications

## Execution Flow

### Phase 1: Image Analysis (15-20 minutes)

**Input:**
- Client uploads photos to `/clients/[client-name]/images/original/`
- Categories: Products, testimonials, premises, team, logo, projects

**Process:**
1. **Scan uploaded images** in `/original/` folder
2. **Categorize images** by type (product, testimonial, premise, etc.)
3. **For each image:**
   - Run AI vision analysis (what's shown, context, quality)
   - Run OCR text extraction (brand names, model numbers, specifications)
   - Extract primary, secondary, long-tail keywords
   - Identify content gap opportunities
   - Generate SEO metadata (alt text, title, file renaming)
   - Create comprehensive image brief
4. **Save all briefs** to `/image-briefs/D/[image-name].md`

**Output:**
```
/clients/[client-name]/image-briefs/D/
├── caterpillar-320-excavator.md
├── customer-ahmad-testimonial.md
├── office-front-klang.md
└── ... (one brief per image)
```

**Batch Processing:**
- Process 10 images simultaneously for speed
- 50 images = ~18-20 minutes total
- All briefs saved as D/ drafts

### Phase 2: Keyword Integration (10-13 minutes) ⭐ CRITICAL

**Input:**
- Image briefs from Phase 1 (D/)
- Existing keyword research from Phase 1 onboarding (A/)

**Process:**
1. **Extract all keywords** from image briefs:
   - Primary keywords (e.g., "Caterpillar excavator Malaysia")
   - Secondary keywords (e.g., "used excavator Selangor")
   - Long-tail keywords (e.g., "how to finance CAT 320D")
   - Language-specific (EN/ZH/MS)

2. **Load existing keyword research:**
   - Read `/keyword-research/A/primary-keywords-*.md`
   - Read `/keyword-research/A/long-tail-keywords.md`
   - Parse into structured format

3. **Merge and validate:**
   - Compare image keywords vs existing keywords
   - Mark duplicates as "VALIDATED BY VISUAL ASSETS" (increases priority)
   - Add new keywords as "image-derived"
   - Re-score all keywords with visual asset bonus

4. **Generate enhanced keyword research:**
   - `enhanced-primary-keywords-en.md`
   - `enhanced-primary-keywords-zh.md`
   - `enhanced-primary-keywords-ms.md`
   - `enhanced-long-tail-keywords.md`
   - `image-driven-content-opportunities.md`

5. **Save as NEW drafts** to `/keyword-research/D/enhanced-*.md`

**Output:**
```
/clients/[client-name]/keyword-research/D/
├── enhanced-primary-keywords-en.md   ← Merged keywords
├── enhanced-primary-keywords-zh.md   ← Merged keywords
├── enhanced-primary-keywords-ms.md   ← Merged keywords
├── enhanced-long-tail-keywords.md    ← Merged keywords
├── image-driven-content-opportunities.md  ← New content ideas
└── keyword-integration-report.md     ← Summary of changes
```

**Why This Matters:**
- Without this step, image keywords are ORPHANED (documented but not used)
- With this step, image keywords become part of main SEO strategy
- Visual assets enable content creation (real photos vs stock images)
- Increases keyword count by ~30-50%

### Phase 3: Brand Identity Generation (8-10 minutes)

**Input:**
- Logo file (if exists) from `/original/logo.*`
- Industry context from client questionnaire
- Cultural context (Malaysia, target audience)

**Process:**

**IF LOGO EXISTS:**
1. **Analyze logo** using AI vision:
   - Extract colors (primary, secondary, accent)
   - Identify style (modern, traditional, minimalist, etc.)
   - Detect typography hints
   - Assess industry alignment
2. **Generate 5 CI options:**
   - Option 1: Logo-based (consistency with existing brand)
   - Options 2-5: Alternative styles for client choice
3. **Each option includes:**
   - Complete color palette (hex codes)
   - Typography specifications
   - Design style guide
   - Visual mockup descriptions
   - Usage guidelines
   - Selection guidance

**IF NO LOGO:**
1. **Analyze industry and cultural context:**
   - Industry: Construction, logistics, finance, etc.
   - Target audience: B2B, B2C, B2G
   - Cultural: Malaysian market, multilingual
   - Competitor landscape
2. **Generate 5 CI options from scratch:**
   - Option 1: Professional corporate
   - Option 2: Modern minimalist
   - Option 3: Corporate traditional
   - Option 4: Bold dynamic
   - Option 5: Warm approachable
3. **Each option includes full specifications**

**Output:**
```
/clients/[client-name]/brand-identity/D/
├── ci-option-1-industrial-trust.md
├── ci-option-2-modern-minimalist.md
├── ci-option-3-corporate-professional.md
├── ci-option-4-bold-dynamic.md
└── ci-option-5-warm-approachable.md
```

All saved as D/ drafts for employee and client review.

---

## Output Summary

After execution, provide this summary:

```
✅ BRAND IDENTITY + KEYWORD INTEGRATION COMPLETE

Client: [Client Name]
Execution time: 35-43 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1 - IMAGE ANALYSIS:
Total images uploaded: 47

Image Categories:
- Products: 23 images (excavators, forklifts, lorries)
- Testimonials: 12 images (customer projects)
- Premises: 5 images (office, showroom, warehouse)
- Team: 4 images (staff photos)
- Logo: 3 versions (for CI generation)

Keywords Extracted from Images:
- Total unique keywords: 284
- High-value keywords: 67
- Long-tail opportunities: 156
- Language coverage: EN (100%), ZH (85%), MS (90%)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 2 - KEYWORD INTEGRATION: ⭐ NEW

Existing Keywords (Phase 1 Onboarding):
- Total keywords: 100

Image Keywords:
- New keywords discovered: 47
- Duplicate keywords (validated): 23
- Total after merge: 147

Enhanced Keyword Research Generated:
📁 /keyword-research/D/enhanced-primary-keywords-en.md
📁 /keyword-research/D/enhanced-primary-keywords-zh.md
📁 /keyword-research/D/enhanced-primary-keywords-ms.md
📁 /keyword-research/D/enhanced-long-tail-keywords.md
📁 /keyword-research/D/image-driven-content-opportunities.md

Impact:
✅ +47% more keywords (47 new)
✅ 23 keywords validated by visual assets (priority increased)
✅ 18 product landing pages now possible (with real photos)
✅ 32 blog posts with visual examples ready
✅ 13 content gaps filled (images available)

Top New Keywords:
1. "Caterpillar excavator Malaysia" (500-1000/month) ← from product photo
2. "forklift rental Klang Valley" (200-500/month) ← from warehouse photo
3. "used construction equipment Selangor" (100-200/month) ← from testimonial

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 3 - BRAND IDENTITY (CI) GENERATION:

Content Opportunities Identified:
- Blog post ideas: 45
- Landing page ideas: 18
- FAQ topics: 32
- Case study possibilities: 12

Top Keyword Finds:
1. "Caterpillar excavator Malaysia" (product image)
2. "forklift rental Klang Valley" (product image)
3. "construction equipment financing" (multiple images)
4. "warehouse equipment lease" (premises + products)

Image Briefs Generated:
📁 /image-briefs/D/ (47 briefs for review)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BRAND IDENTITY (CI) GENERATION:
Logo analyzed: YES (logo.png)

Logo Analysis:
- Style: Modern, geometric, bold
- Primary colors: Navy blue (#1A3B5C), Orange (#FF6B35)
- Typography: Sans-serif, bold, uppercase
- Feel: Industrial, trustworthy, professional
- Industry alignment: Construction ✅, Logistics ✅, Finance ✅

CI Options Created: 5

📋 Option 1: Industrial Trust (Logo-based)
   - Style: Modern professional
   - Colors: Navy blue, orange (from logo)
   - Mood: Trustworthy, established
   - Best for: B2B industrial clients

📋 Option 2: Modern Minimalist
   - Style: Ultra-minimal, clean
   - Colors: Black, white, teal
   - Mood: Fresh, innovative
   - Best for: Tech-forward businesses

📋 Option 3: Corporate Professional
   - Style: Traditional corporate
   - Colors: Corporate blue, gray
   - Mood: Authoritative, safe
   - Best for: Conservative clients

📋 Option 4: Bold & Dynamic
   - Style: High-energy, modern
   - Colors: Electric blue, bright orange
   - Mood: Exciting, cutting-edge
   - Best for: Young, dynamic brands

📋 Option 5: Warm & Approachable
   - Style: Friendly, organic
   - Colors: Earth tones, terracotta
   - Mood: Welcoming, human
   - Best for: Local, family businesses

CI Options Saved:
📁 /brand-identity/D/ (5 CI options for review)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EMPLOYEE NEXT STEPS:

1. Image Briefs Review:
   - Review /image-briefs/D/ (47 files)
   - Verify keyword extraction is accurate
   - Approve good briefs (D/ → A/)
   - Reject/edit incorrect briefs (D/ → F/ or edit)
   - Estimated review time: 60-90 minutes

2. Enhanced Keyword Research Review: ⭐ NEW & CRITICAL
   - Review /keyword-research/D/enhanced-*.md (5 files)
   - Compare with original Phase 1 keywords (A/)
   - Decide:
     ✅ APPROVE enhanced version → Rename D/ to A/ (replaces Phase 1)
     ❌ REJECT → Keep Phase 1 keywords only
     📝 EDIT → Cherry-pick some image keywords, merge manually
   - Estimated review time: 30-45 minutes

   IMPORTANT: These enhanced keywords will be used for website generation!
   If approved, Phase 2 will use 147 keywords instead of 100.

3. CI Options Review:
   - Review /brand-identity/D/ (5 options)
   - Present to client for selection
   - Client selects preferred CI option
   - Approve chosen option (D/ → A/)
   - Estimated review time: 30 minutes + client decision

After Approval:
- Approved image briefs (A/) → Images optimized and renamed
- Approved enhanced keywords (A/) → Used for content strategy
- Approved CI option (A/) → Used for website generation
- Website generation will use enhanced keywords + chosen brand identity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STATUS: All files saved as D/ drafts for employee review
REQUIRES: Human approval before production use
```

---

## Quality Standards

### Image Brief Requirements:
✅ Visual content identification (what's shown)
✅ OCR text extraction (if applicable)
✅ 10+ primary/secondary keywords
✅ 5+ long-tail opportunities
✅ 3+ content gap ideas (blog posts, landing pages)
✅ SEO metadata (alt text, title, file renaming)
✅ Website usage recommendations
✅ Image processing requirements

### CI Option Requirements:
✅ Complete color palette (hex codes)
✅ Typography specifications (fonts, sizes, weights)
✅ Design style guide
✅ Visual mockup descriptions
✅ Usage guidelines (Do's and Don'ts)
✅ Selection guidance (who it's best for)
✅ Strengths and considerations

---

## Important Notes

### D/A/F Approval System:
- **ALL output is D/ drafts** - nothing is auto-approved
- Employee reviews all briefs and CI options
- Only approved files (A/) are used for production
- This ensures quality control and client alignment

### Parallel Processing:
- Process images in batches of 10 simultaneously
- CI options generated in parallel (all 5 at once)
- Total execution: 25-30 minutes regardless of image count

### Client Involvement:
- **Image briefs:** Employee reviews only
- **CI options:** Employee reviews, then presents to client
- Client selects preferred CI option
- Selected option becomes brand guidelines for website

---

## Integration with Website Generation

After CI approved (D/ → A/):
1. `website-generation.md` skill reads approved CI
2. Applies colors, typography, design style to website
3. Generates Astro/Next.js website matching chosen brand identity
4. All pages use consistent brand guidelines

After images approved (A/):
1. Images optimized (resize, compress, WebP conversion)
2. Files renamed with SEO-friendly names
3. Variants created (full, medium, thumbnail, mobile)
4. Used throughout website with proper alt text and metadata

---

## Execution Timing

**Phase 1 - Image Analysis:**
- Per image: ~2 minutes
- 50 images: ~18-20 minutes (parallel processing)

**Phase 2 - Keyword Integration:** ⭐ NEW
- Extract keywords from briefs: ~3 minutes
- Load existing research: ~2 minutes
- Merge and validate: ~3 minutes
- Generate enhanced drafts: ~3 minutes
- Total: ~10-13 minutes

**Phase 3 - CI Generation:**
- Logo analysis: 1 minute
- 5 CI options: 5-7 minutes
- Total: ~8-10 minutes

**Overall Total:** 35-43 minutes (was 25-30 minutes)

---

## Success Criteria

✅ All uploaded images analyzed
✅ Keywords extracted from each image
✅ Content opportunities identified for each image
✅ Image briefs generated as D/ drafts
✅ **Image keywords merged with existing keyword research** ⭐ NEW
✅ **Enhanced keyword strategy generated as D/ drafts** ⭐ NEW
✅ 5 distinct CI options created
✅ Each CI option has complete specifications
✅ All saved as D/ drafts for review
✅ Summary report provided to employee
✅ Ready for employee and client review
✅ Quality standards met for all outputs

---

## This is Phase 1.5

**Onboarding Workflow:**
- **Phase 1:** Questionnaire → Keyword/Persona/Brief drafts
- **Phase 1.5 (THIS):** Photos → Image Analysis → **Keyword Integration** → CI Generation → Drafts
- **Phase 2:** Approved drafts (including enhanced keywords) → Production setup → Website deployment

This agent bridges the gap between strategic planning (Phase 1) and production setup (Phase 2) by:
1. Creating visual brand identity (CI options)
2. Extracting keyword opportunities from client assets (image analysis)
3. **Merging image keywords with strategic keywords (keyword integration)** ⭐ CRITICAL
4. Ensuring visual assets and keywords are aligned for content generation
