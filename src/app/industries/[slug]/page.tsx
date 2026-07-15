import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2, ClipboardList, Factory } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { CTAButton } from "@/components/common/CTAButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCTA } from "@/components/products/ProductCTA";
import { Section } from "@/components/section";
import { industryLandings } from "@/data/industries";
import { products } from "@/data/products";
import { brandName, companyName, complianceNotice } from "@/data/site";

export function generateStaticParams() {
  return industryLandings.map((landing) => ({ slug: landing.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const landing = industryLandings.find((item) => item.slug === params.slug);

  if (!landing) {
    return {
      title: "Industrial Respirator Sourcing Guide"
    };
  }

  return {
    title: landing.keyword,
    description: landing.metaDescription,
    alternates: {
      canonical: `/industries/${landing.slug}/`
    },
    openGraph: {
      title: landing.title,
      description: landing.metaDescription,
      url: `https://www.hulidun.com/industries/${landing.slug}/`
    }
  };
}

export default function IndustryLandingPage({ params }: { params: { slug: string } }) {
  const landing = industryLandings.find((item) => item.slug === params.slug);
  if (!landing) notFound();

  const recommendedProducts = landing.recommendedProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  const pageUrl = `https://www.hulidun.com/industries/${landing.slug}/`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
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
        name: "Industries",
        item: "https://www.hulidun.com/industries/"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: landing.keyword,
        item: pageUrl
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: landing.title,
    description: landing.metaDescription,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: companyName
    },
    publisher: {
      "@type": "Organization",
      name: brandName,
      logo: {
        "@type": "ImageObject",
        url: "https://www.hulidun.com/images/brand/logo.png"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-grid bg-[length:40px_40px] opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Badge tone="orange">{landing.eyebrow}</Badge>
            <h1 className="mt-5 text-balance text-4xl font-black text-white sm:text-6xl">{landing.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{landing.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton source={landing.keyword} />
              <CTAButton href="/contact" variant="dark">Request Quote</CTAButton>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-navy p-5 shadow-panel">
            <Factory className="mb-5 h-10 w-10 text-orange" />
            <h2 className="text-2xl font-black text-white">Buyer intent matched</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {landing.buyerIntent.map((intent) => (
                <Badge key={intent} tone="yellow">{intent}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section title="Recommended Product Scope" eyebrow="Sourcing Match">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section title="Applications and Hazards" className="bg-slate-950/60">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
            <CheckCircle2 className="mb-4 h-7 w-7 text-acid" />
            <h2 className="text-xl font-bold text-white">Typical Applications</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {landing.applications.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
            <AlertTriangle className="mb-4 h-7 w-7 text-warning" />
            <h2 className="text-xl font-bold text-white">Hazards to Confirm</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {landing.hazards.map((item) => (
                <Badge key={item} tone="yellow">{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Procurement Notes">
        <div className="grid gap-4 md:grid-cols-3">
          {landing.procurementNotes.map((note) => (
            <div key={note} className="rounded-md border border-white/10 bg-navy p-5 text-sm leading-6 text-slate-300">
              <ClipboardList className="mb-4 h-6 w-6 text-orange" />
              {note}
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-md border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">{complianceNotice}</p>
      </Section>

      <Section title="Buyer FAQ" className="bg-slate-950/60">
        <div className="grid gap-4">
          {landing.faqs.map((faq) => (
            <div key={faq.question} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-lg font-bold text-white">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Request a Buyer Quote">
        <ProductCTA
          title={`Need help sourcing ${landing.keyword.toLowerCase()}?`}
          description="Share your application, hazard type, required quantity and target market. Hulidun Safety will recommend suitable products, filters, packaging and document options."
        />
      </Section>
    </>
  );
}
