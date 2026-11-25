/**
 * Business facts for the site.
 *
 * The public name, logo, phone, email, and website address are placeholders.
 * Leave `draft` true, `showPricing` false, and `formEndpoint` empty until a
 * real launch is approved. Draft mode shows the banner, adds noindex, and
 * tells robots to stay away. Prices in `prices` are old internal notes and
 * are not rendered while `showPricing` is false.
 *
 * `siteUrl` stays https://example.com until a real domain exists. Absolute
 * canonical and social URLs are omitted while the site is a draft or the
 * address is still that placeholder.
 *
 * The public offer is website development only. CRM implementation and
 * business automation are not services on this site.
 */

const name = "Northstar";

const placeholderHosts = new Set(["example.com", "www.example.com"]);

/** Public routes. Internal links use a trailing slash. Home stays `/`. */
export const paths = {
  home: "/",
  services: "/services/",
  webDevelopment: "/services/web-development/",
  ourWork: "/our-work/",
  howItWorks: "/how-it-works/",
  about: "/about/",
  contact: "/contact/",
  privacy: "/privacy/",
  terms: "/terms/",
} as const;

export const site = {
  /** Placeholder business name. Every public mention should read this value. */
  name,
  /** Placeholder public address. Do not treat this as a live domain. */
  siteUrl: "https://example.com",
  description: `${name} builds modern, responsive websites for small businesses and growing companies: clearer pages, a way for customers to get in touch, and a documented handover.`,
  tagline: "Website development for small businesses and growing companies.",
  /** Placeholder phone, shown with a Placeholder label while contact is unfinished. */
  phoneDisplay: "(000) 000-0000",
  /** Placeholder telephone link. Use the real number, with country code, when you have it. */
  phoneHref: "tel:+10000000000",
  /** Placeholder email address. */
  email: "hello@example.com",
  /** Keep true until the site is ready to be found in search. */
  draft: true,
  /** Sentence appended in the shared footer while `draft` is true. */
  draftNotice: "Draft website. Not published.",
  /**
   * Public price display. Keep false until founders agree final prices.
   * Internal draft figures below are never rendered while this is false.
   */
  showPricing: false,
  /**
   * Which kinds of content are still stand-ins. The contact switch keeps the
   * Placeholder labels on the phone and email. Photos stay unused while
   * `photos` is true. Prices stay hidden while `showPricing` is false.
   */
  placeholders: {
    contact: true,
    prices: true,
    photos: true,
  },
  /**
   * Address of a form service (for example a Formspree form URL). While this
   * is empty, or not a valid http(s) URL, the contact page does not render a
   * form and does not show a success message.
   */
  formEndpoint: "",
  /**
   * Optional logo image. Leave `src` empty to use the text wordmark.
   * `width` and `height` are the image's pixel dimensions.
   */
  logo: {
    src: "",
    width: 140,
    height: 32,
  },
  /** Primary action used in the header, hero, and closing banner. */
  cta: {
    label: "Discuss Your Project",
    href: paths.contact,
  },
  secondaryCta: {
    label: "Explore Our Work",
    href: paths.ourWork,
  },
  /**
   * Optional service area for a future live site. Empty means the practice is
   * not limited to one place, and no location is added to structured data.
   */
  serviceArea: "",
  /**
   * Internal draft figures from an older offer. Not approved, and not shown
   * while `showPricing` is false.
   */
  prices: {
    webDevelopment: "From $999 (most projects $999–$1,499)",
    websiteCare: "$79–$129 per month",
    leadFollowUp: "Setup from $700. Optional monthly management from $149",
  },
  /**
   * Optional photos for a later launch. They are not shown while
   * `placeholders.photos` is true. Files in public/images named placeholder
   * are stand-ins. Project screenshots live on `projects`, not here.
   */
  photos: {
    hero: {
      src: "/images/hero-placeholder.svg",
      alt: "Placeholder image for a future homepage photograph",
      caption: "Replace with a photograph you have the rights to use.",
    },
    about: {
      src: "/images/about-placeholder.svg",
      alt: "Placeholder image for a future photograph of the team",
      caption: "Replace with a photograph of the people behind the business.",
    },
    work: {
      src: "/images/work-placeholder.svg",
      alt: "Placeholder image for a future project photograph",
      caption: "Replace with a photograph of finished work.",
    },
  },
} as const;

