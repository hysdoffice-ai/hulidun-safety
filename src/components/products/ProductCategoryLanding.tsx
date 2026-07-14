import { CheckCircle2 } from "lucide-react";
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
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
      <Section eyebrow="RFQ Support" title="Send the hazard, model and quantity for review">
        <ProductCTA productName={landing.category} />
      </Section>
    </>
  );
}
