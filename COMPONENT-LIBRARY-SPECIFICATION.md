# Component Library Specification
## Design System Standards & Guidelines

> **Last Updated:** 2025-01-06
> **Version:** 1.0.0
> **Based on:** Material Design, Radix UI, Tailwind UI, Carbon Design System, WCAG 2.2 AA Standards

---

## Table of Contents

1. [Foundation System](#foundation-system)
2. [Button Components](#button-components)
3. [Card Components](#card-components)
4. [Form Input Components](#form-input-components)
5. [Navigation Components](#navigation-components)
6. [Footer Components](#footer-components)
7. [Modal & Overlay Components](#modal--overlay-components)
8. [Icon System](#icon-system)
9. [Badge & Label Components](#badge--label-components)
10. [Alert & Notification Components](#alert--notification-components)
11. [Accessibility Requirements](#accessibility-requirements)
12. [Component Composition Guidelines](#component-composition-guidelines)

---

## Foundation System

### Spacing System

**Base Unit:** 4px (0.25rem)
**Grid System:** 8pt grid (multiples of 8px: 8, 16, 24, 32, 40, 48, 56, 64)

#### Spacing Scale

```css
--spacing-0: 0px;
--spacing-1: 4px;    /* 0.25rem */
--spacing-2: 8px;    /* 0.5rem */
--spacing-3: 12px;   /* 0.75rem */
--spacing-4: 16px;   /* 1rem */
--spacing-5: 20px;   /* 1.25rem */
--spacing-6: 24px;   /* 1.5rem */
--spacing-8: 32px;   /* 2rem */
--spacing-10: 40px;  /* 2.5rem */
--spacing-12: 48px;  /* 3rem */
--spacing-16: 64px;  /* 4rem */
--spacing-20: 80px;  /* 5rem */
--spacing-24: 96px;  /* 6rem */
```

**Usage Rules:**
- Use multiples of 8px for component dimensions, padding, and margin
- Use 4px half-steps for spacing icons or small text blocks
- Internal spacing (padding) should be ≤ external spacing (margin)

---

### Typography System

#### Font Size Scale (16px base)

```css
--text-xs: 12px;     /* 0.75rem - line-height: 16px (1.33) */
--text-sm: 14px;     /* 0.875rem - line-height: 20px (1.43) */
--text-base: 16px;   /* 1rem - line-height: 24px (1.5) */
--text-lg: 18px;     /* 1.125rem - line-height: 28px (1.56) */
--text-xl: 20px;     /* 1.25rem - line-height: 28px (1.4) */
--text-2xl: 24px;    /* 1.5rem - line-height: 32px (1.33) */
--text-3xl: 30px;    /* 1.875rem - line-height: 36px (1.2) */
--text-4xl: 36px;    /* 2.25rem - line-height: 40px (1.11) */
--text-5xl: 48px;    /* 3rem - line-height: 48px (1) */
--text-6xl: 60px;    /* 3.75rem - line-height: 60px (1) */
```

#### Line Height Guidelines

- **Body Copy:** 1.5x font size (minimum WCAG requirement)
- **Headings:** 1.25x font size
- **Large Display Text:** 1.14x font size
- **Small Text/Captions:** 1.5x font size

#### Letter Spacing

- **Headings:** -0.5% to 0%
- **Body Text:** 0% to 0.5%
- **Small Text:** 0.5% to 1%
- **All Caps:** 5% to 10%
- **Dark Backgrounds:** Increase by 0.5% to 1%

---

### Color System

#### Primary Colors
```css
--color-primary-50: #f0f9ff;
--color-primary-100: #e0f2fe;
--color-primary-200: #bae6fd;
--color-primary-300: #7dd3fc;
--color-primary-400: #38bdf8;
--color-primary-500: #0ea5e9;  /* Base primary */
--color-primary-600: #0284c7;
--color-primary-700: #0369a1;
--color-primary-800: #075985;
--color-primary-900: #0c4a6e;
--color-primary-950: #082f49;
```

#### Secondary Colors
```css
--color-secondary-50: #f8fafc;
--color-secondary-100: #f1f5f9;
--color-secondary-200: #e2e8f0;
--color-secondary-300: #cbd5e1;
--color-secondary-400: #94a3b8;
--color-secondary-500: #64748b;  /* Base secondary */
--color-secondary-600: #475569;
--color-secondary-700: #334155;
--color-secondary-800: #1e293b;
--color-secondary-900: #0f172a;
--color-secondary-950: #020617;
```

#### Semantic Colors

**Success:**
```css
--color-success-50: #f0fdf4;
--color-success-500: #22c55e;  /* Base */
--color-success-700: #15803d;
--color-success-900: #14532d;
```

**Warning:**
```css
--color-warning-50: #fffbeb;
--color-warning-500: #f59e0b;  /* Base */
--color-warning-700: #b45309;
--color-warning-900: #78350f;
```

**Error:**
```css
--color-error-50: #fef2f2;
--color-error-500: #ef4444;  /* Base */
--color-error-700: #b91c1c;
--color-error-900: #7f1d1d;
```

**Info:**
```css
--color-info-50: #eff6ff;
--color-info-500: #3b82f6;  /* Base */
--color-info-700: #1d4ed8;
--color-info-900: #1e3a8a;
```

#### Neutral Colors (Gray Scale)
```css
--color-neutral-50: #fafafa;
--color-neutral-100: #f5f5f5;
--color-neutral-200: #e5e5e5;
--color-neutral-300: #d4d4d4;
--color-neutral-400: #a3a3a3;
--color-neutral-500: #737373;
--color-neutral-600: #525252;
--color-neutral-700: #404040;
--color-neutral-800: #262626;
--color-neutral-900: #171717;
--color-neutral-950: #0a0a0a;
```

#### Color Usage Rules

1. **Primary:** Brand identity, main CTAs, key interactive elements (most frequent)
2. **Secondary:** Complementary actions, less prominent CTAs (used sparingly)
3. **Accent:** Highlighting important elements (use sparingly, not a primary variation)
4. **Neutral:** Backgrounds, text, borders, dividers
5. **Semantic:** State communication (error, success, warning, info)

**Contrast Requirements:**
- Text on backgrounds: 4.5:1 (body text), 3:1 (large text 18px+)
- UI components: 3:1 against adjacent colors
- Interactive elements: 3:1 minimum, 4.5:1 recommended

---

### Border Radius System

```css
--radius-none: 0px;
--radius-xs: 2px;     /* Formal, business-oriented */
--radius-sm: 4px;     /* Default for most components */
--radius-md: 6px;     /* Cards, panels */
--radius-lg: 8px;     /* Larger cards, modals */
--radius-xl: 12px;    /* Hero sections, large containers */
--radius-2xl: 16px;   /* Extra large containers */
--radius-3xl: 24px;   /* Prominent sections */
--radius-full: 9999px; /* Pills, badges, avatars */
```

**Usage Guidelines:**
- **Buttons:** `--radius-sm` (4px) or `--radius-md` (6px)
- **Cards:** `--radius-md` (6px) or `--radius-lg` (8px)
- **Inputs:** `--radius-sm` (4px) or `--radius-md` (6px)
- **Badges/Pills:** `--radius-full`
- **Modals:** `--radius-lg` (8px) or `--radius-xl` (12px)
- **Images:** Match container radius or use `--radius-md`

**Psychological Impact:**
- Small radii (2-4px): Formal, professional, business-oriented
- Medium radii (6-12px): Balanced, modern, accessible
- Large radii (16-24px): Friendly, casual, approachable

---

### Shadow System (Elevation)

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

**Elevation Levels:**
- **0dp:** Default surface (no shadow)
- **2dp:** Cards at rest, raised elements (`--shadow-sm`)
- **4dp:** App bar, search bar (`--shadow-md`)
- **8dp:** Buttons on hover, cards on hover (`--shadow-lg`)
- **16dp:** Navigation drawer, modal dialogs (`--shadow-xl`)
- **24dp:** Overlays, popovers (`--shadow-2xl`)

**Usage Rules:**
- Never use shadows and borders simultaneously
- Cards on white backgrounds: Use borders
- Cards on colored/transparent backgrounds: Use shadows
- Increase elevation on hover/interaction

---

## Button Components

### Anatomy

```
┌─────────────────────────────────────┐
│ [Icon]  Button Text  [Icon]         │
└─────────────────────────────────────┘
 ↑      ↑            ↑       ↑
 Padding Leading    Trailing Padding
 (12-16px) Icon      Icon    (12-16px)
         (16-20px)  (16-20px)
```

**Structure:**
- **Container:** Button wrapper with padding, border-radius, background
- **Label:** Text content (required)
- **Icon (optional):** Leading or trailing icon (16-24px)
- **Ripple/Focus Ring:** Interaction feedback

---

### Button Variants

#### 1. Primary Button (Solid)

**Purpose:** Main call-to-action, highest emphasis

```css
/* Default State */
background: var(--color-primary-500);
color: white;
border: none;
padding: 12px 24px;
border-radius: var(--radius-md);
font-size: var(--text-base);
font-weight: 600;
line-height: 1.5;
transition: all 150ms ease-in-out;
box-shadow: var(--shadow-sm);

/* Hover State */
background: var(--color-primary-600);
box-shadow: var(--shadow-md);
transform: translateY(-1px);

/* Active/Pressed State */
background: var(--color-primary-700);
box-shadow: var(--shadow-xs);
transform: translateY(0);

/* Focus State */
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;

/* Disabled State */
background: var(--color-neutral-200);
color: var(--color-neutral-400);
cursor: not-allowed;
box-shadow: none;
opacity: 0.6;
```

**Accessibility:**
- Contrast ratio: 4.5:1 minimum (text on background)
- Focus indicator: 3:1 contrast with adjacent colors
- ARIA attributes: `aria-disabled="true"` when disabled
- Hover delay: 150-200ms to prevent accidental triggers

---

#### 2. Secondary Button (Outline)

**Purpose:** Secondary actions, less emphasis than primary

```css
/* Default State */
background: transparent;
color: var(--color-primary-500);
border: 2px solid var(--color-primary-500);
padding: 10px 22px; /* Adjusted for border */
border-radius: var(--radius-md);
font-size: var(--text-base);
font-weight: 600;
transition: all 150ms ease-in-out;

/* Hover State */
background: var(--color-primary-50);
border-color: var(--color-primary-600);
color: var(--color-primary-600);

/* Active/Pressed State */
background: var(--color-primary-100);
border-color: var(--color-primary-700);
color: var(--color-primary-700);

/* Focus State */
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;

/* Disabled State */
border-color: var(--color-neutral-300);
color: var(--color-neutral-400);
cursor: not-allowed;
opacity: 0.6;
```

---

#### 3. Ghost Button (Text)

**Purpose:** Tertiary actions, minimal visual weight

```css
/* Default State */
background: transparent;
color: var(--color-primary-500);
border: none;
padding: 12px 16px;
border-radius: var(--radius-md);
font-size: var(--text-base);
font-weight: 600;
transition: all 150ms ease-in-out;

/* Hover State */
background: var(--color-primary-50);
color: var(--color-primary-600);

/* Active/Pressed State */
background: var(--color-primary-100);
color: var(--color-primary-700);

/* Focus State */
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;

/* Disabled State */
color: var(--color-neutral-400);
cursor: not-allowed;
opacity: 0.6;
```

---

#### 4. Danger/Destructive Button

**Purpose:** Destructive actions (delete, remove, etc.)

```css
/* Default State */
background: var(--color-error-500);
color: white;
border: none;
padding: 12px 24px;
border-radius: var(--radius-md);
box-shadow: var(--shadow-sm);

/* Hover State */
background: var(--color-error-600);
box-shadow: var(--shadow-md);

/* Focus State */
outline: 2px solid var(--color-error-500);
outline-offset: 2px;
```

---

### Button Sizes

```css
/* Small */
.btn-sm {
  padding: 8px 16px;
  font-size: var(--text-sm);
  min-height: 32px;
  gap: 6px; /* Icon spacing */
}

/* Medium (Default) */
.btn-md {
  padding: 12px 24px;
  font-size: var(--text-base);
  min-height: 40px;
  gap: 8px;
}

/* Large */
.btn-lg {
  padding: 16px 32px;
  font-size: var(--text-lg);
  min-height: 48px;
  gap: 10px;
}

/* Extra Large */
.btn-xl {
  padding: 20px 40px;
  font-size: var(--text-xl);
  min-height: 56px;
  gap: 12px;
}
```

---

### Button States Summary

| State | Visual Changes | User Action |
|-------|---------------|-------------|
| **Default** | Base styling | None |
| **Hover** | Darker background, elevated shadow, slight lift | Mouse over |
| **Active/Pressed** | Darkest background, reduced shadow, pushed down | Click/tap |
| **Focus** | Visible outline ring (2px, 2px offset) | Keyboard focus (Tab) |
| **Disabled** | Muted colors, no shadow, not interactive | N/A (aria-disabled) |
| **Loading** | Spinner icon, reduced opacity, disabled interaction | Processing |

---

### Button Icon Guidelines

**Icon Sizes:**
- Small button: 16px icon
- Medium button: 20px icon
- Large button: 24px icon

**Icon Placement:**
- Leading icon: Left side, 8-10px gap from text
- Trailing icon: Right side, 8-10px gap from text
- Icon-only button: 40x40px minimum touch target (48x48px recommended)

**Icon-Only Buttons:**
```css
.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
}

/* Touch-friendly size */
.btn-icon-lg {
  width: 48px;
  height: 48px;
}
```

**Accessibility for Icon Buttons:**
- Always include `aria-label` for screen readers
- Use `title` attribute for tooltip on hover
- Ensure 3:1 contrast ratio for icon color

---

### Button Accessibility Checklist

- [ ] Minimum touch target: 44x44px (WCAG 2.2 Level AA)
- [ ] Recommended touch target: 48x48px
- [ ] Text contrast: 4.5:1 against background
- [ ] Focus indicator: 3:1 contrast, 2px visible outline
- [ ] Keyboard accessible: Tab to focus, Enter/Space to activate
- [ ] Disabled state: `aria-disabled="true"` attribute
- [ ] Icon-only buttons: `aria-label` required
- [ ] Loading state: `aria-busy="true"` when processing
- [ ] Hover delay: 150-200ms to prevent accidental triggers

---

### When to Use Which Button Variant

| Variant | Use Case | Example |
|---------|----------|---------|
| **Primary (Solid)** | Main action, highest priority | "Submit", "Save", "Continue", "Buy Now" |
| **Secondary (Outline)** | Secondary action, alternative choice | "Cancel", "Back", "Learn More" |
| **Ghost (Text)** | Tertiary action, minimal emphasis | "Skip", "Not Now", "View Details" |
| **Danger** | Destructive action, requires confirmation | "Delete", "Remove", "Unsubscribe" |
| **Icon-Only** | Compact action, obvious meaning | Close (×), Menu (☰), Search (🔍) |

---

## Card Components

### Anatomy

```
┌───────────────────────────────────────┐
│ ┌───────────────────────────────────┐ │ ← Header
│ │ [Icon] Title          [Action]    │ │   (optional)
│ └───────────────────────────────────┘ │
│                                       │
│ ┌───────────────────────────────────┐ │ ← Media
│ │         Image/Video               │ │   (optional)
│ └───────────────────────────────────┘ │
│                                       │
│   Body Content                        │ ← Content
│   Lorem ipsum dolor sit amet...       │   (required)
│                                       │
│ ┌───────────────────────────────────┐ │ ← Footer/Actions
│ │ [Button]            [Button]      │ │   (optional)
│ └───────────────────────────────────┘ │
└───────────────────────────────────────┘
 ↑                                     ↑
 Padding (16-24px)           Padding (16-24px)
```

**Structure:**
- **Container:** Outer wrapper with border/shadow, border-radius
- **Header (optional):** Title, subtitle, actions/menu
- **Media (optional):** Image, video, or graphic
- **Content (required):** Body text, description, metadata
- **Footer/Actions (optional):** Buttons, links, additional actions

---

### Card Variants

#### 1. Basic Card (Elevated)

**Purpose:** Display grouped information with depth

```css
.card {
  background: white;
  border-radius: var(--radius-lg); /* 8px */
  box-shadow: var(--shadow-md);
  padding: 24px;
  transition: all 200ms ease-in-out;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* On colored backgrounds - use shadow */
.card-elevated {
  box-shadow: var(--shadow-md);
  border: none;
}
```

---

#### 2. Outlined Card

**Purpose:** Cards on white/light backgrounds

```css
.card-outlined {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: none; /* No shadow with borders */
  padding: 24px;
  transition: all 200ms ease-in-out;
}

.card-outlined:hover {
  border-color: var(--color-neutral-300);
  box-shadow: var(--shadow-sm);
}
```

**Important:** Never use shadows and borders simultaneously

---

#### 3. Interactive Card (Clickable)

**Purpose:** Entire card is clickable/tappable

```css
.card-interactive {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 24px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.card-interactive:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--color-primary-500); /* Optional highlight */
}

.card-interactive:active {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.card-interactive:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

**Accessibility:**
- Use semantic `<a>` or `<button>` element
- Include `aria-label` describing card purpose
- Ensure entire card is keyboard accessible

---

### Card Spacing & Sizing

**Padding Options:**
```css
.card-padding-sm { padding: 16px; }     /* Compact cards */
.card-padding-md { padding: 24px; }     /* Default */
.card-padding-lg { padding: 32px; }     /* Spacious cards */
```

**Content Spacing:**
```css
/* Gap between card sections */
.card > * + * {
  margin-top: 16px; /* 8pt grid */
}

/* Header spacing */
.card-header {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-neutral-200);
  margin-bottom: 16px;
}

/* Footer spacing */
.card-footer {
  padding-top: 16px;
  border-top: 1px solid var(--color-neutral-200);
  margin-top: 16px;
  display: flex;
  gap: 12px; /* Space between action buttons */
}
```

---

### Card Media

**Image Cards:**
```css
.card-media {
  width: 100%;
  height: auto;
  border-radius: var(--radius-md); /* 6px */
  margin-bottom: 16px;
  object-fit: cover;
}

/* Full-width media (top of card) */
.card-media-full {
  width: calc(100% + 48px); /* Negative padding */
  margin: -24px -24px 16px -24px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}
```

---

### Grid Layouts

**Card Grids:**
```css
/* Responsive card grid */
.card-grid {
  display: grid;
  gap: 24px; /* 8pt grid multiple */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

/* 2-column grid */
.card-grid-2 {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}

/* 3-column grid */
.card-grid-3 {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .card-grid-2,
  .card-grid-3 {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
}
```

---

### Card Accessibility

- [ ] Use semantic HTML: `<article>` or `<section>`
- [ ] Clickable cards: Wrap in `<a>` or `<button>` element
- [ ] Focus indicator: 2px outline, 2px offset
- [ ] Keyboard navigation: Tab to focus, Enter/Space to activate
- [ ] Screen reader: Include descriptive `aria-label` for interactive cards
- [ ] Contrast: 3:1 for borders against background
- [ ] Touch target: Minimum 44x44px for any interactive elements

---

### Card Best Practices

1. **Shadow vs. Border:** Use shadows on colored backgrounds, borders on white
2. **Consistent Radius:** Apply same border-radius to card container and nested images
3. **Padding:** Stick to 8pt grid (16px, 24px, 32px)
4. **Hover State:** Increase elevation (shadow-lg) and slight lift (translateY)
5. **Content Hierarchy:** Use visual separation (borders/spacing) between sections
6. **Loading State:** Include skeleton loader pattern during content fetch
7. **Empty State:** Provide meaningful placeholder when card has no content

---

## Form Input Components

### Anatomy

```
┌─────────────────────────────────────────┐
│ Label *                      [Icon]     │ ← Label (required)
│ ┌─────────────────────────────────────┐ │
│ │ [Icon]  Input value         [Icon]  │ │ ← Input Field
│ └─────────────────────────────────────┘ │
│ Helper text or error message            │ ← Helper/Error Text
└─────────────────────────────────────────┘
```

**Structure:**
- **Label:** Visible, persistent label (required)
- **Input Container:** Border, background, padding
- **Input Element:** Text input or interactive element
- **Icons (optional):** Leading/trailing icons
- **Helper Text (optional):** Guidance or format examples
- **Error Message:** Validation feedback

---

### Text Input (Default State)

```css
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-neutral-700);
  margin-bottom: 6px;
}

.input-label-required::after {
  content: " *";
  color: var(--color-error-500);
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--color-neutral-900);
  background: white;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  transition: all 150ms ease-in-out;
}

/* With leading icon */
.input-with-icon {
  padding-left: 40px;
}

/* With trailing icon */
.input-with-trailing-icon {
  padding-right: 40px;
}

.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-neutral-400);
  width: 20px;
  height: 20px;
}

.input-icon-leading {
  left: 12px;
}

.input-icon-trailing {
  right: 12px;
}
```

---

### Input States

#### 1. Focus State

```css
.input-field:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1); /* Focus ring */
}

/* Focus state icon color */
.input-field:focus + .input-icon {
  color: var(--color-primary-500);
}
```

**Accessibility:**
- Focus indicator must be visible (2px minimum)
- Contrast ratio: 3:1 against adjacent colors
- Focus ring should not overlap with border

---

#### 2. Hover State

```css
.input-field:hover:not(:disabled) {
  border-color: var(--color-neutral-400);
}
```

---

#### 3. Error State

```css
.input-field-error {
  border-color: var(--color-error-500);
  background: var(--color-error-50);
}

.input-field-error:focus {
  border-color: var(--color-error-500);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-error-message {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm);
  color: var(--color-error-700);
  margin-top: 6px;
}

.input-error-icon {
  width: 16px;
  height: 16px;
  color: var(--color-error-500);
}
```

**Accessibility:**
- Use `aria-invalid="true"` on failed fields
- Link error message with `aria-describedby="error-id"`
- Announce errors dynamically with `role="alert"`
- Use `required` attribute for required fields

---

#### 4. Success/Valid State

```css
.input-field-success {
  border-color: var(--color-success-500);
}

.input-field-success:focus {
  border-color: var(--color-success-500);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.input-success-icon {
  color: var(--color-success-500);
}
```

---

#### 5. Disabled State

```css
.input-field:disabled {
  background: var(--color-neutral-100);
  color: var(--color-neutral-400);
  border-color: var(--color-neutral-200);
  cursor: not-allowed;
  opacity: 0.6;
}
```

**Accessibility:**
- Use `disabled` attribute
- Add `aria-disabled="true"`
- WCAG: No contrast requirement for disabled states

---

### Helper Text

```css
.input-helper-text {
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  margin-top: 6px;
}

/* Example format in helper text */
.input-helper-example {
  font-family: monospace;
  background: var(--color-neutral-100);
  padding: 2px 6px;
  border-radius: var(--radius-xs);
}
```

**Usage:**
- Provide format examples: "e.g., john@example.com"
- Explain validation rules: "Password must be at least 8 characters"
- Guidance remains visible (unlike placeholder)

---

### Placeholder Text

```css
.input-field::placeholder {
  color: var(--color-neutral-400);
  opacity: 1; /* Firefox default is less than 1 */
}
```

**Important Rules:**
- **Never** use placeholder as a label replacement
- Contrast ratio: 4.5:1 minimum (WCAG AA)
- Use for format examples only: "555-123-4567"
- Placeholder disappears on input (accessibility issue)
- Always provide persistent label

---

### Input Sizes

```css
/* Small */
.input-sm {
  padding: 8px 12px;
  font-size: var(--text-sm);
  min-height: 36px;
}

/* Medium (Default) */
.input-md {
  padding: 12px 16px;
  font-size: var(--text-base);
  min-height: 44px;
}

/* Large */
.input-lg {
  padding: 16px 20px;
  font-size: var(--text-lg);
  min-height: 52px;
}
```

**Touch Target:** Minimum 44px height (WCAG 2.2 AA)

---

### Select Dropdown

```css
.select-field {
  appearance: none; /* Remove default styling */
  width: 100%;
  padding: 12px 40px 12px 16px; /* Extra padding for arrow */
  font-size: var(--text-base);
  background: white url('data:image/svg+xml,...') no-repeat right 12px center;
  background-size: 16px;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.select-field:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}
```

---

### Checkbox

```css
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.checkbox-input {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-neutral-400);
  border-radius: var(--radius-xs);
  cursor: pointer;
  position: relative;
  transition: all 150ms ease-in-out;
}

.checkbox-input:checked {
  background: var(--color-primary-500);
  border-color: var(--color-primary-500);
}

.checkbox-input:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-input:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.checkbox-label {
  font-size: var(--text-base);
  color: var(--color-neutral-700);
  user-select: none;
}
```

**Accessibility:**
- Minimum touch target: 44x44px (add padding if needed)
- Label must be associated with input (`for` and `id`)
- Keyboard accessible: Space to toggle
- Focus indicator required

---

### Radio Button

```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.radio-input {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-neutral-400);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: all 150ms ease-in-out;
}

.radio-input:checked {
  border-color: var(--color-primary-500);
}

.radio-input:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary-500);
}

.radio-input:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

---

### Textarea

```css
.textarea-field {
  width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  font-size: var(--text-base);
  line-height: 1.5;
  font-family: inherit;
  color: var(--color-neutral-900);
  background: white;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  resize: vertical;
  transition: all 150ms ease-in-out;
}

.textarea-field:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}
```

---

### Form Input Accessibility Checklist

- [ ] **Labels:** Always visible, associated with input (`for`/`id`)
- [ ] **Required Fields:** Indicated with asterisk (*) and `required` attribute
- [ ] **Placeholder:** Never replaces label, contrast 4.5:1
- [ ] **Helper Text:** Persistent, explains format/requirements
- [ ] **Error Messages:** `aria-invalid="true"`, `aria-describedby`, `role="alert"`
- [ ] **Focus Indicator:** Visible 2px outline, 3:1 contrast
- [ ] **Touch Target:** Minimum 44x44px (WCAG 2.2 AA)
- [ ] **Keyboard Navigation:** Tab to focus, Enter/Space to interact
- [ ] **Input Contrast:** Border 3:1 against background
- [ ] **Disabled State:** `disabled` and `aria-disabled="true"`

---

### Inline Validation Best Practices

1. **Timing:** Validate after user leaves field (on blur), not while typing
2. **Success Feedback:** Show checkmark icon for valid fields
3. **Error Messages:** Specific, actionable ("Email format invalid" not "Error")
4. **Real-time for passwords:** Show strength meter while typing
5. **Format Guidance:** Use helper text for format examples
6. **Clear Errors:** Remove error state when user starts correcting
7. **Form-level Validation:** Summary at top for multiple errors

---

## Navigation Components

### Anatomy

```
Desktop:
┌────────────────────────────────────────────────────────┐
│ [Logo]  Link1  Link2  Link3  Link4       [Search] [CTA]│
└────────────────────────────────────────────────────────┘

Mobile:
┌────────────────────────────────────────────────────────┐
│ [☰]  [Logo]                              [Search] [CTA]│
└────────────────────────────────────────────────────────┘
```

---

### Header Navigation (Desktop)

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px; /* Or 72px */
  background: white;
  border-bottom: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  height: 32px;
  width: auto;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 32px; /* 8pt grid multiple */
}

.header-link {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-neutral-700);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  transition: all 150ms ease-in-out;
}

.header-link:hover {
  color: var(--color-primary-500);
  background: var(--color-primary-50);
}

.header-link:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.header-link-active {
  color: var(--color-primary-600);
  font-weight: 600;
}
```

---

### Dropdown Menu

```css
.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 200ms ease-in-out;
  z-index: 1100;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: var(--text-sm);
  color: var(--color-neutral-700);
  text-decoration: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.dropdown-item:hover {
  background: var(--color-primary-50);
  color: var(--color-primary-600);
}

.dropdown-item:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}
```

**Accessibility:**
- Use `aria-expanded` on trigger (true/false)
- Use `aria-haspopup="menu"` on trigger
- Add `role="menu"` to dropdown container
- Add `role="menuitem"` to each item
- Keyboard: Arrow keys navigate, Escape closes
- Close on outside click or Tab away

---

### Mobile Navigation (Hamburger Menu)

```css
/* Hamburger Button */
.hamburger-button {
  display: none; /* Show only on mobile */
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 12px;
}

