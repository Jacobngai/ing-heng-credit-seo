# Result Marketing Website

A modern, multi-language digital marketing website built with Astro 5, designed to showcase Result Marketing's services and expertise in SEO, digital marketing, and web development.

## Overview

This website serves as the main online presence for Result Marketing, featuring:
- Multi-language support (English, Malay, Chinese)
- SEO-optimized content and structure
- Blog system with category organization
- Service showcase pages
- Contact and consultation forms
- Fast, static-generated pages for optimal performance

## Tech Stack

- **Framework**: [Astro 5.0+](https://astro.build/) - Modern static site generator
- **UI Framework**: [React 18](https://react.dev/) - For interactive components
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful typographic defaults
- **Deployment**: [Vercel](https://vercel.com/) - Edge network deployment
- **Analytics**: Vercel Web Analytics
- **Language**: TypeScript 5.7

## Project Structure

```
clients/result-marketing/website/
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   └── logos/                  # Brand logos
├── src/
│   ├── components/             # Reusable Astro/React components
│   │   ├── Header.astro       # Site navigation
│   │   ├── Footer.astro       # Site footer
│   │   ├── BlogCard.astro     # Blog post card
│   │   ├── ServiceCard.astro  # Service display card
│   │   └── ...                # Other components
│   ├── content/               # Content collections
│   │   └── blog/              # Blog posts by language
│   │       ├── en/            # English posts
│   │       ├── ms/            # Malay posts
│   │       └── zh/            # Chinese posts
│   ├── i18n/                  # Internationalization
│   │   ├── en.json           # English translations
│   │   ├── ms.json           # Malay translations
│   │   └── zh.json           # Chinese translations
│   ├── layouts/               # Page layouts
│   │   ├── Layout.astro      # Base layout
│   │   └── BlogLayout.astro  # Blog post layout
│   ├── pages/                 # Route pages (file-based routing)
│   │   ├── index.astro       # Root redirect
│   │   ├── en/               # English pages
│   │   ├── ms/               # Malay pages
│   │   └── zh/               # Chinese pages
│   ├── styles/                # Global styles
│   │   └── global.css        # Global CSS & Tailwind imports
│   └── utils/                 # Utility functions
│       ├── constants.ts      # Site constants
│       ├── seo.ts            # SEO utilities
│       └── ...               # Other utilities
├── astro.config.mjs           # Astro configuration
├── tailwind.config.cjs        # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
├── README.md                  # This file
└── DEPLOYMENT.md              # Deployment guide
```

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Git

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd clients/result-marketing/website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

### Development Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run TypeScript and Astro checks
npm run check

# Run Astro CLI commands
npm run astro
```

## Environment Variables

The website uses environment variables for multi-language deployment configuration:

```bash
# Required for each deployment
PUBLIC_DEFAULT_LOCALE=en    # or 'ms' or 'zh'
DEFAULT_LOCALE=en           # or 'ms' or 'zh'
PUBLIC_SITE_URL=https://www.resultmarketing.my
SITE_URL=https://www.resultmarketing.my
```

**Local Development:**
Create a `.env` file in the project root:

```env
PUBLIC_DEFAULT_LOCALE=en
DEFAULT_LOCALE=en
PUBLIC_SITE_URL=http://localhost:4321
SITE_URL=http://localhost:4321
```

## Content Management

### Adding Blog Posts

Blog posts are organized by language in the `src/content/blog/` directory.

**Create a new blog post:**

1. Create a new `.md` or `.mdx` file in the appropriate language folder:
   ```
   src/content/blog/en/your-post-slug.md
   ```

2. Add frontmatter metadata:
   ```markdown
   ---
   title: "Your Post Title"
   description: "Brief description for SEO"
   pubDate: 2025-01-15
   author: "Author Name"
   category: "seo" # or "digital-marketing", "web-development", etc.
   tags: ["seo", "marketing", "tips"]
   image: "/images/blog/your-image.jpg"
   featured: false
   ---

   Your content here...
   ```

3. Write your content using Markdown syntax

4. The post will automatically appear in:
   - Blog listing page (`/en/blog/`)
   - Category pages (`/en/blog/category/seo/`)
   - RSS feed
   - Sitemap

### Translating Content

To add translations for a blog post:

1. Create the same file in other language folders:
   ```
   src/content/blog/ms/your-post-slug.md  # Malay
   src/content/blog/zh/your-post-slug.md  # Chinese
   ```

2. Use the same `slug` in frontmatter to link translations
3. Translate the content while maintaining the same structure

### Updating Site Content

**Navigation Menu:**
Edit `src/i18n/{language}.json` under the `nav` key.

**Footer Content:**
Edit `src/i18n/{language}.json` under the `footer` key.

**Service Pages:**
Edit files in `src/pages/{language}/services/`

**Home Page:**
Edit `src/pages/{language}/index.astro`

## Multi-Language Architecture

This website uses a **single codebase, multiple deployment** strategy:

- **One GitHub repository** contains all languages
- **Three separate Vercel projects** (EN, MS, ZH)
- Each project reads `PUBLIC_DEFAULT_LOCALE` to configure itself
- Users see only their language (no language switcher in production)

**Key Files:**
- `astro.config.mjs` - Dynamic i18n configuration based on environment
- `src/pages/index.astro` - Root redirect to default locale
- `src/i18n/*.json` - Translation files for each language

## Building for Production

```bash
npm run build
```

This will:
1. Run TypeScript and Astro checks (`astro check`)
2. Build the site for production
3. Generate static HTML files in `dist/`
4. Create sitemap and RSS feeds
5. Optimize assets

**Build Output:**
```
dist/
├── en/           # English pages
├── ms/           # Malay pages
├── zh/           # Chinese pages
├── _astro/       # Optimized assets
└── sitemap-*.xml # Sitemaps
```

## Deployment

The website is deployed to Vercel with three separate projects for each language.

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed deployment instructions.

**Quick Deploy:**
```bash
# Deploy English version
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://www.resultmarketing.my \
  --env SITE_URL=https://www.resultmarketing.my
```

## Performance Features

- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Automatic image optimization via Astro
- **Code Splitting**: Automatic JavaScript code splitting
- **CSS Optimization**: Tailwind CSS purging and minification
- **Edge Deployment**: Served from Vercel's global edge network
- **Zero JavaScript by Default**: Only load JS where needed (interactive components)

## SEO Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **RSS Feed**: Auto-generated RSS feed for blogs
- **Canonical URLs**: Proper canonical URL handling
- **i18n SEO**: Language-specific URLs and hreflang tags

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Development server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .astro dist
npm install
npm run dev
```

### Build fails with TypeScript errors
```bash
# Run type checking
npm run check

# Check for missing dependencies
npm install
```

### Environment variables not working
- Ensure variables are prefixed with `PUBLIC_` for client-side access
- Restart dev server after changing `.env` file
- Check that `.env` file is in the project root

### Content not appearing
- Check that content files have proper frontmatter
- Ensure content is in the correct language folder
- Run `npm run dev` to see detailed error messages

## Contributing

1. Create a feature branch from `master`
2. Make your changes
3. Test locally with `npm run dev` and `npm run build`
4. Run `npm run check` to verify TypeScript
5. Commit with descriptive messages
6. Create a pull request

## License

Proprietary - Result Marketing © 2025

## Support

For questions or issues:
- Email: support@resultmarketing.my
- Phone: +60 12-345-6789

---

**Last Updated**: January 2025
**Astro Version**: 5.0.5
**Node Version Required**: 18+
