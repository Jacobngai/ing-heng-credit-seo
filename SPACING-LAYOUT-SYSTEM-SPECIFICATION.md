# Spacing & Layout System Specification

## Table of Contents
1. [Grid System Foundation](#grid-system-foundation)
2. [Spacing Scale](#spacing-scale)
3. [Vertical Rhythm & Baseline Grid](#vertical-rhythm--baseline-grid)
4. [Component Spacing Rules](#component-spacing-rules)
5. [White Space Principles](#white-space-principles)
6. [Responsive Breakpoints](#responsive-breakpoints)
7. [Container System](#container-system)
8. [Fluid Spacing](#fluid-spacing)
9. [Implementation Examples](#implementation-examples)

---

## Grid System Foundation

### Base Grid Choice

**Primary: 8-Point Grid System**
- Base unit: 8px (0.5rem)
- Use for: Layout, major components, containers, sections
- Rationale: Scales perfectly across screen densities, divisible by common factors

**Secondary: 4-Point Grid System**
- Base unit: 4px (0.25rem)
- Use for: Icons, small UI elements, fine-tuning adjustments
- Rationale: Provides flexibility for smaller elements while maintaining rhythm

### Column Grid Systems

#### 12-Column Grid (Recommended for Most Layouts)
**Advantages:**
- Highly divisible (1, 2, 3, 4, 6, 12)
- Maximum layout flexibility
- Industry standard (Bootstrap, Material Design)
- Works well for complex responsive layouts

**Typical Use Cases:**
- Marketing websites
- Content-heavy sites
- Dashboards
- Multi-column layouts

#### 16-Column Grid (Alternative)
**Advantages:**
- More granular control
- Better for wide viewports (>1400px)
- Divisible by (1, 2, 4, 8, 16)

**Typical Use Cases:**
- Large desktop applications
- Data-heavy interfaces
- E-commerce product grids

### Grid Gutter System

```css
/* Gutters (space between columns) */
--grid-gutter-xs: 16px;  /* 1rem */
--grid-gutter-sm: 20px;  /* 1.25rem */
--grid-gutter-md: 24px;  /* 1.5rem */
--grid-gutter-lg: 32px;  /* 2rem */
--grid-gutter-xl: 40px;  /* 2.5rem */
```

**Rules:**
- Mobile (< 768px): Use smaller gutters (16-20px)
- Tablet (768-1024px): Use medium gutters (24px)
- Desktop (> 1024px): Use larger gutters (32-40px)

---

## Spacing Scale

### Primary Spacing Scale (8-Point Base)

```css
/* Core Spacing Tokens */
--space-0: 0;           /* 0px - No space */
--space-1: 0.25rem;     /* 4px - Extra tight */
--space-2: 0.5rem;      /* 8px - Tight */
--space-3: 0.75rem;     /* 12px - Compact */
--space-4: 1rem;        /* 16px - Base/Normal */
--space-5: 1.25rem;     /* 20px - Relaxed */
--space-6: 1.5rem;      /* 24px - Comfortable */
--space-8: 2rem;        /* 32px - Spacious */
--space-10: 2.5rem;     /* 40px - Large */
--space-12: 3rem;       /* 48px - Extra large */
--space-16: 4rem;       /* 64px - Huge */
--space-20: 5rem;       /* 80px - Massive */
--space-24: 6rem;       /* 96px - Section spacing */
--space-32: 8rem;       /* 128px - Major section spacing */
```

### Mathematical Progression

**Fibonacci-Inspired Scale (Recommended):**
```
4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

**Linear Scale (Alternative):**
```
4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64
```

**Exponential Scale (Alternative):**
```
4, 8, 16, 32, 64, 128, 256
```

### Semantic Spacing Tokens

```css
/* Semantic Spacing Names */
--space-xs: var(--space-1);    /* 4px */
--space-sm: var(--space-2);    /* 8px */
--space-md: var(--space-4);    /* 16px */
--space-lg: var(--space-6);    /* 24px */
--space-xl: var(--space-8);    /* 32px */
--space-2xl: var(--space-12);  /* 48px */
--space-3xl: var(--space-16);  /* 64px */
--space-4xl: var(--space-24);  /* 96px */
--space-5xl: var(--space-32);  /* 128px */
```

### Spacing Scale Usage Guide

| Value | Pixels | Rem | Use Case |
|-------|--------|-----|----------|
| `space-1` | 4px | 0.25rem | Icon padding, badge spacing, tight inline elements |
| `space-2` | 8px | 0.5rem | Adjacent UI elements, small gaps, form field spacing |
| `space-3` | 12px | 0.75rem | Related component groups, list item padding |
| `space-4` | 16px | 1rem | **Base spacing unit**, standard padding, button padding |
| `space-5` | 20px | 1.25rem | Form groups, card padding (mobile) |
| `space-6` | 24px | 1.5rem | Card padding, section padding (mobile), moderate gaps |
| `space-8` | 32px | 2rem | Section spacing (tablet), card spacing, container padding |
| `space-10` | 40px | 2.5rem | Component separation, section spacing |
| `space-12` | 48px | 3rem | Major component separation, hero padding |
| `space-16` | 64px | 4rem | Section spacing (desktop), major layout divisions |
| `space-20` | 80px | 5rem | Large section spacing, hero sections |
| `space-24` | 96px | 6rem | Extra large section spacing, page sections |
| `space-32` | 128px | 8rem | Massive section spacing, landing page sections |

---

## Vertical Rhythm & Baseline Grid

### Baseline Unit

**Base Line Height:**
```css
--baseline: 8px;  /* 0.5rem */
```

All vertical spacing should be multiples of the baseline (8px).

### Typography Line Heights

```css
/* Line Height Scale */
--line-height-none: 1;        /* 100% - Display text only */
--line-height-tight: 1.25;    /* 125% - Headings */
--line-height-snug: 1.375;    /* 137.5% - Subheadings */
--line-height-normal: 1.5;    /* 150% - Body text */
--line-height-relaxed: 1.625; /* 162.5% - Long-form content */
--line-height-loose: 2;       /* 200% - Special cases */
```

### Vertical Spacing Rules

**Between Text Elements:**
```css
/* Heading to paragraph */
margin-bottom: var(--space-4);  /* 16px */

/* Paragraph to paragraph */
margin-bottom: var(--space-6);  /* 24px */

/* Section to section */
margin-bottom: var(--space-16); /* 64px */
```

**Typography Vertical Rhythm:**
```css
/* Example: Maintaining 8px rhythm */
h1 {
  font-size: 3rem;        /* 48px */
  line-height: 1.166667;  /* 56px (48px × 1.166667) = 7 × 8px */
  margin-bottom: 1.5rem;  /* 24px = 3 × 8px */
}

h2 {
  font-size: 2.25rem;     /* 36px */
  line-height: 1.333333;  /* 48px (36px × 1.333333) = 6 × 8px */
  margin-bottom: 1rem;    /* 16px = 2 × 8px */
}

p {
  font-size: 1rem;        /* 16px */
  line-height: 1.5;       /* 24px (16px × 1.5) = 3 × 8px */
  margin-bottom: 1.5rem;  /* 24px = 3 × 8px */
}
```

### Baseline Grid Calculation Formula

```
Line Height = ceil(Font Size / Baseline) × Baseline
```

**Example:**
- Font size: 18px
- Baseline: 8px
- Line height: ceil(18 / 8) × 8 = 3 × 8 = 24px
- Line height ratio: 24 / 18 = 1.333

---

## Component Spacing Rules

### Inset Spacing (Padding)

**Inset Square (Equal padding all sides):**
```css
/* Small components */
padding: var(--space-2);  /* 8px */

/* Medium components (buttons, inputs) */
padding: var(--space-4);  /* 16px */

/* Large components (cards) */
padding: var(--space-6);  /* 24px */
```

**Inset Squish (Vertical < Horizontal):**
```css
/* Common for buttons */
padding: var(--space-2) var(--space-4);  /* 8px 16px */
padding: var(--space-3) var(--space-6);  /* 12px 24px */
```

**Inset Stretch (Vertical > Horizontal):**
```css
/* Uncommon, but useful for sidebars */
padding: var(--space-6) var(--space-4);  /* 24px 16px */
```

### Stack Spacing (Vertical gaps)

**Between related elements:**
```css
/* Tight relationship (form labels) */
gap: var(--space-1);  /* 4px */

/* Close relationship (list items) */
gap: var(--space-2);  /* 8px */

/* Normal relationship (form fields) */
gap: var(--space-4);  /* 16px */

/* Separate components */
gap: var(--space-6);  /* 24px */

/* Section separation */
gap: var(--space-12); /* 48px */
```

### Inline Spacing (Horizontal gaps)

```css
/* Adjacent icons or badges */
gap: var(--space-2);  /* 8px */

/* Button groups */
gap: var(--space-3);  /* 12px */

/* Navigation items */
gap: var(--space-6);  /* 24px */
```

### Component-Specific Rules

#### Buttons
```css
.button {
  /* Padding (Inset Squish) */
  padding: 0.75rem 1.5rem;  /* 12px 24px */

  /* Icon spacing */
  gap: 0.5rem;              /* 8px */
}

.button-sm {
  padding: 0.5rem 1rem;     /* 8px 16px */
  gap: 0.375rem;            /* 6px */
}

.button-lg {
  padding: 1rem 2rem;       /* 16px 32px */
  gap: 0.75rem;             /* 12px */
}
```

#### Cards
```css
.card {
  /* Internal padding */
  padding: var(--space-6);           /* 24px */

  /* Margin between cards */
  margin-bottom: var(--space-6);     /* 24px */

  /* Gap between card elements */
  gap: var(--space-4);               /* 16px */
}

.card-header {
  padding-bottom: var(--space-4);    /* 16px */
  border-bottom: 1px solid;
}

.card-footer {
  padding-top: var(--space-4);       /* 16px */
  border-top: 1px solid;
}
```

#### Forms
```css
.form-group {
  /* Spacing between form groups */
  margin-bottom: var(--space-6);     /* 24px */
}

.form-label {
  /* Label to input spacing */
  margin-bottom: var(--space-2);     /* 8px */
}

.form-input {
  /* Input internal padding */
  padding: var(--space-3) var(--space-4);  /* 12px 16px */
}

.form-hint {
  /* Hint text spacing */
  margin-top: var(--space-1);        /* 4px */
}

.form-error {
  /* Error message spacing */
  margin-top: var(--space-2);        /* 8px */
}
```

#### Navigation
```css
.nav-horizontal {
  /* Horizontal nav items */
  gap: var(--space-6);               /* 24px */
  padding: var(--space-4);           /* 16px */
}

.nav-vertical {
  /* Vertical nav items */
  gap: var(--space-1);               /* 4px */
  padding: var(--space-4);           /* 16px */
}

.nav-item {
  /* Individual nav item padding */
  padding: var(--space-2) var(--space-4);  /* 8px 16px */
}
```

### Internal ≤ External Rule

**Principle:** External spacing should equal or exceed internal spacing to create clear visual grouping.

```css
/* Example: Card with proper spacing hierarchy */
.card {
  padding: 24px;              /* Internal spacing */
  margin-bottom: 32px;        /* External spacing (≥ internal) */
}

.card-content {
  gap: 16px;                  /* Content gap (< card padding) */
}
```

### Margin vs Padding Guidelines

**Use Padding:**
- Internal spacing within a component
- Creating touch/click targets
- Background color boundaries
- Border spacing

**Use Margin:**
- Spacing between separate components
- Pushing components apart
- Layout adjustments
- Section separation

**Best Practice:** Components should **not** define their own external margins. Let parent containers control layout spacing using gap, flexbox, or grid.

```css
/* ❌ BAD: Component defines its own margin */
.button {
  margin-right: 16px;
}

/* ✅ GOOD: Parent controls spacing */
.button-group {
  display: flex;
  gap: 16px;
}
```

---

## White Space Principles

### Types of White Space

**Micro White Space:**
- Between lines of text (line-height)
- Between paragraphs
- Between list items
- Between form elements
- Range: 4px - 24px

**Macro White Space:**
- Between sections
- Around major components
- Page margins
- Hero sections
- Range: 48px - 128px+

### White Space Rules

**1. Proximity Principle (Gestalt Law)**
- Related elements: Smaller spacing (4-8px)
- Grouped elements: Medium spacing (16-24px)
- Separate sections: Large spacing (48-96px)

**2. Breathing Room**
- Don't cram content: Use at least 16px between unrelated elements
- Generous padding in containers: Minimum 24px for cards/sections
- Empty space is not wasted space: It improves comprehension

**3. Visual Hierarchy Through Spacing**
```css
/* Example: Creating hierarchy with spacing */
.section {
  margin-bottom: 96px;        /* Macro white space */
}

.section-header {
  margin-bottom: 48px;        /* Major separation */
}

.content-block {
  margin-bottom: 32px;        /* Medium separation */
}

.paragraph {
  margin-bottom: 16px;        /* Minor separation */
}

.inline-elements {
  gap: 8px;                   /* Micro white space */
}
```

**4. Density Levels**

```css
/* Compact (Data-heavy UIs) */
--density-compact: {
  padding: var(--space-2);
  gap: var(--space-2);
}

/* Normal (Default) */
--density-normal: {
  padding: var(--space-4);
  gap: var(--space-4);
}

/* Comfortable (Marketing, Content) */
--density-comfortable: {
  padding: var(--space-6);
  gap: var(--space-6);
}

/* Spacious (Landing Pages) */
--density-spacious: {
  padding: var(--space-12);
  gap: var(--space-8);
}
```

---

## Responsive Breakpoints

### Standard Breakpoints

```css
/* Mobile First Breakpoints */
--breakpoint-xs: 0px;        /* Extra small devices */
--breakpoint-sm: 576px;      /* Small devices (landscape phones) */
--breakpoint-md: 768px;      /* Medium devices (tablets) */
--breakpoint-lg: 992px;      /* Large devices (desktops) */
--breakpoint-xl: 1200px;     /* Extra large devices (large desktops) */
--breakpoint-2xl: 1400px;    /* Extra extra large devices */
```

### Breakpoint Usage Guide

| Breakpoint | Width | Device Type | Grid Columns | Typical Spacing |
|------------|-------|-------------|--------------|-----------------|
| `xs` | 0-575px | Mobile (portrait) | 4 | 16-24px |
| `sm` | 576-767px | Mobile (landscape) | 4-8 | 20-24px |
| `md` | 768-991px | Tablet (portrait) | 8-12 | 24-32px |
| `lg` | 992-1199px | Tablet (landscape) / Small desktop | 12 | 32-40px |
| `xl` | 1200-1399px | Desktop | 12 | 40-48px |
| `2xl` | 1400px+ | Large desktop | 12-16 | 48-64px |

### Responsive Spacing Scale

```css
/* Responsive spacing using CSS custom properties */
:root {
  /* Mobile */
  --section-spacing: var(--space-12);    /* 48px */
  --container-padding: var(--space-4);   /* 16px */
  --card-padding: var(--space-4);        /* 16px */
}

@media (min-width: 768px) {
  /* Tablet */
  :root {
    --section-spacing: var(--space-16);  /* 64px */
    --container-padding: var(--space-6); /* 24px */
    --card-padding: var(--space-6);      /* 24px */
  }
}

@media (min-width: 1200px) {
  /* Desktop */
  :root {
    --section-spacing: var(--space-24);  /* 96px */
    --container-padding: var(--space-8); /* 32px */
    --card-padding: var(--space-8);      /* 32px */
  }
}
```

### Responsive Spacing Multipliers

```css
/* Scale spacing by viewport */
.section {
  /* Mobile: 32px, Tablet: 48px, Desktop: 64px */
  padding-block: clamp(2rem, 4vw, 4rem);
}

.container {
  /* Mobile: 16px, Tablet: 24px, Desktop: 32px */
  padding-inline: clamp(1rem, 2.5vw, 2rem);
}
```

---

## Container System

### Container Max-Widths

```css
/* Container Sizes */
--container-xs: 480px;       /* Small content */
--container-sm: 640px;       /* Form-focused pages */
--container-md: 768px;       /* Standard content */
--container-lg: 1024px;      /* Wide content */
--container-xl: 1280px;      /* Full layout */
--container-2xl: 1536px;     /* Extra wide layout */
--container-full: 100%;      /* Full width */
```

### Container Implementation

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding, 1rem);
}

/* Standard container */
.container {
  max-width: var(--container-xl);  /* 1280px */
}

/* Narrow container (articles, forms) */
.container-narrow {
  max-width: var(--container-md);  /* 768px */
}

/* Wide container (dashboards) */
.container-wide {
  max-width: var(--container-2xl); /* 1536px */
}

/* Full-width container */
.container-fluid {
  max-width: none;
}
```

### Responsive Container Padding

```css
.container {
  /* Mobile: 16px, Tablet: 24px, Desktop: 32px, Large: 40px */
  padding-inline: clamp(1rem, 2.5vw + 0.5rem, 2.5rem);
}

/* Alternative: Step-based approach */
.container {
  padding-inline: var(--space-4);  /* 16px */
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-6);  /* 24px */
  }
}

@media (min-width: 1200px) {
  .container {
    padding-inline: var(--space-8);  /* 32px */
  }
}
```

### Container Width Guidelines

**Content Readability:**
- Optimal line length: 45-75 characters (approx. 600-750px)
- Maximum line length: 85 characters (approx. 768px)
- For articles/blogs: Use `container-narrow` (768px)

**Application UI:**
- Standard layouts: Use `container-xl` (1280px)
- Wide layouts: Use `container-2xl` (1536px)
- Full-width sections: Use `container-fluid`

---

## Fluid Spacing

### CSS Clamp for Fluid Spacing

**Basic Syntax:**
```css
clamp(minimum, preferred, maximum)
```

### Fluid Spacing Scale

```css
/* Fluid spacing variables */
--space-fluid-xs: clamp(0.25rem, 0.5vw + 0.125rem, 0.5rem);    /* 4-8px */
--space-fluid-sm: clamp(0.5rem, 1vw + 0.25rem, 1rem);          /* 8-16px */
--space-fluid-md: clamp(1rem, 2vw + 0.5rem, 2rem);             /* 16-32px */
--space-fluid-lg: clamp(1.5rem, 3vw + 0.75rem, 3rem);          /* 24-48px */
--space-fluid-xl: clamp(2rem, 4vw + 1rem, 4rem);               /* 32-64px */
--space-fluid-2xl: clamp(3rem, 6vw + 1.5rem, 6rem);            /* 48-96px */
--space-fluid-3xl: clamp(4rem, 8vw + 2rem, 8rem);              /* 64-128px */
```

### Fluid Spacing Calculator

**Formula:**
```
clamp(
  [min]rem,
  [viewport-width]vw + [base]rem,
  [max]rem
)
```

**Example Calculation:**
- Min: 32px (2rem)
- Max: 96px (6rem)
- Viewport range: 768px to 1536px

```
Slope = (96 - 32) / (1536 - 768) = 64 / 768 = 8.333vw
Intercept = 32 - (8.333 × 768 / 100) = 32 - 64 = -32px (-2rem)

Result: clamp(2rem, 8.333vw - 2rem, 6rem)
```

### Recommended Fluid Spacing Usage

```css
/* Section spacing (grows from 48px to 96px) */
.section {
  padding-block: clamp(3rem, 6vw + 1.5rem, 6rem);
}

/* Container padding (grows from 16px to 32px) */
.container {
  padding-inline: clamp(1rem, 2vw + 0.5rem, 2rem);
}

/* Card gaps (grows from 16px to 32px) */
.card-grid {
  gap: clamp(1rem, 2vw + 0.5rem, 2rem);
}

/* Hero padding (grows from 64px to 128px) */
.hero {
  padding-block: clamp(4rem, 8vw + 2rem, 8rem);
}
```

### Accessibility Note

Always combine `vw` with `rem` units in fluid calculations to ensure zoom functionality works:

```css
/* ❌ BAD: Won't scale with zoom */
padding: clamp(1rem, 4vw, 4rem);

/* ✅ GOOD: Scales with zoom */
padding: clamp(1rem, 2vw + 1rem, 4rem);
```

---

## Implementation Examples

### Complete Tailwind CSS Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // Spacing scale (0.25rem = 4px base)
    spacing: {
      0: '0',
      px: '1px',
      0.5: '0.125rem',    // 2px
      1: '0.25rem',       // 4px
      1.5: '0.375rem',    // 6px
      2: '0.5rem',        // 8px
      2.5: '0.625rem',    // 10px
      3: '0.75rem',       // 12px
      3.5: '0.875rem',    // 14px
      4: '1rem',          // 16px
      5: '1.25rem',       // 20px
      6: '1.5rem',        // 24px
      7: '1.75rem',       // 28px
      8: '2rem',          // 32px
      9: '2.25rem',       // 36px
      10: '2.5rem',       // 40px
      11: '2.75rem',      // 44px
      12: '3rem',         // 48px
      14: '3.5rem',       // 56px
      16: '4rem',         // 64px
      20: '5rem',         // 80px
      24: '6rem',         // 96px
      28: '7rem',         // 112px
      32: '8rem',         // 128px
      36: '9rem',         // 144px
      40: '10rem',        // 160px
      44: '11rem',        // 176px
      48: '12rem',        // 192px
      52: '13rem',        // 208px
      56: '14rem',        // 224px
      60: '15rem',        // 240px
      64: '16rem',        // 256px
      72: '18rem',        // 288px
      80: '20rem',        // 320px
      96: '24rem',        // 384px
    },

    // Breakpoints
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },

    // Container
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    // Gap (for flexbox/grid)
    gap: theme => theme('spacing'),

    // Padding
    padding: theme => theme('spacing'),

    // Margin
    margin: theme => ({
      ...theme('spacing'),
      auto: 'auto',
    }),
  },
}
```

### CSS Custom Properties System

```css
:root {
  /* ============================================
     SPACING SCALE
     ============================================ */

  /* Base unit: 4px (0.25rem) */
  --space-unit: 0.25rem;

  /* Spacing scale */
  --space-0: 0;
  --space-1: calc(var(--space-unit) * 1);    /* 4px */
  --space-2: calc(var(--space-unit) * 2);    /* 8px */
  --space-3: calc(var(--space-unit) * 3);    /* 12px */
  --space-4: calc(var(--space-unit) * 4);    /* 16px */
  --space-5: calc(var(--space-unit) * 5);    /* 20px */
  --space-6: calc(var(--space-unit) * 6);    /* 24px */
  --space-8: calc(var(--space-unit) * 8);    /* 32px */
  --space-10: calc(var(--space-unit) * 10);  /* 40px */
  --space-12: calc(var(--space-unit) * 12);  /* 48px */
  --space-16: calc(var(--space-unit) * 16);  /* 64px */
  --space-20: calc(var(--space-unit) * 20);  /* 80px */
  --space-24: calc(var(--space-unit) * 24);  /* 96px */
  --space-32: calc(var(--space-unit) * 32);  /* 128px */

  /* Semantic spacing */
  --space-xs: var(--space-1);
  --space-sm: var(--space-2);
  --space-md: var(--space-4);
  --space-lg: var(--space-6);
  --space-xl: var(--space-8);
  --space-2xl: var(--space-12);
  --space-3xl: var(--space-16);
  --space-4xl: var(--space-24);
  --space-5xl: var(--space-32);

  /* ============================================
     FLUID SPACING
     ============================================ */

  --space-fluid-xs: clamp(0.25rem, 0.5vw + 0.125rem, 0.5rem);
  --space-fluid-sm: clamp(0.5rem, 1vw + 0.25rem, 1rem);
  --space-fluid-md: clamp(1rem, 2vw + 0.5rem, 2rem);
  --space-fluid-lg: clamp(1.5rem, 3vw + 0.75rem, 3rem);
  --space-fluid-xl: clamp(2rem, 4vw + 1rem, 4rem);
  --space-fluid-2xl: clamp(3rem, 6vw + 1.5rem, 6rem);
  --space-fluid-3xl: clamp(4rem, 8vw + 2rem, 8rem);

  /* ============================================
     CONTAINER SYSTEM
     ============================================ */

  --container-xs: 30rem;      /* 480px */
  --container-sm: 40rem;      /* 640px */
  --container-md: 48rem;      /* 768px */
  --container-lg: 64rem;      /* 1024px */
  --container-xl: 80rem;      /* 1280px */
  --container-2xl: 96rem;     /* 1536px */

  /* Container padding (responsive) */
  --container-padding: clamp(1rem, 2.5vw + 0.5rem, 2.5rem);

  /* ============================================
     COMPONENT SPACING
     ============================================ */

  /* Button */
  --button-padding-y: var(--space-3);
  --button-padding-x: var(--space-6);
  --button-gap: var(--space-2);

  /* Card */
  --card-padding: var(--space-6);
  --card-gap: var(--space-4);
  --card-spacing: var(--space-6);

  /* Form */
  --form-group-spacing: var(--space-6);
  --form-label-spacing: var(--space-2);
  --form-input-padding-y: var(--space-3);
  --form-input-padding-x: var(--space-4);

  /* Section */
  --section-spacing: var(--space-fluid-2xl);
  --section-padding: var(--space-fluid-xl);

  /* ============================================
     GRID SYSTEM
     ============================================ */

  --grid-columns: 12;
  --grid-gutter: var(--space-6);

  /* ============================================
     BASELINE GRID
     ============================================ */

  --baseline: 0.5rem;  /* 8px */

  /* Line heights */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
}

/* ============================================
   RESPONSIVE ADJUSTMENTS
   ============================================ */

@media (min-width: 768px) {
  :root {
    --card-padding: var(--space-8);
    --section-padding: var(--space-fluid-2xl);
  }
}

@media (min-width: 1200px) {
  :root {
    --grid-gutter: var(--space-8);
  }
}
```

### Utility Classes

```css
/* ============================================
   SPACING UTILITIES
   ============================================ */

/* Padding utilities */
.p-0 { padding: var(--space-0); }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
.p-3 { padding: var(--space-3); }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }
.p-12 { padding: var(--space-12); }
.p-16 { padding: var(--space-16); }

/* Padding inline (horizontal) */
.px-0 { padding-inline: var(--space-0); }
.px-1 { padding-inline: var(--space-1); }
.px-2 { padding-inline: var(--space-2); }
.px-4 { padding-inline: var(--space-4); }
.px-6 { padding-inline: var(--space-6); }
.px-8 { padding-inline: var(--space-8); }

/* Padding block (vertical) */
.py-0 { padding-block: var(--space-0); }
.py-1 { padding-block: var(--space-1); }
.py-2 { padding-block: var(--space-2); }
.py-4 { padding-block: var(--space-4); }
.py-6 { padding-block: var(--space-6); }
.py-8 { padding-block: var(--space-8); }

/* Margin utilities */
.m-0 { margin: var(--space-0); }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
.m-4 { margin: var(--space-4); }
.m-6 { margin: var(--space-6); }
.m-8 { margin: var(--space-8); }
.m-auto { margin: auto; }

/* Gap utilities */
.gap-0 { gap: var(--space-0); }
.gap-1 { gap: var(--space-1); }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }

/* Stack utilities (vertical spacing) */
.stack { display: flex; flex-direction: column; }
.stack-xs { gap: var(--space-1); }
.stack-sm { gap: var(--space-2); }
.stack-md { gap: var(--space-4); }
.stack-lg { gap: var(--space-6); }
.stack-xl { gap: var(--space-8); }

/* Container utilities */
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.container-xs { max-width: var(--container-xs); }
.container-sm { max-width: var(--container-sm); }
.container-md { max-width: var(--container-md); }
.container-lg { max-width: var(--container-lg); }
.container-xl { max-width: var(--container-xl); }
.container-2xl { max-width: var(--container-2xl); }
.container-fluid { max-width: none; }
```

### Component Examples

```css
/* ============================================
   BUTTON COMPONENT
   ============================================ */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--button-gap);
  padding: var(--button-padding-y) var(--button-padding-x);
  font-weight: 500;
  line-height: var(--line-height-tight);
  border-radius: var(--space-2);
  transition: all 0.2s;
}

.button-sm {
  --button-padding-y: var(--space-2);
  --button-padding-x: var(--space-4);
  --button-gap: var(--space-1);
  font-size: 0.875rem;
}

.button-lg {
  --button-padding-y: var(--space-4);
  --button-padding-x: var(--space-8);
  --button-gap: var(--space-3);
  font-size: 1.125rem;
}

/* ============================================
   CARD COMPONENT
   ============================================ */

.card {
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
  padding: var(--card-padding);
  border-radius: var(--space-3);
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding-bottom: var(--space-4);
  border-bottom: 1px solid #e5e7eb;
}

.card-body {
  flex: 1;
}

.card-footer {
  padding-top: var(--space-4);
  border-top: 1px solid #e5e7eb;
}

/* ============================================
   FORM COMPONENT
   ============================================ */

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--form-label-spacing);
  margin-bottom: var(--form-group-spacing);
}