.hamburger-icon {
  width: 24px;
  height: 2px;
  background: var(--color-neutral-800);
  position: relative;
  transition: all 200ms ease-in-out;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-neutral-800);
  transition: all 200ms ease-in-out;
}

.hamburger-icon::before {
  top: -8px;
}

.hamburger-icon::after {
  top: 8px;
}

/* Open state (X icon) */
.hamburger-button.active .hamburger-icon {
  background: transparent;
}

.hamburger-button.active .hamburger-icon::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger-button.active .hamburger-icon::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 24px;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 300ms ease-in-out;
  z-index: 999;
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-menu-item {
  display: block;
  padding: 16px;
  font-size: var(--text-lg);
  color: var(--color-neutral-700);
  text-decoration: none;
  border-bottom: 1px solid var(--color-neutral-200);
}

.mobile-menu-item:hover {
  background: var(--color-primary-50);
  color: var(--color-primary-600);
}

@media (max-width: 768px) {
  .hamburger-button {
    display: flex;
  }

  .header-nav {
    display: none; /* Hide desktop nav */
  }
}
```

**Accessibility:**
- Hamburger button: `aria-label="Toggle navigation menu"`
- Add `aria-expanded="true/false"` based on state
- Trap focus within open mobile menu
- Close with Escape key
- Prevent body scroll when menu is open

---

### Breadcrumbs

```css
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  font-size: var(--text-sm);
}

