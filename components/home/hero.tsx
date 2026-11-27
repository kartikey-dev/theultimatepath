import Image from "next/image";
import Link from "next/link";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import {
  ARCHANA_PORTRAIT,
  TAROT_CRYSTALS,
  TAROT_READING,
} from "@/lib/assets";
import { HOME_CONTENT } from "@/lib/content";

export function HeroSection() {
  const { hero } = HOME_CONTENT;

  return (
    <section className="hero-editorial">
      <div className="container hero-editorial__grid">
        <div className="hero-editorial__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="hero-editorial__lead">{hero.lead}</p>
          <div className="hero-editorial__actions">
            <Link href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </Link>
          </div>
          <p className="hero-editorial__footnote">{hero.footnote}</p>
        </div>

        <div className="hero-stage-editorial">
          <CelestialOrbit tone="paper" className="hero-stage-editorial__orbit" />

          <div className="tarot-spread" aria-hidden="true">
            <div className="tarot-spread__flank tarot-spread__flank--left">
              <Image
                src={TAROT_READING.src}
                alt=""
                width={TAROT_READING.width}
                height={TAROT_READING.height}
                sizes="(max-width: 820px) 34vw, 190px"
              />
            </div>
            <div className="tarot-spread__flank tarot-spread__flank--right">
              <Image
                src={TAROT_CRYSTALS.src}
                alt=""
                width={TAROT_CRYSTALS.width}
                height={TAROT_CRYSTALS.height}
                sizes="(max-width: 820px) 34vw, 190px"
              />
            </div>
          </div>

          <figure className="portrait-frame hero-editorial__media">
            <span className="portrait-frame__arcana" aria-hidden="true">
              <span>XVII · THE STAR</span>
              <span>✦</span>
            </span>
            <Image
              src={ARCHANA_PORTRAIT.src}
              alt={ARCHANA_PORTRAIT.alt}
              width={ARCHANA_PORTRAIT.width}
              height={ARCHANA_PORTRAIT.height}
              priority
              sizes="(max-width: 820px) 84vw, 360px"
            />
            <figcaption className="portrait-frame__caption">
              Archana Mahajan · The Ultimate Path
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
