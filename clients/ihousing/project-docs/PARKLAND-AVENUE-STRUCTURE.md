# Parkland Avenue by the Sea - Page Structure

**Project:** Parkland Avenue by the Sea
**Role:** Official Airbnb Manager
**Launch:** August 2025
**Status:** Pre-launch marketing (start now)

---

## URL Structure

```
/parkland-avenue-by-the-sea/           (EN - Main landing page)
/zh/parkland-avenue-by-the-sea/        (ZH - Main landing page)
/ms/parkland-avenue-by-the-sea/         (MS - Main landing page)

/parkland/investment-guide/              (Investment details - EN)
/zh/parkland/investment-guide/           (Investment details - ZH)
/ms/parkland/investment-guide/            (Investment details - MS)

/parkland/floor-plans/                 (Unit types - EN)
/zh/parkland/floor-plans/              (Unit types - ZH)
/ms/parkland/floor-plans/               (Unit types - MS)

/parkland/roi-calculator/               (Returns calculator - EN)
/zh/parkland/roi-calculator/            (Returns calculator - ZH)
/ms/parkland/roi-calculator/             (Returns calculator - MS)

/parkland/pre-register/                  (Lead capture - EN)
/zh/parkland/pre-register/               (Lead capture - ZH)
/ms/parkland/pre-register/               (Lead capture - MS)
```

---

## Page Content Guidelines

### 1. Main Landing Page (/parkland-avenue-by-the-sea)

**Hero Section:**
- Headline: "Parkland Avenue by the Sea - Official Airbnb Manager"
- Subheadline: "Invest in Melaka's Premier Oceanfront Condo"
- CTA: "Pre-Register Now" (links to pre-register)

**Key Points:**
- Official Airbnb Manager badge
- Launch: August 2025
- Oceanfront location in Melaka
- Managed by iHousing (100+ properties experience)

**Why Parkland Avenue:**
- Prime location (minutes from Melaka attractions)
- Oceanfront views
- High rental demand
- Professional management included

**Investment Overview:**
- Starting price range
- Expected ROI
- iHousing management fee: RM200-300/month (flat)
- Competitor comparison savings

---

### 2. Investment Guide (/parkland/investment-guide)

**Sections:**
- Why invest in Parkland Avenue?
- Melaka tourism statistics
- Project details (developer, location)
- Unit types available
- Expected rental income
- Break-even analysis

**Key Data Points:**
- Average Airbnb occupancy in Melaka
- Average nightly rate
- Annual rental yield calculation
- Management fee vs. traditional alternatives

**Comparison:**
```
Traditional Management (20% fee):  RM2,500/month
iHousing (Flat Fee):           RM200-300/month
MONTHLY SAVINGS:             ~RM2,200-2,300
ANNUAL SAVINGS:               ~RM26,000-27,600
```

---

### 3. Floor Plans (/parkland/floor-plans)

**Unit Types:**
- Studio
- 1 Bedroom
- 2 Bedroom
- 3 Bedroom

**For each unit type:**
- Floor plan image
- Square footage
- Best for (e.g., couples, families, investment focus)
- Expected rental income
- Pre-register CTA

---

### 4. ROI Calculator (/parkland/roi-calculator)

**Calculator Inputs:**
- Unit type (dropdown)
- Purchase price
- Down payment (%)
- Loan interest rate
- Loan tenure (years)
- Expected occupancy rate (%)

**Calculator Outputs:**
- Monthly mortgage payment
- Monthly Airbnb income (estimated)
- Monthly management fee (RM200-300 based on unit type)
- Monthly net income
- Annual net income
- ROI percentage
- Break-even point (years)

**Formula:**
```
Monthly Net Income = Monthly Airbnb Income - Mortgage Payment - Management Fee
Annual Net Income = Monthly Net Income × 12
ROI % = (Annual Net Income / Down Payment) × 100
```

---

### 5. Pre-Register (/parkland/pre-register)

**Form Fields:**
- Name (required)
- Phone Number (required) - WhatsApp integration
- Email (optional)
- Unit Type Interest (dropdown: Studio, 1BR, 2BR, 3BR)
- Investment Timeline (dropdown: Immediate, 6 months, 1 year)

**Form Submission Flow:**
1. User submits form
2. Backend validates phone number
3. Evolution API sends WhatsApp message
4. Follow-up message includes:
   - Parkland Avenue brochure
   - ROI estimate based on their interest
   - Next steps

**WhatsApp Message Template:**
```
Hi [Name],

Thanks for pre-registering interest in Parkland Avenue by the Sea!

📋 Your Details:
- Unit Type: [Studio/1BR/2BR/3BR]
- Timeline: [Immediate/6 months/1 year]

💰 Quick Estimate:
- Expected Rental: RM[xxx]/night
- Monthly Income: RM[xxx]
- Our Management Fee: RM[xxx]/month (flat!)

Our team will WhatsApp you within 24 hours with more details.

Best regards,
iHousing Team | Official Airbnb Manager
📞 +60166996688
```

---

## SEO Strategy (Parkland Avenue)

### Keywords to Target:
- "Parkland Avenue Melaka"
- "Parkland Avenue by the Sea"
- "Melaka condo investment"
- "Airbnb property Melaka"
- "Oceanfront condo Melaka"
- "Buy property for Airbnb Malaysia"
- "Property management flat fee"

### Priority: 0.95 (Highest after homepage)

### Internal Linking:
- Link to Investment Guides (/invest/)
- Link to Renovation Tips (/renovation/)
- Link to About page (iHousing credibility)
- Link to Contact page (alternative lead capture)

---

## SLUG_MANIFEST.json Updates

When creating Parkland pages, add to SLUG_MANIFEST.json:

```json
{
  "parkland": {
    "en": [
      {
        "slug": "parkland-avenue-by-the-sea",
        "title": "Parkland Avenue by the Sea - Official Airbnb Manager",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      },
      {
        "slug": "parkland/investment-guide",
        "title": "Parkland Avenue Investment Guide 2025",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      },
      {
        "slug": "parkland/floor-plans",
        "title": "Parkland Avenue Floor Plans & Unit Types",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      },
      {
        "slug": "parkland/roi-calculator",
        "title": "Parkland Avenue ROI Calculator - Airbnb Investment Returns",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      },
      {
        "slug": "parkland/pre-register",
        "title": "Pre-Register for Parkland Avenue by the Sea",
        "category": "parkland",
        "publishedAt": "2026-01-22",
        "updatedAt": "2026-01-22"
      }
    ],
    "zh": [...],
    "ms": [...]
  }
}
```

---

## Timeline

| Date | Milestone |
|-------|----------|
| Now | Start Parkland Avenue content creation |
| Feb 2025 | Complete EN pages |
| Feb 2025 | Translate to ZH and MS |
| Mar 2025 | ROI calculator implementation |
| Apr 2025 | SEO optimization and backlink building |
| Jun 2025 | Pre-launch marketing campaign |
| Aug 2025 | Official launch of Parkland Avenue |

---

## Important Notes

1. **Official Airbnb Manager Badge** - Display prominently on all Parkland pages
2. **Flat Fee Highlight** - Show RM200-300 savings vs competitors throughout
3. **WhatsApp Integration** - Pre-register form uses Evolution API
4. **Multi-language** - All 5 pages in EN, ZH, MS (15 pages total)
5. **Internal Links** - Link to main iHousing content categories
6. **Pre-launch Focus** - Build anticipation before August launch
