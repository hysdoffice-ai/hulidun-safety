import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/"
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/"
      }
    ],
    sitemap: "https://www.hulidun.com/sitemap.xml",
    host: "https://www.hulidun.com"
  };
}
