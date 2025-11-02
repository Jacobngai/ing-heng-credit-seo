# Component Library - Quick Reference Guide

## At-a-Glance Component Usage

### BaseLayout - Every Page

```astro
<BaseLayout
  title="Page Title"
  description="Page description"
  lang="en"
  keywords={['keyword1', 'keyword2']}
>
  <!-- Your content -->
</BaseLayout>
```

### Hero Section

```astro
<Hero
  title="Main Headline"
  subtitle="Supporting text"
  ctaText="Get Started"
  ctaLink="/contact"
  backgroundImage="/images/hero.jpg"
  lang="en"
  trustSignals={['40 Years', 'Licensed', '95% Approval']}
/>
```

### Services Grid

```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ServiceCard
    title="Equipment Leasing"
    description="Flexible leasing options"
    icon="leasing"
    link="/services/leasing"
    lang="en"
  />
  <!-- Repeat -->
</div>
```

### Benefits Section

```astro
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
  <BenefitCard
    title="Fast Approval"
    description="24-hour processing"
    icon="clock"
  />
  <!-- Repeat -->
</div>
```

### Products Grid

```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ProductCard
    name="Excavator CAT 320"
    description="Heavy-duty excavator"
    monthlyPayment={5800}
    features={['20-ton', 'GPS', 'Warranty']}
    link="/equipment/excavator"
    lang="en"
    image="/images/excavator.jpg"
  />
  <!-- Repeat -->
</div>
```

### Blog Grid

```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <BlogCard
    title="Financing Tips"
    excerpt="Learn how to..."
    date="2025-10-10"
    slug="financing-tips"
    image="/images/blog/post.jpg"
    category="Tips"
    lang="en"
  />
  <!-- Repeat -->
</div>
```

### Contact Page

```astro
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <ContactForm lang="en" />
  <div>
    <!-- Contact info here -->
  </div>
</div>
```

### FAQ Section

```astro
<div class="space-y-4">
  <FAQItem
    question="How fast can I get approved?"
    answer="Within 24 hours with complete documentation."
    isOpen={true}
  />
  <!-- Repeat -->
</div>
```

### Breadcrumbs

```astro
<Breadcrumbs
  items={[
    { label: 'Home', href: '/en' },
    { label: 'Equipment', href: '/en/equipment' },
    { label: 'Excavators', href: '/en/equipment/excavator' }
  ]}
/>
```

### CTA Buttons

```astro
<!-- Primary CTA -->
<CTAButton
  text="Get Started"
  link="/contact"
  variant="primary"
  size="large"
/>

<!-- WhatsApp CTA -->
<CTAButton
  text="WhatsApp Us"
  link="https://wa.me/60175700889"
  variant="accent"
  icon="whatsapp"
  external={true}
/>

<!-- Outline CTA -->
<CTAButton
  text="Learn More"
  link="/about"
  variant="outline"
/>
```

---

## Common Page Layouts

### Homepage Structure

```astro
<BaseLayout title="..." description="..." lang="en">
  <Hero />
  <section class="section bg-gray-50">
    <BenefitCard grid />
  </section>
  <section class="section">
    <ServiceCard grid />
  </section>
  <section class="section bg-gray-50">
    <BlogCard grid />
  </section>
</BaseLayout>
```

### Services Page Structure

```astro
<BaseLayout title="..." description="..." lang="en">
  <Breadcrumbs />
  <Hero />
  <section class="section">
    <ServiceCard grid />
  </section>
  <section class="section bg-gray-50">
    <FAQItem list />
  </section>
</BaseLayout>
```

### Equipment Page Structure

```astro
<BaseLayout title="..." description="..." lang="en">
  <Breadcrumbs />
  <section class="section">
    <ProductCard grid />
  </section>
  <section class="section bg-gray-50">
    <FAQItem list />
  </section>
</BaseLayout>
```

### Blog Listing Structure

```astro
<BaseLayout title="..." description="..." lang="en">
  <Breadcrumbs />
  <section class="section">
    <BlogCard grid />
  </section>
</BaseLayout>
```

### Contact Page Structure

```astro
<BaseLayout title="..." description="..." lang="en">
  <Breadcrumbs />
  <section class="section">
    <ContactForm + Contact Info />
  </section>
</BaseLayout>
```

---

## Icon Reference

### Available Icons

**ServiceCard & BenefitCard:**
- `clock` - Time/speed related
- `percentage` - Rates/pricing
- `calendar` - Terms/schedules
- `users` - Team/support
- `shield` - Security/trust
- `lightning` - Fast/efficient
- `leasing` - Leasing service
- `hire` - Hire purchase
- `refinance` - Refinancing
- `equipment` - Equipment

