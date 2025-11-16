Launch the Brand Identity Agent to analyze client photos, extract keywords, and generate Corporate Identity (CI) options.

**What this command does:**
1. Loads Brand Identity Agent from `.claude/agents/brand-identity.md`
2. Agent executes two skills:
   - `image-analysis.md` - OCR and vision analysis
   - `brand-identity-generation.md` - CI option creation
3. Analyzes all uploaded photos
4. Generates image briefs (D/ drafts)
5. Creates 5 CI options (D/ drafts)
6. Provides comprehensive summary report

**Expected output:**
- Image briefs with keyword extraction
- 5 complete CI options with brand guidelines
- All saved as D/ drafts for review
- Execution time: ~25-30 minutes

**Usage:**
```bash
/setup-brand [client-name]
```

**Example:**
```bash
/setup-brand apex-machinery
```

**Prerequisites:**
Before running this command:
1. Client has uploaded photos to `/clients/[client-name]/images/original/`
2. Photos should include:
   - Products (equipment, machinery, vehicles)
   - Testimonials (customer photos, projects)
   - Premises (office, warehouse, showroom)
   - Team (staff photos - optional)
   - Logo (if exists - for CI generation)

**What photos to upload:**

**Essential:**
- ✅ Product photos (main revenue items)
- ✅ Logo (if client has one)
- ✅ Testimonial photos (social proof)

**Recommended:**
- Office/showroom photos (local SEO)
- Completed project photos (case studies)

**Optional:**
- Team photos (brand building)
- Misc business photos

**Minimum:** 10-20 photos (basic setup)
**Recommended:** 30-50 photos (comprehensive analysis)
**Maximum:** No limit (agent processes in batches)

---

## What Gets Generated

### 1. Image Briefs (D/ Drafts)

For each uploaded image, you get:

**Example: Product Photo Analysis**
```markdown
# Image Brief: Caterpillar 320 Excavator

## Original Filename
IMG_0234.jpg → RENAME TO: caterpillar-320-excavator-financing-malaysia.jpg

## Visual Analysis
- Equipment: Caterpillar 320 hydraulic excavator
- Brand: Caterpillar (visible branding)
- Model: 320D (OCR extracted)
- Condition: Used, well-maintained

## Keywords Extracted
Primary:
- caterpillar excavator Malaysia (500-1000/month)
- excavator 320 for sale (200-500/month)

Secondary:
- hydraulic excavator rental Malaysia
- construction equipment financing Klang
- excavator leasing Selangor

Long-tail:
- how to finance Caterpillar excavator Malaysia
- used CAT 320D excavator price Malaysia

## Content Gap Opportunities
Blog post ideas:
1. "Caterpillar 320 Excavator Review: Worth Financing?"
2. "How to Finance a Used Excavator in Malaysia"
3. "CAT 320D vs Other Excavators Comparison"

## SEO Metadata
Alt text: "Caterpillar 320D hydraulic excavator available for financing in Malaysia"
Title: "Caterpillar 320 Excavator - Equipment Financing Malaysia"
File rename: caterpillar-320-excavator-financing-malaysia.jpg

## Website Usage
- Homepage hero section (high-impact image)
- Excavator financing page
- Blog featured images
- Landing pages for PPC campaigns
```

**Saved to:** `/clients/apex-machinery/image-briefs/D/caterpillar-320-excavator.md`

---

### 2. Corporate Identity Options (D/ Drafts)

You get 5 complete CI options with full specifications:

**Option 1: Industrial Trust (Logo-based)**
```markdown
# CI Option 1: Industrial Trust

## Color Palette
Primary Colors:
- Navy Blue: #1A3B5C (logo primary)
- Vibrant Orange: #FF6B35 (logo accent)

Secondary Colors:
- Charcoal Gray: #2C3E50
- Light Gray: #ECF0F1
- White: #FFFFFF

## Typography
Headings:
- Font: Montserrat (Bold, 700)
- Sizes: H1 (48px), H2 (36px), H3 (28px)
- Color: Navy Blue (#1A3B5C)

Body Text:
- Font: Inter (Regular, 400)
- Size: 16px (desktop), 14px (mobile)
- Color: Charcoal Gray (#2C3E50)

## Design Style
Visual Language:
- Clean, geometric shapes
- Strong horizontal lines
- Bold, confident headings
- Generous white space

Component Style:
- Buttons: Rounded corners (8px), solid fill
- Cards: Subtle shadow, 12px border radius
- Icons: Line-based, 2px stroke

## Visual Examples
[Mockup descriptions for homepage, service cards, etc.]

## Usage Guidelines
Do's:
✅ Use navy blue for trust sections
✅ Use orange sparingly for CTAs
✅ Maintain generous white space

Don'ts:
❌ Don't overuse orange (max 5% of page)
❌ Don't mix font families beyond specified
❌ Don't use gradients

## Why Choose This Option
Best for:
- Established businesses wanting modern update
- B2B companies needing trust signals
- Industrial/construction sector

Strengths:
- Professional and trustworthy
- Strong brand consistency
- High readability
```

**Saved to:** `/clients/apex-machinery/brand-identity/D/ci-option-1-industrial-trust.md`

**Similarly, you get:**
- Option 2: Modern Minimalist (fresh, approachable)
- Option 3: Corporate Professional (authoritative, safe)
- Option 4: Bold & Dynamic (energetic, exciting)
- Option 5: Warm & Approachable (friendly, human)

---

## After Command Execution

