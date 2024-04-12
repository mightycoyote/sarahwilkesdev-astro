import type { SchemaContext } from "astro:content";
import { z, defineCollection } from "astro:content";

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const workCollection = defineCollection({
  type: "content",
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
  type: "content",
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
