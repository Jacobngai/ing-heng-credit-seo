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
const alternates = {
  en: `${site}/en${currentUrl.replace(/^\/(en|zh|ms)/, '')}`,
  zh: `${site}/zh${currentUrl.replace(/^\/(en|zh|ms)/, '')}`,
  ms: `${site}/ms${currentUrl.replace(/^\/(en|zh|ms)/, '')}`,
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
    <link rel="alternate" hreflang="en" href={alternates.en} />
    <link rel="alternate" hreflang="zh" href={alternates.zh} />
    <link rel="alternate" hreflang="ms" href={alternates.ms} />
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
const { currentLanguage } = Astro.props;
const currentPath = Astro.url.pathname;

// Generate alternate language URLs
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ms', label: 'Bahasa' },
];

function getAlternateUrl(targetLang: string) {
  return currentPath.replace(/^\/(en|zh|ms)/, `/${targetLang}`);
}
---

<div class="language-selector">
  {languages.map((lang) => (
    <a
      href={getAlternateUrl(lang.code)}
      class={currentLanguage === lang.code ? 'active' : ''}
      hreflang={lang.code}
    >
      {lang.label}
    </a>
  ))}
</div>
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
