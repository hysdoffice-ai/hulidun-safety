import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/common/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  brandLogo,
  brandName,
  companyAddress,
  companyName,
  companyPositioning,
  contactEmail,
  contactPerson,
  contactWhatsApp
} from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "Hulidun Safety | Industrial Respiratory Protection & Chemical Safety PPE",
    template: "%s | Hulidun Safety"
  },
  description:
    "China-based supplier of full face respirators, half masks, filter cartridges, supplied-air systems, chemical protective suits and emergency PPE for global B2B buyers.",
  keywords: [
    "industrial respirator supplier",
    "full face respirator manufacturer",
    "half face respirator",
    "respirator cartridges",
    "chemical protective suit",
    "China PPE supplier",
    "OEM ODM PPE"
  ],
  metadataBase: new URL("https://hulidun.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://hulidun.com",
    siteName: brandName,
    title: "Hulidun Safety | Industrial Respiratory Protection & Chemical Safety PPE",
    description:
      "Self-owned China PPE factory supplying full face respirators, half masks, cartridges, filters, supplied-air systems and chemical protective products.",
    images: [brandLogo]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    alternateName: brandName,
    url: "https://hulidun.com",
    logo: `https://hulidun.com${brandLogo}`,
    description: companyPositioning,
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
    },
    makesOffer: [
      "Full face respirators",
      "Half face respirators",
      "Respirator cartridges and filters",
      "Supplied-air respirators",
      "Powered air systems",
      "Chemical protective clothing",
      "PPE accessories"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandName,
    url: "https://hulidun.com",
    description:
      "Industrial respiratory protection and chemical safety PPE supplier for global B2B buyers.",
    publisher: {
      "@type": "Organization",
      name: companyName
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hulidun.com/products/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    inLanguage: "en"
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
