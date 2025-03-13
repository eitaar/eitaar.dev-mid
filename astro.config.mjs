import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vue from '@astrojs/vue';
//import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ...
  integrations: [vue()],
  //output:'server',
  //adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});