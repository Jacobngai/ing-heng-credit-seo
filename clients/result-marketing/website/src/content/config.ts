import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.enum(['walter', 'sarah']),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'ms', 'zh']),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    readingTime: z.number().optional()
  })
});

export const collections = {
  blog: blogCollection
};
