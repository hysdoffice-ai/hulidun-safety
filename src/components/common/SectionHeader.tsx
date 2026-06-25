import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </div>
  );
}
