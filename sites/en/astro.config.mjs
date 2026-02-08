import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.inghengcredit.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        // Exclude redirect pages (root without language)
        if (page === 'https://www.inghengcredit.com/') return false;
        // Exclude error pages
        if (page.includes('/410-gone')) return false;
        // Exclude API routes
        if (page.includes('/api/')) return false;
        // Exclude Chinese and Malay pages (should only be on .my domains)
        if (page.includes('/ms/')) return false;
        if (page.includes('/zh/')) return false;
        // Include everything else
        return true;
      },
    }),
  ],
  output: 'static',
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
});
