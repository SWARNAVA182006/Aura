"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Network, ArrowRight, CheckCircle2, Cpu, Database, Play, RefreshCw } from "lucide-react";
import { PROJECTS } from "@/config/content";
import { GlassCard } from "@/components/ui/GlassCard";

export function ArchitectureExplorer() {
  // Select projects that have pipeline diagrams defined
  const diagramProjects = PROJECTS.filter((p) => p.pipelineDiagram);
  const [selectedId, setSelectedId] = useState(diagramProjects[0]?.id || "seisvision-ai");

  const currentProject = diagramProjects.find((p) => p.id === selectedId) || diagramProjects[0];
  const diagram = currentProject?.pipelineDiagram;

  return (
    <section id="architecture" className="relative py-24 px-4 bg-[#030305]">
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
            <Network className="h-3.5 w-3.5" />
            <span>05 • INTERACTIVE SYSTEM PIPELINE EXPLORER</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Tracing system dataflow & <span className="text-gradient-cyan">architectural pipelines</span>.
          </h2>
          <p className="mt-2 text-xs text-slate-400 max-w-2xl">
            Select a project below to visualize the real system architecture and execution pipeline designed by Swarnava Sarkar.
          </p>
        </motion.div>

        {/* Project Selector Tabs */}
        <div className="mt-8 flex gap-3">
          {diagramProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition ${
                selectedId === p.id
                  ? "border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Cpu className="h-4 w-4" />
              <span>{p.title} Pipeline</span>
            </button>
          ))}
        </div>

        {/* Pipeline Diagram Card */}
        {diagram && (
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <GlassCard className="p-8 border-cyan-500/30 bg-[#0A0A16]/90">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{currentProject.title} Architecture Flow</h3>
                  <p className="text-xs text-slate-400">{currentProject.subtitle}</p>
                </div>
                <span className="font-mono text-xs text-cyan-400 rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1">
                  SYSTEM DESIGN VERIFIED
                </span>
              </div>

              {/* Interactive Pipeline Nodes Flow */}
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 relative">
                {diagram.nodes.map((node, idx) => (
                  <div key={node.id} className="flex flex-col items-center text-center relative group">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,240,255,0.15)] group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition">
                      <span className="font-mono text-lg font-bold text-cyan-300">0{idx + 1}</span>
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-white">{node.label}</h4>
                    <p className="mt-1 font-mono text-[11px] text-slate-400">{node.sub}</p>

                    {/* Connecting Arrow for MD screens */}
                    {idx < diagram.nodes.length - 1 && (
                      <div className="hidden md:flex absolute top-8 -right-4 translate-x-1/2 items-center text-cyan-400 z-10">
                        <ArrowRight className="h-5 w-5 animate-pulse" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* System Architecture Highlights Bullet List */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase">Core Architecture Principles</h4>
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {currentProject.caseStudy.systemArchitecture.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </section>
  );
}
