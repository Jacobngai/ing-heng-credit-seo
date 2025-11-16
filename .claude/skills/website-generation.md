# Website Generation Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/website/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Scaffold a complete multi-language SEO-optimized website for a specific client using Astro or Next.js.

## Platform Decision

### Choose Framework Based On:

**Use Astro (Static Site Generator) when:**
- Content-focused website (blog, marketing site)
- SEO is primary goal
- Fast page loads critical
- No complex interactivity needed
- **Recommended for most SEO clients**

**Use Next.js (Server-Side Rendering) when:**
- Need dynamic features (user dashboards, real-time data)
- Complex state management
- API integrations required
- E-commerce functionality

**For Ing Heng Credit clients: DEFAULT to Astro**

---

## Astro Website Generation

### Step 1: Create Project Structure

```bash
/example-clients/[client-name]/website/
├── src/
│   ├── content/
│   │   ├── posts/           # Blog posts
│   │   │   ├── en/
│   │   │   ├── zh/
│   │   │   └── ms/
│   │   └── config.ts        # Content collections
│   │
│   ├── pages/               # Routes
│   │   ├── index.astro      # Redirect to /en/
│   │   ├── en/
│   │   │   ├── index.astro  # EN homepage
│   │   │   ├── about.astro
│   │   │   ├── services.astro
│   │   │   ├── contact.astro
│   │   │   └── blog/
│   │   │       ├── index.astro        # Blog list
│   │   │       └── [slug].astro       # Blog post
│   │   ├── zh/              # ZH pages (same structure)
│   │   └── ms/              # MS pages (same structure)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── HomeLayout.astro
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSelector.astro
│   │   ├── BlogCard.astro
│   │   ├── FAQ.astro
│   │   └── CTA.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── i18n/
│       ├── en.json
│       ├── zh.json
│       └── ms.json
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml          # Auto-generated
│   └── images/
│
├── astro.config.mjs         # Astro configuration
├── package.json
├── tsconfig.json
├── vercel.json              # Vercel deployment config
└── .gitignore
```

---

### Step 2: Configure Astro for i18n

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://[client-domain].com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh',
          ms: 'ms',
        },
      },
    }),
  ],
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
```

---

### Step 3: Setup Content Collections

**src/content/config.ts:**
```typescript
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    language: z.enum(['en', 'zh', 'ms']),
    persona: z.string(),
    keywords: z.array(z.string()),
    status: z.enum(['draft', 'published']),
    publishedDate: z.date().optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
```

---

### Step 4: Create Base Layout with SEO

**src/layouts/BaseLayout.astro:**
```astro
---
import { ViewTransitions } from 'astro:transitions';

interface Props {
  title: string;
  description: string;
  language: 'en' | 'zh' | 'ms';
  canonical?: string;
  ogImage?: string;
}

const { title, description, language, canonical, ogImage } = Astro.props;
const site = 'https://[client-domain].com';
const currentUrl = canonical || Astro.url.pathname;

// Hreflang alternate URLs
// CRITICAL: Only generate hreflang for pages that actually exist in each language
// Validate page existence before adding to alternates
const basePath = currentUrl.replace(/^\/(en|zh|ms)/, '');
const alternates = {
  en: `${site}/en${basePath}`,
  zh: `${site}/zh${basePath}`,
  ms: `${site}/ms${basePath}`,
};

// Helper function to validate if translation exists
// This should check your content collections or page routes
// Only include hreflang tags for pages that exist
const validateTranslationExists = async (lang: string, path: string) => {
  // Implementation depends on your content structure
  // For now, assuming all core pages exist
  // In production, check file system or content collection
  return true;
};
---

