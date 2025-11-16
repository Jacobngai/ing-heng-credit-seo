# ING HENG CREDIT - MASTER BRAND DESIGN RULES
## Complete Design System Specification (Industrial Trust Theme)

**Version:** 2.0
**Last Updated:** 2025-11-06
**Theme:** Industrial Trust (Bronze/Brown Palette)
**Status:** Production-Ready

---

## TABLE OF CONTENTS

1. [Core Brand Identity Rules](#1-core-brand-identity-rules)
2. [Color System - Strict Rules](#2-color-system-strict-rules)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout Grid](#4-spacing-layout-grid)
5. [Component Library Rules](#5-component-library-rules)
6. [Blog Design Rules (CRITICAL)](#6-blog-design-rules-critical)
7. [Page Type Specifications](#7-page-type-specifications)
8. [Accessibility Requirements](#8-accessibility-requirements)
9. [Dark Mode Rules](#9-dark-mode-rules)
10. [Quick Reference Checklists](#10-quick-reference-checklists)

---

## 1. CORE BRAND IDENTITY RULES

### 1.1 Design Philosophy

**Theme:** Industrial Trust
**Personality:** Established • Professional • Reliable • Heritage
**Visual Style:** Brutalist Modern • Bold Borders • Strong Shadows • Geometric

**NEVER:**
- Use rounded corners > 12px (maximum allowed)
- Use gradients except for hero sections
- Use thin borders < 2px
- Use subtle shadows < 4px offset
- Use pastel colors or light tints
- Use decorative fonts or script typefaces

**ALWAYS:**
- Use bold borders (3-4px minimum)
- Use offset box shadows (8px brutal effect)
- Use strong color contrast (4.5:1 minimum)
- Use geometric shapes (rectangles, squares)
- Use professional photography (never cartoons)
- Maintain visual weight and gravitas

### 1.2 Brand Voice

**Written Tone:**
- Professional yet approachable
- Data-driven with proof points
- Clear and direct language
- Avoid jargon unless necessary
- Use "we" and "you" (conversational)

**Visual Tone:**
- Strong and grounded
- Trustworthy and established
- Modern but not trendy
- Serious but not intimidating

---

## 2. COLOR SYSTEM - STRICT RULES

### 2.1 Primary Brand Colors

```css
/* PRIMARY BRONZE (Main Brand Color) */
--color-primary: #8B6F47;
--color-primary-dark: #6B5437;
--color-primary-light: #D4BFA8;

/* USAGE RULES: */
/* ✓ DO: Hero backgrounds, headers, primary buttons, section accents */
/* ✗ DON'T: Body text (insufficient contrast), small UI elements */
/* WCAG: 4.7:1 on white (AA Large text only) */
```

```css
/* SECONDARY GOLD (Accent/Highlight) */
--color-secondary: #D4A574;
--color-secondary-dark: #BF9463;
--color-secondary-light: #E8DFD4;

/* USAGE RULES: */
/* ✓ DO: CTA buttons, highlights, hover states, emphasis */
/* ✗ DON'T: Text on white backgrounds (contrast too low) */
/* WCAG: 3.2:1 on white (FAILS - decorative only) */
```

```css
/* DARK BROWN (Text & Borders) */
--color-accent: #2D1810;
--color-accent-light: #4C3729;

/* USAGE RULES: */
/* ✓ DO: Body text, headings, borders, shadows */
/* ✗ DON'T: Large backgrounds (too dark, oppressive) */
/* WCAG: 15.8:1 on white (AAA for all text sizes) */
```

```css
/* NEUTRAL BEIGE (Backgrounds) */
--color-neutral: #F5F5DC;
--color-neutral-dark: #E8E8C8;

/* USAGE RULES: */
/* ✓ DO: Backgrounds, cards, alternating sections */
/* ✗ DON'T: Text color (too light) */
```

### 2.2 Semantic Colors (Required for UI Feedback)

```css
/* SUCCESS - Green */
--color-success: #047857;     /* WCAG: 4.5:1 on white */
--color-success-bg: #D1FAE5;
--color-success-border: #10B981;

/* WARNING - Orange */
--color-warning: #C2410C;     /* WCAG: 5.9:1 on white */
--color-warning-bg: #FED7AA;
--color-warning-border: #FB923C;

/* ERROR - Red */
--color-error: #B91C1C;       /* WCAG: 5.9:1 on white */
--color-error-bg: #FECACA;
--color-error-border: #EF4444;

/* INFO - Blue */
--color-info: #1E40AF;        /* WCAG: 7.7:1 on white */
--color-info-bg: #DBEAFE;
--color-info-border: #3B82F6;
```

### 2.3 Text Color System (CRITICAL - STRICT WCAG COMPLIANCE)

```css
/* PRIMARY TEXT (Body Copy, Headings) */
--text-primary: #1A140D;      /* WCAG: 16.2:1 on white - AAA */
/* USE FOR: All body text, H1-H6 on light backgrounds */

/* SECONDARY TEXT (Supporting Info) */
--text-secondary: #4F3E29;    /* WCAG: 9.1:1 on white - AAA */
/* USE FOR: Metadata, captions, secondary information */

/* TERTIARY TEXT (De-emphasized) */
--text-muted: #6B5437;        /* WCAG: 5.2:1 on white - AA */
/* USE FOR: Placeholders, disabled text, fine print */
/* WARNING: Only use for font-size >= 16px */

/* LINK TEXT */
--text-link: #1E40AF;         /* WCAG: 7.7:1 on white - AAA */
--text-link-hover: #1E3A8A;
/* USE FOR: All hyperlinks, clickable text */
```

### 2.4 Background Color System

```css
/* LIGHT MODE BACKGROUNDS */
--bg-primary: #FFFFFF;        /* Pure white - main background */
--bg-secondary: #F5F5DC;      /* Beige - alternating sections */
--bg-tertiary: #F5F1EC;       /* Light warm - cards, panels */

/* DARK MODE BACKGROUNDS (See Section 9) */
--bg-primary: #1A140D;        /* Near-black */
--bg-secondary: #2D1810;      /* Dark brown */
--bg-tertiary: #33281A;       /* Slightly lighter */
```

### 2.5 Color Usage Matrix (MUST FOLLOW)

| Element Type | Light Background | Dark Background | Minimum Contrast |
|--------------|------------------|-----------------|------------------|
| **H1 Headings** | #1A140D or #8B6F47 | #F5F5DC | 7:1 (AAA) |
| **H2-H6 Headings** | #2D1810 or #8B6F47 | #E8DFD4 | 4.5:1 (AA) |
| **Body Text** | #1A140D | #F5F5DC | 7:1 (AAA) |
| **Secondary Text** | #4F3E29 | #E8E8C8 | 4.5:1 (AA) |
| **Links** | #1E40AF (underline) | #60A5FA | 4.5:1 (AA) |
| **Primary CTA** | BG: #D4A574, Text: #2D1810 | BG: #E8DFD4, Text: #1A140D | 4.5:1 (AA) |
| **Borders** | #2D1810 (3px) | #8B6F47 (3px) | 3:1 (AA) |
| **Shadows** | var(--color-accent) | var(--color-primary) | N/A |

### 2.6 Color Contrast Testing Requirement

**MANDATORY BEFORE DEPLOYMENT:**

```bash
# Test ALL color combinations using:
# WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
# Ensure minimum ratios:
# - Normal text (< 18pt): 4.5:1 (AA), 7:1 (AAA)
# - Large text (≥ 18pt): 3:1 (AA), 4.5:1 (AAA)
# - UI components: 3:1 (AA)
```

**AUTOMATIC REJECTION CRITERIA:**
- Any text with < 4.5:1 contrast ratio
- Any interactive element with < 3:1 contrast ratio
- Any focus indicator with < 3:1 contrast change

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Family Stack

```css
/* PRIMARY FONT (All Text) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, 'Helvetica Neue', Arial, sans-serif;

/* MONOSPACE (Code, Technical Data) */
font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
```

**Font Weights Available:**
- 300 (Light) - NEVER use for body text
- 400 (Regular) - Body text ONLY
- 500 (Medium) - Supporting headings, emphasis
- 600 (SemiBold) - H3-H6, buttons, labels
- 700 (Bold) - H2, primary buttons
- 800 (ExtraBold) - H1, hero headlines
- 900 (Black) - Display text, brand statements

### 3.2 Typography Scale (Perfect Fourth - 1.333 Ratio)

```css
/* DESKTOP SCALE (≥ 1024px) */
--font-size-xs: 12px;      /* 0.75rem - Fine print, disclaimers */
--font-size-sm: 14px;      /* 0.875rem - Captions, metadata */
--font-size-base: 16px;    /* 1rem - Body text (DEFAULT) */
--font-size-lg: 18px;      /* 1.125rem - Large body, intro */
--font-size-xl: 21px;      /* 1.313rem - H5 */
--font-size-2xl: 28px;     /* 1.75rem - H4 */
--font-size-3xl: 37px;     /* 2.313rem - H3 */
--font-size-4xl: 49px;     /* 3.063rem - H2 */
--font-size-5xl: 65px;     /* 4.063rem - H1 */
--font-size-6xl: 87px;     /* 5.438rem - Hero display */

/* MOBILE SCALE (< 768px) */
--font-size-base: 16px;    /* NEVER go below 16px for iOS */
--font-size-h1: 36px;      /* Scale down from desktop */
--font-size-h2: 28px;
--font-size-h3: 24px;
--font-size-h4: 20px;
```

### 3.3 Line Height System

```css
/* STRICT LINE HEIGHT RULES */
--line-height-tight: 1.1;    /* Display headings, H1 */
--line-height-snug: 1.25;    /* H2-H4 */
--line-height-normal: 1.5;   /* Body text (WCAG minimum) */
--line-height-relaxed: 1.6;  /* Intro paragraphs, large text */
--line-height-loose: 1.8;    /* Long-form content (blog posts) */
```

**MANDATORY RULES:**
- Body text: MUST use 1.5 minimum (WCAG requirement)
- Headings: NEVER exceed 1.3 (tight spacing for impact)
- All caps text: Add +0.1 to line height
- Long-form content: Use 1.6-1.8 for readability

### 3.4 Heading System (STRICT HIERARCHY)

```css
/* H1 - Page Title (ONE per page) */
h1 {
  font-size: 65px;           /* Desktop: 5xl */
  font-size: 36px;           /* Mobile: Responsive */
  font-weight: 800;          /* ExtraBold */
  line-height: 1.1;
  letter-spacing: -0.02em;   /* Tighten for large text */
  color: var(--text-primary);
  margin-bottom: 24px;
}

/* H2 - Section Headers */
h2 {
  font-size: 49px;           /* Desktop: 4xl */
  font-size: 28px;           /* Mobile */
  font-weight: 700;          /* Bold */
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-primary); /* Bronze accent */
  margin-bottom: 20px;
  margin-top: 64px;          /* Section separation */
}

/* H3 - Subsection Headers */
h3 {
  font-size: 37px;           /* Desktop: 3xl */
  font-size: 24px;           /* Mobile */
  font-weight: 600;          /* SemiBold */
  line-height: 1.25;
  color: var(--text-primary);
  margin-bottom: 16px;
  margin-top: 48px;
}

/* H4 - Minor Headers */
h4 {
  font-size: 28px;           /* Desktop: 2xl */
  font-size: 20px;           /* Mobile */
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-secondary);
  margin-bottom: 12px;
  margin-top: 32px;
}

/* H5 - Small Headers */
h5 {
  font-size: 21px;           /* Desktop: xl */
  font-size: 18px;           /* Mobile */
  font-weight: 500;          /* Medium */
  line-height: 1.4;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

/* H6 - Minimal Headers (rarely used) */
h6 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 3.5 Body Text Rules

```css
/* Standard Body Text */
p, li, td, dd {
  font-size: 16px;           /* Base size */
  font-weight: 400;          /* Regular */
  line-height: 1.6;          /* Comfortable reading */
  color: var(--text-primary);
  margin-bottom: 20px;       /* Paragraph spacing */
}

/* Large Body (Intro Paragraphs) */
.lead, .intro {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 70ch;           /* Optimal line length */
}

/* Small Text (Captions, Metadata) */
.small, small {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-muted);
}

/* Fine Print (Legal, Disclaimers) */
.fine-print {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-muted);
}
```

### 3.6 Content Width (CRITICAL FOR READABILITY)

```css
/* OPTIMAL LINE LENGTH RULES */

/* Blog Posts, Articles */
.content-narrow {
  max-width: 65ch;           /* 65 characters = optimal */
  margin-left: auto;
  margin-right: auto;
}

/* Standard Content */
.content-medium {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Wide Content (Tables, Grids) */
.content-wide {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Full Width (Hero, Images) */
.content-full {
  max-width: 100%;
}
```

**NEVER EXCEED:**
- Blog content: 70 characters per line (800px)
- Landing pages: 1200px
- Tables: Can be wider, but add horizontal scroll

---

## 4. SPACING & LAYOUT GRID

### 4.1 Spacing Scale (8-Point Grid System)

```css
/* BASE UNIT: 8px */

--space-0: 0px;
--space-1: 4px;     /* 0.25rem - Micro spacing */
--space-2: 8px;     /* 0.5rem - Tight spacing */
--space-3: 12px;    /* 0.75rem - Small gaps */
--space-4: 16px;    /* 1rem - Standard gap */
--space-5: 20px;    /* 1.25rem - Medium gap */
--space-6: 24px;    /* 1.5rem - Comfortable gap */
--space-8: 32px;    /* 2rem - Large gap */
--space-10: 40px;   /* 2.5rem - XL gap */
--space-12: 48px;   /* 3rem - Section spacing */
--space-16: 64px;   /* 4rem - Major sections */
--space-20: 80px;   /* 5rem - Page sections */
--space-24: 96px;   /* 6rem - Hero padding */
--space-32: 128px;  /* 8rem - Massive spacing */
```

### 4.2 Spacing Usage Rules

```css
/* COMPONENT INTERNAL SPACING (Padding) */
Button:        12-16px vertical, 24-32px horizontal
Card:          24-32px all sides
Form Input:    12-16px vertical, 16px horizontal
Hero Section:  80-120px vertical, 5% horizontal
Standard Section: 64-80px vertical, 5% horizontal
Compact Section:  40-48px vertical, 5% horizontal

/* COMPONENT EXTERNAL SPACING (Margin) */
Between paragraphs:     20px (space-5)
Between headings:       32-48px (space-8 to space-12)
Between sections:       64-96px (space-16 to space-24)
Between major blocks:   80-128px (space-20 to space-32)
```

### 4.3 Responsive Breakpoints

```css
/* MOBILE FIRST APPROACH */

/* Extra Small (Mobile Portrait) */
@media (min-width: 0px) {
  /* Base styles - 320px minimum */
  .container { padding: 20px; }
}

/* Small (Mobile Landscape) */
@media (min-width: 576px) {
  .container { padding: 24px; }
}

/* Medium (Tablet) */
@media (min-width: 768px) {
  .container { padding: 32px; }
  /* Typography scales up */
}

/* Large (Desktop) */
@media (min-width: 1024px) {
  .container { padding: 40px; }
  /* Full typography scale */
  /* Show sidebar */
}

/* Extra Large (Large Desktop) */
@media (min-width: 1280px) {
  .container { max-width: 1200px; margin: 0 auto; }
}

/* 2X Large (Wide Screens) */
@media (min-width: 1536px) {
  .container { max-width: 1400px; }
}
```

### 4.4 Grid System (12-Column)

```css
/* DESKTOP GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
}

/* Common Layouts */
.col-span-3  { grid-column: span 3; }  /* 1/4 width - sidebar */
.col-span-4  { grid-column: span 4; }  /* 1/3 width - cards */
.col-span-6  { grid-column: span 6; }  /* 1/2 width - split */
.col-span-8  { grid-column: span 8; }  /* 2/3 width - main content */
.col-span-9  { grid-column: span 9; }  /* 3/4 width - main + small sidebar */
.col-span-12 { grid-column: span 12; } /* Full width */

/* MOBILE: Stack All Columns */
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
  .col-span-3, .col-span-4, .col-span-6,
  .col-span-8, .col-span-9 {
    grid-column: span 1;
  }
}
```

---

## 5. COMPONENT LIBRARY RULES

### 5.1 Buttons (PRIMARY UI ELEMENT)

```css
/* PRIMARY BUTTON (Main CTA) */
.btn-primary {
  /* Size */
  height: 52px;
  padding: 16px 32px;
  min-width: 160px;

  /* Typography */
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  /* Colors */
  background: var(--color-secondary);     /* Gold #D4A574 */
  color: var(--color-accent);             /* Dark Brown #2D1810 */

  /* Brutalist Style */
  border: 3px solid var(--border-color);  /* #2D1810 */
  border-radius: 8px;
  box-shadow: 8px 8px 0 var(--border-color); /* Brutal offset */

  /* Interaction */
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--color-secondary-dark);
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0 var(--border-color);
}

.btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0 var(--border-color);
}

.btn-primary:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* SECONDARY BUTTON (Alternative Action) */
.btn-secondary {
  height: 48px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;

  background: transparent;
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 8px;

  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--bg-primary);
}

/* TERTIARY BUTTON (Text Link Style) */
.btn-tertiary {
  height: auto;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;

  background: transparent;
  color: var(--color-primary);
  border: none;
  text-decoration: underline;
}
```

**BUTTON USAGE RULES:**
- **Maximum 3 buttons** in a single section
- **Primary button:** ONE per screen (highest priority action)
- **Secondary button:** Alternative or less critical action
- **Button text:** 2-4 words maximum, action-oriented
- **Touch target:** Minimum 44×44px (accessibility)

### 5.2 Cards (CONTENT CONTAINERS)

```css
/* STANDARD CARD */
.card {
  /* Layout */
  background: var(--bg-primary);
  padding: 32px;

  /* Brutalist Style */
  border: 3px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 8px 8px 0 var(--border-color);

  /* Behavior */
  transition: all 0.3s ease;
}

.card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 var(--border-color);
}

/* FEATURED CARD (Important Content) */
.card-featured {
  background: var(--bg-tertiary);
  border: 3px solid var(--color-primary);
  box-shadow: 12px 12px 0 var(--color-primary);

  /* Larger, more prominent */
  padding: 40px;
}

/* CARD HEADER */
.card-header {
  background: var(--color-primary);
  color: var(--bg-primary);
  padding: 24px;
  margin: -32px -32px 24px -32px;
  border-bottom: 3px solid var(--border-color);
}

/* CARD TITLE */
.card-title {
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}
```

**CARD USAGE RULES:**
- **Card grid:** 2-3 columns desktop, 1 column mobile
- **Featured cards:** Maximum 3 per page
- **Card height:** Equal heights in grid (use flexbox)
- **Hover state:** MANDATORY for interactive cards

### 5.3 Form Inputs (USER INPUT)

```css
/* TEXT INPUT */
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  /* Size */
  height: 48px;
  padding: 12px 16px;
  width: 100%;

  /* Typography */
  font-size: 16px;           /* iOS requires 16px minimum */
  font-weight: 400;
  color: var(--text-primary);

  /* Style */
  background: var(--bg-primary);
  border: 3px solid var(--border-color);
  border-radius: 8px;

  /* Interaction */
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(139, 111, 71, 0.2);
}

input:invalid {
  border-color: var(--color-error);
}

/* LABEL */
label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* HELPER TEXT */
.helper-text {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 6px;
}

/* ERROR MESSAGE */
.error-message {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-error);
  margin-top: 6px;
}
```

**FORM RULES:**
- **Label above input:** ALWAYS (never placeholder as label)
- **Required fields:** Mark with asterisk (*) or "Required" label
- **Error validation:** Show inline, specific error messages
- **Touch targets:** 48px minimum height
- **Focus indicators:** MANDATORY 3px outline

---

## 6. BLOG DESIGN RULES (CRITICAL)

### 6.1 Blog Post Page Structure (STRICT ORDER)

```
1. Breadcrumbs (if applicable)
2. Category Badge
3. Publication Date + Read Time
4. H1 Article Title (60-70 characters max)
5. Excerpt/Subtitle (120-160 characters)
6. Featured Image (16:9 ratio, 1600×900px)
7. Author Info (optional)
8. Article Content (max-width: 65ch)
9. Related Posts (3-6 cards)
10. Author Bio Box
11. Comments (optional)
```

### 6.2 Blog Post Typography (DIFFERENT FROM LANDING PAGES)

```css
/* BLOG H1 (Article Title) */
.blog-post h1 {
  font-size: 48px;           /* Smaller than landing H1 */
  font-size: 32px;           /* Mobile */
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-primary);
  max-width: 800px;          /* Narrower for readability */
  margin: 0 auto 24px;
  text-align: center;        /* Centered */
}

