/**
 * Facts and palettes for the three sample pitches.
 * Pages read this file. They do not hard-code a business or a colour.
 * Do not add prices, awards, years in business, street addresses, or claims
 * that are not already written here.
 */

export type Palette = {
  accent: string;
  accentHover: string;
  accentSoft: string;
  focus: string;
  bgInverse: string;
  inverseMuted: string;
  lineInverse: string;
};

export type SampleService = {
  slug: string;
  title: string;
  text: string;
};

export type SampleArea = {
  title: string;
  text: string;
};

export type SampleReviews =
  | { kind: "rating"; line: string; href: string }
  | { kind: "samples"; items: readonly string[] };

export type SampleSite = {
  id: "salacki" | "barker" | "demo-painter";
  base: string;
  name: string;
  banner: string;
  homeTitle: string;
  homeDescription: string;
  quoteDescription: string;
  eyebrow: string;
  heroTitle: string;
  lede: string;
  phoneDisplay: string;
  phoneHref: string;
  email?: string;
  /** Exact hours text shown in the footer. */
  hours: string;
  /** When true, `hours` sits under a Hours label. */
  hoursUnderHeading: boolean;
  locationLine: string;
  servicesNote?: string;
  services: readonly SampleService[];
  areaNote: string;
  areas: readonly SampleArea[];
  reviews: SampleReviews;
  quoteLede: string;
  palette: Palette;
};

export function paletteStyle(palette: Palette): string {
  return [
    `--color-accent:${palette.accent}`,
    `--color-accent-hover:${palette.accentHover}`,
    `--color-accent-soft:${palette.accentSoft}`,
    `--color-focus:${palette.focus}`,
    `--color-bg-inverse:${palette.bgInverse}`,
    `--color-inverse-muted:${palette.inverseMuted}`,
    `--color-line-inverse:${palette.lineInverse}`,
  ].join(";");
}

export function quotePath(site: SampleSite): string {
  return `${site.base}quote/`;
}

export function siteNav(site: SampleSite): readonly { href: string; label: string }[] {
  return [
    { href: site.base, label: "Home" },
    { href: `${site.base}#services`, label: "Services" },
    { href: `${site.base}#areas`, label: "Areas" },
    { href: quotePath(site), label: "Quote" },
  ];
}

const salacki: SampleSite = {
  id: "salacki",
  base: "/salacki/",
  name: "Salacki Painting & Spackling",
  banner: "Concept design by Northstar, not affiliated with Salacki Painting & Spackling.",
  homeTitle: "Residential painting in Bound Brook, NJ",
  homeDescription:
    "Concept design for Salacki Painting & Spackling, residential painting in Bound Brook, NJ and Somerset County.",
  quoteDescription:
    "Request a free quote from Salacki Painting & Spackling in Bound Brook, NJ. Demo form, not active.",
  eyebrow: "Residential painting",
  heroTitle: "Residential painting in Bound Brook, NJ",
  lede: "Salacki Painting & Spackling is a residential painting business in Bound Brook, NJ, in Somerset County. This concept site covers Bound Brook and Somerset County only.",
  phoneDisplay: "(908) 208-2603",
  phoneHref: "tel:+19082082603",
  hours: "Hours: call to confirm",
  hoursUnderHeading: false,
  locationLine: "Bound Brook, NJ · Somerset County",
  services: [
    {
      slug: "interior-painting",
      title: "Interior painting",
      text: "Painting rooms inside a home.",
    },
    {
      slug: "exterior-painting",
      title: "Exterior painting",
      text: "Painting the outside of a home.",
    },
    {
      slug: "spackling",
      title: "Spackling and drywall repair",
      text: "Spackling and repairing drywall.",
    },
    {
      slug: "wallpapering",
      title: "Wallpapering",
      text: "Wallpapering.",
    },
  ],
  areaNote: "Bound Brook and Somerset County only.",
  areas: [
    { title: "Bound Brook", text: "Bound Brook, NJ." },
    { title: "Somerset County", text: "Somerset County, NJ." },
  ],
  reviews: {
    kind: "rating",
    line: "Rated 4.8 on public review sites",
    href: "https://reviews.birdeye.com/salacki-painting-wallpapering-167024793174677",
  },
  quoteLede: "Describe the painting work and the town.",
  palette: {
    accent: "#8d3f30",
    accentHover: "#703225",
    accentSoft: "#f8eee9",
    focus: "#8d3f30",
    bgInverse: "#2a1c18",
    inverseMuted: "#e4d5ce",
    lineInverse: "#4a3832",
  },
};

