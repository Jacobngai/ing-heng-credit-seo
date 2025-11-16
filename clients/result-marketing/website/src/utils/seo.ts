import type { Locale } from './constants';
import { SITE_CONFIG } from './constants';

export interface SEOProps {
  title: string;
  description: string;
  locale: Locale;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetaTags(props: SEOProps) {
  const {
    title,
    description,
    locale,
    canonical,
    ogImage = `${SITE_CONFIG.url}/images/og-default.jpg`,
    ogType = 'website',
    publishDate,
    modifiedDate,
    author,
    noindex = false,
    nofollow = false
  } = props;

  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
  const canonicalUrl = canonical || `${SITE_CONFIG.url}/${locale}/`;

  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  const robotsContent = robots.length > 0 ? robots.join(', ') : 'index, follow';

  return {
    title: fullTitle,
    description,
    canonical: canonicalUrl,
    robots: robotsContent,

    // Open Graph
    og: {
      title: fullTitle,
      description,
      type: ogType,
      url: canonicalUrl,
      image: ogImage,
      locale: locale === 'en' ? 'en_US' : locale === 'ms' ? 'ms_MY' : 'zh_CN',
      siteName: SITE_CONFIG.name
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: ogImage,
      creator: '@resultmarketing'
    },

    // Article specific
    ...(ogType === 'article' && {
      article: {
        publishedTime: publishDate,
        modifiedTime: modifiedDate || publishDate,
        author
      }
    })
  };
}

export function generateAlternateLinks(path: string, currentLocale: Locale): Array<{ lang: string; href: string }> {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  return locales.map(locale => ({
    lang: locale,
    href: `${SITE_CONFIG.url}/${locale}${path}`
  }));
}

export function generateHreflangTags(path: string, currentLocale: Locale) {
  const alternates = generateAlternateLinks(path, currentLocale);
  return alternates.map(alt => ({
    rel: 'alternate',
    hreflang: alt.lang,
    href: alt.href
  }));
}
