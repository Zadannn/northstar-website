import { defineConfig } from "astro/config";
import { site } from "./src/config/site";

// https://astro.build/config
// Retired addresses are 301s in public/_redirects. They are not Astro redirect
// pages, because those pages would publish a canonical URL for example.com
// while the site is still a draft.
export default defineConfig({
  site: site.siteUrl,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
