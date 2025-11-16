# Command ④b /4b-generate-website-scaffold

**Phase:** ONBOARD → BUILD (Bridge Command)
**Primary Agent:** full-stack-architect
**Time:** 2-4 hours (AI executing)
**Execution Mode:** AUTOMATIC - Creates entire website structure

---

## 🎯 Purpose

Generate complete, production-ready Astro 5 website with **zero manual configuration** by reading all onboarding data and selected brand identity. This command creates 100+ files in one execution.

**What makes this different:** This command EXECUTES and CREATES the website. Not just instructions - actual file generation.

---

## ✅ Prerequisites

**Required files from ONBOARD phase (①-④):**

```
clients/[client-name]/onboarding/
✅ business-brief.md          → Company info, services, contact details
✅ personas.md                → Target audience profiles
✅ competitor-report.md       → Market positioning insights
✅ keyword-opportunities.csv  → Primary SEO keywords

clients/[client-name]/content-strategy/
✅ content-strategy-map.md    → Required pages and structure
✅ hub-spoke-plan.md          → Hub page topics
✅ 12-month-longtail-calendar.md → Content calendar
✅ keyword-database.csv       → Full keyword list

clients/[client-name]/eeat-strategy/
✅ author-profiles.md         → Team credentials
✅ authority-plan.md          → Authority positioning
✅ trust-signals.md           → Certifications, social proof

clients/[client-name]/brand-identity/
✅ client-selection.md        → MUST show which option selected
✅ ci-option-[X].html         → Selected brand design
```

### Validation Check
```bash
# Command automatically checks:
❌ If business-brief.md missing → Error: Run ① /1-research-business
❌ If client-selection.md empty → Error: Client must select brand design
❌ If selected CI HTML missing → Error: CI file not found
❌ If any core files missing → Error: Complete ONBOARD phase first
```

---

## 🏗️ What This Command Creates

### Full Project Output (100+ Files)

