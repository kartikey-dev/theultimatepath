import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { COMMUNITY_GALLERY_ASSETS } from "@/lib/assets";
import { ABOUT_CONTENT } from "@/lib/content";

export function ValuesGallery() {
  const { values } = ABOUT_CONTENT;

  return (
    <section id="values" className="editorial-band">
      <div className="container">
        <div className="split-band">
          <SectionHeading eyebrow={values.eyebrow} heading={values.heading} />

          <div className="prose-column">
            {values.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="surface-card">
              <span className="surface-card__index">
                {values.ngoName} · &ldquo;{values.ngoMotto}&rdquo;
              </span>
              <ul className="editorial-list">
                {values.ngoFocusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="photo-gallery-grid photo-gallery-grid--community">
          {COMMUNITY_GALLERY_ASSETS.map((asset) => (
            <figure key={asset.id} className="surface-card photo-card">
              <div className="photo-card__media photo-card__media--portrait">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  sizes="(max-width: 620px) 92vw, (max-width: 900px) 46vw, 240px"
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
  );
}
