# Ing Heng Credit Website - AI Assistant Rules

## Project Overview

Multi-language equipment financing website with 3 separate domain deployments:
- **English:** www.inghengcredit.com (PRIMARY)
- **Malay:** www.kreditloan.my
- **Chinese:** www.inghengcredit.my

**Tech Stack:** Astro + React + Tailwind CSS + Vercel

---

## 🚨 CRITICAL: Import Path Rules

**ALWAYS follow the import path rules defined in `IMPORT-PATH-RULES.md`**

### Quick Reference:

```javascript
// Level 1 files (src/pages/en/index.astro)
import { SITE_CONFIG } from '../../utils/constants';

// Level 2 files (src/pages/en/equipment/excavator.astro)
import { SITE_CONFIG } from '../../../utils/constants';
import Hero from '../../../components/Hero.astro';
```

**Rule:** Count folder depth from `src/pages/`, add 1, use that many `../`

**⚠️ WARNING:** Wrong import paths cause build failures. Always verify with `npm run build`.

---

## 🔍 SEO Internal Linking Rules

**ALWAYS follow the SEO rules defined in `SEO-INTERNAL-LINKING-RULES.md`**

### Critical Requirements:

1. **Homepage MUST link to all equipment pages**
   - Use keyword-rich anchor text: "Excavator Financing", not "Click here"
   - Links should be clickable `<a>` tags, not plain `<span>` text

2. **Equipment pages MUST cross-link using RelatedEquipment component**
   ```astro
   <RelatedEquipment lang={lang} currentEquipment="excavator" />
   ```

3. **Sitemap MUST only include default locale per deployment**
   - EN site → only /en/ pages
   - MS site → only /ms/ pages
   - ZH site → only /zh/ pages

---

## 📁 Project Structure

```
clients/ing-heng/website/
├── src/
│   ├── components/          ← Reusable UI components
│   │   ├── RelatedEquipment.astro  ← SEO cross-linking
│   │   ├── Hero.astro
│   │   ├── ContactForm.astro
│   │   └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro ← Wraps all pages
│   ├── pages/               ← Routes (file-based routing)
│   │   ├── index.astro      ← Root redirect
│   │   ├── en/              ← English pages
│   │   ├── ms/              ← Malay pages
│   │   └── zh/              ← Chinese pages
│   ├── styles/
│   │   └── global.css       ← Tailwind + custom styles
│   └── utils/
│       ├── constants.ts     ← Company info, config
│       ├── schema.ts        ← Structured data helpers
│       ├── seo.ts           ← SEO utilities
│       └── i18n.ts          ← Multi-language helpers
├── astro.config.mjs         ← Astro configuration
└── tailwind.config.js       ← Tailwind configuration
```

---

## 🎨 Design System

### Brand Colors (Industrial Trust Theme)

```javascript
Primary: #8B6F47   // Bronze brown (trust, stability)
Accent: #D4A574    // Light bronze (warmth)
Dark: #2D1810      // Deep brown (authority)
Background: #F5F5DC // Beige (approachable)
```

### Typography

- **Headings:** Inter, bold, uppercase
- **Body:** Inter, regular
- **Chinese:** Noto Sans SC

### Component Rules

- All buttons use `btn` classes from global.css
- All sections use `section` class with padding
- All containers use `container-custom` for consistent width
- Use shadow-brutal styles for depth (e.g., `shadow-[4px_4px_0_#2D1810]`)

---

## 🌍 Multi-Language Architecture

### Translation Files

Located in `src/i18n/{lang}.json`:
- `en.json` - English translations
- `ms.json` - Malay translations
- `zh.json` - Chinese translations

### Language-Specific Pages

Each language has identical page structure:
```
src/pages/en/equipment/excavator.astro
src/pages/ms/equipment/excavator.astro  ← Same content, translated
src/pages/zh/equipment/excavator.astro  ← Same content, translated
```

### When Creating New Pages:

