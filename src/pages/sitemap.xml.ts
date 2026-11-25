import type { APIRoute } from "astro";
import { nav, services, site } from "../config/site";

/**
 * A plain sitemap built from the navigation and the service list, so there is
 * nothing extra to install. While the site is a draft it is left empty.
 */
export const GET: APIRoute = () => {
  const paths = [
    ...nav.map((item) => item.href),
    ...services.map((service) => `/services/${service.slug}`),
  ];
  const urls = site.draft
    ? []
    : [...new Set(paths)].map((path) => `  <url><loc>${new URL(path, site.siteUrl).href}</loc></url>`);

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
