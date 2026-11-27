export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface PhoneContact {
  readonly id: string;
  readonly display: string;
  readonly href: `tel:${string}`;
  readonly callConfirmed: boolean;
  readonly whatsappConfirmed: boolean;
}

export interface SocialProfile {
  readonly id: "youtube" | "instagram" | "facebook-personal" | "facebook-business";
  readonly platform: string;
  readonly label: string;
  readonly handle: string;
  readonly href: string;
}

export const SITE_CONFIG = {
  brandName: "The Ultimate Path",
  practitionerName: "Archana Mahajan",
  fullBrandTitle: "The Ultimate Path by Archana Mahajan",
  tagline: "Personal tarot readings · Gorakhpur",
  siteUrl: "https://theultimatepath.vercel.app",
  locationSummary: "Gorakhnath Road, Gorakhpur, Uttar Pradesh",
  city: "Gorakhpur",
  copyrightYear: 2026,
  developerCredit: {
    label: "Navaroha",
    href: "https://navaroha.com",
  },
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Archana", href: "/about-archana" },
  { label: "Consultations", href: "/consultations" },
  { label: "Media", href: "/media" },
  { label: "Connect", href: "/connect" },
];

export const HEADER_NAV_ITEMS: readonly NavItem[] = NAV_ITEMS.filter(
  (item) => item.href !== "/connect",
);

export const PHONE_CONTACTS: readonly PhoneContact[] = [
  {
    id: "primary",
    display: "+91 90769 77905",
    href: "tel:+919076977905",
    callConfirmed: true,
    whatsappConfirmed: false,
  },
  {
    id: "secondary",
    display: "+91 80526 23615",
    href: "tel:+918052623615",
    callConfirmed: true,
    whatsappConfirmed: false,
  },
];

export const SOCIAL_PROFILES: readonly SocialProfile[] = [
  {
    id: "youtube",
    platform: "YouTube",
    label: "YouTube — Archana Mahajan",
    handle: "@ArchanaMahajan-rg5hq",
    href: "https://www.youtube.com/@ArchanaMahajan-rg5hq",
  },
  {
    id: "instagram",
    platform: "Instagram",
    label: "Instagram — @the_ultimate_path",
    handle: "@the_ultimate_path",
    href: "https://www.instagram.com/the_ultimate_path/",
  },
  {
    id: "facebook-personal",
    platform: "Facebook",
    label: "Facebook — Personal profile (Archana Mahajan)",
    handle: "Archana Mahajan",
    href: "https://www.facebook.com/archana.mahajan.98/",
  },
  {
    id: "facebook-business",
    platform: "Facebook",
    label: "Facebook — The Ultimate Path business page",
    handle: "The Ultimate Path",
    href: "https://www.facebook.com/people/The-Ultimate-Path/61552959415479/",
  },
];

export const TAROT_DISCLAIMER =
  "Tarot readings are offered for personal reflection and insight. They do not guarantee future outcomes and are not a substitute for qualified medical, mental-health, legal, or financial advice. Your decisions remain your own.";