.breadcrumb-item {
  color: var(--color-neutral-600);
  text-decoration: none;
  transition: color 150ms ease-in-out;
}

.breadcrumb-item:hover {
  color: var(--color-primary-500);
}

.breadcrumb-separator {
  color: var(--color-neutral-400);
  user-select: none;
}

.breadcrumb-item-active {
  color: var(--color-neutral-900);
  font-weight: 500;
  pointer-events: none;
}
```

**Accessibility:**
- Use `<nav aria-label="Breadcrumb">`
- Current page: `aria-current="page"`
- Use semantic `<ol>` list structure

---

### Tabs Navigation

```css
.tabs {
  display: flex;
  border-bottom: 2px solid var(--color-neutral-200);
  gap: 0;
}

.tab {
  padding: 12px 24px;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-neutral-600);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.tab:hover {
  color: var(--color-primary-500);
  background: var(--color-primary-50);
}

.tab-active {
  color: var(--color-primary-600);
  border-bottom-color: var(--color-primary-600);
}

.tab:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}
```

**Accessibility:**
- Use `role="tablist"` on container
- Use `role="tab"` on each tab
- Use `aria-selected="true/false"`
- Arrow keys navigate between tabs
- Tab panels: `role="tabpanel"`, `aria-labelledby="tab-id"`

---

### Navigation Accessibility Checklist

- [ ] **Keyboard Navigation:** Tab to focus, Enter to activate
- [ ] **Focus Indicator:** 2px outline, visible on all links
- [ ] **Skip Link:** "Skip to main content" at top
- [ ] **ARIA Landmarks:** `<nav>` with `aria-label` or `aria-labelledby`
- [ ] **Current Page:** `aria-current="page"` on active link
- [ ] **Hamburger Menu:** `aria-expanded`, `aria-label`, focus trap
- [ ] **Dropdown:** `aria-haspopup`, `aria-expanded`, Arrow key navigation
- [ ] **Touch Target:** Minimum 44x44px for all links/buttons
- [ ] **Contrast:** 4.5:1 for text, 3:1 for focus indicators

---

## Footer Components

### Anatomy

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [Logo]                                                │
│                                                        │
│  Column 1       Column 2       Column 3       Column 4│
│  • Link 1       • Link 1       • Link 1       • Link 1│
│  • Link 2       • Link 2       • Link 2       • Link 2│
│  • Link 3       • Link 3       • Link 3       • Link 3│
│                                                        │
│  ──────────────────────────────────────────────────── │
│                                                        │
│  [Social Icons]              © 2025 Company. All rights│
│  [FB] [TW] [IG] [LI]         reserved. Privacy | Terms│
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### Footer Structure

```css
.footer {
  background: var(--color-neutral-900);
  color: var(--color-neutral-300);
  padding: 64px 24px 24px;
}

