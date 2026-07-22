import Link from "next/link";
import { FileText } from "lucide-react";
import type { Resource } from "@/data/resources";
import { Badge } from "@/components/common/Badge";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrackedLink } from "@/components/common/TrackedLink";

type ResourcePreviewProps = {
  resources: Resource[];
};

export function ResourcePreview({ resources }: ResourcePreviewProps) {
  const latestResources = [...resources]
    .sort((a, b) =>
      (b.updatedAt ?? b.publishedAt ?? "2026-07-17").localeCompare(a.updatedAt ?? a.publishedAt ?? "2026-07-17")
    )
    .slice(0, 3);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Resource Center" title="Buyer education for safer product configuration" />
        <div className="mb-6 rounded-md border border-orange/30 bg-orange/10 p-5">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-black text-white">Download Hulidun Safety Product Catalog</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Full product family reference for respirators, cartridges, filters, chemical protective clothing and PPE accessories.
              </p>
            </div>
            <TrackedLink
              href="/downloads/hulidun-safety-product-catalog.pdf"
              eventName="file_download"
              eventParams={{ file_name: "hulidun-safety-product-catalog.pdf", source: "home_resources" }}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-orange px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90"
            >
              Download Catalog
            </TrackedLink>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestResources.map((resource) => (
            <Link key={resource.id} href={`/resources/${resource.slug}/`} className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-warning/50">
              <FileText className="mb-4 h-7 w-7 text-warning" />
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge tone="yellow">{resource.category}</Badge>
                <Badge>{resource.readTime}</Badge>
              </div>
              <h3 className="text-lg font-bold text-white">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{resource.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