**ALWAYS create for all 3 languages simultaneously:**
1. Create `/en/new-page.astro`
2. Create `/ms/new-page.astro` (translate content)
3. Create `/zh/new-page.astro` (translate content)

---

## 📝 Content Creation Rules

### 🚨 CRITICAL: Financing Terms

**ALWAYS include these key facts in ALL content:**

**Deposit Requirements:**
- **Minimum Deposit: 0%**
- **Loan Amount: Up to 100%** of equipment value

**Key Messaging:**
- ✅ "Zero deposit required"
- ✅ "100% financing available"
- ✅ "No upfront payment needed"
- ✅ "Finance the full value of your equipment"
- ✅ "0% down payment option"

**Why This Matters:**
This is our MAJOR competitive advantage. Most competitors require 10-30% deposit. We offer 0% deposit and 100% loan.

**MUST mention in:**
- All equipment pages
- All blog posts about financing
- Homepage hero/value proposition
- Service pages
- Calculator page
- All calls-to-action
- Meta descriptions where relevant

**Example Usage:**
- "Get your excavator with 0% deposit and 100% financing"
- "No deposit needed - finance up to 100% of your equipment"
- "Start your business today with zero upfront payment"

---

### ⚠️ CRITICAL: Approval Timeframe Messaging

**NEVER make specific time claims for approval:**
- ❌ DO NOT say: "2-hour approval", "same-day approval", "1-day approval", "24-hour approval", "instant approval"
- ✅ DO say: "fast approval", "quick approval", "rapid approval"

**Why:** Actual approval takes 2-3 business days. Banks take 2-4 weeks. We are faster, but not instant.

**Correct Messaging:**
- "Fast approval compared to traditional banks"
- "Quick approval process (faster than banks)"
- "Rapid response to your application"
- "Competitive approval timeframe"

**Applies to:**
- All website copy
- Blog content
- Marketing materials
- Keywords/SEO content
- Social media posts
- WhatsApp messages

**Exception:** You MAY compare to banks:
- ✅ "Banks take 2-4 weeks. We're much faster."
- ✅ "Faster approval than traditional financing"

---

### ⚠️ CRITICAL: Approval Rate Messaging

**NEVER make specific approval rate claims:**
- ❌ DO NOT say: "95% approval rate", "90% success rate", "99% approval", or ANY specific percentage
- ✅ DO say: "high success rate", "excellent approval rate", "strong track record"

**Why:** We cannot verify exact approval percentages. This is a false/unverifiable claim.

**Correct Messaging:**
- "High success rate for quality equipment"
- "Excellent approval rate compared to banks"
- "Strong track record of approvals"
- "We approve most applications that meet our criteria"

**Applies to:**
- All website copy
- Blog content
- Marketing materials
- Meta descriptions
- Social media posts
- All customer communications

**Absolutely NO exceptions** - never use specific percentages for approval rates.

---

### ⚠️ CRITICAL: NO Specific Pricing on Equipment Pages

**NEVER include specific monthly payment figures:**
- ❌ DO NOT say: "from RM 7,500/month", "RM 2,400/month", "starting at RM X/month"
- ❌ DO NOT say: "RM 150,000 - RM 500,000 price range"
- ❌ DO NOT include specific revenue calculations (RM X per load, RM Y monthly income)
- ✅ DO say: "affordable monthly payments", "flexible payment plans", "competitive rates"

**Why:**
- Pricing varies by equipment age, condition, buyer's credit, and market rates
- Specific numbers become outdated quickly
- Focus on STORY and PERSUASION, not calculations
- Customers contact us for quotes anyway

**What TO Include:**
- ✅ Used vs new comparison (general concept: "60% cheaper than new")
- ✅ Stories of contractors winning tenders
- ✅ Why banks reject old equipment (and why we approve)
- ✅ Equipment longevity stories (even 15-20 year equipment still productive!)
- ✅ Contractor growth journeys (1 machine → fleet owner)
- ✅ 0% deposit option messaging

---

### ⚠️ CRITICAL: Equipment Age Acceptance

