import Link from "next/link";
import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { resources } from "@/data/resources";
import { Badge } from "@/components/common/Badge";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrackedLink } from "@/components/common/TrackedLink";

export const metadata: Metadata = {
  title: "Respirator Buyer Guides & PPE Resources",
  description:
    "Official-source-reviewed buyer guides for respirator fit testing, cartridge change schedules, filter selection, supplied-air systems and reusable respirator maintenance.",
  alternates: {
    canonical: "/resources/"
  }
};

export default function ResourcesPage() {
  const orderedResources = [...resources].sort((a, b) =>
    (b.updatedAt ?? b.publishedAt ?? "2026-07-17").localeCompare(a.updatedAt ?? a.publishedAt ?? "2026-07-17")
  );

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resources"
          title="Respiratory protection resource center"
          description="Official-source-reviewed articles for overseas buyers comparing fit testing, respirator types, filter choices, workplace applications and reusable product maintenance."
        />
        <div className="mb-8 rounded-md border border-orange/30 bg-orange/10 p-5">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-xl font-black text-white">Hulidun Safety Product Catalog</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Download the official product catalog for full face respirators, half masks, cartridges, filters, chemical protective clothing and PPE accessories.
              </p>
            </div>
            <TrackedLink
              href="/downloads/hulidun-safety-product-catalog.pdf"
              eventName="file_download"
              eventParams={{ file_name: "hulidun-safety-product-catalog.pdf", source: "resources_page" }}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-orange px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90"
            >
              Download PDF
            </TrackedLink>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {orderedResources.map((resource) => (
            <Link key={resource.id} href={`/resources/${resource.slug}/`} className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-warning/50">
              <FileText className="mb-4 h-7 w-7 text-warning" />
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge tone="yellow">{resource.category}</Badge>
                <Badge>{resource.readTime}</Badge>
              </div>
              <h2 className="text-lg font-bold text-white">{resource.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{resource.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
