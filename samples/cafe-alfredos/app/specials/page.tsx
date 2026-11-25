import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SPECIALS_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Specials",
  description:
    "Daily specials described on Cafe Alfredo's ordering site, including weekday lunch discounts and pasta and chicken offers. Confirm the current offer there.",
};

const specials = [
  {
    title: "Corporate Monday and Corporate Friday",
    text: "Stop in between 10am and 2pm on Monday or Friday and take 10% off, dine-in or take-out.",
  },
  {
    title: "Monday and Sunday pizza nights",
    text: "Monday family night starts at 3pm with pizzas, wings, and a soda. Sunday is pizzas, garlic knots, and a soda, all day.",
  },
  {
    title: "Tuesday and Wednesday",
    text: "Tuesday, buy two dinners and the third is half off, all day. Wednesday from 3pm, the same deal applies to subs or wraps.",
  },
  {
    title: "Thursday pasta, Saturday chicken",
    text: "Thursday takes a little off any pasta or baked pasta entree. Saturday, the offer is on the chicken entrees.",
  },
];

export default function SpecialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specials"
        title="What the ordering site is saying."
        lede="These notes follow the restaurant's current specials page on its ordering site. Dollar prices for the pizza-night bundles are not printed there, so they are not printed here."
      />
      <section className="section">
        <div className="wrap special-list">
          {specials.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
          <p>
            Current specials are on the ordering site.{" "}
            <a href={SPECIALS_URL} target="_blank" rel="noopener noreferrer">
              Open daily specials
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
