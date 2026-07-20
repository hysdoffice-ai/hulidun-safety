"use client";

import type { ReactNode } from "react";
import { trackEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  eventParams?: AnalyticsParams;
  target?: "_blank";
  rel?: string;
};

export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventParams,
  target,
  rel
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </a>
  );
}
