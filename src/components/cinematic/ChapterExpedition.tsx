"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TIMELINE_EVENTS, EVIDENCE_SKILLS, ACHIEVEMENTS_DATA } from "@/config/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ChevronRight, Calendar, MapPin, ExternalLink, Sparkles, Layers, Trophy, CheckCircle2 } from "lucide-react";
import { soundFX } from "@/lib/sound";

interface ChapterExpeditionProps {
  onNextChapter: () => void;
}

export function ChapterExpedition({ onNextChapter }: ChapterExpeditionProps) {
  const [activeTab, setActiveTab] = useState<"milestones" | "skills" | "achievements">("milestones");
  const [expandedTimelineIndex, setExpandedTimelineIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen w-full bg-[#030305] text-white py-24 px-6 lg:px-16 xl:px-24 flex flex-col justify-center transform-gpu">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[120px] transform-gpu" />
      <div className="pointer-events-none absolute right-10 bottom-1/4 h-[550px] w-[550px] rounded-full bg-indigo-600/10 blur-[120px] transform-gpu" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Tag & Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1.5 font-mono text-xs font-bold text-indigo-300 uppercase tracking-widest backdrop-blur-md mb-3">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            CHAPTER 03 — THE EXPEDITION
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Journey, Skill Mesh &amp; <span className="text-gradient-cyan">Credentials.</span>
          </h2>
        </div>

        {/* 3-Tab Interactive Switcher Bar */}
        <div className="mb-8 flex gap-2 rounded-2xl border border-white/15 bg-[#070712]/95 p-1.5 w-fit backdrop-blur-md shadow-2xl transform-gpu">
          {[
            { key: "milestones" as const, label: "Milestones Timeline" },
            { key: "skills" as const, label: "Evidence Skill Mesh" },
            { key: "achievements" as const, label: "Verified Credentials" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                soundFX.playHoverBlip();
                setActiveTab(tab.key);
              }}
              className={`rounded-xl px-5 py-2 font-mono text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-indigo-500/25 text-indigo-200 border border-indigo-500/50 shadow-[0_0_20px_rgba(129,140,248,0.35)]"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Expandable Milestones Timeline */}
        {activeTab === "milestones" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative border-l-2 border-cyan-500/30 ml-4 lg:ml-6 space-y-5 mb-12 transform-gpu"
          >
            {TIMELINE_EVENTS.map((evt, idx) => {
              const isExpanded = expandedTimelineIndex === idx;
              return (
                <div key={idx} className="relative pl-7 group transform-gpu">
                  {/* Node Bullet Dot */}
                  <button
                    onClick={() => {
                      soundFX.playClickSnap();
                      setExpandedTimelineIndex(isExpanded ? null : idx);
                    }}
                    className={`absolute -left-[17px] top-1.5 h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? "border-cyan-400 bg-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.6)] scale-110"
                        : "border-slate-600 bg-[#070712] hover:border-cyan-400 hover:scale-105"
                    }`}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${isExpanded ? "bg-black" : "bg-cyan-400"}`} />
                  </button>

                  {/* Summary Card */}
                  <div
                    onClick={() => {
                      soundFX.playHoverBlip();
                      setExpandedTimelineIndex(isExpanded ? null : idx);
                    }}
                    className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 transform-gpu ${
                      isExpanded
                        ? "border-cyan-400/60 bg-[#090918]/95 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                        : "border-white/10 bg-[#070712]/95 hover:border-white/20 hover:bg-[#090918]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                          {evt.period}
                        </span>
                        <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                          {evt.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2.5">
                        {evt.logoSrc && <BrandLogo name={evt.organization} logoSrc={evt.logoSrc} size="sm" showText={false} />}
                        {evt.proofSrc && evt.proofSrc !== evt.logoSrc && (
                          <div className="relative h-7 w-11 rounded border border-white/20 shadow-md overflow-hidden bg-black/60 shrink-0 transform-gpu">
                            <Image src={evt.proofSrc} alt={`${evt.title} Proof Certificate`} fill className="object-cover" sizes="44px" />
                          </div>
                        )}
                        <span className="font-mono text-xs text-slate-400 font-semibold">{evt.organization}</span>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-white/10 space-y-3 overflow-hidden transform-gpu"
                        >
                          <p className="text-slate-300 text-sm leading-relaxed">{evt.description}</p>

                          {evt.proofSrc && (
                            <div className="mt-2 overflow-hidden rounded-xl border border-cyan-500/25 bg-black/60 p-2.5 backdrop-blur-sm transform-gpu">
                              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                                Verified Proof &amp; Certificate
                              </div>
                              <div className="relative h-44 w-full max-w-md rounded-lg overflow-hidden border border-white/15 bg-slate-950 transform-gpu">
                                <Image src={evt.proofSrc} alt={`${evt.title} Verified Proof`} fill className="object-contain" sizes="(max-width: 768px) 100vw, 448px" />
                              </div>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 pt-2">
                            {evt.skillsUsed.map((sk, i) => (
                              <span
                                key={i}
                                className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-200 font-medium"
                              >
                                {sk}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Tab 2: Evidence Skill Mesh */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transform-gpu"
          >
            {EVIDENCE_SKILLS.map((sk, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#070712]/95 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#090918] flex flex-col justify-between transform-gpu"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {sk.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-semibold">{sk.yearsUsed}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{sk.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{sk.evidenceSummary}</p>

                  {/* Projects Used */}
                  {sk.projectsUsed.length > 0 && (
                    <div className="mb-3">
                      <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-bold mb-1.5">PROJECT PROOF</div>
                      <div className="flex flex-wrap gap-1.5">
                        {sk.projectsUsed.map((p, i) => (
                          <span key={i} className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200">
                            {p.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Internships Used */}
                  {sk.internshipsUsed.length > 0 && (
                    <div className="mb-4">
                      <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-bold mb-1.5">INTERNSHIP PROOF</div>
                      <div className="flex flex-wrap gap-1.5">
                        {sk.internshipsUsed.map((int, i) => (
                          <span key={i} className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-300 font-semibold">
                            {int}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Verified Credentials & Achievements */}
        {activeTab === "achievements" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transform-gpu"
          >
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group rounded-3xl border border-white/10 bg-[#070712]/95 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#090918] hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between transform-gpu"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {ach.logoSrc ? (
                      <BrandLogo name={ach.organization} logoSrc={ach.logoSrc} size="md" showText={false} />
                    ) : (
                      <Trophy className="h-8 w-8 text-cyan-400" />
                    )}
                    <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {ach.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ach.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mb-2">{ach.organization} · {ach.year}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Footer Navigation */}
        <div className="flex justify-end">
          <button
            onClick={() => { soundFX.playClickSnap(); onNextChapter(); }}
            className="group flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-mono text-xs font-bold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transform-gpu"
          >
            <span>PROCEED TO CHAPTER 04 — THE JOURNAL</span>
            <ChevronRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
