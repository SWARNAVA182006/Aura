"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Code2, Layers, CheckCircle } from "lucide-react";
import { SKILL_GROUPS } from "@/config/content";
import { GlassCard } from "@/components/ui/GlassCard";

export function StackSection() {
  return (
    <section id="stack" className="relative py-24 px-4 bg-[#030305]">
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
            <Cpu className="h-3.5 w-3.5" />
            <span>07 • TECHNICAL SKILLS & ARCHITECTURE STACK</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            My technical stack & <span className="text-gradient-cyan">engineering capabilities</span>.
          </h2>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full p-6 flex flex-col justify-between border-white/10 hover:border-cyan-500/30">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                    <span className="font-mono text-[10px] text-cyan-400 rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5">
                      VERIFIED SKILLS
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{group.description}</p>

                  {/* Skill Items List */}
                  <div className="mt-6 flex flex-col gap-3">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200 flex items-center gap-2">
                            {skill.highlight && <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />}
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">{skill.tag}</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full ${
                              skill.highlight
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                                : "bg-slate-400"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
