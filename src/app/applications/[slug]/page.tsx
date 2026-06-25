import { Factory } from "lucide-react";
import { notFound } from "next/navigation";
import { applications } from "@/data/applications";
import { HazardCard } from "@/components/applications/HazardCard";
import { RecommendedProducts } from "@/components/applications/RecommendedProducts";
import { Badge } from "@/components/common/Badge";
import { CTAButton } from "@/components/common/CTAButton";
import { Section } from "@/components/section";

export function generateStaticParams() {
  return applications.map((application) => ({ slug: application.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const application = applications.find((item) => item.slug === params.slug);
  return {
    title: application ? `${application.name} Respiratory Protection Solution` : "Application Solution",
    description: application?.summary
  };
}

export default function ApplicationDetailPage({ params }: { params: { slug: string } }) {
  const application = applications.find((item) => item.slug === params.slug);
  if (!application) notFound();

  return (
    <>
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Factory className="mb-6 h-12 w-12 text-orange" />
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">{application.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{application.summary}</p>
          <div className="mt-8">
            <CTAButton href="/contact">Request Application Recommendation</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Typical hazards">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {application.typicalHazards.map((hazard) => (
            <HazardCard key={hazard} title={hazard} />
          ))}
        </div>
        <p className="mt-8 rounded-md border border-warning/30 bg-warning/10 p-4 text-sm leading-6 text-warning">{application.disclaimer}</p>
      </Section>

      <Section title="Recommended products and filters" className="bg-slate-950/60">
        <RecommendedProducts products={application.recommendedProducts} filters={application.recommendedFilters} />
      </Section>

      <Section title="Buyer types">
        <div className="flex flex-wrap gap-3">
          {application.buyerTypes.map((buyer) => (
            <Badge key={buyer} tone="orange">
              {buyer}
            </Badge>
          ))}
        </div>
      </Section>
    </>
  );
}
