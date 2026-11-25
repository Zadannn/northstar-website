# Northstar website

This is the starter website for Northstar, a small US–India team that serves New Jersey home-service businesses. It starts with four trades: cleaning companies, landscapers, plumbers, and HVAC contractors. Northstar offers three things:

- Website launch (up to five pages, two rounds of changes)
- Website care (a monthly plan with written limits)
- Lead follow-up setup (missed-call texts, a simple lead list, quote reminders, and review requests, built on a low-cost tool the client owns)

The site does not offer a custom-built CRM, AI chatbots, or online stores. Those are left out on purpose until the basics are proven. Each service page lists what is included and what is not.

The site is a **draft**. A banner at the top of every page says Draft. Search engines are asked not to list the pages yet. Nothing here is published to the internet by this project.

The site is built with [Astro](https://astro.build) 5.18.2, which turns the page files into a plain website you can open in a browser. That is the newest Astro release that still runs on Node.js 20. Astro 6 and later need Node.js 22, so they are not used here.

## Folder structure

```text
src/pages/            The pages people visit (home, services, how it works, about, contact, and the 404 page), plus robots.txt and sitemap.xml
src/layouts/          The shared frame: Draft banner, header, navigation, and footer
src/components/       Smaller pieces used on those pages (including the FAQ list)
src/styles/           The look of the site (plain CSS, no paid fonts or photos)
src/config/site.ts    Business name, phone, email, photos, prices, services, FAQ answers, the contact form address, and the website address
public/               The icon and the placeholder photos
public/images/        Stand-in pictures until real photos exist
dist/                 The finished site, created when you build. Not saved in git.
.github/workflows/    A check that the site builds when code is pushed. It does not publish the site.
```

## How to run it locally

1. Install [Node.js](https://nodejs.org) **20** (20.3 or newer). This folder contains `.nvmrc` and `.node-version`, and both say `20`. If you use nvm, `nvm use` in this folder will pick that up.
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

   The finished files are written to the `dist` folder. You can look at that folder, but you do not upload it by hand for the steps below — Cloudflare would build it for you later.

   The first build may print a note that Astro collects anonymous usage data. That note is not an error. To turn it off, run `npx astro telemetry disable`.

To stop the local site, go back to the terminal and press Ctrl+C.

When code is pushed to GitHub, a check runs `npm ci` and `npm run build` with Node.js 20. That check only confirms the site builds. It does not put the site online.

## Where to edit placeholders

Open `src/config/site.ts`. This is the one file for:

- Business name (`name`) — currently `Northstar`
- Public website address (`siteUrl`) — currently `https://example.com`
- Phone (`phoneDisplay` and `phoneHref`)
- Email (`email`)
- Photos (`photos`) — the picture files are in `public/images/`
- Prices (`prices`) — the starting prices come from the planning documents ($999–$1,499 for a website, $79–$129 a month for care, setup from $700 for lead follow-up). They need both founders' agreement before launch.
- Services, FAQ answers, and the four-step process (`services`, `faqs`, `steps`) and the trades list (`trades`)
- `placeholders` — three switches (`contact`, `prices`, `photos`). While one is `true`, the matching “Placeholder” tags show on the pages. Set each to `false` once the real phone and email, final prices, or real photos are in place.

Those values show up across the site. Change them there rather than hunting through the pages.

### The contact form

The form on the Contact page is **turned off** until `formEndpoint` in `src/config/site.ts` has an address. While it is empty the form is greyed out and people are asked to call or email.

To turn it on, create a form with a form service (for example [Formspree](https://formspree.io)), paste the form's address into `formEndpoint`, and rebuild. The form then posts to that address, and includes a hidden spam-trap field named `_gotcha`. Test it by sending yourself a message before launch. Other form services may use a different spam-trap field name.

### Before launch

1. Replace the name, phone, email, photos, and prices, and set the three `placeholders` switches to `false`.
2. Set `siteUrl` to the real domain.
3. Set `formEndpoint` and test the form.
4. Add a privacy page that matches how you handle form messages, and check the text with a qualified adviser.
5. Set `draft` to `false`. That removes the Draft banner, the “do not index” tag, and the rule that asks robots to skip the site. It also turns on the sitemap and the structured business data.

Do not put passwords, API keys, or secret tokens in this project. None are needed to run or build the site.

## Deploying later (not set up yet)

This project is not deployed. Nothing in this repository publishes the site.

When you are ready, [Cloudflare Pages](https://pages.cloudflare.com) can host it for free. In the Pages setup, use:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `20`

Cloudflare Pages will use the 404 page the build creates (`404.html`) for unknown addresses.

Leave `draft` set to `true` until the checklist above is done.
