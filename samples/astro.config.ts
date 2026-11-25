import { defineConfig } from "astro/config";

// Separate Astro project. No public site URL and no sitemap.
export default defineConfig({
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
