import { defineConfig } from "astro/config";
import { site } from "./src/config/site";

// https://astro.build/config
export default defineConfig({
  site: site.siteUrl,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