```
clients/[client-name]/website/
│
├─── Configuration Layer (10 files)
│    ├── package.json                    ← Astro 5 + dependencies
│    ├── astro.config.mjs                ← i18n, sitemap, Vercel
│    ├── tailwind.config.js              ← Brand colors extracted
│    ├── tsconfig.json                   ← TypeScript config
│    ├── .gitignore                      ← Standard ignores
│    ├── .vercel/project.json            ← Deployment config
│    ├── .env.example                    ← Environment variables
│    ├── README.md                       ← Setup instructions
│    ├── vercel.json                     ← Vercel settings
│    └── .prettierrc                     ← Code formatting
│
├─── Component Library (30+ components)
│    └── src/components/
│         ├── Header.astro               ← Nav + language switcher
│         ├── Footer.astro               ← Links + trust signals
│         ├── Hero.astro                 ← Hero sections
│         ├── Button.astro               ← 4 button variants
│         ├── CTAButton.astro            ← WhatsApp CTA
│         ├── Card.astro                 ← Base card component
│         ├── ServiceCard.astro          ← Service showcase
│         ├── ProductCard.astro          ← Product/equipment cards
│         ├── BenefitCard.astro          ← Feature highlights
│         ├── TestimonialCard.astro      ← Customer reviews
│         ├── StepCard.astro             ← Process steps
│         ├── BlogCard.astro             ← Blog previews
│         ├── FAQItem.astro              ← Accordion items
│         ├── ContactForm.astro          ← Form with validation
│         ├── Calculator.astro           ← Interactive calculator
│         ├── Breadcrumbs.astro          ← Navigation breadcrumbs
│         ├── TableOfContents.astro      ← Auto-generated TOC
│         ├── RelatedPosts.astro         ← Content suggestions
│         ├── ShareButtons.astro         ← Social sharing
│         ├── Newsletter.astro           ← Email signup
│         ├── WhatsAppFloat.astro        ← Floating button
│         ├── LanguageSwitcher.astro     ← Language selector
│         ├── EquipmentDropdown.astro    ← Product menu
│         ├── BlogDropdown.astro         ← Category menu
│         ├── SEOHead.astro              ← Meta tags component
│         ├── StructuredData.astro       ← Schema.org JSON-LD
│         ├── GoogleAnalytics.astro      ← GA4 tracking
│         ├── CookieConsent.astro        ← GDPR compliance
│         └── SearchBar.astro            ← Site search
│
├─── Layout Templates (3 layouts)
│    └── src/layouts/
│         ├── BaseLayout.astro           ← Main wrapper
│         ├── BlogLayout.astro           ← Blog post template
│         └── SimpleBlogLayout.astro     ← Minimal landing
│
├─── Multi-Language Pages (21+ pages × 3 languages = 63 files)
│    └── src/pages/
│         ├── index.astro                ← Root redirect
│         ├── robots.txt.ts              ← Dynamic robots
│         ├── sitemap.xml.ts             ← Dynamic sitemap
│         │
│         ├── en/ (English)
│         │   ├── index.astro            ← Homepage
│         │   ├── about.astro            ← About page
│         │   ├── contact.astro          ← Contact page
│         │   ├── faq.astro              ← FAQ page
│         │   ├── calculator.astro       ← Calculator tool
│         │   ├── services/
│         │   │   └── index.astro        ← Services overview
│         │   ├── blog/
│         │   │   ├── index.astro        ← Blog listing
│         │   │   └── [slug].astro       ← Dynamic blog route
│         │   └── [category]/            ← Industry pages
│         │       └── index.astro        ← Category landing
│         │
│         ├── ms/ (Malay - same structure)
│         └── zh/ (Chinese - same structure)
│
├─── Translation Files (3 files)
│    └── src/i18n/
│         ├── en.json                    ← 200+ English strings
│         ├── ms.json                    ← 200+ Malay strings
│         └── zh.json                    ← 200+ Chinese strings
│
├─── Content Collections (Astro 5 pattern)
│    └── src/content/
│         ├── config.ts                  ← Collection schemas
│         └── blog/
│             ├── en/                    ← English posts
│             ├── ms/                    ← Malay posts
│             └── zh/                    ← Chinese posts
│
├─── Utility Layer (5+ modules)
│    └── src/utils/
│         ├── constants.ts               ← Company config
│         ├── schema.ts                  ← Schema generators
│         ├── seo.ts                     ← SEO utilities
│         ├── i18n.ts                    ← Translation helpers
│         └── performance.ts             ← Image optimization
│
├─── Styling System
│    └── src/styles/
│         ├── global.css                 ← Tailwind + customs
│         ├── typography.css             ← Brand fonts
│         └── components.css             ← Component styles
│
└─── Public Assets
     └── public/
          ├── logos/
          │   └── README.md              ← Logo placeholder
          ├── images/
          │   └── README.md              ← Image placeholder
          └── favicon.ico                ← Generic favicon
```

**Total Files Created: 100-120 files**

---

## 🚀 Execution Process (Automated)

### Phase 1: Data Extraction (5 minutes)

**Agent reads and parses ALL onboarding files:**

#### From business-brief.md:
```yaml
Extract:
  - business_name: "Ing Heng Credit Sdn Bhd"
  - industry: "Equipment Financing"
  - services: ["Hire Purchase", "Loan Financing", "Insurance"]
  - value_proposition: "Fast approval equipment financing"
  - contact_phone: "+60123456789"
  - contact_email: "info@inghengcredit.com"
  - contact_whatsapp: "60123456789"
  - address: "123 Business St, Kuala Lumpur"
  - operating_hours: "Mon-Fri 9AM-6PM"
  - languages: ["en", "ms", "zh"]
  - years_in_business: "20"
  - clients_served: "500+"
```

#### From personas.md:
```yaml
Extract:
  - persona_1_name: "Ahmad the Contractor"
  - persona_1_pain_points: ["Cash flow issues", "Equipment downtime"]
  - persona_1_language: "ms"
  - persona_2_name: "Lee the Logistics Manager"
  - persona_2_language: "zh"
  # ... all personas
```

#### From trust-signals.md:
```yaml
Extract:
  - certifications: ["Licensed Moneylender", "BNM Approved"]
  - awards: ["Best Financing 2023"]
  - team_size: "50+ employees"
  - testimonials: [...]
```

