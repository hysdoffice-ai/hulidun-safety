import type { Product } from "@/data/products";

type ProductSpecTableProps = {
  specifications: Product["specifications"];
};

export function ProductSpecTable({ specifications }: ProductSpecTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-white/10">
      {specifications.map((spec) => (
        <div key={spec.label} className="grid gap-3 border-b border-white/10 bg-white/[0.04] p-4 last:border-b-0 md:grid-cols-[240px_1fr]">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-slate-400">{spec.label}</div>
          <div className="text-sm font-semibold text-slate-100">{spec.value}</div>
        </div>
      ))}
    </div>
  );
}
