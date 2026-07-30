"use client";

import { motion } from "framer-motion";
import { Sparkles, Telescope, CheckCircle2 } from "lucide-react";
import { FUTURE_VISION } from "@/config/content";
import { GlassCard } from "@/components/ui/GlassCard";

export function VisionSection() {
  return (
    <section className="relative py-20 px-4 bg-[#05050A]">
      <div className="mx-auto w-full max-w-5xl">
        <GlassCard className="p-8 sm:p-12 border-cyan-500/30 bg-[#0A0A16]/90 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <Telescope className="h-4 w-4" />
              <span>10 • FUTURE VISION & GOALS</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {FUTURE_VISION.headline}
            </h2>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-3xl">
              {FUTURE_VISION.statement}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {FUTURE_VISION.goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