/* BLOG H2 (Section Headers) */
.blog-post h2 {
  font-size: 32px;
  font-size: 24px;           /* Mobile */
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
  margin-top: 64px;          /* Large top margin for section break */
  margin-bottom: 20px;
  border-left: 6px solid var(--color-primary);
  padding-left: 20px;        /* Visual accent */
}

/* BLOG H3 (Subsections) */
.blog-post h3 {
  font-size: 24px;
  font-size: 20px;           /* Mobile */
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-secondary);
  margin-top: 48px;
  margin-bottom: 16px;
}

/* BLOG BODY TEXT */
.blog-post p {
  font-size: 18px;           /* Larger than standard body */
  font-weight: 400;
  line-height: 1.8;          /* More spacious for long reading */
  color: var(--text-primary);
  margin-bottom: 24px;
  max-width: 65ch;           /* CRITICAL - optimal line length */
  margin-left: auto;
  margin-right: auto;
}

/* BLOG LEAD PARAGRAPH (First Paragraph) */
.blog-post .lead {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 32px;
}
```

### 6.3 Blog Metadata Display

```css
/* METADATA CONTAINER */
.blog-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.blog-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.blog-meta-separator {
  width: 4px;
  height: 4px;
  background: var(--text-muted);
  border-radius: 50%;
}

