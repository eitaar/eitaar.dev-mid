import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import expressiveCode from 'astro-expressive-code'
//import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

export default defineConfig({
  // ...
  integrations: [icon(), expressiveCode({
    themes: ["tokyo-night"]
  }), mdx(), react()],
  //output:'server',
  //adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "tokyo-night"
    },
  },
});