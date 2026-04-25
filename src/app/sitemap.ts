import { MetadataRoute } from "next";
import { seedOrganizations, featuredMissions } from "@/lib/seed-data";

const BASE_URL = "https://kingdomexchangenetwork.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/directory`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/missions`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/prayer`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/donate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/directory/apply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const orgRoutes: MetadataRoute.Sitemap = seedOrganizations.map((org) => ({
    url: `${BASE_URL}/directory/${org.id}`,
    lastModified: new Date(org.createdAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const missionRoutes: MetadataRoute.Sitemap = featuredMissions.map((m) => ({
    url: `${BASE_URL}/missions/${m.id}`,
    lastModified: new Date(m.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...orgRoutes, ...missionRoutes];
}
