// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001,
  },

  site: "https://app.decimal.business",
  integrations: [clerk(), mdx(), sitemap()],
  output: "server",
  adapter: netlify(),
});