<!DOCTYPE html>
<html lang={language}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <!-- SEO Meta Tags -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${site}${currentUrl}`} />

    <!-- Hreflang Tags -->
    <!-- CRITICAL REQUIREMENTS:
         1. SELF-REFERENCING: Every page MUST include hreflang to itself
         2. BIDIRECTIONAL: If page A links to page B, page B must link back to page A
         3. ABSOLUTE URLS: Never use relative URLs
         4. URL CONSISTENCY: Match canonical URL format (trailing slashes, www, protocol)
         5. ONLY EXISTING PAGES: Don't generate hreflang for non-existent translations
    -->
    <!-- Self-referencing tag (REQUIRED) -->
    <link rel="alternate" hreflang={language} href={`${site}${currentUrl}`} />

    <!-- Alternate language versions (only if they exist) -->
    {language !== 'en' && <link rel="alternate" hreflang="en" href={alternates.en} />}
    {language !== 'zh' && <link rel="alternate" hreflang="zh" href={alternates.zh} />}
    {language !== 'ms' && <link rel="alternate" hreflang="ms" href={alternates.ms} />}

    <!-- x-default for unmatched languages -->
    <link rel="alternate" hreflang="x-default" href={alternates.en} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${site}${currentUrl}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage || `${site}/og-image.jpg`} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage || `${site}/og-image.jpg`} />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>

    <ViewTransitions />
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

### Step 5: Create Homepage

**src/pages/en/index.astro:**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import CTA from '../../components/CTA.astro';

const translations = {
  hero_title: "Equipment Financing Made Simple",
  hero_subtitle: "Flexible financing solutions for construction and logistics businesses in Malaysia",
  cta_button: "Get Started",
  services_title: "Our Services",
  // ... more translations
};
---

<BaseLayout
  title="[Client Name] - [Service Description]"
  description="[Client description and key value proposition relevant to their niche]"
  language="en"
>
  <Header language="en" />

  <main>
    <section class="hero">
      <h1>{translations.hero_title}</h1>
      <p>{translations.hero_subtitle}</p>
      <CTA language="en" />
    </section>

    <section class="services">
      <h2>{translations.services_title}</h2>
      <!-- Services content -->
    </section>

    <!-- More sections -->
  </main>

  <Footer language="en" />
</BaseLayout>
```

---

### Step 6: Create Blog Post Template

**src/pages/en/blog/[slug].astro:**
```astro
---
import { getCollection } from 'astro:content';
import BlogLayout from '../../../layouts/BlogLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => {
    return data.language === 'en' && data.status === 'published';
  });

  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();

// Schema markup for blog post
const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.data.title,
  "description": post.data.description,
  "author": {
    "@type": "Organization",
    "name": post.data.author
  },
  "datePublished": post.data.pubDate.toISOString(),
  "dateModified": post.data.publishedDate?.toISOString() || post.data.pubDate.toISOString(),
};
---

<BlogLayout
  title={post.data.title}
  description={post.data.description}
  language="en"
  pubDate={post.data.pubDate}
  author={post.data.author}
>
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />

  <article>
    <h1>{post.data.title}</h1>
    <time datetime={post.data.pubDate.toISOString()}>
      {post.data.pubDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </time>

    <Content />
  </article>
</BlogLayout>
```

---

### Step 7: Create Components

**src/components/LanguageSelector.astro:**
```astro
---
const { currentLanguage, availableLanguages } = Astro.props;
const currentPath = Astro.url.pathname;

// Generate alternate language URLs
const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ms', label: 'Bahasa', flag: '🇲🇾' },
];

function getAlternateUrl(targetLang: string) {
  return currentPath.replace(/^\/(en|zh|ms)/, `/${targetLang}`);
}

// CRITICAL: Validate that translation exists before rendering link
// If translation doesn't exist, either:
// 1. Don't show the language option
// 2. Show it disabled with explanation
// 3. Link to language homepage instead
const isTranslationAvailable = (langCode: string) => {
  // In production, this should check your content collection or file system
  // For now, check if language is in availableLanguages prop
  return !availableLanguages || availableLanguages.includes(langCode);
};
---

<div class="language-selector">
  {languages.map((lang) => {
    const isAvailable = isTranslationAvailable(lang.code);
    const url = isAvailable ? getAlternateUrl(lang.code) : `/${lang.code}/`;

    return (
      <a
        href={url}
        class={`lang-link ${currentLanguage === lang.code ? 'active' : ''} ${!isAvailable ? 'unavailable' : ''}`}
        hreflang={lang.code}
        aria-label={`Switch to ${lang.label}`}
        title={!isAvailable ? `This page is not available in ${lang.label} yet` : `Switch to ${lang.label}`}
      >
        <span class="flag" aria-hidden="true">{lang.flag}</span>
        <span class="label">{lang.label}</span>
        {!isAvailable && <span class="badge">Soon</span>}
      </a>
    )
  })}
</div>

<style>
  .lang-link.unavailable {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .badge {
    font-size: 0.7rem;
    background: var(--color-warning);
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 4px;
  }
</style>
```

