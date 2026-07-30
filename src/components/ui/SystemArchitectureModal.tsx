"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Cpu, ShieldAlert, CheckCircle, FileText, Layers, Rocket } from "lucide-react";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export function SystemArchitectureModal({ project, onClose }: ModalProps) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#090914] p-6 sm:p-8 shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <span>CASE STUDY</span>
                <span>•</span>
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.impactMetrics.map((m, i) => (
              <div key={i} className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
                <div className="font-mono text-lg font-bold text-cyan-400">{m.value}</div>
                <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Case Study Sections */}
          <div className="mt-8 flex flex-col gap-8 text-slate-300 text-sm leading-relaxed">
            {/* Problem & Motivation */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <ShieldAlert className="h-4 w-4 text-amber-400" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-xs text-slate-300">{cs.problemStatement}</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <Rocket className="h-4 w-4 text-cyan-400" />
                  <span>Motivation & Context</span>
                </div>
                <p className="text-xs text-slate-300">{cs.motivation}</p>
              </div>
            </div>

            {/* Research & Foundation */}
            <div>
              <h3 className="flex items-center gap-2 font-bold text-white text-base">
                <FileText className="h-4 w-4 text-purple-400" />
                <span>Research & Foundation</span>
              </h3>
              <p className="mt-2 text-xs text-slate-300">{cs.research}</p>
            </div>

            {/* System Architecture */}
            <div>
              <h3 className="flex items-center gap-2 font-bold text-white text-base">
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>System Architecture</span>
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {cs.systemArchitecture.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="mt-0.5 font-mono text-cyan-400">►</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Engineering Solutions */}
            <div>
              <h3 className="font-bold text-white text-base">Challenges & Key Engineering Solutions</h3>
              <div className="mt-3 flex flex-col gap-3">
                {cs.challengesAndSolutions.map((csPair, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-bold text-red-400">Challenge: {csPair.challenge}</div>
                    <div className="mt-1 text-xs text-emerald-300">Solution: {csPair.solution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & Lessons */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">Impact Achieved</h4>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {cs.impact.map((imp, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">Lessons Learned</h4>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {cs.lessonsLearned.map((les, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{les}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h4 className="font-mono text-xs font-bold text-slate-400 uppercase">Technology Stack</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" icon={<Github className="h-4 w-4" />}>
                    GitHub Repository
                  </Button>
                </a>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close Case Study
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
