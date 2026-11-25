export const RESTAURANT_NAME = "Cafe Alfredo's";

export const ADDRESS_LINES = [
  "1760 Easton Avenue",
  "Somerset, NJ 08873",
] as const;

export const ADDRESS_ONE_LINE = "1760 Easton Avenue, Somerset, NJ 08873";

export const PHONE_DISPLAY = "(732) 469-4422";
export const PHONE_TEL = "tel:+17324694422";
export const FAX_DISPLAY = "(732) 469-7044";

/** Canonical order entry. It redirects to the live Owner.com menu host. */
export const ORDER_URL = "https://ordersave.com/partnersite/gjA0IDZpfCyW/menu";

export const SPECIALS_URL =
  "https://ordersave.com/partnersite/gjA0IDZpfCyW/page/specials";

export const RESTAURANT_SITE = "https://cafealfredos.com/";

export const TOWNSHIP_LISTING =
  "https://www.franklintwpnj.org/departments/special-projects/restaurant-week/participating-restaurants";

export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS_ONE_LINE,
)}&z=16&output=embed`;

export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_ONE_LINE,
)}`;

export const ORDER_NOTE =
  "Online ordering was temporarily closed on the restaurant's ordering site when this concept was prepared. This button still opens that site.";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/story/", label: "Our Story" },
  { href: "/menu/", label: "Menu" },
  { href: "/catering/", label: "Catering" },
  { href: "/specials/", label: "Specials" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
] as const;

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT_NAME,
  servesCuisine: ["Italian", "Pizza"],
  url: RESTAURANT_SITE,
  hasMenu: ORDER_URL,
  telephone: "+1-732-469-4422",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1760 Easton Avenue",
    addressLocality: "Somerset",
    addressRegion: "NJ",
    postalCode: "08873",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.5338931,
    longitude: -74.5069601,
  },
};