**src/components/CTA.astro:**
```astro
---
const { language } = Astro.props;

const cta_text = {
  en: {
    title: "Ready to Get Started?",
    button: "Contact Us on WhatsApp",
    phone: "Call Us: 03-3324 8899",
  },
  zh: {
    title: "立即咨询，获得专业建议",
    button: "WhatsApp 联系我们",
    phone: "电话：03-3324 8899",
  },
  ms: {
    title: "Ingin Dapatkan Bantuan Kami?",
    button: "Hubungi Kami di WhatsApp",
    phone: "Telefon: 03-3324 8899",
  },
};

const content = cta_text[language];
---

<div class="cta">
  <h2>{content.title}</h2>
  <a href="https://wa.me/60175700889" class="btn-primary" target="_blank">
    {content.button}
  </a>
  <p>{content.phone}</p>
</div>
```

---

### Step 8: Configure Vercel Deployment

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/",
      "destination": "/en"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

### Step 9: Generate robots.txt

**public/robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://apex-machinery.com/sitemap.xml
```

---

### Step 10: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /example-clients/[client-name]/website/
vercel --prod

# Output:
# ✅ Deployed to https://[client-name].vercel.app
# ✅ Custom domain: https://[client-domain].com
```

---

## Multilingual SEO Optimization

### Hreflang Implementation
Every page must include:
```html
<link rel="alternate" hreflang="en" href="https://site.com/en/page" />
<link rel="alternate" hreflang="zh" href="https://site.com/zh/page" />
<link rel="alternate" hreflang="ms" href="https://site.com/ms/page" />
<link rel="alternate" hreflang="x-default" href="https://site.com/en/page" />
```

### Sitemap with Hreflang
Astro sitemap automatically includes hreflang when configured.

### Language Selector
Visible on every page, allows switching between languages while staying on same content.

---

## Hreflang Best Practices & Validation

### Critical Requirements

Every hreflang implementation MUST follow these rules to avoid Google Search Console errors:

#### 1. Self-Referencing Tags (MANDATORY)
Every page MUST include a hreflang tag pointing to itself:

```html
<!-- If current page is EN version -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="ms" href="https://site.com/ms/about" />
```

**Why:** Google uses self-referencing tags to validate bidirectional relationships.

**Implementation in BaseLayout.astro:**
```astro
---
// Always include current language in hreflang tags
const hreflangs = [
  { lang: language, url: `${site}${currentUrl}` }, // SELF-REFERENCE
  { lang: 'en', url: alternates.en },
  { lang: 'zh', url: alternates.zh },
  { lang: 'ms', url: alternates.ms },
  { lang: 'x-default', url: alternates.en },
];
---

{hreflangs.map(({ lang, url }) => (
  <link rel="alternate" hreflang={lang} href={url} />
))}
```

#### 2. Bidirectional Linking (Return Tags)
If page A links to page B, page B MUST link back to page A.

**Example:**
```
EN page: /en/about
- hreflang="en" → /en/about (self)
- hreflang="zh" → /zh/about
- hreflang="ms" → /ms/about

ZH page: /zh/about
- hreflang="zh" → /zh/about (self)
- hreflang="en" → /en/about (MUST RETURN TO EN)
- hreflang="ms" → /ms/about

MS page: /ms/about
- hreflang="ms" → /ms/about (self)
- hreflang="en" → /en/about (MUST RETURN TO EN)
- hreflang="zh" → /zh/about (MUST RETURN TO ZH)
```