**CORRECT MESSAGING:**
- ✅ "We finance equipment 10+ years old"
- ✅ "Even older equipment considered"
- ✅ "Equipment age doesn't limit us - we assess working condition"
- ✅ "Banks say no to old equipment. We say yes."

**WRONG MESSAGING:**
- ❌ "Up to 10 years old accepted" (This sounds like 10 years is our LIMIT)
- ❌ "Maximum 10 years old" (We go beyond 10 years!)
- ❌ "Equipment must be under 10 years old" (False limitation)

**Why This Matters:**
- This is a MAJOR competitive advantage vs banks (who typically limit to 3-5 years)
- We assess equipment condition and business viability, not arbitrary age limits
- Stories of 13-year, 15-year, even 20-year equipment still being productive and financeable
- Age is secondary to working condition and business potential

**Correct Examples:**
- "Ahmad financed a 13-year-old CAT 966D. Banks rejected it. We approved it. Still running today."
- "Even 15-year-old equipment can be financed if properly maintained."
- "We don't have strict age limits like banks. We assess each machine individually."

---

### ⚠️ CRITICAL: Pain Point Articulation (Hyper-Specific Copy)

**NEVER write generic pain points. ALWAYS use sensory, specific, visceral articulation.**

#### ❌ **GENERIC (NEVER DO THIS):**
- "Are you tired of renting?"
- "Want to own equipment?"
- "Struggling with rental fees?"
- "Having cash flow problems?"

#### ✅ **HYPER-SPECIFIC (ALWAYS DO THIS):**
- "When the rental company calls at 5 PM saying 'we need the loader back tomorrow morning,' and you have a full day of loading scheduled, do you feel that panic in your chest knowing you'll lose the contract?"
- "When you write that RM 16,000 rental check every month, and you walk past the 12-year-old loader in your quarry that you DON'T own, does it feel like pouring money into a hole?"
- "When you calculate the project cost and realize RM 15,000 is going to the trucking contractor - not to you - do your shoulders tense up thinking about how many times you've paid that away?"
- "When your hired driver calls to quit, and you have 3 containers waiting at the port, does your stomach drop knowing your trailers will sit idle while you scramble to find another truck?"

**Pain Point Requirements (ALL MUST BE PRESENT):**
1. **Exact trigger situation** - Specific moment, not abstract concept
2. **Physical sensation** - What happens in their body (chest tightens, stomach drops, shoulders tense, thighs burn)
3. **Sensory details** - What they see, hear, feel (writing check, walking past equipment, phone call)
4. **Emotional naming** - Specific emotion (panic, frustration, shame, anger, dread)
5. **Relatable scenario** - Reader thinks "Yes, that's EXACTLY me"
6. **Consequence shown** - What happens next (lose contract, lose money, operations stop)

**Formula:**
```
[Exact Trigger Situation] + [Physical/Emotional Sensation] + [Consequence]
```

**Examples by Equipment Type:**

**Wheel Loader (Quarry Owner):**
> "When you're loading 60 trucks per day with a RENTED loader, and at the end of the month you write that RM 16,000 check to the rental company, do you feel your jaw clench thinking: 'I just paid for 1/50th of this machine... again'?"

**Tipper Truck (Excavation Contractor):**
> "When you finish excavating a site and call the trucking contractor to remove 40 loads of soil, and he quotes RM 400 per load - RM 16,000 total - do you feel that frustration in your chest knowing you just did the hard work but someone else is taking a huge chunk of the money?"

**Backhoe (Small Contractor):**
> "When you get a call for a weekend emergency job - burst pipe, need trenching NOW - but the rental company is closed and you have to turn down RM 8,000 worth of work, does that missed opportunity eat at you all weekend?"

**Container Trailer (Prime Mover Owner):**
> "When the rental company calls at 5:30 PM demanding their trailer back by 6 PM, and you have an evening container haul that pays RM 350, do you feel powerless watching that revenue disappear because of their schedule?"

