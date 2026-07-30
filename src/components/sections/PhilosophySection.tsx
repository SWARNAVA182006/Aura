"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";
import { ENGINEERING_PHILOSOPHY } from "@/config/content";
import { GlassCard } from "@/components/ui/GlassCard";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-24 px-4 bg-[#05050A]">
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
            <Lightbulb className="h-3.5 w-3.5" />
            <span>02 • ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            My principles for <span className="text-gradient-cyan">building software that lasts</span>.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-400 leading-relaxed">
            {ENGINEERING_PHILOSOPHY.overview}
          </p>
        </motion.div>

        {/* 4 Principles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ENGINEERING_PHILOSOPHY.principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-cyan-400">{item.number}</span>
                    <ShieldCheck className="h-5 w-5 text-slate-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Why Software & Why AI Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 border-cyan-500/30 bg-cyan-950/10">
              <div className="flex items-center gap-3">
                <Terminal className="h-6 w-6 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Why I Build Software</h3>
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                {ENGINEERING_PHILOSOPHY.whySoftware}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 border-purple-500/30 bg-purple-950/10">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-purple-400" />
                <h3 className="text-base font-bold text-white">Why AI & Machine Learning</h3>
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                {ENGINEERING_PHILOSOPHY.whyAi}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
