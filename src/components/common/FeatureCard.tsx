import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function FeatureCard({ icon: Icon, title, description, children, className }: FeatureCardProps) {
  return (
    <article className={cn("rounded-md border border-white/10 bg-slate-950/65 p-5 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:border-orange/45", className)}>
      {Icon && <Icon className="mb-5 h-8 w-8 text-orange" />}
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {description && <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>}
      {children}
    </article>
  );
}
