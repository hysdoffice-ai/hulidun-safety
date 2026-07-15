import type { MetadataRoute } from "next";
import { applications } from "@/data/applications";
import { industryLandings } from "@/data/industries";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { productCategoryLandings } from "@/data/product-categories";

const baseUrl = "https://www.hulidun.com";

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
  "/about",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}/`,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}/`,
      changeFrequency: "monthly",
      priority: product.featured ? 0.9 : 0.7
    })),
    ...productCategoryLandings.map((landing) => ({
      url: `${baseUrl}/${landing.slug}/`,
      changeFrequency: "monthly",
      priority: 0.85
    })),
    ...applications.map((application) => ({
      url: `${baseUrl}/applications/${application.slug}/`,
      changeFrequency: "monthly",
      priority: 0.75
    })),
    ...industryLandings.map((landing) => ({
      url: `${baseUrl}/industries/${landing.slug}/`,
      changeFrequency: "monthly",
      priority: 0.78
    })),
    ...resources.map((resource) => ({
      url: `${baseUrl}/resources/${resource.slug}/`,
      changeFrequency: "monthly",
      priority: 0.72
    }))
  ];

  return routes as MetadataRoute.Sitemap;
}
