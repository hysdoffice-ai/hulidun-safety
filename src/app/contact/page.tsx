import type { Metadata } from "next";
import { RFQForm } from "@/components/common/RFQForm";
import { TrackedLink } from "@/components/common/TrackedLink";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ComplianceNotice } from "@/components/notice";
import { brandName, companyAddress, companyName, contactEmail, contactPerson, contactWhatsApp, tradeHighlights, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a Quote | Respiratory Protection Products",
  description:
    "Tell us your application, hazard type and quantity. Get product recommendation and quotation from our team.",
  alternates: {
    canonical: "/contact/"
  }
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${brandName}`,
    url: "https://www.hulidun.com/contact/",
    description: metadata.description,
    mainEntity: {
      "@type": "Organization",
      name: companyName,
      email: contactEmail,
      telephone: contactWhatsApp,
      address: {
        "@type": "PostalAddress",
        addressLocality: companyAddress,
        addressCountry: "CN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        name: contactPerson,
        email: contactEmail,
        telephone: contactWhatsApp,
        availableLanguage: ["English", "Chinese"]
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange">Contact / RFQ</p>
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">Request a protection solution recommendation</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share your target product, workplace application, hazard type and market requirements. Our team can recommend a respirator, filter and packaging configuration for your RFQ.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton source="Contact page" />
            <TrackedLink
              href={`mailto:${contactEmail}`}
              eventName="email_click"
              eventParams={{ source: "contact_page_primary" }}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-orange/50 bg-orange/10 px-5 py-3 text-sm font-bold text-orange transition hover:-translate-y-0.5 hover:bg-orange/20"
            >
              Email RFQ
            </TrackedLink>
            <TrackedLink
              href="/downloads/hulidun-safety-product-catalog.pdf"
              eventName="file_download"
              eventParams={{ file_name: "hulidun-safety-product-catalog.pdf", source: "contact_page" }}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-warning/50"
            >
              Download Catalog
            </TrackedLink>
          </div>
          <div className="mt-8">
            <ComplianceNotice />
          </div>
          <div className="mt-8 grid gap-3 rounded-md border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">
            <a href={`mailto:${contactEmail}`} className="font-semibold text-orange hover:text-warning">
              Email: {contactEmail}
            </a>
            <a href={whatsappUrl} className="font-semibold text-orange hover:text-warning">
              WhatsApp: {contactWhatsApp}
            </a>
            <p>{companyAddress}</p>
            <p>Contact person: {contactPerson}</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tradeHighlights.map((item) => (
              <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
          </div>
          <RFQForm />
        </div>
      </section>
    </>
  );
}
