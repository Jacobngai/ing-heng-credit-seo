# iHousing - Architecture & Workflow Guide

**Last Updated:** 2026-01-22
**Client:** iHousing (Property Management & Airbnb Hosting)
**Location:** Melaka, Malaysia
**Business Model:** B2B - Attracting property owners to invest in Airbnb hosting
**Languages:** EN, ZH, MS

---

## Business Overview

### What We Do
iHousing manages 100+ properties in Melaka, offering full-service Airbnb hosting for property owners.

**Target Audience (Property Owners):**
- New investors (looking to buy property for Airbnb)
- Existing owners (want to convert existing house to Airbnb)
- Current hosts (need professional management)
- Portfolio owners (multiple properties)

### Our Services
1. **Renovation & Setup** - Convert property to Airbnb-ready
2. **Listing Creation** - Photos, pricing optimization, platform setup
3. **Full Management** - Guest communication, cleaning, maintenance
4. **Revenue Optimization** - Maximize occupancy and income

### Competitive Advantage (Revenue Model)

#### Parkland Avenue by the Sea (Special Project)
**Flat Fee Pricing EXCLUSIVE for Parkland Avenue:**
- 1 Room: RM200/month
- 2 Rooms: RM250/month
- 3 Rooms: RM300/month

**This is the ONLY project with flat fee pricing.** For other condos, pricing is discussed via WhatsApp.

**Parkland Avenue Details:**
- **Official Airbnb Manager** for this new development
- Launch: August 2025
- **Pre-launch marketing** starting now
- Multi-page section dedicated to this project

#### Other Condos (10 Properties)
**Pricing:** Discussed via WhatsApp - NO flat fee mentioned in content
**Call to Action:** "WhatsApp us for custom pricing for [Condo Name]"
**Reasoning:** Each condo has different factors (size, location, condition) - pricing is personalized

**Competitors charge:** ~20% management fee + cleaning + maintenance
**Parkland Advantage:** Transparent flat fee vs competitors' hidden commission model

---

## 🚨 CRITICAL RULES - Must Follow

### 1. SITEMAP MANAGEMENT (ZERO 404 POLICY)

**MANDATORY:** Whenever you create or delete a page, you MUST update the sitemap.

#### Creating a Page (WORKFLOW)
```
1. Create content file (.md or .astro)
2. Define slug in frontmatter
3. Add slug to SLUG_MANIFEST.json
4. Build site (auto-generates sitemap)
5. Run sitemap link checker (Playwright)
6. Deploy ONLY if all links pass
```

#### Deleting a Page (WORKFLOW)
```
1. Remove slug from SLUG_MANIFEST.json
2. Delete the content file
3. Build site (sitemap auto-updates)
4. Run sitemap link checker (Playwright)
5. Deploy ONLY if no broken links remain
```

**SLUG_MANIFEST.json Location:** `clients/ihousing/website/public/SLUG_MANIFEST.json`

**Never skip this step.** 404 errors = bad SEO = lost leads.

---

### 2. AUTO-SITEMAP GENERATION

The sitemap is generated **automatically** from content collections. NEVER manually edit the sitemap.

**astro.config.mjs - Sitemap Configuration:**
```javascript
sitemap({
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: {
      en: 'en-MY',
      zh: 'zh-Hans-MY',
      ms: 'ms-MY',
    },
  },
  filter: (page) => {
    // Exclude root, include language-prefixed pages
    return page !== `${SITE_URL}/`;
  },
  serialize: (item) => {
    item.lastmod = new Date();

    // Priority rules:
    // Homepage variants: 1.0
    if (item.url.match(/\/(en|zh|ms)\/?$/)) {
      item.priority = 1.0;
      item.changefreq = 'weekly';
    }
    // Parkland Avenue: 0.95 (high priority)
    else if (item.url.includes('/parkland-avenue')) {
      item.priority = 0.95;
      item.changefreq = 'weekly';
    }
    // Investment guides: 0.85
    else if (item.url.includes('/invest/')) {
      item.priority = 0.85;
      item.changefreq = 'weekly';
    }
    // Renovation guides: 0.8
    else if (item.url.includes('/renovation/')) {
      item.priority = 0.8;
      item.changefreq = 'monthly';
    }
    // Comparisons: 0.75
    else if (item.url.includes('/compare/')) {
      item.priority = 0.75;
      item.changefreq = 'monthly';
    }
    // Blog index: 0.7
    else if (item.url.includes('/blog/')) {
      item.priority = 0.7;
      item.changefreq = 'weekly';
    }
    // Default
    else {
      item.priority = 0.5;
      item.changefreq = 'monthly';
    }

    return item;
  },
}),
```

