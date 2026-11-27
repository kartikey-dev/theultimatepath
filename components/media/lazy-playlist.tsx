"use client";

import Image from "next/image";
import { useState } from "react";
import { ARCHANA_READING_CARDS } from "@/lib/assets";

interface LazyPlaylistProps {
  playlistId: string;
  channelUrl: string;
}

export function LazyPlaylist({ playlistId, channelUrl }: LazyPlaylistProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="surface-card">
      <div className="lazy-video__stage">
        {isLoaded ? (
          <iframe
            className="lazy-video__iframe"
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`}
            title="Archana Mahajan YouTube uploads playlist"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="lazy-video__placeholder">
            <Image
              src={ARCHANA_READING_CARDS.src}
              alt={ARCHANA_READING_CARDS.alt}
              width={ARCHANA_READING_CARDS.width}
              height={ARCHANA_READING_CARDS.height}
              className="lazy-video__thumb"
              sizes="(max-width: 860px) 92vw, 720px"
            />
            <div className="lazy-video__scrim" aria-hidden="true" />
            <div className="lazy-video__content">
              <div className="lazy-video__badge">YouTube Channel Uploads</div>
              <p className="lazy-video__title">
                Watch tarot guidance videos from Archana Mahajan
              </p>
              <p className="lazy-video__note">
                Playlist embeds load from YouTube only when requested.
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setIsLoaded(true)}
              >
                <span aria-hidden="true">▶</span> Load YouTube uploads playlist
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="lazy-video__actions">
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          Visit YouTube channel (@ArchanaMahajan-rg5hq){" "}
          <span aria-hidden="true">↗</span>
        </a>
        {isLoaded ? (
          <button
            type="button"
            className="text-button"
            onClick={() => setIsLoaded(false)}
          >
            Close playlist
          </button>
        ) : null}
      </div>
    </div>
  );
}
