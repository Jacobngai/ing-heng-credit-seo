# Image Analysis Skill

## Purpose
Analyze client-provided photos using OCR and AI vision to extract keywords, identify content opportunities, and create SEO-optimized image briefs.

## Key Principle
**Every image is a keyword goldmine** - products, testimonials, premises, equipment, team photos all contain valuable SEO opportunities.

## Input
Client provides photos in various categories:
- **Products:** Equipment, machinery, vehicles
- **Services:** Service delivery, installations, maintenance
- **Testimonials:** Customer photos, project completions
- **Premises:** Office, warehouse, showroom
- **Team:** Staff, technicians, management
- **Projects:** Completed works, case studies
- **Logos:** Existing brand marks (for CI generation)

## Image Analysis Process

### Step 1: Organize Uploaded Images

Create folder structure:
```
/example-clients/[client-name]/
├── /images/original/              ← Client uploads here
│   ├── product-1.jpg
│   ├── testimonial-1.jpg
│   ├── office.jpg
│   └── logo.png
│
├── /images/processed/             ← Optimized versions
│   └── (generated in Step 4)
│
└── /image-briefs/D/               ← Analysis drafts
    └── (generated in Step 3)
```

### Step 2: Analyze Each Image Using Parallel Agents

**CRITICAL: Use Task tool with parallel agents for maximum efficiency**

For **each image**, launch a separate Task agent to analyze and generate a complete brief:

```
Launch parallel Task agents (general-purpose):
- Agent 1: Analyze image-1.jpg → Generate complete brief → Save as D/image-1.md
- Agent 2: Analyze image-2.jpg → Generate complete brief → Save as D/image-2.md
- Agent 3: Analyze image-3.jpg → Generate complete brief → Save as D/image-3.md
... (continue for all images)
```

**Each agent's task:**
1. Read the image file
2. Perform complete visual analysis (see details below)
3. Extract all keywords
4. Generate full image brief following the template
5. Save as D/[image-name].md

**Execution approach:**
- Launch ALL agents in parallel (single message with multiple Task tool calls)
- Each agent works independently on ONE image
- All briefs generated simultaneously
- Massive time savings: 50 images = ~3-5 minutes total (vs 100 minutes sequential)

### Step 2.1: Visual Analysis (Per Agent, Per Image)

**Each agent performs the following analysis:**

