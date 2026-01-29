# Production Workflow Guide: 15 Posts/Day × 3 Languages

> **Purpose:** Step-by-step workflow for consistent daily content production
> **Team:** 1 Strategist + 2-3 Editors + AI Tools
> **Output:** 45 posts daily (15 EN + 15 MS + 15 ZH)

---

## Daily Production Schedule

```
┌─────────────────────────────────────────────────────────────┐
│              DAILY PRODUCTION TIMELINE                        │
├─────────────────────────────────────────────────────────────┤
│  06:00-07:00   │ Topic Selection & Brief Creation           │
│  07:00-09:00   │ English Draft Generation (AI-Assisted)     │
│  09:00-10:00   │ English Review & Enhancement              │
│  10:00-12:00   │ Malay Translation & Localization           │
│  12:00-13:00   │ Chinese Translation & Localization         │
│  13:00-14:00   │ Quality Review & SEO Check                 │
│  14:00-15:00   │ Scheduling & Publishing                    │
│  15:00-16:00   │ Analytics Review & Tomorrow's Planning      │
│  16:00-17:00   │ Buffer Time & Contingency                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Topic Selection (06:00-07:00)

### Daily Topic Mix Formula

Every day select:
```
5 Equipment-Specific Posts:
├── 1x Excavator focused
├── 1x Lorry/Truck focused
├── 1x Forklift focused
├── 1x Crane focused
└── 1x Niche Equipment (generator, compressor, CNC, etc.)

3 Use Case Posts:
├── 1x Construction focused
├── 1x Logistics/Transport focused
└── 1x Manufacturing/Industry focused

3 Pain Point Posts:
├── 1x Bank Rejection/Bad Credit
├── 1x Urgent/Emergency Need
└── 1x Cash Flow/Growth Constraint

2 Comparison Posts:
├── 1x Buy vs Lease / New vs Used
└── 1x Brand vs Brand / Financing Type

1 Educational Post:
└── 1x How-to / Requirements / Documentation

1 Success Story:
└── 1x Case study / testimonial / ROI
```

### Topic Selection Process

```javascript
// Topic Selection Matrix
const dailyTopics = {
  // Equipment Focus (rotate daily)
  equipment: ['excavator', 'lorry', 'forklift', 'crane', 'niche'],

  // Use Case (rotate based on monthly theme)
  useCase: ['construction', 'logistics', 'manufacturing', 'agriculture'],

  // Pain Point (mix for coverage)
  painPoint: ['bad-credit', 'urgent', 'cash-flow', 'bank-rejected'],

  // Comparison (alternating)
  comparison: ['buy-vs-lease', 'new-vs-used', 'brand-comparison', 'financing-type'],

  // Special Focus (monthly themes)
  special: getSpecialFocus(month, week), // e.g., "CNY-prep" for Jan

  // Location (rotate through states)
  location: ['klang-valley', 'selangor', 'penang', 'johor', 'port-klang']
};

function generateDailyTopic(date, equipment, angle, location) {
  return {
    equipment: equipment,
    angle: angle,
    location: location,
    date: date,
    urgency: getUrgency(angle),
    keywords: generateKeywords(equipment, angle, location)
  };
}
```

### Brief Creation Template

```markdown
# CONTENT BRIEF: [YYYY-MM-DD] - [Equipment] - [Angle]

## Topic
[Equipment] + [Angle] + [Location Focus]

## Template Type
[ ] Equipment-Specific (Template 1)
[ ] Use Case (Template 2)
[ ] Pain Point (Template 3)
[ ] Comparison (Template 4)
[ ] Educational (Template 5)
[ ] Success Story (Template 6)

## Target Keywords
Primary: [keyword-1], [keyword-2], [keyword-3]
Secondary: [keyword-4], [keyword-5]
Long-tail: [long-tail-keyword]

## Target Audience
- [Segment 1]: [specific need]
- [Segment 2]: [specific need]

