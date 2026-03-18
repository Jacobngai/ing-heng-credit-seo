# Button Components Guide - Bold Industrial Blue/Yellow Brand

This guide documents all button components implementing the approved CI Option 4B brand identity for Ing Heng Credit.

## Brand Identity Features

All button components now include:
- **Bebas Neue** bold uppercase typography
- **Brutalist offset shadows** (navy #1E3A8A)
- **Sharp corners** with minimal border radius (4px max)
- **Navy/Yellow color scheme** for primary brand colors
- **3px borders** for industrial strength feel
- **200ms transitions** for smooth interactions

---

## 1. Button.astro (Main Button Component)

### Overview
The primary button component with full variant and size support.

### Props
```typescript
interface Props {
  text: string;              // Button label
  href?: string;             // Link URL (if undefined, renders as <button>)
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;             // Icon name: 'arrow', 'phone', 'email', 'whatsapp', 'check', 'loading'
  iconPosition?: 'left' | 'right';
  external?: boolean;        // Opens in new tab
  fullWidth?: boolean;       // Block-level button
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset'; // Only applies when href is undefined
}
```

### Variants

#### Primary (Blue Background)
```astro
<Button text="Apply Now" href="/apply" variant="primary" />
```
- Background: #2563EB (blue-600)
- Text: White
- Shadow: 6px 6px navy
- Hover: Darker blue (#1D4ED8) with lift effect

#### Secondary (Yellow Background)
```astro
<Button text="Learn More" href="/about" variant="secondary" />
```
- Background: #FBBF24 (yellow-400)
- Text: Navy (#1E3A8A)
- Shadow: 6px 6px navy
- Hover: Darker yellow (#F59E0B) with lift effect

#### Outline (Transparent with Navy Border)
```astro
<Button text="Contact Us" href="/contact" variant="outline" />
```
- Background: Transparent
- Text: Navy (#1E3A8A)
- Border: 3px solid navy
- Hover: Navy background, white text

#### Ghost (No Background/Border)
```astro
<Button text="Read More" href="/blog" variant="ghost" />
```
- Background: Transparent
- Text: Blue (#2563EB)
- No border or shadow
- Underlined text
- Hover: Remove underline

### Sizes

#### Small
```astro
<Button text="Small Button" href="#" size="sm" />
```
- Padding: 12px 24px
- Font Size: 16px

#### Medium (Default)
```astro
<Button text="Medium Button" href="#" size="md" />
```
- Padding: 20px 40px
- Font Size: 18px

#### Large
```astro
<Button text="Large Button" href="#" size="lg" />
```
- Padding: 24px 48px
- Font Size: 20px

### Icons

```astro
<!-- Arrow icon (default) -->
<Button text="Next" href="#" icon="arrow" />

<!-- Phone icon -->
<Button text="Call Us" href="tel:+60123456789" icon="phone" />

<!-- WhatsApp icon -->
<Button text="WhatsApp" href="#" icon="whatsapp" />

<!-- Email icon -->
<Button text="Email" href="mailto:info@example.com" icon="email" />

<!-- Check icon -->
<Button text="Confirmed" href="#" icon="check" />

<!-- Loading state -->
<Button text="Processing..." href="#" loading={true} />
```

### Full Width
```astro
<Button text="Full Width Button" href="#" fullWidth={true} />
```

### As Form Button
```astro
<Button text="Submit Form" type="submit" variant="primary" />
```

---

## 2. CTAButton.astro (Legacy Support)

### Overview
Updated version of the original CTA button with new brand styling. Use `Button.astro` for new implementations.

### Props
Same as `Button.astro` but requires `link` instead of `href`.

### Usage
```astro
<CTAButton
  text="Get Financing"
  link="/apply"
  variant="primary"
  size="lg"
/>
```

---

## 3. WhatsAppButton.astro (Floating CTA)

### Overview
Fixed position floating WhatsApp button with pulse animation and brand-consistent navy shadow.

### Props
```typescript
interface Props {
  lang: Locale; // 'en' | 'zh' | 'ms'
}
```

### Usage
```astro
---
import WhatsAppButton from '../components/WhatsAppButton.astro';
---

<WhatsAppButton lang="en" />
```

### Features
- Fixed bottom-right position
- Green WhatsApp background (#25D366)
- Navy brutalist shadow (4px 4px)
- Pulse animation ring
- Bebas Neue tooltip on hover
- Lift effect on hover

---

## 4. ShareButtons.astro (Social Sharing)

### Overview
Social media share buttons for blog posts with brand-consistent styling.

### Props
```typescript
interface Props {
  title: string;  // Post title for sharing
  url?: string;   // URL to share (defaults to current page)
  locale: Locale; // 'en' | 'zh' | 'ms'
}
```

### Usage
```astro
---
import ShareButtons from '../components/ShareButtons.astro';
---

<ShareButtons
  title="Equipment Financing Guide"
  locale="en"
/>
```

### Features
- Facebook, Twitter/X, LinkedIn, WhatsApp share buttons
- Copy link button with success state
- All buttons have navy brutalist shadows (3px 3px)
- Bebas Neue uppercase labels
- Lift effect on hover

---

## 5. ButtonGroup.astro (Button Container)

### Overview
Container for grouping multiple buttons with consistent spacing.

### Props
```typescript
interface Props {
  orientation?: 'horizontal' | 'vertical';
  align?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
}
```

### Usage

#### Horizontal Group
```astro
<ButtonGroup orientation="horizontal" align="center" spacing="md">
  <Button text="Primary Action" href="#" variant="primary" />
  <Button text="Secondary Action" href="#" variant="outline" />
</ButtonGroup>
```

#### Vertical Group
```astro
<ButtonGroup orientation="vertical" align="left" spacing="lg">
  <Button text="Option 1" href="#" variant="primary" fullWidth={true} />
  <Button text="Option 2" href="#" variant="secondary" fullWidth={true} />
  <Button text="Option 3" href="#" variant="outline" fullWidth={true} />
</ButtonGroup>
```

---

## Common Usage Patterns

### Hero Section CTA
```astro
<ButtonGroup orientation="horizontal" align="center" spacing="md">
  <Button
    text="Apply for Financing"
    href="/apply"
    variant="primary"
    size="lg"
    icon="arrow"
  />
  <Button
    text="Learn More"
    href="/about"
    variant="outline"
    size="lg"
  />
</ButtonGroup>
```

### Contact Section
```astro
<ButtonGroup orientation="horizontal" align="left" spacing="md">
  <Button
    text="Call Us Now"
    href="tel:+60123456789"
    variant="primary"
    icon="phone"
  />
  <Button
    text="WhatsApp"
    href={whatsappUrl}
    variant="secondary"
    icon="whatsapp"
    external={true}
  />
  <Button
    text="Email Us"
    href="mailto:info@ingheng.com"
    variant="outline"
    icon="email"
  />
</ButtonGroup>
```

### Form Submission
```astro
<ButtonGroup orientation="horizontal" align="right" spacing="sm">
  <Button
    text="Cancel"
    href="/dashboard"
    variant="ghost"
  />
  <Button
    text="Save Draft"
    type="button"
    variant="outline"
  />
  <Button
    text="Submit Application"
    type="submit"
    variant="primary"
  />
</ButtonGroup>
```

### Loading State
```astro
<Button
  text="Processing Application..."
  variant="primary"
  loading={true}
  disabled={true}
/>
```

---

## Color Reference

### Primary Colors
- **Navy 900**: #1E3A8A (borders, shadows, text)
- **Blue 600**: #2563EB (primary button background)
- **Blue 700**: #1D4ED8 (primary button hover)
- **Yellow 400**: #FBBF24 (secondary button background)
- **Yellow 500**: #F59E0B (secondary button hover)

### Functional Colors
- **Success**: #10B981 (copy button success state)
- **White**: #FFFFFF (primary button text, outline button background)
- **Blue 50**: #EFF6FF (light backgrounds)

---

## Accessibility Features

All button components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus states
- Disabled states with visual feedback
- Semantic HTML (button vs anchor tags)
- External link indicators (rel="noopener noreferrer")

---

## Migration Notes

### Old Component → New Component
- `variant="accent"` → `variant="secondary"`
- `variant="outline-white"` → `variant="outline"` (use on dark backgrounds)
- `size="small"` → `size="sm"`
- `size="medium"` → `size="md"`
- `size="large"` → `size="lg"`

### Removed Variants
- `accent` - Replaced by `secondary`
- `outline-white` - Use `outline` on dark backgrounds

---

## Files Updated

1. **Button.astro** (NEW) - Main button component
2. **CTAButton.astro** (UPDATED) - Legacy support with new styles
3. **WhatsAppButton.astro** (UPDATED) - Floating CTA with navy shadows
4. **ShareButtons.astro** (UPDATED) - Social sharing with new brand
5. **ButtonGroup.astro** (NEW) - Button container component

---

## Next Steps

To complete the brand implementation:
1. Update all pages to use new button variants
2. Replace old `variant="accent"` with `variant="secondary"`
3. Import Bebas Neue font in base layout
4. Add global CSS variables for colors
5. Update form components to use new buttons
6. Test across all language versions (EN/MS/ZH)

---

Last Updated: November 2025
Brand Identity: CI Option 4B - Bold Industrial Blue/Yellow
