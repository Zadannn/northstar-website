import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Missing page</p>
        <h1>That page is not on this concept.</h1>
        <p>
          <Link className="text-link" href="/">
            Back to the home page
          </Link>
        </p>
      </div>
    </section>
  );
}
