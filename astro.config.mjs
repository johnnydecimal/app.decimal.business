import { defineConfig } from "astro/config";

import clerk from "@clerk/astro";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";

export default defineConfig({
  adapter: netlify(),
  integrations: [clerk(), mdx()],
  output: "server",
  server: {
    port: 3011,
  },
  site: "https://app.johnnydecimal.com",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/common.scss" as *;`,
          api: "modern-compiler",
          importers: [],
        },
      },
    },
  },
});
