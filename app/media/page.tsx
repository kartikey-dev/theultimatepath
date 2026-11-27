import type { Metadata } from "next";
import { MediaHubContent } from "@/components/media/media-hub-content";
import {
  getLatestFacebookPosts,
  getLatestInstagramItems,
  getLatestYouTubeVideos,
} from "@/lib/social-feeds";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Media & Social — The Ultimate Path by Archana Mahajan",
  description:
    "Watch Archana Mahajan's featured Soulful Moms of India podcast and explore her official YouTube, Instagram, and Facebook presence.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Media & Social — The Ultimate Path by Archana Mahajan",
    description:
      "Featured Soulful Moms of India podcast, YouTube uploads, and curated Instagram & Facebook channels.",
    url: "/media",
    images: ["/images/brand/og-the-ultimate-path.webp"],
  },
};

export default async function MediaPage() {
  const [youtubeVideos, instagramItems, facebookPosts] = await Promise.all([
    getLatestYouTubeVideos(4),
    getLatestInstagramItems(6),
    getLatestFacebookPosts(4),
  ]);

  return (
    <MediaHubContent
      youtubeVideos={youtubeVideos}
      instagramItems={instagramItems}
      facebookPosts={facebookPosts}
    />
  );
}
