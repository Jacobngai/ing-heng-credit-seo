# iHousing Website Structure Plan

**Created:** 2026-01-23
**Purpose:** Define the complete site architecture, navigation menus, and page hierarchy

---

## Business Context

**iHousing** = Airbnb property management company in Melaka
**Target Audience** = Property owners (investors, landlords, first-time hosts)
**USP** = Flat fee pricing (RM200-300/month) vs competitors' 20% commission
**Special Project** = Parkland Avenue by the Sea (Official Airbnb Manager)

---

## Primary Navigation Structure

```
LOGO                                                    [WhatsApp Button]

Home | Services ▼ | Properties We Manage ▼ | Blog ▼ | About | Contact
```

---

## Menu Breakdown

### 1. HOME (`/en/`)
Main landing page with:
- Hero: "Melaka's #1 Airbnb Management - Flat Fee, Not Commission"
- Quick stats: 100+ properties, 8 years experience, 5 platforms
- Service overview cards
- Featured: Parkland Avenue special project
- Testimonials/Social proof
- Final CTA

---

### 2. SERVICES (Dropdown)

```
Services ▼
├── Full Management (/en/services/full-management/)
│   └── Everything included - guest handling, cleaning, maintenance
│
├── Listing Setup Only (/en/services/listing-setup/)
│   └── One-time setup for DIY hosts
│
├── Renovation & Furnishing (/en/services/renovation/)
│   └── Convert empty unit to Airbnb-ready
│
├── Pricing (/en/services/pricing/)
│   └── Transparent pricing page with calculator
│
└── How It Works (/en/services/how-it-works/)
    └── Step-by-step process explanation
```

**Service Pages Content Strategy:**
- Each service page = mini landing page
- Problem → Solution → Why Us → Pricing → CTA
- Internal links to relevant blog posts

---

### 3. PROPERTIES WE MANAGE (Dropdown)

```
Properties We Manage ▼
│
├── ⭐ Parkland Avenue by the Sea (/en/parkland/avenue-by-the-sea/)
│   └── [FEATURED - Official Airbnb Manager Badge]
│   └── Sub-pages:
│       ├── Investment Guide (/en/parkland/investment-guide/)
│       ├── Floor Plans (/en/parkland/floor-plans/)
│       ├── ROI Calculator (/en/parkland/roi-calculator/)
│       └── Pre-Register (/en/parkland/pre-register/)
│
├── ─────────────── [Divider] ───────────────
│
├── Switch to Us (Header - not clickable)
│   ├── Silverscape Residence (/en/switch-to-us/silverscape-residence/)
│   ├── The Shore Residence (/en/switch-to-us/the-shore-residence/)
│   ├── Imperio Residence (/en/switch-to-us/imperio-residence/)
│   ├── Ong Kim Wee Residence (/en/switch-to-us/ong-kim-wee-residence/)
│   ├── Novo 8 Residence (/en/switch-to-us/novo-8-residence/)
│   ├── Century Mahkota (/en/switch-to-us/century-mahkota/)
│   ├── Wave Residence (/en/switch-to-us/wave-residence/)
│   ├── Quartz Residence (/en/switch-to-us/quartz-residence/)
│   ├── Atlantis Residence (/en/switch-to-us/atlantis-residence/)
│   └── Parkland Residence (/en/switch-to-us/parkland-residence/)
│
└── View All Properties (/en/properties/)
    └── Grid of all managed condos with filters
```

---

### 4. BLOG (Mega Menu)

```
Blog ▼
│
├── 📈 Investment Guides
│   ├── Latest: [Dynamic - pulls latest post]
│   ├── How to Buy Property for Airbnb
│   ├── Melaka Property Investment Guide
│   └── View All Investment Articles →
│
├── 🏠 Airbnb Hosting Tips
│   ├── Latest: [Dynamic]
│   ├── How to Start Airbnb in Malaysia
│   ├── Pricing Strategies for Maximum Bookings
│   └── View All Hosting Tips →
│
├── 🔄 Switching Managers
│   ├── Latest: [Dynamic]
│   ├── Signs Your Manager Isn't Working
│   ├── How to Switch Without Losing Bookings
│   └── View All Switching Guides →
│
├── 📊 Market Insights
│   ├── Latest: [Dynamic]
│   ├── Melaka Tourism Trends 2025
│   ├── Best Areas for Airbnb in Melaka
│   └── View All Market Reports →
│
└── 📚 All Articles (/en/blog/)
    └── Full blog archive with categories & search
```

