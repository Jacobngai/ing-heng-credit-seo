# iHousing - Client Setup Complete

**Status:** ✅ Architecture Complete
**Date:** 2026-01-22
**Location:** Melaka, Malaysia
**Business:** B2B Property Management (Airbnb Hosting)

---

## What We Built

### 1. Complete Folder Structure
```
clients/ihousing/
├── /keyword-research/           ✅ D/A/F folders
├── /persona-idea/            ✅ D/A/F folders
├── /brief-draft/             ✅ D/A/F folders
├── /personas/                ✅ Ready for JSON personas
├── /content/                 ✅ EN/ZH/MS blogs & landing-pages
├── /blog-research/            ✅ Ready for research notes
├── /brand-identity/           ✅ A/D folders for brand assets
├── /images/                  ✅ logos, property-photos, image-briefs
├── /website/                ✅ Astro codebase
├── /project-docs/            ✅ Documentation
└── /archive/                 ✅ Implementation reports
```

---

## 2. Architecture Files Created

### 📄 CLAUDE.md
**Location:** `clients/ihousing/CLAUDE.md`

Contains all critical rules:
- Zero 404 Policy
- Sitemap management workflow
- SLUG_MANIFEST.json tracking
- Multi-language deployment rules
- Page creation/deletion checklists

### 🗺️ SLUG_MANIFEST.json
**Location:** `clients/ihousing/website/public/SLUG_MANIFEST.json`

Single source of truth for all published URLs. Update when:
- Adding a new page
- Deleting a page
- Changing any slug

### 🔧 astro.config.mjs
**Location:** `clients/ihousing/website/astro.config.mjs`

Auto-generates sitemap with priority rules:
- Homepage: 1.0
- Parkland Avenue: 0.95
- Investment Guides: 0.85
- Renovation Guides: 0.8
- Comparisons: 0.75
- Blog: 0.7

### 🧪 sitemap-check.spec.ts
**Location:** `clients/ihousing/website/sitemap-check.spec.ts`

Playwright test that:
- Fetches sitemap from deployed site
- Visits EVERY URL
- Checks for 404, 500, redirects
- Reports broken links
- Saves results to JSON

### 🤖 GitHub Action (.github/workflows/sitemap-check.yml)
Auto-runs after deployment:
- Runs sitemap link checker
- Uploads results
- Creates GitHub issue if 404s found

### 📊 ARCHITECTURE-SWIMLANE.html
**Location:** `clients/ihousing/project-docs/ARCHITECTURE-SWIMLANE.html`

Visual diagram showing the 5-lane workflow:
1. AI Agent - Content generation
2. Human Review - Approval workflow
3. Build & Sitemap - Auto-generation
4. Local Test - Playwright verification
5. CI/CD Deploy - GitHub Actions

### 📄 PARKLAND-AVENUE-STRUCTURE.md
**Location:** `clients/ihousing/project-docs/PARKLAND-AVENUE-STRUCTURE.md`

Complete Parkland Avenue by the Sea page structure:
- 5 main pages × 3 languages = 15 pages total
- Investment guide, floor plans, ROI calculator
- Pre-register form with WhatsApp integration

### 📦 package.json
**Location:** `clients/ihousing/website/package.json`

NPM scripts:
```bash
npm run dev              # Local development
npm run build            # Production build
npm run check-sitemap    # Check deployed sitemap
npm run check-sitemap:local   # Check localhost
```

---

## Key Differences from ing-heng

### Fixed 404 Issues

| Problem | Solution |
|---------|----------|
| Manual sitemap updates | Auto-generated from content collections |
| No slug tracking | SLUG_MANIFEST.json single source of truth |
| 404s not detected | Playwright auto-checks all links |
| Broken links ignored | GitHub Action creates issues on failure |

### Architecture Improvements

1. **Auto-Sitemap Generation** - Never manual, always current
2. **Slug Manifest** - Track all URLs in one place
3. **GitHub Action CI/CD** - Auto-test after every deployment
4. **Critical Checkpoints** - Abort build if any 404 found
5. **D/A/F Workflow** - Human review before publication

---

## Business Model

### Revenue Model (Competitive Advantage)

**Flat Fee Pricing:**
- 1 Room: RM200/month
- 2 Rooms: RM250/month
- 3 Rooms: RM300/month

