/**
 * Content Collections Configuration for Result Marketing
 * SEO agency blog content
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
    author: z.string().default('Result Marketing'),

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
      'SEO',
      'Facebook Ads',
      'Content Marketing',
      'Lead Generation',
      'Case Studies',
      'Industry Insights',
      'How-To Guides'
    ]),
    tags: z.array(z.string()).default([]),

    // Target Industry
    industry: z.enum([
      'Construction',
      'Real Estate',
      'Finance',
      'E-commerce',
      'Services',
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
 * Services Collection Schema
 */
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    features: z.array(z.string()).default([]),
    pricing: z.string().optional(),
    cta: z.string().optional(),
    locale: z.enum(['en', 'zh', 'ms']),
    order: z.number().default(0),
  }),
});

/**
 * Export Collections
 */
export const collections = {
  'blogs': blogCollection,
  'services': servicesCollection,
};
