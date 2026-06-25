"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { SectionHeader } from "@/components/common/SectionHeader";

const hazards = [
  { name: "Organic Vapor", color: "bg-vapor", description: "Solvent, coating and selected chemical vapor work.", tone: "cyan" as const },
  { name: "Acid Gas", color: "bg-acid", description: "Industrial processes requiring hazard-specific filter matching.", tone: "green" as const },
  { name: "Ammonia", color: "bg-ammonia", description: "Fertilizer, refrigeration and selected chemical applications.", tone: "purple" as const },
  { name: "Dust & Particles", color: "bg-particle", description: "Grinding, mining, construction and demolition dust.", tone: "slate" as const },
  { name: "Paint Mist", color: "bg-orange", description: "Spray booth, coating and surface preparation work.", tone: "orange" as const },
  { name: "Multi-Gas Protection", color: "bg-warning", description: "Mixed hazards requiring professional filter selection.", tone: "yellow" as const }
];

export function HazardSelector() {
  return (
    <section className="bg-slate-950/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Choose by Hazard" title="Filter and mask selection starts with the hazard" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hazards.map((hazard, index) => (
            <motion.article
              key={hazard.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="rounded-md border border-white/10 bg-navy p-5 transition hover:-translate-y-1 hover:border-orange/50"
            >
              <div className={`mb-4 h-3 w-20 rounded ${hazard.color}`} />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{hazard.name}</h3>
                <Badge tone={hazard.tone}>Hazard</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{hazard.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 rounded-md border border-warning/30 bg-warning/10 p-4 text-sm leading-6 text-warning">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
            <p>Product selection should be based on workplace hazards, local regulations and professional safety assessment. Please contact our team for technical documents and product compatibility information.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
