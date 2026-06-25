import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
        variant === "primary" && "bg-orange text-white shadow-lg shadow-orange/20 hover:bg-orange/90",
        variant === "secondary" && "border border-warning/70 bg-warning/10 text-warning hover:bg-warning/20",
        variant === "ghost" && "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
