import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-md border border-white/10 bg-slate-950/70 p-5 shadow-panel transition hover:-translate-y-1 hover:border-orange/50">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded bg-orange/15 px-3 py-1 text-xs font-bold text-orange">{product.model}</span>
          <span className="text-xs text-slate-400">{product.category}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{product.shortDescription}</p>
        <div className="mt-5 space-y-2 text-xs text-slate-400">
          <p><span className="text-slate-200">Applications:</span> {product.applications.slice(0, 3).join(", ")}</p>
          <p><span className="text-slate-200">Compatible filters:</span> {product.compatibleFilters.slice(0, 2).join(", ")}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/products/${product.slug}/`} className="inline-flex items-center gap-2 text-sm font-semibold text-warning">
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact/" className="inline-flex items-center gap-2 text-sm font-semibold text-orange">
          Request a Quote
        </Link>
      </div>
    </article>
  );
}

export function ResourceCard({ title }: { title: string }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-warning/50">
      <FileText className="mb-4 h-7 w-7 text-warning" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Practical guidance for safety distributors, procurement teams and industrial buyers.
      </p>
    </article>
  );
}
