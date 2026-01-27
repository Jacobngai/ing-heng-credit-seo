# Ing Heng Credit & Leasing Website

Premier equipment financing and leasing website built with Astro 4.x, featuring multilingual support (English, Mandarin, Bahasa Malaysia) and SEO optimization.

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Integrations**: React, Sitemap
- **Deployment**: Vercel

## Project Structure

```
website/
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   │   ├── en/          # English pages
│   │   ├── zh/          # Mandarin pages
│   │   └── ms/          # Malay pages
│   ├── content/          # Content collections
│   │   ├── blogs/       # Blog posts
│   │   │   ├── en/
│   │   │   ├── zh/
│   │   │   └── ms/
│   │   └── config.ts    # Content schema
│   ├── i18n/            # Translation files
│   │   ├── en.json
│   │   ├── zh.json
│   │   └── ms.json
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── public/              # Static assets
│   ├── images/
│   └── fonts/
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Multilingual Support**: Full i18n for English, Mandarin (Simplified), and Bahasa Malaysia
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, hreflang
- **Content Collections**: Type-safe blog and equipment content
- **Schema.org**: Structured data for rich snippets
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Performance**: Astro's static site generation
- **Content Management**: Markdown-based content with frontmatter

## Content Management

### Adding Blog Posts

1. Create new markdown file in `src/content/blogs/[locale]/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Blog Title"
description: "Brief description"
author: "Ing Heng Credit & Leasing"
publishDate: "2025-01-10"
category: "Equipment Financing"
locale: "en"
keywords: ["keyword1", "keyword2"]
---

Your content here...
```

### Adding Equipment Listings

1. Create new markdown file in `src/content/equipment/[locale]/`
2. Add frontmatter with equipment details
3. Include images in `public/images/equipment/`

## Multilingual Guidelines

- Always create content for all 3 languages
- Use cultural adaptation, not direct translation
- Independent keyword research per language
- Maintain consistent messaging across languages

## Deployment

The site is configured for Vercel deployment:

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

Create `.env` file (if needed):

```
PUBLIC_SITE_URL=https://ingheng-credit.vercel.app
```

## Development Notes

- All paths use absolute paths from project root
- Content collections are type-checked at build time
- i18n translations are statically imported
- SEO utilities generate meta tags automatically
- Schema.org markup included on all pages

## Contact Information

**Ing Heng Credit & Leasing Sdn Bhd**
- Phone: 0175700889 / 03-3324 8899
- WhatsApp: +60175700889
- Email: enquiry@inghengcredit.com
- Address: 306-1, Persiaran Pegaga, Taman Bayu Perdana, 41200 Klang, Selangor

## License

© 2025 Ing Heng Credit & Leasing Sdn Bhd. All rights reserved.