/* CATEGORY BADGE */
.category-badge {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: var(--color-primary);
  color: var(--bg-primary);
  border-radius: 4px;
  border: 2px solid var(--border-color);
}
```

### 6.4 Blog Featured Image Rules

```css
.blog-featured-image {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 48px;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid var(--border-color);
  box-shadow: 8px 8px 0 var(--border-color);
}

.blog-featured-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

**IMAGE REQUIREMENTS:**
- **Aspect ratio:** 16:9 (required)
- **Minimum size:** 1200×675px
- **Maximum file size:** 500KB
- **Format:** WebP (with JPG fallback)
- **Alt text:** Descriptive, includes target keyword
- **Caption:** Optional, 12-14px, centered below image

### 6.5 Blog Content Elements

```css
/* LISTS */
.blog-post ul, .blog-post ol {
  margin: 24px 0 24px 32px;
  line-height: 1.8;
}

.blog-post li {
  margin-bottom: 12px;
  font-size: 18px;
  color: var(--text-primary);
}

/* BLOCKQUOTE */
.blog-post blockquote {
  margin: 48px 0;
  padding: 24px 32px;
  background: var(--bg-secondary);
  border-left: 6px solid var(--color-primary);
  font-size: 20px;
  font-style: italic;
  color: var(--text-secondary);
}

/* CODE BLOCK */
.blog-post pre {
  margin: 32px 0;
  padding: 24px;
  background: var(--bg-tertiary);
  border: 3px solid var(--border-color);
  border-radius: 8px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.6;
}

/* INLINE CODE */
.blog-post code {
  padding: 2px 6px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Courier New', monospace;
}

/* TABLE */
.blog-post table {
  width: 100%;
  margin: 32px 0;
  border-collapse: collapse;
  border: 3px solid var(--border-color);
}

.blog-post th {
  background: var(--color-primary);
  color: var(--bg-primary);
  padding: 16px;
  text-align: left;
  font-weight: 700;
  border: 2px solid var(--border-color);
}

.blog-post td {
  padding: 12px 16px;
  border: 2px solid var(--border-color);
}

.blog-post tr:nth-child(even) {
  background: var(--bg-secondary);
}
```

