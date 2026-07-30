"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight, Cpu, Layers, ExternalLink, Code2 } from "lucide-react";
import { PROJECTS } from "@/config/content";
import { Project } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { SystemArchitectureModal } from "@/components/ui/SystemArchitectureModal";

export function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & Computer Vision", "HPC & Developer Tools", "Full-Stack & Systems", "IoT & Environmental", "Healthcare AI"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <SystemArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <section id="works" className="relative py-24 px-4 bg-[#05050A]">
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
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>04 • REAL ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Authentic systems, <span className="text-gradient-cyan">real engineering case studies</span>.
            </h2>
            <p className="mt-2 text-xs text-slate-400 max-w-2xl">
              Click any project below to inspect the full engineering documentation: problem statement, research foundation, system architecture, challenges solved, and lessons learned.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 font-mono text-xs transition ${
                  activeCategory === cat
                    ? "border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    : "border border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  onClick={() => setSelectedProject(project)}
                  hoverEffect
                  className="h-full flex flex-col justify-between p-6 group cursor-pointer border-white/10 hover:border-cyan-500/40"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-cyan-400">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-400 transition flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-300">{project.subtitle}</p>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">{project.tagline}</p>

                    {/* Key Metrics Pill Badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.impactMetrics.map((m, i) => (
                        <div key={i} className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 font-mono text-[11px]">
                          <span className="font-bold text-cyan-300">{m.value}</span>{" "}
                          <span className="text-slate-400">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Footer */}
                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="font-mono text-[10px] text-slate-400">
                          #{tech}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[11px] text-cyan-400 group-hover:underline">
                      Read Documentation →
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