**Summary Report:**
```
✅ BRAND IDENTITY ANALYSIS COMPLETE

Client: Apex Machinery Sdn Bhd
Execution time: 28 minutes

IMAGE ANALYSIS:
- Total images: 47
- Image briefs generated: 47
- Keywords extracted: 284 unique
- Content opportunities: 45 blog ideas, 18 landing pages

BRAND IDENTITY:
- Logo analyzed: YES
- CI options created: 5
- All with complete specifications

FILES CREATED:
📁 /image-briefs/D/ (47 files)
📁 /brand-identity/D/ (5 files)

EMPLOYEE NEXT STEPS:
1. Review image briefs (60-90 min)
2. Approve good briefs (D/ → A/)
3. Review CI options (30 min)
4. Present CI options to client
5. Client selects preferred option
6. Approve chosen CI (D/ → A/)
```

---

## Employee Review Process

### Step 1: Review Image Briefs (D/)

For each image brief:
- ✅ Verify keyword extraction is accurate
- ✅ Confirm content gap ideas are relevant
- ✅ Check SEO metadata is appropriate
- ✅ Validate file renaming suggestion

**Decision:**
- **APPROVE:** Rename `D/[filename].md` → `A/[filename].md`
- **REJECT:** Rename `D/[filename].md` → `F/[filename].md`
- **EDIT:** Make corrections, then rename to `A/`

**Estimated time:** 60-90 minutes for 47 briefs (~1-2 min per brief)

### Step 2: Review CI Options (D/)

Review all 5 options:
- ✅ Check color palettes are cohesive
- ✅ Verify typography is appropriate
- ✅ Assess design style alignment with client industry
- ✅ Evaluate usage guidelines

**Decision:**
- Present all 5 options to client (via PDF, mockups, or descriptions)
- Client selects preferred option
- Approve chosen option only (D/ → A/)

**Estimated time:** 30 minutes review + client decision time

---

## After Approval

**Approved Image Briefs (A/):**
- Images will be optimized (resize, compress, WebP)
- Files renamed with SEO-friendly names from brief
- Variants created (full, medium, thumbnail, mobile)
- Metadata applied (alt text, title, caption)
- Used throughout website

**Approved CI Option (A/):**
- Selected CI becomes brand guidelines
- Website generation uses approved CI:
  - Colors applied to entire site
  - Typography specifications implemented
  - Design style used for all components
  - Visual consistency across all pages

---

## Next Steps After Approval

Once image briefs and CI are approved:

1. **Continue onboarding:** Run `/finalize-client apex-machinery`
   - Converts all A/ drafts to production configs
   - Generates website using approved CI
   - Deploys to production

2. **Website will automatically:**
   - Use approved CI colors, fonts, design style
   - Include optimized images with proper SEO metadata
   - Apply brand consistency across all pages
   - Match client's brand identity perfectly

---

## When to Use This Command

**Onboarding Workflow Position:**

This is **Phase 1.5** of client onboarding:

1. **Phase 1:** `/onboard-client` → Keyword/Persona/Brief drafts
2. **Phase 1.5:** `/setup-brand` → Image analysis + CI generation ← YOU ARE HERE
3. **Phase 2:** `/finalize-client` → Production setup + website deployment

**Run this command:**
- After `/onboard-client` completes
- After employee approves keyword/persona/brief drafts
- Before `/finalize-client` (so website can use approved CI)

**Typical sequence:**
```bash
# Step 1: Generate strategic drafts
/onboard-client apex-machinery

# [Employee reviews and approves D/ → A/]

# Step 2: Client uploads photos → /images/original/

# Step 3: Generate image briefs and CI options
/setup-brand apex-machinery

# [Employee reviews image briefs]
# [Employee presents CI options to client]
# [Client selects preferred CI]
# [Employee approves selected CI and image briefs]

# Step 4: Finalize and deploy
/finalize-client apex-machinery
```

---

## Important Notes

### All Output is Drafts (D/)
- **Nothing is auto-approved**
- Employee reviews everything
- Client selects CI option
- Only approved files (A/) used for production

### OCR and Vision Quality
- Agent uses AI vision (Claude's multimodal capability)
- OCR extracts text from images (model numbers, brand names)
- Keyword extraction is automated but reviewed by employee
- If keywords seem wrong, employee can edit or reject

### CI Selection
- **5 options provided** to give client choice
- Client usually selects 1 option (occasionally requests hybrid)
- Selected option becomes brand guidelines for entire website
- Ensures client is happy with visual identity before website generation

### Processing Time
- **Small batch (10-20 images):** ~10-15 minutes
- **Medium batch (30-50 images):** ~20-25 minutes
- **Large batch (100+ images):** ~30-40 minutes
- Parallel processing ensures scalability

---

## This is Optional But Recommended

**Can you skip this?**
- YES - if client has established brand guidelines (CI)
- YES - if you don't have client photos yet
- YES - if you want to generate website with default styling

**Why you should use it:**
- Extracts valuable SEO keywords from client assets
- Identifies content gaps from actual products/services
- Creates professional brand identity options
- Ensures website matches client's brand perfectly
- Gives client ownership of visual identity

**Best practice:**
- Request photos during client questionnaire
- Run `/setup-brand` after Phase 1 approval
- Present CI options to client before finalizing
- This ensures highest quality and client satisfaction

---

## Execution Time
- **Image analysis:** 15-20 minutes (depends on photo count)
- **CI generation:** 8-10 minutes
- **Total:** ~25-30 minutes
- **Employee review:** 90-120 minutes
- **Client CI selection:** Variable (can be instant or days)

---

**This command completes Phase 1.5 and prepares for final website deployment in Phase 2.**
