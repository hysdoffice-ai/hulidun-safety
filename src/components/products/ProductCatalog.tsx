"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilter } from "@/components/products/ProductFilter";

type ProductCatalogProps = {
  products: Product[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const categories = useMemo(() => Array.from(new Set(products.map((product) => product.category))), [products]);
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProducts = activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory);

  return (
    <div className="space-y-8">
      <ProductFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