### 6.6 Blog Listing Page (Archive/Index)

```css
/* BLOG GRID */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 48px 0;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

/* BLOG POST CARD */
.blog-card {
  background: var(--bg-primary);
  border: 3px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 8px 8px 0 var(--border-color);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 var(--border-color);
}

.blog-card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 3px solid var(--border-color);
}

.blog-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.blog-card-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;

  /* Truncate to 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card-excerpt {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;

  /* Truncate to 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
  border-top: 2px solid var(--border-light);
}

.blog-card-meta {
  font-size: 13px;
  color: var(--text-muted);
}

.blog-card-read-more {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.blog-card-read-more:hover {
  text-decoration: underline;
}
```

### 6.7 Blog Highlighted/Featured Posts

```css
/* FEATURED POST (First Post, Larger) */
.blog-featured {
  grid-column: span 2;  /* Takes full width in 2-column grid */

  /* Larger styling */
  border: 4px solid var(--color-primary); /* Thicker border */
  box-shadow: 12px 12px 0 var(--color-primary); /* Different color shadow */
}

.blog-featured .blog-card-title {
  font-size: 32px;  /* Larger title */
}

.blog-featured .blog-card-excerpt {
  font-size: 18px;  /* Larger excerpt */
  -webkit-line-clamp: 4; /* Show more lines */
}

/* FEATURED BADGE */
.blog-featured::before {
  content: '⭐ FEATURED';
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--color-primary);
  color: var(--bg-primary);
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  border: 2px solid var(--border-color);
}
```

