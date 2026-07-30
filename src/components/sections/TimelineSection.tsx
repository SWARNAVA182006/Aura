"use client";

import { motion } from "framer-motion";
import { Compass, GraduationCap, Briefcase, Trophy, Flag, Sparkles } from "lucide-react";
import { TIMELINE_JOURNEY } from "@/config/content";
import { GlassCard } from "@/components/ui/GlassCard";

export function TimelineSection() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Education":
        return GraduationCap;
      case "Internship":
        return Briefcase;
      case "Competition":
        return Trophy;
      case "Research":
        return Sparkles;
      default:
        return Flag;
    }
  };

  return (
    <section id="timeline" className="relative py-24 px-4 bg-[#05050A]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <Compass className="h-3.5 w-3.5" />
            <span>06 • IMMERSIVE ENGINEERING JOURNEY</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            From foundations to <span className="text-gradient-cyan">architectural leadership</span>.
          </h2>
        </motion.div>

        {/* Timeline Path */}
        <div className="mt-14 relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 flex flex-col gap-10">
          {TIMELINE_JOURNEY.map((entry, idx) => {
            const Icon = getTypeIcon(entry.type);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Node Emblem */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/40 bg-[#0A0A16] text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Icon className="h-4 w-4" />
                </div>

                <GlassCard hoverEffect className="p-6 border-white/10 hover:border-cyan-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <span className="font-mono text-[11px] text-cyan-400 font-bold">{entry.period}</span>
                      <h3 className="text-lg font-bold text-white mt-0.5">{entry.title}</h3>
                      <p className="text-xs text-slate-400 font-medium">{entry.organization} • {entry.location}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-slate-300">
                      {entry.type}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">{entry.description}</p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {entry.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-1 font-mono text-cyan-400 text-[10px]">►</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry.skillsUsed.map((sk, i) => (
                      <span key={i} className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                        {sk}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
