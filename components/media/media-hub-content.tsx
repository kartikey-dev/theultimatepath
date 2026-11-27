import Image from "next/image";
import Link from "next/link";
import { ArcanaEmblem } from "@/components/graphics/arcana-emblem";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import { TarotDivider } from "@/components/graphics/tarot-divider";
import { LazyFacebookTimeline } from "@/components/media/lazy-facebook-timeline";
import { LazyPlaylist } from "@/components/media/lazy-playlist";
import { LazyVideo } from "@/components/media/lazy-video";
import { SocialCard } from "@/components/media/social-card";
import { Disclaimer } from "@/components/shared/disclaimer";
import { SectionHeading } from "@/components/shared/section-heading";
import { ARCHANA_CONSULTATION_DESK } from "@/lib/assets";
import {
  CURATED_FACEBOOK_POSTS,
  CURATED_INSTAGRAM_POSTS,
  FEATURED_PODCAST,
  YOUTUBE_UPLOADS_PLAYLIST,
  type InstagramItem,
} from "@/lib/media";
import { SOCIAL_PROFILES } from "@/lib/site-config";
import type { FacebookFeedPost, YouTubeFeedItem } from "@/lib/social-feeds";

interface MediaHubContentProps {
  youtubeVideos: readonly YouTubeFeedItem[];
  instagramItems: readonly InstagramItem[];
  facebookPosts: readonly FacebookFeedPost[];
}

const EMBLEMS = ["star", "moon", "sun", "leaf"] as const;

