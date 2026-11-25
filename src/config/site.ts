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
 */

const name = "Northstar";

const placeholderHosts = new Set(["example.com", "www.example.com"]);

export const site = {
  /** Placeholder business name. Every public mention should read this value. */
  name,
  /** Placeholder public address. Do not treat this as a live domain. */
  siteUrl: "https://example.com",
  description: `${name} helps small businesses and growing companies improve their websites, organise customer information, and simplify repetitive work.`,
  tagline: "Websites, CRM setup, and business automation for growing companies.",
  /** Placeholder phone, shown with a Placeholder label while contact is unfinished. */
  phoneDisplay: "(000) 000-0000",
  /** Placeholder telephone link. Use the real number, with country code, when you have it. */
  phoneHref: "tel:+10000000000",
  /** Placeholder email address. */
  email: "hello@example.com",
  /** Keep true until the site is ready to be found in search. */
  draft: true,
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
   * is empty the contact form stays switched off. It does not pretend to send.
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
    label: "Let's Talk About Your Project",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore Our Services",
    href: "/services",
  },
  /**
   * Optional service area for a future live site. Empty means the practice is
   * not limited to one place, and no location is added to structured data.
   */
  serviceArea: "",
  /**
   * Internal draft figures from the previous offer. Not approved for the
   * current services, and not shown while `showPricing` is false.
   */
  prices: {
    webDevelopment: "From $999 (most projects $999–$1,499)",
    websiteCare: "$79–$129 per month",
    leadFollowUp: "Setup from $700. Optional monthly management from $149",
  },
  /**
   * Optional photos for a later launch. They are not shown while
   * `placeholders.photos` is true. Files in public/images are stand-ins.
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

export const positioning = {
  summary: `${site.name} is a digital solutions practice for small businesses and growing companies. The work has three equal parts: website development, CRM setup, and practical automation.`,
  detail:
    "We help businesses improve a digital presence, organise customer information, and simplify repetitive processes. We are not tied to one industry or one region, and we do not sell a software product of our own.",
} as const;

export const notes = {
  scope:
    "Scope and deliverables are agreed in writing before development starts. We do not guarantee timelines, rankings, or a number of leads.",
  workflow:
    "This is an example of how the services can work together. It is not a package, and many projects use only one service.",
  businesses:
    "These are examples of businesses we can help, not a limit on who we work with.",
  legal:
    "This is placeholder text for a draft website. It has not been reviewed by a lawyer and it does not guarantee legal compliance.",
  formOff:
    "This form is turned off. It does not send messages, and submitting it will not show a success message.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const closing = {
  eyebrow: "Next step",
  heading: "Tell us what you want to improve.",
  text: "A website, a CRM, a follow-up workflow, or some combination. We will reply with an honest view of what we can take on.",
} as const;

/** Sample interface copy for the homepage visual. Not a client or a product. */
export const preview = {
  disclaimer: "Example only. Not a client, a product we sell, or a result we achieved.",
  website: {
    kicker: "Website",
    url: "example.com/preview",
    name: "Example Business",
    nav: ["Services", "About", "Contact"],
    headline: "Clear services. A simple way to enquire.",
    items: ["Advisory", "Projects", "Support"],
    action: "Request a conversation",
  },
  crm: {
    kicker: "CRM",
    title: "Sample lead list",
    rows: [
      { name: "Riley Chen", detail: "Website enquiry", status: "New" },
      { name: "Sam Patel", detail: "Proposal sent", status: "Waiting" },
      { name: "Jordan Blake", detail: "Follow-up due", status: "Due" },
    ],
  },
  automation: {
    kicker: "Automation",
    title: "Sample workflow",
  },
} as const;

export const problems = [
  {
    title: "The website is hard to understand",
    text: "Someone arrives and cannot tell what you offer, who it is for, or how to start a conversation.",
  },
  {
    title: "Enquiries are scattered",
    text: "A form, a call, and an email each land somewhere different, and some of them go quiet.",
  },
  {
    title: "The same admin keeps returning",
    text: "Names, requests, and reminders are copied by hand from one place to another.",
  },
  {
    title: "The tools do not meet",
    text: "The website, the customer list, and the follow-up habit are separate jobs, so things slip between them.",
  },
] as const;

export const workflow = [
  {
    title: "Website enquiry",
    summary: "A person sends a message from a page on the site.",
  },
  {
    title: "Lead capture",
    summary: "That message is recorded, rather than living only in an inbox.",
  },
  {
    title: "CRM organisation",
    summary: "The lead is filed in a pipeline with the details the team needs.",
  },
  {
    title: "Notification",
    summary: "The person who should respond gets an email or a message.",
  },
  {
    title: "Follow-up",
    summary: "A reminder prompts the next step you agreed, if nobody has replied.",
  },
] as const;

