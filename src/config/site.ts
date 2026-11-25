/**
 * Single source of truth for the site.
 *
 * The business name is a placeholder. Change `name` here and every public
 * page follows. Leave `draft` true until launch. Leave `showPricing` false:
 * the figures in `internalDraftPrices` are not approved and must not be shown.
 *
 * `formEndpoint` stays empty until a form service address exists. While it is
 * empty the contact form stays disabled.
 */

export const site = {
  /** Placeholder business name. Do not hardcode this in pages. */
  name: "Northstar",
  /** Placeholder public address. */
  siteUrl: "https://example.com",
  description:
    "Professional websites, practical CRM setup, and business automation for companies that want clearer customer experiences and simpler day-to-day work.",
  /** Placeholder phone. */
  phoneDisplay: "(000) 000-0000",
  /** Placeholder telephone link. */
  phoneHref: "tel:+10000000000",
  /** Placeholder email. */
  email: "hello@example.com",
  /** Keep true until the site should be indexed. */
  draft: true,
  /**
   * Public prices are off. The figures below are kept for internal reference
   * only and are not approved for the website.
   */
  showPricing: false,
  internalDraftPrices: {
    note: "Not approved. Do not display while showPricing is false.",
    webDevelopment: "From $999 (most projects $999–$1,499)",
    websiteCare: "$79–$129 per month",
    leadFollowUp: "Setup from $700. Optional monthly management from $149",
  },
  /**
   * Optional logo file. Leave `src` empty to use the text wordmark, which
   * always reads `name`. Drop in a file later without editing the pages.
   */
  logo: {
    src: "",
    alt: "",
    width: 160,
    height: 32,
  },
  placeholders: {
    contact: true,
  },
  /** Paste a form service URL here to turn the enquiry form on. */
  formEndpoint: "",
  cta: {
    label: "Let's Talk About Your Project",
    href: "/contact",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "web-development",
    href: "/web-development",
    title: "Website Development",
    summary:
      "Professional websites designed to communicate your value, build trust and help customers take the next step.",
    points: [
      "Business websites",
      "Landing pages",
      "Website redesigns",
      "Responsive development",
      "Maintenance and updates",
    ],
    cta: "Explore Website Development",
  },
  {
    id: "crm",
    href: "/crm-automation#crm",
    title: "CRM Solutions",
    summary:
      "Practical customer-management solutions that help you organise enquiries, manage leads and keep important information in one place.",
    points: [
      "CRM setup",
      "Lead management",
      "Customer databases",
      "Sales pipeline organisation",
      "Business integrations",
    ],
    cta: "Explore CRM Solutions",
  },
  {
    id: "automation",
    href: "/crm-automation#automation",
    title: "Business Automation",
    summary:
      "Connected workflows that reduce repetitive tasks, improve follow-ups and help your business operate more efficiently.",
    points: [
      "Lead capture",
      "Automated notifications",
      "Follow-up workflows",
      "Integrations",
      "Process automation",
    ],
    cta: "Explore Business Automation",
  },
] as const;

export const problems = [
  {
    title: "Hard to find or understand online",
    text: "People cannot tell what you do, who you help, or what to do next.",
  },
  {
    title: "Enquiries are hard to track",
    text: "Messages sit across inboxes and notes, and some never get a reply.",
  },
  {
    title: "Repetitive admin consumes time",
    text: "The same details are copied from a form into a list, then into an email.",
  },
  {
    title: "Tools and processes do not work together",
    text: "The website, the customer list, and the follow-up each live somewhere else.",
  },
] as const;

export const flow = [
  {
    title: "Website Enquiry",
    text: "Someone sends a message from your site.",
  },
  {
    title: "Lead Capture",
    text: "The enquiry is saved instead of staying in an inbox.",
  },
  {
    title: "CRM Organisation",
    text: "It is filed with the other open leads.",
  },
  {
    title: "Automated Notification",
    text: "The right person is told.",
  },
  {
    title: "Follow-up",
    text: "A reply or reminder goes out so it does not go quiet.",
  },
] as const;