#### From selected ci-option-[X].html:
```yaml
Extract:
  - primary_color: "#8B6F47"
  - accent_color: "#D4A574"
  - dark_color: "#2D1810"
  - background_color: "#F5F5DC"
  - heading_font: "Inter"
  - body_font: "Inter"
  - button_style: "brutal" (4px shadow)
  - border_radius: "0" (sharp corners)
  - spacing_scale: "tight" (compact layout)
```

### Phase 2: Project Initialization (10 minutes)

**Agent creates base structure:**

1. **Initialize Astro 5 project**
   ```bash
   npm create astro@latest clients/[client-name]/website -- --template minimal --typescript strict --yes
   ```

2. **Install dependencies**
   ```json
   {
     "dependencies": {
       "@astrojs/react": "^4.4.1",
       "@astrojs/sitemap": "^3.6.0",
       "@astrojs/tailwind": "^6.0.2",
       "@astrojs/vercel": "^9.0.0",
       "astro": "^5.15.3",
       "astro-seo": "^0.8.0",
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "tailwindcss": "^3.4.0"
     }
   }
   ```

3. **Generate astro.config.mjs** (with i18n)
   ```javascript
   export default defineConfig({
     site: process.env.PUBLIC_SITE_URL || 'http://localhost:4321',
     output: 'hybrid',
     adapter: vercel(),
     integrations: [
       tailwind(),
       react(),
       sitemap({
         i18n: {
           defaultLocale: 'en',
           locales: { en: 'en', ms: 'ms', zh: 'zh' }
         },
         filter: (page) => page.includes(`/${DEFAULT_LOCALE}/`)
       })
     ],
     i18n: {
       defaultLocale: 'en',
       locales: ['en', 'ms', 'zh'],
       routing: { prefixDefaultLocale: true },
       fallback: { ms: 'en', zh: 'en' }
     }
   });
   ```

4. **Generate tailwind.config.js** (from selected brand)
   ```javascript
   module.exports = {
     content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
     theme: {
       extend: {
         colors: {
           primary: '#8B6F47',    // From ci-option-X.html
           accent: '#D4A574',     // From ci-option-X.html
           dark: '#2D1810',       // From ci-option-X.html
           background: '#F5F5DC'  // From ci-option-X.html
         },
         fontFamily: {
           heading: ['Inter', 'sans-serif'],
           body: ['Inter', 'sans-serif']
         },
         boxShadow: {
           'brutal': '4px 4px 0 #2D1810'
         }
       }
     }
   };
   ```

### Phase 3: Component Generation (30 minutes)

**Agent creates 30+ Astro components using Islands Architecture:**

