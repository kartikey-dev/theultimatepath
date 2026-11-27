"use client";

import Image from "next/image";
import { useState } from "react";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import { SectionHeading } from "@/components/shared/section-heading";
import { TAROT_CRYSTALS, TAROT_READING } from "@/lib/assets";
import { TAROT_GUIDE } from "@/lib/tarot-guide";

export function TarotShowcaseSection() {
  const [activeId, setActiveId] = useState<string>(TAROT_GUIDE.showcaseCards[0].id);
  const activeCard =
    TAROT_GUIDE.showcaseCards.find((card) => card.id === activeId) ??
    TAROT_GUIDE.showcaseCards[0];

  return (
    <section
      id="tarot-cards"
      className="editorial-band editorial-band--forest editorial-band--celestial"
    >
      <CelestialOrbit tone="night" className="podcast-orbit" />
      <div className="container">
        <div className="tarot-showcase__top">
          <div>
            <SectionHeading
              eyebrow={TAROT_GUIDE.eyebrow}
              heading={TAROT_GUIDE.heading}
            />
            <div className="prose-column tarot-showcase__prose">
              {TAROT_GUIDE.introParagraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <div className="tarot-photo-pair">
              <figure className="tarot-photo-pair__item">
                <Image
                  src={TAROT_READING.src}
                  alt={TAROT_READING.alt}
                  width={TAROT_READING.width}
                  height={TAROT_READING.height}
                  loading="lazy"
                  sizes="(max-width: 720px) 46vw, 240px"
                />
              </figure>
              <figure className="tarot-photo-pair__item">
                <Image
                  src={TAROT_CRYSTALS.src}
                  alt={TAROT_CRYSTALS.alt}
                  width={TAROT_CRYSTALS.width}
                  height={TAROT_CRYSTALS.height}
                  loading="lazy"
                  sizes="(max-width: 720px) 46vw, 240px"
                />
              </figure>
            </div>
          </div>

          <div className="tarot-interactive">
            <p className="tarot-interactive__hint">
              Select a classic tarot card below to see how archetypes open a reflective conversation:
            </p>
            <div
              className="tarot-deck-fan"
              role="group"
              aria-label="Illustrative tarot card spread"
            >
              {TAROT_GUIDE.showcaseCards.map((card) => {
                const isSelected = card.id === activeCard.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    aria-pressed={isSelected}
                    className={`tarot-deck-card ${
                      isSelected ? "tarot-deck-card--active" : ""
                    }`}
                    onClick={() => setActiveId(card.id)}
                  >
                    <div className="tarot-deck-card__media">
                      <Image
                        src={card.image.src}
                        alt={card.image.alt}
                        width={card.image.width}
                        height={card.image.height}
                        loading="lazy"
                        sizes="(max-width: 640px) 42vw, 150px"
                      />
                    </div>
                    <span className="tarot-deck-card__name">{card.name}</span>
                    <span className="tarot-deck-card__arcana">{card.arcana}</span>
                  </button>
                );
              })}
            </div>

            <article className="tarot-reading-panel tarot-reading-panel--split" aria-live="polite">
              <div className="tarot-reading-panel__thumb">
                <Image
                  src={activeCard.image.src}
                  alt={activeCard.image.alt}
                  width={activeCard.image.width}
                  height={activeCard.image.height}
                  loading="lazy"
                  sizes="140px"
                />
              </div>
              <div>
                <p className="tarot-reading-panel__meta">
                  {activeCard.numeral} · {activeCard.arcana}
                </p>
                <h3>{activeCard.name}</h3>
                <p className="tarot-reading-panel__essence">{activeCard.essence}</p>
                <p className="tarot-reading-panel__impact">
                  <strong>Reflection value:</strong> {activeCard.reflectionImpact}
                </p>
                <p className="tarot-reading-panel__question">
                  <span>Question to sit with:</span> &ldquo;{activeCard.promptQuestion}&rdquo;
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="tarot-impact-block">
          <div className="section-heading">
            <p className="eyebrow">Reflective Impact</p>
            <h3>{TAROT_GUIDE.impactHeading}</h3>
            <p className="section-heading__lead">{TAROT_GUIDE.impactLead}</p>
          </div>

          <div className="tarot-impact-grid">
            {TAROT_GUIDE.impactPillars.map((pillar) => (
              <article key={pillar.number} className="tarot-impact-card">
                <span className="tarot-impact-card__index">{pillar.number}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