/** True only when a non-draft site has a real public address. */
export function publishesAbsoluteUrls(): boolean {
  if (site.draft) return false;
  try {
    const host = new URL(site.siteUrl).hostname.toLowerCase();
    return !placeholderHosts.has(host);
  } catch {
    return false;
  }
}

/**
 * Normalise an internal path to the site's trailing-slash convention.
 * Home stays `/`. Files such as `/sitemap.xml` are left unchanged.
 */
export function pagePath(path: string): string {
  const cut = Math.min(
    ...["#", "?"].map((mark) => {
      const index = path.indexOf(mark);
      return index === -1 ? path.length : index;
    }),
  );
  const pathname = path.slice(0, cut);
  const suffix = path.slice(cut);
  if (pathname === "/" || pathname.endsWith("/") || /\.[a-z0-9]+$/i.test(pathname)) {
    return `${pathname}${suffix}`;
  }
  return `${pathname}/${suffix}`;
}

/** Absolute URL for a path, using the trailing-slash convention. */
export function absoluteUrl(pathname: string): string {
  return new URL(pagePath(pathname), site.siteUrl).href;
}

/**
 * The contact form is rendered only when `formEndpoint` is an http(s) URL.
 * An empty or invalid value must not produce a form or a success message.
 */
export function formAction(): string | null {
  const value = site.formEndpoint.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.href;
  } catch {
    return null;
  }
}

export const positioning = {
  summary: `${site.name} is a website development studio for small businesses and growing companies. The work is practical: clear pages, a layout that works on a phone, and a documented handover.`,
  detail:
    "We help businesses improve their website: a clearer presence, pages that work on a phone, and a straightforward way for customers to get in touch. We are not tied to one industry or one region, and we do not sell a software product of our own.",
} as const;

export const notes = {
  scope:
    "Scope and deliverables are agreed in writing before development starts. We do not guarantee timelines, rankings, or a number of leads.",
  businesses:
    "These are examples of businesses we can help, not a limit on who we work with.",
  legal:
    "This is placeholder text for a draft website. It has not been reviewed by a lawyer and it does not guarantee legal compliance.",
  formPending:
    "It is not on this page yet. Please use the phone number or email. Both are marked Placeholder. This page does not send a message or show a success confirmation.",
  maintenance:
    "Limited website maintenance can be agreed after launch. The written scope names which changes are included, how many, and how quickly we respond. It is not an unlimited editing plan, and it is not a separate open-ended service.",
  work:
    "Projects are listed when there is a real site to show. A family project is labelled as one. We do not invent clients, testimonials, or results.",
} as const;

export const nav = [
  { href: paths.home, label: "Home" },
  { href: paths.services, label: "Services" },
  { href: paths.ourWork, label: "Our Work" },
  { href: paths.about, label: "About" },
  { href: paths.howItWorks, label: "How It Works" },
  { href: paths.contact, label: "Contact" },
] as const;

export const legalNav = [
  { href: paths.privacy, label: "Privacy" },
  { href: paths.terms, label: "Terms" },
] as const;

/**
 * About-page operating model. First names and role text only.
 * Both founders must approve this description before launch.
 * Do not add biographies, credentials, years, or client history.
 *
 * The sentence on the page is "{name} handles {role}: {responsibilities}."
 * Prashant's responsibilities are the copywriter's approved wording.
 */
export const founders = [
  {
    name: "Maitri",
    role: "client coordination",
    responsibilities:
      "the first conversation, understanding how your business runs, agreeing the scope in writing and keeping you updated as work moves along",
  },
  {
    name: "Prashant",
    role: "technical delivery",
    responsibilities:
      "scoping what's feasible, building and testing the site, setting up hosting and deployment, and handing everything over with clear documentation",
  },
] as const;

export const closing = {
  eyebrow: "Next step",
  heading: "Tell us about the website you need.",
  text: "A new site, a landing page, or a redesign of one you already have. We will reply with an honest view of what we can take on.",
} as const;

