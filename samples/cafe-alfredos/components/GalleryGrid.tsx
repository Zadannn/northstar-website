const photos = [
  {
    src: "/images/hero-pizza.jpg",
    width: 1280,
    height: 720,
    alt: "Pepperoni pizza and garlic knots in a box, published on Cafe Alfredo's ordering page.",
  },
  {
    src: "/images/about-pasta.jpg",
    width: 450,
    height: 568,
    alt: "A plate of pasta with tomatoes, basil, and olive oil, published on Cafe Alfredo's about page. The photograph includes a We Deliver sticker.",
  },
];

const placeholders = [
  "Dining room",
  "Pizza counter",
  "Party room",
  "Catering tray",
];

export function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {photos.map((photo) => (
        <figure key={photo.src} className="gallery-photo">
          <img
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            loading="lazy"
          />
        </figure>
      ))}
      {placeholders.map((label) => (
        <figure key={label} className="gallery-placeholder">
          <figcaption>{label}</figcaption>
          <p>Photograph not yet provided</p>
        </figure>
      ))}
    </div>
  );
}
