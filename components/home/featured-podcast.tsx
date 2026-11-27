import Link from "next/link";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import { LazyVideo } from "@/components/media/lazy-video";
import { SectionHeading } from "@/components/shared/section-heading";
import { FEATURED_PODCAST } from "@/lib/media";

export function FeaturedPodcastSection() {
  return (
    <section className="editorial-band editorial-band--forest editorial-band--celestial">
      <CelestialOrbit tone="night" className="podcast-orbit" />
      <div className="container podcast-grid">
        <div className="podcast-grid__copy">
          <SectionHeading
            eyebrow={`04 · ${FEATURED_PODCAST.badge}`}
            heading={FEATURED_PODCAST.title}
          />
          <p className="podcast-grid__meta">
            Hosted by{" "}
            <a
              href={FEATURED_PODCAST.publisherUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              {FEATURED_PODCAST.publisher}
            </a>{" "}
            · Published {FEATURED_PODCAST.publishedLabel}
          </p>
          <p className="podcast-grid__synopsis">{FEATURED_PODCAST.synopsis}</p>
          <div className="podcast-grid__links">
            <Link href="/media" className="btn btn-light">
              Explore all media
            </Link>
          </div>
        </div>

        <LazyVideo
          videoId={FEATURED_PODCAST.videoId}
          title={FEATURED_PODCAST.title}
          publisher={FEATURED_PODCAST.publisher}
          watchUrl={FEATURED_PODCAST.watchUrl}
          thumbnailSrc={FEATURED_PODCAST.thumbnail.src}
          thumbnailAlt={FEATURED_PODCAST.thumbnail.alt}
        />
      </div>
    </section>
  );
}
