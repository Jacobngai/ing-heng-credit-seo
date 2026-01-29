import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Environment variables for multi-language deployment
const DEFAULT_LOCALE = process.env.PUBLIC_DEFAULT_LOCALE || process.env.DEFAULT_LOCALE || 'en';
const ALL_LOCALES = ['en', 'ms', 'zh'];

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: {
          en: 'en',
          ms: 'ms',
          zh: 'zh'
        }
      },
      filter: (page) => {
        // Only include pages for the default locale in sitemap
        return page.includes(`/${DEFAULT_LOCALE}/`);
      }
    })
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: ALL_LOCALES,
    routing: {
      prefixDefaultLocale: true
    },
    fallback: Object.fromEntries(
      ALL_LOCALES
        .filter(loc => loc !== DEFAULT_LOCALE)
        .map(loc => [loc, DEFAULT_LOCALE])
    )
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});
