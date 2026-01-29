import { b as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, e as renderScript } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$StructuredData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StructuredData;
  const { schema } = Astro2.props;
  function encodeJSONLD(data) {
    try {
      const jsonString = JSON.stringify(data, null, 2);
      return jsonString.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/'/g, "\\u0027");
    } catch (error) {
      console.error("Error encoding JSON-LD:", error);
      return "{}";
    }
  }
  function validateSchema(data) {
    if (!data || typeof data !== "object") {
      console.error("Schema must be a valid object");
      return false;
    }
    if (!data["@context"]) {
      console.error("Schema missing required @context field");
      return false;
    }
    if (!data["@type"]) {
      console.error("Schema missing required @type field");
      return false;
    }
    return true;
  }
  const isValid = validateSchema(schema);
  const encodedSchema = isValid ? encodeJSONLD(schema) : "{}";
  return renderTemplate`${isValid ? renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(encodedSchema)) : renderTemplate`${renderScript($$result, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/StructuredData.astro?astro&type=script&index=0&lang.ts")}`}<!--
  Schema Type Examples:

  1. ORGANIZATION SCHEMA
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ing Heng Credit & Leasing",
    "alternateName": "IHC",
    "url": "https://www.inghengcredit.com",
    "logo": "https://www.inghengcredit.com/images/logo.png",
    "description": "Equipment financing solutions in Malaysia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "306-1, Persiaran Pegaga, Taman Bayu Perdana",
      "addressLocality": "Klang",
      "addressRegion": "Selangor",
      "postalCode": "41200",
      "addressCountry": "MY"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+60-17-570-0889",
      "contactType": "Customer Service",
      "areaServed": "MY",
      "availableLanguage": ["English", "Mandarin", "Malay"]
    },
    "sameAs": [
      "https://www.facebook.com/Inghengcredit"
    ]
  }

  2. ARTICLE SCHEMA (for blog posts)
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Excavator Financing in Malaysia",
    "image": "https://www.inghengcredit.com/images/blog/excavator.jpg",
    "author": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inghengcredit.com/images/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-20",
    "description": "Learn everything about excavator financing..."
  }

  3. FAQ SCHEMA
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does approval take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Approval typically takes 24-48 hours..."
        }
      },
      {
        "@type": "Question",
        "name": "What equipment can be financed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We finance excavators, lorries, forklifts..."
        }
      }
    ]
  }

  4. PRODUCT SCHEMA (for equipment pages)
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Excavator Financing",
    "description": "Professional financing solutions for excavators",
    "brand": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.inghengcredit.com/en/equipment/excavator",
      "priceCurrency": "MYR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Ing Heng Credit & Leasing"
      }
    }
  }

  5. SERVICE SCHEMA
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Equipment Financing",
    "provider": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Malaysia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Equipment Financing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Excavator Financing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lorry Financing"
          }
        }
      ]
    }
  }

  6. BREADCRUMB SCHEMA
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.inghengcredit.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Equipment",
        "item": "https://www.inghengcredit.com/en/equipment"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Excavator",
        "item": "https://www.inghengcredit.com/en/equipment/excavator"
      }
    ]
  }

  7. LOCAL BUSINESS SCHEMA
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ing Heng Credit & Leasing",
    "image": "https://www.inghengcredit.com/images/office.jpg",
    "telephone": "+60-17-570-0889",
    "email": "enquiry@inghengcredit.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "306-1, Persiaran Pegaga, Taman Bayu Perdana",
      "addressLocality": "Klang",
      "addressRegion": "Selangor",
      "postalCode": "41200",
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "3.0414",
      "longitude": "101.4466"
    },
    "url": "https://www.inghengcredit.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ]
  }

  8. REVIEW SCHEMA (for testimonials)
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Ahmad bin Hassan"
    },
    "reviewBody": "Excellent service and fast approval..."
  }

  MULTIPLE SCHEMAS:
  You can include multiple schemas on one page by using an array:

  <StructuredData schema={{
    "@context": "https://schema.org",
    "@graph": [
      { Organization schema },
      { Article schema },
      { FAQPage schema }
    ]
  }} />
-->`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/StructuredData.astro", void 0);

export { $$StructuredData as $ };
