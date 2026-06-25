import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "orange" | "yellow" | "slate" | "cyan" | "green" | "purple";
  className?: string;
};

const tones = {
  orange: "border-orange/30 bg-orange/10 text-orange",
  yellow: "border-warning/30 bg-warning/10 text-warning",
  slate: "border-white/10 bg-white/[0.06] text-slate-200",
  cyan: "border-vapor/30 bg-vapor/10 text-vapor",
  green: "border-acid/30 bg-acid/10 text-acid",
  purple: "border-ammonia/30 bg-ammonia/10 text-ammonia"
};

export function Badge({ children, tone = "slate", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-md border px-3 py-1 text-xs font-bold", tones[tone], className)}>
      {children}
    </span>
  );
}
