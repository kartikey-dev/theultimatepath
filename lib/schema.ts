import { ARCHANA_PORTRAIT, OG_IMAGE } from "@/lib/assets";
import { FEATURED_PODCAST } from "@/lib/media";
import {
  PHONE_CONTACTS,
  SITE_CONFIG,
  SOCIAL_PROFILES,
} from "@/lib/site-config";

export interface JsonLdGraph {
  readonly "@context": "https://schema.org";
  readonly "@graph": ReadonlyArray<Record<string, unknown>>;
}

export function buildSiteStructuredData(): JsonLdGraph {
  const { siteUrl } = SITE_CONFIG;
  const sameAs = SOCIAL_PROFILES.map((profile) => profile.href);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#archana`,
        name: SITE_CONFIG.practitionerName,
        jobTitle: "Tarot reader",
        image: `${siteUrl}${ARCHANA_PORTRAIT.src}`,
        worksFor: { "@id": `${siteUrl}/#business` },
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: SITE_CONFIG.brandName,
        url: siteUrl,
        description:
          "Personal tarot consultations with Archana Mahajan on Gorakhnath Road, Gorakhpur, Uttar Pradesh.",
        image: `${siteUrl}${ARCHANA_PORTRAIT.src}`,
        telephone: PHONE_CONTACTS.map((p) => p.display),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gorakhnath Road",
          addressLocality: "Gorakhpur",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: SITE_CONFIG.city,
        },
        knowsAbout: ["Tarot card reading"],
        founder: { "@id": `${siteUrl}/#archana` },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_CONFIG.brandName,
        inLanguage: "en-IN",
        publisher: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "VideoObject",
        "@id": `${siteUrl}/#featured-podcast`,
        name: FEATURED_PODCAST.title,
        description: FEATURED_PODCAST.synopsis,
        thumbnailUrl: `${siteUrl}${OG_IMAGE.src}`,
        uploadDate: "2026-08-05",
        contentUrl: FEATURED_PODCAST.watchUrl,
        embedUrl: `https://www.youtube-nocookie.com/embed/${FEATURED_PODCAST.videoId}`,
        publisher: {
          "@type": "Organization",
          name: FEATURED_PODCAST.publisher,
          url: FEATURED_PODCAST.publisherUrl,
        },
      },
    ],
  };
}

export function serializeJsonLd(data: JsonLdGraph): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
