import Link from "next/link";
import { FileText } from "lucide-react";
import { resources } from "@/data/resources";
import { Badge } from "@/components/common/Badge";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function ResourcesPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resources"
          title="Respiratory protection resource center"
          description="Educational articles for overseas buyers comparing respirator types, filter choices, workplace applications and reusable product maintenance."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.id} href="/resources" className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-warning/50">
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
