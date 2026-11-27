import {
  ARCHANA_CONSULTATION_DESK,
  ARCHANA_IN_SESSION,
  ARCHANA_LIFESTYLE_PORTRAIT,
  ARCHANA_READING_CARDS,
  PODCAST_THUMBNAIL,
  TAROT_CRYSTALS,
  TAROT_READING,
  type SiteAsset,
} from "@/lib/assets";

export interface FeaturedVideo {
  readonly videoId: string;
  readonly watchUrl: string;
  readonly badge: string;
  readonly title: string;
  readonly publisher: string;
  readonly publisherUrl: string;
  readonly publishedLabel: string;
  readonly synopsis: string;
  readonly thumbnail: SiteAsset;
}

export interface InstagramItem {
  readonly id: string;
  readonly type: "reel" | "p";
  readonly title: string;
  readonly summary: string;
  readonly url: string;
  readonly thumbnail?: SiteAsset;
}

export const YOUTUBE_UPLOADS_PLAYLIST = "UUIrH67QojN-08VHLO_O-2yA";

export const FEATURED_PODCAST: FeaturedVideo = {
  videoId: "2B01dacOGwM",
  watchUrl: "https://youtu.be/2B01dacOGwM",
  badge: "Featured collaboration · Soulful Moms of India",
  title:
    "क्या Tarot Cards सच में आपका Future बताते हैं या यह सिर्फ एक Scams है?",
  publisher: "Soulful Moms of India",
  publisherUrl: "https://www.youtube.com/@SoulfulMomsofIndia",
  publishedLabel: "5 August 2026",
  synopsis:
    "In this conversation hosted by Soulful Moms of India, Archana Mahajan shares how tarot readings work as reflective guidance, how tarot differs from astrology and numerology, and what thoughtful precautions matter before a personal consultation.",
  thumbnail: PODCAST_THUMBNAIL,
};

export const CURATED_INSTAGRAM_POSTS: readonly InstagramItem[] = [
  {
    id: "DYWawFMvuto",
    type: "reel",
    title: "Tarot reflection reel",
    summary: "Short-form reflection shared on @the_ultimate_path.",
    url: "https://www.instagram.com/reel/DYWawFMvuto/",
    thumbnail: ARCHANA_READING_CARDS,
  },
  {
    id: "DTMMy44j_zZ",
    type: "reel",
    title: "Guided card perspective reel",
    summary: "Thoughtful perspective on navigating everyday questions.",
    url: "https://www.instagram.com/reel/DTMMy44j_zZ/",
    thumbnail: PODCAST_THUMBNAIL,
  },
  {
    id: "Cy92IZ7gl7N",
    type: "p",
    title: "Tarot note from Archana",
    summary: "Curated post from The Ultimate Path on Instagram.",
    url: "https://www.instagram.com/p/Cy92IZ7gl7N/",
    thumbnail: TAROT_READING,
  },
  {
    id: "Cy7P0yBgBMz",
    type: "p",
    title: "Reflections on the cards",
    summary: "Selected card insight shared with the Instagram community.",
    url: "https://www.instagram.com/p/Cy7P0yBgBMz/",
    thumbnail: ARCHANA_CONSULTATION_DESK,
  },
  {
    id: "Cy5xIMRAlPH",
    type: "p",
    title: "Quiet clarity on Instagram",
    summary: "From Archana Mahajan's Instagram archive.",
    url: "https://www.instagram.com/p/Cy5xIMRAlPH/",
    thumbnail: TAROT_CRYSTALS,
  },
  {
    id: "Cy5wi14gay1",
    type: "p",
    title: "The Ultimate Path community post",
    summary: "Selected post from @the_ultimate_path.",
    url: "https://www.instagram.com/p/Cy5wi14gay1/",
    thumbnail: ARCHANA_IN_SESSION,
  },
];

export const FACEBOOK_THUMBNAILS = {
  business: ARCHANA_CONSULTATION_DESK,
  personal: ARCHANA_LIFESTYLE_PORTRAIT,
} as const;

export interface CuratedFacebookPost {
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly createdLabel: string;
  readonly permalinkUrl: string;
  readonly thumbnail: SiteAsset;
}

const ULTIMATE_PATH_FB_URL =
  "https://www.facebook.com/people/The-Ultimate-Path/61552959415479/";

export const CURATED_FACEBOOK_POSTS: readonly CuratedFacebookPost[] = [
  {
    id: "tup-fb-clarity-guidance",
    title: "Tarot Guidance for Quiet Clarity",
    message:
      "One-to-one personal tarot consultations at The Ultimate Path focus on attentive listening and calm perspective rather than hurried predictions.",
    createdLabel: "The Ultimate Path Page",
    permalinkUrl: ULTIMATE_PATH_FB_URL,
    thumbnail: ARCHANA_READING_CARDS,
  },
  {
    id: "tup-fb-podcast-feature",
    title: "Soulful Moms of India Conversation Feature",
    message:
      "Watch Archana Mahajan discuss responsible tarot reading, common misconceptions, and grounded guidance on the Soulful Moms of India podcast.",
    createdLabel: "Featured Appearance",
    permalinkUrl: ULTIMATE_PATH_FB_URL,
    thumbnail: PODCAST_THUMBNAIL,
  },
  {
    id: "tup-fb-consultation-space",
    title: "Inside the Gorakhpur Consultation Desk",
    message:
      "A calm reading table set with cards and crystals for personal consultations and thoughtful reflection.",
    createdLabel: "Consultation Space",
    permalinkUrl: ULTIMATE_PATH_FB_URL,
    thumbnail: ARCHANA_CONSULTATION_DESK,
  },
  {
    id: "tup-fb-card-spread",
    title: "Understanding the Cards as a Reflective Mirror",
    message:
      "How a mindful tarot spread brings hidden questions, choices, and patterns into clearer view while keeping decisions yours.",
    createdLabel: "Tarot Reflections",
    permalinkUrl: ULTIMATE_PATH_FB_URL,
    thumbnail: TAROT_READING,
  },
];
