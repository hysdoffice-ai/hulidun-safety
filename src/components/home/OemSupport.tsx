import { PackageCheck, Palette, Printer, ScrollText, Tags, Truck } from "lucide-react";
import { FeatureCard } from "@/components/common/FeatureCard";
import { SectionHeader } from "@/components/common/SectionHeader";

const items = [
  { title: "Private label", icon: Tags, description: "Brand-ready product and carton label support." },
  { title: "Custom packaging", icon: PackageCheck, description: "Retail box, kit package and mixed carton options." },
  { title: "Logo printing", icon: Printer, description: "Logo application discussion by product and MOQ." },
  { title: "English manuals", icon: ScrollText, description: "Instruction materials prepared for export buyers." },
  { title: "Mixed order support", icon: Truck, description: "Respirators, filters and accessories in one sourcing plan." },
  { title: "Custom color", icon: Palette, description: "Color discussions for private label programs." }
];

export function OemSupport() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="OEM & Distributor Support" title="Built for private label programs and mixed safety orders" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} className="bg-orange/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