.footer-main {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  margin-bottom: 48px;
}

.footer-column-title {
  font-size: var(--text-base);
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-size: var(--text-sm);
  color: var(--color-neutral-300);
  text-decoration: none;
  transition: color 150ms ease-in-out;
}

.footer-link:hover {
  color: white;
}

.footer-link:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-xs);
}
```

---

### Footer Bottom (Copyright & Social)

```css
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid var(--color-neutral-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-copyright {
  font-size: var(--text-sm);
  color: var(--color-neutral-400);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-neutral-800);
  border-radius: var(--radius-md);
  color: var(--color-neutral-300);
  transition: all 150ms ease-in-out;
}

.footer-social-link:hover {
  background: var(--color-primary-500);
  color: white;
}

.footer-social-link:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

---

### Footer Responsive

```css
@media (max-width: 768px) {
  .footer {
    padding: 48px 16px 24px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
```

---

### Footer Accessibility

- [ ] Use semantic `<footer>` element
- [ ] Heading hierarchy: Use `<h2>` or `<h3>` for column titles
- [ ] Social links: Include `aria-label="Facebook"` etc.
- [ ] Focus indicators: 2px outline on all links
- [ ] Contrast: 4.5:1 for text against background
- [ ] Keyboard navigation: Tab through all links

---

