import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    webmanifest({
      name: 'Sarah Wilkes Dev',
      description: 'Frontend web developer portfolio',
      icon: 'src/images/favicon.svg',
      background_color: '#0a0a0a',
      theme_color: 'rgb(82, 99, 159)',
      start_url: '/',
      display: 'standalone',
    }),
  ],
  markdown: {
    syntaxHighlight: 'prism',
  }
});