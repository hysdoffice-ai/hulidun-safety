import { PackageCheck } from "lucide-react";
import { Badge } from "@/components/common/Badge";

type RecommendedProductsProps = {
  products: string[];
  filters?: string[];
};

export function RecommendedProducts({ products, filters = [] }: RecommendedProductsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-orange">
          <PackageCheck className="h-5 w-5" />
          Recommended Products
        </div>
        <div className="flex flex-wrap gap-2">
          {products.map((product) => (
            <Badge key={product} tone="orange">
              {product}
            </Badge>
          ))}
        </div>
      </div>
      <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-warning">Recommended Filters</div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Badge key={filter} tone="yellow">
              {filter}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
