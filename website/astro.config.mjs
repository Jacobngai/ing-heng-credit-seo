import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ingheng-credit.vercel.app',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-MY',
          zh: 'zh-Hans-MY',
          ms: 'ms-MY',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms'],
    routing: {
      prefixDefaultLocale: true
    }
  },
});