---

### 3. SLUG TRACKING (MANIFEST FILE)

All published URLs MUST be tracked in `SLUG_MANIFEST.json`.

**Purpose:**
- Single source of truth for all published content
- Prevents orphaned pages
- Makes it easy to find and update/delete content

**SLUG_MANIFEST.json Structure:**
```json
{
  "lastUpdated": "2026-01-22T00:00:00.000Z",
  "blogs": {
    "en": [
      {
        "slug": "invest/how-to-buy-property-melaka-airbnb",
        "title": "How to Buy Property in Melaka for Airbnb Investment",
        "category": "investment",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      }
    ],
    "zh": [],
    "ms": []
  },
  "pages": {
    "en": [
      {
        "slug": "parkland-avenue-by-the-sea",
        "title": "Parkland Avenue by the Sea - Official Airbnb Manager",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      },
      {
        "slug": "parkland-avenue/investment-guide",
        "title": "Parkland Avenue Investment Guide 2025",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      }
    ],
    "zh": [],
    "ms": []
  }
}
```

**Always update this file when adding/deleting content.**

---

### 4. GITHUB ACTION - SITEMAP LINK CHECKER

After EVERY deployment, GitHub Action automatically runs Playwright to check ALL sitemap links.

**File:** `.github/workflows/sitemap-check.yml`

```yaml
name: Sitemap Link Checker

on:
  deployment_status:
  workflow_dispatch:

jobs:
  check-sitemap:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Run sitemap link checker
        run: npm run check-sitemap
      - name: Upload results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: sitemap-check-results
          path: sitemap-check-results.json
```

**Command:** `npm run check-sitemap` (runs Playwright test)

**What it does:**
1. Fetches sitemap.xml from deployed site
2. Visits EVERY URL in sitemap
3. Checks for 404, 500, redirect loops
4. Reports broken links with details
5. Fails build if any 404s found

---

### 5. CONTENT WORKFLOW (D/A/F SYSTEM)

The **Draft → Approve → Fail** system ensures quality:

