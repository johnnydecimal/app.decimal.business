// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001,
  },

  site: "https://example.com",
  integrations: [clerk(), mdx(), sitemap()],
  output: "server",
  adapter: vercel(),
});
