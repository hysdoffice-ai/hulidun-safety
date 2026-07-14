import type { Metadata } from "next";
import { ProductCategoryLanding } from "@/components/products/ProductCategoryLanding";
import { getProductCategoryLanding } from "@/data/product-categories";

const landing = getProductCategoryLanding("half-face-respirators")!;

export const metadata: Metadata = {
  title: "Half Face Respirator Supplier",
  description: landing.metaDescription,
  alternates: { canonical: "/half-face-respirators/" },
  openGraph: {
    title: "Half Face Respirator Supplier | Hulidun Safety",
    description: landing.metaDescription,
    url: "https://www.hulidun.com/half-face-respirators/",
    type: "website",
    images: ["/images/products/15_CF_6200.webp"]
  }
};

export default function HalfFaceRespiratorsPage() {
  return <ProductCategoryLanding landing={landing} />;
}
