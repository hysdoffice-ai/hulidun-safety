import type { Metadata } from "next";
import { solutions } from "@/data/solutions";
import { Badge } from "@/components/common/Badge";
import { CTAButton } from "@/components/common/CTAButton";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Configured Respiratory Protection & PPE Solutions",
  description:
    "Compare configured respirator, filter, supplied-air and emergency PPE kits for industrial buyers, distributors and project procurement.",
  alternates: {
    canonical: "/solutions/"
  }
};

export default function SolutionsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions"
          title="Configured respiratory protection kits"
          description="Package product combinations by hazard, workplace process and buyer channel to support faster RFQs and distributor launches."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.id} className="rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-orange/50">
              <h2 className="text-xl font-bold text-white">{solution.name}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{solution.summary}</p>
              <div className="mt-5">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange">Included Products</p>
                <div className="flex flex-wrap gap-2">
                  {solution.includedProducts.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-warning">Suitable For</p>
                <div className="flex flex-wrap gap-2">
                  {solution.suitableFor.map((item) => (
                    <Badge key={item} tone="yellow">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">
                <span className="font-semibold text-slate-100">Recommended buyers:</span> {solution.buyerTypes.join(", ")}
              </p>
              <div className="mt-6">
                <CTAButton href="/contact/" variant="outline">
                  {solution.cta}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
