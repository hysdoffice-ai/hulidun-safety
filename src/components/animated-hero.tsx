"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowDownRight, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { heroHazards, heroProducts } from "@/lib/data";

export function AnimatedHero() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-grid bg-[length:44px_44px] opacity-70" />
      <motion.div
        className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="absolute left-0 top-0 h-3 w-full bg-hazard bg-[length:48px_48px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-orange/40 bg-orange/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange">
            <AlertTriangle className="h-4 w-4" />
            From Hazard to Protection.
          </div>
          <h1 className="text-balance text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Industrial Respiratory Protection for Hazardous Workplaces
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Full face respirators, half masks, filter cartridges, supplied-air systems and emergency protection kits for chemical, painting, mining, agriculture and rescue applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/products/">Explore Products</ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">Get Product Recommendation</ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-5">
            {heroHazards.map((hazard, index) => (
              <motion.div
                key={hazard}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-xs font-semibold text-slate-200"
              >
                {hazard}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rotate-2 rounded-md border border-warning/20" />
          <div className="relative rounded-md border border-white/10 bg-slate-950/80 p-5 shadow-panel">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Protection Matrix</p>
                <p className="mt-1 text-lg font-bold text-white">Respiratory Solution System</p>
              </div>
              <ShieldCheck className="h-9 w-9 text-orange" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroProducts.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="group rounded-md border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-8 h-24 rounded bg-gradient-to-br from-slate-700 via-slate-900 to-black p-3">
                    <div className="h-full rounded border border-dashed border-orange/40 bg-grid bg-[length:18px_18px]" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-white">{item}</h3>
                    <ArrowDownRight className="h-5 w-5 text-warning transition group-hover:translate-x-1 group-hover:translate-y-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
