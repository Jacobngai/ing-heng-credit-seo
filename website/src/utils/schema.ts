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
    '@type': 'FinancialService',
    name: 'Ing Heng Credit & Leasing Sdn Bhd',
    alternateName: 'Ing Heng Credit',
    url: 'https://ingheng-credit.vercel.app',
    logo: 'https://ingheng-credit.vercel.app/images/logo.png',
    image: 'https://ingheng-credit.vercel.app/images/og-default.jpg',
    description: 'Premier equipment financing and leasing solutions in Malaysia for construction equipment, logistics vehicles, and industrial machinery.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '306-1, Persiaran Pegaga, Taman Bayu Perdana',
      addressLocality: 'Klang',
      addressRegion: 'Selangor',
      postalCode: '41200',
      addressCountry: 'MY',
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
    foundingDate: '2015',
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

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: author || 'Ing Heng Credit & Leasing',
      url: 'https://ingheng-credit.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ing Heng Credit & Leasing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ingheng-credit.vercel.app/images/logo.png',
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