## Modal & Overlay Components

### Anatomy

```
┌────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ ← Backdrop
│ ░░░░░░░░┌──────────────────────────────┐░░░░░░░░░░░░ │
│ ░░░░░░░░│ Modal Title            [×]   │░░░░░░░░░░░░ │ ← Header
│ ░░░░░░░░├──────────────────────────────┤░░░░░░░░░░░░ │
│ ░░░░░░░░│                              │░░░░░░░░░░░░ │
│ ░░░░░░░░│ Modal content goes here...   │░░░░░░░░░░░░ │ ← Body
│ ░░░░░░░░│                              │░░░░░░░░░░░░ │
│ ░░░░░░░░├──────────────────────────────┤░░░░░░░░░░░░ │
│ ░░░░░░░░│        [Cancel]  [Confirm]   │░░░░░░░░░░░░ │ ← Footer
│ ░░░░░░░░└──────────────────────────────┘░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────────────────────┘
```

---

### Modal Structure

```css
/* Backdrop */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 200ms ease-in-out;
}

.modal-backdrop.active {
  opacity: 1;
  visibility: visible;
}

/* Modal Container */
.modal {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: scale(0.9) translateY(20px);
  transition: transform 200ms ease-in-out;
}

.modal-backdrop.active .modal {
  transform: scale(1) translateY(0);
}
```

---

### Modal Header

```css
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid var(--color-neutral-200);
}

.modal-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-neutral-900);
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--color-neutral-600);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.modal-close:hover {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

.modal-close:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

---

### Modal Body

```css
.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.modal-body p {
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--color-neutral-700);
  margin: 0 0 16px 0;
}

.modal-body p:last-child {
  margin-bottom: 0;
}
```

---

### Modal Footer

```css
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 24px;
  border-top: 1px solid var(--color-neutral-200);
}
```

---

### Focus Trap Implementation

**JavaScript (Conceptual):**
```javascript
// When modal opens:
// 1. Store currently focused element
const previousFocus = document.activeElement;

// 2. Move focus to first focusable element in modal
const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
firstFocusable?.focus();

// 3. Trap focus within modal
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  // 4. Close on Escape
  if (e.key === 'Escape') {
    closeModal();
  }
});

// 5. When modal closes, restore focus
function closeModal() {
  modal.classList.remove('active');
  previousFocus?.focus();
}
```

---

### Modal Accessibility Requirements

- [ ] **role="dialog"** on modal container
- [ ] **aria-modal="true"** to indicate modal state
- [ ] **aria-labelledby="modal-title-id"** linking to title
- [ ] **aria-describedby="modal-body-id"** linking to description
- [ ] **Focus trap:** Tab cycles through modal elements only
- [ ] **Escape key:** Closes modal
- [ ] **Focus management:** Move focus to modal on open, restore on close
- [ ] **Backdrop click:** Optional, close modal (use with caution)
- [ ] **Inert background:** `aria-hidden="true"` on background content
- [ ] **Keyboard navigation:** All interactive elements accessible via Tab

---

### Native HTML Dialog Element

**Modern approach using `<dialog>`:**

```html
<dialog id="myDialog" class="modal">
  <div class="modal-header">
    <h2 class="modal-title">Dialog Title</h2>
    <button class="modal-close" onclick="document.getElementById('myDialog').close()">×</button>
  </div>
  <div class="modal-body">
    <p>Dialog content...</p>
  </div>
  <div class="modal-footer">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-primary">Confirm</button>
  </div>
</dialog>
```

```css
/* Native dialog backdrop */
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
}
```

**Benefits:**
- Automatic focus trapping
- Built-in Escape key handling
- Automatic backdrop styling via `::backdrop`
- Native `showModal()` and `close()` methods

---

### Modal Sizes

```css
.modal-sm { max-width: 400px; }
.modal-md { max-width: 600px; } /* Default */
.modal-lg { max-width: 800px; }
.modal-xl { max-width: 1000px; }
.modal-full { max-width: 95vw; }
```

---

### Confirmation Modal Pattern

```html
<dialog class="modal modal-sm" role="alertdialog">
  <div class="modal-header">
    <h2 class="modal-title">Confirm Deletion</h2>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  </div>
  <div class="modal-footer">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-danger">Delete</button>
  </div>
