"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, GraduationCap, Briefcase, Trophy, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { TIMELINE_JOURNEY, SKILL_GROUPS } from "@/config/content";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
}

export function ChapterExpedition({ onNextChapter }: StageProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>(SKILL_GROUPS[0].category);

  const currentSkillGroup = SKILL_GROUPS.find((g) => g.category === selectedSkillCategory) || SKILL_GROUPS[0];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Education":
        return GraduationCap;
      case "Internship":
        return Briefcase;
      case "Competition":
        return Trophy;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-4 pt-28 pb-16 overflow-hidden bg-[#030305]">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Chapter Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 font-mono text-xs text-cyan-300">
              <Compass className="h-3.5 w-3.5" />
              <span>CHAPTER 03 • THE EXPEDITION</span>
            </div>
            <span className="font-mono text-xs text-slate-400">SPATIAL JOURNEY & CAPABILITIES</span>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            From Foundations to <span className="text-gradient-cyan">Architectural Leadership</span>.
          </h1>
        </div>

        {/* 2-Column Split: Interactive Journey Map on Left, Skill Mesh on Right */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Spatial Timeline Journey Map */}
          <div className="flex flex-col gap-4 lg:col-span-7 max-h-[600px] overflow-y-auto pr-2">
            <h3 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Chronological Journey Map
            </h3>

            <div className="relative border-l border-white/10 ml-4 pl-6 flex flex-col gap-6">
              {TIMELINE_JOURNEY.map((entry, idx) => {
                const Icon = getTypeIcon(entry.type);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative rounded-2xl border border-white/10 bg-[#090914]/80 p-5 backdrop-blur-xl transition hover:border-cyan-500/40"
                  >
                    {/* Timeline Node emblem */}
                    <div className="absolute -left-[37px] top-4 flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/40 bg-[#070712] text-cyan-400">
                      <Icon className="h-3.5 w-3.5" />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-cyan-400 font-bold">{entry.period}</span>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-slate-300">
                        {entry.type}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-bold text-white flex items-center gap-2">
                      <span>{entry.title}</span>
                      {entry.organization.includes("ONGC") && <BrandLogo name="ONGC" showText={false} />}
                      {entry.organization.includes("Guidewire") && <BrandLogo name="Guidewire" showText={false} />}
                    </h4>
                    <p className="font-mono text-xs text-slate-400">{entry.organization} • {entry.location}</p>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{entry.description}</p>

                    <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {entry.skillsUsed.map((sk, i) => (
                        <BrandLogo key={i} name={sk} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Skill Ecosystem Mesh */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <h3 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Technical Skill & System Ecosystem
            </h3>

            {/* Skill Group Category Selector */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {SKILL_GROUPS.map((g) => (
                <button
                  key={g.category}
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  onClick={() => {
                    soundFX.playClickSnap();
                    setSelectedSkillCategory(g.category);
                  }}
                  className={`rounded-xl px-3 py-1.5 transition ${
                    selectedSkillCategory === g.category
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                      : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {g.category}
                </button>
              ))}
            </div>

            {/* Skill Mesh Display */}
            <div className="rounded-3xl border border-white/10 bg-[#090914]/90 p-6 backdrop-blur-2xl shadow-2xl flex flex-col justify-between h-full">
              <div>
                <h4 className="text-base font-bold text-white">{currentSkillGroup.category}</h4>
                <p className="mt-1 text-xs text-slate-400">{currentSkillGroup.description}</p>

                <div className="mt-6 flex flex-col gap-3">
                  {currentSkillGroup.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 flex items-center gap-2">
                          <BrandLogo name={skill.name} showText={false} className="h-3.5 w-3.5" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400">{skill.tag}</span>
                      </div>
                      {/* Skill Proficiency Bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8 }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                              : "bg-slate-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="font-mono text-[10px] text-slate-500">VERIFIED ENGINEERING CAPABILITIES</span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    soundFX.playTransitionSweep();
                    onNextChapter();
                  }}
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Proceed to Chapter 04: Journal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
