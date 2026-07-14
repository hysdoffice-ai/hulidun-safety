import type { Metadata } from "next";
import { ProductCategoryLanding } from "@/components/products/ProductCategoryLanding";
import { getProductCategoryLanding } from "@/data/product-categories";

const landing = getProductCategoryLanding("respirator-filters-cartridges")!;

export const metadata: Metadata = {
  title: "Respirator Filter Cartridge Supplier",
  description: landing.metaDescription,
  alternates: { canonical: "/respirator-filters-cartridges/" },
  openGraph: {
    title: "Respirator Filter Cartridge Supplier | Hulidun Safety",
    description: landing.metaDescription,
    url: "https://www.hulidun.com/respirator-filters-cartridges/",
    type: "website",
    images: ["/images/products/28_Item_61.webp"]
  }
};

export default function RespiratorFiltersCartridgesPage() {
  return <ProductCategoryLanding landing={landing} />;
}
