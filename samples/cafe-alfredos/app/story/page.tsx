import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TOWNSHIP_LISTING } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Giuseppe Rubino's account of Cafe Alfredo's: born in Sicily, raised on his mother's Italian cooking, and cooking in Somerset, NJ.",
};

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="From his mother's kitchen."
        lede="This account follows the history page Giuseppe Rubino published on Cafe Alfredo's website."
      />
      <section className="section">
        <div className="wrap story-grid">
          <div className="prose">
            <p>
              I was born in Sicily and came to America with my family when I
              was three years old. My mother brought recipes she learned in
              Italy and cooked those dishes for us every day.
            </p>
            <p>
              As a boy I watched her cook on weekends. I loved the aromas, and
              the way she blended ingredients. She often let me help, and I
              still treasure that.
            </p>
            <p>
              When I was older I cooked sausage, peppers and onions, and
              chicken parmigiana on my own. I kept her standard of fresh
              ingredients, and her care for Italian cooking.
            </p>
            <p>
              I was working in restaurants before I had a driver&apos;s
              license, in delis, bakeries, and pizzerias. I knew early that
              this was the work I wanted.
            </p>
            <p>
              At Cafe Alfredo&apos;s my aim is more than dishes made with good
              ingredients at fair prices. I want a home-cooked meal like the
              ones I made in my mother&apos;s kitchen.
            </p>
            <p>Enjoy.</p>
            <p>
              <strong>Giuseppe Rubino</strong>
              <br />
              Owner, Cafe Alfredo&apos;s
            </p>
            <p className="attribution">
              Franklin Township&apos;s restaurant listing says Cafe
              Alfredo&apos;s was established in 1970. That year is not on the
              restaurant&apos;s own about page.{" "}
              <a href={TOWNSHIP_LISTING} target="_blank" rel="noopener noreferrer">
                Township listing
              </a>
            </p>
          </div>
          <figure className="story-photo">
            <img
              src="/images/about-pasta.jpg"
              width={450}
              height={568}
              alt="A plate of pasta with tomatoes, basil, and olive oil, published on Cafe Alfredo's about page. The photograph includes a We Deliver sticker."
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