</dialog>
```

**Use `role="alertdialog"` for confirmation/destructive actions**

---

## Icon System

### Icon Sizes

```css
--icon-xs: 12px;
--icon-sm: 16px;
--icon-md: 20px;  /* Default */
--icon-lg: 24px;
--icon-xl: 32px;
--icon-2xl: 48px;
```

**Component-specific sizing:**
- Small button: 16px icon
- Medium button: 20px icon
- Large button: 24px icon
- Input fields: 20px icon
- Navigation: 20-24px icon

---

### Icon Alignment & Spacing

```css
/* Icon with text (inline) */
.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 8px; /* Standard gap */
}

/* Center alignment (not baseline) */
.icon {
  display: inline-flex;
  align-items: center;
  justify-center: center;
}

/* Icon in button */
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-with-icon .icon-leading {
  margin-right: 0; /* Gap handles spacing */
}

.btn-with-icon .icon-trailing {
  margin-left: 0;
}
```

**Alignment Rules:**
- Center-align icons with text (never baseline-align)
- Maintain 8px gap between icon and text
- Center icons within bounding box

---

### Icon Colors

```css
/* Monochromatic (recommended) */
.icon {
  color: currentColor; /* Inherits text color */
}

/* Semantic colors */
.icon-primary { color: var(--color-primary-500); }
.icon-success { color: var(--color-success-500); }
.icon-warning { color: var(--color-warning-500); }
.icon-error { color: var(--color-error-500); }
.icon-muted { color: var(--color-neutral-400); }
```

**Color Rules:**
- Use 1 color per icon (monochromatic)
- Icons inherit text color by default
- Don't use more than one color within an icon
- Contrast ratio: 3:1 for UI icons, 4.5:1 for interactive icons

---

### Icon Button (Icon-Only)

```css
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 44px; /* Touch target */
  min-height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: var(--color-neutral-600);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.icon-button:hover {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

.icon-button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Touch-friendly size */
.icon-button-lg {
  width: 48px;
  height: 48px;
}
```

---

### Icon Accessibility

**For decorative icons:**
```html
<i class="icon" aria-hidden="true"></i>
```

**For interactive icons:**
```html
<button class="icon-button" aria-label="Close dialog">
  <i class="icon icon-close"></i>
</button>
```

**For icons with text:**
```html
<button class="btn">
  <i class="icon" aria-hidden="true"></i>
  <span>Save</span>
</button>
```

**Accessibility Checklist:**
- [ ] **Icon-only buttons:** Always include `aria-label`
- [ ] **Decorative icons:** Use `aria-hidden="true"`
- [ ] **Icons with text:** Icons can be decorative (`aria-hidden`)
- [ ] **Contrast:** 3:1 for UI icons, 4.5:1 for navigation
- [ ] **Touch target:** 44x44px minimum (48x48px recommended)
- [ ] **Focus indicator:** 2px outline, visible on keyboard focus
- [ ] **Tooltips:** Use `title` attribute for hover hints

---

### Icon Implementation (SVG)

**Inline SVG (Recommended):**
```html
<svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." fill="currentColor"/>
</svg>
```

**Benefits of SVG:**
- Scalable without quality loss
- Small file size
- Stylable with CSS (color, size)
- Accessible with proper ARIA attributes

---

### Icon Best Practices

1. **Simplicity:** Icons should be recognizable at a glance
2. **Consistency:** Maintain uniform stroke width (2px recommended)
3. **Pixel Grid:** Align to pixel grid for crispness
4. **Spacing:** 1px padding within bounding box
5. **File Format:** Use SVG for scalability
6. **Loading:** Inline critical icons, lazy-load others
7. **Testing:** Test at actual usage size, not design size

---

## Badge & Label Components

### Anatomy

```
┌──────────────┐
│  Text Label  │  ← Badge
└──────────────┘

┌────┐
│ 99 │  ← Notification Badge (Count)
└────┘

┌──┐
│ • │  ← Dot Badge (Status)
└──┘
```

---

### Badge Variants

#### 1. Text Badge (Default)

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: var(--text-xs);
  font-weight: 600;
  line-height: 1;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

/* Primary */
.badge-primary {
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

/* Success */
.badge-success {
  background: var(--color-success-100);
  color: var(--color-success-700);
}

/* Warning */
.badge-warning {
  background: var(--color-warning-100);
  color: var(--color-warning-700);
}

/* Error */
.badge-error {
  background: var(--color-error-100);
  color: var(--color-error-700);
}

/* Neutral */
.badge-neutral {
  background: var(--color-neutral-100);
  color: var(--color-neutral-700);
}
```

---

#### 2. Notification Badge (Count)

```css
.notification-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  background: var(--color-error-500);
  color: white;
  font-size: 11px;
  font-weight: 700;
  border-radius: var(--radius-full);
  border: 2px solid white;
}

/* Position relative parent */
.badge-parent {
  position: relative;
}

/* For counts > 99 */
.notification-badge-large {
  font-size: 10px;
  padding: 0 5px;
}
```

**Usage:**
```html
<div class="badge-parent">
  <button class="icon-button">
    <i class="icon-bell"></i>
  </button>
  <span class="notification-badge">12</span>
</div>
```

---

#### 3. Dot Badge (Status Indicator)

```css
.dot-badge {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid white;
}

/* Status colors */
.dot-badge-online { background: var(--color-success-500); }
.dot-badge-away { background: var(--color-warning-500); }
.dot-badge-busy { background: var(--color-error-500); }
.dot-badge-offline { background: var(--color-neutral-400); }

/* With label */
.dot-badge-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

---

#### 4. Icon Badge

```css
.badge-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
}

.badge-icon {
  width: 14px;
  height: 14px;
}
```

---

### Badge Sizes

```css
/* Small */
.badge-sm {
  padding: 2px 8px;
  font-size: 10px;
}

/* Medium (Default) */
.badge-md {
  padding: 4px 12px;
  font-size: var(--text-xs);
}

/* Large */
.badge-lg {
  padding: 6px 16px;
  font-size: var(--text-sm);
}
```

---

### Badge Use Cases

| Type | Use Case | Example |
|------|----------|---------|
| **Text Badge** | Category labels, tags, status | "New", "Featured", "Beta" |
| **Notification Badge** | Unread counts, notifications | "12" on inbox icon |
| **Dot Badge** | User status, availability | Online (green), Away (yellow) |
| **Icon Badge** | Badge with context icon | ⭐ "Premium", ✓ "Verified" |

---

### Badge Accessibility

- [ ] **Contrast:** 4.5:1 for text against badge background
- [ ] **Screen readers:** Include context for notification counts
- [ ] **ARIA:** Use `aria-label="12 unread notifications"` on parent
- [ ] **Color alone:** Don't rely solely on color (use icons/text)
- [ ] **Removable badges:** Include close button with `aria-label="Remove"`

**Example:**
```html
<button aria-label="Notifications, 12 unread">
  <i class="icon-bell"></i>
  <span class="notification-badge" aria-hidden="true">12</span>
</button>
```

---

## Alert & Notification Components

### Alert Types

```
┌────────────────────────────────────────────────────┐
│ [i]  Info Alert                            [×]     │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│ [✓]  Success Alert                         [×]     │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│ [!]  Warning Alert                         [×]     │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│ [✕]  Error Alert                           [×]     │
└────────────────────────────────────────────────────┘
```

---

### Alert Component Structure

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius-md);
  border-left: 4px solid;
  font-size: var(--text-sm);
  line-height: 1.5;
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px; /* Align with text */
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.alert-message {
  opacity: 0.9;
}

.alert-close {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 150ms ease-in-out;
}

.alert-close:hover {
  opacity: 1;
}
```

---

### Alert Variants

#### 1. Info Alert

```css
.alert-info {
  background: var(--color-info-50);
  color: var(--color-info-900);
  border-left-color: var(--color-info-500);
}

.alert-info .alert-icon {
  color: var(--color-info-500);
}
```

---

#### 2. Success Alert