**CTAButton:**
- `arrow` - Default forward arrow
- `phone` - Phone call
- `email` - Email
- `whatsapp` - WhatsApp
- `check` - Confirmation
- `loading` - Loading spinner

---

## Color Variants

### Button Variants
- `primary` - Blue (main actions)
- `secondary` - Secondary color
- `accent` - Orange (WhatsApp, urgent)
- `outline` - Outlined (secondary actions)
- `outline-white` - White outline (dark backgrounds)

### Sizes
- `small` - Compact
- `medium` - Default
- `large` - Hero CTAs

---

## Styling Classes (from global.css)

### Layout
```css
.container-custom    /* Max-width container */
.section            /* Standard section padding */
.hero               /* Hero section gradient */
```

### Buttons
```css
.btn                /* Base button */
.btn-primary        /* Primary button */
.btn-secondary      /* Secondary button */
.btn-accent         /* Accent button */
.btn-outline        /* Outline button */
```

### Cards
```css
.card               /* Base card */
.card-body          /* Card content padding */
```

### Navigation
```css
.nav-link           /* Nav link */
.nav-link-active    /* Active nav link */
```

### Forms
```css
.form-input         /* Input field */
.form-label         /* Label */
.form-error         /* Error message */
```

### Badges
```css
.badge              /* Base badge */
.badge-primary      /* Primary badge */
.badge-secondary    /* Secondary badge */
.badge-accent       /* Accent badge */
```

---

## Responsive Breakpoints

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Common Responsive Patterns

```astro
<!-- Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Text Size -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">

<!-- Padding -->
<section class="py-12 md:py-16 lg:py-20">

<!-- Hidden on Mobile -->
<div class="hidden lg:flex">

<!-- Show on Mobile Only -->
<div class="lg:hidden">
```

---

## Translation Keys

### Navigation
```
nav.home
nav.about
nav.services
nav.equipment
nav.blog
nav.contact
```

### Common
```
common.learnMore
common.getStarted
common.contactUs
common.callNow
common.whatsappUs
```

### Contact Form
```
contact.form.name
contact.form.email
contact.form.phone
contact.form.equipment
contact.form.message
contact.form.submit
contact.form.sending
contact.form.success
contact.form.error
```

### Blog
```
blog.readMore
blog.readingTime
blog.publishedOn
blog.author
```

### CTA
```
cta.whatsapp
cta.phone
cta.email
cta.quote
```

---

## Language Codes

- `en` - English
- `zh` - Mandarin Chinese
- `ms` - Bahasa Malaysia

---

## File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── SEOHead.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── LanguageSwitcher.astro
│   ├── Hero.astro
│   ├── CTAButton.astro
│   ├── WhatsAppButton.astro
│   ├── ServiceCard.astro
│   ├── ProductCard.astro
│   ├── BenefitCard.astro
│   ├── BlogCard.astro
│   ├── ContactForm.astro
│   ├── FAQItem.astro
│   └── Breadcrumbs.astro
├── utils/
│   ├── constants.ts
│   ├── i18n.ts
│   ├── seo.ts
│   └── schema.ts
├── styles/
│   └── global.css
└── i18n/
    ├── en.json
    ├── zh.json
    └── ms.json
```

---

## Common Tasks

### Add New Page
1. Create file in `src/pages/[lang]/page-name.astro`
2. Import BaseLayout
3. Use components as needed
4. Add translations to i18n files
5. Add to navigation in constants.ts

### Add New Service
1. Create page in `src/pages/[lang]/services/service-name.astro`
2. Use Hero + ServiceCard + FAQItem
3. Add service to constants.ts
4. Link from services page

### Add New Blog Post
1. Create markdown in `src/content/blog/[lang]/post-slug.md`
2. Add frontmatter (title, date, excerpt, etc.)
3. BlogCard will auto-display in listing

### Change Company Info
Edit `src/utils/constants.ts`:
- COMPANY_INFO - Phone, email, address
- NAV_LINKS - Navigation items
- KEY_BENEFITS - Homepage benefits

---

## Testing Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Type check
npm run astro check

# Accessibility audit
npm run lighthouse
```

---

## Quick Fixes

### Component not showing?
1. Check import path
2. Verify props are passed
3. Check translation keys exist
4. Look for console errors

### Styling issues?
1. Check Tailwind classes
2. Verify global.css imported
3. Use browser DevTools
4. Check responsive breakpoints

### Language not switching?
1. Verify i18n files exist
2. Check lang prop passed
3. Verify translation keys
4. Check getAlternateUrl function

---

**Keep this reference handy for quick component usage!**
