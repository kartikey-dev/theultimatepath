"use client";

import Image from "next/image";
import { useState } from "react";
import { TAROT_CRYSTALS } from "@/lib/assets";

interface LazyFacebookTimelineProps {
  pageUrl: string;
}

export function LazyFacebookTimeline({ pageUrl }: LazyFacebookTimelineProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const encodedUrl = encodeURIComponent(pageUrl);

  return (
    <div className="surface-card">
      <div className="lazy-video__stage lazy-facebook__stage">
        {isLoaded ? (
          <iframe
            className="lazy-video__iframe"
            src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=420&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
            title="The Ultimate Path Facebook Page timeline"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="encrypted-media"
          />
        ) : (
          <div className="lazy-video__placeholder">
            <Image
              src={TAROT_CRYSTALS.src}
              alt={TAROT_CRYSTALS.alt}
              width={TAROT_CRYSTALS.width}
              height={TAROT_CRYSTALS.height}
              className="lazy-video__thumb"
              sizes="(max-width: 860px) 92vw, 520px"
            />
            <div className="lazy-video__scrim" aria-hidden="true" />
            <div className="lazy-video__content">
              <div className="lazy-video__badge">Facebook Business Page</div>
              <p className="lazy-video__title">
                Latest posts from The Ultimate Path on Facebook
              </p>
              <p className="lazy-video__note">
                Timeline embed loads from Facebook only when you choose to open it.
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setIsLoaded(true)}
              >
                Load Facebook Page timeline
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="lazy-video__actions">
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          Open Facebook Business Page <span aria-hidden="true">↗</span>
        </a>
        {isLoaded ? (
          <button
            type="button"
            className="text-button"
            onClick={() => setIsLoaded(false)}
          >
            Close timeline
          </button>
        ) : null}
      </div>
    </div>
  );
}
