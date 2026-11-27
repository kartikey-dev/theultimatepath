import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="editorial-band">
      <div className="container page-intro">
        <p className="eyebrow">404 · Page not found</p>
        <h1>That path could not be found.</h1>
        <p className="hero-editorial__lead">
          The page you requested may have moved or does not exist. Return to
          Home or reach out directly on the Connect page.
        </p>
        <div className="hero-editorial__actions">
          <Link href="/" className="btn btn-primary">
            Return Home
          </Link>
          <Link href="/connect" className="btn btn-secondary">
            Go to Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
