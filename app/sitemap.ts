import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/book-call", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-07-15"),
    changeFrequency,
    priority,
  }));
}
