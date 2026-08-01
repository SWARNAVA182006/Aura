"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { PROJECTS } from "@/config/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
  selectedProjectId?: string;
  onSelectProjectId?: (id: string) => void;
}

// Visual identity specs for each project world
const PROJECT_WORLDS: Record<string, {
  accent: string;
  accentRgb: string;
  category: string;
  tagline: string;
  metrics: { label: string; value: string }[];
  visualEffect: string;
}> = {
  "seisvision-ai": {
    accent: "#00E599",
    accentRgb: "0,229,153",
    category: "SEISMIC COMPUTER VISION · ONGC",
    tagline: "Vision Transformers for Subsurface Seismic Fault & Horizon Segmentation.",
    metrics: [
      { label: "Segment IoU", value: "94.2%" },
      { label: "Inference", value: "0.4s" },
      { label: "Time Saved", value: "85%" },
    ],
    visualEffect: "Subsurface Wave Propagation · Deep Fault Lines",
  },
  "hpcc-copilot": {
    accent: "#00F0FF",
    accentRgb: "0,240,255",
    category: "ENTERPRISE RAG · HPCC SYSTEMS",
    tagline: "Domain-Specific Developer Copilot for ECL Clusters & Big Data Pipelines.",
    metrics: [
      { label: "RAG Accuracy", value: "96.8%" },
      { label: "Query Speed", value: "<45ms" },
      { label: "Latency Red.", value: "3.2x" },
    ],
    visualEffect: "ECL Token Matrix · High-Speed Vector Database Stream",
  },
  "forestnet": {
    accent: "#FF2A6D",
    accentRgb: "255,42,109",
    category: "SATELLITE AI · ENVIRONMENTAL",
    tagline: "Multi-Spectral Satellite Imagery Pipeline for Canopy Loss Detection.",
    metrics: [
      { label: "Resolution", value: "10m" },
      { label: "Detection", value: "91.5%" },
      { label: "Refresh", value: "Realtime" },
    ],
    visualEffect: "Infrared Canopy Mesh · Airborne Spore Particles",
  },
  "performpro": {
    accent: "#818CF8",
    accentRgb: "129,140,248",
    category: "FULL-STACK ANALYTICS",
    tagline: "Engineering Productivity Telemetry & Systems Output Monitor.",
    metrics: [
      { label: "Throughput", value: "10k/s" },
      { label: "Uptime", value: "99.99%" },
      { label: "Latency", value: "<12ms" },
    ],
    visualEffect: "Real-time Metric Vectors · Stream Telemetry",
  },
  "smart-irrigation": {
    accent: "#10B981",
    accentRgb: "16,185,129",
    category: "IOT & EMBEDDED AI",
    tagline: "Precision Soil Moisture Prediction & Automated Water Conservation.",
    metrics: [
      { label: "Water Saved", value: "40%" },
      { label: "Node Mesh", value: "128" },
      { label: "Efficiency", value: "+65%" },
    ],
    visualEffect: "Sensor Mesh Network · Moisture Telemetry",
  },
  "autism-detection-ai": {
    accent: "#A855F7",
    accentRgb: "168,85,247",
    category: "HEALTHCARE COMPUTER VISION",
    tagline: "Non-Invasive Early Gaze Pattern Analysis using Facial Vector Graphs.",
    metrics: [
      { label: "Precision", value: "93.4%" },
      { label: "FPS", value: "60" },
      { label: "Non-Invasive", value: "100%" },
    ],
    visualEffect: "Gaze Pattern Tracking · Vector Landmark Mesh",
  },
  "guidewire-devtrails": {
    accent: "#2563EB",
    accentRgb: "37,99,235",
    category: "ENTERPRISE MICROSERVICES",
    tagline: "Guidewire Policy Center Microservices & Stateful Transaction Engine.",
    metrics: [
      { label: "Transaction", value: "<25ms" },
      { label: "Coverage", value: "98%" },
      { label: "Scale", value: "Enterprise" },
    ],
    visualEffect: "State Machine Topology · Policy Transaction Matrix",
  },
};

export function ChapterArtifacts({ onNextChapter, selectedProjectId, onSelectProjectId }: StageProps) {
  const [internalId, setInternalId] = useState<string>("seisvision-ai");

  const activeId = selectedProjectId || internalId;
  const project = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];
  const world = PROJECT_WORLDS[activeId] ?? PROJECT_WORLDS["seisvision-ai"];

  const handleSelect = (id: string) => {
    soundFX.playClickSnap();
    if (onSelectProjectId) onSelectProjectId(id);
    else setInternalId(id);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030305] flex items-center">
      {/* ── Dynamic Ambient World Glow ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest border backdrop-blur-md transition-colors duration-500"
            style={{
              color: world.accent,
              borderColor: `rgba(${world.accentRgb}, 0.35)`,
              background: `rgba(${world.accentRgb}, 0.08)`,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ background: world.accent }} />
            02 — THE ARTIFACTS
          </div>
          <span className="hidden md:block font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            {world.visualEffect}
          </span>
        </div>

        {/* Main Grid: Left Vertical Project Selector, Right World Canvas */}
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: Project Selector List */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
            {PROJECTS.map((p) => {
              const w = PROJECT_WORLDS[p.id] ?? PROJECT_WORLDS["seisvision-ai"];
              const isActive = p.id === activeId;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  className="group relative w-full text-left rounded-2xl border p-3.5 transition-all duration-300 backdrop-blur-xl"
                  style={{
                    borderColor: isActive ? `rgba(${w.accentRgb}, 0.5)` : "rgba(255,255,255,0.06)",
                    background: isActive ? `rgba(${w.accentRgb}, 0.1)` : "rgba(255,255,255,0.02)",
                    boxShadow: isActive ? `0 0 25px rgba(${w.accentRgb}, 0.15)` : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-2 w-2 rounded-full transition-all duration-300"
                      style={{
                        background: w.accent,
                        boxShadow: isActive ? `0 0 8px ${w.accent}` : "none",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-mono text-xs font-bold truncate transition-colors duration-300"
                        style={{ color: isActive ? w.accent : "#94a3b8" }}
                      >
                        {p.title}
                      </div>
                      <div className="font-mono text-[10px] text-slate-500 truncate mt-0.5">
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
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl border p-8 lg:p-10 backdrop-blur-2xl overflow-hidden shadow-2xl"
                style={{
                  borderColor: `rgba(${world.accentRgb}, 0.35)`,
                  background: `linear-gradient(135deg, rgba(7,7,18,0.92) 0%, rgba(${world.accentRgb}, 0.05) 100%)`,
                }}
              >
                {/* World Category Tag */}
                <div className="font-mono text-xs font-bold tracking-widest uppercase mb-3" style={{ color: world.accent }}>
                  {world.category}
                </div>

                {/* Huge Title */}
                <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                  {project.title}
                </h2>

                {/* 2-Line Tagline */}
                <p className="text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-xl mb-8">
                  {world.tagline}
                </p>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {world.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border p-4 text-center transition-all duration-300"
                      style={{
                        borderColor: `rgba(${world.accentRgb}, 0.25)`,
                        background: `rgba(${world.accentRgb}, 0.06)`,
                      }}
                    >
                      <div className="font-mono text-xl lg:text-3xl font-black" style={{ color: world.accent }}>
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Brand Logos */}
                <div className="flex flex-wrap gap-2 mb-8">
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
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-slate-500">Internal Industrial Architecture</span>
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
