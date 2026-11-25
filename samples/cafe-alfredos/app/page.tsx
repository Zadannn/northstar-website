import type { Metadata } from "next";
import Link from "next/link";
import { FoodCard } from "@/components/FoodCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { OrderLink } from "@/components/OrderLink";
import { Reveal } from "@/components/Reveal";
import { menu } from "@/data/menu";
import {
  ADDRESS_ONE_LINE,
  MAPS_DIRECTIONS,
  ORDER_NOTE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Cafe Alfredo's | Italian Restaurant & Pizzeria in Somerset",
  },
  description:
    "Concept design for Cafe Alfredo's at 1760 Easton Avenue, Somerset, NJ. Italian comfort food from family recipes. Not affiliated with the restaurant.",
  openGraph: {
    title: "Cafe Alfredo's | Italian Restaurant & Pizzeria in Somerset",
    description:
      "Concept design for Cafe Alfredo's at 1760 Easton Avenue, Somerset, NJ. Not affiliated with the restaurant.",
  },
};

const highlights = [
  ["chicken", "Chicken Parmigiana"],
  ["seafood", "Shrimp Scampi"],
  ["veal", "Veal Marsala"],
  ["house-specialties", "Eggplant Rollatini"],
  ["pasta", "Penne alla Vodka"],
  ["pizza", "Grandma Margarita Pizza"],
] as const;

function findDish(categoryId: string, name: string) {
  const category = menu.find((item) => item.id === categoryId);
  for (const group of category?.groups ?? []) {
    const dish = group.items.find((item) => item.name === name);
    if (dish) return { ...dish, category: category?.name ?? "" };
  }
  return undefined;
}

export default function HomePage() {
  const dishes = highlights
    .map(([categoryId, name]) => findDish(categoryId, name))
    .filter((dish): dish is NonNullable<typeof dish> => Boolean(dish));

  return (
    <>
      <section className="wrap hero">
        <div className="hero-copy">
          <p className="eyebrow">Somerset, New Jersey</p>
          <h1>Authentic Italian Comfort. Made With Tradition.</h1>
          <p className="lede">
            From family recipes passed down through generations to freshly
            prepared Italian favorites, experience the warmth of Cafe
            Alfredo&apos;s.
          </p>
          <div className="hero-actions">
            <OrderLink className="btn btn-accent">Order online</OrderLink>
            <Link className="btn btn-line" href="/menu/">
              Explore menu
            </Link>
          </div>
          <p className="fine-print">{ORDER_NOTE}</p>
        </div>
        <figure className="hero-photo">
          <img
            src="/images/hero-pizza.jpg"
            width={1280}
            height={720}
            alt="Pepperoni pizza and garlic knots in a box, published on Cafe Alfredo's ordering page."
            fetchPriority="high"
          />
        </figure>
      </section>

      <Reveal>
        <section className="section">
          <div className="wrap split">
            <div>
              <p className="eyebrow">The restaurant</p>
              <h2>A Somerset kitchen with a Sicilian start.</h2>
            </div>
            <div className="prose">
              <p>
                Cafe Alfredo&apos;s is an Italian restaurant and pizzeria at{" "}
                {ADDRESS_ONE_LINE}. Owner Giuseppe Rubino writes that he was
                born in Sicily, came to America at three, and learned to cook
                from his mother, who brought her recipes from Italy.
              </p>
              <p>
                <Link className="text-link" href="/story/">
                  Read the story
                </Link>
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section-olive">
          <div className="wrap">
            <p className="eyebrow">Signature dishes</p>
            <h2>From the published menu.</h2>
            <p className="lede">
              These dishes are on the restaurant&apos;s menu. Prices are not
              shown here, because the ordering site was not listing them.
            </p>
            <div className="card-grid">
              {dishes.map((dish) => (
                <FoodCard
                  key={dish.name}
                  meta={dish.category}
                  name={dish.name}
                  description={dish.description}
                />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Menu</p>
            <h2>Pizza, pasta, subs, and the rest of the kitchen.</h2>
            <div className="link-row">
              {menu.map((category) => (
                <Link key={category.id} href={`/menu/#${category.id}`}>
                  {category.name}
                </Link>
              ))}
            </div>
            <p>
              <Link className="text-link" href="/menu/">
                Explore the full menu
              </Link>
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section section-olive">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Heritage</p>
              <h2>Fresh ingredients, and his mother&apos;s way of cooking.</h2>
            </div>
            <div>
              <p>
                Giuseppe writes that he stayed with her standard of fresh
                ingredients, and that he wants guests to have a home-cooked
                meal like the ones from her kitchen. Franklin Township&apos;s
                restaurant listing says the restaurant was established in 1970.
              </p>
              <p>
                <Link className="text-link" href="/story/">
                  Our story
                </Link>
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Catering and parties</p>
              <h2>Platters, trays, and a private room for 60.</h2>
            </div>
            <div>
              <p>
                The restaurant caters off-site and books a private party room
                for up to 60 people. The published catering list includes
                sandwich and wrap platters, 3 ft and 6 ft subs, pasta trays,
                chicken and seafood, and a hot buffet. Call to discuss the
                menu. Prices are not listed on this concept.
              </p>
              <p>
                <Link className="text-link" href="/catering/">
                  Plan catering
                </Link>
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Gallery</p>
            <h2>Photographs published by the restaurant.</h2>
            <GalleryGrid />
            <p>
              <Link className="text-link" href="/gallery/">
                Open the gallery
              </Link>
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Location and hours</p>
              <h2>{ADDRESS_ONE_LINE}</h2>
              <p>
                <a className="text-link" href={PHONE_TEL}>
                  {PHONE_DISPLAY}
                </a>
              </p>
              <div className="hours-callout">
                <p>
                  <strong>Call to confirm hours.</strong>
                </p>
                <p>
                  The ordering site did not publish opening times, and it
                  showed online ordering as temporarily closed.
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
            </div>
            <div>
              <p>
                <Link className="text-link" href="/contact/">
                  Contact and map
                </Link>
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section section-olive">
        <div className="wrap">
          <p className="eyebrow">Visit or order</p>
          <h2>The kitchen is on Easton Avenue.</h2>
          <div className="hero-actions">
            <OrderLink className="btn btn-accent">Order online</OrderLink>
            <a className="btn btn-line-light" href={PHONE_TEL}>
              Call the restaurant
            </a>
          </div>
          <p className="attribution">{ORDER_NOTE}</p>
        </div>
      </section>
    </>
  );
}