#### Example: Header.astro
```astro
---
interface Props {
  lang: 'en' | 'ms' | 'zh';
  currentPath: string;
}

const { lang, currentPath } = Astro.props;
import LanguageSwitcher from './LanguageSwitcher.astro';
import { SITE_CONFIG } from '../utils/constants';
import { t } from '../utils/i18n';

const navItems = [
  { label: t(lang)('nav.home'), href: `/${lang}/` },
  { label: t(lang)('nav.about'), href: `/${lang}/about` },
  { label: t(lang)('nav.services'), href: `/${lang}/services` },
  { label: t(lang)('nav.blog'), href: `/${lang}/blog` },
  { label: t(lang)('nav.contact'), href: `/${lang}/contact` }
];
---

<header class="bg-primary text-white shadow-brutal">
  <div class="container-custom flex justify-between items-center py-4">
    <!-- Logo -->
    <a href={`/${lang}/`} class="text-2xl font-heading font-bold">
      {SITE_CONFIG.name}
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex gap-6">
      {navItems.map(item => (
        <a
          href={item.href}
          class={`hover:text-accent transition ${currentPath === item.href ? 'text-accent font-bold' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>

    <!-- Language Switcher -->
    <LanguageSwitcher currentLang={lang} currentPath={currentPath} />

    <!-- Mobile Menu (React Island for interactivity) -->
    <MobileMenu client:load navItems={navItems} lang={lang} />
  </div>
</header>
```

**Key Component Patterns:**
- ✅ **Zero JS by default** - Pure Astro components
- ✅ **Islands for interactivity** - React components with `client:load`
- ✅ **Type-safe props** - TypeScript interfaces
- ✅ **Accessible markup** - ARIA labels, semantic HTML
- ✅ **Brand styles applied** - Uses Tailwind classes from config

### Phase 4: Page Generation (40 minutes)

**Agent creates ALL pages with REAL content:**

#### Example: Homepage (en/index.astro)
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Hero from '../../components/Hero.astro';
import ServiceCard from '../../components/ServiceCard.astro';
import TestimonialCard from '../../components/TestimonialCard.astro';
import CTAButton from '../../components/CTAButton.astro';
import { SITE_CONFIG } from '../../utils/constants';

const lang = 'en';

// Data from business-brief.md
const pageTitle = 'Fast Equipment Financing | Ing Heng Credit';
const pageDescription = 'Get approved in 24 hours for excavators, trucks, and construction equipment. Trusted by 500+ Malaysian contractors.';

const services = [
  {
    title: 'Hire Purchase',
    description: 'Flexible payment terms for all equipment types',
    icon: '🚜',
    link: `/${lang}/services/hire-purchase`
  },
  {
    title: 'Loan Financing',
    description: 'Competitive rates with fast approval',
    icon: '💰',
    link: `/${lang}/services/loan-financing`
  },
  {
    title: 'Equipment Insurance',
    description: 'Comprehensive coverage for your assets',
    icon: '🛡️',
    link: `/${lang}/services/insurance`
  }
];

// Trust signals from trust-signals.md
const trustStats = [
  { number: '20+', label: 'Years in Business' },
  { number: '500+', label: 'Clients Served' },
  { number: '24hr', label: 'Approval Time' }
];
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  lang={lang}
>
  <!-- Hero Section -->
  <Hero
    title="Fast Equipment Financing for Malaysian Contractors"
    subtitle="Get approved in 24 hours. Flexible terms. Trusted by 500+ businesses."
    ctaText="Get Quote Now"
    ctaLink={`/${lang}/contact`}
    imageSrc="/images/hero-equipment.jpg"
  />

  <!-- Trust Stats -->
  <section class="section bg-accent">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {trustStats.map(stat => (
          <div>
            <div class="text-5xl font-heading font-bold text-dark">{stat.number}</div>
            <p class="text-dark mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section">
    <div class="container-custom">
      <h2 class="text-4xl font-heading font-bold text-center mb-12">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard {...service} />
        ))}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section bg-primary text-white">
    <div class="container-custom text-center">
      <h2 class="text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
      <p class="text-xl mb-8">Contact us today for a free consultation</p>
      <CTAButton
        text="WhatsApp Us Now"
        phone={SITE_CONFIG.contact.whatsapp}
        lang={lang}
      />
    </div>
  </section>
</BaseLayout>
```

**All pages created for 3 languages:**
- ✅ Homepage with hero, services, testimonials, CTA
- ✅ About page with company story, team, trust signals
- ✅ Contact page with form, map, company info
- ✅ FAQ page with 10+ questions, schema markup
- ✅ Services overview with service grid
- ✅ **Blog index with DYNAMIC Content Collections (auto-discovers posts)**
- ✅ Dynamic blog route with content collection

#### CRITICAL: Blog Index MUST Use Content Collections

**❌ WRONG (Hardcoded arrays):**
```astro
const recentPosts = [
  { title: 'Post 1', slug: 'post-1', ... },  // ← Hardcoded!
  { title: 'Post 2', slug: 'post-2', ... }
];
```

**✅ CORRECT (Content Collections Auto-Discovery):**

**File: `src/pages/en/blog/index.astro`**
```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BlogCard from '../../../components/BlogCard.astro';

const lang = 'en';

// 🔥 AUTO-DISCOVER .md blog posts (Content Collections)
const allMdPosts = await getCollection('blogs');
const allPosts = allMdPosts
  .filter(post => post.data.locale === lang)
  .map(post => ({
    title: post.data.title,
    excerpt: post.data.description,
    slug: post.slug.includes('/') ? post.slug.split('/').pop() : post.slug,  // Remove locale prefix
    date: typeof post.data.publishDate === 'string' ? post.data.publishDate : post.data.publishDate.toISOString(),
    author: post.data.author,
    category: post.data.category,
    readTime: post.data.readingTime || 5,
    featured: post.data.featured,
  }));

// 🔥 SORT by date (newest first)
const sortedPosts = allPosts.sort((a, b) =>
  new Date(b.date).valueOf() - new Date(a.date).valueOf()
);

// Featured posts (marked as featured, limit 3)
const featuredPosts = sortedPosts.filter(p => p.featured).slice(0, 3);
const displayFeaturedPosts = featuredPosts.length > 0 ? featuredPosts : sortedPosts.slice(0, 3);

// Recent posts (latest 6)
const recentPosts = sortedPosts.slice(0, 6);

// Popular posts (first 4)
const popularPosts = sortedPosts.slice(0, 4).map(p => ({ title: p.title, slug: p.slug }));

// Dynamic category counts
const categories = [
  { name: 'Equipment Financing Tips', slug: 'equipment-financing', count: allPosts.filter(p => p.category === 'Equipment Financing Tips').length, icon: '🏗️' },
  { name: 'Contractor Guides', slug: 'contractor-guides', count: allPosts.filter(p => p.category === 'Contractor Guides').length, icon: '👷' },
  { name: 'Business Growth', slug: 'business-growth', count: allPosts.filter(p => p.category === 'Business Growth').length, icon: '📈' },
  { name: 'Tax & Compliance', slug: 'tax-compliance', count: allPosts.filter(p => p.category === 'Tax & Compliance').length, icon: '📋' },
];
---

<BaseLayout>
  {displayFeaturedPosts.map(post => <BlogCard {...post} />)}
  {recentPosts.map(post => <BlogCard {...post} />)}
</BaseLayout>
```

**File: `src/pages/en/blog/[slug].astro`** (Dynamic route to render each post)
```astro
---
import { getCollection } from 'astro:content';
import type { GetStaticPaths } from 'astro';
import BaseLayout from '../../../layouts/BaseLayout.astro';

export const getStaticPaths = (async () => {
  const allPosts = await getCollection('blogs');
  const enPosts = allPosts.filter(post =>
    post.data.locale === 'en' &&
    !post.data.draft
  );

  return enPosts.map(post => {
    // Extract just filename (remove locale folder prefix)
    const slug = post.slug.includes('/') ? post.slug.split('/').pop() : post.slug;
    return {
      params: { slug },
      props: { post },
    };
  });
}) satisfies GetStaticPaths;

const { post } = Astro.props;
const { Content } = await post.render();
---

<BaseLayout title={post.data.title} description={post.data.description} lang="en">
  <article class="prose">
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</BaseLayout>
```

**Why this matters:**
- ✅ New blog posts appear AUTOMATICALLY (no manual array updates)
- ✅ Command ⑦ creates blog post in `src/content/blogs/en/filename.md`
- ✅ Blog index auto-discovers via `getCollection('blogs')`
- ✅ Dynamic route `[slug].astro` renders each post
- ✅ ONE simple consistent template for all posts
- ✅ Category counts auto-calculated
- ✅ Featured/recent posts auto-selected

### Phase 5: Content Collections Setup (15 minutes)

**Astro 5 content collections for blog posts:**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    lang: z.enum(['en', 'ms', 'zh']),
    featured: z.boolean().default(false),
    image: z.string().optional()
  })
});

