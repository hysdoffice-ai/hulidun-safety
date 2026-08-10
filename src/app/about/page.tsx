import type { Metadata } from "next";
import Link from "next/link";
import { Factory, FileCheck2, Globe2, Mail, ShieldCheck, Target } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Section } from "@/components/section";
import { factoryImages } from "@/data/quality";
import {
  brandRelation,
  brandSlogan,
  buyerTypes,
  companyAddress,
  companyFacts,
  companyIntro,
  companyName,
  companyPositioning,
  companyStrengths,
  contactEmail,
  contactPerson,
  contactWhatsApp,
  exportMarkets,
  hulidunStatement,
  tradeHighlights
} from "@/data/site";

export const metadata: Metadata = {
  title: "About Hulidun Safety | Respiratory Protection Manufacturer",
  description:
    "Learn about Shanxi Hongyu Times Technology Co., Ltd., the company behind Hulidun Safety, its factory, product range and B2B export capabilities.",
  alternates: {
    canonical: "/about/"
  }
};

const range = [
  "Full face respirators",
  "Half face respirators",
  "Cartridges and filters",
  "Supplied-air and powered-air systems",
  "Protective suits",
  "Gloves, goggles and ear muffs",
  "Emergency safety supplies"
];
const reasons = ["Respiratory protection category focus", "Stable cartridge and filter supply", "Distributor and wholesaler support", "Project buyer cooperation", "OEM/ODM flexibility", "English documentation support"];
const overview = [
  { title: "Company focus", text: companyPositioning, icon: Target },
  { title: "Product range", text: "Respiratory protection, chemical protection and emergency safety PPE products.", icon: ShieldCheck },
  { title: "Supply support", text: "Stable respirator cartridge and filter replenishment for long-term distributor programs.", icon: Factory },
  { title: "Export cooperation", text: "Flexible cooperation for distributors, wholesalers, project buyers and OEM/ODM customers.", icon: Globe2 }
];
const timeline = [
  ["2019", "Shanxi Hongyu Times Technology Co., Ltd. was established."],
  ["Factory", "Self-owned production and warehouse capability built in Taiyuan, Shanxi."],
  ["Product Range", "Respirators, cartridges, filters, protective clothing and PPE accessories expanded."],
  ["Export", "Distributor and industrial buyer cooperation developed for Southeast Asia and Europe."]
];

export default function AboutPage() {
  const pageUrl = "https://www.hulidun.com/about/";
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `About ${companyName}`,
    description: companyIntro,
    dateModified: "2026-08-10",
    mainEntity: { "@id": "https://www.hulidun.com/#organization" },
    isPartOf: { "@id": "https://www.hulidun.com/#website" },
    publisher: { "@id": "https://www.hulidun.com/#organization" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange">About Us</p>
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">{companyName}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{companyIntro}</p>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-orange">{brandRelation}</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{companyAddress}</p>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-warning">{brandSlogan}</p>
        </div>
      </section>
      <Section title="Company overview">
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {companyFacts.map((fact) => (
            <div key={fact.label} className="rounded-md border border-orange/20 bg-orange/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange">{fact.label}</p>
              <p className="mt-2 text-xl font-black text-white">{fact.value}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {overview.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <Icon className="mb-4 h-8 w-8 text-orange" />
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-md border border-orange/20 bg-orange/10 p-5 text-sm leading-7 text-slate-200">{hulidunStatement}</div>
      </Section>
      <Section title="Product range" className="bg-slate-950/60">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{range.map((item) => <div key={item} className="rounded-md border border-white/10 bg-navy p-5">{item}</div>)}</div>
      </Section>
      <Section title="Distributor support">
        <div className="grid gap-4 md:grid-cols-3">
          {companyStrengths.map((item) => (
            <div key={item} className="rounded-md border border-warning/20 bg-warning/10 p-5 text-sm font-semibold leading-6 text-warning">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-bold text-white">Export Markets</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {exportMarkets.map((market) => (
                <span key={market} className="rounded-md border border-white/10 bg-navy px-3 py-2 text-sm font-semibold text-slate-200">
                  {market}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-bold text-white">Main Buyer Types</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {buyerTypes.map((buyer) => (
                <span key={buyer} className="rounded-md border border-white/10 bg-navy px-3 py-2 text-sm font-semibold text-slate-200">
                  {buyer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section title="Manufacturing capability">
        <div className="grid gap-5 md:grid-cols-3">
          {factoryImages.map((item) => (
            <article key={item.src} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <ImageWithFallback src={item.src} alt={item.title} className="aspect-[4/3]" />
              <h2 className="mt-4 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Verify Hulidun Safety" eyebrow="Buyer Due Diligence" className="bg-slate-950/60">
        <p className="max-w-3xl text-sm leading-7 text-slate-300">
          Buyers should verify the legal company, exact product model, manufacturing information and document scope before placing a bulk order. Hulidun Safety provides available company, product and quality documents for model-specific review rather than treating one document as evidence for every product.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <article className="rounded-md border border-white/10 bg-navy p-5">
            <FileCheck2 className="h-7 w-7 text-orange" />
            <h2 className="mt-4 text-lg font-bold text-white">Review documents</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Check document title, issuing body, referenced model and target-market scope.</p>
            <Link className="mt-4 inline-block text-sm font-bold text-orange" href="/quality/">View quality information</Link>
          </article>
          <article className="rounded-md border border-white/10 bg-navy p-5">
            <Mail className="h-7 w-7 text-orange" />
            <h2 className="mt-4 text-lg font-bold text-white">Confirm the supplier</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Contact {contactPerson} at {contactEmail} or WhatsApp {contactWhatsApp} and request model-specific information.</p>
            <Link className="mt-4 inline-block text-sm font-bold text-orange" href="/contact/">Contact the company</Link>
          </article>
          <article className="rounded-md border border-white/10 bg-navy p-5">
            <ShieldCheck className="h-7 w-7 text-orange" />
            <h2 className="mt-4 text-lg font-bold text-white">Approve an exact sample</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Match the sample, filters, markings, instructions, documents and packaging to the written RFQ.</p>
            <Link className="mt-4 inline-block text-sm font-bold text-orange" href="/resources/respirator-sample-approval-checklist-before-bulk-order/">Use the sample checklist</Link>
          </article>
        </div>
      </Section>
      <Section title="Why choose us">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reasons.map((item) => <div key={item} className="rounded-md border border-orange/20 bg-orange/10 p-5 text-orange">{item}</div>)}</div>
      </Section>
      <Section title="Ordering reference" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-4">
          {tradeHighlights.map((item) => (
            <div key={item.label} className="rounded-md border border-white/10 bg-navy p-5">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{item.label}</h2>
              <p className="mt-2 text-2xl font-black text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Company timeline" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-4">
          {timeline.map(([year, text]) => <div key={year} className="rounded-md border border-white/10 bg-navy p-5"><h2 className="font-bold text-warning">{year}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></div>)}
        </div>
      </Section>
    </>
  );
}
