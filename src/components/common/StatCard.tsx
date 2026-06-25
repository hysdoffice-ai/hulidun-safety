import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  helper?: string;
  className?: string;
};

export function StatCard({ label, value, helper, className }: StatCardProps) {
  return (
    <div className={cn("rounded-md border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-orange/40", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-3 text-2xl font-black text-white">{value}</p>
      {helper && <p className="mt-2 text-sm leading-6 text-slate-300">{helper}</p>}
    </div>
  );
}
