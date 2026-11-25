/**
 * Business facts for the Northstar site.
 *
 * Edit the placeholders in `site` before launch: business name, phone, email,
 * photos, and prices. `siteUrl` is the public address (https://example.com
 * until a real domain is ready).
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
    "Northstar is a small New Jersey agency that builds websites, CRMs, and business automations for local-service companies.",
  /** Placeholder phone, shown across the site. */
  phoneDisplay: "(000) 000-0000",
  /** Placeholder telephone link. Use the real number, with country code, when you have it. */
  phoneHref: "tel:+10000000000",
  /** Placeholder email address. */
  email: "hello@example.com",
  location: "New Jersey",
  /** Keep true until the site is ready to be found in search. */
  draft: true,
  /** Placeholder prices. Replace each line when real pricing is ready. */
  prices: {
    webDevelopment: "Not set yet",
    crmBuilding: "Not set yet",
    businessAutomation: "Not set yet",
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

export const trades = [
  "Plumbing and HVAC",
  "Electrical",
  "Landscaping and cleaning",
  "Contractors and remodelers",
  "Dental and medical offices",
  "Other local services that book jobs",
] as const;

export const steps = [
  {
    title: "Conversation",
    summary: "We learn how a job comes in and where time gets lost.",
    detail:
      "You talk with the person who will do the work. We ask who answers the phone, how quotes go out, and which tasks depend on memory.",
  },
  {
    title: "Plan",
    summary: "You get a written scope and a price before we build.",
    detail:
      "The plan says what we will build, what we will leave alone, and what it costs. Prices shown on this draft site are not real yet.",
  },
  {
    title: "Build",
    summary: "We build in the open and you check the work as it goes.",
    detail:
      "You see the site or system while it is still easy to change. Feedback is a normal part of the work, not a surprise at the end.",
  },
  {
    title: "Handoff",
    summary: "Your team gets a walkthrough and notes for ordinary updates.",
    detail:
      "We sit with the people who will use it, write down how to make common changes, and stay available when something needs a fix.",
  },
] as const;

const serviceList = [
  {
    slug: "web-development",
    title: "Web development",
    priceKey: "webDevelopment",
    summary:
      "A fast site that says what you do, where you work, and how to reach you from a phone.",
    lede: "Most local-service sites fail in a simple way: a person on a phone cannot tell what you do or how to call. We build a clear site around the jobs you already sell.",
    included: [
      "A mobile-friendly site with your services, the towns you cover, and a clear way to call",
      "Space for photos of real jobs — the pictures on this draft are placeholders",
      "Page titles and descriptions a search engine can read",
      "A handoff so you can change ordinary text without a developer",
    ],
  },
  {
    slug: "crm-building",
    title: "CRM building",
    priceKey: "crmBuilding",
    summary:
      "One place for leads and customers, shaped around how your office actually works.",
    lede: "A CRM (customer relationship management system) is the list of people who might hire you, plus what you promised them. We build that list to match your jobs, not a generic sales pipeline.",
    included: [
      "Leads from calls, forms, and referrals in one list",
      "Statuses that match your work: new, quoted, scheduled, finished",
      "Notes so the next person in the office knows what was promised",
      "Follow-up reminders for quotes that have gone quiet",
    ],
  },
  {
    slug: "business-automation",
    title: "Business automation",
    priceKey: "businessAutomation",
    summary:
      "Connect the busywork — reminders, review requests, and new leads — so less of it depends on memory.",
    lede: "Automation here means a few repeat tasks that run themselves. We start with one or two, using tools your team already understands, instead of a pile of new software.",
    included: [
      "A new website lead dropped into the CRM without retyping",
      "A reminder when a quote has sat for a few days",
      "A review request after a job is marked finished",
      "A short checklist that moves a job from quote toward invoice",
    ],
  },
] as const satisfies readonly {
  slug: string;
  title: string;
  priceKey: keyof typeof site.prices;
  summary: string;
  lede: string;
  included: readonly string[];
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
