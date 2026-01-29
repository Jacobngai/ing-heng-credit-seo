# Result Marketing - Architecture & Workflow Guide

**Last Updated:** 2026-01-22
**Client:** Result Marketing Sdn Bhd (Self - Agency Website)
**Location:** Remote/Virtual - Serving clients across Asia
**Business Model:** B2B - SEO & AI Automation Services
**Languages:** EN, ZH, MS (expandable)

---

## Business Overview

### What We Do
Result Marketing is a digital marketing agency specializing in:
1. **SEO Services** - Tri-lingual websites for construction/vehicle industries
2. **AI Automation** - Replace admin staff with automated workflows

**Target Audience (B2B):**
- Construction equipment rental companies (crane, lorry, excavator, bulldozer, forklift, etc.)
- Vehicle/fleet businesses
- SMEs wanting to reduce admin staff costs
- Businesses currently overspending on Facebook/Google Ads

### Our Services

#### 1. SEO Services
- **RM399 Trial** - 3-page website in 3 languages (EN/ZH/MS)
- **RM1200/month** - Ongoing SEO + blog content generation
- **Target Industries:** Construction equipment rental, vehicle dealers

**Key Selling Point:** SEO captures people who already want to buy (searching "crane rental near me"), not browsing social media.

#### 2. AI Automation
- **From RM1500/month** - Cheaper than minimum wage admin staff
- Replace repetitive admin tasks with automation
- WhatsApp integration, digital paperwork, workflow automation

### Case Studies (3 Clients)

#### 1. Terasek Supply Sdn Bhd (Water Tanker)
- **Problem:** Paper delivery orders, JB→KL paperwork delays, 2-month collection time
- **Solution:** Digital paperwork app, GPS fleet tracking, automated scheduling
- **Result:** Collection time reduced to 1 month, can now take outstation jobs (no paperwork travel needed)

#### 2. Ing Heng Credit Sdn Bhd (Money Lender)
- **Problem:** Relying on traditional marketing
- **Solution:** SEO for money lending keywords in 3 languages
- **Result:** Organic search traffic increase

#### 3. iHousing Paradise Sdn Bhd (Airbnb Management)
- **Problem:** Expensive Facebook ads, manual review checking
- **Solution:** SEO + Airbnb review automation (auto-reply to get guest reviews, AI-routes complaints to correct team)
- **Result:** 500%+ search traffic increase, automated review workflow

### Competitive Advantage

**Pricing:**
- RM399 trial vs competitors' RM2000+ websites
- RM1200/month for 3 languages vs competitors' RM3000+/month
- RM1500 automation vs RM1500+ minimum wage admin

**Technology:**
- AI-built with Astro (fast, modern, SEO-optimized)
- Not WordPress (slow, old, not AI-friendly)

---

## CRITICAL RULES - Must Follow

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

