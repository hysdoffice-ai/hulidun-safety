"use client";

import { MessageCircle } from "lucide-react";
import { contactWhatsApp, whatsappUrl } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
  compact?: boolean;
  source?: string;
};

export function WhatsAppButton({ className, compact = false, source }: WhatsAppButtonProps) {
  const href = source ? `${whatsappUrl}%0A%0ASource%3A%20${encodeURIComponent(source)}` : whatsappUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${contactWhatsApp}`}
      onClick={() => trackEvent("whatsapp_click", { source: source ?? "inline_button" })}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] max-[420px]:w-full",
        className
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {compact ? "WhatsApp" : "Chat on WhatsApp"}
    </a>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp ${contactWhatsApp}`}
        onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
        className="group flex min-h-14 items-center gap-3 rounded-md border border-white/15 bg-[#25D366] px-4 py-3 text-sm font-black text-slate-950 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/90">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="hidden sm:block">
          <span className="block">WhatsApp</span>
          <span className="block text-xs font-bold text-slate-800">{contactWhatsApp}</span>
        </span>
      </a>
    </div>
  );
}
