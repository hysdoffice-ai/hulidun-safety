import Link from "next/link";
import { certificationNotice, complianceNotice } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050a12] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <h2 className="text-xl font-black text-white">Industrial Respiratory Protection & Emergency Safety Solutions Manufacturer</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">Protecting Every Breath in Hazardous Workplaces.</p>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-500">{complianceNotice}</p>
          <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-500">{certificationNotice}</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-300">Company</h3>
          <div className="grid gap-2 text-sm text-slate-400">
            <Link href="/about">About Us</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/oem-private-label">OEM / ODM</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-300">Buyer Path</h3>
          <div className="grid gap-2 text-sm text-slate-400">
            <Link href="/products">Products</Link>
            <Link href="/applications">Applications</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/contact">Request a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