**SLUG_MANIFEST.json Location:** `clients/result-marketing/website/public/SLUG_MANIFEST.json`

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
    // Services pages: 0.95
    else if (item.url.includes('/services/')) {
      item.priority = 0.95;
      item.changefreq = 'weekly';
    }
    // Case studies: 0.9
    else if (item.url.includes('/case-studies/')) {
      item.priority = 0.9;
      item.changefreq = 'monthly';
    }
    // Industry pages: 0.85
    else if (item.url.includes('/industries/')) {
      item.priority = 0.85;
      item.changefreq = 'weekly';
    }
    // Blog: 0.7
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
    "en": [],
    "zh": [],
    "ms": []
  },
  "pages": {
    "en": [
      {
        "slug": "services/seo",
        "title": "SEO Services - 3-Language Websites",
        "category": "services",
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

### 4. CONTENT WORKFLOW (D/A/F SYSTEM)

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

### Core Pages
```
/en/                              (English homepage)
/zh/                              (Chinese homepage)
/ms/                              (Malay homepage)
/en/services/                     (Services overview)
/en/services/seo/                 (SEO services detail)
/en/services/automation/          (AI automation detail)
/en/case-studies/                 (Case studies index)
/en/case-studies/terasek/         (Terasek case study)
/en/case-studies/ing-heng/        (Ing Heng case study)
/en/case-studies/ihousing/        (iHousing case study)
/en/about/                        (About Result Marketing)
/en/contact/                      (Contact with WhatsApp)
```

### Industry Landing Pages
```
/en/industries/crane-rental/      (Crane rental SEO)
/en/industries/lorry-rental/      (Lorry rental SEO)
/en/industries/excavator-rental/  (Excavator rental SEO)
/en/industries/forklift-rental/   (Forklift rental SEO)
```

### Comparison Pages
```
/en/compare/seo-vs-facebook-ads/  (SEO vs Facebook Ads)
/en/compare/seo-vs-google-ads/    (SEO vs Google Ads)
/en/compare/automation-vs-staff/  (Automation vs Admin Staff)
```

### Blog Articles
```
/en/blog/why-seo-beats-ads/       (Educational content)
/en/blog/construction-seo-guide/  (Industry guide)
```

---

## Brand Guidelines

### Colors (Semrush-inspired)
- **Primary:** #5B2D8C (Purple)
- **Accent:** #FF6A3D (Orange)
- **Background:** #FFFFFF (White)
- **Text:** #1A1A2E (Dark)
- **Light Gray:** #F5F5F5

### Fonts
- **Headings:** Inter (Bold/Semibold)
- **Body:** Inter (Regular)

### Logo
- PNG format provided
- Use on white/light backgrounds

---

## WhatsApp Integration

### Lead Capture Flow
1. User clicks WhatsApp CTA
2. Pre-filled message based on service interest
3. Direct conversation with +60175032281

**CTA Examples:**
- SEO inquiry: `?text=Hi, I'm interested in the RM399 SEO trial for my [industry] business.`
- Automation inquiry: `?text=Hi, I want to learn about AI automation for my business.`
- General: `?text=Hi, I'd like to know more about Result Marketing services.`

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
cd clients/result-marketing/website
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://en.resultmarketing-temp.vercel.app \
  --env SITE_URL=https://en.resultmarketing-temp.vercel.app

# 2. DEPLOY MALAY (MS)
echo '{"projectId":"MS_PROJECT_ID","orgId":"TEAM_ID"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://ms.resultmarketing-temp.vercel.app \
  --env SITE_URL=https://ms.resultmarketing-temp.vercel.app

# 3. DEPLOY CHINESE (ZH)
echo '{"projectId":"ZH_PROJECT_ID","orgId":"TEAM_ID"}' > .vercel/project.json
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://zh.resultmarketing-temp.vercel.app \
  --env SITE_URL=https://zh.resultmarketing-temp.vercel.app
```

---

## Folder Structure

```
/clients/result-marketing/
├── /keyword-research/               # Keyword research workflow
│   ├── D/                          # Draft keywords
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
│   │   └── /landing-pages/          # English landing pages
│   ├── /zh/
│   │   ├── /blogs/                 # Chinese blog articles
│   │   └── /landing-pages/          # Chinese landing pages
│   └── /ms/
│       ├── /blogs/                 # Malay blog articles
│       └── /landing-pages/          # Malay landing pages
│
├── /blog-research/                  # Research notes for blog posts
├── /brand-identity/                 # Brand assets
│   ├── A/                          # Approved brand assets
│   └── D/                          # Draft brand assets
│
├── /images/                         # All client images
│   ├── /logos/                     # Company logos
│   ├── /screenshots/               # Case study screenshots
│   └── /image-briefs/              # AI image generation prompts
│
├── /website/                        # Astro website codebase
│   ├── /src/
│   │   ├── /pages/                 # Astro pages
│   │   ├── /components/            # Components
│   │   ├── /layouts/               # Layouts
│   │   └── /i18n/                 # Translations
│   ├── /public/
│   │   └── SLUG_MANIFEST.json     # CRITICAL - Track all slugs
│   ├── astro.config.mjs
│   ├── package.json
│   └── sitemap-check.spec.ts       # Playwright sitemap checker
│
├── /project-docs/                   # Project documentation
└── /archive/                        # Archived materials
```

---

## Page Creation Checklist (Use Every Time)

When creating a NEW page:

- [ ] Create content file (.astro) with proper slug
- [ ] Add slug to `SLUG_MANIFEST.json`
- [ ] Add appropriate metadata (title, description, OG tags)
- [ ] Run local build: `npm run build`
- [ ] Run sitemap checker: `npm run check-sitemap:local`
- [ ] Verify all links work
- [ ] Deploy to Vercel
- [ ] Confirm no 404s in results

## Page Deletion Checklist (Use Every Time)

When deleting a page:

- [ ] Remove slug from `SLUG_MANIFEST.json`
- [ ] Delete the content file
- [ ] Update any internal links pointing to this page
- [ ] Run local build: `npm run build`
- [ ] Run sitemap checker: `npm run check-sitemap:local`
- [ ] Deploy to Vercel
- [ ] Confirm no 404s in results

---

## Key Messages (Copy Reference)

### Hero Section
**Headline:** "RM399 - Get Your 3-Language Website"
**Subheadline:** "SEO that captures buyers, not browsers. Built with AI, not WordPress."

### SEO Selling Points
- "People searching 'crane rental near me' already want to buy"
- "Stop paying for scrollers on Facebook & TikTok"
- "3 languages = 3x the market reach"
- "RM1200/month - cheapest tri-lingual SEO in Asia"

### Automation Selling Points
- "RM1500/month automation < RM1500 minimum wage admin"
- "Works 24/7, no sick leave, no mistakes"
- "Replace boring repetitive tasks, keep creative staff"

### Social Proof
- "500%+ traffic increase for iHousing"
- "2 months → 1 month payment collection for Terasek"
- "Now serving clients across Malaysia"

---

## Quick Start Commands

```bash
# Local development
cd clients/result-marketing/website
npm install
npm run dev

# Build
npm run build

# Check sitemap (local)
npm run check-sitemap:local

# Check sitemap (production)
npm run check-sitemap:prod
```

---

## Contact & Support

- **WhatsApp:** +60175032281
- **Vercel Projects:** Using temp URLs until custom domains decided

---

**Remember: ZERO 404s is our goal. Every page change = update SLUG_MANIFEST.json + run sitemap check.**
