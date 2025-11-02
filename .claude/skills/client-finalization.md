# Client Finalization Skill

## Purpose
Convert approved drafts (A/ files) from onboarding to production configuration and prepare for daily content workflow.

## Client Parameter
**IMPORTANT:** When invoking this skill, pass the client name as a parameter:
- Used in folder paths as: `example-clients/[client-name]/`
- Must match the client name from Phase 1 (client-onboarding.md)
- Replace `[client-name]` with actual client identifier (e.g., "apex-machinery", "ing-heng-credit")

## Phase
**Phase 2:** Production Setup (THIS SKILL)
- Input: A/ approved files from Phase 1
- Output: Production JSON configs, ready for content generation

## Prerequisites
- Phase 1 completed (`client-onboarding.md`)
- Client name parameter ready (used throughout finalization)
- Employee has reviewed and approved (D/ → A/):
  - Keyword research files
  - Persona files
  - Brief file

## Input Files

### Required Approved Files
```
/example-clients/[client-name]/
├── /keyword-research/A/
│   ├── primary-keywords-en.md
│   ├── primary-keywords-zh.md
│   ├── primary-keywords-ms.md
│   ├── long-tail-keywords.md
│   └── competitor-analysis.md
│
├── /persona-idea/A/
│   ├── [persona-1].md
│   ├── [persona-2].md
│   ├── [persona-3].md
│   └── ... (5-8 personas)
│
└── /brief-draft/A/
    └── brief.md
```

**Example structure (for "apex-machinery" client):**
```
/example-clients/apex-machinery/
├── /keyword-research/A/
│   ├── primary-keywords-en.md
│   ├── primary-keywords-zh.md
│   ├── primary-keywords-ms.md
│   ├── long-tail-keywords.md
│   └── competitor-analysis.md
│
├── /persona-idea/A/
│   ├── contractor-ahmad.md
│   ├── logistics-manager-lee.md
│   ├── warehouse-ops-william.md
│   ├── finance-director-sarah.md
│   └── procurement-officer-raj.md
│
└── /brief-draft/A/
    └── brief.md
```

---

## Workflow Steps

### Step 1: Validate Approved Files

Check that all required A/ files exist:
- Minimum 3 keyword files (one per language)
- Minimum 3 personas
- 1 brief file

**If missing:**
```
Error: Cannot finalize client - missing approved files

Required:
✅ brief-draft/A/brief.md
✅ keyword-research/A/*.md (at least 3 files)
❌ persona-idea/A/*.md (found 2, need at least 3)

Please ensure employee has approved all draft files.
```

**If valid:**
```
✅ All required approved files found
Proceeding with finalization...
```

---

### Step 2: Convert Keyword Research to JSON

