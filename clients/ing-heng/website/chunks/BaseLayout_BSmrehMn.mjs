import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, m as maybeRenderHead, e as renderScript, r as renderComponent, f as renderSlot, g as renderHead, u as unescapeHTML } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';
import { S as SITE_CONFIG, t, C as COMPANY_INFO, a as $$Footer, $ as $$Header } from './Footer_BoPJ3uP5.mjs';
/* empty css                         */

const __vite_import_meta_env__$1 = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://ingheng-credit.vercel.app", "SSR": true};
function generateSEOTags(props) {
  const {
    title,
    description,
    locale,
    canonical,
    ogImage = "/images/og-default.jpg",
    ogType = "website",
    publishedTime,
    modifiedTime,
    author = "Ing Heng Credit & Leasing",
    keywords = []
  } = props;
  const siteUrl = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__$1, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.PUBLIC_SITE_URL || typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__$1, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.SITE_URL || "https://www.inghengcredit.com";
  const fullCanonical = canonical || `${siteUrl}/${locale}/`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;
  const keywordsString = typeof keywords === "string" ? keywords : Array.isArray(keywords) ? keywords.join(", ") : "";
  return {
    title,
    description,
    canonical: fullCanonical,
    ogTitle: title,
    ogDescription: description,
    ogImage: fullOgImage,
    ogType,
    ogLocale: getOGLocale(locale),
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: fullOgImage,
    publishedTime,
    modifiedTime,
    author,
    keywords: keywordsString
  };
}
function getOGLocale(locale) {
  const localeMap = {
    en: "en_MY",
    zh: "zh_Hans_MY",
    ms: "ms_MY"
  };
  return localeMap[locale];
}
function generateHreflangLinks(slug, locales = ["en", "zh", "ms"]) {
  const siteUrl = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__$1, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.PUBLIC_SITE_URL || typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__$1, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.SITE_URL || "https://www.inghengcredit.com";
  return locales.map((locale) => ({
    rel: "alternate",
    hreflang: getHreflangCode(locale),
    href: `${siteUrl}/${locale}/${slug}`
  }));
}
function getHreflangCode(locale) {
  const hreflangMap = {
    en: "en-MY",
    zh: "zh-Hans-MY",
    ms: "ms-MY"
  };
  return hreflangMap[locale];
}
function generateBreadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

