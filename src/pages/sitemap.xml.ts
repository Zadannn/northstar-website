import type { APIRoute } from "astro";
import { absoluteUrl, legalNav, nav, publishesAbsoluteUrls, serviceHref, services } from "../config/site";

/**
 * Built from the navigation, service list, and legal links. While the site is a
 * draft, or the public address is still the example.com placeholder, the
 * sitemap is left empty so that address is not advertised.
 */
export const GET: APIRoute = () => {
  const paths = [
    ...nav.map((item) => item.href),
    ...services.map((service) => serviceHref(service.slug)),
    ...legalNav.map((item) => item.href),
  ];
  const urls = publishesAbsoluteUrls()
    ? [...new Set(paths)].map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
    : [];

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