export const collections = {
  blog: blogCollection
};
```

### Phase 6: SEO Infrastructure (20 minutes)

**Dynamic robots.txt:**
```typescript
// src/pages/robots.txt.ts
export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${import.meta.env.PUBLIC_SITE_URL}/sitemap-index.xml
  `.trim();

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
```

**Dynamic sitemap (filtered by locale):**
```javascript
// Already configured in astro.config.mjs
sitemap({
  filter: (page) => {
    const locale = import.meta.env.PUBLIC_DEFAULT_LOCALE || 'en';
    return page.includes(`/${locale}/`);
  }
})
```

**Structured data generators:**
```typescript
// src/utils/schema.ts
export function generateOrganizationSchema(config: typeof SITE_CONFIG) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    telephone: config.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address,
      addressCountry: 'MY'
    }
  };
}

export function generateProductSchema(product: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MYR',
      availability: 'https://schema.org/InStock'
    }
  };
}

export function generateFAQSchema(faqs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
```

### Phase 7: Translation Generation (25 minutes)

**Professional translations for 200+ UI strings:**

```json
// src/i18n/en.json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "blog": "Blog",
    "contact": "Contact"
  },
  "cta": {
    "getStarted": "Get Started",
    "learnMore": "Learn More",
    "contactUs": "Contact Us",
    "requestQuote": "Request Quote",
    "whatsappUs": "WhatsApp Us Now"
  },
  "form": {
    "name": "Full Name",
    "email": "Email Address",
    "phone": "Phone Number",
    "message": "Your Message",
    "submit": "Send Message",
    "sending": "Sending...",
    "success": "Message sent successfully!",
    "error": "Error sending message. Please try again."
  },
  "footer": {
    "followUs": "Follow Us",
    "quickLinks": "Quick Links",
    "contactInfo": "Contact Information",
    "copyright": "© 2025 All rights reserved",
    "privacyPolicy": "Privacy Policy",
    "terms": "Terms of Service"
  },
  "blog": {
    "readMore": "Read More",
    "readingTime": "min read",
    "publishedOn": "Published on",
    "byAuthor": "by",
    "categories": "Categories",
    "tags": "Tags",
    "relatedPosts": "Related Articles",
    "shareArticle": "Share this article"
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "subtitle": "Get answers to common questions",
    "expand": "Expand",
    "collapse": "Collapse"
  },
  "calculator": {
    "title": "Financing Calculator",
    "loanAmount": "Loan Amount (MYR)",
    "interestRate": "Interest Rate (%)",
    "loanTerm": "Loan Term (months)",
    "calculate": "Calculate",
    "monthlyPayment": "Estimated Monthly Payment",
    "totalPayment": "Total Payment",
    "totalInterest": "Total Interest"
  }
}
```

