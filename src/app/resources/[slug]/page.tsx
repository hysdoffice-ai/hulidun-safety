import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, FileText, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { CTAButton } from "@/components/common/CTAButton";
import { Section } from "@/components/section";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { brandName, companyName } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";

const defaultPublishedAt = "2026-07-03";
const defaultUpdatedAt = "2026-07-17";
const defaultEditorialSources = [
  {
    title: "Respirator Selection and Use",
    url: "https://www.cdc.gov/niosh/ppe/respirators/selection.html",
    publisher: "CDC/NIOSH"
  },
  {
    title: "Respiratory Protection Standard — 29 CFR 1910.134",
    url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134",
    publisher: "U.S. OSHA"
  }
];

function formatEditorialDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    return {
      title: "Respirator Resource",
      description: "Industrial respiratory protection buyer guide from Hulidun Safety."
    };
  }

  return {
    title: `${resource.title} | Respirator Buyer Guide`,
    description: resource.metaDescription,
    alternates: {
      canonical: `/resources/${resource.slug}/`
    },
    openGraph: {
      title: `${resource.title} | ${brandName}`,
      description: resource.metaDescription,
      type: "article",
      url: `https://www.hulidun.com/resources/${resource.slug}/`,
      images: ["/images/brand/logo.png"],
      publishedTime: resource.publishedAt ?? defaultPublishedAt,
      modifiedTime: resource.updatedAt ?? defaultUpdatedAt,
      authors: [companyName]
    },
    authors: [{ name: `${brandName} Technical Team` }]
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = resources.find((item) => item.slug === params.slug);
  if (!resource) notFound();

  const relatedProducts = products
    .filter((product) => resource.relatedProductCategories.includes(product.category))
    .slice(0, 3);
  const publishedAt = resource.publishedAt ?? defaultPublishedAt;
  const updatedAt = resource.updatedAt ?? defaultUpdatedAt;
  const editorialSources = resource.sources ?? defaultEditorialSources;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: resource.title,
    description: resource.metaDescription,
    url: `https://www.hulidun.com/resources/${resource.slug}/`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: `${brandName} Technical Team`,
      url: "https://www.hulidun.com/about/"
    },
    editor: {
      "@type": "Organization",
      name: companyName,
      url: "https://www.hulidun.com/about/"
    },
    publisher: {
      "@type": "Organization",
      name: brandName,
      logo: {
        "@type": "ImageObject",
        url: "https://www.hulidun.com/images/brand/logo.png"
      }
    },
    about: resource.relatedProductCategories,
    citation: editorialSources.map((source) => source.url),
    mentions: relatedProducts.map((product) => ({
      "@type": "Thing",
      name: `${product.model} ${product.name}`,
      url: `https://www.hulidun.com/products/${product.slug}/`
    })),
    mainEntity: resource.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    })),
    mainEntityOfPage: `https://www.hulidun.com/resources/${resource.slug}/`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resource.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
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
        name: "Resources",
        item: "https://www.hulidun.com/resources/"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: resource.title,
        item: `https://www.hulidun.com/resources/${resource.slug}/`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-grid bg-[length:40px_40px] opacity-50" />
        <div className="relative mx-auto max-w-4xl">
          <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-warning">
            <ArrowLeft className="h-4 w-4" />
            Back to resources
          </Link>
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge tone="yellow">{resource.category}</Badge>
            <Badge>{resource.readTime}</Badge>
          </div>
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">{resource.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{resource.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-warning" />
              Reviewed by {brandName} Technical Team
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-warning" />
              Updated {formatEditorialDate(updatedAt)}
            </span>
          </div>
          <p className="mt-5 rounded-md border border-orange/25 bg-orange/10 p-4 text-sm leading-7 text-slate-200">
            Direct answer: {resource.questions[0]?.answer}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Request Product Support</CTAButton>
            <CTAButton href="/products" variant="dark">View Related Products</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Quick Answers" eyebrow="AEO FAQ">
        <div className="grid gap-4 md:grid-cols-2">
          {resource.questions.map((item) => (
            <article key={item.question} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-lg font-black text-white">{item.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Buyer Guide" className="bg-slate-950/60">
        <div className="grid gap-5">
          {resource.sections.map((section) => (
            <article key={section.heading} className="rounded-md border border-white/10 bg-navy p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-orange/30 bg-orange/10">
                <FileText className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-2xl font-black text-white">{section.heading}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Related Product Categories">
        <div className="mb-8 flex flex-wrap gap-3">
          {resource.relatedProductCategories.map((category) => (
            <Badge key={category} tone="orange">{category}</Badge>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section title="Editorial References" eyebrow="Authoritative sources" className="bg-slate-950/60">
        <p className="mb-5 max-w-3xl text-sm leading-7 text-slate-300">
          This buyer guide was reviewed against the following public safety references. Final product selection must follow the workplace hazard assessment, manufacturer instructions and rules in the destination market.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {editorialSources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-warning/50"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-warning">{source.publisher}</p>
              <p className="mt-2 font-bold text-white">{source.title}</p>
            </a>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-500">First published {formatEditorialDate(publishedAt)}.</p>
      </Section>
    </>
  );
}
