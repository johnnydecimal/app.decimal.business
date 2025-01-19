// @ts-check
import { defineConfig } from "astro/config";

import clerk from "@clerk/astro";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  build: {
    format: "file",
  },
  integrations: [clerk(), mdx(), pagefind()],
  output: "server",
  server: {
    port: 3011,
  },
  site: "https://app.johnnydecimal.com",
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
