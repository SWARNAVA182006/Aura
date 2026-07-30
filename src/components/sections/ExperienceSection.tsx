"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap, CheckCircle2, Award } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 bg-[#030305]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <Briefcase className="h-3.5 w-3.5" />
            <span>03 • INDUSTRIAL EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Grounding theory in <span className="text-gradient-cyan">enterprise software realities</span>.
          </h2>
        </motion.div>

        {/* Featured Internship Spotlight: ONGC */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <GlassCard className="p-8 border-cyan-500/40 bg-[#0C0C1C]/90 shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono font-bold text-lg">
                  ONGC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Software & Systems Engineering Intern</h3>
                  <p className="text-xs text-cyan-400 font-mono">Oil and Natural Gas Corporation (ONGC) • India</p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-slate-300">
                SUMMER 2024
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-300 leading-relaxed">
              Interned at India's premier energy conglomerate, analyzing large-scale seismic reflection profile workflows, high-volume data storage pipelines, and industrial geophysical software interfaces. Worked alongside senior engineers and geoscientists, observing firsthand how enterprise software must operate reliably under heavy data constraints.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="font-mono text-xs font-bold text-cyan-400">01. Seismic Workflows</div>
                <div className="mt-1 text-xs text-slate-400">Studied raw SEG-Y data pipeline ingestion and amplitude processing algorithms.</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="font-mono text-xs font-bold text-cyan-400">02. Industrial Insight</div>
                <div className="mt-1 text-xs text-slate-400">Understood the gap between academic ML research and desktop domain software.</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="font-mono text-xs font-bold text-cyan-400">03. Practical Inspiration</div>
                <div className="mt-1 text-xs text-slate-400">Direct catalyst for designing and building SeisVision AI.</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              {["Seismic Processing", "Geophysical Data", "Data Pipelines", "Python", "Enterprise Systems"].map((tag, i) => (
                <span key={i} className="rounded-md border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Education & Academic Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <GlassCard className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">B.Tech in Computer Science & Engineering</h3>
                  <p className="text-xs text-slate-400">University Computer Science & Engineering • 2022 — Present</p>
                </div>
              </div>
              <div className="font-mono text-xs text-slate-400">ENROLLED</div>
            </div>
            <p className="mt-4 text-xs text-slate-300 leading-relaxed">
              Focusing on Artificial Intelligence, Data Structures & Algorithms, Computer Vision, Database Systems, Operating Systems, and Software Architecture.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
