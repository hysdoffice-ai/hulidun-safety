import type { Metadata } from "next";
import { applications } from "@/data/applications";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { ApplicationGrid } from "@/components/home/ApplicationGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HazardSelector } from "@/components/home/HazardSelector";
import { HeroSection } from "@/components/home/HeroSection";
import { OemSupport } from "@/components/home/OemSupport";
import { ProductMatrix } from "@/components/home/ProductMatrix";
import { QualityPreview } from "@/components/home/QualityPreview";
import { ResourcePreview } from "@/components/home/ResourcePreview";
import { Section } from "@/components/section";

const homepageFaqs = [
  {
    question: "What does Hulidun Safety manufacture?",
    answer:
      "Hulidun Safety supplies full face respirators, half face respirators, respirator cartridges, filter canisters, supplied-air systems, chemical protective clothing and emergency PPE for B2B buyers."
  },
  {
    question: "Does Hulidun Safety support OEM and private label orders?",
    answer:
      "Yes. Hulidun Safety supports logo customization, color box packaging, instruction manuals, outer carton marks and distributor catalog assets for OEM and private-label respiratory protection programs."
  },
  {
    question: "Who is the site for?",
    answer:
      "The site is built for distributors, wholesalers, industrial project buyers, local safety suppliers and OEM/ODM customers sourcing respiratory protection and chemical safety PPE from China."
  },
  {
    question: "How should buyers choose respirators and filters?",
    answer:
      "Buyers should identify workplace hazards, exposure conditions, required eye and face protection, filter compatibility, local regulations and technical documentation before selecting respirators or cartridges."
  }
];

export const metadata: Metadata = {
  title: "Industrial Respiratory Protection Manufacturer | Full Face Respirators & Gas Masks",
  description:
    "China-based supplier of industrial respiratory protection, chemical safety PPE and emergency protection solutions for hazardous workplaces.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeroSection />
      <ProductMatrix />
      <HazardSelector />
      <ApplicationGrid applications={applications} />
      <FeaturedProducts products={products} />
      <OemSupport />
      <QualityPreview />
      <ResourcePreview resources={resources} />
      <Section
        eyebrow="Buyer Questions"
        title="Industrial Respiratory Protection FAQ"
        intro="Short answers for distributors and project buyers comparing respirators, filters and OEM PPE supply options."
        className="bg-slate-950/60"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {homepageFaqs.map((item) => (
            <article key={item.question} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-lg font-black text-white">{item.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
