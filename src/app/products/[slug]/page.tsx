import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Badge } from "@/components/common/Badge";
import { CTAButton } from "@/components/common/CTAButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { CompatibleFilters } from "@/components/products/CompatibleFilters";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductSpecTable } from "@/components/products/ProductSpecTable";
import { ComplianceNotice } from "@/components/notice";
import { Section } from "@/components/section";
import { brandName, certificationNotice, companyName } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  return {
    title: product ? `${product.model} ${product.name} | Respiratory Protection Product` : "Product Detail",
    description: product?.shortDescription,
    alternates: product ? { canonical: `/products/${product.slug}/` } : undefined,
    openGraph: product
      ? {
          title: `${product.model} ${product.name} | ${brandName}`,
          description: product.shortDescription,
          images: [product.image]
        }
      : undefined
  };
}

function getProductFaqs(product: (typeof products)[number]) {
  return [
    {
      question: `What is the MOQ for ${product.model} ${product.name}?`,
      answer:
        "The standard reference MOQ is 200 pcs. Final MOQ depends on exact model, packaging, logo customization and current stock status."
    },
    {
      question: `Can ${product.model} ${product.name} be supplied with OEM packaging?`,
      answer:
        "Yes. Hulidun Safety supports logo customization, color box, instruction manual, outer carton and private-label packaging for qualified orders."
    },
    {
      question: `Which filters are compatible with ${product.model} ${product.name}?`,
      answer: `Compatible options may include ${product.compatibleFilters.join(", ")}. Final filter selection should be confirmed according to workplace hazards, connector type and local regulations.`
    },
    {
      question: `Can Hulidun Safety provide documents for ${product.model} ${product.name}?`,
      answer:
        "Product data sheets, packing lists, technical photos and available test reports can be provided upon request for distributor review and project procurement."
    }
  ];
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const productFaqs = getProductFaqs(product);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.model} ${product.name}`,
    image: `https://www.hulidun.com${product.image}`,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: brandName
    },
    manufacturer: {
      "@type": "Organization",
      name: companyName
    },
    category: product.category,
    sku: product.model,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Distributors, wholesalers, project buyers and OEM/ODM customers"
    },
    offers: {
      "@type": "Offer",
      url: `https://www.hulidun.com/products/${product.slug}/`,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: companyName
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hulidun.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.hulidun.com/products/"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${product.model} ${product.name}`,
        item: `https://www.hulidun.com/products/${product.slug}/`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-grid bg-[length:40px_40px] opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <Badge tone="orange">{product.model}</Badge>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-6xl">{product.name}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{product.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton source={`${product.model} ${product.name}`} />
              <CTAButton href="/contact" variant="dark">Send Detailed RFQ</CTAButton>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-navy p-5 shadow-panel">
            <ImageWithFallback
              src={product.image}
              alt={`${product.model} ${product.name}`}
              className="aspect-[4/3] border border-white/10"
              imgClassName="object-contain p-5"
              fallbackLabel={`${product.model} product image`}
            />
            <p className="mt-3 text-xs text-slate-500">{product.image}</p>
          </div>
        </div>
      </section>

      <Section title="Key Features" eyebrow="Product Detail">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product.keyFeatures.map((feature) => (
            <div key={feature} className="rounded-md border border-white/10 bg-white/[0.04] p-5 text-slate-200">
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Applications" className="bg-slate-950/60">
        <div className="flex flex-wrap gap-3">
          {product.applications.map((item) => (
            <Badge key={item} tone="orange">
              {item}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title="Technical Specifications">
        <ProductSpecTable specifications={product.specifications} />
      </Section>

      <Section title="Compatible Filters" className="bg-slate-950/60">
        <CompatibleFilters filters={product.compatibleFilters} />
        <div className="mt-8">
          <ComplianceNotice />
        </div>
      </Section>

      <Section title="Materials & OEM Options">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
            <h2 className="mb-4 text-xl font-bold text-white">Materials</h2>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
            <h2 className="mb-4 text-xl font-bold text-white">OEM Options</h2>
            <div className="flex flex-wrap gap-2">
              {product.oemOptions.map((item) => (
                <Badge key={item} tone="yellow">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Documents" className="bg-slate-950/60" intro={certificationNotice}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {product.documents.map((doc) => (
            <div key={doc} className="rounded-md border border-white/10 bg-navy p-5">
              {doc}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Procurement FAQ">
        <div className="grid gap-4 md:grid-cols-2">
          {productFaqs.map((faq) => (
            <div key={faq.question} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-lg font-bold text-white">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Related Products">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </Section>

      <Section title="Request Configuration Support" className="bg-slate-950/60">
        <ProductCTA />
      </Section>
    </>
  );
}
