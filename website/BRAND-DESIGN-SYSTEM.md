# Ing Heng Credit - Brand Design System

## Overview
Complete corporate identity system designed for professional construction equipment financing. Bold Industrial aesthetic with Navy Blue and Safety Yellow color palette, featuring sharp industrial edges and offset shadow styling.

---

## Color System

### Primary Color Palette

#### Navy Blues
```
--color-navy-900: #1E3A8A (Primary dark, borders, headings)
--color-navy-800: #1E40AF
--color-navy-700: #1D4ED8
--color-blue-600: #2563EB (Electric Blue - Primary actions, CTAs, links)
--color-blue-500: #3B82F6
--color-blue-400: #60A5FA
--color-blue-300: #93C5FD
--color-blue-200: #BFDBFE
--color-blue-100: #DBEAFE (Light Blue - Backgrounds, subtle sections)
--color-blue-50: #EFF6FF
```

#### Safety Yellow (Accent)
```
--color-yellow-900: #78350F
--color-yellow-800: #92400E
--color-yellow-700: #B45309
--color-yellow-600: #D97706
--color-yellow-500: #F59E0B
--color-yellow-400: #FBBF24 (Safety Yellow - Secondary actions, highlights, warnings)
--color-yellow-300: #FCD34D
--color-yellow-200: #FDE68A
--color-yellow-100: #FEF3C7
--color-yellow-50: #FFFBEB
```

#### Neutral Grays
```
--color-black: #000000
--color-gray-900: #111827
--color-gray-800: #1F2937
--color-gray-700: #374151 (Default body text color)
--color-gray-600: #4B5563
--color-gray-500: #6B7280
--color-gray-400: #9CA3AF
--color-gray-300: #D1D5DB
--color-gray-200: #E5E7EB
--color-gray-100: #F3F4F6
--color-gray-50: #F9FAFB
--color-white: #FFFFFF
```

#### Functional Colors
```
Success: #10B981 (Dark: #065F46, Light: #D1FAE5)
Warning: #F59E0B (Dark: #92400E, Light: #FEF3C7)
Error: #EF4444 (Dark: #991B1B, Light: #FEE2E2)
Info: #3B82F6 (Dark: #1E40AF, Light: #DBEAFE)
```

### Color Usage Matrix

| Color | Primary Use | Secondary Use | Avoid Using For |
|-------|-------------|---------------|-----------------|
| Navy 900 | All borders, headings, primary text | Backgrounds, footers, shadows | Body text (too dark) |
| Blue 600 | Primary CTAs, links, buttons | Accents, icons, hover states | Large text blocks |
| Yellow 400 | Secondary CTAs, warnings, badges | Highlights, sale tags, urgency | Primary navigation (too bright) |
| Blue 100 | Page backgrounds, alternating sections | Card backgrounds, hover states | Text color (insufficient contrast) |

---

## Typography System

### Font Families
```
--font-primary: 'Bebas Neue', sans-serif (Display & Headings)
--font-body: 'Roboto', sans-serif (Body text & small headings)
--font-chinese: 'Noto Sans SC', sans-serif (Chinese language support)
```

### Typography Scale

#### Display Styles
- **Display 1**: 96px (6xl), uppercase, line-height: 1.0, letter-spacing: 0.02em
  - Usage: Hero sections only, maximum 1 per page
  - Max characters: 40 (including spaces)
  - Platforms: Website hero, large format print, billboards

- **Display 2**: 72px (7xl), uppercase, line-height: 1.0, letter-spacing: 0.02em
  - Usage: Large section headers

- **Display 3**: 60px (6xl), uppercase, line-height: 1.1, letter-spacing: 0.02em
  - Usage: Major section headers

#### Heading Styles
- **H1 / .h1**: 48px, Bebas Neue, uppercase, Navy 900
  - Usage: Page titles, major section headers
  - Max characters: 60
  - Hierarchy: One H1 per page (SEO best practice)

- **H2 / .h2**: 36px, Bebas Neue, uppercase, Navy 900
  - Usage: Section headers within page content
  - Frequency: 3-5 per page typical

- **H3 / .h3**: 30px, Bebas Neue, uppercase, Blue 600
  - Usage: Sub-sections, card titles, widget headers
  - Color variation: Blue 600 to differentiate from H2