**Implementation:** Use the same URL generation logic across all language versions:

```typescript
// utils/hreflang.ts
export function generateHreflangs(currentPath: string, siteUrl: string) {
  // Remove language prefix to get base path
  const basePath = currentPath.replace(/^\/(en|zh|ms)/, '');

  return {
    en: `${siteUrl}/en${basePath}`,
    zh: `${siteUrl}/zh${basePath}`,
    ms: `${siteUrl}/ms${basePath}`,
  };
}
```

#### 3. Absolute URLs Only
NEVER use relative URLs in hreflang tags.

```html
<!-- ❌ WRONG -->
<link rel="alternate" hreflang="en" href="/en/about" />

<!-- ✅ CORRECT -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
```

#### 4. URL Consistency
Hreflang URLs must match your canonical URLs exactly:

**Trailing Slashes:**
```html
<!-- If canonical has trailing slash, hreflang must too -->
<link rel="canonical" href="https://site.com/en/about/" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about/" />

<!-- If canonical has NO trailing slash, hreflang must NOT have it -->
<link rel="canonical" href="https://site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
```

**Protocol (HTTPS):**
```html
<!-- ❌ WRONG: Mixed protocols -->
<link rel="canonical" href="https://site.com/en/about" />
<link rel="alternate" hreflang="en" href="http://site.com/en/about" />

<!-- ✅ CORRECT: Consistent HTTPS -->
<link rel="canonical" href="https://site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
```

**www vs non-www:**
```html
<!-- ❌ WRONG: Inconsistent subdomain -->
<link rel="canonical" href="https://www.site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />

<!-- ✅ CORRECT: Consistent subdomain -->
<link rel="canonical" href="https://www.site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://www.site.com/en/about" />
```

**Implementation:**
```typescript
// utils/url-normalizer.ts
export function normalizeUrl(path: string, siteUrl: string): string {
  // Ensure consistent format
  const cleanPath = path.replace(/\/+$/, ''); // Remove trailing slashes
  const cleanSite = siteUrl.replace(/\/+$/, ''); // Remove trailing slash from site

  return `${cleanSite}${cleanPath}`;
}

// Usage in BaseLayout.astro
const canonicalUrl = normalizeUrl(currentUrl, site);
const hreflangUrls = {
  en: normalizeUrl(`/en${basePath}`, site),
  zh: normalizeUrl(`/zh${basePath}`, site),
  ms: normalizeUrl(`/ms${basePath}`, site),
};
```

#### 5. Only Include Existing Pages
NEVER generate hreflang tags for non-existent translations.

**Problem:**
```html
<!-- Page exists in EN and MS, but NOT in ZH -->
<!-- ❌ WRONG: Including non-existent ZH version -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" /> <!-- 404! -->
<link rel="alternate" hreflang="ms" href="https://site.com/ms/about" />
```

**Solution:**
```typescript
// utils/translation-validator.ts
import { getCollection } from 'astro:content';

export async function getAvailableTranslations(slug: string) {
  const posts = await getCollection('posts', ({ slug: postSlug }) => postSlug === slug);
  const languages = posts.map(post => post.data.language);
  return languages;
}

// Usage in BaseLayout.astro
---
import { getAvailableTranslations } from '../utils/translation-validator';

const availableLanguages = await getAvailableTranslations(Astro.params.slug);

const hreflangs = [
  availableLanguages.includes('en') && { lang: 'en', url: alternates.en },
  availableLanguages.includes('zh') && { lang: 'zh', url: alternates.zh },
  availableLanguages.includes('ms') && { lang: 'ms', url: alternates.ms },
  { lang: 'x-default', url: alternates.en }, // x-default always points to primary language
].filter(Boolean);
---

{hreflangs.map(({ lang, url }) => (
  <link rel="alternate" hreflang={lang} href={url} />
))}
```

