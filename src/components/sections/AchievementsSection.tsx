"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, ShieldCheck } from "lucide-react";
import { ACHIEVEMENTS } from "@/config/content";
import { GlassCard } from "@/components/ui/GlassCard";

export function AchievementsSection() {
  return (
    <section className="relative py-20 px-4 bg-[#05050A]">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <Trophy className="h-3.5 w-3.5" />
            <span>08 • ACHIEVEMENTS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Recognized for <span className="text-gradient-cyan">engineering excellence</span>.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full p-6 flex flex-col justify-between border-white/10 hover:border-cyan-500/30">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] text-cyan-300">
                      {ach.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{ach.year}</span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white">{ach.title}</h3>
                  <p className="mt-1 font-mono text-xs text-slate-400">{ach.organization}</p>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">{ach.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
