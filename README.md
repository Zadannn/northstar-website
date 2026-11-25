# Northstar website

This is the draft website for a small digital studio. The name in the header is a placeholder. Change it in one file, `src/config/site.ts`, and the rest of the site follows.

The studio offers three things, with equal weight:

- Website development: business and company sites, landing pages, redesigns, responsive pages, contact forms, maintenance and updates, and basic technical SEO and performance
- CRM solutions: CRM setup and configuration, lead management, customer databases, enquiry tracking, pipeline organisation, and straightforward integrations
- Business automation: lead capture, email notifications, follow-up workflows, form-to-CRM, and other agreed workflows

A standard project configures practical tools and the pages or workflows that were agreed. It does not include a custom-built CRM platform, an AI product, or a complex multi-system integration unless that is scoped as its own piece of work. The service pages say what is included and what is not.

The site does not publish prices. Figures kept in `src/config/site.ts` under `internalDraftPrices` are not approved and stay off the pages while `showPricing` is `false`.

The site is a **draft**. A banner at the top of every page says Draft. Search engines are asked not to list the pages yet. Nothing here is published to the internet by this project.

The site is built with [Astro](https://astro.build) 5.18.2, which turns the page files into a plain website. That is the newest Astro release that still runs on Node.js 20. Astro 6 and later need Node.js 22, so they are not used here. Headings use Manrope and body text uses Inter. Both are installed as files in the project, not loaded from a third-party website.

## Folder structure

```text
src/pages/            The pages people visit, plus robots.txt and sitemap.xml
src/layouts/          The shared frame: Draft banner, header, navigation, and footer
src/components/       The wordmark, the enquiry illustrations, the FAQ, and the closing call to action
src/styles/           The look of the site (plain CSS)
src/config/site.ts    Name, phone, email, logo, services, FAQs, process, form address, draft switch, and internal prices
public/               Icon, and the redirects for old service addresses
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

   The finished files are written to the `dist` folder. You can look at that folder, but you do not upload it by hand for the steps below. Cloudflare would build it for you later.

   The first build may print a note that Astro collects anonymous usage data. That note is not an error. To turn it off, run `npx astro telemetry disable`.

To stop the local site, go back to the terminal and press Ctrl+C.

When code is pushed to GitHub, a check runs `npm ci` and `npm run build` with Node.js 20. That check only confirms the site builds. It does not put the site online.

## Where to edit placeholders

Open `src/config/site.ts`. This is the one file for:

- Business name (`name`). It is currently a placeholder. Pages read it from here. Do not type the name into the page files.
- Logo (`logo.src`). Leave it empty to keep the text wordmark. Point it at an image file when a real logo exists.
- Public website address (`siteUrl`). It is currently `https://example.com`.
- Phone (`phoneDisplay` and `phoneHref`) and email (`email`). Both are placeholders.
- `placeholders.contact`. While this is `true`, a “Placeholder” tag sits next to the phone and email.
- Services, questions, process steps, and the enquiry types (`services`, `faqs`, `steps`, `detailedSteps`, `projectTypes`).
- `formEndpoint`. The contact form stays off until this has an address.
- `showPricing` and `internalDraftPrices`. Prices stay hidden. Do not turn `showPricing` on until the figures are approved. The pages do not render those figures.
- `draft`. Leave this `true` until launch.

### The contact form

The form on the Contact page is **turned off** until `formEndpoint` has an address. While it is empty the fields are disabled and people are asked to call or email.

To turn it on, create a form with a form service (for example [Formspree](https://formspree.io)), paste the form's address into `formEndpoint`, and rebuild. The form then checks the name, email, project type, and message in the browser, posts to that address, and shows a success or error message. It includes a hidden spam-trap field named `_gotcha`. Send yourself a test message before launch. Other form services may use a different spam-trap field name.

### Before launch

1. Replace the name, phone, and email, and set `placeholders.contact` to `false`.
2. Set `siteUrl` to the real domain.
3. Add a logo file only if you have one. The text wordmark is fine until then.
4. Set `formEndpoint` and test the form.
5. Replace the draft Privacy and Terms pages with text a qualified adviser has reviewed. Those pages do not claim legal compliance.
6. Agree any prices separately. They are not on the site.
7. Set `draft` to `false`. That removes the Draft banner, the “do not index” tag, and the rule that asks robots to skip the site. It also fills in the sitemap. Structured business data is added only when the site is not a draft and the contact details are no longer placeholders.

Do not put passwords, API keys, or secret tokens in this project. None are needed to run or build the site.

## Deploying later (not set up yet)

This project is not deployed. Nothing in this repository publishes the site.

When you are ready, [Cloudflare Pages](https://pages.cloudflare.com) can host it for free. In the Pages setup, use:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `20`

Cloudflare Pages will use the 404 page the build creates (`404.html`) for unknown addresses. The file `public/_redirects` sends the old service addresses to the new pages.

Leave `draft` set to `true` until the checklist above is done.
