"use client";

import Image from "next/image";
import { useState } from "react";
import { ArcanaEmblem } from "@/components/graphics/arcana-emblem";
import { ARCHANA_READING_CARDS } from "@/lib/assets";
import type { InstagramItem } from "@/lib/media";

interface SocialCardProps {
  item: InstagramItem;
  emblem?: "star" | "moon" | "sun" | "leaf";
}

export function SocialCard({ item, emblem = "moon" }: SocialCardProps) {
  const [showEmbed, setShowEmbed] = useState(false);
  const typeLabel = item.type === "reel" ? "Instagram Reel" : "Instagram Post";
  const canEmbed = /^[A-Za-z0-9_-]{6,25}$/.test(item.id);
  const thumb = item.thumbnail ?? ARCHANA_READING_CARDS;

  return (
    <article className="surface-card surface-card--media">
      <div className="media-card__thumb">
        <Image
          src={thumb.src}
          alt={thumb.alt}
          width={thumb.width}
          height={thumb.height}
          loading="lazy"
          sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 340px"
        />
        <span className="media-card__badge-chip">
          {item.type === "reel" ? "Reel" : "Post"}
        </span>
      </div>

      <div className="surface-card__top">
        <span className="surface-card__index">{typeLabel}</span>
        <ArcanaEmblem variant={emblem} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>

      {showEmbed && canEmbed ? (
        <div className="instagram-embed-frame">
          <iframe
            title={`${item.title} (${item.id})`}
            src={`https://www.instagram.com/${item.type}/${item.id}/embed/`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : null}

      <div className="surface-card__meta social-card__actions">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          Open {typeLabel.toLowerCase()} ({item.id}){" "}
          <span aria-hidden="true">↗</span>
        </a>
        {canEmbed ? (
          <button
            type="button"
            className="text-button"
            onClick={() => setShowEmbed((prev) => !prev)}
          >
            {showEmbed ? "Hide preview" : "Preview embed"}
          </button>
        ) : null}
      </div>
    </article>
  );
}
