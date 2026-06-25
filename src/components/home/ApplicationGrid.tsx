import type { Application } from "@/data/applications";
import { ApplicationCard } from "@/components/applications/ApplicationCard";
import { SectionHeader } from "@/components/common/SectionHeader";

type ApplicationGridProps = {
  applications: Application[];
};

export function ApplicationGrid({ applications }: ApplicationGridProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Choose by Application" title="Protection programs for real industrial scenarios" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
    </section>
  );
}
