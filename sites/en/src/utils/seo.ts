/**
 * SEO Utility Functions for Ing Heng Credit
 * Handles meta tags, Open Graph, and Twitter Cards
 */

export interface SEOProps {
  title: string;
  description: string;
  locale: 'en' | 'zh' | 'ms';
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[] | string;
}

/**
 * Generate complete SEO meta tags
 */
export function generateSEOTags(props: SEOProps) {
  const {
    title,
    description,
    locale,
    canonical,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author = 'Ing Heng Credit & Leasing',
    keywords = [],
  } = props;

  // Use environment variable if available (set at Astro component level), otherwise fallback
  const siteUrl = (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL)
    || (typeof import.meta !== 'undefined' && import.meta.env?.SITE_URL)
    || 'https://www.inghengcredit.com';
  const fullCanonical = canonical || `${siteUrl}/${locale}/`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Handle keywords as either string or array
  const keywordsString = typeof keywords === 'string'
    ? keywords
    : Array.isArray(keywords)
      ? keywords.join(', ')
      : '';

  return {
    title,
    description,
    canonical: fullCanonical,
    ogTitle: title,
    ogDescription: description,
    ogImage: fullOgImage,
    ogType,
    ogLocale: getOGLocale(locale),
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: fullOgImage,
    publishedTime,
    modifiedTime,
    author,
    keywords: keywordsString,
  };
}

/**
 * Get Open Graph locale format
 */
function getOGLocale(locale: 'en' | 'zh' | 'ms'): string {
  const localeMap = {
    en: 'en_MY',
    zh: 'zh_Hans_MY',
    ms: 'ms_MY',
  };
  return localeMap[locale];
}

/**
 * Generate alternate language links for hreflang
 */
export function generateHreflangLinks(
  slug: string,
  locales: Array<'en' | 'zh' | 'ms'> = ['en', 'zh', 'ms']
) {
  // Use environment variable if available (set at Astro component level), otherwise fallback
  const siteUrl = (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL)
    || (typeof import.meta !== 'undefined' && import.meta.env?.SITE_URL)
    || 'https://www.inghengcredit.com';

  return locales.map((locale) => ({
    rel: 'alternate',
    hreflang: getHreflangCode(locale),
    href: `${siteUrl}/${locale}/${slug}`,
  }));
}

/**
 * Get hreflang code
 */
function getHreflangCode(locale: 'en' | 'zh' | 'ms'): string {
  const hreflangMap = {
    en: 'en-MY',
    zh: 'zh-Hans-MY',
    ms: 'ms-MY',
  };
  return hreflangMap[locale];
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbs(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate article reading time
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
