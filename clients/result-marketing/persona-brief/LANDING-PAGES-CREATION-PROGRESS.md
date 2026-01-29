# Construction Industry Landing Pages - Creation Progress

**Started:** January 25, 2026
**Last Updated:** January 25, 2026
**Task:** Create category-based landing pages for construction industries with hover menu navigation

---

## Category Structure

### Main Categories (8 total)
1. Equipment Rental (7 sub-pages)
2. Material Suppliers (8 sub-pages)
3. Property Developers (3 sub-pages - SIMPLIFIED)
4. Sub-Contractors (7 sub-pages)
5. Professional Services (5 sub-pages)
6. CIDB & Regulatory (4 sub-pages)
7. Finance & Insurance (4 sub-pages)
8. Construction Technology (4 sub-pages)

**Total Pages:** 8 category pages + 42 sub-pages = **50 pages**

---

## Completion Status

### Phase 1: i18n Structure Update
- [DONE] Update i18n/en.json with category structure

### Phase 2: Create Main Category Pages

#### 3. Property Developers Category Page
- [DONE] `/en/industries/construction/property-developers/`

#### 2. Material Suppliers Category Page
- [ ] `/en/industries/construction/material-suppliers/`

#### 3. Property Developers Category Page
- [ ] `/en/industries/construction/property-developers/`

#### 4. Sub-Contractors Category Page
- [ ] `/en/industries/construction/subcontractors/`

#### 5. Professional Services Category Page
- [ ] `/en/industries/construction/professional-services/`

#### 6. CIDB & Regulatory Category Page
- [ ] `/en/industries/construction/cidb-regulatory/`

#### 7. Finance & Insurance Category Page
- [ ] `/en/industries/construction/finance-insurance/`

#### 8. Construction Technology Category Page
- [ ] `/en/industries/construction/construction-technology/`

### Phase 3: Create Sub-Pages (Property Developers - Priority)

#### Property Developers Sub-Pages (3)
- [DONE] `/en/industries/construction/property-developers/pocket-factory/`
- [DONE] `/en/industries/construction/property-developers/shoplot/`
- [DONE] `/en/industries/construction/property-developers/residential/`

### Phase 4: Create Sub-Pages (Other Categories)

#### Equipment Rental Sub-Pages (7)
- [ ] Forklift Rental (EXISTS - best-marketing-for-forklift-rental.astro)
- [ ] Lorry Rental
- [ ] Excavator Rental
- [ ] Crane Rental
- [ ] Bulldozer Rental
- [ ] Generator Rental
- [ ] Scaffolding Rental

#### Material Suppliers Sub-Pages (8)
- [ ] Cement & Concrete Suppliers
- [ ] Sand & Aggregates Suppliers
- [ ] Steel & Metal Suppliers
- [ ] Bricks & Blocks Suppliers
- [ ] Roofing Materials Suppliers
- [ ] Timber & Wood Suppliers
- [ ] Tiles & Flooring Suppliers
- [ ] Glass & Aluminum Suppliers

#### Sub-Contractors Sub-Pages (7)
- [ ] Earthworks & Site Preparation
- [ ] Piling & Foundation
- [ ] Concrete Works
- [ ] Steel Works & Fabrication
- [ ] Electrical Sub-Cons
- [ ] Plumbing & Sanitary
- [ ] HVAC & Air-Cond

#### Professional Services Sub-Pages (5)
- [ ] Architects & Firms
- [ ] Civil Engineers
- [ ] Structural Engineers
- [ ] Quantity Surveyors
- [ ] MEP Engineers

#### CIDB & Regulatory Sub-Pages (4)
- [ ] CIDB Training & Courses
- [ ] CIDB Registration Consultants
- [ ] Construction Safety Training
- [ ] Building Inspection Services

#### Finance & Insurance Sub-Pages (4)
- [ ] Equipment Financing
- [ ] Project Financing
- [ ] Property Development Financing
- [ ] Construction Insurance

#### Construction Technology Sub-Pages (4)
- [ ] BIM Services
- [ ] IBS Suppliers
- [ ] Drones & Aerial Survey
- [ ] Construction Software

---

## File Locations

### Directory Structure
```
src/pages/en/industries/construction/
├── equipment-rental.astro              (Category page)
├── material-suppliers.astro             (Category page)
├── property-developers.astro            (Category page)
├── subcontractors.astro                 (Category page)
├── professional-services.astro          (Category page)
├── cidb-regulatory.astro                (Category page)
├── finance-insurance.astro              (Category page)
├── construction-technology.astro        (Category page)
└── [sub-directories for each category]
    ├── property-developers/
    │   ├── pocket-factory.astro
    │   ├── shoplot.astro
    │   └── residential.astro
    ├── equipment-rental/
    │   ├── forklift.astro
    │   ├── lorry.astro
    │   └── [etc...]
    └── [other categories...]
```

---

## Template Reference

**Base Template:** `src/pages/en/industries/construction/best-marketing-for-forklift-rental.astro`

**Key Sections:**
- Hero with problem-aware headline
- Quick Overview (pricing/timeline/languages)
- Keywords Section by prospect type
- 3-Language Advantage
- FAQ
- CTA with WhatsApp
- Related Articles

---

## Status: IN PROGRESS

**Completed (Jan 25):**
- [DONE] Update i18n/en.json with category structure
- [DONE] Update Header component with hover menu
- [DONE] Create Property Developers category page
- [DONE] Create 3 Property Developers sub-pages (Pocket Factory, Shoplot, Residential)
- [DONE] Update SLUG_MANIFEST.json
- [DONE] Build verification - all pages generated successfully

**Pages Created (4 total):**
1. `/en/industries/construction/property-developers/` ✅
2. `/en/industries/construction/property-developers/pocket-factory/` ✅
3. `/en/industries/construction/property-developers/shoplot/` ✅
4. `/en/industries/construction/property-developers/residential/` ✅

**Current Task:** Continue creating other category pages and sub-pages

**Next Steps:**
1. Create Material Suppliers category page and sub-pages
2. Create Equipment Rental category page and sub-pages
3. Create Sub-Contractors category page and sub-pages
4. Create Professional Services category page and sub-pages
5. Create remaining categories