| Folder | Purpose | Next Action |
|--------|---------|-------------|
| **D/** | Draft content generated by AI | Review required |
| **A/** | Approved content ready for use | Use in production |
| **F/** | Rejected/failed content | Archive only |

**Process:**
1. AI agent generates content in `D/` folders
2. Employee reviews each file
3. Good files → Move to `A/`
4. Bad files → Move to `F/`
5. Files needing edits → Edit, then move to `A/`

---

## URL Structure

### Blog Articles
```
/invest/how-to-buy-property-melaka-airbnb
/renovation/checklist-airbnb-conversion
/compare/airbnb-vs-long-term-rental
```

### Parkland Avenue (Multi-page Section)
```
/parkland-avenue-by-the-sea                    (Main landing)
/parkland-avenue/investment-guide               (Investment details)
/parkland-avenue/floor-plans                  (Unit types)
/parkland-avenue/roi-calculator               (Returns calculator)
/parkland-avenue/pre-register                 (Lead capture)
```

### Core Pages
```
/en/                    (English homepage)
/zh/                    (Chinese homepage)
/ms/                    (Malay homepage)
/en/for-owners/         (Property owner section)
/en/contact/             (Contact with WhatsApp form)
/en/about/               (About iHousing)
```

---

## Content Categories (Blog)

### Investment Guides
- How to buy property for Airbnb
- ROI calculations
- Financing options
- Location analysis (Melaka neighborhoods)
- Property type recommendations

### Renovation Tips
- Step-by-step conversion guides
- Cost estimates
- Before/after examples
- Checklists
- Contractor recommendations

### Comparisons
- Airbnb vs long-term rental
- Airbnb vs hotel
- Self-managed vs professional management
- iHousing vs competitors (pricing comparison)

---

## Brand Guidelines

### Colors
- **Primary:** #123A32 (Dark Green)
- **Secondary:** (Follow existing ihousing.com.my design)

### Fonts
- **Headings:** DM Sans
- **Body:** Poppins

### Logo
- Use existing iHousing logo
- Horizontal format for desktop
- Vertical/Icon format for mobile

---

## WhatsApp Integration

### Lead Capture Flow
1. User visits site (For Owners page or Parkland Avenue page)
2. User enters phone number in form
3. Form submits to backend
4. **Evolution API** sends WhatsApp message to the user
5. Follow-up conversation begins

**CTA:** "Enter your phone number and we'll WhatsApp you!"

**Form Fields:**
- Phone number (required)
- Name (optional)
- Property type (optional dropdown)
- Interest (optional dropdown: New Investment / Conversion / Management)

**Evolution API Setup:**
- Need API credentials
- Message template setup
- Webhook for form submission

---

## Multi-Language Deployment

### Environment Variables (Vercel Dashboard)

Each project MUST have:
- `PUBLIC_DEFAULT_LOCALE` = en | ms | zh (NO trailing newlines!)
- `DEFAULT_LOCALE` = en | ms | zh
- `PUBLIC_SITE_URL` = project URL
- `SITE_URL` = project URL

### Deployment Process (3 Projects)

```bash
# 1. DEPLOY ENGLISH (EN)
echo '{"projectId":"EN_PROJECT_ID","orgId":"TEAM_ID"}' > .vercel/project.json
cd clients/ihousing/website
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://en.ihousing-temp.vercel.app \
  --env SITE_URL=https://en.ihousing-temp.vercel.app

# 2. DEPLOY MALAY (MS)
echo '{"projectId":"MS_PROJECT_ID","orgId":"TEAM_ID"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://ms.ihousing-temp.vercel.app \
  --env SITE_URL=https://ms.ihousing-temp.vercel.app

# 3. DEPLOY CHINESE (ZH)
echo '{"projectId":"ZH_PROJECT_ID","orgId":"TEAM_ID"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://zh.ihousing-temp.vercel.app \
  --env SITE_URL=https://zh.ihousing-temp.vercel.app
```

### Dynamic i18n Fallback

```javascript
// ✅ MUST be dynamic - never hardcode
fallback: Object.fromEntries(
  ALL_LOCALES
    .filter(loc => loc !== DEFAULT_LOCALE)
    .map(loc => [loc, DEFAULT_LOCALE])
)
```

### Root Redirect

```astro
---
const defaultLocale = import.meta.env.PUBLIC_DEFAULT_LOCALE || 'en';
return Astro.redirect(`/${defaultLocale}/`, 301);
---
```

---

## Folder Structure

```
/clients/ihousing/
├── /keyword-research/               # Keyword research workflow
│   ├── D/                          # Draft keywords (awaiting review)
│   ├── A/                          # Approved keywords
│   └── F/                          # Rejected keywords
│
├── /persona-idea/                   # Persona development workflow
│   ├── D/                          # Draft personas
│   ├── A/                          # Approved personas
│   └── F/                          # Rejected personas
│
├── /brief-draft/                    # Client brief workflow
│   ├── D/                          # Draft brief
│   ├── A/                          # Approved brief
│   └── F/                          # Rejected brief versions
│
├── /personas/                       # Production personas (JSON)
├── /content/                        # Published content (multilingual)
│   ├── /en/
│   │   ├── /blogs/                 # English blog articles (.md)
│   │   └── /landing-pages/          # English landing pages (.astro)
│   ├── /zh/
│   │   ├── /blogs/                 # Chinese blog articles (.md)
│   │   └── /landing-pages/          # Chinese landing pages (.astro)
│   └── /ms/
│       ├── /blogs/                 # Malay blog articles (.md)
│       └── /landing-pages/          # Malay landing pages (.astro)
│
├── /blog-research/                  # Research notes for blog posts
├── /brand-identity/                 # Brand assets
│   ├── A/                          # Approved brand assets
│   └── D/                          # Draft brand assets
│
├── /images/                         # All client images (CENTRALIZED)
│   ├── /logos/                     # Company logos
│   ├── /property-photos/            # Property images
│   └── /image-briefs/              # AI image generation prompts
│       ├── D/                      # Draft image briefs
│       └── A/                      # Approved image briefs
│
├── /website/                        # Astro website codebase
│   ├── /src/
│   │   ├── /pages/                 # Astro pages
│   │   ├── /components/            # Components
│   │   ├── /layouts/               # Layouts
│   │   ├── /i18n/                 # Translations (en.json, zh.json, ms.json)
│   │   └── /content/              # Content collections config
│   ├── /public/
│   │   └── SLUG_MANIFEST.json     # 🔥 CRITICAL - Track all slugs
│   ├── astro.config.mjs             # Astro configuration
│   └── package.json
│
├── /project-docs/                   # Project documentation
│   ├── README.md
│   └── ARCHITECTURE-SWIMLANE.html # Swimlane diagram
│
├── /archive/                        # Archived project materials
│   └── /implementation-reports/
│
└── README.md                        # This file
```

---

## Page Creation Checklist (Use Every Time)

When creating a NEW page:

- [ ] Create content file (.md or .astro) with proper slug in frontmatter
- [ ] Add slug to `SLUG_MANIFEST.json`
- [ ] Add appropriate metadata (title, description, OG tags)
- [ ] Run local build: `npm run build`
- [ ] Run sitemap checker: `npm run check-sitemap`
- [ ] Verify all links work
- [ ] Deploy to Vercel
- [ ] GitHub Action runs sitemap check
- [ ] Confirm no 404s in results

## Page Deletion Checklist (Use Every Time)

When deleting a page:

- [ ] Remove slug from `SLUG_MANIFEST.json`
- [ ] Delete the content file
- [ ] Update any internal links pointing to this page
- [ ] Run local build: `npm run build`
- [ ] Run sitemap checker: `npm run check-sitemap`
- [ ] Verify no broken links remain
- [ ] Deploy to Vercel
- [ ] GitHub Action runs sitemap check
- [ ] Confirm no 404s in results

---

## Key Differentiators (SEO & Content)

### 1. Parkland Avenue Flat Fee (Exclusive USP)
- **ONLY for Parkland Avenue:** Transparent flat fee pricing (RM200-300/month)
- For all other condos: "WhatsApp us for custom pricing"
- Create dedicated Parkland pricing comparison page
- Highlight: "Know exactly what you pay - no hidden commission surprises"

### 2. 100+ Properties Managed (Social Proof)
- 8 years experience in Melaka
- Portfolio of 10 specific condos
- Proven track record
- Case studies from satisfied owners

### 3. 5-Platform Listing (Revenue Advantage)
- Don't just rely on Airbnb
- Also list on: Booking.com, Agoda, Expedia, VRBO
- 60% more bookings than single-platform managers
- We handle ALL platforms, you get ONE report

### 4. In-House Cleaning (Quality + Cost Control)
- Our own cleaning team (not outsourced)
- No markup on cleaning costs
- Consistent quality control
- Faster turnover between guests

### 5. Melaka Focus (Local SEO Domination)
- Local SEO for Melaka neighborhoods
- Melaka-specific investment data
- Tourist area analysis (Jonker Street, UNESCO heritage)
- Weekend from KL investment angle

### 6. Switching Made Easy
- "Switch to iHousing" pages for each condo
- Smooth transition process
- We handle all platform transfers
- No disruption to your existing bookings

---

## Quick Start Commands

```bash
# Onboard new client (ihousing)
/onboard-client ihousing

# Generate daily blog content
/generate-daily-blogs ihousing

# Review content quality
/review-quality ihousing

# Publish approved content
/publish-approved ihousing

# Setup Vercel projects
/setup-vercel-projects ihousing

# Run sitemap link checker
cd clients/ihousing/website
npm run check-sitemap

# Local development
cd clients/ihousing/website
npm install
npm run dev
```

---

## Contact & Support

- GitHub Repo: (same as ing-heng)
- Current Domains: Using Vercel temp URLs until custom domains decided
- Brand Website: https://www.ihousing.com.my (existing WordPress site for reference)
- WhatsApp: +60166996688

---

**Remember: ZERO 404s is our goal. Every page change = update SLUG_MANIFEST.json + run sitemap check.**
