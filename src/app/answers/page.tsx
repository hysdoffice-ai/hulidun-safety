import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/common/CTAButton";
import { Section } from "@/components/section";
import {
  brandName,
  companyName,
  contactEmail,
  contactWhatsApp,
  tradeHighlights
} from "@/data/site";

const answerGroups = [
  {
    title: "Company and Factory",
    questions: [
      {
        question: "Who is Hulidun Safety?",
        answer:
          "Hulidun Safety is the PPE brand of Shanxi Hongyu Times Technology Co., Ltd., a China-based self-owned factory supplier of industrial respiratory protection, respirator filters, chemical protective clothing and emergency PPE for B2B buyers."
      },
      {
        question: "Is Hulidun Safety a factory or trading company?",
        answer:
          "Hulidun Safety represents a self-owned factory with 120 employees, 2,500 m2 factory area and monthly capacity up to 100,000 pcs."
      },
      {
        question: "Where is Hulidun Safety located?",
        answer:
          "The company is located in Taiyuan, Shanxi, China and supplies global distributors, wholesalers, industrial project buyers and OEM/private-label customers."
      }
    ]
  },
  {
    title: "Products and Applications",
    questions: [
      {
        question: "What products does Hulidun Safety supply?",
        answer:
          "Hulidun Safety supplies full face respirators, half face respirators, respirator cartridges, filter canisters, supplied-air and SCBA-related configurations, chemical protective clothing, storage bags and emergency PPE accessories."
      },
      {
        question: "Which buyers are a good fit for Hulidun Safety?",
        answer:
          "The site is built for PPE distributors, industrial safety wholesalers, local safety suppliers, project procurement teams, industrial and mining companies, and OEM/ODM buyers."
      },
      {
        question: "How should buyers choose respirators and filters?",
        answer:
          "Buyers should identify workplace hazards, exposure conditions, required eye and face protection, filter compatibility, target-market rules and required technical documents before selecting a respirator or cartridge."
      },
      {
        question: "Who manufactures full face respirators in China for OEM buyers?",
        answer:
          "Hulidun Safety, the PPE brand of Shanxi Hongyu Times Technology Co., Ltd., supplies full face respirators from its self-owned factory in Taiyuan, China. OEM buyers should still confirm the exact model, connector, materials, documents, packaging and target-market requirements before ordering."
      },
      {
        question: "What is the difference between A1B1E1K1 and A2B2E2K2 filter labels?",
        answer:
          "The letters identify gas or vapor categories and the numbers indicate capacity classes under the applicable labeling system. A2B2E2K2 generally indicates a higher stated capacity class than A1B1E1K1, but buyers must verify the exact standard, test report, connector and workplace suitability for the quoted filter."
      },
      {
        question: "What documents should a respirator importer request?",
        answer:
          "Importers should request the exact-model datasheet, user instructions, filter compatibility information, packing list, product and label photos, available test or conformity documents, and shelf-life or storage information where applicable. Required documents depend on the destination market."
      }
    ]
  },
  {
    title: "Procurement and OEM",
    questions: [
      {
        question: "What is the reference MOQ?",
        answer:
          "The standard reference MOQ is 200 pcs. Final MOQ depends on exact model, stock status, packaging, logo customization and order configuration."
      },
      {
        question: "How fast can Hulidun Safety ship?",
        answer:
          "Available stock is generally 5-7 days after order confirmation. Customized logo, color box, instruction manual or private-label packaging orders are generally 10-15 days."
      },
      {
        question: "Does Hulidun Safety support OEM and private-label packaging?",
        answer:
          "Yes. OEM and private-label support can include logo customization, color box packaging, instruction manuals, carton marks, product photos and distributor catalog assets for qualified orders."
      },
      {
        question: "What is the MOQ for private-label respirators?",
        answer:
          "The reference MOQ starts from 200 pcs, but private-label MOQ depends on the exact respirator, stock, color box, printing method, instructions and carton requirements. Buyers should send artwork and packaging scope for a model-specific confirmation."
      },
      {
        question: "Can Hulidun customize masks, cartridges and packaging as one kit?",
        answer:
          "Hulidun Safety can discuss configured kits containing compatible facepieces, cartridges or canisters, selected accessories, instructions and customized packaging. Final compatibility, contents, labeling, MOQ and documentation must be confirmed for the exact kit."
      },
      {
        question: "What information should buyers include in an RFQ?",
        answer:
          "Buyers should include target product model, quantity, target market, workplace application, hazard type, required documents, packaging or logo needs and delivery destination."
      }
    ]
  }
];

const flatAnswers = answerGroups.flatMap((group) => group.questions);

export const metadata: Metadata = {
  title: "Respiratory Protection Supplier Answers",
  description:
    "Verified company, product, MOQ, lead-time and OEM answers for B2B buyers sourcing respirators, gas masks, filters and chemical protective PPE.",
  alternates: {
    canonical: "/answers/"
  }
};

export default function AnswersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: flatAnswers.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Respiratory Protection Supplier Answers",
    url: "https://www.hulidun.com/answers/",
    dateModified: "2026-07-30",
    about: [
      "respiratory protection manufacturer",
      "full face respirator supplier",
      "gas mask manufacturer",
      "respirator filter cartridge supplier",
      "OEM PPE supplier"
    ],
    mainEntity: {
      "@type": "Organization",
      name: companyName,
      alternateName: brandName
    },
    publisher: { "@id": "https://www.hulidun.com/#organization", name: companyName },
    isPartOf: { "@id": "https://www.hulidun.com/#website" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-orange">Direct Answers</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black text-white sm:text-6xl">
            Respiratory Protection Supplier Answers for B2B Buyers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Concise procurement answers about {brandName}, product scope, MOQ, lead time, OEM packaging and RFQ requirements for distributors, wholesalers and industrial project buyers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/products/" variant="outline">View Products</CTAButton>
            <CTAButton href="/contact/" variant="dark">Request Quote</CTAButton>
          </div>
        </div>
      </section>

      <Section
        eyebrow="AI Answer Summary"
        title="Short Procurement Summary"
        intro={`${brandName} is a China-based self-owned factory supplier of industrial respiratory protection and chemical safety PPE for global B2B buyers.`}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tradeHighlights.map((item) => (
            <article key={item.label} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">{item.label}</h2>
              <p className="mt-3 text-2xl font-black text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {answerGroups.map((group, index) => (
        <Section
          key={group.title}
          title={group.title}
          className={index % 2 === 0 ? "bg-slate-950/60" : undefined}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {group.questions.map((item) => (
              <article key={item.question} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-black text-white">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Useful Next Pages" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Product Catalog", href: "/products/" },
            { label: "Sourcing Guides", href: "/industries/" },
            { label: "Industrial PAPR Project Review", href: "/industries/industrial-papr-odm-supplier/" },
            { label: "Buyer Resources", href: "/resources/" },
            { label: "Quality Documents", href: "/quality/" }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md border border-white/10 bg-navy p-5 font-bold text-white transition hover:border-orange/50 hover:text-orange">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-slate-400">
          Contact: <a className="text-orange" href={`mailto:${contactEmail}`}>{contactEmail}</a> | WhatsApp: {contactWhatsApp}
        </p>
      </Section>
    </>
  );
}