const barker: SampleSite = {
  id: "barker",
  base: "/barker/",
  name: "Barker Landscaping",
  banner: "Concept design by Northstar, not affiliated with Barker Landscaping.",
  homeTitle: "Landscaping in Plainfield, NJ",
  homeDescription:
    "Concept design for Barker Landscaping in Plainfield, NJ. Landscaping, lawn care, and seasonal cleanups are listed to be confirmed with the owner.",
  quoteDescription:
    "Request a free quote from Barker Landscaping in Plainfield, NJ. Demo form, not active.",
  eyebrow: "Landscaping",
  heroTitle: "Landscaping in Plainfield, NJ",
  lede: "Barker Landscaping is a landscaping business in Plainfield, NJ, in Union County. This concept site covers Plainfield only.",
  phoneDisplay: "(908) 731-2714",
  phoneHref: "tel:+19087312714",
  hours: "Call to confirm",
  hoursUnderHeading: true,
  locationLine: "Plainfield, NJ · Union County",
  servicesNote: "Services to be confirmed with owner",
  services: [
    {
      slug: "landscaping",
      title: "Landscaping",
      text: "Listed here as a general landscaping service.",
    },
    {
      slug: "lawn-care",
      title: "Lawn care",
      text: "Listed here as lawn care.",
    },
    {
      slug: "seasonal-cleanups",
      title: "Seasonal cleanups",
      text: "Listed here as a seasonal cleanup.",
    },
  ],
  areaNote: "Plainfield only.",
  areas: [{ title: "Plainfield", text: "Plainfield, NJ, in Union County." }],
  reviews: {
    kind: "rating",
    line: "Rated 5.0 on Google",
    href: "https://www.contractorsranked.com/contractor/plainfield-nj/barker-landscaping",
  },
  quoteLede: "Describe the property and confirm the town is Plainfield.",
  palette: {
    accent: "#1e6a43",
    accentHover: "#175536",
    accentSoft: "#e7f3ec",
    focus: "#1e6a43",
    bgInverse: "#14241c",
    inverseMuted: "#cfe0d6",
    lineInverse: "#2d4639",
  },
};

const demoPainter: SampleSite = {
  id: "demo-painter",
  base: "/demo-painter/",
  name: "Haldenmere Painting Co.",
  banner: "Demo website, fictional business",
  homeTitle: "House painting in Somerset, NJ",
  homeDescription:
    "Demo website for Haldenmere Painting Co., a fictional painting business in Somerset, Bridgewater, Hillsborough, and Franklin Township.",
  quoteDescription:
    "Request a free quote from Haldenmere Painting Co., a fictional business. Demo form, not active.",
  eyebrow: "House painting",
  heroTitle: "House painting in Somerset, NJ",
  lede: "Haldenmere Painting Co. is a fictional painting company for this public demo. The towns on this site are Somerset, Bridgewater, Hillsborough, and Franklin Township.",
  phoneDisplay: "(555) 010-0142",
  phoneHref: "tel:+15550100142",
  email: "hello@example.com",
  hours: "Hours: call to confirm",
  hoursUnderHeading: false,
  locationLine: "Somerset, Bridgewater, Hillsborough, Franklin Township",
  servicesNote: "Sample services for this fictional business.",
  services: [
    {
      slug: "interior-painting",
      title: "Interior painting",
      text: "Painting rooms inside a home.",
    },
    {
      slug: "exterior-painting",
      title: "Exterior painting",
      text: "Painting the outside of a home.",
    },
    {
      slug: "trim-painting",
      title: "Trim painting",
      text: "Painting trim.",
    },
  ],
  areaNote: "Somerset, Bridgewater, Hillsborough, and Franklin Township.",
  areas: [
    { title: "Somerset", text: "Somerset, NJ." },
    { title: "Bridgewater", text: "Bridgewater, NJ." },
    { title: "Hillsborough", text: "Hillsborough, NJ." },
    { title: "Franklin Township", text: "Franklin Township, NJ." },
  ],
  reviews: {
    kind: "samples",
    items: [
      "They covered the floors and painted the bedroom walls.",
      "We chose a colour, and they painted the living room.",
      "The hallway and the trim were painted in the same visit.",
    ],
  },
  quoteLede: "Describe the painting work and the town. Haldenmere Painting Co. is not a real business.",
  palette: {
    accent: "#0e5f72",
    accentHover: "#0b4c5b",
    accentSoft: "#e6f4f7",
    focus: "#0e5f72",
    bgInverse: "#102328",
    inverseMuted: "#c7dde3",
    lineInverse: "#234049",
  },
};

export const sites = {
  salacki,
  barker,
  demoPainter,
} as const;
