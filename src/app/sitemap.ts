import type { MetadataRoute } from "next";
import { applications } from "@/data/applications";
import { products } from "@/data/products";

const baseUrl = "https://hulidun.com";

const staticRoutes = [
  "",
  "/products",
  "/applications",
  "/solutions",
  "/oem-private-label",
  "/quality",
  "/resources",
  "/about",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}/`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: product.featured ? 0.9 : 0.7
    })),
    ...applications.map((application) => ({
      url: `${baseUrl}/applications/${application.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    }))
  ];

  return routes as MetadataRoute.Sitemap;
}