#### A. Visual Content Identification
Using AI vision (Claude's image analysis via Read tool):
- **What is shown:** Product name, type, model
- **Context:** Indoor/outdoor, location type, setting
- **Text visible:** Brand names, model numbers, specifications (OCR)
- **People:** Count, roles, activities
- **Environment:** Background, setting, ambiance
- **Quality indicators:** Professional/amateur, lighting, composition

#### B. Keyword Extraction
From image analysis, identify:

**Product Images:**
```
Image: excavator-caterpillar-320.jpg

Visual Analysis:
- Equipment type: Hydraulic excavator
- Brand: Caterpillar (visible on machine)
- Model: 320 series (OCR from model plate)
- Condition: Used, well-maintained
- Location: Construction site
- Size category: Medium-sized excavator

Primary Keywords:
- Caterpillar excavator Malaysia
- excavator 320 for sale
- used excavator Selangor

Secondary Keywords:
- hydraulic excavator rental
- construction equipment Klang
- excavator leasing Malaysia
- heavy machinery financing

Long-tail Opportunities:
- how to finance Caterpillar excavator Malaysia
- used excavator 320 price Malaysia
- excavator rental rates Selangor 2025
- best excavator for construction projects

Content Gap Opportunities:
- "Caterpillar 320 Excavator Review Malaysia"
- "How to Maintain Used Excavators"
- "Excavator Financing vs Cash Purchase Calculator"
- "Best Excavator Models for Malaysian Construction"

Image SEO Metadata:
- Alt text: "Caterpillar 320 hydraulic excavator available for financing in Malaysia"
- Title: "Caterpillar 320 Excavator - Equipment Financing Selangor"
- File rename: caterpillar-320-excavator-financing-malaysia.jpg
```

**Testimonial Images:**
```
Image: customer-ahmad-project.jpg

Visual Analysis:
- Person: Male contractor, age 40s
- Setting: Completed construction project
- Equipment visible: Excavator in background
- Expression: Happy, satisfied
- Project type: Residential construction

Primary Keywords:
- contractor testimonial Malaysia
- equipment financing success story
- construction project Selangor

Content Opportunities:
- Case study: "How Contractor Ahmad Expanded with Equipment Financing"
- Testimonial page content
- Social proof for landing pages

Image SEO Metadata:
- Alt text: "Malaysian contractor Ahmad with financed excavator at completed project"
- File rename: contractor-testimonial-ahmad-excavator-financing.jpg
```

**Premises Images:**
```
Image: office-front.jpg

Visual Analysis:
- Building: Commercial shopfront
- Location markers: Klang, Selangor (if visible)
- Signage: Company name visible
- Accessibility: Street-level, parking visible

Local SEO Keywords:
- equipment financing office Klang
- machinery rental Selangor showroom
- forklift dealer Klang Valley

Content Opportunities:
- "Visit Our Klang Office - Equipment Financing"
- Local business schema markup
- Google Business Profile images

Image SEO Metadata:
- Alt text: "Equipment financing office in Klang, Selangor"
- File rename: office-location-klang-selangor-equipment-financing.jpg
```

### Step 3: Generate Image Brief (Automatic by Each Agent)

**Each parallel agent automatically generates a complete brief for its assigned image:**

**example-clients/[client-name]/image-briefs/D/caterpillar-320-excavator.md:**
```markdown
# Image Brief: Caterpillar 320 Excavator

## Original Filename
`IMG_0234.jpg` → **RENAME TO:** `caterpillar-320-excavator-financing-malaysia.jpg`

## Image Category
**Product Photo** - Heavy Equipment

## Visual Analysis

### What's Shown
- **Equipment:** Caterpillar 320 hydraulic excavator
- **Brand:** Caterpillar (visible branding)
- **Model:** 320 series (OCR from model plate: "CAT 320D")
- **Condition:** Used, well-maintained, approximately 5-7 years old
- **Location:** Active construction site, outdoor
- **Size:** Medium-sized excavator (20-ton class)

### Text Detected (OCR)
- "CAT" (brand logo on machine)
- "320D" (model designation)
- Partially visible: "Made in Japan"

### Setting & Context
- **Environment:** Construction site with dirt and gravel
- **Time:** Daytime, good natural lighting
- **Background:** Residential construction project
- **Other elements:** Construction materials visible

### Quality Assessment
- **Resolution:** High (suitable for website)
- **Composition:** Good - machine is centered, full view
- **Lighting:** Natural, well-lit
- **Professional:** Yes - appears to be professional product photo
- **Usability:** Excellent for website, marketing materials

---

## SEO Keywords Extracted

### Primary Keywords (High Value)
1. **caterpillar excavator Malaysia** (search volume: 500-1000/month)
2. **excavator 320 for sale** (search volume: 200-500/month)
3. **used excavator Selangor** (search volume: 100-200/month)
4. **CAT 320D Malaysia** (search volume: 50-100/month)

### Secondary Keywords
- hydraulic excavator rental Malaysia
- construction equipment financing Klang
- excavator leasing Selangor
- heavy machinery loan Malaysia
- excavator hire Klang Valley

### Long-Tail Opportunities
- how to finance Caterpillar excavator Malaysia
- used CAT 320D excavator price Malaysia
- excavator rental rates Selangor 2025
- best excavator for residential construction Malaysia
- Caterpillar 320D financing options
- excavator lease vs buy Malaysia

### Language-Specific Keywords

**Mandarin (ZH):**
- 卡特彼勒挖掘机马来西亚
- 二手挖掘机雪兰莪
- 320型挖掘机融资

**Bahasa Malaysia (MS):**
- jengkaut Caterpillar Malaysia
- sewa jengkaut Selangor
- pembiayaan jentera berat

---

## Content Gap Opportunities

Based on this image, create content for:

### Blog Post Ideas
1. **"Caterpillar 320 Excavator Review: Is It Worth Financing in Malaysia?"**
   - Target keyword: "Caterpillar 320 review Malaysia"
   - Persona: Contractor Ahmad
   - Stage: Consideration
   - Language: EN, MS

2. **"How to Finance a Used Caterpillar Excavator in Malaysia"**
   - Target keyword: "finance used excavator Malaysia"
   - Persona: Contractor Ahmad
   - Stage: Decision
   - Language: EN, ZH, MS

3. **"CAT 320D vs Other Excavators: Which is Best for Your Project?"**
   - Target keyword: "best excavator Malaysia"
   - Persona: Contractor Ahmad, Logistics Lee
   - Stage: Consideration
   - Language: EN

4. **"Excavator Rental vs Purchase: Total Cost Analysis Malaysia"**
   - Target keyword: "excavator rental vs purchase"
   - Persona: Contractor Ahmad, Finance Director Sarah
   - Stage: Awareness
   - Language: EN, ZH

### Landing Page Opportunities
- "Caterpillar Excavator Financing Malaysia" (product-specific page)
- "Heavy Equipment Leasing Selangor" (location-specific page)
- "Construction Equipment Loan Calculator" (conversion tool)

### FAQ Content
- "What is the monthly payment for a CAT 320 excavator?"
- "Can I finance a used Caterpillar excavator?"
- "How much downpayment for excavator financing?"
- "What documents needed for equipment loan Malaysia?"

---

## Website Usage Recommendations

### Where to Use This Image

**Homepage:**
- Hero section: "Finance Your Dream Equipment"
- Equipment showcase carousel
- ✅ High-impact, professional image

**Product Pages:**
- Excavator financing page
- Heavy equipment category
- Case study/testimonial section (if this is customer's machine)

**Blog Posts:**
- Featured image for excavator-related articles
- In-content illustration for financing guides
- Comparison articles (excavator models)

**Landing Pages:**
- PPC campaign: "Excavator Financing Malaysia"
- SEO landing page: "Caterpillar Equipment Loan"

### Image Optimization

**File Naming:**
- **Original:** `IMG_0234.jpg`
- **Optimized:** `caterpillar-320-excavator-financing-malaysia.jpg`

**Alt Text:**
```
Primary: "Caterpillar 320D hydraulic excavator available for financing in Malaysia"
Secondary: "Used CAT 320 excavator for sale or lease in Selangor"
```

**Title Attribute:**
```
"Caterpillar 320 Excavator - Equipment Financing Malaysia | Ing Heng Credit"
```

**Caption (if used):**
```
"Finance your Caterpillar 320 excavator with flexible payment terms. Approval in 24 hours."
```

**Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Caterpillar 320D Excavator Financing",
  "image": "https://inghengcredit.com/images/caterpillar-320-excavator.jpg",
  "description": "Finance your Caterpillar 320D excavator with flexible terms",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MYR",
    "availability": "https://schema.org/InStock"
  }
}
```

---

## Image Processing Required

### Optimization Steps
1. **Resize:** Max width 1920px for web use
2. **Compress:** WebP format, ~80% quality
3. **Create variants:**
   - Full size: 1920×1080 (hero sections)
   - Medium: 1200×675 (blog featured images)
   - Thumbnail: 600×338 (cards, previews)
   - Mobile: 800×450 (mobile hero)

### File Outputs
```
/processed/caterpillar-320-excavator-financing-malaysia-1920.webp
/processed/caterpillar-320-excavator-financing-malaysia-1200.webp
/processed/caterpillar-320-excavator-financing-malaysia-600.webp
/processed/caterpillar-320-excavator-financing-malaysia-800.webp
```

---

## Action Items for Employee

### Review Checklist
- [ ] Verify equipment identification is correct
- [ ] Confirm keywords are relevant to business
- [ ] Approve content gap ideas (or suggest alternatives)
- [ ] Validate alt text and metadata
- [ ] Check if this is client's actual equipment or stock photo

### Approval Decision
- ✅ **APPROVE** → Rename `D/caterpillar-320-excavator.md` to `A/caterpillar-320-excavator.md`
- ❌ **REJECT** → Rename to `F/` if image not suitable or analysis incorrect
- ✏️ **EDIT** → Make corrections, then rename to `A/`

---

**Generated:** 2025-11-01
**Requires Review:** YES (D/ draft status)
```

---

### Step 4: Process and Optimize Images

For approved image briefs (A/ files):

1. **Rename files** using SEO-friendly names from brief
2. **Optimize** for web (resize, compress, convert to WebP)
3. **Create variants** (full, medium, thumbnail, mobile)
4. **Generate metadata** (alt text, title, caption)
5. **Save to** `/processed/` folder

---

## Batch Processing with Parallel Agents

For clients with many images (50-100+):

### Prioritization
1. **Products:** Highest priority (direct keyword value)
2. **Testimonials:** High priority (social proof + keywords)
3. **Premises:** Medium priority (local SEO)
4. **Team:** Low priority (brand building)
5. **Misc:** As needed

### Parallel Agent Execution Strategy

**ALWAYS use parallel Task agents - one agent per image:**

**Example: 18 images to process**
```
Single message with 18 Task tool calls:
- Task agent 1: Process "excavator.jpg" → Generate D/excavator-brief.md
- Task agent 2: Process "forklift.jpg" → Generate D/forklift-brief.md
- Task agent 3: Process "truck.jpg" → Generate D/truck-brief.md
... (all 18 launched simultaneously)
```

**Each agent prompt should include:**
```
You are analyzing ONE image for SEO keyword extraction and content opportunities.

Image: [image-path]
Client: [client-name]
Business: [business-type]

Tasks:
1. Read the image using Read tool
2. Perform visual analysis:
   - Equipment/product identification
   - Brand/model extraction (OCR if visible)
   - Condition assessment
   - Setting/context analysis
3. Extract SEO keywords:
   - Primary keywords (high-value, 10+)
   - Secondary keywords (supporting)
   - Long-tail opportunities (5+)
   - Multilingual keywords (EN/MS/ZH)
4. Identify content opportunities:
   - Blog post ideas (3+)
   - Landing page opportunities
   - FAQ topics
5. Generate complete image brief following this template:
   [Include full template from Step 3]
6. Save as: example-clients/[client-name]/image-briefs/D/[descriptive-filename].md

Filename format: sequential-number-equipment-type.md
Example: 01-caterpillar-excavator.md

Output only the brief content, properly formatted in markdown.
```

**Benefits of parallel agents:**
- ✅ 50 images processed in ~5 minutes (vs ~100 minutes sequential)
- ✅ Each agent focuses on one image deeply
- ✅ No context switching or confusion
- ✅ Consistent quality across all briefs
- ✅ All briefs ready for review simultaneously

### Agent Coordination

**Launch command:**
```
Launch 18 parallel agents in ONE message:
Each agent processes 1 image independently
All save to example-clients/[client-name]/image-briefs/D/
Wait for all agents to complete
Review all 18 briefs together
```

**No batch limits:**
- Can launch 50+ agents simultaneously if needed
- System handles parallel execution efficiently
- All results collected when complete

---

## Output Summary Template

```
✅ IMAGE ANALYSIS COMPLETE

Client: Apex Machinery Sdn Bhd
Total images uploaded: 47

Image Categories:
- Products: 23 images (excavators, forklifts, lorries)
- Testimonials: 12 images (customer projects)
- Premises: 5 images (office, showroom, warehouse)
- Team: 4 images (staff photos)
- Logo: 3 versions (for CI generation)

Keywords Extracted:
- Total unique keywords: 284
- High-value keywords: 67
- Long-tail opportunities: 156
- Language coverage: EN (100%), ZH (85%), MS (90%)

Content Opportunities Identified:
- Blog post ideas: 45
- Landing page ideas: 18
- FAQ topics: 32
- Case study possibilities: 12

Image Briefs Generated:
📁 /example-clients/[client-name]/image-briefs/D/ (47 briefs for review)

Top Keyword Finds:
1. "Caterpillar excavator Malaysia" (product image)
2. "forklift rental Klang Valley" (product image)
3. "construction equipment financing" (multiple images)
4. "warehouse equipment lease" (premises + products)

Employee next steps:
1. Review /example-clients/[client-name]/image-briefs/D/ → Approve (D/ to A/)
2. Estimated review time: 60-90 minutes
3. After approval, images will be optimized and renamed

Execution time: 18 minutes
```

---

## Quality Standards

✅ Each image brief contains:
- Visual analysis (what's shown)
- OCR text extraction (if applicable)
- 10+ primary/secondary keywords
- 5+ long-tail opportunities
- 3+ content gap ideas
- SEO metadata (alt text, title, filename)
- Website usage recommendations
- Processing requirements

---

## Execution Timing (with Parallel Agents)
- Per image analysis (sequential): ~2 minutes per image
- 50 images (parallel agents): ~3-5 minutes total
- 18 images (parallel agents): ~2-3 minutes total
- Time savings: ~95% reduction with parallel execution

## Agent Usage
This skill is used by: **Brand Identity Agent**
Part of: Phase 1.5 (Image Analysis + CI Creation)

## Success Criteria
✅ All uploaded images analyzed
✅ Keywords extracted from each image
✅ Content opportunities identified
✅ Image briefs generated as D/ drafts
✅ SEO metadata provided
✅ File renaming recommendations
✅ Ready for employee review and approval