/** Sample interface copy for the homepage visual. Not a client or a result. */
export const preview = {
  disclaimer: "Example layout only. Not a client project or a result.",
  website: {
    url: "example.com",
    name: "Example Business",
    kicker: "Sample page",
    nav: ["Services", "About", "Contact"],
    headline: "Clear services. Easy to get in touch.",
    text: "What the business does, who it is for, and how to start a conversation.",
    items: ["Services", "About", "Visit"],
    action: "Get in touch",
  },
} as const;

export const problems = [
  {
    title: "The website is hard to understand",
    text: "Someone arrives and cannot tell what you offer, who it is for, or how to start a conversation.",
  },
  {
    title: "It is awkward on a phone",
    text: "Text, menus, or buttons are difficult to use on a small screen, so people leave.",
  },
  {
    title: "It no longer looks like the business",
    text: "The structure or the presentation has fallen behind, and the site does not feel credible.",
  },
  {
    title: "Getting in touch is unclear",
    text: "The phone number, email, or form is hard to find, so a ready customer has to hunt for it.",
  },
] as const;

export const businessTypes = [
  {
    title: "Professional services",
    text: "A site that explains the practice and gives people a straightforward way to enquire.",
  },
  {
    title: "Home and local services",
    text: "A clear page for what you offer and how a customer should get in touch.",
  },
  {
    title: "Retail",
    text: "A straightforward presence, with the practical details a visitor needs.",
  },
  {
    title: "Consulting",
    text: "A credible site that describes the work and invites a conversation.",
  },
  {
    title: "Independent professionals",
    text: "The essentials done carefully, without a large system around them.",
  },
  {
    title: "Growing companies",
    text: "A site that presents the company clearly, within a scope you can agree.",
  },
] as const;

export const principles = [
  {
    title: "Scope before building",
    text: "What we will deliver, and what we will not, is written down before development starts.",
  },
  {
    title: "You own the accounts",
    text: "Your domain and hosting stay in your name. We hand over the access details.",
  },
  {
    title: "A website, not a product of ours",
    text: "We design and build the site described in the scope. We do not ask you to adopt software we built.",
  },
  {
    title: "Finite on purpose",
    text: "Rounds of changes and any maintenance are limited unless the written plan says otherwise.",
  },
  {
    title: "No borrowed credibility",
    text: "We do not publish testimonials, rankings, or results we cannot stand behind. A family project is not presented as a paying client.",
  },
  {
    title: "A direct answer",
    text: "If we are not the right fit, we say so. We do not take work we cannot deliver well.",
  },
] as const;

export const steps = [
  {
    title: "Discovery",
    summary: "We learn what the business does and what the website needs to explain.",
    detail:
      "We ask who the site is for, which services should be on it, and how you want people to get in touch. It is a working conversation, not a scripted pitch.",
  },
  {
    title: "Planning",
    summary: "You get a written scope and price before development starts.",
    detail:
      "The plan lists the pages, what is included, what is out of scope, and how feedback will work. Development waits until you have agreed that plan in writing. We do not guarantee a calendar date. Timing depends on the scope and on how quickly feedback comes back.",
  },
  {
    title: "Development",
    summary: "We design and build the pages the plan describes.",
    detail:
      "You can review a preview while changes are still straightforward. Please send one combined set of comments per round. New pages and new features are quoted separately.",
  },
  {
    title: "Testing",
    summary: "We check the site on phones and larger screens before calling it finished.",
    detail:
      "We review the pages on common screen sizes and try the links and the contact path. You review it too. We fix what the scope covers. A new idea at the end is not treated as a defect.",
  },
  {
    title: "Launch",
    summary: "We deploy the site once the agreed checks are done, then hand it over.",
    detail:
      "Launch waits for the checks in the plan and for any final payment the plan names. You own the domain and the hosting account. We share domain connection guidance, hand over access, and leave a short guide to what was set up.",
  },
  {
    title: "Support",
    summary: "Ongoing help is a separate, written arrangement.",
    detail:
      "Limited maintenance or small edits can be agreed after launch, with the changes and the response time written down. It is not an open-ended promise to rebuild the site whenever something new comes up.",
  },
] as const;

