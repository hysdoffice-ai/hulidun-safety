import type { Metadata } from "next";
import Link from "next/link";
import { Boxes, Palette, Printer, ScrollText } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Section } from "@/components/section";
import { oemCapabilities } from "@/data/oem";

export const metadata: Metadata = {
  title: "OEM Respirator Manufacturer | Private Label Gas Masks",
  description:
    "China OEM respirator manufacturer for private label gas masks, half masks and filters. Review MOQ, samples, packaging, documents and lead time.",
  alternates: { canonical: "/oem-private-label/" },
  openGraph: {
    title: "OEM Respirator Manufacturer & Private Label Gas Masks",
    description:
      "OEM respirators, filters and buyer-ready kits with custom logo, packaging, instructions and model-specific document review.",
    url: "https://www.hulidun.com/oem-private-label/",
    type: "website"
  }
};

const icons = [Printer, Palette, Boxes, ScrollText];

const buyerChecklist = [
  ["Product", "Exact facepiece, filter or kit model and required connector"],
  ["Order", "Trial quantity, forecast quantity and mixed-model requirements"],
  ["Market", "Destination country, language and required conformity documents"],
  ["Branding", "Logo position, artwork format, colors and printing method"],
  ["Packaging", "Inner pack, color box, instructions, labels and carton marks"],
  ["Application", "Workplace use and hazard information for compatibility review"]
];

const faqItems = [
  {
    question: "What is the MOQ for private label respirators?",
    answer:
      "The reference MOQ starts from 200 pieces. Final MOQ depends on the exact facepiece or filter, stock status, logo method, color box, instruction manual and carton requirements."
  },
  {
    question: "Can a buyer order samples before bulk production?",
    answer:
      "Yes. Buyers can request model samples for fit, material, connector, packaging and visual review before confirming a bulk OEM order. Sample availability and cost depend on the selected configuration."
  },
  {
    question: "What can be customized for an OEM respirator order?",
    answer:
      "Available scope can include product or packaging logo, color box, user instructions, labels, carton marks, selected colors and configured kits containing compatible facepieces, filters and accessories."
  },
  {
    question: "What documents should an importer request?",
    answer:
      "Request the exact-model datasheet, user instructions, filter compatibility information, packing details, label artwork, product photos and available test or conformity documents relevant to the destination market."
  },
  {
    question: "How long does private label production take?",
    answer:
      "Available stock is generally prepared in 5–7 days after confirmation. Customized logo, color box, instructions or private-label packaging orders are generally prepared in 10–15 days, subject to final specification and quantity."
  }
];

export default function OemPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.hulidun.com/oem-private-label/#service",
    name: "OEM and Private Label Respirator Manufacturing",
    serviceType: "OEM respiratory protection manufacturing",
    provider: { "@id": "https://www.hulidun.com/#organization" },
    areaServed: "Worldwide",
    url: "https://www.hulidun.com/oem-private-label/",
    description:
      "OEM and private label full face respirators, half masks, filters and buyer-ready kits with custom packaging, instructions and document review.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://www.hulidun.com/contact/"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange">OEM / ODM</p>
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">OEM Respirator Manufacturer & Private Label Gas Masks</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Factory support for importers, PPE distributors and safety brands sourcing private label full face respirators, half masks, filters and configured kits with custom packaging, instructions and buyer-specific documentation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact/?product=OEM%20Private%20Label%20Respirator">Discuss OEM Project</ButtonLink>
            <ButtonLink href="/products/" variant="secondary">Compare Products</ButtonLink>
          </div>
        </div>
      </section>

      <Section eyebrow="Customization Scope" title="Private label capability map" intro="Confirm the exact model and destination market first. We then define which product, artwork, packaging and documentation items belong in the quotation.">
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

      <Section eyebrow="RFQ Preparation" title="Information buyers should send">
        <div className="overflow-x-auto rounded-md border border-white/10">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-white/[0.06] text-white">
              <tr><th className="px-5 py-4 font-black">RFQ field</th><th className="px-5 py-4 font-black">Information required</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {buyerChecklist.map(([label, value]) => (
                <tr key={label}><th className="px-5 py-4 font-bold text-orange">{label}</th><td className="px-5 py-4 leading-6 text-slate-300">{value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="From Sample to Shipment" title="OEM workflow" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-4">
          {["Requirement review", "Sample confirmation", "Bulk production", "Packing inspection"].map((step, index) => (
            <div key={step} className="rounded-md border border-orange/20 bg-orange/10 p-5">
              <span className="text-3xl font-black text-orange">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 font-bold text-white">{step}</h2>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Product Programs" title="Choose a starting product family">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Full Face Respirators", description: "Factory programs for reusable full facepieces, RD40 configurations and distributor-ready kits.", href: "/full-face-respirators/" },
            { title: "Half Face Respirators", description: "Compact reusable half masks for industrial safety distributors and private-label product lines.", href: "/half-face-respirators/" },
            { title: "Filters & Cartridges", description: "Model-specific filter, cartridge, canister and packaging review for compatible product programs.", href: "/respirator-filters-cartridges/" }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:border-orange/50">
              <h2 className="text-xl font-black text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              <span className="mt-5 inline-block text-sm font-bold text-orange">Review models →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buyer Questions" title="OEM respirator FAQ" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-md border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-black text-white">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Procurement Resources" title="Continue your supplier review">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "OEM MOQ & Sample Checklist", href: "/resources/full-face-respirator-oem-moq-packaging-documents-sample-checklist/" },
            { title: "How to Choose a Manufacturer", href: "/resources/how-to-choose-full-face-respirator-manufacturer-china/" },
            { title: "Quality & Documents", href: "/quality/" }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md border border-white/10 bg-navy p-5 font-bold text-white transition hover:border-orange/50 hover:text-orange">{item.title}</Link>
          ))}
        </div>
        <div className="mt-8"><ButtonLink href="/contact/?product=OEM%20Private%20Label%20Respirator">Send Model-Specific RFQ</ButtonLink></div>
      </Section>
    </>
  );
}
