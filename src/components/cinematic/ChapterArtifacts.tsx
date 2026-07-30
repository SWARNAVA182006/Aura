"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Cpu, ArrowRight, Github, ExternalLink, ShieldCheck, Layers, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/config/content";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
}

export function ChapterArtifacts({ onNextChapter }: StageProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("seisvision-ai");
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges">("overview");

  const project = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];
  const cs = project.caseStudy;

  const handleSelectProject = (id: string) => {
    soundFX.playClickSnap();
    setSelectedProjectId(id);
  };

  const handleTabClick = (tab: "overview" | "architecture" | "challenges") => {
    soundFX.playHoverBlip();
    setActiveTab(tab);
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-4 pt-28 pb-16 overflow-hidden bg-[#030305]">
      {/* Ambient Radial Blur */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Chapter Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 font-mono text-xs text-cyan-300">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>CHAPTER 02 • THE ARTIFACTS</span>
            </div>
            <span className="font-mono text-xs text-slate-400">REAL ENGINEERING CASE STUDIES</span>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Authentic Systems & <span className="text-gradient-cyan">Engineering Case Studies</span>.
          </h1>
        </div>

        {/* Project Selector Stage Ribbon */}
        <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto pb-2">
          {PROJECTS.map((p) => {
            const isSelected = p.id === selectedProjectId;
            return (
              <button
                key={p.id}
                onMouseEnter={() => soundFX.playHoverBlip()}
                onClick={() => handleSelectProject(p.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs transition ${
                  isSelected
                    ? "border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] font-bold"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <BrandLogo name={p.title} showText={false} className="h-4 w-4" />
                <span>{p.title}</span>
                {p.featured && (
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Project Stage Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12"
          >
            {/* Left Stage Box: Metadata, Impact Metrics, Quick Info */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-3xl border border-cyan-500/30 bg-[#090914]/90 p-6 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-cyan-400 font-bold">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold text-white">{project.title}</h2>
                <p className="mt-1 font-mono text-xs text-slate-300">{project.subtitle}</p>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">{project.description}</p>

                {/* Key Metrics Grid */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {project.impactMetrics.map((m, i) => (
                    <div key={i} className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-2.5 text-center">
                      <div className="font-mono text-base font-bold text-cyan-300">{m.value}</div>
                      <div className="text-[9px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Brand Badges */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-mono text-[10px] text-slate-400 uppercase font-bold">Technology Stack & Brand Logos</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <BrandLogo key={i} name={tech} />
                    ))}
                  </div>
                </div>

                {/* GitHub link */}
                {project.githubUrl && (
                  <div className="mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      onMouseEnter={() => soundFX.playHoverBlip()}
                      onClick={() => soundFX.playClickSnap()}
                    >
                      <Button variant="secondary" size="sm" className="w-full justify-center" icon={<Github className="h-4 w-4" />}>
                        View GitHub Repository
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right Stage Box: Interactive Architecture & Deep-Dive Tabs */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-[#090914]/90 p-6 backdrop-blur-2xl shadow-2xl flex flex-col justify-between h-full">
                <div>
                  {/* Tab Navigation */}
                  <div className="flex gap-2 border-b border-white/10 pb-3 font-mono text-xs">
                    <button
                      onClick={() => handleTabClick("overview")}
                      className={`px-3 py-1.5 rounded-lg transition ${
                        activeTab === "overview"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Problem & Motivation
                    </button>
                    <button
                      onClick={() => handleTabClick("architecture")}
                      className={`px-3 py-1.5 rounded-lg transition ${
                        activeTab === "architecture"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      System Architecture
                    </button>
                    <button
                      onClick={() => handleTabClick("challenges")}
                      className={`px-3 py-1.5 rounded-lg transition ${
                        activeTab === "challenges"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Challenges & Impact
                    </button>
                  </div>

                  {/* Tab Contents */}
                  <div className="mt-6">
                    {activeTab === "overview" && (
                      <div className="flex flex-col gap-4 text-xs text-slate-300 leading-relaxed">
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                          <h4 className="font-bold text-white mb-1">Problem Statement</h4>
                          <p>{cs.problemStatement}</p>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                          <h4 className="font-bold text-cyan-300 mb-1">Motivation</h4>
                          <p>{cs.motivation}</p>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                          <h4 className="font-bold text-purple-300 mb-1">Research & Technical Foundation</h4>
                          <p>{cs.research}</p>
                        </div>
                      </div>
                    )}

                    {activeTab === "architecture" && (
                      <div className="flex flex-col gap-4 text-xs text-slate-300">
                        {/* Interactive Pipeline Nodes */}
                        {project.pipelineDiagram && (
                          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/10 p-4">
                            <h4 className="font-mono text-[11px] font-bold text-cyan-400 uppercase mb-3">
                              Pipeline Execution Flow
                            </h4>
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                              {project.pipelineDiagram.nodes.map((node, idx) => (
                                <div key={node.id} className="rounded-xl border border-white/10 bg-black/40 p-2.5 text-center">
                                  <div className="font-mono text-cyan-300 font-bold text-xs">0{idx + 1}</div>
                                  <div className="font-bold text-white mt-1 text-[11px]">{node.label}</div>
                                  <div className="text-[9px] text-slate-400 font-mono mt-0.5">{node.sub}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                          <h4 className="font-bold text-white mb-2">Architecture Highlights</h4>
                          <ul className="flex flex-col gap-2">
                            {cs.systemArchitecture.map((arch, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="font-mono text-cyan-400">►</span>
                                <span>{arch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeTab === "challenges" && (
                      <div className="flex flex-col gap-4 text-xs text-slate-300">
                        <div className="flex flex-col gap-2">
                          {cs.challengesAndSolutions.map((pair, i) => (
                            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                              <div className="font-bold text-red-400">Challenge: {pair.challenge}</div>
                              <div className="mt-1 text-emerald-300">Solution: {pair.solution}</div>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                            <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase">Impact Achieved</h4>
                            <ul className="mt-2 flex flex-col gap-1">
                              {cs.impact.map((imp, i) => (
                                <li key={i} className="flex items-center gap-1.5 text-emerald-300">
                                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                                  <span>{imp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                            <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase">Lessons Learned</h4>
                            <ul className="mt-2 flex flex-col gap-1">
                              {cs.lessonsLearned.map((les, i) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-300">
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                  <span>{les}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Stage Navigation */}
                <div className="mt-8 border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="font-mono text-xs text-slate-400">REAL PROJECT CASE STUDY</span>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      soundFX.playTransitionSweep();
                      onNextChapter();
                    }}
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Proceed to Chapter 03: Journey & Skills
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
