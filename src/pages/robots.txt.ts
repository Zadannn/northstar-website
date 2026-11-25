import type { APIRoute } from "astro";
import { site } from "../config/site";

export const GET: APIRoute = () => {
  const body = site.draft
    ? ["User-agent: *", "Disallow: /", ""].join("\n")
    : [
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${new URL("/sitemap.xml", site.siteUrl).href}`,
        "",
      ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
