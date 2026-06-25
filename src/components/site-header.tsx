"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  ["Products", "/products"],
  ["Applications", "/applications"],
  ["Solutions", "/solutions"],
  ["OEM / ODM", "/oem-private-label"],
  ["Quality", "/quality"],
  ["Resources", "/resources"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-orange text-white">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-wide text-white">Hulidun Safety</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-slate-400">Respiratory Systems</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden rounded-md bg-warning px-4 py-2 text-sm font-bold text-graphite lg:inline-flex">
          RFQ
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-white/15 p-2 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={cn("border-t border-white/10 px-4 py-4 lg:hidden", !open && "hidden")}>
        <nav className="grid gap-2">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
