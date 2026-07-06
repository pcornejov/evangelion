import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const characters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/characters' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
  }),
});

export const collections = { characters };
