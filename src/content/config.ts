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
      title: z.string(),
      date: z.string(),
      liveURL: z.string().url(),
      challengeURL: z.string().url().optional(),
      abstract: z.string(),
      builtWith: z.string(),
      featured: z.boolean(),
      image: imageSchema({ image }),
    }),
});

export const collections = {
  work: workCollection,
};
