import { cn } from "@/lib/utils";

type IndustrialGridBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  intensity?: "soft" | "strong";
};

export function IndustrialGridBackground({ children, className, intensity = "soft" }: IndustrialGridBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden bg-navy", className)}>
      <div className={cn("absolute inset-0 bg-grid bg-[length:42px_42px]", intensity === "soft" ? "opacity-45" : "opacity-80")} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}
