"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { cn } from "@/lib/utils";
import { brandLogo, brandName } from "@/data/site";

export type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ items, open, onClose }: MobileNavProps) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-navy/95 backdrop-blur-xl transition lg:hidden",
        open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
      )}
    >
      <div className="sticky top-0 z-10 flex min-h-16 items-center justify-between border-b border-white/10 bg-navy/95 px-4 backdrop-blur-xl">
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
            <img src={brandLogo} alt={`${brandName} logo`} className="max-h-full max-w-full object-contain" />
          </span>
          <span className="truncate text-sm font-black uppercase tracking-wide text-white">{brandName}</span>
        </span>
        <button type="button" aria-label="Close navigation" onClick={onClose} className="ml-2 shrink-0 rounded-md border border-white/15 p-2 text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="grid gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
            {item.label}
          </Link>
        ))}
        <WhatsAppButton className="mt-2 w-full" source="Mobile navigation" />
      </nav>
      <div className="mx-4 mb-4 mt-2 h-3 rounded bg-hazard bg-[length:48px_48px]" />
    </div>
  );
}
