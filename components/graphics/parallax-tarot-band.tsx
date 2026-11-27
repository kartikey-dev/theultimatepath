"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import type { SiteAsset } from "@/lib/assets";

interface ParallaxTarotBandProps {
  eyebrow: string;
  heading: string;
  copy: string;
  image: SiteAsset;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ParallaxTarotBand({
  eyebrow,
  heading,
  copy,
  image,
  ctaLabel,
  ctaHref,
}: ParallaxTarotBandProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined") return;

    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    let rafId = 0;

    function updateParallax() {
      rafId = 0;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 800;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const shift = Math.max(-56, Math.min(56, -centerOffset * 0.14));
      el.style.setProperty("--parallax-y", `${shift.toFixed(1)}px`);
    }

    function onScroll() {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    }

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="parallax-band">
      <div className="parallax-band__bg" aria-hidden="true">
        <Image
          src={image.src}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="parallax-band__img"
        />
      </div>
      <div className="parallax-band__scrim" aria-hidden="true" />
      <CelestialOrbit tone="night" className="parallax-band__orbit" />

      <div className="container parallax-band__content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        <p className="parallax-band__copy">{copy}</p>
        {ctaLabel && ctaHref ? (
          <div className="parallax-band__actions">
            <Link href={ctaHref} className="btn btn-light">
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