const $$Astro$2 = createAstro("https://ingheng-credit.vercel.app");
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    locale,
    canonical,
    ogImage,
    ogType,
    publishedTime,
    modifiedTime,
    keywords = [],
    author,
    noIndex = false
  } = Astro2.props;
  const seoTags = generateSEOTags({
    title,
    description,
    locale,
    canonical,
    ogImage,
    ogType,
    publishedTime,
    modifiedTime,
    author,
    keywords
  });
  const slug = Astro2.url.pathname.replace(`/${locale}/`, "").replace(/^\/|\/$/g, "");
  const hreflangLinks = generateHreflangLinks(slug);
  return renderTemplate`<!-- Primary Meta Tags --><title>${seoTags.title}</title><meta name="title"${addAttribute(seoTags.title, "content")}><meta name="description"${addAttribute(seoTags.description, "content")}>${keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(seoTags.keywords, "content")}>`}${author && renderTemplate`<meta name="author"${addAttribute(seoTags.author, "content")}>`}${noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- Canonical URL --><link rel="canonical"${addAttribute(seoTags.canonical, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(seoTags.ogType, "content")}><meta property="og:url"${addAttribute(seoTags.canonical, "content")}><meta property="og:title"${addAttribute(seoTags.ogTitle, "content")}><meta property="og:description"${addAttribute(seoTags.ogDescription, "content")}><meta property="og:image"${addAttribute(seoTags.ogImage, "content")}><meta property="og:locale"${addAttribute(seoTags.ogLocale, "content")}><meta property="og:site_name"${addAttribute(SITE_CONFIG.title, "content")}>${publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`}${modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`}<!-- Twitter --><meta name="twitter:card"${addAttribute(seoTags.twitterCard, "content")}><meta name="twitter:url"${addAttribute(seoTags.canonical, "content")}><meta name="twitter:title"${addAttribute(seoTags.twitterTitle, "content")}><meta name="twitter:description"${addAttribute(seoTags.twitterDescription, "content")}><meta name="twitter:image"${addAttribute(seoTags.twitterImage, "content")}><!-- Hreflang Links -->${hreflangLinks.map((link) => renderTemplate`<link${addAttribute(link.rel, "rel")}${addAttribute(link.hreflang, "hreflang")}${addAttribute(link.href, "href")}>`)}<link rel="alternate" hreflang="x-default"${addAttribute(`${SITE_CONFIG.url}/en/${slug}`, "href")}><!-- Additional Meta --><meta name="language"${addAttribute(locale, "content")}><meta name="revisit-after" content="7 days"><meta name="rating" content="general"><!-- Mobile Web App --><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="theme-color" content="#1e3a8a">`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/SEOHead.astro", void 0);

const $$Astro$1 = createAstro("https://ingheng-credit.vercel.app");
const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhatsAppButton;
  const { lang } = Astro2.props;
  const whatsappUrl = `${COMPANY_INFO.whatsapp.link}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="whatsapp-cta group"${addAttribute(t("cta.whatsapp", lang), "aria-label")} data-whatsapp-button data-astro-cid-iehx2mtc> <!-- Pulse Animation Ring --> <span class="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" data-astro-cid-iehx2mtc></span> <!-- WhatsApp Icon --> <svg class="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-iehx2mtc> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-iehx2mtc></path> </svg> <!-- Tooltip on hover with brand styling --> <span class="whatsapp-tooltip" data-astro-cid-iehx2mtc> ${t("cta.whatsapp", lang)} </span> </a>  ${renderScript($$result, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/WhatsAppButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/WhatsAppButton.astro", void 0);

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://ingheng-credit.vercel.app", "SSR": true};
function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "LocalBusiness"],
    name: "Ing Heng Credit & Leasing Sdn Bhd",
    alternateName: "Ing Heng Credit",
    url: "https://www.inghengcredit.com",
    logo: "https://www.inghengcredit.com/images/logo.png",
    image: "https://www.inghengcredit.com/images/og-default.jpg",
    description: "Premier equipment financing and leasing solutions in Malaysia for construction equipment, logistics vehicles, and industrial machinery.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16, Lintang Menalu, Taman Chi Liung",
      addressLocality: "Klang",
      addressRegion: "Selangor",
      postalCode: "41200",
      addressCountry: "MY"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.0229422",
      longitude: "101.4332306"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+60-17-570-0889",
        contactType: "Customer Service",
        areaServed: "MY",
        availableLanguage: ["English", "Mandarin", "Malay"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+60-3-3324-8899",
        contactType: "Sales",
        areaServed: "MY",
        availableLanguage: ["English", "Mandarin", "Malay"]
      }
    ],
    sameAs: [
      "https://www.facebook.com/Inghengcredit"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00"
      }
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    foundingDate: "1985",
    slogan: "Your Trusted Equipment Financing Partner"
  };
}
function generateArticleSchema(props) {
  const {
    title,
    description,
    author,
    publishedDate,
    modifiedDate,
    imageUrl,
    url,
    locale
  } = props;
  const siteUrl = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.PUBLIC_SITE_URL || typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.SITE_URL || "https://www.inghengcredit.com";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: author || "Ing Heng Credit & Leasing",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "Ing Heng Credit & Leasing",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`
      }
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    inLanguage: getLanguageCode(locale)
  };
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function generateProductSchema(props) {
  const { name, description, imageUrl, brand, category, offers } = props;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: imageUrl,
    brand: brand ? {
      "@type": "Brand",
      name: brand
    } : void 0,
    category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "83",
      bestRating: "5"
    },
    offers: offers ? {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.currency,
      availability: offers.availability,
      seller: {
        "@type": "Organization",
        name: "Ing Heng Credit & Leasing"
      }
    } : void 0
  };
}
function generateServicePageSchema(props) {
  const { serviceName, description, serviceType, minRate, maxRate, locale } = props;
  const siteUrl = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.PUBLIC_SITE_URL || typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { PUBLIC: process.env.PUBLIC, _: process.env._ })?.SITE_URL || "https://www.inghengcredit.com";
  const getLanguageCode2 = (lang) => {
    const codes = { en: "en-MY", zh: "zh-Hans-MY", ms: "ms-MY" };
    return codes[lang];
  };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType,
    inLanguage: getLanguageCode2(locale),
    provider: {
      "@type": "FinancialService",
      name: "Ing Heng Credit & Leasing",
      url: siteUrl
    },
    areaServed: {
      "@type": "Country",
      name: "Malaysia"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} Options`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "MYR",
            minPrice: minRate,
            maxPrice: maxRate,
            unitText: "% per annum"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5"
    }
  };
}
function getLanguageCode(locale) {
  const localeMap = {
    en: "en-MY",
    zh: "zh-Hans-MY",
    ms: "ms-MY"
  };
  return localeMap[locale];
}
function encodeJSONLD(data) {
  return JSON.stringify(data, null, 2);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    lang,
    canonicalURL,
    image,
    ogType = "website",
    publishedTime,
    modifiedTime,
    keywords = [],
    noIndex = false
  } = Astro2.props;
  const currentUrl = canonicalURL || Astro2.url.toString();
  const organizationSchema = generateOrganizationSchema();
  return renderTemplate(_a || (_a = __template(["<html", ' class="smooth-scroll"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO Meta Tags -->", '<!-- Favicons - Optimized for Google Search Console --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png"><link rel="manifest" href="/manifest.json"><!-- Organization Schema --><script type="application/ld+json">', '<\/script><!-- Preload Critical Assets --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Google Fonts (Optional - Add if needed) --><!-- <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> -->', '</head> <body class="antialiased"> <!-- Skip to main content for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-primary-500 focus:text-white focus:border-3 focus:border-accent focus:shadow-brutal-sm font-bold uppercase">\nSkip to main content\n</a> <!-- Header --> ', ' <!-- Main Content --> <main id="main-content"> ', " </main> <!-- Footer --> ", " <!-- WhatsApp Floating Button --> ", " <!-- Scripts --> <script>\n      // Sticky header on scroll with bronze theme\n      (function() {\n        function initStickyHeader() {\n          const header = document.querySelector('header');\n          if (header) {\n            window.addEventListener('scroll', function() {\n              if (window.scrollY > 100) {\n                header.classList.add('shadow-brutal');\n              } else {\n                header.classList.remove('shadow-brutal');\n              }\n            });\n          }\n        }\n\n        // Run when DOM is ready\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', initStickyHeader);\n        } else {\n          initStickyHeader();\n        }\n      })();\n    <\/script> </body> </html>"])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "locale": lang, "canonical": currentUrl, "ogImage": image, "ogType": ogType, "publishedTime": publishedTime, "modifiedTime": modifiedTime, "keywords": keywords, "noIndex": noIndex }), unescapeHTML(encodeJSONLD(organizationSchema)), renderHead(), renderComponent($$result, "Header", $$Header, { "lang": lang, "currentPath": Astro2.url.pathname }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lang": lang }), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "lang": lang }));
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, generateFAQSchema as a, generateOrganizationSchema as b, generateProductSchema as c, generateBreadcrumbs as d, encodeJSONLD as e, generateServicePageSchema as f, generateArticleSchema as g };