**For static pages (non-collection):**
```typescript
// utils/page-existence-checker.ts
export async function pageExists(lang: string, path: string): Promise<boolean> {
  try {
    // Check if file exists in file system
    const filePath = `src/pages/${lang}${path}.astro`;
    const fs = await import('fs/promises');
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Usage
const availableLanguages = await Promise.all(
  ['en', 'zh', 'ms'].map(async (lang) => ({
    lang,
    exists: await pageExists(lang, basePath)
  }))
);

const hreflangs = availableLanguages
  .filter(({ exists }) => exists)
  .map(({ lang }) => ({
    lang,
    url: `${site}/${lang}${basePath}`
  }));
```

#### 6. Regional vs Language Codes

**Use language codes for content in a language:**
```html
<!-- ✅ CORRECT: Content is in English -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />

<!-- ✅ CORRECT: Content is in Chinese -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
```

**Use regional codes ONLY when content is region-specific:**
```html
<!-- ✅ CORRECT: English content specifically for UK market -->
<link rel="alternate" hreflang="en-GB" href="https://site.co.uk/about" />

<!-- ✅ CORRECT: English content specifically for US market -->
<link rel="alternate" hreflang="en-US" href="https://site.com/about" />

<!-- ✅ CORRECT: Chinese content specifically for Singapore -->
<link rel="alternate" hreflang="zh-SG" href="https://site.com.sg/zh/about" />
```

**For Malaysian market (Ing Heng example):**
```html
<!-- If content is same for all English speakers: -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />

<!-- If content is Malaysia-specific (pricing, regulations, etc.): -->
<link rel="alternate" hreflang="en-MY" href="https://site.com/en/about" />
<link rel="alternate" hreflang="zh-MY" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="ms-MY" href="https://site.com/ms/about" />
```

#### 7. x-default Tag
The `x-default` tag tells Google which version to show when no language matches.

```html
<!-- ✅ CORRECT: x-default points to your primary language -->
<link rel="alternate" hreflang="x-default" href="https://site.com/en/about" />
```

