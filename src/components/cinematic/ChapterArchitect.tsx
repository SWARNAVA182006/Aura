"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Terminal, Brain, Compass, Sparkles, Building2 } from "lucide-react";
import { HERO_DATA, ENGINEERING_PHILOSOPHY, EDITORIAL_PHOTOS } from "@/config/content";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface StageProps {
  onNextChapter: () => void;
}

export function ChapterArchitect({ onNextChapter }: StageProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"philosophy" | "ongc">("philosophy");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleTabSwitch = (tab: "philosophy" | "ongc") => {
    soundFX.playSciFiHover();
    setActiveTab(tab);
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-4 pt-28 pb-16 overflow-hidden bg-[#030305]">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Editorial Photography Canvas with 3D Mouse Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5 flex justify-center"
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#090914] p-3 shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)`,
              }}
            >
              {/* Main Editorial Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={EDITORIAL_PHOTOS[0].src}
                  alt={EDITORIAL_PHOTOS[0].alt}
                  fill
                  priority
                  className="object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
                />

                {/* Glass Reflection Layer */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090914] via-transparent to-transparent opacity-80" />
                <div className="pointer-events-none absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  <span>EDITORIAL PORTRAIT</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/70 p-3 backdrop-blur-md">
                  <div className="font-mono text-xs font-bold text-white">SWARNAVA SARKAR</div>
                  <div className="text-[10px] text-slate-300 font-mono">AI Engineer & Software Architect</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & First-Principles Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-md w-fit">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-xs font-semibold tracking-wide text-cyan-300">
                CHAPTER 01 • THE ARCHITECT
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
              Engineering <span className="text-gradient-cyan">Intelligent Systems</span> with First-Principles Craft.
            </h1>

            {/* Narrative Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {HERO_DATA.bio}
            </p>

            {/* Toggle Tabs: Philosophy vs ONGC Foundation */}
            <div className="flex gap-2 border-b border-white/10 pb-2 font-mono text-xs">
              <button
                onMouseEnter={() => soundFX.playSciFiHover()}
                onClick={() => handleTabSwitch("philosophy")}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 transition ${
                  activeTab === "philosophy"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Engineering Philosophy</span>
              </button>
              <button
                onMouseEnter={() => soundFX.playSciFiHover()}
                onClick={() => handleTabSwitch("ongc")}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 transition ${
                  activeTab === "ongc"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BrandLogo name="ONGC" showText={false} className="h-3.5 w-3.5" />
                <span>ONGC Industrial Foundation</span>
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "philosophy" ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ENGINEERING_PHILOSOPHY.principles.map((p, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundFX.playSciFiHover()}
                    className="rounded-2xl border border-white/10 bg-[#090914]/80 p-4 backdrop-blur-xl transition hover:border-cyan-500/30"
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-cyan-400 font-bold">
                      <span>{p.number}</span>
                      <Sparkles className="h-3.5 w-3.5 text-slate-500" />
                    </div>
                    <div className="mt-2 text-xs font-bold text-white">{p.title}</div>
                    <div className="mt-1 text-[11px] text-slate-400 leading-relaxed">{p.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-cyan-500/30 bg-[#0A0A18]/90 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between font-mono text-xs text-cyan-400">
                  <div className="flex items-center gap-2 font-bold">
                    <BrandLogo name="ONGC" />
                    <span>INDUSTRIAL INTERNSHIP SPOTLIGHT</span>
                  </div>
                  <span>SUMMER 2024</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-white">
                  Oil and Natural Gas Corporation (ONGC)
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Analyzed large-scale seismic data processing workflows and industrial data infrastructure at India's premier energy organization. This experience revealed the need for AI in geophysical computing, directly inspiring <strong className="text-cyan-300">SeisVision AI</strong>.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <BrandLogo name="Python" />
                  <BrandLogo name="PyTorch" />
                  <BrandLogo name="TypeScript" />
                  <BrandLogo name="Docker" />
                </div>
              </div>
            )}

            {/* Action CTA */}
            <div className="mt-4 flex items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  soundFX.playChapterSweep();
                  onNextChapter();
                }}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Proceed to Chapter 02: Real Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
