import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs published on Cafe Alfredo's website and ordering page, plus labelled spaces for pictures the restaurant has not published here.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Only photographs the restaurant has published."
        lede="The pizza and pasta pictures are from Cafe Alfredo's site and ordering page. Empty frames are waiting for real photographs. Nothing here was generated."
      />
      <div className="wrap">
        <GalleryGrid />
      </div>
    </>
  );
}
