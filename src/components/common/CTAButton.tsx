"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent, type AnalyticsParams } from "@/lib/analytics";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "dark";
  type?: "button" | "submit";
  trackingEvent?: string;
  trackingParams?: AnalyticsParams;
  rel?: string;
};

export function CTAButton({ href, children, className, variant = "primary", type = "button", trackingEvent, trackingParams, rel }: CTAButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5",
    variant === "primary" && "bg-orange text-white shadow-lg shadow-orange/20 hover:bg-orange/90",
    variant === "outline" && "border border-orange/50 bg-orange/10 text-orange hover:bg-orange/20",
    variant === "dark" && "border border-white/10 bg-slate-950 text-slate-100 hover:border-orange/50",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        rel={rel}
        className={classes}
        onClick={() => trackingEvent && trackEvent(trackingEvent, trackingParams)}
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
