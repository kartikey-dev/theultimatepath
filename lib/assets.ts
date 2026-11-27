export type AssetRole =
  | "hero"
  | "portrait"
  | "consultation"
  | "community"
  | "tarot"
  | "og"
  | "social"
  | "reference";

export interface SiteAsset {
  readonly id: string;
  readonly src: `/images/${string}.webp`;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly caption?: string;
  readonly role: AssetRole;
  readonly source: string;
}

export const ARCHANA_PORTRAIT: SiteAsset = {
  id: "archana-portrait",
  src: "/images/archana/archana-mahajan.webp",
  width: 1200,
  height: 1600,
  alt: "Archana Mahajan seated at her tarot reading table with cards spread before her",
  caption: "Archana Mahajan at her tarot reading table",
  role: "hero",
  source: "Client-supplied portrait photograph (converted to WebP)",
};

export const ARCHANA_LIFESTYLE_PORTRAIT: SiteAsset = {
  id: "archana-lifestyle-portrait",
  src: "/images/archana/archana-lifestyle-portrait.webp",
  width: 1024,
  height: 1024,
  alt: "Archana Mahajan smiling warmly in an embroidered black floral kurta",
  caption: "Warm portrait between consultations",
  role: "portrait",
  source: "Client-supplied personal portrait (converted to WebP)",
};

export const ARCHANA_READING_CARDS: SiteAsset = {
  id: "archana-reading-cards",
  src: "/images/archana/archana-reading-cards.webp",
  width: 1024,
  height: 684,
  alt: "Archana Mahajan in a sage green sari holding tarot cards at her reading desk",
  caption: "Tarot decks at the reading table",
  role: "consultation",
  source: "Client-supplied consultation photograph (converted to WebP)",
};

export const ARCHANA_CONSULTATION_DESK: SiteAsset = {
  id: "archana-consultation-desk",
  src: "/images/archana/archana-consultation-desk.webp",
  width: 720,
  height: 960,
  alt: "Archana Mahajan seated at her tarot desk with crystals and fanned tarot cards",
  caption: "Inside the Gorakhpur consultation space",
  role: "consultation",
  source: "Client-supplied consultation space photograph (converted to WebP)",
};

export const ARCHANA_IN_SESSION: SiteAsset = {
  id: "archana-in-session",
  src: "/images/archana/archana-in-session.webp",
  width: 960,
  height: 642,
  alt: "Archana Mahajan conducting an in-person tarot consultation across her desk",
  caption: "One-to-one reflective reading in session",
  role: "consultation",
  source: "Client-supplied consultation session photograph (converted to WebP)",
};

export const APARIGRAHA_OUTREACH: SiteAsset = {
  id: "aparigraha-outreach",
  src: "/images/community/aparigraha-foundation-outreach.webp",
  width: 768,
  height: 1024,
  alt: "Archana Mahajan sharing snacks with children beneath the Aparigraha Foundation banner",
  caption: "Serving beside the Aparigraha Foundation banner",
  role: "community",
  source: "Client-supplied Aparigraha Foundation outreach photo (converted to WebP)",
};

export const APARIGRAHA_DISTRIBUTION: SiteAsset = {
  id: "aparigraha-distribution",
  src: "/images/community/aparigraha-community-distribution.webp",
  width: 768,
  height: 1024,
  alt: "Archana Mahajan and volunteers distributing food packs to children during Aparigraha Foundation outreach",
  caption: "Distributing snacks & essentials with volunteers",
  role: "community",
  source: "Client-supplied Aparigraha Foundation outreach photo (converted to WebP)",
};

export const APARIGRAHA_GROUP: SiteAsset = {
  id: "aparigraha-group",
  src: "/images/community/aparigraha-group-moment.webp",
  width: 768,
  height: 1024,
  alt: "Archana Mahajan speaking with children and fellow volunteers at an Aparigraha Foundation gathering",
  caption: "In conversation with children and volunteers",
  role: "community",
  source: "Client-supplied Aparigraha Foundation outreach photo (converted to WebP)",
};

export const APARIGRAHA_VOLUNTEERS: SiteAsset = {
  id: "aparigraha-volunteers",
  src: "/images/community/aparigraha-volunteers.webp",
  width: 768,
  height: 1024,
  alt: "Archana Mahajan standing with children and Aparigraha Foundation volunteers after an outreach activity",
  caption: "Volunteers & children together after outreach",
  role: "community",
  source: "Client-supplied Aparigraha Foundation outreach photo (converted to WebP)",
};

export const APARIGRAHA_CARE: SiteAsset = {
  id: "aparigraha-care",
  src: "/images/community/aparigraha-care-sharing.webp",
  width: 768,
  height: 1024,
  alt: "Volunteers and Archana Mahajan handing refreshments to children seated together on mats",
  caption: "Shared refreshments and community care",
  role: "community",
  source: "Client-supplied Aparigraha Foundation outreach photo (converted to WebP)",
};

export const TAROT_CRYSTALS: SiteAsset = {
  id: "tarot-crystals",
  src: "/images/tarot/tarot-cards-crystals.webp",
  width: 900,
  height: 901,
  alt: "Tarot cards arranged with natural crystals on a warm reading surface",
  role: "tarot",
  source: "Gabriela Hughes / Pexels (converted to WebP)",
};

