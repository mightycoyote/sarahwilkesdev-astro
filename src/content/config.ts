import { z, defineCollection } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      liveURL: z.string().url(),
      challengeURL: z.string().url().optional(),
      abstract: z.string(),
      builtWith: z.string(),
      featured: z.boolean(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
});

export const collections = {
    'work': workCollection,
};