```css
.alert-success {
  background: var(--color-success-50);
  color: var(--color-success-900);
  border-left-color: var(--color-success-500);
}

.alert-success .alert-icon {
  color: var(--color-success-500);
}
```

---

#### 3. Warning Alert

```css
.alert-warning {
  background: var(--color-warning-50);
  color: var(--color-warning-900);
  border-left-color: var(--color-warning-500);
}

.alert-warning .alert-icon {
  color: var(--color-warning-500);
}
```

---

#### 4. Error Alert

```css
.alert-error {
  background: var(--color-error-50);
  color: var(--color-error-900);
  border-left-color: var(--color-error-500);
}

.alert-error .alert-icon {
  color: var(--color-error-500);
}
```

---

### Banner Notifications (Page-level)

```css
.banner {
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.banner-info {
  background: var(--color-info-100);
  color: var(--color-info-900);
}

.banner-success {
  background: var(--color-success-100);
  color: var(--color-success-900);
}

.banner-warning {
  background: var(--color-warning-100);
  color: var(--color-warning-900);
}

.banner-error {
  background: var(--color-error-100);
  color: var(--color-error-900);
}
```

**Positioning:**
- Fixed at top of page below header
- Full width, no border-radius
- Optional close button

---

### Toast Notifications (Temporary)

```css
.toast-container {
  position: fixed;
  z-index: 10000;
  pointer-events: none;
}

/* Position variations */
.toast-top-right {
  top: 24px;
  right: 24px;
}

.toast-top-center {
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
}

.toast-bottom-right {
  bottom: 24px;
  right: 24px;
}

.toast-bottom-center {
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  min-width: 300px;
  max-width: 400px;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2xl);
  pointer-events: auto;
  animation: slideIn 300ms ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Auto-dismiss with progress bar */
.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: currentColor;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  animation: progress 5s linear;
}

@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}
```

---

### Toast Positioning Guidelines

| Position | Use Case |
|----------|----------|
| **Top Right** | Non-critical updates (Windows style) |
| **Top Center** | Important system messages |
| **Bottom Right** | Background process updates |
| **Bottom Center** | Action confirmations (mobile-friendly) |

**Desktop:**
- Top right or bottom right most common
- Avoid bottom left (conflicts with chat widgets)

**Mobile:**
- Bottom center recommended (thumb-friendly)
- Full width with side padding

---

### Alert Accessibility

**ARIA Attributes:**
```html
<!-- Static alert -->
<div class="alert alert-info" role="alert">
  <i class="alert-icon" aria-hidden="true">ℹ</i>
  <div class="alert-content">
    <p>Information message</p>
  </div>
  <button class="alert-close" aria-label="Close alert">×</button>
</div>

<!-- Live announcement -->
<div class="alert alert-success" role="status" aria-live="polite" aria-atomic="true">
  <i class="alert-icon" aria-hidden="true">✓</i>
  <div class="alert-content">
    <p>Successfully saved!</p>
  </div>
</div>

<!-- Urgent error -->
<div class="alert alert-error" role="alert" aria-live="assertive" aria-atomic="true">
  <i class="alert-icon" aria-hidden="true">✕</i>
  <div class="alert-content">
    <p>Critical error occurred</p>
  </div>
</div>
```

**Accessibility Checklist:**
- [ ] **role="alert"** for important messages requiring attention
- [ ] **role="status"** for success/info messages
- [ ] **aria-live="polite"** for non-urgent updates
- [ ] **aria-live="assertive"** for critical errors
- [ ] **aria-atomic="true"** to announce entire message
- [ ] **Color + Icon:** Don't rely on color alone
- [ ] **Contrast:** 4.5:1 for text, 3:1 for icons
- [ ] **Close button:** `aria-label="Close alert"` or "Dismiss"
- [ ] **Focus management:** Toast doesn't steal focus unless interactive

---

### Alert vs. Toast vs. Banner

| Type | Persistence | Position | User Action | Use Case |
|------|-------------|----------|-------------|----------|
| **Alert** | Persistent until dismissed | In-context (inline) | Optional dismiss | Form validation, page-level messages |
| **Banner** | Persistent until dismissed | Top/bottom of page | Optional dismiss | System-wide announcements, cookie notice |
| **Toast** | Auto-dismiss (3-7s) | Corner overlay | Optional action | Background process updates, confirmations |

---

## Accessibility Requirements

### WCAG 2.2 Level AA Compliance

#### Color Contrast

**Text Contrast:**
- **Normal text** (< 18px): 4.5:1 minimum
- **Large text** (≥ 18px or 14px bold): 3:1 minimum

**UI Component Contrast:**
- **Interactive elements:** 3:1 against adjacent colors
- **Focus indicators:** 3:1 against adjacent colors
- **Icons (UI components):** 3:1 minimum
- **Icons (navigation):** 4.5:1 recommended
- **Disabled states:** No contrast requirement

---

#### Focus Indicators

**Minimum Requirements:**
```css
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

**Standards:**
- Minimum 2px thickness
- 2px offset from element (or no offset with contrasting color)
- 3:1 contrast ratio against adjacent colors
- Visible on all interactive elements
- Never remove `:focus` without custom replacement

---

#### Touch Targets (WCAG 2.2)

**Minimum Size:** 44x44px (WCAG 2.2 Level AA)
**Recommended Size:** 48x48px

**Implementation:**
```css
/* Button with padding to meet touch target */
.btn-sm {
  padding: 12px 16px; /* Creates 44px+ height */
}

/* Icon button with explicit size */
.icon-button {
  width: 48px;
  height: 48px;
  min-width: 44px; /* Fallback */
  min-height: 44px;
}
```

**Spacing Exception:**
- If touch targets are < 44px, provide 12px spacing between them

---

#### Keyboard Navigation

**Tab Order:**
- Logical, predictable sequence
- Follow visual order (left-to-right, top-to-bottom)
- Skip to main content link at top

**Keyboard Interactions:**
- **Tab:** Move focus forward
- **Shift+Tab:** Move focus backward
- **Enter:** Activate buttons, links, form submit
- **Space:** Activate buttons, toggle checkboxes
- **Arrow Keys:** Navigate radio groups, tabs, dropdowns
- **Escape:** Close modals, dropdowns, cancel actions

**Focus Trap:**
- Modals: Tab cycles within modal
- Dropdowns: Escape closes, Arrow keys navigate

---

#### Screen Reader Support

**Semantic HTML:**
```html
<!-- Use semantic elements -->
<nav>, <main>, <aside>, <article>, <section>, <header>, <footer>

<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
```

**ARIA Attributes:**
```html
<!-- Buttons -->
<button aria-label="Close dialog">×</button>
<button aria-disabled="true">Submit</button>
<button aria-pressed="true">Toggle</button>

<!-- Form inputs -->
<input aria-invalid="true" aria-describedby="error-msg" />
<span id="error-msg" role="alert">Error message</span>

<!-- Navigation -->
<a href="/about" aria-current="page">About</a>

<!-- Modals -->
<div role="dialog" aria-modal="true" aria-labelledby="title">
  <h2 id="title">Dialog Title</h2>
</div>

<!-- Live regions -->
<div role="status" aria-live="polite">Loading...</div>
<div role="alert" aria-live="assertive">Error!</div>
```

---

#### Form Accessibility

**Labels:**
```html
<!-- Always use explicit labels -->
<label for="email">Email Address</label>
<input id="email" type="email" required />

<!-- Never rely on placeholder alone -->
<input placeholder="john@example.com" /> <!-- ❌ Bad -->

<label for="email">Email</label>
<input id="email" placeholder="john@example.com" /> <!-- ✓ Good -->
```

**Required Fields:**
```html
<label for="name">
  Name <span aria-hidden="true">*</span>