**BLOG HIGHLIGHTING RULES:**
- **Featured posts:** Maximum 1 per page (at top)
- **Featured sizing:** 2x width or 1.5x height of regular cards
- **Visual differentiation:** Different border color OR badge OR background
- **Content:** Featured posts should be pillar content or recent high-value articles

---

## 7. PAGE TYPE SPECIFICATIONS

### 7.1 Homepage

**Structure:**
1. Hero Section (100vh or 80vh)
2. Stats/Trust Signals (3-4 metrics)
3. Services Overview (3 cards)
4. Value Proposition
5. Featured Blog Posts (3 latest)
6. CTA Section
7. Footer

**Hero Section Rules:**
```css
.hero {
  min-height: 80vh;
  padding: 80px 5%;
  background: linear-gradient(135deg,
              var(--color-primary) 0%,
              var(--color-primary-dark) 100%);
  color: var(--bg-primary);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 65px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero .subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
```

### 7.2 Service Pages

**Structure:**
1. Page Header (H1 + Subtitle)
2. Overview Section
3. Benefits Grid (3-6 items)
4. How It Works (3-5 steps)
5. Pricing/Options (if applicable)
6. FAQ Section
7. CTA Section
8. Related Services

**Section Padding:**
- Top section: 80px
- Standard sections: 64px
- Compact sections: 48px