.form-label {
  font-weight: 500;
  font-size: 0.875rem;
}

.form-input {
  padding: var(--form-input-padding-y) var(--form-input-padding-x);
  border: 1px solid #d1d5db;
  border-radius: var(--space-2);
  font-size: 1rem;
  line-height: var(--line-height-normal);
}

.form-hint {
  margin-top: var(--space-1);
  font-size: 0.75rem;
  color: #6b7280;
}

.form-error {
  margin-top: var(--space-2);
  font-size: 0.875rem;
  color: #ef4444;
}

/* ============================================
   SECTION COMPONENT
   ============================================ */

.section {
  padding-block: var(--section-spacing);
}

.section-header {
  margin-bottom: var(--space-12);
  text-align: center;
}

.section-title {
  margin-bottom: var(--space-4);
  font-size: 2.25rem;
  font-weight: 700;
  line-height: var(--line-height-tight);
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: var(--line-height-relaxed);
}

/* ============================================
   GRID LAYOUT
   ============================================ */

.grid {
  display: grid;
  gap: var(--grid-gutter);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1200px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Quick Reference Cheat Sheet

### Common Spacing Values

| Use Case | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| **Inline elements** | 4-8px | 8px | 8px |
| **Related components** | 8-16px | 16px | 16-24px |
| **Component padding** | 16-24px | 24px | 24-32px |
| **Card spacing** | 16-24px | 24-32px | 32-40px |
| **Section spacing** | 48-64px | 64-80px | 96-128px |
| **Container padding** | 16px | 24px | 32-40px |

### Spacing Scale Quick Lookup

```
4px   = 0.25rem  = space-1   (xs)
8px   = 0.5rem   = space-2   (sm)
12px  = 0.75rem  = space-3
16px  = 1rem     = space-4   (md) ← BASE UNIT
20px  = 1.25rem  = space-5
24px  = 1.5rem   = space-6   (lg)
32px  = 2rem     = space-8   (xl)
48px  = 3rem     = space-12  (2xl)
64px  = 4rem     = space-16  (3xl)
96px  = 6rem     = space-24  (4xl)
128px = 8rem     = space-32  (5xl)
```

### Component Spacing Formula

```
Internal spacing (padding) ≤ External spacing (margin)
```

**Example:**
- Card padding: 24px
- Card margin: 32px (minimum)

### Responsive Breakpoint Decision Tree

```
Mobile (0-767px):     Use tighter spacing, single column
Tablet (768-1023px):  Use medium spacing, 2-column grids
Desktop (1024px+):    Use generous spacing, multi-column grids
```

---

## References & Resources

### Design Systems
- [Material Design Spacing](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- [Tailwind CSS Spacing](https://tailwindcss.com/docs/customizing-spacing)
- [Bootstrap Spacing](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [Atlassian Design System](https://atlassian.design/foundations/spacing/)

### Tools
- [Utopia Fluid Responsive Design](https://utopia.fyi/)
- [Modular Scale Calculator](https://www.modularscale.com/)
- [Grid Calculator](https://gridcalculator.dk/)

### Articles
- [Space in Design Systems - Nathan Curtis](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
- [8-Point Grid System - Spec.fm](https://spec.fm/specifics/8-pt-grid)
- [Modern Fluid Typography - Smashing Magazine](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)

---

**Document Version:** 1.0
**Last Updated:** 2025-11-06
**Author:** Design System Research
**Status:** Complete Specification