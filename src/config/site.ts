/**
 * Business facts for the Northstar site.
 *
 * Edit the placeholders in `site` before launch: business name, phone, email,
 * photos, prices, and the contact form address. `siteUrl` is the public
 * address (https://example.com until a real domain is ready).
 *
 * Leave `draft` set to true until launch. That shows the Draft banner, adds
 * the noindex tag, and tells robots to stay away.
 */

export const site = {
  /** Placeholder business name. */
  name: "Northstar",
  /** Placeholder public address. Do not use a real domain until launch. */
  siteUrl: "https://example.com",
  /** Short line used in the home page description. */
  description:
    "Northstar is a small US–India team that builds clear, mobile-friendly websites and simple lead follow-up for New Jersey home-service businesses.",
  /** Placeholder phone, shown across the site. */
  phoneDisplay: "(000) 000-0000",
  /** Placeholder telephone link. Use the real number, with country code, when you have it. */
  phoneHref: "tel:+10000000000",
  /** Placeholder email address. */
  email: "hello@example.com",
  /** The area you serve (not where every team member is based). */
  location: "New Jersey",
  /** Keep true until the site is ready to be found in search. */
  draft: true,
  /**
   * Which kinds of content are still stand-ins. Set each one to false once the
   * real phone and email, real prices, or real photos are in place. The
   * "Placeholder" tags on the pages follow these switches.
   */
  placeholders: {
    contact: true,
    prices: true,
    photos: true,
  },
  /**
   * Address of a form service (for example a Formspree form URL). While this is
   * empty the contact form stays switched off and people are asked to call or
   * email. Paste the address here to turn the form on.
   */
  formEndpoint: "",
  /** Starting prices. Final prices need both founders' agreement. */
  prices: {
    webDevelopment: "From $999 (most projects $999–$1,499)",
    websiteCare: "$79–$129 per month",
    leadFollowUp: "Setup from $700. Optional monthly management from $149",
  },
  /**
   * Placeholder photos. The files in public/images are stand-ins.
   * Point `src` at a new file when a real photo is ready.
   */
  photos: {
    hero: {
      src: "/images/hero-placeholder.svg",
      alt: "Photo placeholder for a New Jersey storefront or job site",
      caption: "Replace with a photo of a real job or storefront.",
    },
    about: {
      src: "/images/about-placeholder.svg",
      alt: "Photo placeholder for the people behind Northstar",
      caption: "Replace with a photo of the people behind the business.",
    },
    work: {
      src: "/images/work-placeholder.svg",
      alt: "Photo placeholder for a finished client project",
      caption: "Replace with a photo of finished work.",
    },
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** The trades we start with. Keep this list short until the process is proven. */
export const trades = [
  "Cleaning companies",
  "Landscapers",
  "Plumbers",
  "HVAC contractors",
] as const;

export const steps = [
  {
    title: "Conversation",
    summary: "We learn how customers find you and where enquiries get lost.",
    detail:
      "We ask about your services, the towns you cover, who answers the phone, and how quotes go out. We also ask what you want the website to do for you.",
  },
  {
    title: "Plan",
    summary: "You get a written scope, price, and timeline before we build.",
    detail:
      "The plan says what we will build, what is not included, how many rounds of changes you get, and what it costs. Work starts once you have agreed it in writing and paid the deposit. Prices shown on this draft site are not final yet.",
  },
  {
    title: "Build",
    summary: "We build a preview you can review before anything goes live.",
    detail:
      "You see a working preview while it is still easy to change. Send one combined list of changes per round. Two rounds are included. New features are quoted separately.",
  },
  {
    title: "Launch and handover",
    summary: "We test it, launch it, and hand over what you need.",
    detail:
      "Before launch we check the site on phones, test the forms and call links, and agree the final balance. You own your domain and accounts. You get the access details and a short guide, and any care plan has its limits written down.",
  },
] as const;

/** Straight answers to the questions owners ask most. */
export const faqs = [
  {
    question: "Can you guarantee more leads or a Google ranking?",
    answer:
      "No. No honest provider can. We make the site clear, quick on a phone, and easy to contact, and we can set up basic tracking so you can see what happens. Results depend on demand, competition, and your reputation.",
  },
  {
    question: "Who owns my domain and accounts?",
    answer:
      "You do. We set things up in your name wherever possible and hand over the access details at launch. Hosting, domain, and similar fees are listed separately.",
  },
  {
    question: "How many changes are included?",
    answer:
      "Two rounds of changes before launch. Please send one combined list per round. Anything new, such as extra pages or features, is quoted separately.",
  },
  {
    question: "How does payment work?",
    answer:
      "You get a written scope and price first. A deposit starts the work and the balance is due before launch. Prices on this draft site are placeholders until they are final.",
  },
  {
    question: "Do you build online stores or booking systems?",
    answer:
      "Not at the start. We keep to simple business websites and lead follow-up so we can do them well. If you need something more complex, we will tell you honestly.",
  },
  {
    question: "Where is your team based?",
    answer:
      "We are a small US–India team. Your main contact is on the US side and handles your questions, content, and feedback. The website build is done remotely by our technical lead in India.",
  },
] as const;

const serviceList = [
  {
    slug: "web-development",
    title: "Website launch",
    priceKey: "webDevelopment",
    summary:
      "A clean, mobile-friendly site of up to five pages that says what you do, where you work, and how to call or ask for a quote.",
    lede: "Most local-service sites fail in a simple way: a person on a phone cannot tell what you do or how to call. We build a clear site around the jobs you already sell.",
    included: [
      "Up to five pages, for example Home, Services, About, Projects, and Contact",
      "A mobile-friendly layout with a tap-to-call button and a quote or contact form",
      "Your services and the towns you cover, written clearly",
      "Page titles, descriptions, and a sitemap so search engines can read the site",
      "Basic analytics and Search Console setup, where you give us access",
      "Two rounds of changes, then launch and a written handover",
    ],
    notIncluded: [
      "Online stores, customer logins, booking systems, or custom dashboards",
      "Logo design, professional photography, or paid stock images",
      "Hosting, domain, and premium plugin fees (listed separately, billed at cost)",
      "Guaranteed search rankings, leads, or traffic",
      "Unlimited edits",
    ],
  },
  {
    slug: "website-care",
    title: "Website care",
    priceKey: "websiteCare",
    summary:
      "Monthly upkeep so your site keeps working after launch, with the limits written down.",
    lede: "A website is not finished at launch. Forms break, software ages, and phone numbers change. A care plan puts the routine upkeep in writing so you know who handles it. Plans start with sites we build; we look at other sites case by case.",
    included: [
      "Backups and update checks",
      "Uptime and basic security checks",
      "A set amount of small text and photo changes each month",
      "A named contact and a response time written into your plan",
    ],
    notIncluded: [
      "New pages, redesigns, or major content writing (quoted separately)",
      "Emergency work outside the agreed hours",
      "Unlimited edits",
    ],
  },
  {
    slug: "lead-follow-up",
    title: "Lead follow-up setup",
    priceKey: "leadFollowUp",
    summary:
      "Stop enquiries going cold: missed-call texts, one simple lead list, quote reminders, and review requests.",
    lede: "Many small shops lose jobs not because the work is poor, but because a missed call or a quote request sits for days. We set up a few simple, tested automations on a low-cost tool you own, rather than building a custom system that depends on us to keep it running.",
    included: [
      "An instant text reply when a call is missed, once your business number is registered for texting",
      "Website and form enquiries sent into one simple lead list, with a phone or email alert for you",
      "A reminder when a quote has gone quiet for a few days",
      "A review request after a job is finished",
      "Opt-out handling, and a written test checklist so each automation is checked before it goes live",
    ],
    notIncluded: [
      "A custom-coded CRM or dashboard",
      "AI chatbots or AI phone agents that talk to your customers on their own",
      "Links to accounting, payment, or dispatch software (quoted separately)",
      "Platform and text-message fees (billed at cost, in accounts you own)",
      "Promises about how many leads or reviews you will get",
    ],
  },
] as const satisfies readonly {
  slug: string;
  title: string;
  priceKey: keyof typeof site.prices;
  summary: string;
  lede: string;
  included: readonly string[];
  notIncluded: readonly string[];
}[];

export const services = serviceList;

export type Service = (typeof services)[number];
export type ServiceSlug = Service["slug"];

export function getService(slug: ServiceSlug): Service {
  const match = services.find((service) => service.slug === slug);
  if (!match) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return match;
}