**Prime Mover (Trailer Owner):**
> "When you split the revenue 60/40 with your hired driver, and you watch RM 4,000 leave your account every week - RM 16,000 per month - knowing it's because HE owns the truck and you don't, does that sting?"

**Excavator (Quarry Subcontracting):**
> "When the excavation contractor invoices you RM 52,000 for the month - money that could have stayed in YOUR quarry if you had your own PC350 - do you feel that weight in your chest knowing you're building someone else's business?"

---

### 🎯 BENEFIT STACKING (Not Negative Stacking)

#### ❌ **NEVER Stack Negatives (Weak Copy):**
- "No more rental fees. No more waiting. No more restrictions."
- "Stop losing money. Stop paying rental companies. Stop missing opportunities."
- "No more X. No more Y. No more Z." ← This is WEAK

#### ✅ **ALWAYS Stack Benefits (Strong Copy):**
- "Your equipment. Your schedule. Your revenue."
- "Full control. Full margins. Full ownership."
- "Build equity. Keep profits. Grow your business."
- "Own it. Control it. Profit from it."

**Pattern:**
```
WRONG: No more X, no more Y, no more Z
RIGHT: Your X. Your Y. Your Z.

WRONG: Stop losing X. Stop paying Y.
RIGHT: Keep X. Build Y. Control Z.
```

**Examples:**

**Instead of:**
> "No more rental fees. No more equipment unavailability. No more lost contracts."

**Write:**
> "Your equipment, always available. Your schedule, always flexible. Your revenue, always complete."

**Instead of:**
> "Stop losing RM 16,000 monthly. Stop enriching rental companies. Stop building nothing."

**Write:**
> "Build equity with every payment. Control your operations completely. Own an asset worth RM 300,000."

---

### 🚫 Geographic Keyword Strategy

**NEVER use city-specific keywords in copywriting:**
- ❌ "Port Klang logistics operators"
- ❌ "Selangor quarries"
- ❌ "Klang Valley contractors"
- ❌ "Rawang area"
- ❌ "Batu Caves operations"

**ALWAYS use Malaysia-wide keywords:**
- ✅ "Malaysian quarry operators"
- ✅ "Construction contractors across Malaysia"
- ✅ "Logistics operators nationwide"
- ✅ "Equipment financing for Malaysian businesses"

**Exception:** You MAY use locations in:
- Blog posts (local SEO)
- Meta tags (can have location keywords)
- Schema markup (areaServed: Malaysia)

**Reason:** We want to rank for national keywords, not limit ourselves to one city. Equipment financing customers come from all states.

---

**What NOT to Include:**
- ❌ Specific monthly payments
- ❌ Equipment price ranges with RM amounts
- ❌ Revenue per load/trip/hour
- ❌ ROI calculations or break-even timelines
- ❌ "Earn RM X monthly" projections

**Correct Approach:**
- **Instead of:** "Finance excavator from RM 9,000/month"
- **Use:** "Ahmad won a government tender with his used excavator. Banks rejected it. We approved it. Now he's bidding on bigger projects."

