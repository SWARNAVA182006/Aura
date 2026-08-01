"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Trophy, Sparkles, ArrowRight, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { TIMELINE_JOURNEY, SKILL_GROUPS, ACHIEVEMENTS } from "@/config/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
}

function getTypeIcon(type: string) {
  switch (type) {
    case "Education":   return GraduationCap;
    case "Internship":  return Briefcase;
    case "Competition": return Trophy;
    default:            return Sparkles;
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "Education":   return "#818CF8";
    case "Internship":  return "#00F0FF";
    case "Competition": return "#FFD700";
    default:            return "#00E599";
  }
}

export function ChapterExpedition({ onNextChapter }: StageProps) {
  const [activeTab, setActiveTab] = useState<"milestones" | "skills" | "achievements">("milestones");
  const [selectedGroup, setSelectedGroup] = useState<string>(SKILL_GROUPS[0].category);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeSkills = SKILL_GROUPS.find((g) => g.category === selectedGroup) || SKILL_GROUPS[0];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030305] flex items-center px-6 lg:px-12 py-24">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-12 gap-8 items-center">

        {/* ── Left: High-Tech Cybernetic Editorial Portrait Frame for me1.png ── */}
        <motion.div
          className="col-span-12 lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <div className="relative w-full max-w-md h-[68vh] rounded-3xl overflow-hidden border border-indigo-500/40 bg-[#070712]/90 shadow-[0_0_50px_rgba(99,102,241,0.25)] backdrop-blur-2xl group">
            {/* Cybernetic HUD Corner Brackets */}
            <div className="absolute top-3 left-3 z-20 font-mono text-[9px] font-bold text-cyan-400 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
              <Cpu className="h-3 w-3 animate-pulse" />
              <span>SUBJECT // SWARNAVA SARKAR</span>
            </div>
            <div className="absolute top-3 right-3 z-20 font-mono text-[9px] font-bold text-indigo-400 bg-black/60 px-2.5 py-1 rounded-md border border-indigo-500/30">
              FRAME 03 // EXPEDITION
            </div>
            <div className="absolute bottom-3 left-3 z-20 font-mono text-[9px] font-bold text-emerald-400 flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
              <ShieldCheck className="h-3 w-3" />
              <span>VERIFIED identity</span>
            </div>

            {/* Photo Framing — me1.png */}
            <div className="relative h-full w-full">
              <Image
                src="/assets/me1.png"
                alt="Swarnava Sarkar — AI & ML Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 22%", filter: "saturate(0.95) contrast(1.08)" }}
              />

              {/* Gradient Vignette & Lens Highlights */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(7,7,18,0.4) 0%, transparent 20%, transparent 70%, rgba(7,7,18,0.9) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 50% 30%, transparent 30%, rgba(3,3,5,0.7) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, transparent 60%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Animated Hologram Beam */}
              <div
                className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scanline"
                style={{ top: "0%" }}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Right: Expedition Content ── */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          {/* Header Tag */}
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/8 px-4 py-1.5 font-mono text-[11px] font-bold text-indigo-300 uppercase tracking-widest backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
              03 — THE EXPEDITION
            </div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden sm:block">
              VERIFIED MILESTONES &amp; CAPABILITIES
            </span>
          </div>

          {/* Huge Headline */}
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
            From SRM AI &amp; ML to <span className="text-gradient-cyan">Industrial Leadership.</span>
          </h2>

          {/* Verified Affiliation Logos Bar */}
          <div className="mb-6 flex flex-wrap gap-2 items-center">
            <BrandLogo name="SRM" size="md" />
            <BrandLogo name="ONGC" size="md" />
            <BrandLogo name="Apple" size="md" />
            <BrandLogo name="Google" size="md" />
            <BrandLogo name="IBM" size="md" />
            <BrandLogo name="Guidewire" size="md" />
            <BrandLogo name="StudAI" size="md" />
          </div>

          {/* View Switcher Pills */}
          <div className="mb-6 flex gap-1 rounded-xl border border-white/8 bg-white/3 p-1 w-fit backdrop-blur-md">
            {[
              { key: "milestones" as const, label: "Milestones" },
              { key: "skills" as const, label: "Skill Mesh" },
              { key: "achievements" as const, label: "Credentials" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => { soundFX.playHoverBlip(); setActiveTab(tab.key); }}
                className={`rounded-lg px-4 py-1.5 font-mono text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_15px_rgba(129,140,248,0.3)]"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Content Container */}
          <AnimatePresence mode="wait">
            {activeTab === "milestones" && (
              <motion.div
                key="milestones"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3 max-h-[46vh] overflow-y-auto pr-2 custom-scrollbar"
              >
                {TIMELINE_JOURNEY.map((entry, idx) => {
                  const Icon = getTypeIcon(entry.type);
                  const color = getTypeColor(entry.type);
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => soundFX.playHoverBlip()}
                      className="group rounded-2xl border border-white/8 bg-[#070712]/80 p-4 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/8 hover:scale-[1.01]"
                    >
                      <div className="flex items-center justify-between font-mono text-[10px] mb-1.5">
                        <span className="font-bold tracking-wider" style={{ color }}>{entry.period}</span>
                        <span className="rounded-md border border-white/10 px-2 py-0.5 text-slate-400 font-semibold">{entry.type}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        {entry.logoSrc && (
                          <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded-md border border-white/10">
                            <Image src={entry.logoSrc} alt={entry.organization} fill sizes="20px" className="object-contain" />
                          </div>
                        )}
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{entry.title}</h4>
                      </div>
                      <p className="font-mono text-[10px] text-slate-500 mt-1">{entry.organization} · {entry.location}</p>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-wrap gap-1.5">
                  {SKILL_GROUPS.map((g) => (
                    <button
                      key={g.category}
                      onClick={() => { soundFX.playClickSnap(); setSelectedGroup(g.category); }}
                      onMouseEnter={() => soundFX.playHoverBlip()}
                      className={`rounded-xl px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                        selectedGroup === g.category
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                          : "border border-white/8 bg-white/3 text-slate-400 hover:text-white"
                      }`}
                    >
                      {g.category}
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#070712]/80 p-5 backdrop-blur-xl flex flex-col gap-3">
                  <div className="font-mono text-xs font-bold text-white mb-2">{activeSkills.category}</div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeSkills.skills.map((s) => (
                      <div
                        key={s.name}
                        onMouseEnter={() => soundFX.playHoverBlip()}
                        className="flex items-center justify-between rounded-xl border border-white/8 bg-white/3 px-3.5 py-2.5 text-xs font-mono transition-all hover:border-cyan-400/40 hover:bg-cyan-500/5"
                      >
                        <span className="text-slate-200 font-semibold">{s.name}</span>
                        <span className="text-cyan-400 font-bold">{s.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundFX.playHoverBlip()}
                    className="group rounded-2xl border border-white/8 bg-[#070712]/80 p-4 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/8 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-cyan-400 font-bold mb-1.5">
                      <span>{ach.badge}</span>
                      <span className="text-slate-500">{ach.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {ach.logoSrc && (
                        <div className="relative h-4 w-4 shrink-0 overflow-hidden rounded-md border border-white/10">
                          <Image src={ach.logoSrc} alt={ach.organization} fill sizes="16px" className="object-contain" />
                        </div>
                      )}
                      <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">{ach.title}</h4>
                    </div>
                    <p className="font-mono text-[10px] text-slate-500 mt-1">{ach.organization}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Footer */}
          <div className="mt-8 border-t border-white/10 pt-6 flex justify-end">
            <button
              onClick={() => {
                soundFX.playChapterSweep();
                onNextChapter();
              }}
              onMouseEnter={() => soundFX.playHoverBlip()}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3 font-mono text-xs font-bold text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              <span>Proceed to Journal</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
