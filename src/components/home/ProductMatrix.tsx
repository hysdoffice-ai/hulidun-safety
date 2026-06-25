import { Boxes, BriefcaseBusiness, Factory, Gauge, ShieldCheck, Wind } from "lucide-react";
import { FeatureCard } from "@/components/common/FeatureCard";
import { SectionHeader } from "@/components/common/SectionHeader";

const categories = [
  { title: "Full Face Respirators", icon: ShieldCheck, description: "Full coverage mask platforms for chemical, painting and emergency planning." },
  { title: "Half Face Respirators", icon: Wind, description: "Reusable half masks for dust, mist and selected vapor applications." },
  { title: "Filter Cartridges & Canisters", icon: Boxes, description: "Hazard-specific filter components for compatible mask systems." },
  { title: "Supplied-Air Respirators", icon: Gauge, description: "System kits for selected tasks where supplied air is required by assessment." },
  { title: "Chemical Protective Gear", icon: Factory, description: "Protective clothing, gloves and goggles for complete workplace kits." },
  { title: "Emergency Kits", icon: BriefcaseBusiness, description: "Prepared response bundles for escape, rescue and safety inventory." }
];

export function ProductMatrix() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Product Matrix" title="Respiratory protection built as a system" description="Help international buyers move from hazard type to configured respirator, filter and emergency protection kits." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
