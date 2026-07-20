import type { Metadata } from "next";
import { Boxes, Palette, Printer, ScrollText } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Section } from "@/components/section";
import { oemCapabilities } from "@/data/oem";

export const metadata: Metadata = {
  title: "OEM Respirator Manufacturer | Private Label Gas Masks & Filters",
  description:
    "OEM and private label respiratory protection products with custom packaging, logo printing and distributor support.",
  alternates: {
    canonical: "/oem-private-label/"
  }
};

const icons = [Printer, Palette, Boxes, ScrollText];

export default function OemPage() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange">OEM / ODM</p>
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">OEM & Private Label Respiratory Protection Products</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Support for importers, distributors and safety brands that need private label respirators, filter packaging, English manuals and mixed product starter programs.</p>
          <div className="mt-8"><ButtonLink href="/contact/">Discuss OEM Project</ButtonLink></div>
        </div>
      </section>
      <Section title="Private label capability map">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {oemCapabilities.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                <Icon className="mb-4 h-7 w-7 text-warning" />
                <h2 className="font-bold text-white">{item}</h2>
              </div>
            );
          })}
        </div>
      </Section>
      <Section title="OEM workflow" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-4">
          {["Requirement review", "Sample confirmation", "Bulk production", "Packing inspection"].map((step, index) => (
            <div key={step} className="rounded-md border border-orange/20 bg-orange/10 p-5">
              <span className="text-3xl font-black text-orange">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 font-bold text-white">{step}</h2>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
