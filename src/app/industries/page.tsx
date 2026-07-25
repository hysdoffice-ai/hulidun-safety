import Link from "next/link";
import type { Metadata } from "next";
import { Factory, SearchCheck } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { CTAButton } from "@/components/common/CTAButton";
import { SectionHeader } from "@/components/common/SectionHeader";
import { industryLandings } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industrial Respirator Sourcing Pages | Manufacturer Buyer Guides",
  description:
    "High-intent sourcing guides for industrial PAPR ODM projects, full face respirators, gas masks, filter cartridges, chemical respirators and emergency PPE.",
  alternates: {
    canonical: "/industries/"
  }
};

export default function IndustriesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industrial respirator sourcing pages",
    itemListElement: industryLandings.map((landing, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: landing.keyword,
      url: `https://www.hulidun.com/industries/${landing.slug}/`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Buyer Intent"
            title="Industrial respirator sourcing pages"
            description="Focused sourcing pages for buyers comparing industrial PAPR ODM projects, respirator types, workplace hazards and procurement scenarios."
          />
          <div className="mb-8 rounded-md border border-orange/30 bg-orange/10 p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-xl font-black text-white">Need a fast product recommendation?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Send your application, hazard type, quantity and target market. Hulidun Safety will suggest suitable respirators, filters and packaging options.
                </p>
              </div>
              <CTAButton href="/contact/" variant="dark">Send RFQ</CTAButton>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industryLandings.map((landing) => (
              <Link
                key={landing.slug}
                href={`/industries/${landing.slug}/`}
                className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-orange/50"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <Factory className="h-7 w-7 text-orange" />
                  <Badge tone="orange">{landing.eyebrow}</Badge>
                </div>
                <h2 className="text-lg font-bold text-white">{landing.keyword}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{landing.metaDescription}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-orange">
                  <SearchCheck className="h-4 w-4" />
                  View sourcing guide
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
