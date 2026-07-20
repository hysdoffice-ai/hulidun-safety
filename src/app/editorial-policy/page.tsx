import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { brandName, companyName, contactEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Editorial & Technical Review Policy",
  description:
    "How Hulidun Safety prepares, reviews, updates and corrects respiratory protection product and buyer guidance.",
  alternates: { canonical: "/editorial-policy/" }
};

export default function EditorialPolicyPage() {
  const pageUrl = "https://www.hulidun.com/editorial-policy/";
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: "Hulidun Safety Editorial and Technical Review Policy",
    url: pageUrl,
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    publisher: { "@id": "https://www.hulidun.com/#organization", name: companyName },
    isPartOf: { "@id": "https://www.hulidun.com/#website" }
  };

  const steps = [
    {
      title: "Who prepares the content",
      text: `${brandName} product and procurement content is prepared from company product records, available technical documents, supplier configuration information and questions received from B2B buyers.`
    },
    {
      title: "How technical claims are reviewed",
      text: "Model, material, connector, packing and document claims are checked against the information available for the referenced product. Unconfirmed specifications are labeled as requiring confirmation instead of being presented as final facts."
    },
    {
      title: "How safety guidance is handled",
      text: "General buyer guidance may cite primary sources such as workplace-safety regulators or standards bodies. The site does not replace a workplace hazard assessment, fit-testing program, product instructions or local regulatory review."
    },
    {
      title: "Updates and corrections",
      text: "Pages show publication or update dates where appropriate. Material corrections are made when product information, source guidance or available documentation changes. Buyers may report a possible error by email."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange">Trust & Transparency</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-white sm:text-6xl">Editorial & Technical Review Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            How {brandName} publishes accurate, useful and appropriately qualified product information for respiratory protection and chemical safety PPE buyers.
          </p>
          <p className="mt-5 text-sm text-slate-500">Published and last reviewed: July 20, 2026</p>
        </div>
      </section>

      <Section title="Our Review Process">
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-md border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-black text-white">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Important Scope" className="bg-slate-950/60">
        <div className="max-w-4xl rounded-md border border-orange/25 bg-orange/[0.06] p-6 text-sm leading-7 text-slate-200">
          Product selection depends on the specific hazard, exposure level, oxygen conditions, facepiece fit, filter compatibility, instructions and local rules. Certification or conformity claims apply only when supported by the exact product document and scope reviewed for the destination market.
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-400">
          Correction requests: <a className="font-semibold text-orange" href={`mailto:${contactEmail}`}>{contactEmail}</a>. See also our <Link className="font-semibold text-orange" href="/quality/">quality documents</Link> and <Link className="font-semibold text-orange" href="/answers/">buyer answers</Link>.
        </p>
      </Section>
    </>
  );
}
