import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { Badge } from "@/components/common/Badge";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-md border border-white/10 bg-slate-950/70 p-5 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:border-orange/50">
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <Badge tone="orange">{product.model}</Badge>
          {product.featured && <Badge tone="yellow">Featured</Badge>}
        </div>
        <ImageWithFallback
          src={product.image}
          alt={`${product.model} ${product.name}`}
          className="mb-5 aspect-[4/3] border border-white/10"
          imgClassName="object-contain p-4"
          fallbackLabel={`${product.model} product image`}
        />
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{product.category}</p>
        <h3 className="text-xl font-black text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{product.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.hazards.slice(0, 3).map((hazard) => (
            <Badge key={hazard}>{hazard}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href={`/products/${product.slug}/`} className="inline-flex items-center gap-2 text-sm font-bold text-warning">
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact/" className="text-sm font-bold text-orange">
          Request a Quote
        </Link>
      </div>
    </article>
  );
}
