import type { Metadata } from "next";
import { applications } from "@/data/applications";
import { ApplicationCard } from "@/components/applications/ApplicationCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Respiratory Protection by Industrial Application",
  description:
    "Explore respirator, filter and chemical safety PPE recommendations by workplace application, hazard and procurement requirement.",
  alternates: {
    canonical: "/applications/"
  }
};

export default function ApplicationsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Applications"
          title="Industrial application scenarios"
          description="Select by workplace process first, then configure respirator type, filter media and accessory kit based on hazard assessment."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
    </section>
  );
}