/** Straight answers. Edit these here rather than inside the pages. */
export const faqs = [
  {
    question: "Can you guarantee more leads or a Google ranking?",
    answer:
      "No. No honest provider can. We make the site clear, usable on a phone, and easy to contact, and we set the basic technical foundations a search engine can read. We do not promise rankings, traffic, or a number of enquiries. Results depend on demand, competition, and your reputation.",
  },
  {
    question: "Who owns my domain and accounts?",
    answer:
      "You do. We set the domain and hosting up in your name wherever possible and hand over the access details at launch. Hosting, domain, and similar fees are listed separately.",
  },
  {
    question: "How many changes are included?",
    answer:
      "Two rounds of changes before launch, unless your written scope says otherwise. Please send one combined list per round. Anything new, such as extra pages or features, is quoted separately.",
  },
  {
    question: "How does payment work?",
    answer:
      "You get a written scope and price first. A deposit starts the work and the balance is due before launch. Prices are agreed in that written plan. This draft site does not publish prices.",
  },
  {
    question: "Do you build online stores, custom software, or booking systems?",
    answer:
      "Not as standard work. We build business websites, landing pages, and redesigns, and we handle responsive layout, basic technical SEO, and deployment. Online stores, booking systems, and custom applications are outside that scope. If you need something we do not offer, we will say so.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: notes.maintenance,
  },
  {
    question: "Where is your team based?",
    answer:
      "We are a small US–India team. Your main contact is on the US side and handles your questions, content, and feedback. The website build is done remotely by our technical lead in India.",
  },
] as const;

const serviceList = [
  {
    id: "business-websites",
    title: "Business Website Development",
    summary:
      "Professional websites that clearly communicate a business's services, credibility and contact information.",
  },
  {
    id: "landing-pages",
    title: "Landing Page Development",
    summary: "Focused landing pages for individual services, campaigns or offerings.",
  },
  {
    id: "redesign",
    title: "Website Redesign",
    summary: "Improve the structure, usability, responsiveness and presentation of existing websites.",
  },
  {
    id: "responsive",
    title: "Responsive Website Optimisation",
    summary: "Ensure websites work across phones, tablets, laptops and desktops.",
  },
  {
    id: "technical-seo",
    title: "Basic Technical SEO",
    summary:
      "Page titles, metadata, semantic structure, sitemap configuration and basic technical foundations. No ranking or traffic promises.",
  },
  {
    id: "deployment",
    title: "Website Deployment and Handover",
    summary: "Deployment setup, domain connection guidance and documented handover.",
  },
] as const;

export const services = serviceList;

export type Service = (typeof services)[number];
export type ServiceId = Service["id"];

/** Anchor on the website-development page for one of the six services. */
export function serviceHref(id: ServiceId): string {
  return `${paths.webDevelopment}#${id}`;
}

/** Named so a visitor can see the boundary without reading a sales list. */
export const outOfScope = [
  "Custom CRM software, AI agents, and advanced automation",
  "Complex integrations and enterprise software",
  "Online stores, booking systems, and custom web applications",
  "Guaranteed search rankings, traffic, leads, or revenue",
  "Unlimited edits, or maintenance without a written limit",
  "Logo design, a new brand identity, or photography we would need to source",
] as const;

/**
 * Real projects only. Add an object here to show another one.
 * Screenshots are captures of the live site, not mockups or stock photos.
 * Leave `src` empty to show a labelled project preview instead of an image.
 */
export const projects = [
  {
    id: "wonder-kitchen",
    name: "Wonder Kitchen",
    url: "https://amiwonderkitchen.com/",
    relationship: "Family project",
    summary:
      "A website for a home cloud kitchen, built for a founder's aunt. Wonder Kitchen is a family project, not a paid client engagement.",
    note: "The images are screenshots of the live site. They are not a testimonial, and they are not a claim about enquiries, sales, or search traffic.",
    screenshots: [
      {
        src: "/images/work/wonder-kitchen-desktop.webp",
        width: 1440,
        height: 2040,
        alt: "Desktop screenshot of the live Wonder Kitchen homepage, a family cloud-kitchen website.",
        caption: "Screenshot of the live Wonder Kitchen website, desktop width.",
      },
      {
        src: "/images/work/wonder-kitchen-mobile.webp",
        width: 780,
        height: 2730,
        alt: "Phone screenshot of the live Wonder Kitchen homepage, a family cloud-kitchen website.",
        caption: "Screenshot of the live Wonder Kitchen website, phone width.",
      },
    ],
  },
] as const;

export type Project = (typeof projects)[number];