**Full translations for Malay (ms.json) and Chinese (zh.json)**

### Phase 8: Deployment Configuration (10 minutes)

**Vercel configuration:**
```json
// .vercel/project.json
{
  "orgId": "team_[TO_BE_CONFIGURED]",
  "settings": {
    "framework": "astro",
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "installCommand": "npm install"
  }
}
```

**Environment variables template:**
```bash
# .env.example
PUBLIC_SITE_URL=https://www.inghengcredit.com
PUBLIC_DEFAULT_LOCALE=en
DEFAULT_LOCALE=en
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
WHATSAPP_NUMBER=60123456789
```

**Multi-deployment instructions in README.md:**
```markdown
# Deployment Instructions

This website supports 3 separate domain deployments:

## Deploy English Site (EN)
1. Update `.vercel/project.json` with EN project ID
2. Run: `vercel --prod --yes \
     --env PUBLIC_DEFAULT_LOCALE=en \
     --env DEFAULT_LOCALE=en \
     --env PUBLIC_SITE_URL=https://www.inghengcredit.com`

## Deploy Malay Site (MS)
1. Update `.vercel/project.json` with MS project ID
2. Run: `vercel --prod --yes \
     --env PUBLIC_DEFAULT_LOCALE=ms \
     --env DEFAULT_LOCALE=ms \
     --env PUBLIC_SITE_URL=https://www.kreditloan.my`

## Deploy Chinese Site (ZH)
1. Update `.vercel/project.json` with ZH project ID
2. Run: `vercel --prod --yes \
     --env PUBLIC_DEFAULT_LOCALE=zh \
     --env DEFAULT_LOCALE=zh \
     --env PUBLIC_SITE_URL=https://www.inghengcredit.my`
```

### Phase 9: Verification & Testing (15 minutes)

**Agent automatically runs:**

```bash
cd clients/[client-name]/website

# 1. Install dependencies
npm install
# → Verify no errors

# 2. Type checking
npx tsc --noEmit
# → Verify no TypeScript errors

# 3. Build for production
npm run build
# → Verify build succeeds
# → Check dist/ folder created
# → Verify sitemap generated
# → Verify robots.txt generated

# 4. Preview production build
npm run preview
# → Test homepage loads
# → Test language switcher works
# → Test all routes accessible

