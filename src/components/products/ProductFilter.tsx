"use client";

import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductFilterProps = {
  categories: string[];
  activeCategory?: string;
  onChange?: (category: string) => void;
};

export function ProductFilter({ categories, activeCategory = "All", onChange }: ProductFilterProps) {
  const allCategories = ["All", ...categories];

  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3 backdrop-blur">
      <div className="mb-3 flex items-center gap-2 px-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        <SlidersHorizontal className="h-4 w-4 text-orange" />
        Product Category
      </div>
      <div className="flex flex-wrap gap-2">
        {allCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange?.(category)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5",
              activeCategory === category ? "border-orange bg-orange text-white" : "border-white/10 bg-slate-950/60 text-slate-300 hover:border-orange/50"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
