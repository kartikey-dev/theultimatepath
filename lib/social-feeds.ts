import {
  ARCHANA_CONSULTATION_DESK,
  ARCHANA_READING_CARDS,
  PODCAST_THUMBNAIL,
  TAROT_READING,
} from "@/lib/assets";
import {
  CURATED_FACEBOOK_POSTS,
  CURATED_INSTAGRAM_POSTS,
  FEATURED_PODCAST,
  YOUTUBE_UPLOADS_PLAYLIST,
  type InstagramItem,
} from "@/lib/media";
import { SOCIAL_PROFILES } from "@/lib/site-config";

export interface YouTubeFeedItem {
  readonly videoId: string;
  readonly title: string;
  readonly publishedLabel: string;
  readonly watchUrl: string;
  readonly thumbnailUrl?: string;
}

export interface FacebookFeedPost {
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly createdLabel: string;
  readonly permalinkUrl: string;
  readonly thumbnailUrl: string;
}

function decodeXmlEntities(input: string): string {
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function formatDateLabel(isoString: string): string {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function parseYouTubeAtomFeed(
  xml: string,
  limit = 4,
): YouTubeFeedItem[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
  const parsed: YouTubeFeedItem[] = [];

  for (const entry of entries) {
    if (parsed.length >= limit) break;
    const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
    const publishedMatch = entry.match(/<published>([^<]+)<\/published>/);
    const linkMatch = entry.match(/<link[^>]*href="([^"]+)"/);

    const videoId = idMatch?.[1]?.trim();
    const rawTitle = titleMatch?.[1]?.trim();
    if (!videoId || !rawTitle) continue;

    parsed.push({
      videoId,
      title: decodeXmlEntities(rawTitle),
      publishedLabel: publishedMatch?.[1]
        ? formatDateLabel(publishedMatch[1])
        : "",
      watchUrl:
        linkMatch?.[1]?.trim() || `https://www.youtube.com/watch?v=${videoId}`,
      thumbnailUrl: `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`,
    });
  }

  return parsed;
}

export async function getLatestYouTubeVideos(
  limit = 4,
): Promise<YouTubeFeedItem[]> {
  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${YOUTUBE_UPLOADS_PLAYLIST}`,
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(4000),
      },
    );
    if (!response.ok) {
      throw new Error(`YouTube RSS HTTP ${response.status}`);
    }
    const xml = await response.text();
    const items = parseYouTubeAtomFeed(xml, limit);
    if (items.length > 0) return items;
  } catch {
    // Graceful fallback if YouTube is unreachable or offline
  }

  return [
    {
      videoId: FEATURED_PODCAST.videoId,
      title: FEATURED_PODCAST.title,
      publishedLabel: FEATURED_PODCAST.publishedLabel,
      watchUrl: FEATURED_PODCAST.watchUrl,
      thumbnailUrl: PODCAST_THUMBNAIL.src,
    },
  ];
}

export async function getLatestInstagramItems(
  limit = 6,
): Promise<InstagramItem[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (token && userId) {
    try {
      const url = `https://graph.instagram.com/${encodeURIComponent(
        userId,
      )}/media?fields=id,caption,media_type,permalink,timestamp&limit=${limit}&access_token=${encodeURIComponent(
        token,
      )}`;
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(4000),
      });
      if (response.ok) {
        const json = (await response.json()) as {
          data?: Array<{
            id: string;
            caption?: string;
            media_type?: string;
            permalink?: string;
          }>;
        };
        const liveItems: InstagramItem[] = (json.data ?? [])
          .filter((item) => item.permalink)
          .slice(0, limit)
          .map((item) => ({
            id: item.id,
            type: item.media_type === "VIDEO" ? "reel" : "p",
            title:
              item.caption?.split("\n")[0]?.slice(0, 68) ||
              "Recent Instagram post",
            summary:
              item.caption?.slice(0, 140) ||
              "Shared from @the_ultimate_path on Instagram.",
            url: item.permalink!,
          }));
        if (liveItems.length > 0) return liveItems;
      }
    } catch {
      // Fallback to verified curated items
    }
  }

  return [...CURATED_INSTAGRAM_POSTS].slice(0, limit);
}

export async function getLatestFacebookPosts(
  limit = 4,
): Promise<FacebookFeedPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID ?? "61552959415479";
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  const fallbackThumbnails = [
    ARCHANA_READING_CARDS.src,
    PODCAST_THUMBNAIL.src,
    ARCHANA_CONSULTATION_DESK.src,
    TAROT_READING.src,
  ];

  if (token) {
    try {
      const url = `https://graph.facebook.com/v20.0/${encodeURIComponent(
        pageId,
      )}/posts?fields=id,message,created_time,permalink_url&limit=${limit}&access_token=${encodeURIComponent(
        token,
      )}`;
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(4000),
      });
      if (response.ok) {
        const json = (await response.json()) as {
          data?: Array<{
            id: string;
            message?: string;
            created_time?: string;
            permalink_url?: string;
          }>;
        };
        const fbPageUrl =
          SOCIAL_PROFILES.find((p) => p.id === "facebook-business")?.href ??
          "https://www.facebook.com/people/The-Ultimate-Path/61552959415479/";
        const posts: FacebookFeedPost[] = (json.data ?? [])
          .filter((p) => p.message)
          .slice(0, limit)
          .map((p, idx) => {
            const firstLine = p.message!.split("\n")[0]?.trim() || "";
            const title =
              firstLine.length > 0
                ? firstLine.slice(0, 68)
                : "The Ultimate Path Facebook Update";
            return {
              id: p.id,
              title,
              message: p.message!.slice(0, 180),
              createdLabel: p.created_time
                ? formatDateLabel(p.created_time)
                : "The Ultimate Path Page",
              permalinkUrl: p.permalink_url ?? fbPageUrl,
              thumbnailUrl:
                fallbackThumbnails[idx % fallbackThumbnails.length],
            };
          });
        if (posts.length > 0) return posts;
      }
    } catch {
      // Fallback to official curated posts for The Ultimate Path Facebook page
    }
  }

  return CURATED_FACEBOOK_POSTS.slice(0, limit).map((post) => ({
    id: post.id,
    title: post.title,
    message: post.message,
    createdLabel: post.createdLabel,
    permalinkUrl: post.permalinkUrl,
    thumbnailUrl: post.thumbnail.src,
  }));
}
