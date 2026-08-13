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
  const title = product
    ? `${product.model} ${product.name} Manufacturer | OEM Respiratory Protection`
    : "Product Detail";
  const description = product
    ? `${product.shortDescription} MOQ, lead time, OEM packaging, compatible filters and technical documents are available for distributor RFQs.`
    : undefined;

  return {
    title,
    description,
    alternates: product ? { canonical: `/products/${product.slug}/` } : undefined,
    keywords: product
      ? [
          `${product.model} ${product.name}`,
          `${product.name} manufacturer`,
          `${product.category} supplier`,
          "China PPE manufacturer",
          "OEM respirator supplier",
          "industrial respiratory protection"
        ]
      : undefined,
    openGraph: product
      ? {
          title: `${product.model} ${product.name} Manufacturer | ${brandName}`,
          description,
          url: `https://www.hulidun.com/products/${product.slug}/`,
          type: "website",
          images: [product.image]
        }
      : undefined,
    twitter: product
      ? {
          card: "summary_large_image",
          title: `${product.model} ${product.name} | ${brandName}`,
          description,
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
  const quoteHref = `/contact/?model=${encodeURIComponent(product.model)}&product=${encodeURIComponent(product.name)}`;
  const productUrl = `https://www.hulidun.com/products/${product.slug}/`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: `${product.model} ${product.name}`,
    description: product.longDescription,
    image: `https://www.hulidun.com${product.image}`,
    url: productUrl,
    sku: product.model,
    model: product.model,
    category: product.category,
    brand: { "@type": "Brand", name: brandName },
    manufacturer: { "@id": "https://www.hulidun.com/#organization" },
    identifier: { "@type": "PropertyValue", propertyID: "Model", value: product.model },
    material: product.materials,
    additionalProperty: product.specifications.map((specification) => ({
      "@type": "PropertyValue",
      name: specification.label,
      value: specification.value
    })),
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Distributors, wholesalers, project buyers and OEM/ODM customers"
    }
  };

  const productPageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": `${productUrl}#webpage`,
    url: productUrl,
    name: `${product.model} ${product.name}`,
    description: product.shortDescription,
    dateModified: product.updatedAt,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `https://www.hulidun.com${product.image}`,
      caption: `${product.model} ${product.name}`
    },
    about: { "@id": `${productUrl}#product` },
    mainEntity: { "@id": `${productUrl}#product` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Distributors, wholesalers, project buyers and OEM/ODM customers"
    },
    isPartOf: { "@id": "https://www.hulidun.com/#website" },
    publisher: { "@id": "https://www.hulidun.com/#organization", name: companyName }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productPageSchema) }}
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
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-6xl">{product.model} {product.name}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{product.longDescription}</p>
            <p className="mt-5 rounded-md border border-orange/25 bg-orange/10 p-4 text-sm leading-7 text-slate-200">
              Quick answer: {product.model} {product.name} is supplied by {brandName} for {product.applications.slice(0, 3).join(", ").toLowerCase()} procurement, with reference MOQ from 200 pcs, OEM packaging support and technical documents available upon request.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton source={`${product.model} ${product.name}`} />
              <CTAButton
                href="/downloads/hulidun-safety-product-catalog.pdf"
                variant="outline"
                trackingEvent="file_download"
                trackingParams={{ file_name: "hulidun-safety-product-catalog.pdf", source: `product_${product.slug}` }}
              >
                Download Product Catalog
              </CTAButton>
              <CTAButton href={quoteHref} rel="nofollow" variant="dark">Request Quote</CTAButton>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-navy p-5 shadow-panel">
            <ImageWithFallback
              src={product.image}
              alt={`${product.model} ${product.name} ${product.applications[0] ?? "industrial application"}`}
              className="aspect-[4/3] border border-white/10"
              imgClassName="object-contain p-5"
              fallbackLabel={`${product.model} product image`}
              priority
            />
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

      <Section
        title="Buyer Procurement Checklist"
        eyebrow="Before You Order"
        intro={`Use these ${product.model}-specific checks to prepare a clearer sample request and quotation.`}
        className="bg-slate-950/60"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {product.procurementChecks.map((item, index) => (
            <article key={item} className="rounded-md border border-orange/20 bg-orange/[0.06] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange">Check {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Compatible Filters">
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
        <ProductCTA model={product.model} productName={product.name} />
      </Section>
    </>
  );
}
