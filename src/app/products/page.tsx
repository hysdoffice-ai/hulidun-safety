import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ComplianceNotice } from "@/components/notice";

export const metadata: Metadata = {
  title: "Respiratory Protection Products | Gas Masks, Half Masks & Filters",
  description:
    "Explore Hulidun Safety full face respirators, half masks, filter cartridges, chemical protective clothing, SCBA and emergency PPE for B2B procurement.",
  alternates: {
    canonical: "/products/"
  }
};

export default function ProductsPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Respiratory Protection Products",
    description:
      "Hulidun Safety product catalog for full face respirators, half masks, filter cartridges, chemical protective clothing, SCBA and emergency PPE.",
    url: "https://www.hulidun.com/products/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.hulidun.com/products/${product.slug}/`,
        name: `${product.model} ${product.name}`
      }))
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hulidun Safety respiratory protection products",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.hulidun.com/products/${product.slug}/`,
      name: `${product.model} ${product.name}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Products"
            title="Respiratory Protection Products"
            description="Browse reusable respirators, filters, supplied-air systems and emergency protection products for global B2B procurement."
          />
          <div className="mb-8">
            <ComplianceNotice />
          </div>
          <ProductCatalog products={products} />
        </div>
      </section>
    </>
  );
}
