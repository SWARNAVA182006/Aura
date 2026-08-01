"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, FileText } from "lucide-react";
import { ESSAYS } from "@/config/content";
import { Essay } from "@/types";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
}

export function ChapterJournal({ onNextChapter }: StageProps) {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  return (
    <>
      {/* Reader Modal */}
      <AnimatePresence>
        {selectedEssay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEssay(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-rose-500/30 bg-[#070712] p-6 sm:p-10 shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-rose-400 font-bold">
                    <span>{selectedEssay.category}</span>
                    <span>·</span>
                    <span>{selectedEssay.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl tracking-tight">{selectedEssay.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedEssay(null)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {selectedEssay.content}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex justify-between items-center font-mono text-xs">
                <span className="text-slate-500">SWARNAVA SARKAR PUBLICATION</span>
                <button
                  onClick={() => setSelectedEssay(null)}
                  className="rounded-full border border-white/10 px-4 py-1.5 text-slate-300 hover:text-white"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen w-full overflow-hidden bg-[#030305] flex items-center">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 lg:px-12">
          {/* Header Tag */}
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/8 px-4 py-1.5 font-mono text-[11px] font-bold text-rose-300 uppercase tracking-widest backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-ping" />
              04 — THE JOURNAL
            </div>
            <span className="hidden md:block font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              Selected Writings &amp; Thought Leadership
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
            Research &amp; <span className="text-gradient-cyan">Engineering Writings.</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ESSAYS.map((essay, idx) => (
              <motion.div
                key={essay.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => { soundFX.playClickSnap(); setSelectedEssay(essay); }}
                onMouseEnter={() => soundFX.playHoverBlip()}
                className="group cursor-pointer rounded-3xl border border-white/8 bg-[#070712]/80 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-rose-500/40 hover:scale-[1.02] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 mb-3">
                    <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-rose-300 font-bold">
                      {essay.category}
                    </span>
                    <span>{essay.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors duration-200 leading-snug">
                    {essay.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">{essay.summary}</p>
                </div>

                <div className="mt-6 border-t border-white/8 pt-4 flex items-center justify-between font-mono text-xs text-rose-400 font-bold">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Selected Publications</span>
            <button
              onClick={() => {
                soundFX.playChapterSweep();
                onNextChapter();
              }}
              onMouseEnter={() => soundFX.playHoverBlip()}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-violet-600 px-7 py-3 font-mono text-xs font-bold text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(244,114,182,0.3)]"
            >
              <span>Proceed to Transmission</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