#### 2.1 Compile All Keyword Data
Read all A/*.md keyword files and extract:
- Primary keywords per language
- Secondary keywords
- Long-tail opportunities
- Search volume estimates
- Difficulty ratings
- Competitor keywords

#### 2.2 Generate keyword-strategy.json
```json
{
  "client": "apex-machinery",
  "created": "2025-11-01",
  "last_updated": "2025-11-01",

  "primary_keywords": {
    "en": [
      {
        "keyword": "equipment financing Malaysia",
        "search_volume": "1000-2000/month",
        "difficulty": "medium",
        "search_intent": "commercial",
        "priority": 1
      },
      {
        "keyword": "forklift leasing Selangor",
        "search_volume": "500-1000/month",
        "difficulty": "low",
        "search_intent": "commercial",
        "priority": 2
      }
    ],
    "zh": [
      {
        "keyword": "设备融资马来西亚",
        "search_volume": "500-1000/month",
        "difficulty": "low",
        "search_intent": "commercial",
        "priority": 1
      }
    ],
    "ms": [
      {
        "keyword": "pembiayaan jentera Malaysia",
        "search_volume": "500-1000/month",
        "difficulty": "low",
        "search_intent": "commercial",
        "priority": 1
      }
    ]
  },

  "long_tail_keywords": [
    "how to finance construction equipment in Malaysia",
    "bad credit equipment financing options",
    "forklift rental vs purchase cost comparison"
  ],

  "content_calendar": {
    "topics": [
      {
        "title": "Equipment Financing Guide 2025",
        "keyword_en": "equipment financing Malaysia",
        "keyword_zh": "设备融资马来西亚",
        "keyword_ms": "pembiayaan jentera Malaysia",
        "target_persona": "contractor-ahmad",
        "buyer_stage": "awareness",
        "priority": "high",
        "status": "pending"
      },
      {
        "title": "Forklift Leasing Benefits",
        "keyword_en": "forklift leasing Selangor",
        "keyword_zh": "叉车租赁雪兰莪",
        "keyword_ms": "pajakan forklift Selangor",
        "target_persona": "logistics-manager-lee",
        "buyer_stage": "consideration",
        "priority": "high",
        "status": "pending"
      }
    ]
  },

  "competitors": [
    {
      "name": "ABC Equipment",
      "url": "https://abc.com",
      "top_keywords": ["equipment rental", "machinery leasing"],
      "content_gaps": ["No multilingual content", "Limited SEO blog"]
    }
  ]
}
```

**Save to:**
```
/example-clients/[client-name]/keyword-strategy.json
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/keyword-strategy.json
```

---

### Step 3: Convert Personas to JSON

#### 3.1 Parse Each Persona Markdown File
For each A/*.md persona file, extract:
- Name and demographics
- Pain points
- Goals
- Language preference
- Buying behavior
- Content preferences
- Buyer journey stages

#### 3.2 Generate JSON Per Persona
```json
{
  "id": "contractor-ahmad",
  "name": "Ahmad bin Hassan",
  "archetype": "construction_contractor",

  "demographics": {
    "age": 42,
    "role": "Business Owner",
    "company": "Hassan Construction Sdn Bhd",
    "location": "Klang, Selangor",
    "language_preference": "ms"
  },

  "psychographics": {
    "pain_points": [
      "Cash flow constraints from delayed project payments",
      "Cannot afford RM 500K for new excavator",
      "Maintenance costs eating into profits"
    ],
    "goals": [
      "Expand equipment fleet to take larger projects",
      "Win more government contracts",
      "Maintain positive cash flow"
    ],
    "values": ["Reliability", "Flexibility", "Trust"]
  },

  "buying_behavior": {
    "research_methods": ["Google", "Facebook", "Word-of-mouth"],
    "trusted_sources": ["Contractor recommendations", "CIDB-approved vendors"],
    "decision_process": "Needs wife approval, consults accountant",
    "timeline": "Urgent when bidding (1-2 weeks)",
    "budget": "RM 5K-8K monthly, not RM 500K upfront",
    "objections": [
      "What if equipment breaks down?",
      "Can I return if project cancelled?",
      "Is this Syariah-compliant?"
    ]
  },

  "content_preferences": {
    "format": ["Short articles 1000-1500 words", "Case studies"],
    "topics": ["Equipment financing benefits", "How-to guides", "Government contracts"],
    "language": "ms",
    "consumption_habit": "Mobile-first, lunch breaks"
  },

  "buyer_journey": {
    "awareness": [
      "Cara mendapatkan jentera pembinaan tanpa modal besar",
      "Perbezaan antara beli vs sewa jentera"
    ],
    "consideration": [
      "Perbandingan pembiayaan jentera vs pinjaman bank",
      "Cara kira ROI untuk jentera baharu"
    ],
    "decision": [
      "Cara mohon pembiayaan jentera dalam 3 langkah",
      "Testimoni kontraktor yang gunakan pembiayaan"
    ]
  },

  "marketing_channels": {
    "primary": "Google Search (Bahasa Malaysia keywords)",
    "secondary": "Facebook groups (kontraktor Malaysia)",
    "tertiary": "WhatsApp broadcasts, word-of-mouth"
  }
}
```

**Save to:**
```
/example-clients/[client-name]/personas/contractor-ahmad.json
/example-clients/[client-name]/personas/logistics-manager-lee.json
/example-clients/[client-name]/personas/warehouse-ops-william.json
... (one file per persona)
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/personas/contractor-ahmad.json
/example-clients/apex-machinery/personas/logistics-manager-lee.json
/example-clients/apex-machinery/personas/warehouse-ops-william.json
... (one file per persona)
```

---

### Step 4: Convert Brief to JSON Configuration

#### 4.1 Extract Brief Data
Parse brief.md and extract:
- Company information
- Content strategy
- Publishing frequency
- Language distribution
- Brand voice guidelines
- Quality standards
- KPIs

#### 4.2 Generate brief.json
```json
{
  "client_id": "apex-machinery",
  "client_name": "Apex Machinery Sdn Bhd",
  "industry": "construction_equipment_rental",
  "created": "2025-11-01",

  "company": {
    "full_name": "Apex Machinery Sdn Bhd",
    "business_model": "B2B",
    "location": "Klang, Selangor",
    "website": "https://apex-machinery.com",
    "contact": {
      "whatsapp": "+60175700889",
      "phone": "03-3324 8899",
      "email": "enquiry@apex-machinery.com"
    }
  },

  "content_strategy": {
    "publishing_frequency": {
      "posts_per_week": 3,
      "en_per_week": 1,
      "zh_per_week": 1,
      "ms_per_week": 1
    },
    "language_distribution": {
      "en": 40,
      "zh": 30,
      "ms": 30
    },
    "topic_categories": [
      {
        "name": "Equipment Financing Basics",
        "frequency": 30,
        "target_personas": ["contractor-ahmad", "logistics-manager-lee"]
      },
      {
        "name": "Industry Guides & How-Tos",
        "frequency": 40,
        "target_personas": ["contractor-ahmad", "warehouse-ops-william"]
      },
      {
        "name": "Case Studies & Success Stories",
        "frequency": 20,
        "target_personas": ["all"]
      },
      {
        "name": "Industry News & Trends",
        "frequency": 10,
        "target_personas": ["logistics-manager-lee"]
      }
    ]
  },

  "brand_voice": {
    "overall_tone": "Professional yet approachable",
    "language_specific": {
      "en": "B2B professional, ROI-focused, data-driven",
      "zh": "Relationship-oriented, trust-building, community-focused",
      "ms": "Respectful, service-oriented, culturally-aware"
    },
    "dos": [
      "Use data and statistics to back claims",
      "Include real customer examples",
      "Provide actionable advice"
    ],
    "donts": [
      "Don't make unrealistic promises",
      "Don't mention competitors negatively",
      "Don't use overly technical jargon"
    ],
    "topics_to_avoid": []
  },

  "quality_standards": {
    "word_count": {"min": 1500, "max": 2500},
    "readability_flesch": {"min": 60},
    "structure": {
      "h1_count": 1,
      "h2_count": {"min": 4, "max": 6}
    },
    "seo": {
      "keyword_density": {"min": 1.0, "max": 2.0},
      "internal_links": {"min": 3, "max": 5},
      "external_links": {"min": 2, "max": 3}
    },
    "faq": {
      "min_questions": 5,
      "max_questions": 7
    }
  },

  "kpis": {
    "traffic_goals": {
      "month_1_3": 1000,
      "month_4_6": 3000,
      "month_7_12": 10000
    },
    "lead_goals": {
      "monthly_inquiries": 20,
      "conversion_rate": 5.0
    },
    "seo_goals": {
      "primary_keywords_top10": {"months": 6},
      "longtail_keywords_top5": {"months": 3}
    }
  },

  "technical_setup": {
    "platform": "astro",
    "hosting": "vercel",
    "domain": "apex-machinery.com",
    "i18n": true,
    "languages": ["en", "zh", "ms"],
    "default_language": "en"
  },

  "status": "active",
  "last_content_generated": null,
  "total_posts_published": 0
}
```

**Save to:**
```
/example-clients/[client-name]/brief.json
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/brief.json
```

---

### Step 5: Invoke Website Generation Skill

**Load skill:** `website-generation.md`

**Execute:** Generate complete Astro or Next.js website
- Multi-language routing
- Blog collection structure
- SEO configuration
- Analytics setup
- Deploy to Vercel

**Output:**
```
/example-clients/[client-name]/website/
├── src/
│   ├── content/
│   │   └── posts/
│   │       ├── en/
│   │       ├── zh/
│   │       └── ms/
│   ├── pages/
│   │   ├── en/
│   │   ├── zh/
│   │   └── ms/
│   └── components/
├── public/
├── astro.config.mjs
├── package.json
└── vercel.json
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/website/
├── src/
│   ├── content/
│   │   └── posts/
│   │       ├── en/
│   │       ├── zh/
│   │       └── ms/
│   ├── pages/
│   │   ├── en/
│   │   ├── zh/
│   │   └── ms/
│   └── components/
├── public/
├── astro.config.mjs
├── package.json
└── vercel.json
```

---

### Step 6: Invoke Daily Content Skill for First Batch

**Load skill:** `daily-seo-content.md`

**Execute:** Generate 10 initial blog posts
- Use newly created brief.json
- Use keyword-strategy.json for topics
- Use personas/*.json for targeting
- Generate mix of languages (4 EN, 3 ZH, 3 MS)

**Output:**
```
/example-clients/[client-name]/drafts/
├── D/2025-11-01-equipment-financing-guide-en.md
├── D/2025-11-01-equipment-financing-guide-zh.md
├── D/2025-11-01-equipment-financing-guide-ms.md
├── D/2025-11-02-forklift-leasing-benefits-en.md
├── D/2025-11-02-forklift-leasing-benefits-zh.md
... (10 total draft posts)
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/drafts/
├── D/2025-11-01-equipment-financing-guide-en.md
├── D/2025-11-01-equipment-financing-guide-zh.md
├── D/2025-11-01-equipment-financing-guide-ms.md
├── D/2025-11-02-forklift-leasing-benefits-en.md
├── D/2025-11-02-forklift-leasing-benefits-zh.md
... (10 total draft posts)
```

---

### Step 7: Archive Draft Files

Move all approved drafts to archive:

```bash
Source: /example-clients/[client-name]/keyword-research/A/*.md
Destination: /example-clients/[client-name]/archive/onboarding/keyword-research/*.md

Source: /example-clients/[client-name]/persona-idea/A/*.md
Destination: /example-clients/[client-name]/archive/onboarding/persona-idea/*.md

Source: /example-clients/[client-name]/brief-draft/A/brief.md
Destination: /example-clients/[client-name]/archive/onboarding/brief.md
```

**Example (for "apex-machinery" client):**
```bash
Source: /example-clients/apex-machinery/keyword-research/A/*.md
Destination: /example-clients/apex-machinery/archive/onboarding/keyword-research/*.md

Source: /example-clients/apex-machinery/persona-idea/A/*.md
Destination: /example-clients/apex-machinery/archive/onboarding/persona-idea/*.md

Source: /example-clients/apex-machinery/brief-draft/A/brief.md
Destination: /example-clients/apex-machinery/archive/onboarding/brief.md
```

Keep folders clean - only active D/ drafts remain.

---

### Step 8: Update Client Status

Mark client as "active" and ready for daily workflow.

Create status file:
```json
{
  "client_id": "apex-machinery",
  "status": "active",
  "onboarding_completed": "2025-11-01",
  "website_deployed": true,
  "website_url": "https://apex-machinery.vercel.app",
  "custom_domain": "https://apex-machinery.com",
  "first_content_generated": "2025-11-01",
  "total_personas": 5,
  "total_keywords": 47,
  "primary_languages": ["en", "zh", "ms"],
  "publishing_frequency": "3 posts/week",
  "next_content_generation": "2025-11-02"
}
```

**Save to:**
```
/example-clients/[client-name]/status.json
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/status.json
```

---

## Final Folder Structure

After finalization complete:

```
/example-clients/[client-name]/
├── brief.json                      ← PRODUCTION config
├── keyword-strategy.json           ← PRODUCTION keywords
├── status.json                     ← Client status
│
├── /personas/                      ← PRODUCTION personas
│   ├── contractor-ahmad.json
│   ├── logistics-manager-lee.json
│   ├── warehouse-ops-william.json
│   └── ... (all personas)
│
├── /website/                       ← LIVE site
│   ├── src/
│   ├── public/
│   ├── astro.config.mjs
│   └── vercel.json
│
├── /drafts/                        ← First content batch
│   ├── D/2025-11-01-post-1-en.md
│   ├── D/2025-11-01-post-1-zh.md
│   └── ... (10 drafts ready for review)
│
├── /archive/                       ← Onboarding history
│   └── /onboarding/
│       ├── /keyword-research/
│       ├── /persona-idea/
│       └── brief.md
│
└── /published/                     ← (created later by publishing workflow)
```

**Example structure (for "apex-machinery" client):**
```
/example-clients/apex-machinery/
├── brief.json                      ← PRODUCTION config
├── keyword-strategy.json           ← PRODUCTION keywords
├── status.json                     ← Client status
│
├── /personas/                      ← PRODUCTION personas
│   ├── contractor-ahmad.json
│   ├── logistics-manager-lee.json
│   ├── warehouse-ops-william.json
│   ├── finance-director-sarah.json
│   └── procurement-officer-raj.json
│
├── /website/                       ← LIVE site
│   ├── src/
│   ├── public/
│   ├── astro.config.mjs
│   └── vercel.json
│
├── /drafts/                        ← First content batch
│   ├── D/2025-11-01-post-1-en.md
│   ├── D/2025-11-01-post-1-zh.md
│   └── ... (10 drafts ready for review)
│
├── /archive/                       ← Onboarding history
│   └── /onboarding/
│       ├── /keyword-research/
│       ├── /persona-idea/
│       └── brief.md
│
└── /published/                     ← (created later by publishing workflow)
```

---

## Output Summary

```
✅ CLIENT FINALIZATION COMPLETE

Client: Apex Machinery Sdn Bhd
Status: ACTIVE & READY

Production files created:
📄 brief.json - Client configuration
📄 keyword-strategy.json - 47 keywords across 3 languages
📁 /personas/ - 5 buyer personas
📁 /website/ - Complete Astro site deployed

Website deployed:
🌐 https://apex-machinery.vercel.app
🌐 https://apex-machinery.com (custom domain)

First content batch:
📝 10 draft blog posts generated
   - 4 English posts
   - 3 Mandarin posts
   - 3 Malay posts
   → Saved to /drafts/D/ for employee review

Next steps:
1. Employee reviews 10 draft posts
2. Approves (D/ → A/) or rejects (D/ → F/)
3. Runs: /publish-approved
4. Content goes LIVE!
5. Daily workflow begins: /generate-daily-blogs

Client is now ready for daily content generation! 🚀

Execution time: 10 minutes
```

---

## Execution Timing
- Validation: 10 seconds
- JSON conversion: 2 minutes
- Website generation: 5 minutes
- First content batch: 3 minutes
- **Total: ~10 minutes**

## Agent Usage
This skill is executed by: **Client Setup Agent**
Triggered by command: `/finalize-client [client-name]`

**Usage example:**
```
/finalize-client apex-machinery
/finalize-client ing-heng-credit
/finalize-client water-tanker-supplies
```

## Related Skills
- `website-generation.md` - Scaffold client website
- `daily-seo-content.md` - Generate first content batch

## Success Criteria
✅ All A/ files converted to production JSON
✅ Website generated and deployed
✅ First 10 blog posts created as drafts
✅ Client marked as "active"
✅ Ready for daily content workflow
✅ Archive created for onboarding files
✅ No errors in conversion or deployment
