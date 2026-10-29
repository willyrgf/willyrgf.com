import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { siteConfig } from './src/site.config.ts';
import { defaultLocale, locales } from './src/i18n.ts';

export default defineConfig({
  site: siteConfig.url,
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { theme: 'gruvbox-dark-medium' },
  },
  integrations: [mdx()],
});
