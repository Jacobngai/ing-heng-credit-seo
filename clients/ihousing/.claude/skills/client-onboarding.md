# Client Onboarding Skill

## Purpose
Master orchestration workflow for onboarding new clients - generates draft keyword research, personas, and brief for employee review.

## Client Parameter
**IMPORTANT:** When invoking this skill, pass the client name as a parameter:
- Used in folder paths as: `example-clients/[client-name]/`
- Replace `[client-name]` with actual client identifier (e.g., "apex-machinery", "ing-heng-credit")
- Must be consistent throughout entire onboarding workflow

## Phase
**Phase 1:** Draft Generation (THIS SKILL)
- Output: D/ draft files for review
- Employee reviews and approves (D/ → A/)
- Then Phase 2 (`client-finalization.md`) converts to production

## Prerequisites
- Client has completed 30+ question questionnaire
- Employee has questionnaire answers ready to paste
- Client name/identifier determined (will be used in all folder paths)

## Input Format
Questionnaire should cover:

###

 1. Business Information
- Company name
- Industry
- Years in business
- Business model (B2B, B2C, B2G)
- Revenue size
- Number of employees

### 2. Target Audience
- Primary customer demographics
- Secondary customer segments
- Pain points they face
- How your product/service solves these
- Buying process and decision makers

### 3. Services/Products
- Core offerings
- Unique value propositions
- Competitive advantages
- Pricing model

### 4. Competitors
- Top 5 competitors (with websites)
- What they do well
- What they do poorly
- Your differentiation

### 5. SEO & Content Goals
- Primary SEO keywords (if known)
- Content topics of interest
- Preferred languages (EN, ZH, MS - all, or priorities)
- Publishing frequency preference
- Content goals (traffic, leads, brand awareness)

### 6. Brand Voice
- Tone preferences (professional, friendly, authoritative, etc.)
- Topics to avoid
- Industry regulations or sensitivities
- Examples of content they like

---

## Workflow Steps

### Step 1: Parse Questionnaire
Extract and structure the client's answers:

```json
{
  "business": {
    "name": "Apex Machinery Sdn Bhd",
    "industry": "construction equipment rental",
    "model": "B2B",
    "size": "medium"
  },
  "target_audience": {
    "primary": "construction contractors in Klang Valley",
    "secondary": "logistics companies, warehouse operators",
    "pain_points": ["high upfront equipment costs", "cash flow constraints"]
  },
  "offerings": {
    "core": ["excavator rental", "forklift leasing", "machinery financing"],
    "usp": "flexible payment terms, 24/7 maintenance support"
  },
  "competitors": [
    {"name": "ABC Equipment", "url": "https://abc.com"},
    {"name": "XYZ Rentals", "url": "https://xyz.com"}
  ],
  "seo_goals": {
    "keywords": ["equipment rental Selangor", "forklift lease Malaysia"],
    "languages": ["en", "zh", "ms"],
    "frequency": "3 posts per week",
    "goals": ["generate leads", "rank for equipment keywords"]
  },
  "brand_voice": {
    "tone": "professional yet approachable",
    "avoid": ["negative competitor mentions", "unrealistic promises"]
  }
}
```

---

### Step 2: Invoke Keyword Research Skill
For each language, research keywords:

**Load skill:** `keyword-research.md`

**Execute for:**
1. English keywords (EN)
   - "equipment rental Malaysia"
   - "forklift leasing Selangor"
   - "machinery financing"

2. Mandarin keywords (ZH)
   - "设备租赁马来西亚"
   - "叉车租赁雪兰莪"
   - "机械融资"

3. Malay keywords (MS)
   - "sewa peralatan Malaysia"
   - "pajakan forklift Selangor"
   - "pembiayaan jentera"

**Output files (as drafts):**
```
/example-clients/[client-name]/keyword-research/D/primary-keywords-en.md
/example-clients/[client-name]/keyword-research/D/primary-keywords-zh.md
/example-clients/[client-name]/keyword-research/D/primary-keywords-ms.md
/example-clients/[client-name]/keyword-research/D/long-tail-keywords.md
/example-clients/[client-name]/keyword-research/D/competitor-analysis.md
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/keyword-research/D/primary-keywords-en.md
/example-clients/apex-machinery/keyword-research/D/primary-keywords-zh.md
/example-clients/apex-machinery/keyword-research/D/primary-keywords-ms.md
/example-clients/apex-machinery/keyword-research/D/long-tail-keywords.md
/example-clients/apex-machinery/keyword-research/D/competitor-analysis.md
```

---

### Step 3: Invoke Persona Generation Skill
Generate 5-8 buyer personas based on target audience.

**Load skill:** `persona-generation.md`

**Generate personas for:**
- Primary audience (construction contractors)
- Secondary audience (logistics, warehouse)
- Decision makers vs influencers
- Different buyer journey stages

**Output files (as drafts):**
```
/example-clients/[client-name]/persona-idea/D/contractor-ahmad.md
/example-clients/[client-name]/persona-idea/D/logistics-manager-lee.md
/example-clients/[client-name]/persona-idea/D/warehouse-ops-william.md
/example-clients/[client-name]/persona-idea/D/finance-director-sarah.md
/example-clients/[client-name]/persona-idea/D/procurement-officer-raj.md
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/persona-idea/D/contractor-ahmad.md
/example-clients/apex-machinery/persona-idea/D/logistics-manager-lee.md
/example-clients/apex-machinery/persona-idea/D/warehouse-ops-william.md
/example-clients/apex-machinery/persona-idea/D/finance-director-sarah.md
/example-clients/apex-machinery/persona-idea/D/procurement-officer-raj.md
```

