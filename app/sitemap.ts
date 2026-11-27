import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/about-archana", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/consultations", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/media", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/connect", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_CONFIG.siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
