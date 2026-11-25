import type { APIRoute } from "astro";
import { publicPaths, site } from "../config/site";

/**
 * Built from the public page list. While the site is a draft the sitemap is empty.
 */
export const GET: APIRoute = () => {
  const urls = site.draft
    ? []
    : publicPaths.map((path) => `  <url><loc>${new URL(path, site.siteUrl).href}</loc></url>`);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
