import type { MetadataRoute } from "next";
import { applications } from "@/data/applications";
import { industryLandings } from "@/data/industries";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { productCategoryLandings } from "@/data/product-categories";

const baseUrl = "https://www.hulidun.com";
const defaultContentUpdate = "2026-07-30";

const staticRouteUpdates: Record<string, string> = {
  "": "2026-07-25",
  "/products": "2026-07-29",
  "/industries": "2026-07-25",
  "/resources": "2026-07-29",
  "/answers": "2026-07-30",
  "/oem-private-label": "2026-07-30",
  "/editorial-policy": "2026-07-20"
};

const staticRoutes = [
  "",
  "/products",
  "/industries",
  "/applications",
  "/solutions",
  "/oem-private-label",
  "/quality",
  "/resources",
  "/answers",
  "/editorial-policy",
  "/about",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}/`,
      lastModified: new Date(`${staticRouteUpdates[route] ?? defaultContentUpdate}T00:00:00+08:00`),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}/`,
      lastModified: new Date(`${product.updatedAt}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: product.featured ? 0.9 : 0.7
    })),
    ...productCategoryLandings.map((landing) => ({
      url: `${baseUrl}/${landing.slug}/`,
      lastModified: new Date(`${defaultContentUpdate}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 0.85
    })),
    ...applications.map((application) => ({
      url: `${baseUrl}/applications/${application.slug}/`,
      lastModified: new Date(`${defaultContentUpdate}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 0.75
    })),
    ...industryLandings.map((landing) => ({
      url: `${baseUrl}/industries/${landing.slug}/`,
      lastModified: new Date(`${landing.updatedAt ?? defaultContentUpdate}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 0.78
    })),
    ...resources.map((resource) => ({
      url: `${baseUrl}/resources/${resource.slug}/`,
      lastModified: new Date(`${resource.updatedAt ?? resource.publishedAt ?? defaultContentUpdate}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 0.72
    }))
  ];

  return routes as MetadataRoute.Sitemap;
}
