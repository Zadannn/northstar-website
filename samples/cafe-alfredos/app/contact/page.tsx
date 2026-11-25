import type { Metadata } from "next";
import { OrderLink } from "@/components/OrderLink";
import { PageHeader } from "@/components/PageHeader";
import {
  ADDRESS_LINES,
  FAX_DISPLAY,
  MAPS_DIRECTIONS,
  MAPS_EMBED,
  ORDER_NOTE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Cafe Alfredo's is at 1760 Easton Avenue, Somerset, NJ 08873. Call (732) 469-4422. Hours were not published on the ordering site, so call to confirm.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Easton Avenue, Somerset."
        lede="Call the restaurant for hours, catering, and the party room. This concept does not take messages."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <p>
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <p>
              <a className="text-link" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>Fax {FAX_DISPLAY}</p>
            <div className="hours-callout">
              <p>
                <strong>Call to confirm hours.</strong>
              </p>
              <p>
                The ordering site listed the address and phone number, and did
                not list opening times.
              </p>
            </div>
            <p>
              <a
                className="text-link"
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </p>
            <p>
              <OrderLink className="btn btn-accent">Order online</OrderLink>
            </p>
            <p className="fine-print">{ORDER_NOTE}</p>
          </div>
          <iframe
            className="map-frame"
            title="Map of Cafe Alfredo's at 1760 Easton Avenue, Somerset, NJ"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
