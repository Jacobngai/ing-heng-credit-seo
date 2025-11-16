import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Read environment variables for multi-site deployment
// Use build-time vars (without PUBLIC_) first, fallback to runtime vars (with PUBLIC_)
const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE || process.env.PUBLIC_DEFAULT_LOCALE || 'en';
const SITE_URL = process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://ingheng-credit.vercel.app';

// Ensure default locale is first in the array (Astro requirement)
const ALL_LOCALES = ['en', 'zh', 'ms'];
const LOCALES = [DEFAULT_LOCALE, ...ALL_LOCALES.filter(loc => loc !== DEFAULT_LOCALE)];

export default defineConfig({
  site: SITE_URL,
  output: 'static', // Explicitly set static output
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true,
  }),
  trailingSlash: 'ignore', // Let Vercel handle trailing slashes
  devToolbar: {
    enabled: false, // Disable Astro dev toolbar to prevent mobile menu conflicts
  },
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: {
          // Dynamic: only include the default locale for this deployment
          // This prevents duplicate content across the 3 domains
          [DEFAULT_LOCALE]: DEFAULT_LOCALE === 'en' ? 'en-MY' : DEFAULT_LOCALE === 'ms' ? 'ms-MY' : 'zh-Hans-MY',
        },
      },
      filter: (page) => {
        // CRITICAL FIX: Only include pages for the default locale
        // This prevents duplicate content across multi-domain deployments
        // EN site (inghengcredit.com) → only /en/ pages
        // MS site (kreditloan.my) → only /ms/ pages
        // ZH site (inghengcredit.my) → only /zh/ pages
        const excludeRoot = page !== `${SITE_URL}/`;
        const includeOnlyDefaultLocale = page.includes(`/${DEFAULT_LOCALE}/`);
        return excludeRoot && includeOnlyDefaultLocale;
      },
      serialize: (item) => {
        // Add lastmod to all pages
        item.lastmod = new Date();

        // Set higher priority for homepage variants
        if (item.url.match(/\/(en|zh|ms)\/?$/)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Equipment pages get high priority
        else if (item.url.includes('/equipment/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Blog pages get medium priority
        else if (item.url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Service and info pages
        else if (item.url.includes('/services/') || item.url.includes('/about') || item.url.includes('/contact')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Default for other pages
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false, // Disable to prevent redirect loops
    },
    // Dynamic fallback: only include non-default locales
    // Astro doesn't allow the default locale to be used as a fallback key
    fallback: Object.fromEntries(
      ALL_LOCALES
        .filter(loc => loc !== DEFAULT_LOCALE)
        .map(loc => [loc, DEFAULT_LOCALE])
    ),
  },
});
