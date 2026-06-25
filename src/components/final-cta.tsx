import { ButtonLink } from "@/components/button";

export function FinalCta() {
  return (
    <section className="bg-hazard bg-[length:48px_48px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-md border border-black/20 bg-navy/95 p-8 shadow-panel sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-orange">RFQ Support</p>
            <h2 className="text-balance text-3xl font-black text-white">Tell us your application. We recommend the right protection solution.</h2>
          </div>
          <ButtonLink href="/contact">Request a Quote</ButtonLink>
        </div>
      </div>
    </section>
  );
}