- **H4 / .h4**: 24px, Bebas Neue, uppercase, Navy 900
  - Usage: Subsection headers, category titles

- **H5 / .h5**: 20px, Roboto 700, Navy 900
  - Usage: Small headings, card titles

- **H6 / .h6**: 18px, Roboto 700, Navy 900
  - Usage: Minor headings, labels

#### Body Text Styles
- **Body Text / .body-text**: 18px (lg), Roboto, line-height: 1.7, Gray 700
  - Usage: Default paragraph text for majority of content

- **Body Small / .body-sm**: 16px (base), line-height: 1.6
  - Usage: Descriptions, captions

- **Body Extra Small / .body-xs**: 14px (sm), line-height: 1.5
  - Usage: Secondary information, metadata

- **Lead Text / .lead-text**: 20px, Roboto 300, line-height: 1.8, Gray 600
  - Usage: Introductory text below major headings
  - Max-width: 720px

#### Other Text Styles
- **Monospace / .monospace**: 14px, Courier New, used for code/specs

---

## Spacing System

8px base unit scale:

```
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
--space-24: 6rem (96px)
--space-32: 8rem (128px)
```

---

## Border System

### Border Widths
```
--border-width-thin: 1px
--border-width-medium: 2px
--border-width-thick: 3px (Standard)
--border-width-heavy: 4px
```

### Border Radius
Sharp industrial edges (brutalist aesthetic):
```
--radius-none: 0
--radius-sm: 2px
--radius-md: 4px
--radius-lg: 8px
```

---

## Shadow System

Brutalist offset shadows (no blur, hard edges):

```
--shadow-sm: 4px 4px 0 var(--color-navy-900)
--shadow-md: 6px 6px 0 var(--color-navy-900)
--shadow-lg: 8px 8px 0 var(--color-navy-900)
--shadow-xl: 10px 10px 0 var(--color-navy-900)
--shadow-2xl: 12px 12px 0 var(--color-navy-900)
```

Note: Shadows use solid navy offset, not blur-based soft shadows.

---

## Animation & Transitions

```
--transition-fast: 150ms
--transition-base: 200ms
--transition-slow: 300ms
--transition-slower: 500ms
```

---

## Z-Index Scale

```
--z-dropdown: 1000
--z-sticky: 1100
--z-fixed: 1200
--z-modal-backdrop: 1300
--z-modal: 1400
--z-popover: 1500
--z-tooltip: 1600
```

---

## Component Library

### Button System

#### Button Base Class: `.btn`
- Display: inline-block
- Font: Bebas Neue, 18px, 700 weight, uppercase
- Letter-spacing: 0.05em
- Padding: 20px 40px (default)
- Border: 3px solid Navy 900
- Cursor: pointer
- Transition: all 200ms

#### Button Variants