### 7.3 About Page

**Structure:**
1. Company Story
2. Mission/Vision/Values
3. Timeline (if applicable)
4. Team Section
5. Certifications/Awards
6. CTA

### 7.4 Contact Page

**Structure:**
1. Contact Form (left 2/3)
2. Contact Info Sidebar (right 1/3)
3. Map (optional, below)
4. Office Hours
5. FAQ (common questions)

**Form Requirements:**
- Name, Email, Phone (all required)
- Message (textarea, required)
- Submit button (primary style)
- Privacy statement
- Success/error feedback

---

## 8. ACCESSIBILITY REQUIREMENTS

### 8.1 WCAG 2.1 Level AA Compliance (MANDATORY)

**Color Contrast:**
- [ ] Normal text (< 18pt): 4.5:1 minimum
- [ ] Large text (≥ 18pt): 3:1 minimum
- [ ] UI components: 3:1 minimum
- [ ] Focus indicators: 3:1 contrast change

**Keyboard Navigation:**
- [ ] All interactive elements keyboard-accessible
- [ ] Visible focus indicators (3px outline)
- [ ] Logical tab order (top-to-bottom, left-to-right)
- [ ] Skip links ("Skip to main content")

**Screen Readers:**
- [ ] Semantic HTML (header, nav, main, article, footer)
- [ ] Alt text for all images
- [ ] ARIA labels for icon buttons
- [ ] Proper heading hierarchy (H1 → H2 → H3)

