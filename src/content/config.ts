import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string(),
    }).optional(),
  }),
});

export const collections = { articles };