**Guidelines:**
- Always include `x-default`
- Usually points to your English version
- Must be an existing page (don't point to a 404)
- Should represent the most universal version of your content

---

### Common Mistakes to Avoid

#### Mistake 1: Missing Self-Reference
```html
<!-- ❌ WRONG: Current page is EN, but no hreflang="en" -->
<!-- Current page: /en/about -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="ms" href="https://site.com/ms/about" />
```

**Fix:**
```html
<!-- ✅ CORRECT: Includes self-reference -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" /> <!-- Self -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="ms" href="https://site.com/ms/about" />
```

#### Mistake 2: Non-Bidirectional Links
```html
<!-- EN page has: -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />

<!-- ❌ WRONG: ZH page doesn't link back to EN -->
<!-- ZH page has: -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
<!-- Missing: hreflang="en" href="https://site.com/en/about" -->
```

**Fix:** Ensure all language versions reference each other.

#### Mistake 3: Hreflang to Non-Existent Pages
```html
<!-- ❌ WRONG: /zh/new-feature doesn't exist yet -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/new-feature" />
```

**Fix:** Only generate hreflang after verifying page exists.

#### Mistake 4: Incorrect Language Codes
```html
<!-- ❌ WRONG: Invalid language codes -->
<link rel="alternate" hreflang="chinese" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="malay" href="https://site.com/ms/about" />

<!-- ✅ CORRECT: ISO 639-1 codes -->
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="ms" href="https://site.com/ms/about" />
```

#### Mistake 5: Hreflang ≠ Canonical
```html
<!-- ❌ WRONG: Canonical points to /en/about, but hreflang points to /en/about/ -->
<link rel="canonical" href="https://site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about/" />
```

**Fix:** Ensure exact URL match:
```html
<!-- ✅ CORRECT: URLs match exactly -->
<link rel="canonical" href="https://site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
```

#### Mistake 6: Using Relative URLs
```html
<!-- ❌ WRONG: Relative URL -->
<link rel="alternate" hreflang="en" href="/en/about" />

<!-- ✅ CORRECT: Absolute URL -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
```

#### Mistake 7: Conflicting Hreflang Tags
```html
<!-- ❌ WRONG: Multiple hreflang tags for same language -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
<link rel="alternate" hreflang="en" href="https://site.com/en/about-us" />
```

**Fix:** Only one hreflang tag per language per page.

#### Mistake 8: Forgetting x-default
```html
<!-- ❌ WRONG: Missing x-default -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />

<!-- ✅ CORRECT: Includes x-default -->
<link rel="alternate" hreflang="en" href="https://site.com/en/about" />
<link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
<link rel="alternate" hreflang="x-default" href="https://site.com/en/about" />
```

---

### Validation & Testing

#### 1. Google Search Console Verification

**Steps:**
1. Deploy your site
2. Add property to Google Search Console
3. Wait 24-48 hours for crawling
4. Navigate to: **Coverage → International Targeting → Language**
5. Check for errors:
   - "No return tags"
   - "Missing self-reference"
   - "Incorrect hreflang"
   - "URL not crawlable"

**Common GSC Errors:**

| Error | Cause | Fix |
|-------|-------|-----|
| No return tags | Page A links to Page B, but Page B doesn't link back | Add bidirectional hreflang tags |
| Missing self-reference | Page doesn't include hreflang to itself | Add `hreflang={language}` tag pointing to current URL |
| Incorrect hreflang | Invalid language code (e.g., "chinese" instead of "zh") | Use ISO 639-1 codes |
| URL not found (404) | Hreflang points to non-existent page | Remove hreflang or create the missing page |
| URL returns 5XX | Server error on linked page | Fix server issues |

#### 2. Manual Testing Checklist

**For Each Page:**
```bash
# 1. Check source code
curl -s https://site.com/en/about | grep "hreflang"

# Expected output:
# <link rel="alternate" hreflang="en" href="https://site.com/en/about" />
# <link rel="alternate" hreflang="zh" href="https://site.com/zh/about" />
# <link rel="alternate" hreflang="ms" href="https://site.com/ms/about" />
# <link rel="alternate" hreflang="x-default" href="https://site.com/en/about" />
```

**Verification Script:**
```typescript
// scripts/validate-hreflang.ts
import { getCollection } from 'astro:content';

async function validateHreflang() {
  const posts = await getCollection('posts');
  const errors: string[] = [];

  for (const post of posts) {
    const { slug, data } = post;
    const { language } = data;

    // Check if other languages link back to this post
    const otherLanguages = posts.filter(
      p => p.slug === slug && p.data.language !== language
    );

    for (const otherPost of otherLanguages) {
      // Verify bidirectional link exists
      const otherLang = otherPost.data.language;

      if (!hasHreflangTag(otherPost, language)) {
        errors.push(
          `Missing return tag: ${otherLang}/${slug} should link to ${language}/${slug}`
        );
      }
    }

    // Check self-reference
    if (!hasSelfReference(post)) {
      errors.push(`Missing self-reference: ${language}/${slug}`);
    }
  }

  if (errors.length > 0) {
    console.error('Hreflang validation errors:');
    errors.forEach(err => console.error(`  - ${err}`));
    process.exit(1);
  } else {
    console.log('✅ All hreflang tags valid');
  }
}

validateHreflang();
```

#### 3. Third-Party Tools

**Recommended Tools:**
- **Screaming Frog SEO Spider** (Paid) - Crawl site and validate hreflang
- **Merkle Hreflang Checker** (Free) - https://technicalseo.com/tools/hreflang/
- **Ahrefs Site Audit** (Paid) - Detects hreflang errors
- **Sitebulb** (Paid) - Visual hreflang validation

**Screaming Frog Setup:**
1. Crawl your site
2. Go to: **Configuration → Custom → Extraction**
3. Extract hreflang tags: `//link[@rel='alternate'][@hreflang]`
4. Export report
5. Check for:
   - Missing return tags
   - Broken URLs
   - Incorrect codes

#### 4. Pre-Deployment Testing

**Add to CI/CD pipeline:**
```yaml
# .github/workflows/validate-seo.yml
name: Validate SEO

on: [push, pull_request]

jobs:
  validate-hreflang:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run validate:hreflang
```

**package.json:**
```json
{
  "scripts": {
    "validate:hreflang": "tsx scripts/validate-hreflang.ts"
  }
}
```

#### 5. Testing Procedure

**Before Go-Live:**
1. ✅ Check all hreflang tags in `<head>`
2. ✅ Verify self-references exist
3. ✅ Test bidirectional links
4. ✅ Confirm all URLs return 200 (not 404)
5. ✅ Validate language codes (ISO 639-1)
6. ✅ Check URL consistency (protocol, www, trailing slashes)
7. ✅ Ensure canonical matches hreflang
8. ✅ Confirm x-default points to existing page

**After Deployment:**
1. Wait 24-48 hours
2. Check Google Search Console for errors
3. Use Screaming Frog to validate
4. Monitor search rankings per language
5. Check Google Analytics for proper language segmentation

---

### Complete Implementation Example

**utils/hreflang-generator.ts:**
```typescript
import { getCollection } from 'astro:content';

export interface HrefLangTag {
  lang: string;
  url: string;
}

export async function generateHrefLangs(
  currentPath: string,
  currentLanguage: string,
  siteUrl: string,
  slug?: string
): Promise<HrefLangTag[]> {
  // Remove language prefix to get base path
  const basePath = currentPath.replace(/^\/(en|zh|ms)/, '');

  // Normalize URLs (remove trailing slashes)
  const normalizeUrl = (path: string) => {
    const cleanSite = siteUrl.replace(/\/+$/, '');
    const cleanPath = path.replace(/\/+$/, '');
    return `${cleanSite}${cleanPath}`;
  };

  // For content collection pages, check which translations exist
  let availableLanguages = ['en', 'zh', 'ms']; // Default: assume all exist

  if (slug) {
    const posts = await getCollection('posts', ({ slug: postSlug }) => postSlug === slug);
    availableLanguages = posts.map(post => post.data.language);
  }

  // Generate hreflang tags only for existing pages
  const hreflangs: HrefLangTag[] = availableLanguages.map(lang => ({
    lang,
    url: normalizeUrl(`/${lang}${basePath}`),
  }));

  // Add x-default (usually points to English)
  hreflangs.push({
    lang: 'x-default',
    url: normalizeUrl(`/en${basePath}`),
  });

  return hreflangs;
}
```

**Updated BaseLayout.astro:**
```astro
---
import { ViewTransitions } from 'astro:transitions';
import { generateHrefLangs } from '../utils/hreflang-generator';

interface Props {
  title: string;
  description: string;
  language: 'en' | 'zh' | 'ms';
  canonical?: string;
  ogImage?: string;
  slug?: string; // For content collection pages
}

const { title, description, language, canonical, ogImage, slug } = Astro.props;
const site = import.meta.env.SITE || 'https://[client-domain].com';
const currentUrl = canonical || Astro.url.pathname;

// Generate hreflang tags with validation
const hreflangs = await generateHrefLangs(currentUrl, language, site, slug);
---

<!DOCTYPE html>
<html lang={language}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <!-- SEO Meta Tags -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${site}${currentUrl}`} />

    <!-- Hreflang Tags (with validation) -->
    {hreflangs.map(({ lang, url }) => (
      <link rel="alternate" hreflang={lang} href={url} />
    ))}

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${site}${currentUrl}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage || `${site}/og-image.jpg`} />
    <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : language === 'ms' ? 'ms_MY' : 'en_US'} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage || `${site}/og-image.jpg`} />

    <ViewTransitions />
  </head>
  <body>
    <slot />
  </body>
