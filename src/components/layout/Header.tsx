"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { MobileNav, type NavItem } from "@/components/layout/MobileNav";
import { brandLogo, brandName } from "@/data/site";

const navItems: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Sourcing", href: "/industries" },
  { label: "Applications", href: "/applications" },
  { label: "Solutions", href: "/solutions" },
  { label: "OEM / ODM", href: "/oem-private-label" },
  { label: "Quality", href: "/quality" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-14 items-center justify-center rounded-md border border-white/10 bg-white p-1.5">
            <img src={brandLogo} alt={`${brandName} logo`} className="max-h-full max-w-full object-contain" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-wide text-white">{brandName}</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-slate-400">Respiratory Systems</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-orange">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton compact className="min-h-10 px-4 py-2" source="Header" />
        </div>
        <button type="button" aria-label="Open navigation" onClick={() => setOpen(true)} className="rounded-md border border-white/15 p-2 text-white lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <MobileNav items={navItems} open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