**Touch Targets:**
- [ ] Minimum 44×44px (iOS)
- [ ] Recommended 48×48px (Android)
- [ ] 8px minimum spacing between targets

**Forms:**
- [ ] Persistent labels (never placeholder-only)
- [ ] Error messages with aria-live
- [ ] Required field indicators
- [ ] Fieldset/legend for radio groups

### 8.2 Testing Checklist

```bash
# REQUIRED BEFORE DEPLOYMENT

1. Color Contrast
   - Run WebAIM Contrast Checker on ALL text
   - Ensure 4.5:1 minimum for all body text
   - Check focus indicators (3:1 minimum)

2. Keyboard Navigation
   - Navigate entire site using Tab key only
   - Ensure all buttons/links accessible
   - Check focus visibility

3. Screen Reader
   - Test with NVDA (Windows) or VoiceOver (Mac)
   - Ensure logical reading order
   - Check image alt text

4. Responsive Design
   - Test on real mobile devices
   - Check touch target sizes
   - Verify text readability

5. Automated Testing
   - Run Lighthouse (95+ accessibility score)
   - Run axe DevTools (0 violations)
   - Run WAVE (0 errors)
```

---

## 9. DARK MODE RULES

### 9.1 Dark Mode Color System

```css
[data-theme="dark"] {
  /* Inverted Colors */
  --color-primary: #C09F7D;          /* Lighter bronze */
  --color-primary-dark: #D4BFA8;
  --color-primary-light: #8B6F47;

  --color-secondary: #E8DFD4;
  --color-secondary-dark: #F5F1EC;

  /* Dark Backgrounds */
  --bg-primary: #1A140D;             /* Near-black */
  --bg-secondary: #2D1810;
  --bg-tertiary: #33281A;

  /* Light Text */
  --text-primary: #F5F5DC;
  --text-secondary: #E8E8C8;
  --text-muted: #C09F7D;

  /* Adjusted Borders */
  --border-color: #8B6F47;           /* Lighter in dark mode */
  --border-light: #6B5437;

  /* Adjusted Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.5);
}
```

### 9.2 Dark Mode Toggle Implementation

```html
<!-- Dark Mode Toggle Button -->
<button class="dark-mode-toggle" onclick="toggleDarkMode()">
  <span id="mode-text">Dark Mode</span>
</button>
```

