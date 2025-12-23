import { MetadataRoute } from "next";
import { getSiteUrl } from "@/src/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

