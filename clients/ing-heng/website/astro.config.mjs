import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// Read environment variables for multi-site deployment
const DEFAULT_LOCALE = process.env.PUBLIC_DEFAULT_LOCALE || 'en';
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://ingheng-credit.vercel.app';

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
          en: 'en-MY',
          zh: 'zh-Hans-MY',
          ms: 'ms-MY',
        },
      },
      filter: (page) => {
        // Exclude language selector root page from sitemap
        // Only exclude the exact root URL, not language-prefixed pages
        return page !== `${SITE_URL}/`;
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
    fallback: {
      zh: 'en', // If Chinese page missing, show English
      ms: 'en', // If Malay page missing, show English
    },
  },
});