## Key Message
[Core value proposition in 1 sentence]

## Special Instructions
- [Specific requirement 1]
- [Specific requirement 2]

## References
- [Link to reference 1]
- [Link to reference 2]
```

---

## Phase 2: English Content Generation (07:00-09:00)

### AI-Assisted Workflow

```javascript
// Content Generation Workflow
const contentGen = {
  step1: {
    action: "Select Template",
    tool: "Template from 04-content-templates/",
    input: "Brief → Template Type"
  },

  step2: {
    action: "Generate Outline",
    tool: "AI (ChatGPT/Claude)",
    prompt: `Generate outline for ${brief.topic}:\n${brief.specialInstructions}\n\nInclude:\n- Hook (3-second grabber)\n- Problem agitation\n- Solution preview\n- Main content sections\n- Ing Heng solution\n- Social proof\n- FAQ suggestions`
  },

  step3: {
    action: "Generate Content",
    tool: "AI (ChatGPT/Claude/Jasper)",
    prompt: `Write 1,500-word article:\nTemplate: ${template}\nOutline: ${outline}\n\nRequirements:\n- Real numbers (rates, amounts, timeframes)\n- Malaysian context (RM, locations)\n- Specific equipment examples\n- Conversational, professional tone\n- Include Ing Heng details: 40+ years, 4,000+ companies, KPKT licensed\n- CTA: WhatsApp + Calculator links\n\nKeywords to include: ${brief.keywords}`
  },

  step4: {
    action: "SEO Optimization",
    tool: "Human Editor",
    tasks: [
      "Add LSI keywords naturally",
      "Optimize heading structure (H1, H2, H3)",
      "Include internal links to related posts",
      "Add meta description (under 160 chars)",
      "Review keyword density (1-2%)",
      "Add schema markup if needed"
    ]
  },

  step5: {
    action: "Final Polish",
    tool: "Human Editor",
    checks: [
      "Facts accuracy (rates, terms)",
      "Malaysian context check",
      "Tone and consistency",
      "Call-to-action clarity",
      "Formatting and readability"
    ]
  }
};
```

### Quality Checklist for English Posts

```markdown
## Pre-Publication Checklist

### Title & Meta
- [ ] Title follows format: [Equipment] + [Benefit] + [Urgency] + [Year]
- [ ] Title under 60 characters
- [ ] Meta description under 160 characters
- [ ] Includes primary keyword
- [ ] Clear value proposition

### Content Structure
- [ ] H1: Main title with hook
- [ ] H2: Problem agitation
- [ ] H3: Solution sections
- [ ] H2: Ing Heng solution
- [ ] H2: Social proof/case study
- [ ] H2: FAQ section
- [ ] Conclusion with CTA

### Content Quality
- [ ] Real numbers (RM amounts, % rates, days)
- [ ] Malaysian context (states, cities, regulations)
- [ ] Specific equipment examples (brands, models)
- [ ] Conversational but professional tone
- [ ] No generic fluff

### SEO Elements
- [ ] Primary keyword in title, first paragraph, H2s
- [ ] Keyword density 1-2%
- [ ] LSI keywords included naturally
- [ ] Internal links to related posts (3-5)
- [ ] External links to authority sources (1-2)
- [ ] Image with alt text containing keyword

### CTAs
- [ ] WhatsApp link prominent
- [ ] Calculator link included
- [ ] Phone number visible
- [ ] Email address included

