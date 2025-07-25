import type { SchemaContext } from "astro:content";
import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const workCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      pageTitle: z.string(),
      date: z.string(),
      liveURL: z.string().url(),
      challengeURL: z.string().url().optional(),
      abstract: z.string(),
      builtWith: z.string(),
      featured: z.boolean(),
      image: imageSchema({ image }),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    pageTitle: z.string(),
    date: z.string(),
    abstract: z.string().optional(),
    tags: z.array((z.string())),
  })
})

export const collections = {
  work: workCollection,
  blog: blogCollection,
};