# 5. Lighthouse test (optional)
npx lighthouse http://localhost:4321 --only-categories=performance,accessibility,seo
# → Target scores: 90+ across all categories
```

### Phase 10: Documentation (10 minutes)

**Comprehensive README.md generated:**

```markdown
# [Client Name] Website

Multi-language Astro 5 website with SEO optimization and Vercel deployment.

## Tech Stack
- **Framework:** Astro 5.15+
- **Styling:** Tailwind CSS 3.4
- **Deployment:** Vercel (3 separate projects)
- **Languages:** English, Malay, Chinese

## Project Structure
\`\`\`
src/
├── components/     30+ reusable components
├── layouts/        3 layout templates
├── pages/          21 pages × 3 languages
├── i18n/           Translation files
├── utils/          Helper functions
└── styles/         Global styles
\`\`\`

## Development
\`\`\`bash
npm install
npm run dev        # http://localhost:4321
\`\`\`

## Deployment
See DEPLOYMENT.md for multi-site deployment instructions.

## Adding Content
- Blog posts: Add to \`src/content/blog/[lang]/\`
- Pages: Add to \`src/pages/[lang]/\`
- Translations: Update \`src/i18n/[lang].json\`
```

---

## 📊 Success Criteria

After command execution, verify:

- [x] **100+ files created** in `clients/[client-name]/website/`
- [x] **npm install** succeeds without errors
- [x] **npm run build** succeeds without errors
- [x] **npm run dev** starts successfully
- [x] **All 3 languages** (en, ms, zh) accessible
- [x] **All core pages** load with real content (no Lorem Ipsum)
- [x] **Brand colors** applied from selected CI option
- [x] **SEO infrastructure** complete (robots.txt, sitemap, schema)
- [x] **TypeScript** compiles without errors
- [x] **Lighthouse scores** 90+ (performance, accessibility, SEO)
- [x] **Multi-deployment** configuration ready

---

## 🎨 Astro 5 Best Practices Applied

### Islands Architecture
✅ Zero JavaScript by default - Only interactive components ship JS
✅ Selective hydration - React components use `client:load`
✅ Static-first rendering - Maximum performance

### Content Collections
✅ Type-safe content - Zod schemas for validation
✅ Organized structure - Separate folders per language
✅ Easy querying - Built-in helpers for filtering/sorting

### i18n Routing
✅ Built-in support - Native Astro i18n integration
✅ Automatic routing - File-based multilanguage routes
✅ Fallback logic - English as default for missing translations

### SEO Optimization
✅ Static HTML - Crawlable by search engines
✅ Fast loading - Zero JS overhead
✅ Structured data - Schema.org markup
✅ Hreflang tags - Proper language alternates

### Performance
✅ Code splitting - Automatic chunk optimization
✅ Image optimization - Sharp integration
✅ CSS purging - Unused styles removed
✅ CDN-ready - Optimized for Vercel Edge

### Accessibility
✅ Semantic HTML - Proper landmark elements
✅ ARIA labels - Screen reader support
✅ Keyboard navigation - Tab order and focus management
✅ Color contrast - WCAG AA compliance

---

## 🚨 Critical Rules

### Content Rules:
1. ✅ **REAL content only** - Extract from business-brief.md, personas.md
2. ❌ **NO Lorem Ipsum** - Use actual company data
3. ✅ **Brand consistency** - Colors/fonts match selected CI exactly
4. ✅ **Trust signals** - Include certifications, years in business
5. ✅ **Contact info** - Phone, email, WhatsApp from business-brief.md

### Technical Rules:
1. ✅ **Import paths** - Calculate correct relative paths
2. ✅ **TypeScript strict** - All types must be correct
3. ✅ **Tailwind config** - Extract from selected ci-option-[X].html
4. ✅ **Sitemap filtering** - Only default locale included
5. ✅ **Environment variables** - Dynamic config, no hardcoding

### Quality Rules:
1. ✅ **Production-ready** - No TODOs or placeholders
2. ✅ **Build succeeds** - npm run build must pass
3. ✅ **No console errors** - Clean browser console
4. ✅ **SEO complete** - Meta tags, schema, sitemap
5. ✅ **Accessible** - WCAG AA compliant

