import type { Metadata } from "next";
import { CateringForm } from "@/components/CateringForm";
import { PageHeader } from "@/components/PageHeader";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Catering and a private party room for up to 60 at Cafe Alfredo's in Somerset, NJ. Call (732) 469-4422. The inquiry form is a demo and does not send data.",
};

const offerings = [
  {
    title: "Sandwich and wrap platters",
    text: "The catering page lists sandwich and deli wrap platters, including roast beef, turkey, ham, salami, capicola, and tuna.",
  },
  {
    title: "3 ft and 6 ft subs",
    text: "Ham and cheese, turkey and cheese, roast beef and cheese, tuna and cheese, plus specialty subs. The page says they are garnished with lettuce, tomato, and seasoning, with condiments on the side.",
  },
  {
    title: "Pasta trays",
    text: "Published trays include stuffed shells, ziti, baked ziti, manicotti, lasagna, tortellini, ravioli, penne alla vodka, fettuccine Alfredo, and cavatelli and broccoli.",
  },
  {
    title: "Chicken and seafood",
    text: "Chicken preparations include marsala, piccata, francese, parmigiana, and others. Seafood trays include calamari, shrimp, mussels, and a seafood combination.",
  },
  {
    title: "Hot buffet",
    text: "The catering page describes a hot buffet with a choice of entrees, plus salad, dinner rolls, and butter.",
  },
  {
    title: "Private party room",
    text: "The restaurant says its private party room caters to up to 60 people. Call to book.",
  },
];

export default function CateringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catering"
        title="Office lunches, gatherings, and a room for 60."
        lede="The restaurant invites guests to plan off-premise catering or a private party, and asks them to call."
      />
      <section className="section">
        <div className="wrap catering-layout">
          <div>
            <p>
              Published occasions include parties, office lunches, family
              gatherings, and other events. Birthdays can be requested on the
              demo form. This page does not list catering prices.
            </p>
            <ul className="offer-list">
              {offerings.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
            <p>
              The restaurant&apos;s catering page says many packages include
              pickles, condiments, and disposable paper service, and a choice
              of pasta salad, tossed salad, Caesar salad, macaroni salad, or
              cole slaw. The ordering site&apos;s catering notes say plates,
              napkins, and cutlery are not provided and to call about service
              and dietary needs. Call to confirm what is included.
            </p>
            <p>
              The ordering site says catering orders need 24 hours of notice.
            </p>
            <p>
              <a className="btn btn-accent" href={PHONE_TEL}>
                Call to discuss catering
              </a>
            </p>
            <p className="fine-print">{PHONE_DISPLAY}</p>
          </div>
          <CateringForm />
        </div>
      </section>
    </>
  );
}
