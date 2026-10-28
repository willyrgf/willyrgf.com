import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { siteConfig } from './src/site.config.ts';

export default defineConfig({
  site: siteConfig.url,
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'gruvbox-dark-medium' },
  },
  integrations: [mdx()],
});
