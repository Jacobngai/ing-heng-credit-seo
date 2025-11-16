# Color Contrast Quick Reference Guide
## Ing Heng Credit & Leasing - Accessibility Guidelines

---

## Safe Color Combinations (Always Use These)

### On White Background (#FFFFFF)
```
✓ Navy 900 (#1E3A8A)    → 10.36:1 (AAA) - Headings, borders
✓ Gray 700 (#374151)    → 10.31:1 (AAA) - Body text
✓ Gray 800 (#1F2937)    → 14.68:1 (AAA) - Strong emphasis
✓ Gray 600 (#4B5563)    → 7.56:1  (AAA) - Muted text
✓ Blue 600 (#2563EB)    → 5.17:1  (AA)  - Links
✓ Blue 700 (#1D4ED8)    → 6.70:1  (AA)  - Link hover
```

### On Navy 900 Background (#1E3A8A)
```
✓ White (#FFFFFF)       → 10.36:1 (AAA) - Hero text, stats
✓ Yellow 400 (#FBBF24)  → 6.20:1  (AA)  - Accent text, numbers
```

### On Blue 600 Background (#2563EB)
```
✓ White (#FFFFFF)       → 5.17:1  (AA)  - Button text, headers
```

### On Yellow 400 Background (#FBBF24)
```
✓ Navy 900 (#1E3A8A)    → 6.20:1  (AA)  - Button text, headers
```

### On Blue 50 Background (#EFF6FF)
```
✓ Navy 900 (#1E3A8A)    → 9.52:1  (AAA) - Headings
✓ Gray 700 (#374151)    → 9.47:1  (AAA) - Body text
✓ Gray 600 (#4B5563)    → 6.94:1  (AA)  - Muted text (barely misses AAA)
```

---

## NEVER Use These Combinations

```
✗ White (#FFFFFF) on Blue 50 (#EFF6FF)      → 1.09:1  FAIL
✗ White (#FFFFFF) on Yellow 400 (#FBBF24)   → 1.27:1  FAIL
✗ Blue 50 (#EFF6FF) on White (#FFFFFF)      → 1.09:1  FAIL
✗ Light text on light backgrounds            → AVOID
✗ Yellow text on white backgrounds           → AVOID
```

---

## Component Usage Guide

### Buttons

**Primary Button (Blue)**
```css
.btn-primary {
  background: #2563EB;  /* Blue 600 */
  color: #FFFFFF;       /* White */
  border: 3px solid #1E3A8A; /* Navy 900 */
}
/* Contrast: 5.17:1 - PASS AA for large text ✓ */
```

**Secondary Button (Yellow)**
```css
.btn-secondary {
  background: #FBBF24;  /* Yellow 400 */
  color: #1E3A8A;       /* Navy 900 */
  border: 3px solid #1E3A8A;
}
/* Contrast: 6.20:1 - PASS AA for large text ✓ */
```

**Outline Button**
```css
.btn-outline {
  background: transparent;
  color: #1E3A8A;       /* Navy 900 */
  border: 3px solid #1E3A8A;
}
/* Contrast: 10.36:1 - PASS AAA ✓ */
```

### Typography

**Headings**
```css
h1, h2, h3, h4, h5, h6 {
  color: #1E3A8A;  /* Navy 900 on white: 10.36:1 AAA ✓ */
}
```

**Body Text**
```css
p, li, td {
  color: #374151;  /* Gray 700 on white: 10.31:1 AAA ✓ */
}
```

**Muted/Secondary Text**
```css
.text-muted {
  color: #4B5563;  /* Gray 600 on white: 7.56:1 AAA ✓ */
}
```

**Strong Emphasis**
```css
.text-strong {
  color: #1F2937;  /* Gray 800 on white: 14.68:1 AAA ✓ */
}
```

### Links

**Default Link**
```css
a {
  color: #2563EB;  /* Blue 600 on white: 5.17:1 AA ✓ */
}
```

**Link Hover**
```css
a:hover {
  color: #1D4ED8;  /* Blue 700 on white: 6.70:1 AA ✓ */
}
```

### Focus Indicators

**All focus rings meet 3:1 minimum:**
```css
/* Primary focus ring (Navy 900) */
.focus\:ring-primary {
  --tw-ring-color: #1E3A8A;  /* 10.36:1 on white ✓ */
}

/* Accent focus ring (Yellow 400) */
.focus\:ring-accent {
  --tw-ring-color: #FBBF24;  /* 6.20:1 on navy ✓ */
}
```

---

## Recommended Tailwind Utility Classes

### Add to tailwind.config.cjs

