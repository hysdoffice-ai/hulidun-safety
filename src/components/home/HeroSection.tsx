"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDown,
  Biohazard,
  BriefcaseMedical,
  Gauge,
  Hexagon,
  PackageCheck,
  ShieldCheck,
  Shirt,
  Wind
} from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { WarningStrip } from "@/components/common/WarningStrip";
import { companyFacts, companyPositioning, companyStrengths, tradeHighlights } from "@/data/site";

const hazards = ["Chemical Vapor", "Dust", "Paint Mist", "Pesticide", "Acid Gas", "Emergency Escape"];
const matrix = [
  { title: "Full Face Respirator", icon: ShieldCheck, code: "FACE" },
  { title: "Half Mask", icon: Wind, code: "MASK" },
  { title: "Filter Cartridge", icon: PackageCheck, code: "FILTER" },
  { title: "Supplied-Air System", icon: Gauge, code: "AIR" },
  { title: "Chemical Suit", icon: Shirt, code: "SUIT" },
  { title: "Emergency Kit", icon: BriefcaseMedical, code: "KIT" }
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050a12] px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,17,31,0.1)_0%,rgba(7,17,31,0.92)_46%,rgba(249,115,22,0.12)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange/70 to-transparent" />
      <div className="absolute right-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-warning/30 to-transparent" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-vapor/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-orange/45 to-transparent" />
      <WarningStrip className="absolute left-0 top-0" />

      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-center">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-orange/45 bg-orange/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange shadow-lg shadow-orange/10">
              <AlertTriangle className="h-4 w-4" />
              From Hazard to Protection.
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Industrial Respiratory Protection for Hazardous Workplaces
            </h1>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-warning">{companyPositioning}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Full face respirators, half masks, filter cartridges, supplied-air systems and emergency protection kits for chemical, painting, mining, agriculture and rescue applications.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {companyFacts.slice(0, 4).map((fact) => (
                <div key={fact.label} className="rounded-md border border-white/10 bg-slate-950/65 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                  <p className="mt-1 text-lg font-black text-white">{fact.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/products/">Explore Products</CTAButton>
              <WhatsAppButton source="Home hero" />
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {hazards.map((hazard, index) => (
                <motion.div
                  key={hazard}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.06 }}
                  className="group flex min-h-12 items-center gap-3 rounded-md border border-white/10 bg-white/[0.045] px-3 py-3 text-xs font-bold text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-warning/50 hover:bg-warning/10"
                >
                  <span className="h-2 w-2 rounded-sm bg-warning shadow-[0_0_16px_rgba(250,204,21,0.7)]" />
                  {hazard}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              {companyStrengths.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-slate-950/50 px-4 py-3 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative">
            <div className="absolute -inset-4 rounded-md border border-warning/20 bg-hazard bg-[length:52px_52px] opacity-25" />
            <div className="relative overflow-hidden rounded-md border border-white/10 bg-slate-950/80 p-5 shadow-panel backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />
              <div className="absolute bottom-0 right-0 h-28 w-28 border-l border-t border-orange/20 bg-grid bg-[length:16px_16px] opacity-60" />
              <div className="mb-5 grid gap-4 border-b border-white/10 pb-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Protection System</p>
                  <p className="mt-1 text-2xl font-black text-white">Integrated Safety Matrix</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Configure mask, filter, air supply and emergency protection by hazard and application.</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-orange/30 bg-orange/10">
                  <Biohazard className="h-8 w-8 text-orange" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {matrix.map((item, index) => {
                  const Icon = item.icon;
                  return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 + index * 0.06 }}
                    className="group relative min-h-36 overflow-hidden rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-orange/55 hover:bg-orange/10"
                  >
                    <div className="absolute right-3 top-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">{item.code}</div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-slate-950 transition group-hover:border-orange/50">
                      <Icon className="h-7 w-7 text-warning" />
                    </div>
                    <h3 className="max-w-40 text-base font-black text-white">{item.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      <Hexagon className="h-3.5 w-3.5 text-orange" />
                      Module ready
                    </div>
                  </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
                {tradeHighlights.slice(0, 3).map((item) => (
                  <div key={item.label} className="rounded-md border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-black text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
        >
          <span>Scroll to explore protection solutions</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-orange" />
        </motion.div>
      </div>
    </section>
  );
}