**Applies to:**
- All equipment pages
- Equipment index listings
- Product cards
- Calculator tools (calculators are OK, but don't pre-populate prices)
- Blog content about equipment

---

### Page Structure (Standard Template)

```astro
---
/**
 * Page Title - Language
 * Target Audience, Keywords, Purpose
 */

import BaseLayout from '../../../layouts/BaseLayout.astro';
import Hero from '../../../components/Hero.astro';
// ... other imports

const lang = 'en';
const pageTitle = 'SEO-Optimized Title | Brand Name';
const pageDescription = 'Compelling 150-160 char description with keywords';
const keywords = ['primary keyword', 'secondary keyword', 'long-tail keyword'];

// Page data...
---

<BaseLayout title={pageTitle} description={pageDescription} lang={lang} keywords={keywords}>
  <!-- Hero Section -->
  <Hero ... />

  <!-- Main Content Sections -->

  <!-- Related Equipment (if equipment page) -->
  <RelatedEquipment lang={lang} currentEquipment="equipmentName" />

  <!-- Contact Form -->
  <ContactForm lang={lang} />
</BaseLayout>
```

### SEO Metadata Requirements

Every page MUST have:
- [ ] Unique `<title>` tag (50-60 chars)
- [ ] Unique `<meta description>` (150-160 chars)
- [ ] Relevant keywords array (5-10 keywords)
- [ ] Structured data (Product Schema for equipment, FAQ Schema, etc.)
- [ ] Breadcrumbs component
- [ ] Internal links to related pages (minimum 3)

---

## 🔧 Development Workflow

### Before Making Changes:

1. Read relevant documentation first
2. Understand the file's location in directory structure
3. Calculate correct import paths using IMPORT-PATH-RULES.md

### After Making Changes:

1. Test build locally: `npm run build`
2. Check for import errors
3. Verify sitemap only includes correct language
4. Deploy using manual deployment process (see root CLAUDE.md)

---

## 🚀 Deployment Process

**See root CLAUDE.md for detailed deployment instructions.**

### Quick Summary:

```bash
# Update .vercel/project.json to target project
# Deploy with environment variables
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://www.inghengcredit.com \
  --env SITE_URL=https://www.inghengcredit.com
```

**CRITICAL:** Deploy all 3 projects separately with different env vars.

---

## 📊 SEO Monitoring

### Post-Deployment Checklist:

- [ ] Verify sitemap.xml is accessible and correct
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for new/updated pages
- [ ] Monitor rankings in GSC after 2-4 weeks

### Tools:

- **Google Search Console:** https://search.google.com/search-console
- **Sitemap URLs:**
  - https://www.inghengcredit.com/sitemap-index.xml
  - https://www.kreditloan.my/sitemap-index.xml
  - https://www.inghengcredit.my/sitemap-index.xml

---

## 🎯 When Creating New Equipment Pages

### Step-by-Step Process:

1. **Create the page file:**
   ```
   src/pages/en/equipment/new-equipment.astro
   src/pages/ms/equipment/new-equipment.astro
   src/pages/zh/equipment/new-equipment.astro
   ```

2. **Use correct imports (Level 2):**
   ```javascript
   import { SITE_CONFIG } from '../../../utils/constants';
   import Hero from '../../../components/Hero.astro';
   ```

3. **Add to RelatedEquipment component:**
   Edit `src/components/RelatedEquipment.astro` and add new equipment data

4. **Add link from homepage:**
   Edit homepage equipment section to include new equipment link

5. **Add RelatedEquipment component to new page:**
   ```astro
   <RelatedEquipment lang={lang} currentEquipment="newEquipment" />
   ```

6. **Create structured data:**
   ```javascript
   const productSchema = generateProductSchema({...});
   const faqSchema = generateFAQSchema(faqs);
   ```

7. **Test build:**
   ```bash
   npm run build
   ```

8. **Deploy all 3 sites**

---

## 🤖 AI Assistant Best Practices

### When Modifying Existing Pages:

1. **Always Read First:** Use Read tool before Edit tool
2. **Preserve Existing Structure:** Don't change working code unnecessarily
3. **Maintain Consistency:** Use same patterns as existing pages
4. **Test Before Committing:** Run `npm run build` to verify

### When Creating Components:

1. **Support all 3 languages:** Add translations for EN, MS, ZH
2. **Use TypeScript interfaces:** Define Props interface
3. **Follow naming conventions:** PascalCase for components
4. **Add JSDoc comments:** Explain component purpose

### When Debugging Build Errors:

1. **Check import paths first** - Most common issue
2. **Verify frontmatter delimiters** - Must have `---` at start and end
3. **Check for duplicate imports** - E.g., `SITE_CONFIG, SITE_CONFIG`
4. **Read error message carefully** - Line numbers are accurate

---

## 🚨 CRITICAL: Frontmatter Translation Rules

### ❌ NEVER Translate Frontmatter Enum Values

**Problem:** When editing MS/ZH blog posts, DO NOT translate frontmatter enum values.

**WRONG (causes build failure):**
```yaml
---
category: '设备融资'  # ❌ WRONG - Translated to Chinese
persona: '承包商阿末'  # ❌ WRONG - Translated to Chinese
---
```

**CORRECT:**
```yaml
---
category: 'Equipment Financing'  # ✅ CORRECT - Always English
persona: 'Contractor Ahmad'      # ✅ CORRECT - Always English
locale: 'zh'                     # ✅ Language code, not translated
---
```

### Fields That MUST Stay in English (All Languages)

**Never translate these frontmatter fields:**
- `category`: Must be exact enum value from schema
- `persona`: Must be exact enum value from schema
- `locale`: Language code (en/ms/zh)
- `tags`: Can be translated (not validated by schema)
- `keywords`: Can be translated (not validated by schema)

### Valid Enum Values (ALWAYS English)

**category:**
- 'Equipment Financing'
- 'Construction Equipment'
- 'Logistics Equipment'
- 'Business Tips'
- 'Industry News'
- 'Case Studies'
- 'Financing Guides'

**persona:**
- 'Contractor Ahmad'
- 'Logistics Lee'
- 'Warehouse William'
- 'General'

**Why This Matters:**
The Astro content collection schema validates these as TypeScript enums. If you translate them to Chinese/Malay, the build will fail with:
```
Invalid enum value. Expected 'Equipment Financing' | ..., received '设备融资'
```

### What CAN Be Translated in Frontmatter

**These fields are free-text and can be in any language:**
- `title`: "Excavator Financing" (EN) → "Pembiayaan Excavator" (MS) → "挖掘机融资" (ZH)
- `description`: Full translation
- `tags`: ['excavator'] → ['excavator', 'pembiayaan'] → ['挖掘机', '融资']
- `keywords`: Full translation
- `faqSchema.question`: Full translation
- `faqSchema.answer`: Full translation

### Always Test After Editing

```bash
npm run build
```

If you see enum validation errors, you translated a frontmatter field that should stay in English.

---

## 📚 Documentation References

- **Import Paths:** See `IMPORT-PATH-RULES.md`
- **SEO Strategy:** See `SEO-INTERNAL-LINKING-RULES.md`
- **Deployment:** See root `CLAUDE.md` and `MULTI-LANGUAGE-DEPLOYMENT-RULES.md`
- **Framework:** See `framework-docs/` for reusable patterns

---

## ⚠️ Common Pitfalls to Avoid

### ❌ DON'T:
- Hardcode locale in code (use `DEFAULT_LOCALE` env var)
- Mix import path levels (../../ vs ../../../ in same file)
- Create pages without translations for all 3 languages
- Include multiple languages in sitemap for one domain
- Use plain text for equipment names (must be links!)
- Forget to add RelatedEquipment component to equipment pages

### ✅ DO:
- Use environment variables for all config
- Follow import path formula (folder depth + 1)
- Create pages for all languages simultaneously
- Filter sitemap to only show default locale
- Use keyword-rich anchor text for all internal links
- Add cross-linking components to all equipment pages

---

## 📊 Project Status

**Current Phase:** ONBOARDING COMPLETE ✅
**Last Updated:** 2025-11-13
**Next Phase:** BUILD (Content Creation)

### Onboarding Deliverables (COMPLETE)
- ✅ Business Brief (clients/ing-heng/onboarding/business-brief.md)
- ✅ Competitor Analysis (clients/ing-heng/onboarding/competitor-report.md)
- ✅ Consolidated Personas (clients/ing-heng/onboarding/personas.md)
- ✅ Keyword Opportunities CSV (clients/ing-heng/onboarding/keyword-opportunities.csv)

### Technical Status
- ✅ Multi-domain SEO optimization complete
- ✅ Website deployed (EN, MS, ZH)
- ✅ Internal linking structure implemented
- ✅ SEO infrastructure in place

---

**Project Status:** Active - Ready for BUILD phase
