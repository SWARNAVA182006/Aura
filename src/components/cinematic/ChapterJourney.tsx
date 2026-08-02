"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TIMELINE_EVENTS } from "@/config/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ChevronRight, Calendar, MapPin, ExternalLink, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { soundFX } from "@/lib/sound";

interface ChapterJourneyProps {
  onNextChapter: () => void;
}

export function ChapterJourney({ onNextChapter }: ChapterJourneyProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen w-full bg-[#030305] text-white py-24 px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute left-10 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest backdrop-blur-md mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            CHAPTER 02 — THE JOURNEY
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Interactive Engineering <span className="text-gradient-cyan">Timeline.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Click any milestone node below to inspect verified achievements, technical skills learned, and outcome metrics.
          </p>
        </div>

        {/* Timeline Vector List */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 lg:ml-8 space-y-6">
          {TIMELINE_EVENTS.map((evt, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx} className="relative pl-8 group">
                {/* Node Bullet Dot */}
                <button
                  onClick={() => {
                    soundFX.playClickSnap();
                    setExpandedIndex(isExpanded ? null : idx);
                  }}
                  className={`absolute -left-[17px] top-1.5 h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? "border-cyan-400 bg-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.6)] scale-110"
                      : "border-slate-600 bg-[#070712] hover:border-cyan-400 hover:scale-105"
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${isExpanded ? "bg-black" : "bg-cyan-400"}`} />
                </button>

                {/* Milestone Summary Header Card */}
                <div
                  onClick={() => {
                    soundFX.playHoverBlip();
                    setExpandedIndex(isExpanded ? null : idx);
                  }}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 backdrop-blur-xl ${
                    isExpanded
                      ? "border-cyan-400/60 bg-[#090918]/95 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                      : "border-white/10 bg-[#070712]/80 hover:border-white/20 hover:bg-[#090918]"
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
                        <div className="relative h-7 w-11 rounded border border-white/20 shadow-md overflow-hidden bg-black/60 shrink-0">
                          <Image src={evt.proofSrc} alt={`${evt.title} Proof Certificate`} fill className="object-cover" />
                        </div>
                      )}
                      <span className="font-mono text-xs text-slate-400">{evt.organization}</span>
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
                        className="mt-4 pt-4 border-t border-white/10 space-y-4"
                      >
                        <p className="text-slate-300 text-sm leading-relaxed">{evt.description}</p>

                        {/* Highlights */}
                        <div>
                          <div className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                            Key Accomplishments:
                          </div>
                          <ul className="space-y-1.5">
                            {evt.highlights.map((h, i) => (
                              <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills Learned */}
                        <div>
                          <div className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                            Technologies &amp; Skills:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {evt.skillsUsed.map((sk, i) => (
                              <span
                                key={i}
                                className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200"
                              >
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex justify-end">
          <button
            onClick={() => { soundFX.playClickSnap(); onNextChapter(); }}
            className="group flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-mono text-xs font-bold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]"
          >
            <span>PROCEED TO CHAPTER 03 — EDUCATION</span>
            <ChevronRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
