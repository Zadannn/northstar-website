# Cafe Alfredo's concept

A noindex pitch sample for Northstar. It is not the restaurant's website, it does not take orders, and nothing in this folder deploys it.

The private Wonder Kitchen repository could not be read from this environment, so this is a separate Next.js static export with the same kind of pieces: a shared layout and nav, typed menu categories, food cards, responsive CSS, and a small scroll reveal that respects reduced motion. It does not include Wonder Kitchen branding, a cart, checkout, an admin panel, or a WhatsApp number.

Build with Node.js 20:

```bash
npm ci
npm run build
```

The static files are written to `out/`. Search engines are asked not to index the site (`noindex, nofollow`, and `robots.txt` disallows `/`). There is no sitemap. The catering form validates in the browser and does not submit anywhere.
