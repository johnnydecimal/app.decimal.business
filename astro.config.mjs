// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3011,
  },

  site: "https://app.johnnydecimal.com",
  integrations: [mdx(), sitemap(), clerk()],
  output: "server",
  adapter: netlify(),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          importers: [],
        },
      },
    },
  },
});