export const businessTypes = [
  {
    title: "Professional services",
    text: "Firms that need a clear site and a tidy way to track new enquiries.",
  },
  {
    title: "Home and local services",
    text: "Businesses where calls and quote requests need a reliable follow-up path.",
  },
  {
    title: "Retail",
    text: "Shops that need a straightforward presence and a place for customer questions.",
  },
  {
    title: "Consulting",
    text: "Practices that want a credible site and a simple pipeline for conversations.",
  },
  {
    title: "Independent professionals",
    text: "People who need the basics done well without a large system.",
  },
  {
    title: "Growing teams",
    text: "Groups that have outgrown a shared inbox and a handful of spreadsheets.",
  },
] as const;

export const principles = [
  {
    title: "Scope before building",
    text: "What we will deliver, and what we will not, is written down before development starts.",
  },
  {
    title: "You own the accounts",
    text: "Your domain, hosting, CRM, and automation tools stay in your name.",
  },
  {
    title: "Tools, not a product of ours",
    text: "We configure existing tools. We do not ask you to adopt a CRM or platform we built.",
  },
  {
    title: "Finite on purpose",
    text: "Rounds of changes, maintenance, and integrations are limited unless the written plan says otherwise.",
  },
  {
    title: "No borrowed credibility",
    text: "We do not publish testimonials, rankings, or results we cannot stand behind.",
  },
  {
    title: "A direct answer",
    text: "If we are not the right fit, we say so. We do not take work we cannot deliver well.",
  },
] as const;

export const steps = [
  {
    title: "Discovery",
    summary: "We learn how enquiries arrive and where the work is getting stuck.",
    detail:
      "We ask what you want people to understand, which tools you already use, who responds to enquiries, and what a useful outcome looks like. It is a working conversation, not a scripted pitch.",
  },
  {
    title: "Planning",
    summary: "You get a written scope and price before development starts.",
    detail:
      "The plan lists what is included, what is out of scope, how feedback will work, and what it costs. Development waits until you have agreed that plan in writing. We do not guarantee a calendar date. Timing depends on the scope and on how quickly feedback comes back.",
  },
  {
    title: "Development",
    summary: "We build or configure what the plan describes.",
    detail:
      "You can review a preview of the website, or the CRM and workflows, while changes are still straightforward. Please send one combined set of comments per round. New pages, new integrations, and new workflows are quoted separately.",
  },
  {
    title: "Testing",
    summary: "We check the work against the scope before calling it finished.",
    detail:
      "We review pages on common screen sizes, try the forms and links, and walk through each agreed workflow. You review it too. We fix what the scope covers. A new idea at the end is not treated as a defect.",
  },
  {
    title: "Launch",
    summary: "We go live once the agreed checks are done, then hand over access.",
    detail:
      "Launch waits for the checks in the plan and for any final payment the plan names. You own the domain and the tool accounts. We hand over the access details and a short guide to what was set up.",
  },
  {
    title: "Support",
    summary: "Ongoing help is a separate, written arrangement.",
    detail:
      "Maintenance, small edits, or keeping a workflow running can be agreed after launch, with limits. Support covers what that arrangement describes. It is not an open-ended promise to build whatever comes next.",
  },
] as const;

