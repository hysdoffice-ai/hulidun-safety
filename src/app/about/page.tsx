import { Factory, Globe2, ShieldCheck, Target } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Section } from "@/components/section";
import { factoryImages } from "@/data/quality";
import { brandRelation, brandSlogan, companyAddress, companyIntro, companyName, companyPositioning, companyStrengths, hulidunStatement } from "@/data/site";

const range = [
  "Full face respirators",
  "Half face respirators",
  "Cartridges and filters",
  "Supplied-air and powered-air systems",
  "Protective suits",
  "Gloves, goggles and ear muffs",
  "Emergency safety supplies"
];
const reasons = ["Respiratory protection category focus", "Stable cartridge and filter supply", "Distributor and wholesaler support", "Project buyer cooperation", "OEM/ODM flexibility", "English documentation support"];
const overview = [
  { title: "Company focus", text: companyPositioning, icon: Target },
  { title: "Product range", text: "Respiratory protection, chemical protection and emergency safety PPE products.", icon: ShieldCheck },
  { title: "Supply support", text: "Stable respirator cartridge and filter replenishment for long-term distributor programs.", icon: Factory },
  { title: "Export cooperation", text: "Flexible cooperation for distributors, wholesalers, project buyers and OEM/ODM customers.", icon: Globe2 }
];
const timeline = [
  ["Year 1", "Reusable respirator product line established"],
  ["Year 2", "Filter and canister matching programs expanded"],
  ["Year 3", "OEM packaging and distributor kit support added"],
  ["Year 4", "Application solution content and export support improved"]
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange">About Us</p>
          <h1 className="text-balance text-4xl font-black text-white sm:text-6xl">{companyName}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{companyIntro}</p>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-orange">{brandRelation}</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{companyAddress}</p>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-warning">{brandSlogan}</p>
        </div>
      </section>
      <Section title="Company overview">
        <div className="grid gap-5 lg:grid-cols-4">
          {overview.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <Icon className="mb-4 h-8 w-8 text-orange" />
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-md border border-orange/20 bg-orange/10 p-5 text-sm leading-7 text-slate-200">{hulidunStatement}</div>
      </Section>
      <Section title="Product range" className="bg-slate-950/60">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{range.map((item) => <div key={item} className="rounded-md border border-white/10 bg-navy p-5">{item}</div>)}</div>
      </Section>
      <Section title="Distributor support">
        <div className="grid gap-4 md:grid-cols-3">
          {companyStrengths.map((item) => (
            <div key={item} className="rounded-md border border-warning/20 bg-warning/10 p-5 text-sm font-semibold leading-6 text-warning">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <Section title="Manufacturing capability">
        <div className="grid gap-5 md:grid-cols-3">
          {factoryImages.map((item) => (
            <article key={item.src} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <ImageWithFallback src={item.src} alt={item.title} className="aspect-[4/3]" />
              <h2 className="mt-4 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Why choose us">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reasons.map((item) => <div key={item} className="rounded-md border border-orange/20 bg-orange/10 p-5 text-orange">{item}</div>)}</div>
      </Section>
      <Section title="Company timeline" className="bg-slate-950/60">
        <div className="grid gap-4 md:grid-cols-4">
          {timeline.map(([year, text]) => <div key={year} className="rounded-md border border-white/10 bg-navy p-5"><h2 className="font-bold text-warning">{year}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></div>)}
        </div>
      </Section>
    </>
  );
}
