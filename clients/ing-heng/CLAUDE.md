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
