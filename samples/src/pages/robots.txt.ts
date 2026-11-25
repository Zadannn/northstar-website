import type { APIRoute } from "astro";

/** Samples stay out of search. There is no sitemap. */
export const GET: APIRoute = () => {
  return new Response(["User-agent: *", "Disallow: /", ""].join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
