import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// Read environment variables for multi-site deployment
const DEFAULT_LOCALE = process.env.PUBLIC_DEFAULT_LOCALE || 'en';
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://ingheng-credit.vercel.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static', // Explicitly set static output
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true,
  }),
  trailingSlash: 'always', // Enforce consistent URLs for SEO
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
    }),
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: ['en', 'zh', 'ms'],
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
