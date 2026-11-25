export function FoodCard({
  name,
  description,
  meta,
}: {
  name: string;
  description?: string;
  meta?: string;
}) {
  return (
    <article className="food-card">
      {meta ? <p className="eyebrow">{meta}</p> : null}
      <h3>{name}</h3>
      {description ? <p>{description}</p> : null}
    </article>
  );
}
