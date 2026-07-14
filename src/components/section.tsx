import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
};

export function Section({ eyebrow, title, intro, children, className, headingLevel = "h2" }: SectionProps) {
  const Heading = headingLevel;

  return (
    <section className={cn("px-4 py-16 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-orange">{eyebrow}</p>}
          <Heading className="text-balance text-3xl font-bold text-white sm:text-4xl">{title}</Heading>
          {intro && <p className="mt-4 text-base leading-7 text-slate-300">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
