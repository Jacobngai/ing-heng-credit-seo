# Quick Start Guide - Ing Heng Credit Website

## Project Successfully Initialized! ✅

Your Astro 4.x multilingual website structure is now ready for development.

---

## What's Been Created

### Files: 21 total
- 5 configuration files
- 4 utility files (1,345 lines of code)
- 3 translation files (English, Mandarin, Malay)
- 1 content schema
- 1 global stylesheet
- 1 .gitignore
- 3 documentation files

### Directories: 19 total
- Organized for scalability
- Ready for components, layouts, pages
- Multi-language content structure (en/zh/ms)

---

## Getting Started (3 Steps)

### Step 1: Install Dependencies
```bash
cd "C:\Users\Vivobook\OneDrive\Desktop\ING HENG CREDIT\website"
npm install
```

This will install:
- Astro 4.x
- React 18.2
- Tailwind CSS 3.4
- Sitemap generator
- SEO utilities

**Time**: ~2-3 minutes

### Step 2: Start Development Server
```bash
npm run dev
```

Opens at: http://localhost:4321

**Note**: No pages yet, but structure is valid!

### Step 3: Create Your First Page
Create `src/pages/en/index.astro`:

```astro
---
import { getTranslations } from '../../utils/i18n';
const t = getTranslations('en');
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{t.site.title}</title>
  </head>
  <body>
    <h1>{t.home.hero.title}</h1>
    <p>{t.home.hero.subtitle}</p>
  </body>
</html>
```

---

## Project Structure

```
website/
├── src/
│   ├── components/        # ← Create components here
│   ├── layouts/          # ← Create layouts here
│   ├── pages/            # ← Create pages here
│   │   ├── en/          # English pages
│   │   ├── zh/          # Mandarin pages
│   │   └── ms/          # Malay pages
│   ├── content/          # ← Create blog posts here
│   │   └── blogs/
│   ├── i18n/            # ✅ Translations ready
│   ├── styles/          # ✅ Global styles ready
│   └── utils/           # ✅ Utilities ready
└── public/              # ← Add images here
```

---

## Key Files You'll Use

### For Every Page:
- `src/utils/i18n.ts` - Get translations
- `src/utils/seo.ts` - Generate meta tags
- `src/utils/schema.ts` - Add structured data
- `src/styles/global.css` - Apply styles

### Example Usage:
```typescript
// Get translations
import { getTranslations } from '../utils/i18n';
const t = getTranslations('en');

// Generate SEO tags
import { generateSEOTags } from '../utils/seo';
const seoTags = generateSEOTags({
  title: 'Equipment Financing Malaysia',
  description: 'Fast approval for construction equipment',
  locale: 'en',
});

// Generate schema
import { generateOrganizationSchema } from '../utils/schema';
const schema = generateOrganizationSchema();
```

---

## Available NPM Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm start         # Alias for npm run dev
```

---

## What's Pre-Configured

### SEO ✅
- Meta tags (Open Graph, Twitter Cards)
- Schema.org structured data
- Sitemap generation
- Hreflang for multilingual

### Styling ✅
- Tailwind CSS with custom colors
- 20+ component classes ready
- Responsive utilities
- Animation classes

### i18n ✅
- English, Mandarin, Malay translations
- 100+ translation keys per language
- Locale-aware formatting
- Cultural adaptation built-in

### Content ✅
- Blog collection schema
- Equipment collection schema
- Landing page collection schema
- Type-safe with Zod validation

---

## Next Development Steps

### Priority 1: Create Base Layout
File: `src/layouts/BaseLayout.astro`

This will be your main layout wrapper used by all pages.

### Priority 2: Create Header & Footer
Files:
- `src/components/Header.astro`
- `src/components/Footer.astro`

### Priority 3: Create Homepage
File: `src/pages/en/index.astro`

Then duplicate for `zh/index.astro` and `ms/index.astro`

---

## Useful Utilities Available

### SEO Functions
- `generateSEOTags()` - Complete meta tags
- `generateHreflangLinks()` - Multi-language links
- `generateBreadcrumbs()` - Breadcrumb data
- `calculateReadingTime()` - Blog reading time
- `slugify()` - URL-safe slugs

### Schema Functions
- `generateOrganizationSchema()` - Company info
- `generateArticleSchema()` - Blog posts
- `generateFAQSchema()` - FAQ sections
- `generateProductSchema()` - Equipment listings

### i18n Functions
- `getTranslations()` - Get all translations
- `t()` - Get specific translation key
- `formatDate()` - Locale-aware dates
- `formatCurrency()` - Format MYR currency
- `getAlternateUrl()` - Multi-language URLs

---

## Company Information (Pre-Loaded)

All company info is available in `src/utils/constants.ts`:

```typescript
import { COMPANY_INFO } from '../utils/constants';

// Phone: COMPANY_INFO.phone.international
// WhatsApp: COMPANY_INFO.whatsapp.link
// Email: COMPANY_INFO.email
// Address: COMPANY_INFO.address.full
// Hours: COMPANY_INFO.hours
```

---

## Styling Classes Available

### Buttons
- `.btn-primary` - Blue button
- `.btn-secondary` - Lighter blue
- `.btn-accent` - Orange button
- `.btn-outline` - Outlined button

### Layout
- `.container-custom` - Max-width container
- `.section` - Vertical spacing
- `.hero` - Hero section gradient

### Forms
- `.form-input` - Input fields
- `.form-label` - Form labels
- `.form-error` - Error messages

### Cards
- `.card` - Card container
- `.card-body` - Card content

[See `src/styles/global.css` for complete list]

---

## Content Creation

### Blog Posts
1. Create file: `src/content/blogs/en/your-post.md`
2. Add frontmatter:
```yaml
---
title: "Your Blog Title"
description: "Description"
publishDate: "2025-10-10"
category: "Equipment Financing"
locale: "en"
keywords: ["keyword1", "keyword2"]
---
```
3. Write content in Markdown
4. Repeat for `zh/` and `ms/` (culturally adapted)

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Auto-deploys on push

Configuration already in `vercel.json`!

---

## Documentation

- **README.md** - Project overview
- **SETUP-COMPLETE.md** - Detailed setup report
- **PROJECT-INITIALIZATION-REPORT.md** - Complete technical report
- **QUICK-START-GUIDE.md** - This file

---

## Troubleshooting

### Build Errors?
- Check if `npm install` completed successfully
- Verify Node.js version (need 18+)

### Import Errors?
- All paths are absolute from `src/`
- Example: `import { t } from '../utils/i18n'`

### Styling Not Working?
- Ensure `src/styles/global.css` is imported in layout
- Run `npm run dev` after adding new classes

---

## Support

**Project Location**:
`C:\Users\Vivobook\OneDrive\Desktop\ING HENG CREDIT\website\`

**Company**: Ing Heng Credit & Leasing Sdn Bhd
**Phone**: 0175700889 / 03-3324 8899
**Email**: enquiry@inghengcredit.com

---

## Success Checklist

Before starting development, verify:

- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Can access http://localhost:4321
- [ ] Read the utilities in `src/utils/`
- [ ] Reviewed translation structure in `src/i18n/`
- [ ] Checked styling classes in `src/styles/global.css`
- [ ] Understand content schema in `src/content/config.ts`

---

## You're Ready! 🚀

Your project foundation is solid. Start building components and pages!

**Recommended First Task**: Create `src/layouts/BaseLayout.astro`

---

*Generated: October 10, 2025*
