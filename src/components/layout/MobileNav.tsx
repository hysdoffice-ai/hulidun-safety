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
    <div className={cn("fixed inset-0 z-50 bg-navy/95 backdrop-blur-xl transition lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}>
      <div className="flex min-h-16 items-center justify-between border-b border-white/10 px-4">
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-12 items-center justify-center rounded-md bg-white p-1.5">
            <img src={brandLogo} alt={`${brandName} logo`} className="max-h-full max-w-full object-contain" />
          </span>
          <span className="text-sm font-black uppercase tracking-wide text-white">{brandName}</span>
        </span>
        <button type="button" aria-label="Close navigation" onClick={onClose} className="rounded-md border border-white/15 p-2 text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="grid gap-2 p-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
            {item.label}
          </Link>
        ))}
        <WhatsAppButton className="mt-2 w-full" source="Mobile navigation" />
      </nav>
      <div className="mx-4 mt-4 h-3 rounded bg-hazard bg-[length:48px_48px]" />
    </div>
  );
}
