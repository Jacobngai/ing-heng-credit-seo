# QA AUDIT REPORT: Ing Heng Credit Website
## Test-Driven Development Gap Analysis

**Audit Date:** 2025-10-11
**Auditor:** Claude Code QA Specialist
**Project:** Ing Heng Credit & Leasing Website Rebuild
**Repository:** ING HENG CREDIT/website

---

## Executive Summary

This audit compares the **original website** (https://inghengcredit.com/) against the **new implementation** to identify gaps in page coverage, multilingual support, and SEO requirements.

**Key Findings:**
- Current Implementation: **12 pages** across 3 languages
- Required Pages (based on old site): **24+ pages** (8 page types × 3 languages)
- **Missing Critical Pages:** 50% of required pages not yet created
- **Multilingual Coverage:** Incomplete - some pages missing language versions

---

## 1. Current Navigation Requirements

### NAV_LINKS Configuration
From `website/src/utils/constants.ts`:

```typescript
NAV_LINKS = [
  { href: '/', label: 'nav.home' },
  { href: '/about', label: 'nav.about' },
  { href: '/services', label: 'nav.services' },
  { href: '/equipment', label: 'nav.equipment' },
  { href: '/blog', label: 'nav.blog' },
  { href: '/contact', label: 'nav.contact' },
]
```

**Menu Structure:** 6 primary navigation items
**Expected Total Routes:** Minimum 18 routes (6 × 3 languages)

---

## 2. Old Website Structure Analysis

### Original Menu Items (from https://inghengcredit.com/)
1. **HOME** - Homepage with company overview
2. **ABOUT** - Company history, licensing (KPKT), since 1985
3. **HIRE PURCHASE FINANCING** - Main service offering
4. **LOAN FINANCING** - Business/personal loans
5. **INSURANCE SERVICE** - Insurance products
6. **FINANCING TYPE & PHOTO** - Equipment gallery/catalog
7. **FAQ** - Frequently asked questions
8. **CONTACT** - Contact form and information

### Key Services Identified:
- Business Loan
- Hire Purchase
- Hawker Loan
- SME Loan
- Personal Loan

### Loan Purposes:
- Education
- House Renovation
- Travelling
- Business Capital
- Wedding
- Others

---

## 3. Current Implementation Status

### Total Pages: **12 Astro Files**

#### 3.1 Pages That EXIST ✅

| Page Path | Language | Status | Priority |
|-----------|----------|--------|----------|
| `/index.astro` | Redirect | ✅ Complete | Critical |
| `/en/index.astro` | English | ✅ Complete | Critical |
| `/zh/index.astro` | Mandarin | ✅ Complete | Critical |
| `/ms/index.astro` | Malay | ✅ Complete | Critical |
| `/en/about.astro` | English | ✅ Complete | High |
| `/en/contact.astro` | English | ✅ Complete | High |
| `/en/services/hire-purchase.astro` | English | ✅ Complete | High |
| `/zh/services/hire-purchase.astro` | Mandarin | ✅ Complete | High |
| `/ms/services/hire-purchase.astro` | Malay | ✅ Complete | High |
| `/en/equipment/excavator.astro` | English | ✅ Complete | Medium |
| `/zh/equipment/excavator.astro` | Mandarin | ✅ Complete | Medium |

**Count:** 11 functional pages (12 files including root redirect)

---

## 4. Pages MISSING ❌

### 4.1 Critical Missing Pages (Priority: HIGH)

#### About Pages (2 missing)
- ❌ `/zh/about.astro` - Mandarin About Page
- ❌ `/ms/about.astro` - Malay About Page

**Impact:** Breaks multilingual navigation, poor UX for Chinese/Malay speakers

---

#### Contact Pages (2 missing)
- ❌ `/zh/contact.astro` - Mandarin Contact Page
- ❌ `/ms/contact.astro` - Malay Contact Page

**Impact:** Critical - users cannot contact company in their language

---

#### Services Overview Pages (3 missing)
- ❌ `/en/services/index.astro` - English Services Hub
- ❌ `/zh/services/index.astro` - Mandarin Services Hub
- ❌ `/ms/services/index.astro` - Malay Services Hub

**Impact:** Broken NAV_LINKS `/services` route - 404 error

---

#### Equipment Overview Pages (3 missing)
- ❌ `/en/equipment/index.astro` - English Equipment Hub
- ❌ `/zh/equipment/index.astro` - Mandarin Equipment Hub
- ❌ `/ms/equipment/index.astro` - Malay Equipment Hub

**Impact:** Broken NAV_LINKS `/equipment` route - 404 error

---

### 4.2 Important Missing Pages (Priority: MEDIUM)

#### FAQ Pages (3 missing)
- ❌ `/en/faq.astro` - English FAQ
- ❌ `/zh/faq.astro` - Mandarin FAQ
- ❌ `/ms/faq.astro` - Malay FAQ

**Impact:** Old website has FAQ menu item - expected feature missing

---

#### Blog Index Pages (3 missing)
- ❌ `/en/blog/index.astro` - English Blog Hub
- ❌ `/zh/blog/index.astro` - Mandarin Blog Hub
- ❌ `/ms/blog/index.astro` - Malay Blog Hub

**Impact:** NAV_LINKS has `/blog` route but no content, no blogs exist in `/content/blogs/`

---

#### Additional Service Pages (6 missing)
Based on old website and homepage ProductCard links:

**Loan Financing:**
- ❌ `/en/services/loan-financing.astro`
- ❌ `/zh/services/loan-financing.astro`
- ❌ `/ms/services/loan-financing.astro`

**Insurance Service:**
- ❌ `/en/services/insurance.astro`
- ❌ `/zh/services/insurance.astro`
- ❌ `/ms/services/insurance.astro`

**Impact:** Homepage links to these services, but pages don't exist (404)

---

#### Product Pages (15 missing)
Based on homepage ProductCard components that link to non-existent pages:

**Business Loan:**
- ❌ `/en/products/business-loan.astro`
- ❌ `/zh/products/business-loan.astro`
- ❌ `/ms/products/business-loan.astro`

**Hire Purchase:**
- ❌ `/en/products/hire-purchase.astro`
- ❌ `/zh/products/hire-purchase.astro`
- ❌ `/ms/products/hire-purchase.astro`

**Hawker Loan:**
- ❌ `/en/products/hawker-loan.astro`
- ❌ `/zh/products/hawker-loan.astro`
- ❌ `/ms/products/hawker-loan.astro`

**SME Loan:**
- ❌ `/en/products/sme-loan.astro`
- ❌ `/zh/products/sme-loan.astro`
- ❌ `/ms/products/sme-loan.astro`

**Personal Loan:**
- ❌ `/en/products/personal-loan.astro`
- ❌ `/zh/products/personal-loan.astro`
- ❌ `/ms/products/personal-loan.astro`

**Impact:** Homepage actively links to these - user clicks lead to 404 errors

---

#### Equipment Landing Pages (2 missing)
Only Excavator exists, but homepage implies more:

- ❌ `/ms/equipment/excavator.astro` - Malay Excavator Page
- ❌ Additional equipment pages (Lorry, Forklift, Bulldozer, etc.)

**Impact:** Incomplete equipment catalog, inconsistent language coverage

---

#### Utility Pages (3 missing)
Found in homepage CTAs:

**Calculator:**
- ❌ `/en/calculator.astro` - Monthly Payment Calculator
- ❌ `/zh/calculator.astro`
- ❌ `/ms/calculator.astro`

**Impact:** Homepage CTA button links to `/en/calculator` - broken link

---

### 4.3 SEO & Content Pages (Priority: LOW-MEDIUM)

#### Financing Type & Photo Gallery
Old website has "FINANCING TYPE & PHOTO" menu item:
- ❌ `/en/gallery.astro` or `/en/equipment-gallery.astro`
- ❌ `/zh/gallery.astro`
- ❌ `/ms/gallery.astro`

---

#### Legal Pages (6 missing)
Footer links reference these:
- ❌ `/en/privacy-policy.astro`
- ❌ `/en/terms-of-service.astro`
- ❌ `/zh/privacy-policy.astro`
- ❌ `/zh/terms-of-service.astro`
- ❌ `/ms/privacy-policy.astro`
- ❌ `/ms/terms-of-service.astro`

**Impact:** Footer links will 404, potential legal compliance issue

---

## 5. Page Count Summary

| Category | Required | Implemented | Missing | % Complete |
|----------|----------|-------------|---------|------------|
| **Home Pages** | 4 (3 lang + redirect) | 4 | 0 | 100% ✅ |
| **About Pages** | 3 | 1 | 2 | 33% |
| **Contact Pages** | 3 | 1 | 2 | 33% |
| **Services Hub** | 3 | 0 | 3 | 0% ❌ |
| **Services Pages** | 9 (3 services × 3 lang) | 3 | 6 | 33% |
| **Equipment Hub** | 3 | 0 | 3 | 0% ❌ |
| **Equipment Pages** | 3+ | 2 | 1+ | 67% |
| **Product Pages** | 15 (5 products × 3 lang) | 0 | 15 | 0% ❌ |
| **Blog Pages** | 3 | 0 | 3 | 0% ❌ |
| **FAQ Pages** | 3 | 0 | 3 | 0% ❌ |
| **Calculator** | 3 | 0 | 3 | 0% ❌ |
| **Gallery/Photos** | 3 | 0 | 3 | 0% ❌ |
| **Legal Pages** | 6 | 0 | 6 | 0% ❌ |
| **TOTAL** | **60+** | **11** | **49+** | **18%** |

---

## 6. Multilingual Coverage Analysis

| Page Type | EN | ZH | MS | Notes |
|-----------|----|----|----|----|
| Home | ✅ | ✅ | ✅ | Complete |
| About | ✅ | ❌ | ❌ | English only |
| Contact | ✅ | ❌ | ❌ | English only |
| Services Hub | ❌ | ❌ | ❌ | Missing entirely |
| Hire Purchase | ✅ | ✅ | ✅ | Complete |
| Loan Financing | ❌ | ❌ | ❌ | Missing entirely |
| Insurance | ❌ | ❌ | ❌ | Missing entirely |
| Equipment Hub | ❌ | ❌ | ❌ | Missing entirely |
| Excavator | ✅ | ✅ | ❌ | Malay missing |
| Blog Hub | ❌ | ❌ | ❌ | Missing entirely |
| FAQ | ❌ | ❌ | ❌ | Missing entirely |
| Products | ❌ | ❌ | ❌ | Missing entirely |
| Calculator | ❌ | ❌ | ❌ | Missing entirely |

**Observation:** Multilingual strategy is incomplete. Only 4 out of 13 page types have full EN/ZH/MS coverage.

---

## 7. SEO Issues Found

### 7.1 Broken Internal Links

**On Homepage (`/en/index.astro`):**

```astro
<!-- Line 105: Services Section -->
<ServiceCard link="/en/services/hire-purchase" /> ✅ EXISTS
<ServiceCard link="/en/services/loan-financing" /> ❌ 404 ERROR
<ServiceCard link="/en/services/insurance" /> ❌ 404 ERROR

<!-- Lines 181-211: Products Section -->
<ProductCard link="/en/products/business-loan" /> ❌ 404 ERROR
<ProductCard link="/en/products/hire-purchase" /> ❌ 404 ERROR
<ProductCard link="/en/products/hawker-loan" /> ❌ 404 ERROR
<ProductCard link="/en/products/sme-loan" /> ❌ 404 ERROR
<ProductCard link="/en/products/personal-loan" /> ❌ 404 ERROR

<!-- Line 339: CTA Section -->
<CTAButton link="/en/calculator" /> ❌ 404 ERROR
```

**Critical:** 7 out of 8 major CTA links on the homepage lead to 404 errors!

---

### 7.2 Navigation Menu Issues

From `NAV_LINKS` in constants.ts:

```typescript
{ href: '/services', label: 'nav.services' } // ❌ No /services/index.astro
{ href: '/equipment', label: 'nav.equipment' } // ❌ No /equipment/index.astro
{ href: '/blog', label: 'nav.blog' } // ❌ No /blog/index.astro
```

**Impact:** 50% of main navigation links (3 out of 6) result in 404 errors.

---

### 7.3 Missing Hreflang Implementation

Pages with language versions need hreflang tags:

**Example - Hire Purchase page exists in all 3 languages:**
- `/en/services/hire-purchase.astro` ✅
- `/zh/services/hire-purchase.astro` ✅
- `/ms/services/hire-purchase.astro` ✅

**Issue:** Need to verify these pages have proper `<link rel="alternate" hreflang>` tags for SEO.

---

### 7.4 Content Collections Empty

**Blog Collection:**
- Directory exists: `website/src/content/blogs/en/`, `/zh/`, `/ms/`
- Content: **0 blog posts**
- Schema defined: ✅ Yes in `config.ts`
- Blog index pages: ❌ Missing

**Equipment Collection:**
- Directory: Not found
- Content: **1 equipment page** (Excavator only, hard-coded)
- Schema defined: ✅ Yes in `config.ts`

**Landing Pages Collection:**
- Directory: Not found
- Content: **0 landing pages**
- Schema defined: ✅ Yes in `config.ts`

**Impact:** Content strategy infrastructure exists but no content created.

---

### 7.5 Schema Markup Issues

**Current Status:**
- Organization Schema: ✅ Implemented (via `generateOrganizationSchema()`)
- FAQ Schema: ⚠️ Defined in blog schema but no blogs exist
- Product Schema: ⚠️ Defined but no product pages use it

---

## 8. Recommendations

### 8.1 Immediate Actions (Priority: CRITICAL)

1. **Fix Navigation 404s**
   - Create `/en/services/index.astro`, `/zh/`, `/ms/`
   - Create `/en/equipment/index.astro`, `/zh/`, `/ms/`
   - Create `/en/blog/index.astro`, `/zh/`, `/ms/`

2. **Fix Homepage Broken Links**
   - Create all 5 product pages × 3 languages (15 pages total)
   - Create Loan Financing service page × 3 languages
   - Create Insurance service page × 3 languages
   - Create Calculator page × 3 languages

3. **Complete Multilingual Coverage**
   - Add `/zh/about.astro`, `/ms/about.astro`
   - Add `/zh/contact.astro`, `/ms/contact.astro`
   - Add `/ms/equipment/excavator.astro`

**Total Immediate Pages Needed:** 33 pages

---

### 8.2 Short-Term Actions (Priority: HIGH)

1. **Add FAQ Pages**
   - Based on old website, FAQ is a key feature
   - Create `/en/faq.astro`, `/zh/faq.astro`, `/ms/faq.astro`
   - Include FAQ schema markup

2. **Expand Equipment Catalog**
   - Old website suggests multiple equipment types
   - Create landing pages for: Lorry, Forklift, Bulldozer, Road Roller, etc.
   - Maintain 3-language coverage per equipment

3. **Create Initial Blog Content**
   - Content collections configured but empty
   - Create 3-5 blog posts per language (9-15 total)
   - Focus on SEO keywords: excavator financing, lorry financing, hire purchase Malaysia

---

### 8.3 Medium-Term Actions (Priority: MEDIUM)

1. **Add Equipment Gallery/Photos Page**
   - Old website has "FINANCING TYPE & PHOTO" menu item
   - Create visual showcase of financed equipment
   - Include before/after examples, customer equipment

2. **Expand Service Pages**
   - Add detailed service pages for each offering
   - Include process flows, requirements, benefits
   - Use StepCard components (already exists in codebase)

3. **Create Legal Pages**
   - Privacy Policy
   - Terms of Service
   - Cookie Policy (if applicable)
   - Ensure PDPA compliance (Malaysia)

---

### 8.4 Menu Structure Recommendation

**Proposed Navigation (aligned with old website + new strategy):**

```
HOME
ABOUT US
SERVICES ▼
  ├─ Hire Purchase Financing
  ├─ Loan Financing
  ├─ Insurance Service
  └─ All Services (overview)
EQUIPMENT ▼
  ├─ Construction Equipment
  │   ├─ Excavators
  │   ├─ Bulldozers
  │   └─ Road Rollers
  ├─ Logistics Equipment
  │   ├─ Lorries
  │   └─ Forklifts
  └─ Equipment Gallery
RESOURCES ▼
  ├─ Blog
  ├─ FAQ
  └─ Calculator
CONTACT US
```

---

### 8.5 SEO Optimization Priorities

1. **Fix Broken Links** - Critical for SEO and UX
2. **Implement Hreflang Tags** - For multilingual SEO
3. **Create XML Sitemap** - Astro sitemap integration exists, verify output
4. **Add Structured Data** - Implement product schema on equipment pages
5. **Optimize Meta Tags** - Ensure all pages have unique titles/descriptions
6. **Internal Linking Strategy** - Connect related content across languages

---

## 9. Technical Debt Identified

### 9.1 Routing Issues
- NAV_LINKS references routes that don't exist
- Homepage CTAs link to non-existent pages
- No fallback/404 handling for missing language versions

### 9.2 Content Architecture
- Content collections defined but unused
- No blog content despite blog infrastructure
- Equipment pages hard-coded instead of using collections

### 9.3 Multilingual Gaps
- Inconsistent language coverage across pages
- Missing hreflang implementation plan
- No language switcher component visible in audit

---

## 10. Testing Checklist

### Navigation Testing
- [ ] All NAV_LINKS routes resolve (no 404s)
- [ ] Language switcher works on all pages
- [ ] Mobile menu functionality (if applicable)

### Link Integrity
- [ ] All homepage CTAs go to valid pages
- [ ] All ServiceCard links work
- [ ] All ProductCard links work
- [ ] Footer links resolve

### Multilingual Testing
- [ ] Each page type exists in all 3 languages
- [ ] Hreflang tags correctly implemented
- [ ] Language-specific content (not just translations)
- [ ] Contact info consistent across languages

### SEO Testing
- [ ] All pages have unique meta titles
- [ ] All pages have meta descriptions
- [ ] Schema.org markup validates
- [ ] Sitemap includes all pages
- [ ] Robots.txt configured

---

## 11. Conclusion

**Current Status:** Early-stage implementation (18% complete)

**Critical Issues:**
1. **Navigation Broken** - 50% of menu items lead to 404
2. **Homepage Links Broken** - 87.5% of CTA links non-functional
3. **Multilingual Incomplete** - Only 30% language coverage
4. **No Content** - 0 blogs, limited equipment pages

**Recommended Next Steps:**
1. Create missing hub pages (Services, Equipment, Blog)
2. Build out all product pages (15 pages)
3. Complete multilingual coverage for existing pages
4. Add FAQ pages (high value, low effort)
5. Create initial blog content (SEO strategy)

**Estimated Work:**
- **Immediate (Week 1):** 33 critical pages
- **Short-term (Week 2-3):** 15-20 pages + content
- **Medium-term (Month 2):** Legal pages, expanded catalog, blog strategy

**Target Completion:** 60+ pages to match old website functionality + new multilingual SEO features.

---

## Appendix A: Page Creation Priority Matrix

| Priority | Page Type | Pages Needed | Est. Hours | Impact |
|----------|-----------|--------------|------------|--------|
| P0 - Critical | Services Hub | 3 | 6 | Fixes nav |
| P0 - Critical | Equipment Hub | 3 | 6 | Fixes nav |
| P0 - Critical | Blog Hub | 3 | 6 | Fixes nav |
| P0 - Critical | Product Pages | 15 | 30 | Fixes homepage |
| P1 - High | About (ZH/MS) | 2 | 4 | Multilingual |
| P1 - High | Contact (ZH/MS) | 2 | 4 | Multilingual |
| P1 - High | Loan Service | 3 | 9 | Homepage link |
| P1 - High | Insurance Service | 3 | 9 | Homepage link |
| P1 - High | Calculator | 3 | 12 | Homepage CTA |
| P2 - Medium | FAQ | 3 | 9 | Old site feature |
| P2 - Medium | Equipment Gallery | 3 | 12 | Old site feature |
| P2 - Medium | More Equipment | 6+ | 18+ | Catalog expansion |
| P3 - Low | Legal Pages | 6 | 12 | Compliance |

**Total Estimated Hours:** 137+ hours

---

## Appendix B: File Paths Reference

**Existing Pages:**
```
website/src/pages/
├── index.astro (redirect)
├── en/
│   ├── index.astro ✅
│   ├── about.astro ✅
│   ├── contact.astro ✅
│   ├── services/
│   │   └── hire-purchase.astro ✅
│   └── equipment/
│       └── excavator.astro ✅
├── zh/
│   ├── index.astro ✅
│   ├── services/
│   │   └── hire-purchase.astro ✅
│   └── equipment/
│       └── excavator.astro ✅
└── ms/
    ├── index.astro ✅
    └── services/
        └── hire-purchase.astro ✅
```

**Configuration Files:**
- `website/src/utils/constants.ts` - NAV_LINKS, COMPANY_INFO
- `website/src/content/config.ts` - Content collections schema
- `website/astro.config.mjs` - i18n routing config
- `website/src/i18n/en.json` - English translations

---

**End of Report**

**Generated by:** Claude Code QA Specialist
**Report Version:** 1.0
**Last Updated:** 2025-10-11
