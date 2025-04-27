import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vue from '@astrojs/vue';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ...
  integrations: [vue(),icon()],
  output:'server',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});