import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pcornejov.github.io',
  base: '/evangelion',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
