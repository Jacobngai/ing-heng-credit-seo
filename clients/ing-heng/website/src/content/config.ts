/**
 * Content Collections Configuration for Ing Heng Credit
 * Defines schemas for blog posts and equipment listings
 */

import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection Schema
 */
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic Info
    title: z.string(),
    description: z.string(),
    author: z.string().default('Ing Heng Credit & Leasing'),

    // Dates
    publishDate: z.string().or(z.date()),
    updatedDate: z.string().or(z.date()).optional(),

    // SEO & Social
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    ogImage: z.string().optional(),

    // Organization
    category: z.enum([
      'Equipment Financing',
      'Construction Equipment',
      'Logistics Equipment',
      'Specialized Vehicle Financing',
      'Business Tips',
      'Industry News',
      'Case Studies',
      'Financing Guides',
      'Personal Financing',
      'Emergency Financing',
      'Business Financing',
      'Pembiayaan Peralatan',
      'Panduan Pembiayaan',
      'Tip Perniagaan',
      '设备融资',
      '融资指南'
    ]),
    tags: z.array(z.string()).default([]),

    // Persona Targeting
    persona: z.enum([
      'Contractor Ahmad',
      'Logistics Lee',
      'Warehouse William',
      'General'
    ]).optional(),

    // Content Features
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Language
    locale: z.enum(['en', 'zh', 'ms']),

    // Reading Info
    readingTime: z.number().optional(),

    // Schema.org
    faqSchema: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
  }),
});

/**
 * Equipment Collection Schema
 */
const equipmentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic Info
    name: z.string(),
    description: z.string(),
    category: z.enum([
      'Excavator',
      'Lorry',
      'Forklift',
      'Crane',
      'Bulldozer',
      'Road Roller',
      'Dump Truck',
      'Concrete Mixer',
      'Other Construction',
      'Other Logistics'
    ]),

    // Technical Details
    brand: z.string().optional(),
    model: z.string().optional(),
    specifications: z.object({
      capacity: z.string().optional(),
      weight: z.string().optional(),
      power: z.string().optional(),
      dimensions: z.string().optional(),
    }).optional(),

    // Financing Details
    priceRange: z.object({
      min: z.number(),
      max: z.number(),
      currency: z.string().default('MYR')
    }).optional(),

    financingOptions: z.object({
      leasingAvailable: z.boolean().default(true),
      hirePurchaseAvailable: z.boolean().default(true),
      minDownPayment: z.string().optional(),
      maxTenure: z.string().optional(),
      interestRateFrom: z.string().optional(),
    }).optional(),

    // Media
    images: z.array(z.string()).default([]),
    featuredImage: z.string(),
    video: z.string().optional(),

    // SEO
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).default([]),

    // Organization
    featured: z.boolean().default(false),
    popular: z.boolean().default(false),

    // Language
    locale: z.enum(['en', 'zh', 'ms']),

    // Status
    available: z.boolean().default(true),

    // Schema.org
    productSchema: z.boolean().default(true),
  }),
});

/**
 * Landing Pages Collection Schema
 */
const landingPageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic Info
    title: z.string(),
    description: z.string(),

    // Hero Section
    hero: z.object({
      headline: z.string(),
      subheadline: z.string(),
      ctaPrimary: z.string(),
      ctaSecondary: z.string().optional(),
      backgroundImage: z.string().optional(),
    }),

    // Benefits Section
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),

    // Features Section
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    })).optional(),

    // Testimonials
    testimonials: z.array(z.object({
      quote: z.string(),
      author: z.string(),
      company: z.string().optional(),
      rating: z.number().optional(),
    })).optional(),

    // FAQ
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),

    // SEO
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    ogImage: z.string().optional(),

    // Language
    locale: z.enum(['en', 'zh', 'ms']),

    // Targeting
    equipmentType: z.string().optional(),
    persona: z.enum([
      'Contractor Ahmad',
      'Logistics Lee',
      'Warehouse William',
      'General'
    ]).optional(),

    // Schema
    schemaType: z.enum(['Product', 'Service', 'WebPage']).default('WebPage'),
  }),
});

/**
 * Export Collections
 */
export const collections = {
  'blogs': blogCollection,
  'equipment': equipmentCollection,
  'landing-pages': landingPageCollection,
};
