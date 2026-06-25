import { CTAButton } from "@/components/common/CTAButton";
import { WarningStrip } from "@/components/common/WarningStrip";

export function FinalCTA() {
  return (
    <section className="bg-hazard bg-[length:48px_48px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-md border border-black/20 bg-navy/95 shadow-panel">
        <WarningStrip />
        <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-orange">RFQ Support</p>
            <h2 className="text-balance text-3xl font-black text-white">Tell us your application. We recommend the right protection solution.</h2>
          </div>
          <CTAButton href="/contact">Request a Quote</CTAButton>
        </div>
      </div>
    </section>
  );
}
