import type { Metadata } from "next";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ComplianceNotice } from "@/components/notice";
import { Section } from "@/components/section";
import { certificationNotice } from "@/data/site";
import { documentPreviews, factoryImages, qualityImage, qualitySteps } from "@/data/quality";

export const metadata: Metadata = {
  title: "Factory Strength, Certificates & Quality Control",
  description:
    "Review factory workshop previews, certificate document samples, inspection, testing and quality control process for respiratory protection products.",
  alternates: {
    canonical: "/quality/"
  }
};

export default function QualityPage() {
  return (
    <>
      <Section eyebrow="Factory Strength & Certificates" title="Factory Workshop, Certificates & Quality Control" intro="Review workshop previews, warehouse capacity, certificate samples and inspection checkpoints for international B2B orders.">
        <div className="mb-8 rounded-md border border-white/10 bg-gradient-to-br from-slate-700 via-slate-900 to-black p-5 shadow-panel">
          <ImageWithFallback src={qualityImage} alt="Factory production equipment" className="aspect-[16/7] min-h-64 border border-orange/20" fallbackLabel="Factory quality control image" priority />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {qualitySteps.map((step, index) => (
            <div key={step} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <span className="text-2xl font-black text-orange">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 text-xl font-bold text-white">{step}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Records and supporting technical documents can be prepared according to product type, order scope and target market requirements.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Manufacturing & Warehouse Preview" className="bg-slate-950/60">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {factoryImages.map((item) => (
            <article key={item.src} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <ImageWithFallback src={item.src} alt={item.title} className="aspect-[4/3]" />
              <h2 className="mt-4 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Certificate & Test Report Preview" intro="The following previews are shown as supporting document samples. Product selection and market compliance should be confirmed by target-market requirements and official document review.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {documentPreviews.map((item) => (
            <article key={item.src} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <ImageWithFallback src={item.src} alt={item.title} className="aspect-[3/4]" imgClassName="object-contain bg-white" />
              <h2 className="mt-4 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Compliance Notice" className="bg-slate-950/60">
        <div className="grid gap-5 lg:grid-cols-2">
          <ComplianceNotice />
          <div className="rounded-md border border-white/10 bg-navy p-5 text-sm leading-7 text-slate-300">{certificationNotice}</div>
        </div>
      </Section>
    </>
  );
}
