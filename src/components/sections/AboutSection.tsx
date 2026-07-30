"use client";

import { motion } from "framer-motion";
import { UserCheck, Code2, Brain, Compass, Terminal, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Computer Vision",
      text: "Passionate about computer vision, Vision Transformers, U-Net segmentations, and applying AI to scientific and domain-specific challenges.",
    },
    {
      icon: Code2,
      title: "Systems & Architecture",
      text: "Building strict TypeScript frontend architectures, Rust/Node backend orchestrators, and high-performance database retrieval layers.",
    },
    {
      icon: Compass,
      title: "Product & Craft",
      text: "Believer in luxury minimalism, tactile micro-interactions, high accessibility standards (WCAG AA), and performance optimization.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 bg-[#030305]">
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
            <Terminal className="h-3.5 w-3.5" />
            <span>01 • WHO I AM</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Building software with <span className="text-gradient-cyan">purpose, precision & depth</span>.
          </h2>
        </motion.div>

        {/* Story Text & Highlights Split */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 lg:col-span-7 text-slate-300 text-base leading-relaxed"
          >
            <p>
              Hello, I am <strong className="text-white">Swarnava Sarkar</strong>. I am an AI Engineer, Software Architect, and Computer Science researcher focused on building intelligent systems that bridge complex mathematical models with high-craft human interfaces.
            </p>
            <p>
              My journey is rooted in a deep fascination with how code turns abstract mathematical abstractions into physical and digital leverage. Whether analyzing seismic data profiles at <strong className="text-cyan-300">ONGC</strong>, building specialized copilot platforms for high-performance computing clusters (<strong className="text-cyan-300">HPCC Copilot</strong>), or engineering computer vision models for environmental and health applications (<strong className="text-cyan-300">ForestNet</strong>, <strong className="text-cyan-300">Autism Detection AI</strong>), I approach every project with first-principles rigor.
            </p>
            <p>
              I don't just write code; I design systems. I think about latency, maintainability, type safety, user trust, and long-term architectural scalability.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span>First-Principles Thinker</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                <UserCheck className="h-4 w-4 text-emerald-400" />
                <span>Product & Systems Mindset</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GlassCard key={idx} hoverEffect className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