### Technical
- [ ] Word count: 1,500-2,000 words
- [ ] Reading time: 7-10 minutes
- [ ] Paragraphs under 3 sentences
- [ ] Bullet points for readability
- [ ] Short sentences (under 20 words)
```

---

## Phase 3: Malay Translation (10:00-12:00)

### Malay Localization Process

```javascript
const malayLocalization = {
  step1: {
    action: "Translate Content",
    tool: "DeepL API + Human Editor",
    approach: "Meaning-based translation, not word-for-word"
  },

  step2: {
    action: "Cultural Adaptation",
    adaptations: [
      "Add Malay terms: alah beli, sewa, pinjaman",
      "Use RM (Ringgit Malaysia) throughout",
      "Local examples: Semenanjung, not 'Peninsular Malaysia'",
      "Adjust tone: More friendly, less formal than English",
      "Add local context: KWSP, not EPF",
      "Include Malaysian locations: Klang, Shah Alam, etc."
    ]
  },

  step3: {
    action: "SEO for Malay",
    keywords: [
      "pinjaman excavator",
      "pajakan lori",
      "pembiayaan forklif",
      "kredit buruk",
      "kredit kilang"
    ]
  }
};
```

### Malay Content Considerations

```markdown
## Malay Content Guidelines

### Language Style
- Use "Anda" (formal) or "Awak" (friendly) based on context
- Mix English terms where appropriate: "0% deposit", "fast approval"
- Include Malay translations in parentheses for key terms

### Common Malay Terms
```
English              → Malay
-----------------------------------------------
Hire Purchase      → Alah Beli
Operating Lease     → Sewa
Finance Lease       → Pajakan Pembiayaan
0% Deposit          → Tanpa Deposit
Bad Credit          → Kredit Buruk
Bank Rejected       → Ditolak Bank
Excavator           → Jentera Penggali
Forklift            → Pungkak Angkat
Prime Mover         → Kepala Traktor
Generator           → Janakuasa
```

### Cultural Adaptations
- Emphasize family/business balance
- Mention makan (meal) time considerations
- Include festive seasons (Hari Raya, CNY)
- Respect mien (face) in communication
- Family business orientation

### Example Headline Adaptation
```
English: "Excavator Financing 0% Deposit: Get Approved in 48 Hours"
Malay:  "Pembiayaan Jentera Penggali Tanpa Deposit: Kelulusan 48 Jam"
```

---

## Phase 4: Chinese Translation (12:00-13:00)

### Chinese Localization Process

```javascript
const chineseLocalization = {
  step1: {
    action: "Translate Content",
    tool: "DeepL API + Human Editor",
    approach: "Simplified Chinese for Malaysian readers"
  },

  step2: {
    action: "Cultural Adaptation",
    adaptations: [
      "Use Simplified Chinese characters",
      "Include traditional terms in parentheses",
      "Use RM (Ringgit Malaysia)",
      "Maintain respectful, formal tone",
      "Add local context: 大马 (Da Ma) for Malaysia",
      "Emphasize trust and relationship (guanxi)",
      "Include family business orientation"
    ]
  },

  step3: {
    action: "SEO for Chinese",
    keywords: [
      "挖掘机贷款",
      "罗里融资",
      "叉车贷款",
      "烂信用",
      "银行拒"
    ]
  }
};
```

### Chinese Content Considerations

```markdown
## Chinese Content Guidelines

### Language Style
- Formal, respectful tone (尊称)
- Use "您" (formal you) throughout
- Maintain face (面子) in communication
- Emphasize relationship and trust

### Common Chinese Terms
```
English              → Chinese
-----------------------------------------------
Hire Purchase      → 分期付款
Operating Lease     → 营业租赁
Finance Lease       → 融资租赁
0% Deposit          → 零首付
Bad Credit          → 坏信用/信用不良
Bank Rejected       → 被银行拒绝
Excavator           → 挖掘机
Forklift            → 叉车
Prime Mover         → 拖车头
Generator           → 发电机
```

### Cultural Adaptations
- Emphasize harmony (和) in business
- Respect for hierarchy and authority
- Family business orientation
- Long-term relationship focus
- Face-saving communication
- Fortune/prosperity (福) symbolism

### Example Headline Adaptation
```
English: "Excavator Financing 0% Deposit: Get Approved in 48 Hours"
Chinese: "挖掘机融资零首付：48小时快速获批"
```

---

## Phase 5: Quality Review (13:00-14:00)

### Multi-Language Quality Check

```markdown
## Quality Review Checklist

