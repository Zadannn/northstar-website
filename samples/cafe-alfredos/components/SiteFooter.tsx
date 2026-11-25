import Link from "next/link";
import { OrderLink } from "@/components/OrderLink";
import {
  ADDRESS_LINES,
  FAX_DISPLAY,
  nav,
  PHONE_DISPLAY,
  PHONE_TEL,
  RESTAURANT_SITE,
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">Cafe Alfredo&apos;s</p>
          <p>
            {ADDRESS_LINES[0]}
            <br />
            {ADDRESS_LINES[1]}
          </p>
          <p>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          </p>
          <p>Fax {FAX_DISPLAY}</p>
        </div>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-actions">
          <OrderLink className="btn btn-accent">Order online</OrderLink>
          <a
            className="text-link"
            href={RESTAURANT_SITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Restaurant website
          </a>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>
          Concept design by Northstar. Not affiliated with Cafe Alfredo&apos;s.
          This is not the restaurant&apos;s website, and it does not take
          orders.
        </p>
      </div>
    </footer>
  );
}
