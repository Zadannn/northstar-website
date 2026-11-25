import type { Metadata } from "next";
import { MenuBrowser } from "@/components/MenuBrowser";
import { PageHeader } from "@/components/PageHeader";
import { menu } from "@/data/menu";
import { ORDER_NOTE } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Cafe Alfredo's published menu: pizza, appetizers, salads, subs, wraps, pasta, chicken, veal, seafood, desserts, and drinks. Prices are not shown.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="What the kitchen lists."
        lede="Item names come from the restaurant's menu pages. Prices are left off because the ordering site was not publishing a priced menu."
      />
      <div className="wrap prose">
        <p>{ORDER_NOTE}</p>
        <p>
          The restaurant&apos;s menu page says a 3.99% customer service charge
          is applied to store sales, with a matching cash discount. It also
          says the restaurant serves Boar&apos;s Head products.
        </p>
      </div>
      <MenuBrowser categories={menu} />
    </>
  );
}