```javascript
// Dark mode toggle function
function toggleDarkMode() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  document.getElementById('mode-text').textContent =
    newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.getElementById('mode-text').textContent =
    savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});
```

---

## 10. QUICK REFERENCE CHECKLISTS

### 10.1 Every Page Must Have

- [ ] Semantic HTML (header, nav, main, footer)
- [ ] One H1 tag (page title)
- [ ] Proper heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Alt text for all images
- [ ] Meta description (150-160 characters)
- [ ] Open Graph tags for social sharing
- [ ] Responsive meta viewport tag
- [ ] Minimum 4.5:1 text contrast
- [ ] Focus indicators on all interactive elements
- [ ] Skip to main content link

### 10.2 Blog Post Checklist

- [ ] H1 article title (60-70 characters)
- [ ] Featured image (16:9, < 500KB, WebP)
- [ ] Category badge
- [ ] Publication date
- [ ] Read time estimate
- [ ] Content max-width: 65ch
- [ ] Body font-size: 18px, line-height: 1.8
- [ ] H2 sections with left border accent
- [ ] Related posts section (3-6 cards)
- [ ] Author bio box (optional)
- [ ] Social share buttons
- [ ] Schema markup (Article type)

### 10.3 Component Checklist

- [ ] **Buttons:** 44×44px minimum, 3px border, brutal shadow
- [ ] **Cards:** 3px border, 8px brutal shadow, hover effect
- [ ] **Forms:** Labels above inputs, 48px input height, error states
- [ ] **Images:** WebP format, responsive srcset, alt text
- [ ] **Links:** Underline on hover, 4.5:1 contrast
- [ ] **Headings:** Proper hierarchy, correct font weights
- [ ] **Spacing:** 8px grid system, consistent gaps
- [ ] **Colors:** WCAG AA compliant, semantic colors for feedback

### 10.4 Pre-Deployment Checklist

- [ ] All text meets 4.5:1 contrast minimum
- [ ] Keyboard navigation tested
- [ ] Mobile responsive (320px to 2560px)
- [ ] Images optimized (< 500KB)
- [ ] Lighthouse score: 90+ (Performance, Accessibility, SEO)
- [ ] No console errors
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Dark mode tested (if enabled)
- [ ] Forms validated
- [ ] Links checked (no 404s)

---

## IMPLEMENTATION NOTES

### Priority Order

**Phase 1 - Foundation (Week 1):**
1. Implement color system (CSS variables)
2. Implement typography scale
3. Implement spacing scale
4. Create button components

**Phase 2 - Components (Week 2):**
5. Create card components
6. Create form components
7. Create navigation components
8. Test accessibility

**Phase 3 - Pages (Week 3):**
9. Build homepage
10. Build service pages
11. Build blog templates
12. Build contact page

**Phase 4 - Polish (Week 4):**
13. Implement dark mode
14. Add animations/transitions
15. Optimize images
16. Final testing

### Tools & Resources

**Design:**
- Figma (design mockups)
- WebAIM Contrast Checker (color testing)
- Type Scale Calculator (typography)

**Development:**
- Tailwind CSS (utility classes)
- Astro (static site generator)
- PostCSS (CSS processing)

**Testing:**
- Chrome Lighthouse (performance)
- axe DevTools (accessibility)
- WAVE (accessibility)
- BrowserStack (cross-browser)

---

## CONCLUSION

This document represents 20+ years of design system best practices, synthesized into strict, actionable rules for the Ing Heng Credit brand. Every rule is based on:

- **WCAG 2.1 AA accessibility standards**
- **Modern design system principles** (Material Design, Tailwind, IBM Carbon)
- **Typography research** (modular scales, optimal line lengths)
- **Color psychology** for financial/industrial brands
- **User experience research** (Nielsen Norman Group)

**CRITICAL REMINDERS:**

1. **Contrast is non-negotiable** - 4.5:1 minimum for all text
2. **Heading hierarchy is mandatory** - Never skip levels
3. **Touch targets must be 44×44px minimum** - Accessibility law
4. **Blog content width: 65ch maximum** - Readability science
5. **One H1 per page** - SEO and accessibility requirement
6. **Brutalist style is brand identity** - Bold borders, offset shadows
7. **Bronze palette conveys trust** - Industrial heritage, established authority

Follow these rules strictly for a cohesive, professional, accessible, and conversion-optimized website.

---

**Document Version:** 2.0
**Maintained By:** Design System Team
**Last Review:** 2025-11-06
**Next Review:** 2025-12-06