### Content Accuracy
- [ ] All facts verified (rates, terms, conditions)
- [ ] Equipment specifications accurate
- [ ] Location references correct
- [ ] Contact information current
- [ ] Links functional

### Language Quality
#### English
- [ ] Grammar and spelling correct
- [ ] Tone professional and consistent
- [ ] Technical terms used correctly
- [ ] No awkward phrasing

#### Malay
- [ ] Translation accurate and natural
- [ ] Cultural references appropriate
- [ ] Malay terms used correctly
- [ ] Tone friendly and approachable

#### Chinese
- [ ] Translation accurate
- [ ] Cultural respect maintained
- [ ] Formal tone consistent
- [ ] Appropriate level of formality

### SEO Consistency
- [ ] Primary keywords in each language version
- [ ] Meta descriptions localized (not just translated)
- [ ] URLs appropriate for each language
- [ ] Internal links to correct language versions
- [ ] Schema markup for each language

### Cross-Language Consistency
- [ ] Core message consistent across all languages
- [ ] Numbers (rates, amounts) identical
- [ ] Equipment specs same across versions
- [ ] CTAs consistent (WhatsApp numbers, links)
- [ ] Publication dates synchronized
```

### Review Workflow

```javascript
const qualityReview = {
  reviewer: "Senior Editor",

  reviewLevels: {
    level1: {
      name: "Automated Check",
      tool: "SEO Tools + Grammar Checkers",
      items: [
        "Grammar/spelling check",
        "Keyword density check",
        "Meta description length",
        "Title tag optimization",
        "Internal link validation",
        "Image alt text check"
      ]
    },

    level2: {
      name: "Content Review",
      tool: "Human Editor",
      items: [
        "Facts accuracy verification",
        "Tone and voice check",
        "Cultural appropriateness",
        "Value proposition clarity",
        "CTA effectiveness",
        "Readability assessment"
      ]
    },

    level3: {
      name: "Final Approval",
      tool: "Content Strategist",
      items: [
        "Strategic alignment",
        "Brand voice consistency",
        "Business goal alignment",
        "Quality standard met",
        "Ready for publication"
      ]
    }
  }
};
```

---

## Phase 6: Publishing (14:00-15:00)

### Publishing Workflow

```javascript
const publishingWorkflow = {
  step1: {
    action: "Create File",
    tool: "Astro Markdown",
    format: "YYYY-MM-DD-[equipment]-[angle]-en.md"
  },

  step2: {
    action: "Add Frontmatter",
    frontmatter: {
      title: "Page title",
      description: "Meta description",
      publishDate: "YYYY-MM-DD",
      category: "Category",
      tags: ["Tags"],
      locale: "en",
      featured: false,
      readingTime: 7,
      keywords: ["keyword-1", "keyword-2"],
      ogImage: "/images/blog/[equipment].jpg"
    }
  },

  step3: {
    action: "Save to Content Collection",
    path: "src/content/blogs/en/[filename].md"
  },

  step4: {
    action: "Verify Build",
    tool: "Astro Dev Server",
    check: "No build errors, content loads correctly"
  },

  step5: {
    action: "Schedule Publishing",
    method: "Immediate or Scheduled",
    timezone: "Malaysia (GMT+8)"
  }
};
```

### File Naming Convention

```bash
# English
YYYY-MM-DD-[equipment]-[angle]-en.md

# Malay
YYYY-MM-DD-[equipment]-[angle]-ms.md

# Chinese
YYYY-MM-DD-[equipment]-[angle]-zh.md

