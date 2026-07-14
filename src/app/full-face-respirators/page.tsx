import type { Metadata } from "next";
import { ProductCategoryLanding } from "@/components/products/ProductCategoryLanding";
import { getProductCategoryLanding } from "@/data/product-categories";

const landing = getProductCategoryLanding("full-face-respirators")!;

export const metadata: Metadata = {
  title: "Full Face Respirator Manufacturer",
  description: landing.metaDescription,
  alternates: { canonical: "/full-face-respirators/" },
  openGraph: {
    title: "Full Face Respirator Manufacturer | Hulidun Safety",
    description: landing.metaDescription,
    url: "https://www.hulidun.com/full-face-respirators/",
    type: "website",
    images: ["/images/products/05_MF14.webp"]
  }
};

export default function FullFaceRespiratorsPage() {
  return <ProductCategoryLanding landing={landing} />;
}
