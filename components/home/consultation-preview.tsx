import Link from "next/link";
import { ArcanaEmblem } from "@/components/graphics/arcana-emblem";
import { SectionHeading } from "@/components/shared/section-heading";
import { HOME_CONTENT } from "@/lib/content";

const CARD_VARIANTS = ["star", "moon", "sun"] as const;

export function ConsultationPreview() {
  const { consultations } = HOME_CONTENT;

  return (
    <section className="editorial-band">
      <div className="container">
        <div className="band-header">
          <SectionHeading
            eyebrow={consultations.eyebrow}
            heading={consultations.heading}
            lead={consultations.lead}
          />
          <Link href="/consultations" className="inline-link band-header__link">
            {consultations.ctaLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="card-grid card-grid--three">
          {consultations.items.map((item, idx) => (
            <article key={item.number} className="surface-card">
              <div className="surface-card__top">
                <span className="surface-card__index">{item.number}</span>
                <ArcanaEmblem variant={CARD_VARIANTS[idx % CARD_VARIANTS.length]} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <p className="surface-card__meta">{item.suitableFor}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
