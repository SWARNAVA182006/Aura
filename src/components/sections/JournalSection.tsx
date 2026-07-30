"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, X, FileText } from "lucide-react";
import { ESSAYS } from "@/config/content";
import { Essay } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function JournalSection() {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  return (
    <>
      {/* Essay Reader Modal */}
      <AnimatePresence>
        {selectedEssay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEssay(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#090914] p-6 sm:p-10 shadow-2xl"
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

              {/* Essay Content prose */}
              <div className="mt-8 text-slate-200 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {selectedEssay.content}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex justify-between items-center">
                <span className="font-mono text-xs text-slate-400">SWARNAVA SARKAR ENGINEERING JOURNAL</span>
                <Button variant="ghost" size="sm" onClick={() => setSelectedEssay(null)}>
                  Close Article
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section id="writing" className="relative py-24 px-4 bg-[#030305]">
        <div className="mx-auto w-full max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <BookOpen className="h-3.5 w-3.5" />
              <span>09 • ENGINEERING JOURNAL & ESSAYS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Thought leadership & <span className="text-gradient-cyan">technical writing</span>.
            </h2>
            <p className="mt-2 text-xs text-slate-400 max-w-2xl">
              Documenting lessons learned from building enterprise AI architectures, ONGC internship experience, and systems design.
            </p>
          </motion.div>

          {/* Essay Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ESSAYS.map((essay, idx) => (
              <motion.div
                key={essay.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  onClick={() => setSelectedEssay(essay)}
                  hoverEffect
                  className="h-full p-6 flex flex-col justify-between cursor-pointer border-white/10 hover:border-cyan-500/40 group"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-cyan-400">
                        {essay.category}
                      </span>
                      <span>{essay.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-white group-hover:text-cyan-400 transition">
                      {essay.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{essay.summary}</p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between font-mono text-xs text-cyan-400 group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
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
