import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type HazardCardProps = {
  title: string;
  description?: string;
  className?: string;
};

export function HazardCard({ title, description, className }: HazardCardProps) {
  return (
    <div className={cn("rounded-md border border-warning/20 bg-warning/10 p-5 transition hover:-translate-y-1 hover:border-warning/50", className)}>
      <AlertTriangle className="mb-4 h-6 w-6 text-warning" />
      <h3 className="font-bold text-white">{title}</h3>
      {description && <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>}
    </div>
  );
}
