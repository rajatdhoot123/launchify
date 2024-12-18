import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.launchify.club/new-sitemaps/sitemap.xml",
      "https://www.launchify.club/blog/sitemap.xml",
    ],
  };
}