**vs Competitors (20% fee):**
- For RM2.5k average rent
- Competitor: ~RM500/month
- iHousing: RM200-300/month
- **Monthly Savings: RM200-300**
- **Annual Savings: ~RM2,400-3,600**

### Target Audience (B2B)

1. **New Investors** - Looking to buy property for Airbnb
2. **Existing Owners** - Want to convert house to Airbnb
3. **Current Hosts** - Need professional management
4. **Portfolio Owners** - Multiple properties

### Services Offered

1. Renovation & Setup
2. Listing Creation
3. Full Management
4. Revenue Optimization

---

## Content Strategy

### Blog Categories

1. **Investment Guides** (`/invest/`)
   - How to buy property for Airbnb
   - ROI calculations
   - Financing options
   - Melaka location analysis

2. **Renovation Tips** (`/renovation/`)
   - Step-by-step conversion guides
   - Cost estimates
   - Before/after examples

3. **Comparisons** (`/compare/`)
   - Airbnb vs long-term rental
   - Self-managed vs professional
   - iHousing vs competitors

### Parkland Avenue (Special Project)

**Official Airbnb Manager** for new development launching August 2025

5 pages × 3 languages:
1. Main landing page
2. Investment guide
3. Floor plans
4. ROI calculator
5. Pre-register (WhatsApp form)

---

## URL Structure

### Blog Articles
```
/invest/how-to-buy-property-melaka-airbnb
/renovation/checklist-airbnb-conversion
/compare/airbnb-vs-long-term-rental
```

### Parkland Avenue
```
/parkland-avenue-by-the-sea                    (Main)
/parkland/investment-guide                       (Details)
/parkland/floor-plans                          (Unit types)
/parkland/roi-calculator                        (Calculator)
/parkland/pre-register                          (Lead capture)
```

---

## Quick Start Commands

```bash
# 1. Onboard client
/onboard-client ihousing

# 2. Generate content
/generate-daily-blogs ihousing

# 3. Review content
/review-quality ihousing

# 4. Publish approved content
/publish-approved ihousing

# 5. Local development
cd clients/ihousing/website
npm install
npm run dev

# 6. Check sitemap (local)
npm run check-sitemap:local

# 7. Check sitemap (production)
npm run check-sitemap:prod
```

---

## Deployment Workflow

```bash
# DEPLOY ENGLISH (EN)
cd clients/ihousing/website
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://en.ihousing-temp.vercel.app \
  --env SITE_URL=https://en.ihousing-temp.vercel.app

# DEPLOY MALAY (MS)
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://ms.ihousing-temp.vercel.app \
  --env SITE_URL=https://ms.ihousing-temp.vercel.app

# DEPLOY CHINESE (ZH)
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://zh.ihousing-temp.vercel.app \
  --env SITE_URL=https://zh.ihousing-temp.vercel.app
```

After each deployment:
- GitHub Action auto-runs sitemap check
- If 404s found, creates GitHub issue
- Deploy continues ONLY if all links pass

---

## Next Steps

1. **Run `/onboard-client ihousing`** - Generate keyword research, personas, brief
2. **Review drafts in D/ folders**
3. **Approve good content (move to A/)**
4. **Run `/finalize-client ihousing`** - Activate production setup
5. **Start content creation** - Investment guides, renovation tips
6. **Build Parkland Avenue pages** - Pre-launch marketing
7. **Deploy** - Set up Vercel projects
8. **Monitor** - Watch GitHub Actions for sitemap check results

---

## Critical Reminders

### When Creating a Page:
1. ✅ Define slug in frontmatter
2. ✅ Add to SLUG_MANIFEST.json
3. ✅ Run `npm run build`
4. ✅ Run `npm run check-sitemap`
5. ✅ Deploy
6. ✅ Verify GitHub Action passes

### When Deleting a Page:
1. ✅ Remove from SLUG_MANIFEST.json
2. ✅ Delete the file
3. ✅ Update internal links
4. ✅ Run `npm run build`
5. ✅ Run `npm run check-sitemap`
6. ✅ Deploy
7. ✅ Verify GitHub Action passes

### NEVER:
- ❌ Skip SLUG_MANIFEST.json update
- ❌ Deploy without sitemap check
- ❌ Ignore 404 errors
- ❌ Delete pages without updating sitemap

---

**Remember: ZERO 404s is our goal. Every page change = update SLUG_MANIFEST.json + run sitemap check.**
