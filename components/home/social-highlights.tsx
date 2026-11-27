import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { ARCHANA_READING_CARDS } from "@/lib/assets";
import { CURATED_INSTAGRAM_POSTS } from "@/lib/media";
import { SOCIAL_PROFILES } from "@/lib/site-config";

export function SocialHighlightsSection() {
  const featuredPosts = CURATED_INSTAGRAM_POSTS.slice(0, 3);

  return (
    <section className="editorial-band">
      <div className="container">
        <div className="band-header">
          <SectionHeading
            eyebrow="05 · Public Voice & Social"
            heading="Reflections shared across YouTube, Instagram, and Facebook."
            lead="Follow Archana's official channels directly without leaving the page weighed down by heavy social embeds."
          />
          <Link href="/media" className="inline-link band-header__link">
            Visit Media hub <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="card-grid card-grid--three">
          {featuredPosts.map((post) => {
            const thumb = post.thumbnail ?? ARCHANA_READING_CARDS;
            return (
              <article key={post.id} className="surface-card surface-card--social">
                <div className="media-card__thumb">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    width={thumb.width}
                    height={thumb.height}
                    loading="lazy"
                    sizes="(max-width: 720px) 92vw, 340px"
                  />
                </div>
                <p className="surface-card__index">
                  Instagram · {post.type === "reel" ? "Reel" : "Post"}
                </p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Open on Instagram <span aria-hidden="true">↗</span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="channel-strip" aria-label="Official social channels">
          {SOCIAL_PROFILES.map((profile) => (
            <a
              key={profile.id}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-pill"
            >
              <span>{profile.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