</html>
```

**Updated Blog Post Template:**
```astro
---
// src/pages/en/blog/[slug].astro
import { getCollection } from 'astro:content';
import BlogLayout from '../../../layouts/BlogLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => {
    return data.language === 'en' && data.status === 'published';
  });

  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();

// Get available translations for this post
const allPosts = await getCollection('posts', ({ slug }) => slug === post.slug);
const availableLanguages = allPosts.map(p => p.data.language);
---

<BlogLayout
  title={post.data.title}
  description={post.data.description}
  language="en"
  pubDate={post.data.pubDate}
  author={post.data.author}
  slug={post.slug}
  availableLanguages={availableLanguages}
>
  <article>
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</BlogLayout>
```

---

### Monitoring & Maintenance

**Monthly Checklist:**
- [ ] Check Google Search Console for new hreflang errors
- [ ] Verify all new pages have correct hreflang tags
- [ ] Audit removed pages (ensure hreflang tags removed)
- [ ] Monitor international traffic in Google Analytics
- [ ] Check for 404s in hreflang targets

**Quarterly Review:**
- [ ] Run full site crawl with Screaming Frog
- [ ] Review Search Console International Targeting report
- [ ] Validate language-specific rankings
- [ ] Update hreflang implementation if new languages added

---

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Techniques
1. **Image optimization:**
   - Use WebP format
   - Lazy loading
   - Responsive images

2. **Code splitting:**
   - Route-based splitting
   - Component lazy loading

3. **Caching:**
   - Static assets cached 1 year
   - HTML cached with revalidation

4. **CDN:**
   - Vercel Edge Network
   - Global distribution

---

## Execution Timing
- Project scaffolding: 2 minutes
- Configuration: 1 minute
- Component creation: 2 minutes
- Deployment: 2 minutes (Vercel build time)
- **Total: ~7 minutes**

## Agent Usage
This skill is executed by: **Client Setup Agent**
Invoked during: Phase 2 (Production Setup)
Part of: `client-finalization.md` workflow

## Output
```
✅ WEBSITE GENERATED & DEPLOYED

