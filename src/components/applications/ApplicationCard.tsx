import Link from "next/link";
import { ArrowRight, Factory } from "lucide-react";
import type { Application } from "@/data/applications";
import { Badge } from "@/components/common/Badge";

type ApplicationCardProps = {
  application: Application;
};

export function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <Link href={`/applications/${application.slug}/`} className="group rounded-md border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-orange/50">
      <Factory className="mb-5 h-8 w-8 text-orange" />
      <h3 className="text-xl font-black text-white">{application.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{application.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {application.typicalHazards.slice(0, 3).map((hazard) => (
          <Badge key={hazard} tone="yellow">
            {hazard}
          </Badge>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-warning">
        View Solution <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
