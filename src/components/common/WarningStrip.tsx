import { cn } from "@/lib/utils";

export function WarningStrip({ className }: { className?: string }) {
  return <div className={cn("h-3 w-full bg-hazard bg-[length:48px_48px]", className)} />;
}
