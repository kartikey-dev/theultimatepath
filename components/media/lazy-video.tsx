"use client";

import Image from "next/image";
import { useState } from "react";
import { PODCAST_THUMBNAIL } from "@/lib/assets";

interface LazyVideoProps {
  videoId: string;
  title: string;
  publisher: string;
  watchUrl: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

export function LazyVideo({
  videoId,
  title,
  publisher,
  watchUrl,
  thumbnailSrc,
  thumbnailAlt,
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const resolvedThumb =
    thumbnailSrc ??
    (videoId === "2B01dacOGwM"
      ? PODCAST_THUMBNAIL.src
      : `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`);
  const resolvedAlt =
    thumbnailAlt ?? `${publisher} podcast video thumbnail — ${title}`;

  return (
    <div className="lazy-video">
      <div className="lazy-video__stage">
        {isLoaded ? (
          <iframe
            className="lazy-video__iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={`${title} — ${publisher}`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="lazy-video__placeholder">
            <Image
              src={resolvedThumb}
              alt={resolvedAlt}
              width={PODCAST_THUMBNAIL.width}
              height={PODCAST_THUMBNAIL.height}
              className="lazy-video__thumb"
              sizes="(max-width: 860px) 92vw, 560px"
            />
            <div className="lazy-video__scrim" aria-hidden="true" />
            <div className="lazy-video__content">
              <div className="lazy-video__badge">{publisher}</div>
              <p className="lazy-video__title">{title}</p>
              <p className="lazy-video__note">
                Video player loads from YouTube only when you choose to play it.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsLoaded(true)}
              >
                <span aria-hidden="true">▶</span> Play featured video
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="lazy-video__actions">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
        {isLoaded ? (
          <button
            type="button"
            className="text-button"
            onClick={() => setIsLoaded(false)}
          >
            Close player
          </button>
        ) : null}
      </div>
    </div>
  );
}
