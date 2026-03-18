// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.inghengcredit.my',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        // Exclude redirect pages (root without language)
        if (page === 'https://www.inghengcredit.my/') return false;
        // Exclude error pages
        if (page.includes('/410-gone')) return false;
        // Exclude API routes
        if (page.includes('/api/')) return false;
        // Include everything else
        return true;
      },
    }),
  ],
  output: 'static',
  adapter: vercel(),
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
});
