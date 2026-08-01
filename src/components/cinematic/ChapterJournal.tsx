"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, X, Compass, Sparkles, Cpu } from "lucide-react";
import { ESSAYS, CHAPTERS } from "@/config/content";
import { soundFX } from "@/lib/sound";

interface ChapterJournalProps {
  onNextChapter: () => void;
}

export function ChapterJournal({ onNextChapter }: ChapterJournalProps) {
  const [selectedEssayId, setSelectedEssayId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const selectedEssay = ESSAYS.find((e) => e.id === selectedEssayId);
  const chapterData = CHAPTERS[3] || CHAPTERS[0];

  return (
    <section className="relative min-h-screen w-full bg-[#030305] text-white py-24 px-6 lg:px-16 xl:px-24 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center">
        {/* Left Column: Chapter Title & Research Cards */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          {/* Chapter Header */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest backdrop-blur-md mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              CHAPTER 04 — {chapterData.title}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Research &amp; <span className="text-gradient-cyan">Exploration.</span>
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mt-3 leading-relaxed font-medium">
              {chapterData.subtitle}
            </p>
          </div>

          {/* Technical Research Cards List */}
          <div className="space-y-5">
            {ESSAYS.map((essay) => (
              <motion.div
                key={essay.id}
                whileHover={{ scale: 1.015, y: -2 }}
                onClick={() => {
                  soundFX.playClickSnap();
                  setSelectedEssayId(essay.id);
                }}
                onMouseEnter={() => soundFX.playHoverBlip()}
                className="cursor-pointer group rounded-3xl border border-white/10 bg-[#070712]/90 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#090918] hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-cyan-400 font-bold mb-3">
                    <span className="border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full uppercase">
                      {essay.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1.5 font-mono text-[11px]">
                      <Compass className="h-3.5 w-3.5 text-cyan-400" />
                      {essay.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl lg:text-2xl text-white group-hover:text-cyan-300 transition-colors mb-2 leading-tight">
                    {essay.title}
                  </h3>

                  <p className="text-xs lg:text-sm text-slate-300 leading-relaxed mb-4 font-medium">
                    {essay.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs font-bold text-cyan-400">
                  <span>EXPLORE RESEARCH</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Navigation Button */}
          <div className="pt-2 flex justify-start">
            <button
              onClick={() => { soundFX.playClickSnap(); onNextChapter(); }}
              className="group flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-mono text-xs font-bold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]"
            >
              <span>PROCEED TO CHAPTER 05 — TRANSMISSION</span>
              <ChevronRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: High-Tech Editorial Portrait Panel (`me1.png`) */}
        <div className="hidden lg:block col-span-5 relative h-[580px] w-full rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] group">
          <motion.div
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
              transition: "transform 0.05s ease-out",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/assets/me1.png"
              alt="Swarnava Sarkar — High-Tech AI & ML Engineering Portrait"
              fill
              sizes="42vw"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{
                objectPosition: "center 20%",
                filter: "brightness(1.05) contrast(1.03)",
              }}
            />

            {/* High-Tech Overlay Gradients */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(7,7,18,0.7) 75%, #030305 100%)",
              }}
            />

            {/* Scanline Effect */}
            <div className="pointer-events-none absolute inset-x-0 h-[1.5px] bg-cyan-400/30 animate-scanline" style={{ top: "0%" }} />

            {/* Caption Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl border border-white/15 bg-[#070712]/90 backdrop-blur-xl">
              <div className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                SWARNAVA SARKAR · RESEARCH &amp; EXPLORATION
              </div>
              <p className="text-xs text-slate-200 font-semibold">
                First-principles engineering, subsurface computer vision &amp; deterministic RAG systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Research Exploration Reader Modal */}
      <AnimatePresence>
        {selectedEssay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl border border-cyan-500/40 bg-[#070712] p-8 lg:p-10 shadow-[0_0_50px_rgba(0,240,255,0.25)] text-white"
            >
              <button
                onClick={() => setSelectedEssayId(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/15 bg-white/5 text-slate-400 hover:text-white hover:border-cyan-400"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
                {selectedEssay.category} · ENGINEERING RESEARCH
              </div>

              <h3 className="text-2xl lg:text-4xl font-black text-white mb-6 leading-tight">
                {selectedEssay.title}
              </h3>

              <div className="prose prose-invert max-w-none text-slate-200 text-sm lg:text-base leading-relaxed space-y-4">
                <p>{selectedEssay.content}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