/** Straight answers. Edit these here rather than inside the pages. */
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
      "Two rounds of changes before launch, unless your written scope says otherwise. Please send one combined list per round. Anything new, such as extra pages or features, is quoted separately.",
  },
  {
    question: "How does payment work?",
    answer:
      "You get a written scope and price first. A deposit starts the work and the balance is due before launch. Prices are agreed in that written plan. This draft site does not publish prices.",
  },
  {
    question: "Do you build online stores or booking systems?",
    answer:
      "Not as standard work. We focus on business websites, CRM setup and configuration, and clearly scoped automation. Online stores, booking systems, and custom platforms are outside that scope. If you need something more complex, we will say so.",
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
    title: "Website Development",
    visual: "website",
    summary:
      "Business websites, landing pages, and redesigns that explain what you do and make it easy to get in touch.",
    lede: "A business website should tell people what you do and give them a clear way to enquire. We design and build that kind of site, including landing pages and redesigns, and we can look after it afterwards under a written plan.",
    fit: "You need a site that explains the business on a phone and gives people a straightforward way to enquire.",
    limit: "Not an online store, a booking system, or a promise of search rankings.",
    capabilities: [
      "Business websites and landing pages",
      "Redesigns and responsive pages",
      "Contact forms",
      "Maintenance, when agreed",
      "Basic technical SEO and performance",
    ],
    included: [
      "A business website or landing page, structured around the services you already offer",
      "A redesign of an existing site, when that is what the scope describes",
      "Responsive pages for phones and larger screens",
      "A contact or enquiry form, plus email and phone links",
      "Page titles, meta descriptions, and a sitemap",
      "Basic performance care: lean pages and no unnecessary scripts",
      "Two rounds of changes, then launch and a short handover, unless the scope sets a different number",
    ],
    notIncluded: [
      "Online stores, bookings, memberships, or custom web applications",
      "A content system or hosting product that we own",
      "Logo design, brand identity, or new photography",
      "Search-ranking guarantees, paid advertising, or an ongoing SEO campaign",
      "Unlimited pages or unlimited edits",
      "Hosting, domain, and third-party fees, which stay in accounts you own and are listed separately",
    ],
    sections: [
      {
        title: "Maintenance",
        body: "Looking after the site is a separate agreement, not an automatic part of every build. A plan can include backups, update checks, a periodic look at uptime, and a set number of small text or image edits. New pages, redesigns, and new features are quoted on their own. We do not offer unlimited edits.",
      },
      {
        title: "Technical SEO and performance",
        body: "The basics are part of building the site properly. We do not sell ranking guarantees or a performance certificate.",
        items: [
          "A unique title and description for each page",
          "A sitemap, and a robots file that matches whether the site should be indexed",
          "Headings and link text a person can follow",
          "Layouts that work on phones",
          "Pages kept light, without unused frameworks or decorative scripts",
          "Room to add Search Console or a basic analytics tag, in an account you own, if you want it and can give access",
        ],
      },
    ],
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    visual: "crm",
    summary:
      "Setup and configuration of a CRM you choose, so leads, customers, and the sales pipeline are easier to follow.",
    lede: "We set up and configure a CRM you choose. The aim is practical: leads, customers, and the sales pipeline in a structure your team will actually use. We do not sell a CRM of our own.",
    fit: "Enquiries and customer details are spread across inboxes and spreadsheets, and you want them in one tool you control.",
    limit: "Not a CRM product of our own, and not an enterprise rollout.",
    capabilities: [
      "Setup and configuration",
      "Lead management",
      "Customer records",
      "Sales pipeline organisation",
      "Practical integrations",
    ],
    included: [
      "Setup or configuration of an existing CRM that you choose and pay for",
      "Lead stages that match how you actually respond to enquiries",
      "A contact or customer structure your team can keep using",
      "The fields and views the scope says you need",
      "A handover so you can add and update records yourselves",
    ],
    notIncluded: [
      "A CRM built or owned by us",
      "Enterprise implementation, large data migrations, or a data warehouse",
      "Unlimited custom integrations",
      "Advanced AI features, lead-scoring models, or autonomous agents",
      "Replacing accounting, payroll, or operations software",
      "Promises about revenue or conversion",
    ],
    sections: [
      {
        title: "Configuration of your tool",
        body: "We work in a CRM account you own. The plan names the product. If that product has a fee, the provider bills you. We do not resell a platform of our own or lock the records inside an account we control.",
      },
      {
        title: "Practical integrations",
        body: "An integration is in scope only when the plan names the source, the destination, and the fields that move. A form on your website creating a lead is a typical example. Each extra connection is quoted on its own.",
      },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    visual: "automation",
    summary:
      "Clearly scoped workflows that capture enquiries, notify the right person, and prompt a follow-up.",
    lede: "We automate a clearly agreed slice of repetitive work: capturing a lead, telling the right person, and prompting a follow-up. Each workflow is written down, tested, and limited to the tools in the scope.",
    fit: "A person on the team is copying the same details, or chasing the same quiet enquiries, by hand.",
    limit: "Not an AI product, and not an unlimited set of integrations.",
    capabilities: [
      "Lead capture",
      "Notifications",
      "Follow-up workflows",
      "Form-to-CRM workflows",
      "Practical integrations",
    ],
    included: [
      "Lead capture from a form or another source named in the plan",
      "An email or message to the right person when a new enquiry arrives",
      "Follow-up reminders based on rules we write down with you",
      "A form-to-CRM step when CRM setup is part of the same plan",
      "A test of each workflow before it is turned on",
      "Opt-out handling where a message goes to a customer",
    ],
    notIncluded: [
      "An automation platform built or owned by us",
      "AI chatbots or agents that talk to your customers on their own",
      "Unlimited custom integrations",
      "Accounting, payment, or dispatch connections, unless one is named and quoted",
      "Provider and messaging fees, which are billed in accounts you own",
      "A promise about how many enquiries will turn into customers",
    ],
    sections: [
      {
        title: "A workflow we can actually finish",
        body: "Each automation needs a trigger, an action, and a person responsible. We write those down before building. If a step cannot be described that clearly, it waits.",
        items: [
          "A website form saves the enquiry and emails you",
          "A new lead in the CRM creates a follow-up task",
          "A quiet quote is flagged after a number of days you choose",
        ],
      },
      {
        title: "Form to CRM",
        body: "When you want both a form and a CRM, we can connect them so the enquiry becomes a record. The fields we map are listed in the plan. We do not sync every tool you use by default.",
      },
    ],
  },
] as const satisfies readonly {
  slug: string;
  title: string;
  visual: "website" | "crm" | "automation";
  summary: string;
  lede: string;
  fit: string;
  limit: string;
  capabilities: readonly string[];
  included: readonly string[];
  notIncluded: readonly string[];
  sections: readonly {
    title: string;
    body: string;
    items?: readonly string[];
  }[];
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

export function serviceHref(slug: ServiceSlug): string {
  return `/services/${slug}`;
}
