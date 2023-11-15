import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://uncasual-astro.netlify.app/',
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://uncasual-astro.netlify.app/'
    })
  ],
});
