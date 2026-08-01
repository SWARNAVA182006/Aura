"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/config/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
  selectedProjectId?: string;
  onSelectProjectId?: (id: string) => void;
}

// Visual identity specs & factual metrics for each project world
const PROJECT_WORLDS: Record<string, {
  accent: string;
  accentRgb: string;
  category: string;
  tagline: string;
  visualEffect: string;
}> = {
  "seisvision": {
    accent: "#00E599",
    accentRgb: "0,229,153",
    category: "SEISMIC COMPUTER VISION · ONGC",
    tagline: "AI-assisted seismic interpretation, SEG-Y signal processing, and fault & horizon detection.",
    visualEffect: "Subsurface Wave Propagation · Seismic Amplitude Slices",
  },
  "hpcc-copilot": {
    accent: "#00F0FF",
    accentRgb: "0,240,255",
    category: "ENTERPRISE RAG · HPC ASSISTANT",
    tagline: "Enterprise offline AI Copilot providing developer assistance, RAG retrieval, and Treesitter AST validation.",
    visualEffect: "AST Syntax Validation Engine · Parallel C/CUDA Checker",
  },
  "forestnet": {
    accent: "#FF2A6D",
    accentRgb: "255,42,109",
    category: "SATELLITE MONITORING & IOT",
    tagline: "Multispectral satellite imagery remote sensing and ESP32 LoRa IoT anomaly detection.",
    visualEffect: "Multispectral NDVI Imagery · IoT Sensor Mesh",
  },
  "performpro": {
    accent: "#818CF8",
    accentRgb: "129,140,248",
    category: "FULL-STACK ANALYTICS · TECHFORCE ACADEMY",
    tagline: "Employee performance management & analytics dashboard developed for Techforce Academy (Australia).",
    visualEffect: "FastAPI REST Microservices · React Metrics Portal",
  },
  "claimsassist-ai": {
    accent: "#2563EB",
    accentRgb: "37,99,235",
    category: "INSURANCE AI · GUIDEWIRE DEVTRAILS FINALIST",
    tagline: "Insurance domain claims intake and policyholder assistance platform — Guidewire DevTrails National Finalist.",
    visualEffect: "Vision Damage Inspection · Policy RAG Agent",
  },
};

export function ChapterArtifacts({ onNextChapter, selectedProjectId, onSelectProjectId }: StageProps) {
  const [internalId, setInternalId] = useState<string>("seisvision");

  const activeId = selectedProjectId || internalId;
  const project = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];
  const world = PROJECT_WORLDS[activeId] ?? PROJECT_WORLDS["seisvision"];

  const handleSelect = (id: string) => {
    soundFX.playClickSnap();
    if (onSelectProjectId) onSelectProjectId(id);
    else setInternalId(id);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030305] flex items-center">
      {/* Dynamic Ambient World Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, rgba(${world.accentRgb}, 0.16) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(${world.accentRgb}, 0.08) 0%, transparent 50%)`,
          }}
        />
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 lg:px-12">
        {/* Header Tag */}
        <div className="mb-6 flex items-center justify-between">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest border backdrop-blur-md transition-colors duration-500"
            style={{
              color: world.accent,
              borderColor: `rgba(${world.accentRgb}, 0.35)`,
              background: `rgba(${world.accentRgb}, 0.08)`,
            }}
          >
            <span className="h-2 w-2 rounded-full animate-ping" style={{ background: world.accent }} />
            02 — THE ARTIFACTS
          </div>
          <span className="hidden md:block font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold">
            {world.visualEffect}
          </span>
        </div>

        {/* Main Grid: Left Vertical Project Selector, Right World Canvas */}
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: Project Selector List */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
            {PROJECTS.map((p) => {
              const w = PROJECT_WORLDS[p.id] ?? PROJECT_WORLDS["seisvision"];
              const isActive = p.id === activeId;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  className="group relative w-full text-left rounded-2xl border p-4 transition-all duration-300 backdrop-blur-xl"
                  style={{
                    borderColor: isActive ? `rgba(${w.accentRgb}, 0.5)` : "rgba(255,255,255,0.08)",
                    background: isActive ? `rgba(${w.accentRgb}, 0.1)` : "rgba(255,255,255,0.03)",
                    boxShadow: isActive ? `0 0 25px rgba(${w.accentRgb}, 0.15)` : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-2.5 w-2.5 rounded-full transition-all duration-300"
                      style={{
                        background: w.accent,
                        boxShadow: isActive ? `0 0 10px ${w.accent}` : "none",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-mono text-sm font-bold truncate transition-colors duration-300"
                        style={{ color: isActive ? w.accent : "#e2e8f0" }}
                      >
                        {p.title}
                      </div>
                      <div className="font-mono text-xs text-slate-400 truncate mt-0.5 font-medium">
                        {p.category}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Immersive Project World View */}
          <div className="col-span-12 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl border p-8 lg:p-10 backdrop-blur-2xl overflow-hidden shadow-2xl"
                style={{
                  borderColor: `rgba(${world.accentRgb}, 0.35)`,
                  background: `linear-gradient(135deg, rgba(7,7,18,0.95) 0%, rgba(${world.accentRgb}, 0.08) 100%)`,
                }}
              >
                {/* World Category Tag */}
                <div className="font-mono text-xs font-bold tracking-widest uppercase mb-2" style={{ color: world.accent }}>
                  {world.category}
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                  {project.title}
                </h2>

                {/* Subtitle */}
                <p className="text-base text-cyan-300 font-semibold mb-4">{project.subtitle}</p>

                {/* Tagline */}
                <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-xl mb-6">
                  {project.description}
                </p>

                {/* 3 Metric Badges (Factual capabilities, no fake percentages) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {project.impactMetrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border p-3.5 text-center transition-all duration-300"
                      style={{
                        borderColor: `rgba(${world.accentRgb}, 0.3)`,
                        background: `rgba(${world.accentRgb}, 0.08)`,
                      }}
                    >
                      <div className="font-mono text-sm font-bold text-white mb-0.5">
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Brand Logos */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <BrandLogo key={idx} name={tech} size="md" />
                  ))}
                </div>

                {/* Actions: GitHub & Next Chapter */}
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs font-bold transition-all duration-200 hover:opacity-80"
                      style={{ color: world.accent }}
                    >
                      <Github className="h-4 w-4" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-slate-400 font-medium">Internal Industrial Architecture</span>
                  )}

                  <button
                    onClick={() => {
                      soundFX.playChapterSweep();
                      onNextChapter();
                    }}
                    onMouseEnter={() => soundFX.playHoverBlip()}
                    className="flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-bold text-black transition-all duration-300 hover:scale-105"
                    style={{
                      background: world.accent,
                      boxShadow: `0 0 20px rgba(${world.accentRgb}, 0.4)`,
                    }}
                  >
                    <span>Proceed to Expedition</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