Client: [client-name]
Framework: Astro (Static Site Generator)
Hosting: Vercel Edge Network

URLs:
🌐 Production: https://[client-name].vercel.app
🌐 Custom domain: https://[client-domain].com (pending DNS)

Features:
✅ Multi-language support (EN/ZH/MS)
✅ SEO optimized (meta tags, hreflang, sitemap)
✅ Mobile responsive
✅ Core Web Vitals optimized
✅ Schema markup ready
✅ Analytics integrated
✅ Language selector

Pages created:
- Homepage (EN/ZH/MS)
- About (EN/ZH/MS)
- Services (EN/ZH/MS)
- Contact (EN/ZH/MS)
- Blog listing (EN/ZH/MS)
- Blog post template (EN/ZH/MS)

Ready for content publishing! 🚀
```

## Success Criteria
✅ Website deployed successfully
✅ All pages accessible
✅ Hreflang tags implemented
✅ Sitemap generated
✅ Performance metrics green
✅ Mobile responsive
✅ SEO meta tags correct
✅ Analytics tracking

---

## Multi-Language Deployment Strategy

**IMPORTANT:** For clients requiring separate Vercel deployments per language (e.g., English-primary, Chinese-primary, Malay-primary sites), refer to the **`multi-language-deployment.md`** skill.

### When to Use Multi-Deployment

**Use single deployment (this skill) when:**
- Client is okay with one primary language (e.g., English default)
- Language switcher is sufficient for multilingual needs
- Budget-conscious (single Vercel project)

**Use multi-deployment (`multi-language-deployment.md`) when:**
- Client wants separate domains per language (e.g., .com for EN, .cn for ZH, .my for MS)
- Each language needs to be "primary" on its own deployment
- Better local SEO targeting required
- Compliance or cultural reasons (e.g., Chinese market prefers .cn domains)

### Key Difference

**Single Deployment (this skill):**
```
[client-domain].com/        ← English (default)
[client-domain].com/zh/     ← Chinese
[client-domain].com/ms/     ← Malay
```

**Multi-Deployment (`multi-language-deployment.md`):**
```
[client-domain].com/        ← English (default)
zh.[client-domain].com/     ← Chinese (default)
ms.[client-domain].com/     ← Malay (default)
```

Each deployment has its own Vercel project but shares the same content source (no duplication).

### Integration

If client requires multi-deployment:
1. Follow this skill for initial website structure
2. Then execute `multi-language-deployment.md` to create additional deployment targets
3. Publishing workflow (`publishing-workflow.md`) will deploy to all language versions simultaneously

**See `multi-language-deployment.md` for complete multi-deployment architecture.**
