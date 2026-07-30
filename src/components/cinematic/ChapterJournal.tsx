"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, Clock, X, FileText } from "lucide-react";
import { ESSAYS } from "@/config/content";
import { Essay } from "@/types";
import { Button } from "@/components/ui/Button";

interface StageProps {
  onNextChapter: () => void;
}

export function ChapterJournal({ onNextChapter }: StageProps) {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  return (
    <>
      {/* Editorial Article Full Reader Modal */}
      <AnimatePresence>
        {selectedEssay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEssay(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#090914] p-6 sm:p-10 shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-cyan-400">
                    <span>{selectedEssay.category}</span>
                    <span>•</span>
                    <span>{selectedEssay.date}</span>
                    <span>•</span>
                    <span>{selectedEssay.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{selectedEssay.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedEssay(null)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Essay Prose Content */}
              <div className="mt-8 text-slate-200 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {selectedEssay.content}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex justify-between items-center font-mono text-xs">
                <span className="text-slate-400">SWARNAVA SARKAR ENGINEERING JOURNAL</span>
                <Button variant="ghost" size="sm" onClick={() => setSelectedEssay(null)}>
                  Close Publication
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="relative flex min-h-screen w-full flex-col justify-center px-4 pt-28 pb-16 overflow-hidden bg-[#030305]">
        {/* Radial Blur */}
        <div className="pointer-events-none absolute right-1/3 bottom-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />

        <div className="mx-auto w-full max-w-7xl">
          {/* Chapter Header */}
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 font-mono text-xs text-cyan-300">
                <BookOpen className="h-3.5 w-3.5" />
                <span>CHAPTER 04 • THE JOURNAL</span>
              </div>
              <span className="font-mono text-xs text-slate-400">TECHNICAL ESSAYS & RESEARCH</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Thought Leadership & <span className="text-gradient-cyan">Engineering Writings</span>.
            </h1>
          </div>

          {/* Magazine Grid */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ESSAYS.map((essay, idx) => (
              <motion.div
                key={essay.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div
                  onClick={() => setSelectedEssay(essay)}
                  className="group cursor-pointer rounded-3xl border border-white/10 bg-[#090914]/90 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-cyan-300 font-bold">
                        {essay.category}
                      </span>
                      <span>{essay.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-400 transition">
                      {essay.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{essay.summary}</p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between font-mono text-xs text-cyan-400 group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chapter Navigation Footer */}
          <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
            <span>EDITORIAL PUBLICATIONS</span>
            <Button variant="primary" size="md" onClick={onNextChapter} icon={<ArrowRight className="h-4 w-4" />}>
              Proceed to Chapter 05: Transmission
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