export function MediaHubContent({
  youtubeVideos,
  instagramItems,
  facebookPosts,
}: MediaHubContentProps) {
  const youtubeProfile = SOCIAL_PROFILES.find((p) => p.id === "youtube")!;
  const instagramProfile = SOCIAL_PROFILES.find((p) => p.id === "instagram")!;
  const fbBusiness = SOCIAL_PROFILES.find((p) => p.id === "facebook-business")!;

  const displayedInstagram =
    instagramItems.length > 0 ? instagramItems : CURATED_INSTAGRAM_POSTS;

  const displayedFacebook: readonly FacebookFeedPost[] =
    facebookPosts.length > 0
      ? facebookPosts
      : CURATED_FACEBOOK_POSTS.map((post) => ({
          id: post.id,
          title: post.title,
          message: post.message,
          createdLabel: post.createdLabel,
          permalinkUrl: post.permalinkUrl,
          thumbnailUrl: post.thumbnail.src,
        }));

  return (
    <>
      <section className="editorial-band editorial-band--relative">
        <CelestialOrbit tone="paper" className="connect-orbit-bg" />
        <div className="container page-intro">
          <p className="eyebrow">Media &amp; Social</p>
          <h1>Videos, podcasts, and social reflections</h1>
          <p className="hero-editorial__lead">
            Explore Archana Mahajan&apos;s featured Soulful Moms of India
            podcast alongside dedicated sections for her latest YouTube uploads,
            Instagram posts, and Facebook updates.
          </p>
        </div>
      </section>

      <section className="editorial-band editorial-band--forest editorial-band--celestial">
        <CelestialOrbit tone="night" className="podcast-orbit" />
        <div className="container podcast-grid">
          <div>
            <SectionHeading
              eyebrow={FEATURED_PODCAST.badge}
              heading={FEATURED_PODCAST.title}
            />
            <p className="podcast-grid__meta">
              Hosted by{" "}
              <a
                href={FEATURED_PODCAST.publisherUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                {FEATURED_PODCAST.publisher}
              </a>{" "}
              · Published {FEATURED_PODCAST.publishedLabel}
            </p>
            <p className="podcast-grid__synopsis">{FEATURED_PODCAST.synopsis}</p>
          </div>

          <LazyVideo
            videoId={FEATURED_PODCAST.videoId}
            title={FEATURED_PODCAST.title}
            publisher={FEATURED_PODCAST.publisher}
            watchUrl={FEATURED_PODCAST.watchUrl}
            thumbnailSrc={FEATURED_PODCAST.thumbnail.src}
            thumbnailAlt={FEATURED_PODCAST.thumbnail.alt}
          />
        </div>
      </section>

      <section id="youtube" className="editorial-band editorial-band--ivory">
        <div className="container">
          <div className="band-header">
            <SectionHeading
              eyebrow="YouTube"
              heading="Latest from YouTube."
              lead="Automatically refreshed from Archana's official YouTube uploads feed, with click-to-load playback."
            />
            <a
              href={youtubeProfile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link band-header__link"
            >
              Visit {youtubeProfile.handle} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="card-grid card-grid--two media-feed-grid">
            {youtubeVideos.map((video, idx) => {
              const thumbSrc =
                video.thumbnailUrl ??
                `https://i.ytimg.com/vi_webp/${video.videoId}/hqdefault.webp`;
              return (
                <article key={video.videoId} className="surface-card surface-card--media">
                  <div className="media-card__thumb media-card__thumb--video">
                    <Image
                      src={thumbSrc}
                      alt={`${video.title} — YouTube video thumbnail`}
                      width={480}
                      height={360}
                      loading="lazy"
                      sizes="(max-width: 720px) 92vw, 520px"
                    />
                    <span className="media-card__badge-chip">YouTube</span>
                  </div>
                  <div className="surface-card__top">
                    <span className="surface-card__index">
                      YouTube {video.publishedLabel ? `· ${video.publishedLabel}` : ""}
                    </span>
                    <ArcanaEmblem variant={EMBLEMS[idx % EMBLEMS.length]} />
                  </div>
                  <h3>{video.title}</h3>
                  <p className="surface-card__meta">
                    <a
                      href={video.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-link"
                    >
                      Watch video on YouTube <span aria-hidden="true">↗</span>
                    </a>
                  </p>
                </article>
              );
            })}
          </div>

          <div className="media-player-box">
            <LazyPlaylist
              playlistId={YOUTUBE_UPLOADS_PLAYLIST}
              channelUrl={youtubeProfile.href}
            />
          </div>
        </div>
      </section>

      <TarotDivider />

      <section id="instagram" className="editorial-band">
        <div className="container">
          <div className="band-header">
            <SectionHeading
              eyebrow="Instagram"
              heading="Latest from Instagram."
              lead="Curated reels and posts from @the_ultimate_path with optional click-to-load previews and direct profile links."
            />
            <a
              href={instagramProfile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link band-header__link"
            >
              Follow {instagramProfile.handle} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="card-grid card-grid--three">
            {displayedInstagram.map((item, idx) => (
              <SocialCard
                key={item.id}
                item={item}
                emblem={EMBLEMS[idx % EMBLEMS.length]}
              />
            ))}
          </div>
        </div>
      </section>

      <TarotDivider />

      <section id="facebook" className="editorial-band editorial-band--ivory">
        <div className="container">
          <div className="band-header">
            <SectionHeading
              eyebrow="Facebook · Business Page"
              heading="Updates from Facebook."
              lead="Latest posts and community updates from The Ultimate Path official Facebook Business Page, or load the live timeline preview."
            />
            <a
              href={fbBusiness.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link band-header__link"
            >
              Visit Business Page <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="card-grid card-grid--two media-feed-grid">
            {displayedFacebook.map((post, idx) => (
              <article key={post.id} className="surface-card surface-card--media">
                <div className="media-card__thumb">
                  <Image
                    src={post.thumbnailUrl}
                    alt={`${post.title} — The Ultimate Path Facebook post thumbnail`}
                    width={960}
                    height={640}
                    loading="lazy"
                    sizes="(max-width: 720px) 92vw, 520px"
                  />
                  <span className="media-card__badge-chip">Facebook Page</span>
                </div>
                <div className="surface-card__top">
                  <span className="surface-card__index">
                    The Ultimate Path {post.createdLabel ? `· ${post.createdLabel}` : ""}
                  </span>
                  <ArcanaEmblem variant={EMBLEMS[idx % EMBLEMS.length]} />
                </div>
                <h3>{post.title}</h3>
                <p>{post.message}</p>
                <p className="surface-card__meta">
                  <a
                    href={post.permalinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                  >
                    View post on Facebook Page <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </article>
            ))}
          </div>

          <div className="card-grid card-grid--two">
            <article className="surface-card surface-card--media">
              <div className="media-card__thumb">
                <Image
                  src={ARCHANA_CONSULTATION_DESK.src}
                  alt={ARCHANA_CONSULTATION_DESK.alt}
                  width={ARCHANA_CONSULTATION_DESK.width}
                  height={ARCHANA_CONSULTATION_DESK.height}
                  loading="lazy"
                  sizes="(max-width: 720px) 92vw, 480px"
                />
                <span className="media-card__badge-chip">Official Page</span>
              </div>
              <div className="surface-card__top">
                <span className="surface-card__index">Business Page</span>
                <ArcanaEmblem variant="sun" />
              </div>
              <h3>{fbBusiness.label}</h3>
              <p>
                Official business updates, consultation notes, and announcements
                from The Ultimate Path on Facebook.
              </p>
              <p className="surface-card__meta">
                <a
                  href={fbBusiness.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Open {fbBusiness.label} <span aria-hidden="true">↗</span>
                </a>
              </p>
            </article>

            <LazyFacebookTimeline pageUrl={fbBusiness.href} />
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band--warm">
        <div className="container enquiry-banner">
          <div>
            <p className="eyebrow">Personal Consultation</p>
            <h2>Interested in a one-to-one reading?</h2>
            <p className="enquiry-banner__lead">
              View the consultation guide or connect directly with Archana
              Mahajan.
            </p>
          </div>
          <div className="enquiry-banner__actions">
            <Link href="/consultations" className="btn btn-secondary">
              Explore consultations
            </Link>
            <Link href="/connect" className="btn btn-primary">
              Connect with Archana
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-band">
        <div className="container">
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
