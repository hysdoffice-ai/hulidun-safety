"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
};

export function ImageWithFallback({ src, alt, className, imgClassName, fallbackLabel = "Image placeholder", priority = false }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-md bg-gradient-to-br from-slate-700 via-slate-900 to-black", className)}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div className="flex h-full min-h-48 flex-col items-center justify-center gap-3 border border-dashed border-orange/40 bg-grid bg-[length:22px_22px] p-6 text-center">
          <ImageIcon className="h-8 w-8 text-orange" />
          <p className="text-sm font-bold text-slate-300">{fallbackLabel}</p>
          <p className="max-w-xs break-all text-xs text-slate-500">{src}</p>
        </div>
      )}
    </div>
  );
}
