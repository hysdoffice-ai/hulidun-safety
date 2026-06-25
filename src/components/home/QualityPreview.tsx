import { Boxes, ClipboardCheck, FileText, Gauge, PackageCheck, Wind } from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/common/FeatureCard";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { SectionHeader } from "@/components/common/SectionHeader";
import { documentPreviews, factoryImages } from "@/data/quality";

const items = [
  { title: "Material inspection", icon: ClipboardCheck },
  { title: "Air tightness test", icon: Wind },
  { title: "Breathing resistance test", icon: Gauge },
  { title: "Filter compatibility", icon: PackageCheck },
  { title: "Technical documents", icon: FileText },
  { title: "Packing inspection", icon: Boxes }
];

export function QualityPreview() {
  return (
    <section className="bg-slate-950/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Quality & Documentation" title="Inspection checkpoints for industrial respiratory products" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description="Records and technical documents can be prepared according to product type, order scope and target market requirements." />
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <ImageWithFallback src={factoryImages[0].src} alt={factoryImages[0].title} className="aspect-[16/9]" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {factoryImages.slice(1, 5).map((item) => (
                <div key={item.src} className="rounded-md border border-white/10 bg-slate-950/60 p-3">
                  <ImageWithFallback src={item.src} alt={item.title} className="aspect-[4/3]" />
                  <p className="mt-2 text-xs font-bold text-slate-200">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-orange/20 bg-orange/10 p-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {documentPreviews.slice(0, 4).map((item) => (
                <div key={item.src} className="grid grid-cols-[80px_1fr] gap-3 rounded-md border border-white/10 bg-slate-950/70 p-3">
                  <ImageWithFallback src={item.src} alt={item.title} className="aspect-[3/4]" imgClassName="object-contain bg-white" />
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/quality" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-orange px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90">
              View Factory & Certificates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