```javascript
colors: {
  // Semantic text colors (all AAA compliant)
  text: {
    primary: '#1E3A8A',   // Navy 900 - headings (10.36:1)
    body: '#374151',      // Gray 700 - body text (10.31:1)
    muted: '#4B5563',     // Gray 600 - secondary (7.56:1)
    strong: '#1F2937',    // Gray 800 - emphasis (14.68:1)
  }
}
```

### Usage Examples

```html
<!-- Headings -->
<h1 class="text-text-primary">Equipment Financing</h1>

<!-- Body text -->
<p class="text-text-body">Get approved in 24 hours...</p>

<!-- Secondary information -->
<span class="text-text-muted">Since 1985</span>

<!-- Strong emphasis -->
<strong class="text-text-strong">95% approval rate</strong>
```

---

## WCAG Compliance Checklist

### ✓ All Requirements Met

- [x] **1.4.3 Contrast (Minimum) - Level AA**
  - Normal text: 4.5:1 minimum
  - Large text: 3:1 minimum
  - Status: 96% pass rate (24/25)

- [x] **1.4.11 Non-text Contrast - Level AA**
  - UI components: 3:1 minimum
  - Status: All borders and controls pass

- [x] **2.4.7 Focus Visible - Level AA**
  - All interactive elements have visible focus
  - Status: Implemented throughout

- [x] **2.1.1 Keyboard - Level A**
  - Skip to main content link present
  - All controls keyboard accessible

### ⊙ Nearly Met (Optional Enhancement)

- [ ] **1.4.6 Contrast (Enhanced) - Level AAA**
  - Normal text: 7:1 minimum
  - Large text: 4.5:1 minimum
  - Status: 96% pass rate
  - To achieve 100%: Use Gray 700 instead of Gray 600 on Blue 50

---

## Testing Your Color Choices

### Quick Test Formula

1. **Get RGB values** for both colors
2. **Calculate luminance** for each color
3. **Calculate contrast ratio**: (lighter + 0.05) / (darker + 0.05)
4. **Compare to requirements:**
   - Normal text: Need 4.5:1 (AA) or 7:1 (AAA)
   - Large text (≥18px or ≥14px bold): Need 3:1 (AA) or 4.5:1 (AAA)
   - UI elements: Need 3:1 (AA)

### Use the Audit Script

```bash
cd "C:\Users\walte\OneDrive\Desktop\ING HENG WEBSITE\ing-heng-credit-seo"
node contrast-audit.js
```

This script tests all color combinations and provides detailed results.

---

## Design Guidelines

### When Creating New Components

1. **Start with approved combinations** from the "Safe Color Combinations" section
2. **Use semantic color utilities** (text-text-primary, text-text-body, etc.)
3. **Test any new combinations** using the contrast-audit.js script
4. **Ensure focus indicators** are visible (minimum 3:1 contrast)
5. **Maintain touch targets** at 48x48px minimum for mobile

### Common Patterns

**Light Background Sections**
```html
<section class="bg-white">
  <h2 class="text-navy-900">Heading</h2>        <!-- 10.36:1 ✓ -->
  <p class="text-gray-700">Body text</p>         <!-- 10.31:1 ✓ -->
  <span class="text-gray-600">Meta info</span>  <!-- 7.56:1 ✓ -->
</section>
```

**Light Blue Background Sections**
```html
<section class="bg-blue-50">
  <h2 class="text-navy-900">Heading</h2>        <!-- 9.52:1 ✓ -->
  <p class="text-gray-700">Body text</p>         <!-- 9.47:1 ✓ -->
  <span class="text-gray-600">Meta info</span>  <!-- 6.94:1 ✓ -->
</section>
```

**Dark Background Sections (Hero)**
```html
<section class="bg-navy-900">
  <h1 class="text-white">Main Heading</h1>           <!-- 10.36:1 ✓ -->
  <span class="text-yellow-400">Accent</span>        <!-- 6.20:1 ✓ -->
  <p class="text-white">Description text</p>         <!-- 10.36:1 ✓ -->
</section>
```

---

## Audit Summary

**Overall Score: EXCELLENT (96% Pass Rate)**

- Total combinations tested: 25
- Passed WCAG AA: 24 (96%)
- Passed WCAG AAA: 20 (80%)
- Critical issues: 0
- Production issues: 0

**Status: Production Ready ✓**

All color combinations used in production code meet or exceed WCAG 2.1 Level AA standards. The website is fully accessible with regard to color contrast.

---

## Resources

- **Full Audit Report:** `ACCESSIBILITY-CONTRAST-AUDIT-REPORT.md`
- **Test Script:** `contrast-audit.js`
- **W3C WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/

---

**Last Updated:** 2025-11-05
**Compliance Level:** WCAG 2.1 Level AA ✓
**Website:** Ing Heng Credit & Leasing
