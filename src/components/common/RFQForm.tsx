"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, HelpCircle, Upload } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { brandName, makeWhatsAppUrl } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const inputFields: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text" },
  { name: "country", label: "Country", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "whatsapp", label: "WhatsApp", type: "text" },
  { name: "productInterested", label: "Product Interested", type: "text", required: true },
  { name: "applicationIndustry", label: "Application Industry", type: "text" },
  { name: "hazardType", label: "Hazard Type", type: "text" },
  { name: "quantity", label: "Expected Quantity", type: "text" },
  { name: "targetMarket", label: "Target Market", type: "text" }
];

export function RFQForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, FormDataEntryValue>;
    const lines = [
      `Hello ${brandName}, I would like to request a quote.`,
      "",
      ...inputFields.map((field) => `${field.label}: ${payload[field.name] || "-"}`),
      `Need OEM Packaging: ${payload.needOemPackaging || "-"}`,
      `Message: ${payload.message || "-"}`
    ];

    trackEvent("generate_lead", {
      form_name: "hulidun_rfq",
      product: String(payload.productInterested || ""),
      country: String(payload.country || "")
    });
    window.open(makeWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
      <form onSubmit={handleSubmit} className="rounded-md border border-white/10 bg-slate-950/75 p-5 shadow-panel backdrop-blur sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          {inputFields.map((field) => (
            <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-200">
              {field.label}
              {field.required && <span className="sr-only">required</span>}
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                className="min-h-12 rounded-md border border-white/10 bg-navy px-4 text-slate-100 outline-none transition focus:border-orange"
              />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Need OEM Packaging?
            <select name="needOemPackaging" className="min-h-12 rounded-md border border-white/10 bg-navy px-4 text-slate-100 outline-none transition focus:border-orange">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Upload Reference Picture
            <div className="flex min-h-12 items-center gap-3 rounded-md border border-dashed border-white/15 bg-navy px-4 text-slate-400">
              <Upload className="h-5 w-5" />
              Front-end placeholder
            </div>
          </label>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
          Message
          <textarea
            name="message"
            required
            rows={6}
            className="rounded-md border border-white/10 bg-navy px-4 py-3 text-slate-100 outline-none transition focus:border-orange"
          />
        </label>
        {submitted && (
          <div className="mt-5 flex gap-3 rounded-md border border-acid/30 bg-acid/10 p-4 text-sm font-semibold leading-6 text-acid">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            Your RFQ has been prepared for WhatsApp. Please send the message in the WhatsApp chat window.
          </div>
        )}
        <CTAButton type="submit" className="mt-6">
          Request a Quote
        </CTAButton>
      </form>
      <aside className="rounded-md border border-orange/30 bg-orange/10 p-5 shadow-panel backdrop-blur xl:sticky xl:top-24 xl:self-start">
        <HelpCircle className="mb-4 h-8 w-8 text-orange" />
        <h2 className="text-xl font-black text-white">Not sure which product fits your application?</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Send us your working environment and target market. We will recommend a suitable protection solution.
        </p>
      </aside>
    </div>
  );
}