---

### 5. ABOUT (`/en/about/`)
- Company story
- Team (optional)
- Why we charge flat fee
- Our properties portfolio
- Press/media mentions

---

### 6. CONTACT (`/en/contact/`)
- WhatsApp as primary CTA
- Contact form (feeds to WhatsApp)
- Office location (if applicable)
- FAQ section

---

## Blog Category Structure

```
/en/blog/
├── /investment/          - Property investment guides
├── /hosting-tips/        - Airbnb hosting how-tos
├── /switching/           - Switching manager guides
├── /market-insights/     - Melaka tourism & market data
├── /comparisons/         - vs competitors, vs long-term rental
├── /case-studies/        - Success stories (anonymized)
└── /news/                - Company updates, industry news
```

---

## URL Structure Convention

```
/{locale}/{section}/{category}/{slug}/

Examples:
/en/blog/investment/how-to-buy-property-melaka-airbnb/
/en/blog/hosting-tips/pricing-strategies-maximum-bookings/
/en/services/full-management/
/en/switch-to-us/silverscape-residence/
```

---

## Mobile Navigation

```
[Hamburger Menu]

├── Home
├── Services
│   └── [Expandable accordion]
├── Properties
│   └── [Expandable accordion]
├── Blog
│   └── [Expandable accordion]
├── About
├── Contact
│
└── [Sticky WhatsApp Button at bottom]
```

---

## Footer Structure

```
─────────────────────────────────────────────────────────
LOGO                              [WhatsApp] [Facebook]

SERVICES              PROPERTIES           RESOURCES
• Full Management     • Parkland Avenue    • Blog
• Listing Setup       • Silverscape        • Investment Guide
• Renovation          • The Shore          • Pricing
• Pricing             • Imperio            • FAQ
                      • View All

COMPANY               CONTACT
• About Us            • WhatsApp Us
• Why Flat Fee?       • Email
• Careers             • Office Location

─────────────────────────────────────────────────────────
© 2025 iHousing. All rights reserved.
Privacy Policy | Terms of Service
─────────────────────────────────────────────────────────
```

---

## Internal Linking Strategy

### From Blog Posts:
- Every blog post links to at least 2 other blog posts
- Every blog post has CTA to relevant service page
- Investment posts → link to Parkland Avenue
- Switching posts → link to Switch to Us pages

### From Service Pages:
- Link to supporting blog posts
- Link to relevant property pages
- Cross-link between services

### From Property Pages:
- Link to pricing page
- Link to "How It Works"
- Link to relevant blog posts about that area/condo

---

## SEO Hierarchy (H1 Structure)

```
Homepage:        "Melaka Airbnb Management - Flat Fee Property Management"
Services:        "Airbnb [Service Name] in Melaka"
Property Pages:  "[Condo Name] Airbnb Management | Switch to iHousing"
Blog Posts:      [SEO-optimized title based on keyword research]
```

---

## Priority Pages to Build

### Phase 1 - Core Pages (Immediate)
1. ✅ Switch to Us pages (10 condos) - DONE
2. ⬜ Homepage
3. ⬜ Services overview page
4. ⬜ Pricing page
5. ⬜ Contact page

### Phase 2 - Blog Foundation
6. ⬜ Blog index page
7. ⬜ Category landing pages (4)
8. ⬜ First 10 blog posts (see BLOG-CONTENT-PLAN.md)

### Phase 3 - Expansion
9. ⬜ Individual service pages
10. ⬜ About page
11. ⬜ Additional blog posts (ongoing)

### Phase 4 - Localization
12. ⬜ Chinese (zh) translations
13. ⬜ Malay (ms) translations

---

## Technical Notes

### Astro Content Collections
```
/src/content/
├── blog/
│   ├── investment/
│   │   └── *.md
│   ├── hosting-tips/
│   │   └── *.md
│   └── ...
└── config.ts
```

### Dynamic Routes
```
/src/pages/en/blog/[...slug].astro  - Individual blog posts
/src/pages/en/blog/index.astro      - Blog listing
/src/pages/en/blog/[category]/index.astro - Category pages
```

---

## Next Steps

1. Review and approve this structure
2. Create BLOG-CONTENT-PLAN.md with 100 headlines
3. Build homepage
4. Set up blog content collection
5. Start writing blog posts

