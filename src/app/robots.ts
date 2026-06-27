import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://hulidun.com/sitemap.xml",
    host: "https://hulidun.com"
  };
}
