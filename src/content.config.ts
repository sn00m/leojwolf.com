import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const releases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/releases' }),
  schema: z.object({
    artist: z.string(),
    albumTitle: z.string(),
    pageHeading: z.string(),
    releaseDate: z.date(),
    format: z.string(),
    label: z.string(),
    coverImage: z.string(),
    bandcampAlbumId: z.string(),
    bandcampUrl: z.string(),
    bandcampLinkText: z.string(),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/art' }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    type: z.string(),
    material: z.string(),
    size: z.string(),
    gallery: z.string(),
    order: z.number(),
  }),
});

const galleries = defineCollection({
  loader: file('./src/content/galleries.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

const moonsDsp = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/moons-dsp' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['instrument', 'effect']),
    summary: z.string(),
    coverImage: z.string().optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number(),
  }),
});

export const collections = { releases, art, galleries, moonsDsp };