---

### Step 4: Invoke Brief Template Skill
Compile all information into comprehensive client brief.

**Load skill:** `brief-template.md`

**Include:**
- Company overview
- Target audience summary
- SEO strategy
- Content calendar suggestions
- Language distribution
- Publishing frequency
- Brand voice guidelines
- KPIs and goals

**Output file (as draft):**
```
/example-clients/[client-name]/brief-draft/D/brief.md
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/brief-draft/D/brief.md
```

---

### Step 5: Save All Drafts
Create complete folder structure:

```
/example-clients/[client-name]/
├── /keyword-research/
│   ├── D/primary-keywords-en.md
│   ├── D/primary-keywords-zh.md
│   ├── D/primary-keywords-ms.md
│   ├── D/long-tail-keywords.md
│   └── D/competitor-analysis.md
│
├── /persona-idea/
│   ├── D/contractor-ahmad.md
│   ├── D/logistics-manager-lee.md
│   ├── D/warehouse-ops-william.md
│   ├── D/finance-director-sarah.md
│   └── D/procurement-officer-raj.md
│
└── /brief-draft/
    └── D/brief.md
```

**Example structure (for "apex-machinery" client):**
```
/example-clients/apex-machinery/
├── /keyword-research/
│   ├── D/primary-keywords-en.md
│   ├── D/primary-keywords-zh.md
│   ├── D/primary-keywords-ms.md
│   ├── D/long-tail-keywords.md
│   └── D/competitor-analysis.md
│
├── /persona-idea/
│   ├── D/contractor-ahmad.md
│   ├── D/logistics-manager-lee.md
│   ├── D/warehouse-ops-william.md
│   ├── D/finance-director-sarah.md
│   └── D/procurement-officer-raj.md
│
└── /brief-draft/
    └── D/brief.md
```

---

## Employee Review Instructions
After draft generation, employee should:

### 1. Review Keyword Research (20 minutes)
Navigate to `/example-clients/[client-name]/keyword-research/D/`
- Open each MD file
- Validate keywords are relevant
- Check competitor analysis accuracy
- Decision:
  - ✅ Good → Rename D/ to A/
  - ❌ Bad → Rename D/ to F/
  - ✏️ Needs edit → Edit, then rename to A/

### 2. Review Personas (15 minutes)
Navigate to `/example-clients/[client-name]/persona-idea/D/`
- Open each persona profile
- Validate accuracy and relevance
- Ensure diversity of personas
- Decision:
  - ✅ Good → Rename D/ to A/
  - ❌ Bad → Rename D/ to F/
  - ✏️ Needs edit → Edit, then rename to A/

### 3. Review Brief (10 minutes)
Navigate to `/example-clients/[client-name]/brief-draft/D/`
- Open brief.md
- Validate strategy makes sense
- Check content calendar is realistic
- Verify brand voice guidelines
- Decision:
  - ✅ Good → Rename D/ to A/
  - ❌ Bad → Rename D/ to F/
  - ✏️ Needs edit → Edit, then rename to A/

---

## Output Summary
After execution:

```
✅ CLIENT ONBOARDING DRAFTS GENERATED

Client: Apex Machinery Sdn Bhd
Industry: Construction Equipment Rental

Generated files:
📁 Keyword Research (5 files)
   - Primary keywords: EN, ZH, MS
   - Long-tail opportunities
   - Competitor analysis

📁 Persona Ideas (5 files)
   - contractor-ahmad
   - logistics-manager-lee
   - warehouse-ops-william
   - finance-director-sarah
   - procurement-officer-raj

📁 Client Brief (1 file)
   - Comprehensive SEO strategy
   - Content calendar
   - Brand guidelines

Next steps:
1. Employee reviews all D/ files (45 minutes)
2. Employee approves (rename D/ to A/) or rejects (D/ to F/)
3. Employee runs: /finalize-client [client-name]
4. System converts A/ files to production config

Total execution time: 5 minutes
```

---

## Execution Timing
- Questionnaire parsing: 30 seconds
- Keyword research (3 languages): 2 minutes
- Persona generation (5 personas): 1.5 minutes
- Brief compilation: 1 minute
- **Total: ~5 minutes**

## Agent Usage
This skill is executed by: **Client Onboarding Agent**
Triggered by command: `/onboard-client [client-name]`

**Usage example:**
```
/onboard-client apex-machinery
/onboard-client ing-heng-credit
/onboard-client water-tanker-supplies
```

## Related Skills
- `keyword-research.md` - Industry keyword analysis
- `persona-generation.md` - Buyer persona creation
- `brief-template.md` - Strategy document structure

## Next Step
After employee approval (D/ → A/), proceed to:
- **Phase 2:** `client-finalization.md` skill
- Triggered by: `/finalize-client [client-name]`

## Success Criteria
✅ All draft folders created
✅ Keyword research completed for all languages
✅ 5-8 personas generated
✅ Comprehensive brief compiled
✅ All files saved with D/ prefix
✅ Clear review instructions provided
✅ No auto-publication (everything is draft)
