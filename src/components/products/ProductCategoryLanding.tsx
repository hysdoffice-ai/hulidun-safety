import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ComplianceNotice } from "@/components/notice";
import { Section } from "@/components/section";
import type { ProductCategoryLanding as ProductCategoryLandingData } from "@/data/product-categories";
import { products } from "@/data/products";

type ProductCategoryLandingProps = {
  landing: ProductCategoryLandingData;
};

export function ProductCategoryLanding({ landing }: ProductCategoryLandingProps) {
  const categoryProducts = products.filter((product) => product.category === landing.category);
  const buyerResources = landing.category === "Half Face Respirators"
    ? [
        {
          href: "/resources/how-to-choose-half-face-respirator-manufacturer-china/",
          title: "Half Mask Manufacturer Checklist",
          text: "Compare materials, sizes, cartridges, samples, documents and replenishment supply."
        },
        {
          href: "/resources/respirator-fit-testing-procurement-checklist/",
          title: "Fit Testing Procurement Checklist",
          text: "Plan sample sizes, workplace approval and fit-testing responsibilities before deployment."
        }
      ]
    : landing.category === "Filters & Cartridges"
      ? [
          {
            href: "/resources/how-to-select-respirator-filter-cartridges/",
            title: "Filter Cartridge Selection Guide",
            text: "Match the filter family to the identified contaminant, facepiece and connector."
          },
          {
            href: "/resources/respirator-cartridge-change-schedule-procurement-guide/",
            title: "Cartridge Change Schedule Guide",
            text: "Prepare objective replacement planning, storage and replenishment information."
          }
        ]
      : [
          {
            href: "/resources/how-to-choose-full-face-respirator-manufacturer-china/",
            title: "Manufacturer Due-Diligence Checklist",
            text: "Verify the legal company, factory, exact-model documents, samples and written commercial scope."
          },
          {
            href: "/resources/full-face-respirator-oem-moq-packaging-documents-sample-checklist/",
            title: "OEM, MOQ and Sample Checklist",
            text: "Prepare a complete private-label RFQ covering product marking, packaging, documents and sample approval."
          }
        ];
  const baseUrl = `https://www.hulidun.com/${landing.slug}/`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hulidun.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.hulidun.com/products/" },
      { "@type": "ListItem", position: 3, name: landing.title, item: baseUrl }
    ]
  };
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: landing.title,
    description: landing.metaDescription,
    url: baseUrl,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${product.model} ${product.name}`,
        url: `https://www.hulidun.com/products/${product.slug}/`
      }))
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.buyerQuestions.map((item) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Section eyebrow={landing.eyebrow} title={landing.title} intro={landing.description} headingLevel="h1">
        <div className="rounded-md border border-orange/30 bg-orange/10 p-5 text-base leading-7 text-slate-200">
          <span className="font-black text-white">Quick answer: </span>{landing.buyerAnswer}
        </div>
        <div className="mt-6"><ComplianceNotice /></div>
      </Section>
      <Section eyebrow="Product Range" title={`${categoryProducts.length} models for comparison`} className="bg-slate-950/60">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </Section>
      <Section eyebrow="Buyer Checklist" title="How to shortlist the right configuration">
        <div className="grid gap-4 md:grid-cols-2">
          {landing.selectionSteps.map((step) => (
            <div key={step} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-200">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <p>{step}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Specification Comparison"
        title="Information to verify before requesting a quote"
        intro="Use the same comparison fields for every shortlisted supplier so samples, documents and commercial terms can be evaluated consistently."
        className="bg-slate-950/60"
      >
        <div className="overflow-x-auto rounded-md border border-white/10">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-orange/10 text-white">
              <tr>
                <th className="border-b border-white/10 px-5 py-4 font-black">Criterion</th>
                <th className="border-b border-white/10 px-5 py-4 font-black">What the buyer should verify</th>
                <th className="border-b border-white/10 px-5 py-4 font-black">Information to include in the RFQ</th>
              </tr>
            </thead>
            <tbody>
              {landing.comparisonRows.map((row) => (
                <tr key={row.criterion} className="border-b border-white/10 last:border-0">
                  <th className="px-5 py-4 align-top font-bold text-orange">{row.criterion}</th>
                  <td className="px-5 py-4 align-top leading-6 text-slate-300">{row.buyerCheck}</td>
                  <td className="px-5 py-4 align-top leading-6 text-slate-300">{row.rfqInput}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section eyebrow="Buyer Questions" title="Procurement answers" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-2">
          {landing.buyerQuestions.map((item) => (
            <article key={item.question} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-lg font-black text-white">{item.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Buyer Resources" title="Continue the procurement review">
        <div className="grid gap-4 md:grid-cols-2">
          {buyerResources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange/50"
            >
              <h2 className="text-lg font-black text-white">{resource.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{resource.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange">
                Read buyer guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="RFQ Support" title="Send the hazard, model and quantity for review">
        <ProductCTA productName={landing.category} />
      </Section>
    </>
  );
}
