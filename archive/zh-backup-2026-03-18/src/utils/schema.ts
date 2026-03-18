/**
 * Schema.org JSON-LD Generator for Ing Heng Credit
 * Provides structured data for Google Search
 */

/**
 * Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'LocalBusiness'],
    name: 'Ing Heng Credit & Leasing Sdn Bhd',
    alternateName: 'Ing Heng Credit',
    url: 'https://www.inghengcredit.com',
    logo: 'https://www.inghengcredit.com/images/logo.png',
    image: 'https://www.inghengcredit.com/images/og-default.jpg',
    description: 'Premier equipment financing and leasing solutions in Malaysia for construction equipment, logistics vehicles, and industrial machinery.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '16, Lintang Menalu, Taman Chi Liung',
      addressLocality: 'Klang',
      addressRegion: 'Selangor',
      postalCode: '41200',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '3.0229422',
      longitude: '101.4332306',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+60-17-570-0889',
        contactType: 'Customer Service',
        areaServed: 'MY',
        availableLanguage: ['English', 'Mandarin', 'Malay'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+60-3-3324-8899',
        contactType: 'Sales',
        areaServed: 'MY',
        availableLanguage: ['English', 'Mandarin', 'Malay'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/Inghengcredit',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    foundingDate: '1985',
    slogan: 'Your Trusted Equipment Financing Partner',
  };
}

/**
 * Article Schema for Blog Posts
 */
export interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  imageUrl: string;
  url: string;
  locale: 'en' | 'zh' | 'ms';
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const {
    title,
    description,
    author,
    publishedDate,
    modifiedDate,
    imageUrl,
    url,
    locale,
  } = props;

  const siteUrl = (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL)
    || (typeof import.meta !== 'undefined' && import.meta.env?.SITE_URL)
    || 'https://www.inghengcredit.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: author || 'Ing Heng Credit & Leasing',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ing Heng Credit & Leasing',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: getLanguageCode(locale),
  };
}

/**
 * FAQ Schema for FAQ Sections
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Product Schema for Equipment Listings
 */
export interface ProductSchemaProps {
  name: string;
  description: string;
  imageUrl: string;
  brand?: string;
  category: string;
  offers?: {
    price: string;
    currency: string;
    availability: string;
  };
}

export function generateProductSchema(props: ProductSchemaProps) {
  const { name, description, imageUrl, brand, category, offers } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: imageUrl,
    brand: brand
      ? {
          '@type': 'Brand',
          name: brand,
        }
      : undefined,
    category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '83',
      bestRating: '5',
    },
    offers: offers
      ? {
          '@type': 'Offer',
          price: offers.price,
          priceCurrency: offers.currency,
          availability: offers.availability,
          seller: {
            '@type': 'Organization',
            name: 'Ing Heng Credit & Leasing',
          },
        }
      : undefined,
  };
}

/**
 * HowTo Schema for Step-by-Step Guides
 */
export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: {
    value: string;
    currency: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
  image?: string;
}

export function generateHowToSchema(props: HowToSchemaProps) {
  const {
    name,
    description,
    totalTime,
    estimatedCost,
    supply,
    tool,
    steps,
    image,
  } = props;

  const siteUrl = (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL)
    || (typeof import.meta !== 'undefined' && import.meta.env?.SITE_URL)
    || 'https://www.inghengcredit.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: image || `${siteUrl}/images/og-default.jpg`,
    totalTime: totalTime || 'PT30M',
    estimatedCost: estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: estimatedCost.currency,
          value: estimatedCost.value,
        }
      : undefined,
    supply: supply?.map((item) => ({
      '@type': 'HowToSupply',
      name: item,
    })),
    tool: tool?.map((item) => ({
      '@type': 'HowToTool',
      name: item,
    })),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
      url: step.url,
      position: index + 1,
    })),
  };
}

/**
 * Service Schema for Financial Services
 */
export interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider?: string;
  areaServed?: string;
}

export function generateServiceSchema(props: ServiceSchemaProps) {
  const {
    name,
    description,
    serviceType,
    provider = 'Ing Heng Credit & Leasing',
    areaServed = 'Malaysia',
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
  };
}

/**
 * Service Page Schema (Enhanced with Pricing & Ratings)
 */
export interface ServicePageSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  minRate: string;
  maxRate: string;
  locale: 'en' | 'zh' | 'ms';
}

export function generateServicePageSchema(props: ServicePageSchemaProps) {
  const { serviceName, description, serviceType, minRate, maxRate, locale } = props;

  const siteUrl = (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL)
    || (typeof import.meta !== 'undefined' && import.meta.env?.SITE_URL)
    || 'https://www.inghengcredit.com';

  const getLanguageCode = (lang: 'en' | 'zh' | 'ms') => {
    const codes = { en: 'en-MY', zh: 'zh-Hans-MY', ms: 'ms-MY' };
    return codes[lang];
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    serviceType: serviceType,
    inLanguage: getLanguageCode(locale),
    provider: {
      '@type': 'FinancialService',
      name: 'Ing Heng Credit & Leasing',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Options`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'MYR',
            minPrice: minRate,
            maxPrice: maxRate,
            unitText: '% per annum',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
    },
  };
}

/**
 * Helper: Get language code for schema
 */
function getLanguageCode(locale: 'en' | 'zh' | 'ms'): string {
  const localeMap = {
    en: 'en-MY',
    zh: 'zh-Hans-MY',
    ms: 'ms-MY',
  };
  return localeMap[locale];
}

/**
 * Helper: Encode JSON-LD for HTML
 */
export function encodeJSONLD(data: any): string {
  return JSON.stringify(data, null, 2);
}
