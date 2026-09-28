import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        category: z.enum(["life", "work"]),
    }),
});

export const collections = { blog };