# Examples
2026-01-01-excavator-financing-0-deposit-en.md
2026-01-01-excavator-financing-0-deposit-ms.md
2026-01-01-excavator-financing-0-deposit-zh.md
```

---

## Phase 7: Analytics & Planning (15:00-16:00)

### Daily Analytics Review

```javascript
const dailyAnalytics = {
  metrics: {
    traffic: {
      "Page views": "Total daily page views",
      "Unique visitors": "Daily unique visitors",
      "Bounce rate": "Single-page sessions",
      "Time on page": "Average reading time"
    },

    engagement: {
      "WhatsApp clicks": "CTA conversions",
      "Calculator uses": "Tool engagement",
      "Social shares": "Content distribution",
      "Comments": "User feedback"
    },

    seo: {
      "Google rankings": "Keyword positions",
      "Organic traffic": "Search traffic",
      "Backlinks": "Inbound links",
      "Indexed pages": "Search coverage"
    },

    conversions: {
      "Leads": "Form submissions",
      "Applications": "Loan applications",
      "Approvals": "Financed deals",
      "Revenue": "RM generated"
    }
  },

  actions: {
    improve: "What to optimize tomorrow",
    maintain: "What's working well",
    test: "What to experiment with"
  }
};
```

### Tomorrow's Planning

```javascript
const tomorrowPlan = {
  basedOn: {
    analytics: "Today's top performers",
    trends: "Seasonal considerations",
    feedback: "User comments and questions",
    gaps: "Content gaps identified"
  },

  adjust: {
    equipment: "Rotate to underrepresented categories",
    angles: "Emphasize high-converting topics",
    locations: "Focus on high-traffic regions",
    painPoints: "Address emerging customer concerns"
  },

  prepare: {
    briefs: "Create 15 content briefs",
    research: "Gather data for featured posts",
    templates: "Update templates if needed",
    schedule: "Plan posting times for engagement"
  }
};
```

---

## Weekly Rhythm

### Monday
- Focus: Equipment-heavy content (excavators, lorries, cranes)
- Review: Previous week's top performers
- Plan: Weekly content themes

### Tuesday
- Focus: Industry-specific content (construction, logistics)
- Review: Monday's performance
- Plan: Wednesday's topics

### Wednesday
- Focus: Pain point content (bad credit, urgent needs)
- Review: Tuesday's performance
- Plan: Thursday's topics

### Thursday
- Focus: Comparison content (buy vs lease, brands)
- Review: Wednesday's performance
- Plan: Friday's topics

### Friday
- Focus: Educational content (how-to, guides)
- Review: Thursday's performance
- Plan: Weekend topics

### Weekend
- Focus: Success stories, social proof
- Review: Week's overall performance
- Plan: Next week's themes

---

## Monthly Review Process

### End-of-Month Tasks

```markdown
## Monthly Review Checklist

### Content Performance
- [ ] Top 10 performing posts
- [ ] Bottom 10 performing posts
- [ ] Traffic by equipment category
- [ ] Traffic by content type
- [ ] Conversion by topic

### SEO Review
- [ ] Keyword ranking improvements
- [ ] New keyword opportunities
- [ ] Competitor content analysis
- [ ] Backlink acquisition results
- [ ] Technical SEO issues

### Team Review
- [ ] Production efficiency assessment
- [ ] Quality score trends
- [ ] Tool performance evaluation
- [ ] Team capacity planning
- [ ] Training needs identified

### Planning Next Month
- [ ] Update monthly theme
- [ ] Adjust content mix based on performance
- [ ] Seasonal considerations
- [ ] Industry trends to address
- [ ] New equipment types to cover

### Reporting
- [ ] Traffic summary
- [ ] Lead generation report
- [ ] Content production metrics
- [ ] ROI calculation
- [ ] Recommendations for improvement
```

---

## Tools & Resources

### Required Tools

```markdown
### Content Creation
- ChatGPT/Claude (AI writing assistant)
- Grammarly (grammar checking)
- Hemingway Editor (readability)
- DeepL API (translation)
- Google Docs (collaboration)

