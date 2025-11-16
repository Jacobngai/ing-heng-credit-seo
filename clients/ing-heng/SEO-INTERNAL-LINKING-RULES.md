# SEO Internal Linking Architecture

## Why Internal Linking Matters

Google discovers and ranks pages based on:
1. **Link Equity** - Pages with more internal links rank higher
2. **Crawlability** - Google finds pages by following links
3. **Topical Relevance** - Anchor text tells Google what the page is about

---

## Critical SEO Rules

### Rule 1: Homepage MUST Link to All Important Pages

**Why:** Homepage has the highest authority. Links from homepage pass the most SEO value.

**Required Links:**
- All equipment pages (excavator, lorry, forklift, crane, bulldozer, prime-mover, refrigerated-truck)
- All service pages (hire-purchase, loan-financing, insurance)
- Blog index
- Contact page

**Example:**
```html
<!-- ❌ WRONG: Plain text -->
<span>Excavators</span>

<!-- ✅ CORRECT: Clickable link with keyword-rich anchor text -->
<a href="/en/equipment/excavator">Excavator Financing</a>
```

---

### Rule 2: Equipment Pages Must Cross-Link

**Why:** Equipment pages compete for similar keywords. Cross-linking helps Google understand relationships.

**Implementation:**
```astro
<!-- Add RelatedEquipment component to every equipment page -->
<RelatedEquipment lang={lang} currentEquipment="excavator" />
```

**Location:** Place before Contact Form section, after main content.

**Equipment Names:**
- excavator
- bulldozer
- crane
- forklift
- lorry
- primeMover (camelCase!)
- refrigeratedTruck (camelCase!)

---

### Rule 3: Service Pages Should Link to Relevant Equipment

**Example in Hire Purchase page:**
```html
<p>
  We finance all types of equipment including
  <a href="/en/equipment/excavator">excavators</a>,
  <a href="/en/equipment/lorry">lorries</a>, and
  <a href="/en/equipment/forklift">forklifts</a>.
</p>
```

---

### Rule 4: Blog Posts Should Link to Equipment Pages

**Why:** Blog posts often rank well. Use them to pass link equity to money pages.

**Example:**
```html
<p>
  If you're considering
  <a href="/en/equipment/excavator">excavator financing in Malaysia</a>,
  here are the key factors to consider...
</p>
```

---

## Anchor Text Best Practices

### Use Descriptive, Keyword-Rich Anchor Text

**❌ BAD:**
```html
<a href="/en/equipment/excavator">Click here</a>
<a href="/en/equipment/excavator">Read more</a>
```

**✅ GOOD:**
```html
<a href="/en/equipment/excavator">excavator financing Malaysia</a>
<a href="/en/equipment/excavator">finance excavators</a>
<a href="/en/equipment/excavator">excavator hire purchase</a>
```

---

## Internal Linking Checklist for New Pages

When creating a new page, ensure:

- [ ] **Homepage links to this page** (if important)
- [ ] **This page links to related pages** (2-5 contextual links minimum)
- [ ] **Breadcrumbs are implemented** (automatic with Breadcrumbs component)
- [ ] **Related content component added** (if applicable)
- [ ] **Anchor text uses target keywords**
- [ ] **Links are contextual, not forced**

---

## Component-Based Internal Linking

### RelatedEquipment Component

**Purpose:** Automatically adds 3 related equipment links to every equipment page.

**Usage:**
```astro
---
import RelatedEquipment from '../../../components/RelatedEquipment.astro';
---

<!-- Add before Contact Form section -->
<RelatedEquipment lang={lang} currentEquipment="excavator" />
```

**Equipment IDs:**
- excavator
- lorry
- forklift
- crane
- bulldozer
- primeMover
- refrigeratedTruck

---

## Multi-Language Internal Linking

### Hreflang Tags (Already Configured)

Each page automatically generates hreflang tags via SEOHead component:

```html
<link rel="alternate" hreflang="en-MY" href="https://www.inghengcredit.com/en/equipment/excavator/" />
<link rel="alternate" hreflang="ms-MY" href="https://www.kreditloan.my/ms/equipment/excavator/" />
<link rel="alternate" hreflang="zh-Hans-MY" href="https://www.inghengcredit.my/zh/equipment/excavator/" />
<link rel="alternate" hreflang="x-default" href="https://www.inghengcredit.com/en/equipment/excavator/" />
```

**This is automatic - no action needed.**

---

## Sitemap Configuration (Already Fixed)

### Critical: One Language Per Domain

```javascript
// astro.config.mjs
sitemap({
  filter: (page) => {
    // ONLY include pages for this deployment's language
    const includeOnlyDefaultLocale = page.includes(`/${DEFAULT_LOCALE}/`);
    return excludeRoot && includeOnlyDefaultLocale;
  },
})
```

**Result:**
- www.inghengcredit.com → ONLY /en/ pages in sitemap
- www.kreditloan.my → ONLY /ms/ pages in sitemap
- www.inghengcredit.my → ONLY /zh/ pages in sitemap

**Why:** Prevents duplicate content penalty from Google.

---

## Priority Levels (Already Configured)

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | weekly |
| Services | 0.9 | monthly |
| Equipment | 0.8 | monthly |
| Blog | 0.7 | weekly |
| Other | 0.5 | monthly |

---

## Testing Internal Links

### Before Deployment:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Check sitemap:**
   ```bash
   cat dist/sitemap-0.xml | grep "<loc>"
   ```

3. **Verify only ONE language appears:**
   ```bash
   cat dist/sitemap-0.xml | grep -E "/en/|/ms/|/zh/" | head -10
   ```

Should ONLY show one language pattern!

---

## Common Link Building Scenarios

### Adding New Equipment Page

1. Create page at `src/pages/en/equipment/new-equipment.astro`
2. Add to RelatedEquipment component data
3. Add link from homepage equipment section
4. Add RelatedEquipment component to new page
5. Deploy

### Adding New Blog Post

1. Create post at `src/pages/en/blog/new-post.astro`
2. Add 2-3 contextual links to equipment/service pages
3. Add link from blog index page
4. Ensure post uses correct import paths (Level 2 = `../../../`)

---

## Monitoring & Maintenance

### Monthly Tasks:

- [ ] Check Google Search Console for crawl errors
- [ ] Verify all important pages are indexed
- [ ] Monitor rankings for target keywords
- [ ] Add internal links to underperforming pages

### After Adding New Content:

- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for new pages
- [ ] Wait 2-4 weeks for ranking impact

---

## Emergency Troubleshooting

### If Page Not Ranking:

1. **Check Internal Links:**
   ```bash
   grep -r "href=\"/en/equipment/excavator\"" src/pages/
   ```
   Should find 5+ results

2. **Check Sitemap:**
   Visit: `https://www.inghengcredit.com/sitemap-0.xml`
   Search for your page URL

3. **Check Google Search Console:**
   - URL Inspection tool
   - Request indexing if not found

4. **Add More Internal Links:**
   - From homepage
   - From related equipment pages
   - From service pages
   - From blog posts

---

**Last Updated:** 2025-11-06
**Status:** Production-ready
