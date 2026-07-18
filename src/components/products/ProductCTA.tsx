import { CTAButton } from "@/components/common/CTAButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

type ProductCTAProps = {
  title?: string;
  description?: string;
  model?: string;
  productName?: string;
};

export function ProductCTA({
  title = "Need a configured respiratory protection solution?",
  description = "Tell us your application. We recommend the right protection solution.",
  model,
  productName
}: ProductCTAProps) {
  const quoteHref = model ? `/contact/?model=${encodeURIComponent(model)}&product=${encodeURIComponent(productName ?? "")}` : "/contact/";

  return (
    <div className="rounded-md border border-orange/30 bg-orange/10 p-6 shadow-panel">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton source={model ? `${model} ${productName ?? ""}` : "Product configuration CTA"} />
          <CTAButton href="/downloads/hulidun-safety-product-catalog.pdf" variant="outline">Download Product Catalog</CTAButton>
          <CTAButton href={quoteHref} variant="dark">Request Quote</CTAButton>
        </div>
      </div>
    </div>
  );
}
