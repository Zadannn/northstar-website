# Northstar website

This is the draft website for a digital solutions practice. The public name is a placeholder (`Northstar` today) and lives in one config file, so it can be replaced without editing the pages.

The practice serves small businesses and growing companies. It is not limited to one region or one industry. The work has three equal parts:

- **Website development.** Business websites, landing pages, redesigns, responsive pages, contact forms, maintenance when it is agreed, and basic technical SEO and performance.
- **CRM solutions.** Setup and configuration of a CRM the client chooses and owns: lead management, customer records, a sales pipeline, and practical integrations named in the scope.
- **Business automation.** Clearly scoped workflows: lead capture, notifications, follow-up, form-to-CRM, and practical integrations.

The site does not offer a CRM or automation platform of its own, an enterprise rollout, an advanced AI product, or unlimited custom integrations. It does not promise rankings, revenue, or a launch date. Service pages say what is included and what is not. There are no invented customers, testimonials, case studies, or statistics.

The site is a **draft**. A banner at the top of every page says Draft. Search engines are asked not to list the pages. Nothing in this repository publishes the site.

The site is built with [Astro](https://astro.build) 5.18.2, TypeScript, and plain CSS. Astro turns the page files into a static website. 5.18.2 is the newest Astro release that still runs on Node.js 20. Astro 6 and later need Node.js 22, so they are not used here. Fonts are self-hosted cuts of Inter and Manrope. There is no UI framework and no animation library.

## Folder structure

```text
src/pages/            Routes: home, services, three service pages, how it works, about, contact, privacy, terms, and the 404 page, plus robots.txt and sitemap.xml
src/layouts/          Shared frame: draft banner, metadata, header, and footer
src/components/       Header, footer, wordmark, hero visual, page hero, service cards, CTA, FAQ, and the contact details
src/styles/           fonts.css and global.css. Colours, type, and spacing are CSS variables.
src/config/site.ts    Name, logo, phone, email, draft switches, services, process, FAQ, and the form address
public/               Favicon. public/images holds unused stand-in pictures.
dist/                 The built site. Not saved in git.
.github/workflows/    A check that the site builds on Node.js 20. It does not publish the site.
```

## How to run it locally

1. Install [Node.js](https://nodejs.org) **20** (20.3 or newer). This folder contains `.nvmrc` and `.node-version`, and both say `20`. If you use nvm, `nvm use` in this folder will pick that up. Node.js 22 also satisfies the engines field, but the project is kept on the Node 20 line.
2. Open a terminal in this folder.
3. Install the project's files:

   ```bash
   npm install
   ```

4. Start the local site:

   ```bash
   npm run dev
   ```

   Open the address it prints. That is usually http://localhost:4321

5. Build the finished site:

   ```bash
   npm run build
   ```

   The finished files are written to the `dist` folder.

   The first build may print a note that Astro collects anonymous usage data. That note is not an error. To turn it off, run `npx astro telemetry disable`.

To stop the local site, go back to the terminal and press Ctrl+C.

When code is pushed to GitHub, a check runs `npm ci` and `npm run build` with Node.js 20. That check only confirms the site builds. It does not put the site online.

## Where to edit placeholders

Open `src/config/site.ts`. This is the one file for:

- Business name (`name`). It is `Northstar` until you replace it. Public pages read this value.
- Short description and footer line (`description`, `tagline`)
- Public website address (`siteUrl`). It is `https://example.com` until a real domain exists.
- Phone (`phoneDisplay` and `phoneHref`) and email (`email`)
- Logo (`logo.src`, `logo.width`, `logo.height`). Leave `src` empty to keep the text wordmark. When you add an image, set `width` and `height` to that file's pixel size.
- Calls to action (`cta`, `secondaryCta`)
- `draft` (keep `true` until launch)
- `showPricing` (keep `false` until prices are agreed; the site does not render `prices` while this is false)
- `placeholders.contact` (keep `true` until the phone and email are real; the Placeholder labels follow this switch)
- `placeholders.photos` (while `true`, stand-in photos are not shown)
- Services, FAQ answers, process steps, problems, principles, and the example homepage visual

Colours and the type stack live in `src/styles/global.css` as custom properties (`--color-*`, `--font-body`, `--font-display`). The font files are declared in `src/styles/fonts.css`. Change those two places to rebrand the look. Components do not hard-code a logo symbol or a colour.

### The contact form

The form on the Contact page is **turned off** until `formEndpoint` in `src/config/site.ts` has an address. While it is empty the fields are disabled, the button cannot be used, and the page says the form does not send. It does not show a success message.

To turn it on, create a form with a form service (for example [Formspree](https://formspree.io)), paste the form's address into `formEndpoint`, and rebuild. The form then posts to that address, and includes a hidden spam-trap field named `_gotcha`. Test it by sending yourself a message before launch. Other form services may use a different spam-trap field name.

### Draft safeguards

While `draft` is `true`:

- Every page shows the Draft banner.
- Pages send `noindex, nofollow`.
- `robots.txt` disallows the whole site.
- `sitemap.xml` is empty.
- Canonical and `og:url` tags are omitted, so `https://example.com` is not advertised as the real domain.
- No structured business data is added. The site does not invent an address, a review, or a service area.

`showPricing` stays `false`, so the internal draft figures in `prices` are not shown. Those figures belong to an older offer and are not approved prices for the current services. `formEndpoint` stays empty until a real form exists. Do not put passwords, API keys, or secret tokens in this project.

### Before launch

Do these only when you mean to publish. This repository does not do them for you.

1. Replace the name, phone, and email, and set `placeholders.contact` to `false`.
2. Set `siteUrl` to the real domain. Until you do, absolute canonical URLs stay off even if `draft` is later set to `false`.
3. Decide whether to add a logo image. Until then the text wordmark remains.
4. Agree real prices before setting `showPricing` to `true`. Do not publish the internal draft figures as if they were final.
5. Set `formEndpoint` and test the form.
6. Replace the favicon in `public/favicon.svg` if the mark should change.
7. Have a qualified person review the privacy and terms pages. They are readable placeholders. They are not legal advice and they do not claim compliance.
8. Set `draft` to `false` only after the items above are done. That removes the Draft banner, the “do not index” tag, and the robots disallow rule, and it allows the sitemap and structured data.

## Deploying later (not set up)

This project is not deployed. Nothing in this repository publishes the site, changes DNS, or changes hosting settings.

A later host can build with `npm run build` and serve the `dist` folder. Leave `draft` set to `true` until the checklist above is done.