##### Primary Button: `.btn-primary`
- Background: Blue 600 (#2563EB)
- Color: White
- Box-shadow: 6px 6px 0 Navy 900
- Hover:
  - Background: Blue 700
  - Transform: translateY(-2px)
  - Box-shadow: 8px 8px 0 Navy 900
- Active:
  - Transform: translateY(0)
  - Box-shadow: 4px 4px 0 Navy 900

**Usage**: Main CTAs, form submissions, critical actions
- Max 1-2 primary buttons per page
- Examples: "Apply Now", "Submit Application", "Get Started"

##### Secondary Button: `.btn-secondary`
- Background: Yellow 400 (#FBBF24)
- Color: Navy 900
- Box-shadow: 6px 6px 0 Navy 900
- Hover:
  - Background: Yellow 500
  - Transform: translateY(-2px)
  - Box-shadow: 8px 8px 0 Navy 900

**Usage**: Secondary actions, alternative paths, special offers
- Examples: "Learn More", "Contact Us", "Download Brochure"

##### Outline Button: `.btn-outline`
- Background: transparent
- Color: Navy 900
- Border: 3px solid Navy 900
- Hover:
  - Background: Navy 900
  - Color: White

**Usage**: Cancellation, navigation, low-priority actions

##### Ghost Button: `.btn-ghost`
- Background: transparent
- Color: Blue 600
- Border: none
- Text-decoration: underline
- Hover:
  - Color: Blue 700
  - Text-decoration: none

**Usage**: Minimal actions, text-like links

#### Button Sizes

- **Small: `.btn-sm`**
  - Padding: 12px 24px
  - Font-size: 16px

- **Regular (default)**
  - Padding: 20px 40px
  - Font-size: 18px

- **Large: `.btn-lg`**
  - Padding: 24px 48px
  - Font-size: 20px

#### Button Modifiers

- **Block: `.btn-block`** - Width: 100%, display: block
- **Disabled: `.btn:disabled` or `.btn-disabled`** - Opacity: 0.5, cursor: not-allowed
- **Group: `.btn-group`** - display: flex, gap: 16px
- **Vertical Group: `.btn-group-vertical`** - flex-direction: column

---

### Card System

#### Basic Card: `.card`
- Background: White
- Border: 3px solid Navy 900
- Box-shadow: 8px 8px 0 Navy 900
- Transition: all 200ms
- Hover (with `.card-hover`):
  - Transform: translate(-2px, -2px)
  - Box-shadow: 10px 10px 0 Navy 900

#### Card Sections

- **Card Header: `.card-header`**
  - Padding: 24px
  - Border-bottom: 2px solid Gray 200

- **Card Body: `.card-body`**
  - Padding: 32px

- **Card Footer: `.card-footer`**
  - Padding: 24px
  - Border-top: 2px solid Gray 200
  - Background: Gray 50

#### Equipment Card: `.equipment-card`
Specialized card for equipment listings:

- **Equipment Card Image: `.equipment-card-image`**
  - Background: Blue 100
  - Height: 220px
  - Display: flex (center content)
  - Border-bottom: 4px solid Navy 900

- **Equipment Card Corner: `.equipment-card-corner`**
  - Positioned absolutely (top-right)
  - Yellow 400 triangle (80px × 80px)
  - Creates bold corner accent

- **Equipment Card Badge: `.equipment-card-badge`**
  - Position: absolute (top-left)
  - Background: Yellow 400
  - Color: Navy 900
  - Padding: 8px 20px
  - Font: Bebas Neue, 12px, 700, uppercase
  - Border: 2px solid Navy 900

- **Equipment Card Content: `.equipment-card-content`**
  - Padding: 32px

---

### Badge & Label System

#### Badge Base: `.badge`
- Display: inline-block
- Padding: 8px 16px
- Font: Bebas Neue, 12px, 700, uppercase
- Letter-spacing: 0.05em
- Border: 2px solid Navy 900

#### Badge Variants

- **Primary: `.badge-primary`**
  - Background: Blue 600
  - Color: White

- **Secondary: `.badge-secondary`**
  - Background: Yellow 400
  - Color: Navy 900

- **Success: `.badge-success`**
  - Background: Green (#10B981)
  - Color: White

- **Warning: `.badge-warning`**
  - Background: Yellow (#F59E0B)
  - Color: White

- **Error: `.badge-error`**
  - Background: Red (#EF4444)
  - Color: White

**Usage**: Status indicators, tags, categories, notifications

---

### Form System

#### Form Group: `.form-group`
- Margin-bottom: 24px (spacing between form fields)

#### Form Label: `.form-label`
- Display: block
- Font: Bebas Neue, 16px, 700, uppercase
- Letter-spacing: 0.05em
- Color: Navy 900
- Margin-bottom: 8px

#### Form Input: `.form-input`
- Width: 100%
- Padding: 16px
- Font: Roboto, 16px
- Color: Gray 900
- Background: White
- Border: 3px solid Navy 900
- Focus:
  - Outline: none
  - Border-color: Blue 600
  - Box-shadow: 4px 4px 0 Navy 900

#### Form Select: `.form-select`
Same styling as `.form-input`

#### Form Textarea: `.form-textarea`
Same styling as `.form-input`
- Can be resized

#### Form Placeholder
- Color: Gray 400

#### Form Helper: `.form-helper`
- Font-size: 14px
- Color: Gray 500
- Margin-top: 8px
- Display: block

#### Form Error: `.form-error`
- Color: Red (#EF4444)
- Font-size: 14px
- Margin-top: 8px

#### Form Check: `.form-check`
- Display: flex
- Align-items: center
- Gap: 12px

#### Form Check Input
- Width: 20px
- Height: 20px
- Border: 2px solid Navy 900
- Cursor: pointer

---

### Alert System

#### Alert Base: `.alert`
- Padding: 24px
- Border: 3px solid
- Margin-bottom: 24px
- Box-shadow: 6px 6px 0 Navy 900

#### Alert Variants

- **Success: `.alert-success`**
  - Background: Success Light (#D1FAE5)
  - Border-color: Success Dark (#065F46)
  - Color: Success Dark

- **Warning: `.alert-warning`**
  - Background: Warning Light (#FEF3C7)
  - Border-color: Warning Dark (#92400E)
  - Color: Warning Dark

- **Error: `.alert-error`**
  - Background: Error Light (#FEE2E2)
  - Border-color: Error Dark (#991B1B)
  - Color: Error Dark

- **Info: `.alert-info`**
  - Background: Info Light (#DBEAFE)
  - Border-color: Info Dark (#1E40AF)
  - Color: Info Dark

**Usage**: Notifications, form validation feedback, important messages

---

## Layout System

### Containers

- **Default Container: `.container`**
  - Max-width: 1280px
  - Margin: 0 auto
  - Padding: 0 32px

- **Narrow Container: `.container-narrow`**
  - Max-width: 960px
  - Margin: 0 auto
  - Padding: 0 24px

- **Wide Container: `.container-wide`**
  - Max-width: 1440px
  - Margin: 0 auto
  - Padding: 0 48px

### Sections

- **Default Section: `.section`**
  - Padding: 80px 0 (vertical)

- **Small Section: `.section-sm`**
  - Padding: 48px 0

- **Large Section: `.section-lg`**
  - Padding: 128px 0

---

### Grid System

- **Grid: `.grid`**
  - Display: grid
  - Gap: 32px

#### Grid Columns

- **2 Columns: `.grid-cols-2`**
  - grid-template-columns: repeat(2, 1fr)

- **3 Columns: `.grid-cols-3`**
  - grid-template-columns: repeat(3, 1fr)

- **4 Columns: `.grid-cols-4`**
  - grid-template-columns: repeat(4, 1fr)

- **Responsive: `.grid-responsive`**
  - grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))

---

## Navigation System

### Navbar: `.navbar`
- Background: White
- Border-bottom: 3px solid Navy 900
- Position: sticky
- Top: 0
- Z-index: 1100 (sticky)
- Box-shadow: 0 4px 0 Navy 900

### Navbar Container: `.navbar-container`
- Max-width: 1280px
- Margin: 0 auto
- Padding: 16px 32px
- Display: flex
- Justify-content: space-between
- Align-items: center

### Navbar Logo: `.navbar-logo`
- Font: Bebas Neue, 24px
- Color: Navy 900
- Text-transform: uppercase
- Letter-spacing: 0.05em

### Navbar Menu: `.navbar-menu`
- Display: flex
- Gap: 32px
- List-style: none

### Navbar Link: `.navbar-link`
- Font: Bebas Neue, 18px
- Color: Navy 900
- Text-decoration: none
- Text-transform: uppercase
- Letter-spacing: 0.05em
- Padding: 8px 16px
- Border-bottom: 3px solid transparent
- Transition: border-color 200ms
- Hover/Active:
  - Border-bottom-color: Blue 600

---

## Pattern System

### Diagonal Stripe Pattern

#### Primary Stripe Pattern: `.stripe-pattern-primary`
```css
background-image: repeating-linear-gradient(
    45deg,
    var(--color-blue-600),
    var(--color-blue-600) 16px,
    var(--color-yellow-400) 16px,
    var(--color-yellow-400) 32px
);
```
- 45-degree diagonal stripes
- Blue 600 and Yellow 400 alternating
- Stripe width: 16px each
- Total pattern repeat: 32px

#### Subtle Stripe Pattern: `.stripe-pattern-subtle`
```css
background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 16px,
    rgba(37, 99, 235, 0.1) 16px,
    rgba(37, 99, 235, 0.1) 32px
);
```
- Light blue overlay (10% opacity)
- Subtle pattern effect
- Same stripe width as primary

**Usage**: Headers, hero sections, accent backgrounds

---

## Utility Classes

### Text Alignment
- `.text-center` - text-align: center
- `.text-left` - text-align: left
- `.text-right` - text-align: right

### Text Colors
- `.text-navy` - color: Navy 900
- `.text-blue` - color: Blue 600
- `.text-yellow` - color: Yellow 400
- `.text-gray` - color: Gray 600

### Background Colors
- `.bg-navy` - background: Navy 900
- `.bg-blue` - background: Blue 600
- `.bg-yellow` - background: Yellow 400
- `.bg-white` - background: White
- `.bg-gray-50` - background: Gray 50

### Margin Utilities
- `.m-0` - margin: 0
- `.mt-2` - margin-top: 8px
- `.mt-4` - margin-top: 16px
- `.mt-6` - margin-top: 24px
- `.mt-8` - margin-top: 32px
- `.mt-auto` - margin-top: auto
- `.mb-2` - margin-bottom: 8px
- `.mb-4` - margin-bottom: 16px
- `.mb-6` - margin-bottom: 24px
- `.mb-8` - margin-bottom: 32px
- `.mb-auto` - margin-bottom: auto

### Padding Utilities
- `.p-0` - padding: 0
- `.p-4` - padding: 16px
- `.p-6` - padding: 24px
- `.p-8` - padding: 32px

---

## Logo Usage & Clear Space Guidelines

### Minimum Size
- **Digital**: 32px height
- **Print**: 12mm height

### Maximum Size
- **Digital**: No limit
- **Print**: No limit

### Clear Space
Maintain minimum clear space of X-height (height of capital "M") around logo on all sides.

### Acceptable Formats
- **Digital**: SVG, PNG
- **Print**: EPS, PDF, AI

### Do's ✓
- Use official logo files only
- Maintain clear space
- Use approved color variations
- Scale proportionally
- Place on contrasting backgrounds
- Use on white or navy backgrounds

### Don'ts ✗
- Don't recreate or alter the logo
- Don't change logo colors
- Don't rotate or skew
- Don't add effects or shadows
- Don't place on busy backgrounds

---

## Responsive Design

### Breakpoint: 768px and below

At tablet/mobile breakpoint:
- `display-1`: Font-size reduced to 60px (6xl)
- `display-2`: Font-size reduced to 48px (5xl)
- `display-3`: Font-size reduced to 36px (4xl)
- `h1, .h1`: Font-size reduced to 30px (3xl)
- `h2, .h2`: Font-size reduced to 24px (2xl)
- Grid columns (2, 3, 4) collapse to single column
- Navbar menu changes to flex-direction: column with 16px gap

---

## Implementation Notes

### Design Philosophy
- **Bold Industrial Aesthetic**: Sharp edges, strong typography, brutalist shadows
- **High Contrast**: Navy and yellow create strong visual hierarchy
- **Functional**: Clear, purposeful design for B2B equipment financing context
- **Professional**: Corporate-focused with industry-appropriate styling

### Brand Characteristics
- Uppercase typography for impact and authority
- Thick borders (3px standard) for emphasis
- Offset shadows (no blur) for digital, industrial feel
- Limited color palette: Navy, Blue, Yellow, Gray
- Strategic use of white space for clarity

### Color Psychology
- **Navy Blue**: Trust, authority, professionalism (financial services)
- **Bright Yellow**: Attention, warnings, safety (heavy equipment context)
- **Gray**: Neutrality, balance, readability

### Typography Strategy
- **Display/Headings**: Bebas Neue (bold, impactful, uppercase)
- **Body**: Roboto (highly readable, professional, modern)
- **Chinese Support**: Noto Sans SC (compatible weight and style)

### Best Practices for Implementation
1. Always use CSS variables for consistency
2. Maintain color contrast ratios for accessibility (WCAG AA minimum)
3. Use shadow system consistently (no custom shadows)
4. Respect spacing scale (avoid arbitrary pixel values)
5. Keep typography hierarchy strictly according to guidelines
6. Test responsive behavior at 768px breakpoint minimum
7. Use stripe pattern sparingly for impact
8. Ensure buttons have sufficient click area (min 44px height)
9. Use transitions only for hover/focus states
10. Maintain clear visual hierarchy through size and color

---

## Last Updated
Based on complete corporate identity file: `ci-option-4b-bold-industrial-blue-yellow-COMPLETE.html`
