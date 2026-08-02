import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://swarnavasarkar.dev",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