---

## 📈 Expected Output Summary

```
✅ WEBSITE SCAFFOLD GENERATION COMPLETE

Client: [CLIENT_NAME]
Industry: [INDUSTRY]
Brand: Option [X] - [BRAND_NAME]

📁 Files Created: 102 files
   ├── Configuration: 10 files
   ├── Components: 30 files
   ├── Layouts: 3 files
   ├── Pages: 63 files (21 × 3 languages)
   ├── Translations: 3 files
   ├── Utilities: 5 files
   ├── Styles: 3 files
   └── Assets: Placeholder structure

🎨 Brand Identity Applied:
   ✅ Colors: #8B6F47 (primary), #D4A574 (accent), #2D1810 (dark)
   ✅ Typography: Inter (heading + body)
   ✅ Button style: Brutal shadow (4px 4px 0)
   ✅ Components: 30+ branded components

🌍 Multi-Language Setup:
   ✅ English (EN): 21 pages
   ✅ Malay (MS): 21 pages
   ✅ Chinese (ZH): 21 pages
   ✅ Translations: 200+ strings per language

🔍 SEO Infrastructure:
   ✅ Dynamic robots.txt
   ✅ Auto-generated sitemap (locale-filtered)
   ✅ Organization schema markup
   ✅ Product/FAQ schema generators
   ✅ Meta tags (OG, Twitter Cards)
   ✅ Hreflang configuration

🧪 Quality Checks:
   ✅ npm install - SUCCESS
   ✅ npm run build - SUCCESS
   ✅ TypeScript compile - SUCCESS
   ✅ All pages load - SUCCESS
   ✅ Language switcher - SUCCESS
   ✅ No console errors - SUCCESS

📍 Location: clients/[client-name]/website/

🚀 Next Steps:
   1. Review generated website: npm run dev
   2. Customize logos/images in public/ folder
   3. Run ⑤ /5-build-author to add author pages
   4. Run ⑦ /7-build-blog to add blog posts
   5. Deploy to Vercel (see README.md)

Website is PRODUCTION-READY! 🎉
Generation time: 2 hours 15 minutes
```

---

## 🆘 Troubleshooting

### Error: "business-brief.md not found"
**Solution:** Run ① /1-research-business first

### Error: "No brand design selected"
**Solution:**
1. Review ci-option-1.html through ci-option-10.html
2. Update client-selection.md with choice
3. Re-run this command

### Error: "npm run build fails"
**Solution:** Check error message:
- Import path errors → Fix relative paths
- TypeScript errors → Add missing types
- Tailwind errors → Check config syntax

### Error: "Sitemap includes all languages"
**Solution:** Verify astro.config.mjs sitemap filter uses DEFAULT_LOCALE

### Error: "Pages show placeholder text"
**Solution:** Agent must re-read business-brief.md and extract real content

---

## 📚 What Happens Next

After this command completes:

**ONBOARD Phase (①-④b):** ✅ COMPLETE
- ✅ Business research done
- ✅ Content strategy defined
- ✅ E-E-A-T plan created
- ✅ Brand design selected
- ✅ **Website infrastructure ready**

**BUILD Phase (⑤-⑧):** Ready to start
- → ⑤ /5-build-author - Add author bio pages
- → ⑥ /6-build-hub-page - Create hub pages
- → ⑦ /7-build-blog - Write blog posts
- → ⑧ /8-build-service-page - Build service pages

**REVIEW Phase (⑨-⑪):** After content creation
- → ⑨ /9-review-seo - SEO audit
- → ⑩ /10-review-eeat - E-E-A-T scoring
- → ⑪ /11-review-readability - Readability check

**PUBLISH Phase (⑫-⑭):** After review passes
- → ⑫ /12-translate-content - Generate translations
- → ⑬ /13-deploy-multilang - Deploy to 3 domains
- → ⑭ /14-submit-search - Submit to search engines

---

**Created by:** SEO Workflow System v2.1
**Last Updated:** 2025-11-13 (Added Content Collections requirement for blog index)
**Execution Time:** 2-4 hours (automated)
**Position:** Bridge between ONBOARD and BUILD phases
