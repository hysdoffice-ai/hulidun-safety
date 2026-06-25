import type { Metadata } from "next";
import { applications } from "@/data/applications";
import { products } from "@/data/products";
import { resources } from "@/data/resources";
import { ApplicationGrid } from "@/components/home/ApplicationGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HazardSelector } from "@/components/home/HazardSelector";
import { HeroSection } from "@/components/home/HeroSection";
import { OemSupport } from "@/components/home/OemSupport";
import { ProductMatrix } from "@/components/home/ProductMatrix";
import { QualityPreview } from "@/components/home/QualityPreview";
import { ResourcePreview } from "@/components/home/ResourcePreview";

export const metadata: Metadata = {
  title: "Industrial Respiratory Protection Manufacturer | Full Face Respirators & Gas Masks",
  description:
    "China-based supplier of industrial respiratory protection, chemical safety PPE and emergency protection solutions for hazardous workplaces."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductMatrix />
      <HazardSelector />
      <ApplicationGrid applications={applications.slice(0, 6)} />
      <FeaturedProducts products={products} />
      <OemSupport />
      <QualityPreview />
      <ResourcePreview resources={resources} />
      <FinalCTA />
    </>
  );
}
