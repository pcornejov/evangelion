import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sourceSchema = z.object({
  title: z.string(),
  type: z.enum(['wiki', 'artbook', 'entrevista', 'guia-episodios', 'oficial']),
  note: z.string().optional(),
});

const characters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/characters' }),
  schema: z.object({
    name: z.string(),
    nameJapanese: z.string().optional(),
    role: z.enum(['Piloto', 'Personal NERV', 'SEELE', 'Antagonista', 'Civil', 'Otro']),
    affiliation: z.array(z.string()).default([]),
    evaUnit: z.string().optional(),
    age: z.number().optional(),
    voiceActorJP: z.string(),
    voiceActorEN: z.string().optional(),
    firstAppearance: z.string().optional(),
    status: z.enum(['Vivo', 'Muerto', 'Desconocido', 'Instrumentalidad']),
    image: z.string().default('/images/characters/placeholder.svg'),
    summary: z.string(),
    relations: z
      .array(
        z.object({
          character: z.string(),
          relationType: z.string(),
          description: z.string(),
        }),
      )
      .default([]),
    tags: z.array(z.string()).default([]),
    sources: z.array(sourceSchema).default([]),
  }),
});

export const collections = { characters };