### SEO Tools
- SEMrush/Ahrefs (keyword research)
- Google Search Console (performance)
- Google Analytics (traffic)
- Google Trends (trending topics)

### Project Management
- Notion/Airtable (content calendar)
- Trello/Asana (task management)
- Slack (team communication)

### Translation
- DeepL Pro API
- Google Translate API
- Local human editors (MS/ZH)

### CMS
- Astro (content management)
- GitHub (version control)
- Vercel (hosting)
```

### Team Roles & Responsibilities

```markdown
## Team Structure

### Content Strategist (1 person)
Responsibilities:
- Topic selection and brief creation
- Content calendar management
- SEO strategy and keyword research
- Quality standards definition
- Performance analysis and optimization
- Team coordination and training

Daily Tasks:
06:00-07:00: Create 15 content briefs
15:00-16:00: Review analytics and plan tomorrow
Weekly: Content performance review, strategy adjustment

### Content Editors (2-3 persons)
Responsibilities:
- AI draft generation and oversight
- English content review and enhancement
- Malay translation and localization
- Chinese translation and localization
- SEO optimization
- Quality control

Daily Tasks:
07:00-10:00: Generate and review English content
10:00-13:00: Translate to Malay and Chinese
13:00-14:00: Final quality review

### Optional: AI Specialist (1 person)
Responsibilities:
- AI tool management and optimization
- Prompt engineering for better outputs
- Template maintenance and improvement
- Automation script development
```

---

## Troubleshooting Guide

### Common Issues & Solutions

```markdown
## Issue: Running Behind Schedule

**Symptoms:**
- Can't complete 15 posts by 16:00
- Translation backlog building
- Quality slipping due to rush

**Solutions:**
1. Prioritize: Equipment posts (5) > Use cases (3) > Pain points (3)
2. Use more AI templates for educational/comparison posts
3. Batch translate similar content types
4. Have buffer posts ready from slower days
5. Extend publishing window if needed

## Issue: Quality Inconsistency

**Symptoms:**
- Varying quality across posts
- Inconsistent voice/brand
- SEO elements missing

**Solutions:**
1. Use templates consistently
2. Create style guide for common phrases
3. Implement mandatory checklist
4. Sample review daily
5. Weekly quality training

## Issue: Language Quality Problems

**Symptoms:**
- Translation sounds robotic
- Cultural references off
- Local idioms missing

**Solutions:**
1. Hire native speakers for MS/ZH review
2. Create localization guides
3. Build phrase banks for common terms
4. Regular cultural sensitivity training
5. A/B test translations

## Issue: Low Engagement

**Symptoms:**
- High bounce rates
- Low time on page
- Few WhatsApp clicks

**Solutions:**
1. Review hook strength
2. Add more specific numbers/benefits
3. Improve content scannability
4. Test different CTA placements
5. Add more visual elements
```

---

## Success Metrics

### KPIs (Key Performance Indicators)

```markdown
## Production Metrics
- Daily posts published: 45 (15 EN + 15 MS + 15 ZH)
- On-time publication rate: >95%
- Quality score: >8/10
- Word count average: 1,500+ words

## Traffic Metrics
- Monthly visitors: Target [Number]
- Bounce rate: <60%
- Average time on page: >3 minutes
- Pages per session: >2

## Engagement Metrics
- WhatsApp click rate: >3%
- Calculator usage: >5%
- Social shares: >2%
- Comment/feedback: >1%

## Conversion Metrics
- Lead form submissions: [Number]
- Loan applications: [Number]
- Approved deals: [Number]
- Revenue generated: RM[Amount]

## SEO Metrics
- Keywords in top 10: [Number]
- Organic traffic growth: [%] monthly
- Backlinks acquired: [Number]
- Indexed pages: [Number]
```

---

*Next:* See `07-keyword-databases/` for keyword research
