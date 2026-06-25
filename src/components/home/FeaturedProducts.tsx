import type { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featured = products.filter((product) => product.featured);

  return (
    <section className="bg-slate-950/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Featured Products" title="Core models for distributor catalogs and project RFQs" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