</label>
<input id="name" required aria-required="true" />
```

**Error Messaging:**
```html
<label for="email">Email</label>
<input
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Please enter a valid email address</span>
```

---

#### Motion & Animation

**Respect `prefers-reduced-motion`:**
```css
/* Default with animations */
.modal {
  transition: all 300ms ease-in-out;
}

/* Disable for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .modal {
    transition: none;
  }
}
```

**Safe Animations:**
- Avoid flashing/strobing (max 3 flashes per second)
- Provide pause/stop controls for auto-playing content
- Don't use animation as sole indicator of state change

---

### Accessibility Testing Checklist

**Manual Testing:**
- [ ] Tab through entire page (logical order)
- [ ] Focus indicators visible on all interactive elements
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify color contrast (DevTools, contrast checker)
- [ ] Test at 200% zoom (text remains readable)
- [ ] Test on mobile (touch targets, gestures)

**Automated Testing:**
- [ ] axe DevTools browser extension
- [ ] Lighthouse accessibility audit (Chrome DevTools)
- [ ] WAVE browser extension
- [ ] Pa11y CLI testing

---

## Component Composition Guidelines

### Composition Principles

**1. Single Responsibility:**
- Each component should have one clear purpose
- Break complex components into smaller, reusable pieces
- Example: `<Card>` contains `<CardHeader>`, `<CardBody>`, `<CardFooter>`

**2. Composability:**
- Components should work together seamlessly
- Use consistent APIs and prop patterns
- Example: Buttons work inside Cards, Modals, Forms

**3. Consistency:**
- Use design tokens (colors, spacing, typography)
- Follow established patterns across all components
- Maintain visual and behavioral consistency

---

### Layout Composition

**Container Queries (Preferred):**
```css
/* Component adapts to container size */
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

**Responsive Grid:**
```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

**Flexbox Utilities:**
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 16px; }
```

---

### Nesting Components

**Example: Card with Alert and Form**
```html
<div class="card">
  <div class="card-header">
    <h2>Contact Form</h2>
  </div>

  <div class="card-body">
    <!-- Alert nested in card -->
    <div class="alert alert-info">
      <p>Please fill out all required fields</p>
    </div>

    <!-- Form nested in card -->
    <form>
      <div class="input-wrapper">
        <label for="name">Name *</label>
        <input id="name" required />
      </div>

      <div class="input-wrapper">
        <label for="email">Email *</label>
        <input id="email" type="email" required />
      </div>
    </form>
  </div>

  <div class="card-footer">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-primary">Submit</button>
  </div>
</div>
```

---

### Spacing Between Components

**Stack Layout (Vertical):**
```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 16px; /* 8pt grid */
}

.stack-sm { gap: 8px; }
.stack-md { gap: 16px; }
.stack-lg { gap: 24px; }
.stack-xl { gap: 32px; }
```

**Cluster Layout (Horizontal):**
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.cluster-sm { gap: 8px; }
.cluster-md { gap: 12px; }
.cluster-lg { gap: 16px; }
```

---

### State Management Across Components

**Global States:**
- **Loading:** Show skeleton loaders, disable interactions
- **Error:** Display error alerts, highlight invalid inputs
- **Success:** Show success toasts, update UI
- **Empty:** Display empty state placeholders

**Example: Form with Loading State**
```html
<form class="form-loading">
  <div class="input-wrapper">
    <label>Email</label>
    <input disabled />
  </div>

  <button class="btn-primary" disabled aria-busy="true">
    <span class="spinner"></span>
    Submitting...
  </button>
</form>
```

---

### Component Hierarchy

**Atomic Design Levels:**

1. **Tokens:** Colors, spacing, typography variables
2. **Atoms:** Buttons, inputs, icons, labels
3. **Molecules:** Input with label, button with icon, card header
4. **Organisms:** Card, form, navigation bar, modal
5. **Templates:** Page layouts combining organisms
6. **Pages:** Actual pages with real content

**Example Hierarchy:**
```
Page
└── Template (Layout)
    ├── Header (Organism)
    │   ├── Logo (Atom)
    │   ├── Navigation (Molecule)
    │   └── Button (Atom)
    ├── Main Content
    │   ├── Card (Organism)
    │   │   ├── Card Header (Molecule)
    │   │   ├── Card Body (Molecule)
    │   │   └── Card Footer (Molecule)
    │   └── Form (Organism)
    │       ├── Input Group (Molecule)
    │       └── Button (Atom)
    └── Footer (Organism)
```

---

### Responsive Composition

**Mobile-First Approach:**
```css
/* Mobile (default) */
.component {
  padding: 16px;
  font-size: var(--text-sm);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .component {
    padding: 24px;
    font-size: var(--text-base);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
    font-size: var(--text-lg);
  }
}
```

**Component Stacking:**
```css
/* Stack on mobile */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Side-by-side on desktop */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
```

---

### Dark Mode Support

**CSS Variables Approach:**
```css
:root {
  --bg-primary: white;
  --text-primary: #171717;
  --border-color: #e5e5e5;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #171717;
    --text-primary: white;
    --border-color: #404040;
  }
}

.component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

---

### Performance Optimization

**Lazy Loading:**
- Load non-critical components on demand
- Use `loading="lazy"` for images
- Code-split heavy components

**CSS Best Practices:**
- Avoid deep nesting (max 3 levels)
- Use CSS custom properties for theming
- Minimize use of `!important`
- Use efficient selectors (avoid universal `*`)

**JavaScript Best Practices:**
- Debounce scroll/resize handlers
- Use event delegation for dynamic content
- Remove event listeners on cleanup
- Optimize animations with `transform` and `opacity`

---

## Implementation Checklist

### Before Building a Component

- [ ] Review existing components (avoid duplication)
- [ ] Check design system for approved patterns
- [ ] Identify reusable sub-components
- [ ] Plan responsive behavior
- [ ] Consider accessibility from the start

### During Development

- [ ] Use semantic HTML elements
- [ ] Apply design tokens (no hard-coded values)
- [ ] Follow 8pt spacing grid
- [ ] Implement all states (default, hover, focus, active, disabled)
- [ ] Test keyboard navigation
- [ ] Verify color contrast
- [ ] Test at 200% zoom
- [ ] Test on mobile devices

### Before Release

- [ ] Run automated accessibility tests (axe, Lighthouse)
- [ ] Manual screen reader testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Document component usage and props
- [ ] Create Storybook/component demo
- [ ] Review with design team

---

## References & Resources

**Design Systems:**
- Material Design: https://m3.material.io/
- Radix UI: https://www.radix-ui.com/
- Carbon Design System: https://carbondesignsystem.com/
- Atlassian Design System: https://atlassian.design/
- IBM Design Language: https://www.ibm.com/design/language/

**Accessibility:**
- WCAG 2.2 Guidelines: https://www.w3.org/WAI/WCAG22/quickref/
- A11y Project: https://www.a11yproject.com/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

**Testing Tools:**
- axe DevTools: https://www.deque.com/axe/devtools/
- Lighthouse (Chrome): Built into DevTools
- WAVE: https://wave.webaim.org/
- Pa11y: https://pa11y.org/

---

## Changelog

### Version 1.0.0 (2025-01-06)
- Initial release
- Foundation system (spacing, typography, colors, borders, shadows)
- Button components (4 variants, 4 sizes, all states)
- Card components (3 variants, grid layouts)
- Form inputs (text, select, checkbox, radio, textarea)
- Navigation (header, mobile, dropdown, breadcrumbs, tabs)
- Footer (multi-column, responsive)
- Modals (with focus trap, native dialog support)
- Icon system (sizes, alignment, accessibility)
- Badges (text, notification, dot, icon variants)
- Alerts & Notifications (4 types, toast, banner)
- Comprehensive accessibility guidelines
- Component composition patterns

---

**End of Component Library Specification**