export const TAROT_READING: SiteAsset = {
  id: "tarot-reading",
  src: "/images/tarot/tarot-cards-reading.webp",
  width: 900,
  height: 1600,
  alt: "Close-up of tarot cards laid out for a personal reading",
  role: "tarot",
  source: "Gabriela Hughes / Pexels (converted to WebP)",
};

export const TAROT_CARD_STAR: SiteAsset = {
  id: "tarot-card-the-star",
  src: "/images/tarot/card-the-star.webp",
  width: 480,
  height: 827,
  alt: "XVII The Star classic illustrated tarot card (Rider-Waite-Smith, 1909)",
  caption: "XVII · The Star",
  role: "tarot",
  source: "Pamela Colman Smith / Rider-Waite-Smith (1909, Public Domain WebP)",
};

export const TAROT_CARD_HIGH_PRIESTESS: SiteAsset = {
  id: "tarot-card-high-priestess",
  src: "/images/tarot/card-high-priestess.webp",
  width: 480,
  height: 825,
  alt: "II The High Priestess classic illustrated tarot card (Rider-Waite-Smith, 1909)",
  caption: "II · The High Priestess",
  role: "tarot",
  source: "Pamela Colman Smith / Rider-Waite-Smith (1909, Public Domain WebP)",
};

export const TAROT_CARD_TWO_PENTACLES: SiteAsset = {
  id: "tarot-card-two-of-pentacles",
  src: "/images/tarot/card-two-of-pentacles.webp",
  width: 480,
  height: 829,
  alt: "Two of Pentacles classic illustrated tarot card (Rider-Waite-Smith, 1909)",
  caption: "Two of Pentacles",
  role: "tarot",
  source: "Pamela Colman Smith / Rider-Waite-Smith (1909, Public Domain WebP)",
};

export const TAROT_CARD_SIX_SWORDS: SiteAsset = {
  id: "tarot-card-six-of-swords",
  src: "/images/tarot/card-six-of-swords.webp",
  width: 480,
  height: 829,
  alt: "Six of Swords classic illustrated tarot card (Rider-Waite-Smith, 1909)",
  caption: "Six of Swords",
  role: "tarot",
  source: "Pamela Colman Smith / Rider-Waite-Smith (1909, Public Domain WebP)",
};

export const OG_IMAGE: SiteAsset = {
  id: "og-default",
  src: "/images/brand/og-the-ultimate-path.webp",
  width: 1200,
  height: 630,
  alt: "The Ultimate Path by Archana Mahajan — Tarot readings in Gorakhpur",
  role: "og",
  source: "Derived from client-supplied portrait in editorial frame (WebP)",
};

export const PODCAST_THUMBNAIL: SiteAsset = {
  id: "soulful-moms-podcast-thumb",
  src: "/images/media/soulful-moms-podcast-thumb.webp",
  width: 1280,
  height: 720,
  alt: "Soulful Moms of India podcast thumbnail featuring Archana Mahajan discussing tarot cards",
  role: "social",
  source: "Official YouTube collaboration thumbnail (2B01dacOGwM, native WebP)",
};

export const POSTER_REFERENCE: SiteAsset = {
  id: "poster-reference",
  src: "/images/brand/the-ultimate-path-poster-reference.webp",
  width: 509,
  height: 372,
  alt: "The Ultimate Path original printed signboard reference",
  role: "reference",
  source: "Client-supplied brand signboard reference (retained for archive only)",
};

export const ARCHANA_GALLERY_ASSETS: readonly SiteAsset[] = [
  ARCHANA_LIFESTYLE_PORTRAIT,
  ARCHANA_READING_CARDS,
  ARCHANA_CONSULTATION_DESK,
  ARCHANA_IN_SESSION,
];

export const COMMUNITY_GALLERY_ASSETS: readonly SiteAsset[] = [
  APARIGRAHA_OUTREACH,
  APARIGRAHA_DISTRIBUTION,
  APARIGRAHA_GROUP,
  APARIGRAHA_VOLUNTEERS,
  APARIGRAHA_CARE,
];

export const ASSET_MANIFEST: readonly SiteAsset[] = [
  ARCHANA_PORTRAIT,
  ARCHANA_LIFESTYLE_PORTRAIT,
  ARCHANA_READING_CARDS,
  ARCHANA_CONSULTATION_DESK,
  ARCHANA_IN_SESSION,
  APARIGRAHA_OUTREACH,
  APARIGRAHA_DISTRIBUTION,
  APARIGRAHA_GROUP,
  APARIGRAHA_VOLUNTEERS,
  APARIGRAHA_CARE,
  TAROT_CRYSTALS,
  TAROT_READING,
  TAROT_CARD_STAR,
  TAROT_CARD_HIGH_PRIESTESS,
  TAROT_CARD_TWO_PENTACLES,
  TAROT_CARD_SIX_SWORDS,
  OG_IMAGE,
  POSTER_REFERENCE,
  PODCAST_THUMBNAIL,
];
