import Image from "next/image";
import Link from "next/link";
import { TarotIllustration } from "@/components/graphics/tarot-illustration";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  ARCHANA_GALLERY_ASSETS,
  ARCHANA_PORTRAIT,
} from "@/lib/assets";
import { ABOUT_CONTENT } from "@/lib/content";
import { FEATURED_PODCAST } from "@/lib/media";

export function ArchanaStory() {
  return (
    <>
      <section className="editorial-band">
        <div className="container hero-editorial__grid">
          <div>
            <p className="eyebrow">{ABOUT_CONTENT.eyebrow}</p>
            <h1>{ABOUT_CONTENT.headline}</h1>
            <p className="hero-editorial__lead">{ABOUT_CONTENT.lead}</p>
            <div className="prose-column">
              {ABOUT_CONTENT.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="portrait-frame">
            <Image
              src={ARCHANA_PORTRAIT.src}
              alt={ARCHANA_PORTRAIT.alt}
              width={ARCHANA_PORTRAIT.width}
              height={ARCHANA_PORTRAIT.height}
              priority
              sizes="(max-width: 820px) 92vw, 440px"
            />
            <figcaption className="portrait-frame__caption">
              Archana Mahajan at her tarot reading table
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="editorial-band editorial-band--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Moments & Space"
            heading="In the consultation room and beyond."
            lead="Authentic photographs of Archana Mahajan in her reading space and personal moments."
          />
          <div className="photo-gallery-grid">
            {ARCHANA_GALLERY_ASSETS.map((asset) => (
              <figure key={asset.id} className="surface-card photo-card">
                <div className="photo-card__media">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    loading="lazy"
                    sizes="(max-width: 620px) 92vw, (max-width: 900px) 46vw, 260px"
                  />
                </div>
                <figcaption className="photo-card__caption">
                  {asset.caption ?? asset.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band">
        <div className="container">
          <SectionHeading
            eyebrow={ABOUT_CONTENT.approach.eyebrow}
            heading={ABOUT_CONTENT.approach.heading}
          />
          <div className="card-grid card-grid--three">
            {ABOUT_CONTENT.approach.principles.map((item) => (
              <article key={item.number} className="surface-card">
                <span className="surface-card__index">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band--ivory">
        <div className="container split-band">
          <div>
            <SectionHeading
              eyebrow={ABOUT_CONTENT.publicVoice.eyebrow}
              heading={ABOUT_CONTENT.publicVoice.heading}
            />
            <TarotIllustration
              variant="crescent"
              className="section-illustration"
            />
          </div>
          <div className="prose-column">
            <p>{ABOUT_CONTENT.publicVoice.copy}</p>
            <div className="hero-editorial__actions">
              <a
                href={FEATURED_PODCAST.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {ABOUT_CONTENT.publicVoice.podcastCta}
              </a>
              <Link href="/media" className="btn btn-secondary">
                {ABOUT_CONTENT.publicVoice.mediaCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
