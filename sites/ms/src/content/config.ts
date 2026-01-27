/**
 * Content Collections Configuration for Ing Heng Credit (Malay)
 * Defines schemas for blog posts
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
      'Business Financing'
    ]),
    tags: z.array(z.string()).default([]),

    // Content Features
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Language - Malay (Bahasa Melayu)
    locale: z.literal('ms'),

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
 * Export Collections
 */
export const collections = {
  'blogs': blogCollection,
};