export const audiences = [
  {
    title: "Professional services",
    text: "A clear site and a record of who has been in touch.",
  },
  {
    title: "Home and local services",
    text: "Enquiries that are written down, not left to memory.",
  },
  {
    title: "Retail and e-commerce",
    text: "A trustworthy site and a cleaner way to handle questions.",
  },
  {
    title: "Consulting businesses",
    text: "Conversations that turn into a tracked next step.",
  },
  {
    title: "Independent professionals",
    text: "A straightforward presence and a simple way to enquire.",
  },
  {
    title: "Growing teams",
    text: "A shared view of leads once a single inbox is no longer enough.",
  },
] as const;

/** Short process used on the home page. */
export const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, goals, challenges and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We define the right solution, scope, deliverables and project direction.",
  },
  {
    number: "03",
    title: "Build",
    text: "We design, develop and configure the agreed solution.",
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "We test the work, prepare the handover and provide support according to the agreed scope.",
  },
] as const;

/** Fuller process used on How it works. */
export const detailedSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We learn how the business runs today, what should change, and which tools you already use. We ask who handles enquiries and where work gets repeated.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We write the scope: what will be designed, configured, or connected, what is not included, and how you will review it. Work starts from that written plan.",
  },
  {
    number: "03",
    title: "Development",
    text: "We design and build the website, set up the CRM, or configure the workflows we agreed. You see the work while it can still be adjusted.",
  },
  {
    number: "04",
    title: "Testing",
    text: "We check the pages on small and large screens, send test enquiries, and confirm notifications and records land where the plan says they should.",
  },
  {
    number: "05",
    title: "Launch",
    text: "We put the agreed work live, hand over access that belongs to you, and note how ordinary updates are made.",
  },
  {
    number: "06",
    title: "Support",
    text: "Support follows the scope. That can include a handover, a short settling-in period, or website maintenance with the limits written down. It is not an open-ended retainer unless that is what was agreed.",
  },
] as const;

export const principles = [
  {
    title: "Practical thinking",
    text: "We choose the smallest setup that does the job, using tools your team can run.",
  },
  {
    title: "Solutions built around your needs",
    text: "The website, the records, and the workflows follow how your business already works.",
  },
  {
    title: "Clear communication",
    text: "You see the scope, the deliverables, and what is not included before we build.",
  },
  {
    title: "Reliable execution",
    text: "We test the agreed work, hand it over, and support it within that scope.",
  },
] as const;

export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Small businesses, growing companies, independent professionals, and teams in professional services, local services, retail, consulting, and similar fields. The examples on the home page are examples, not a limit, and the work is not tied to one place. If a request sits outside what we deliver as a standard package, we say so.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Website development, CRM solutions, and business automation are three equal parts of the work. A project might need one of them, or all three so the site, the customer record, and the follow-up fit together.",
  },
  {
    question: "Can you help us organise customer enquiries?",
    answer:
      "Yes. That usually means configuring a CRM, naming the stages an enquiry moves through, and sending new website messages into that system. We set up and organise a practical CRM. A custom-built CRM platform is not a standard package.",
  },
  {
    question: "Can you automate repetitive business tasks?",
    answer:
      "Yes, when the task is specific and the tools can support it. Typical work is saving a form enquiry, sending an email notification, and starting a follow-up. We automate the workflow we agree. AI products, and complex integrations across many systems, are not part of a standard package.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. Maintenance and updates can be part of a website engagement: agreed content changes, checks after launch, and routine updates inside a written scope. It is not an unlimited change plan.",
  },
  {
    question: "How does your project process work?",
    answer:
      "We discover what you need, plan the scope and deliverables, build or configure the agreed solution, test it, launch it, and support it within that scope. The How it works page describes each step.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We talk through the requirements before we prepare a proposal. This site does not publish prices. We do not offer discounts, guarantees, or unlimited work as a package. Nothing starts until the scope is agreed.",
  },
  {
    question: "How do we get started?",
    answer:
      "Use the contact page. Call or email, or use the form when it is switched on. Tell us what you want to improve. We will reply with questions, and with a proposed scope if the work is a fit.",
  },
] as const;

export const projectTypes = [
  "Website development",
  "CRM solutions",
  "Business automation",
  "Not sure yet",
] as const;

export const legalPaths = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
] as const;

/** Paths that belong in the sitemap once the site is no longer a draft. */
export const publicPaths = [
  "/",
  "/services",
  "/web-development",
  "/crm-automation",
  "/how-it-works",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;
