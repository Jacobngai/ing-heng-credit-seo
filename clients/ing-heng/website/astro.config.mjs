import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Read environment variables for multi-site deployment
// Use build-time vars (without PUBLIC_) first, fallback to runtime vars (with PUBLIC_)
const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE || process.env.PUBLIC_DEFAULT_LOCALE || 'en';
const SITE_URL = process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://ingheng-credit.vercel.app';

// Determine which locale to build based on domain
// Each domain only builds its own language to save build time
const getLocalesForDomain = () => {
  if (SITE_URL.includes('inghengcredit.com')) {
    return ['en']; // .com = English only
  } else if (SITE_URL.includes('kreditloan.my')) {
    return ['ms']; // kreditloan.my = Malay only
  } else if (SITE_URL.includes('inghengcredit.my')) {
    return ['zh']; // .my = Chinese only
  }
  // Default: build all locales (for preview/dev)
  return ['en', 'zh', 'ms'];
};

const ALL_LOCALES = ['en', 'zh', 'ms'];
const LOCALES = getLocalesForDomain();
const SINGLE_LOCALE_MODE = LOCALES.length === 1;

// Build redirects based on deployment domain
const getRedirects = () => {
  const redirects = {};
  
  // For .com domain: redirect MS and ZH to their respective domains
  if (SITE_URL.includes('inghengcredit.com')) {
    redirects['/ms/[...slug]'] = 'https://www.kreditloan.my/ms/[...slug]';
    redirects['/ms'] = 'https://www.kreditloan.my/ms/';
    redirects['/zh/[...slug]'] = 'https://www.inghengcredit.my/zh/[...slug]';
    redirects['/zh'] = 'https://www.inghengcredit.my/zh/';
  }
  // For kreditloan.my: redirect EN and ZH
  else if (SITE_URL.includes('kreditloan.my')) {
    redirects['/en/[...slug]'] = 'https://www.inghengcredit.com/en/[...slug]';
    redirects['/en'] = 'https://www.inghengcredit.com/en/';
    redirects['/zh/[...slug]'] = 'https://www.inghengcredit.my/zh/[...slug]';
    redirects['/zh'] = 'https://www.inghengcredit.my/zh/';
  }
  // For inghengcredit.my: redirect EN and MS
  else if (SITE_URL.includes('inghengcredit.my')) {
    redirects['/en/[...slug]'] = 'https://www.inghengcredit.com/en/[...slug]';
    redirects['/en'] = 'https://www.inghengcredit.com/en/';
    redirects['/ms/[...slug]'] = 'https://www.kreditloan.my/ms/[...slug]';
    redirects['/ms'] = 'https://www.kreditloan.my/ms/';
  }
  
  return redirects;
};

export default defineConfig({
  site: SITE_URL,
  output: 'static', // Explicitly set static output
  redirects: getRedirects(),
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
          en: 'en-MY',
          zh: 'zh-Hans-MY',
          ms: 'ms-MY',
        },
      },
      filter: (page) => {
        // Exclude language selector root page from sitemap
        if (page === `${SITE_URL}/`) return false;
        
        // Exclude wrong-language pages based on deployment domain
        // .com = English only, .my (inghengcredit.my) = Chinese only, kreditloan.my = Malay only
        if (SITE_URL.includes('inghengcredit.com')) {
          // English domain: exclude /ms/ and /zh/
          if (page.includes('/ms/') || page.includes('/zh/')) return false;
        } else if (SITE_URL.includes('kreditloan.my')) {
          // Malay domain: exclude /en/ and /zh/
          if (page.includes('/en/') || page.includes('/zh/')) return false;
        } else if (SITE_URL.includes('inghengcredit.my')) {
          // Chinese domain: exclude /en/ and /ms/
          if (page.includes('/en/') || page.includes('/ms/')) return false;
        }
        
        return true;
      },
      serialize: (item) => {
        // Add lastmod to all pages (today's date to trigger re-crawl)
        item.lastmod = new Date();
        item.changefreq = 'weekly'; // Encourage weekly crawling

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
    defaultLocale: LOCALES[0], // Use first (and possibly only) locale as default
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false, // Disable to prevent redirect loops
    },
    // Only add fallback if building multiple locales
    ...(LOCALES.length > 1 ? {
      fallback: Object.fromEntries(
        LOCALES
          .filter(loc => loc !== LOCALES[0])
          .map(loc => [loc, LOCALES[0]])
      ),
    } : {}),
  },
});
