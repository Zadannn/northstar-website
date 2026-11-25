import type { Metadata } from "next";
import localFont from "next/font/local";
import { OrderBar } from "@/components/OrderBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { restaurantJsonLd } from "@/data/site";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const playfair = localFont({
  src: [
    {
      path: "../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const description =
  "Concept design for Cafe Alfredo's, an Italian restaurant and pizzeria at 1760 Easton Avenue, Somerset, NJ. Not affiliated with the restaurant.";

export const metadata: Metadata = {
  title: {
    default: "Cafe Alfredo's | Italian Restaurant & Pizzeria in Somerset",
    template: "%s | Cafe Alfredo's",
  },
  description,
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cafe Alfredo's | Italian Restaurant & Pizzeria in Somerset",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Cafe Alfredo's",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <p className="concept-banner" role="note">
          Concept design by Northstar, not affiliated with Cafe Alfredo&apos;s
        </p>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <OrderBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
