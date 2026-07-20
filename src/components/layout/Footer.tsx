import Link from "next/link";
import { WarningStrip } from "@/components/common/WarningStrip";
import {
  brandLogo,
  brandName,
  brandRelation,
  brandSlogan,
  certificationNotice,
  companyAddress,
  companyName,
  companyPositioning,
  complianceNotice,
  contactEmail,
  contactPerson,
  contactWhatsApp,
  whatsappUrl
} from "@/data/site";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Products", href: "/products/" },
      { label: "Sourcing Guides", href: "/industries/" },
      { label: "Applications", href: "/applications/" },
      { label: "OEM", href: "/oem-private-label/" },
      { label: "Quality", href: "/quality/" },
      { label: "Resources", href: "/resources/" },
      { label: "Buyer Answers", href: "/answers/" },
      { label: "Editorial Policy", href: "/editorial-policy/" },
      { label: "Contact", href: "/contact/" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: `Contact: ${contactPerson}`, href: "/contact/" },
      { label: `Email: ${contactEmail}`, href: `mailto:${contactEmail}` },
      { label: `WhatsApp: ${contactWhatsApp}`, href: whatsappUrl },
      { label: "Request a Quote", href: "/contact/" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050a12]">
      <WarningStrip />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_.7fr_.7fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-12 w-16 items-center justify-center rounded-md bg-white p-2">
              <img src={brandLogo} alt={`${brandName} logo`} className="max-h-full max-w-full object-contain" />
            </span>
            <h2 className="text-xl font-black text-white">{brandName}</h2>
          </div>
          <p className="mt-2 text-sm font-semibold text-slate-300">{companyName}</p>
          <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">{brandRelation}</p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">{companyPositioning}</p>
          <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-500">{companyAddress}</p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">{brandSlogan}</p>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-500">{complianceNotice}</p>
          <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-500">{certificationNotice}</p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-300">{group.title}</h3>
            <div className="grid gap-2 text-sm text-slate-400">
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-orange">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
