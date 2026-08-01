"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";
import { SITE_CONFIG } from "@/config/site";

interface StageProps {
  onNextChapter: () => void;
}

export function ChapterArchitect({ onNextChapter }: StageProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<"apple" | "ongc" | "srm" | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030305] flex items-center">
      {/* ── Editorial Full-Bleed Portrait (Right Half) ── */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-[52vw] lg:w-[55vw] z-0"
        initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: "transform 0.05s ease-out",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/assets/me.jpg"
            alt="Swarnava Sarkar — AI & ML Engineer"
            fill
            priority
            sizes="55vw"
            className="object-cover"
            style={{ objectPosition: "center 22%" }}
          />
          {/* Seamless edge gradient blend into page dark background */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(
                to right,
                #030305 0%,
                rgba(3,3,5,0.92) 15%,
                rgba(3,3,5,0.5) 40%,
                rgba(3,3,5,0.15) 75%,
                transparent 100%
              )`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(3,3,5,0.7) 0%, transparent 20%, transparent 80%, rgba(3,3,5,0.95) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(0,240,255,0.06) 0%, transparent 50%)",
              mixBlendMode: "screen",
            }}
          />
          {/* Hologram scanline */}
          <div
            className="pointer-events-none absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scanline"
            style={{ top: "0%" }}
          />
        </div>
      </motion.div>

      {/* ── Left Editorial Magazine Layout ── */}
      <div className="relative z-10 flex flex-col justify-center px-6 pt-24 pb-16 lg:px-16 xl:px-24 max-w-[55vw] w-full">
        {/* Chapter Tag */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>01 — ARCHITECT</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-slate-500">
            <MapPin className="h-3 w-3 text-cyan-400" />
            <span>{SITE_CONFIG.author.location}</span>
          </div>
        </motion.div>

        {/* Huge Magazine Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1
            className="font-black tracking-tight text-white leading-[0.88]"
            style={{ fontSize: "clamp(3.5rem, 8.5vw, 8.5rem)" }}
          >
            SWARNAVA<br />
            <span className="text-gradient-cyan">SARKAR.</span>
          </h1>
        </motion.div>

        {/* Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-mono text-xs lg:text-sm font-bold text-cyan-400 tracking-wider uppercase mb-6"
        >
          {SITE_CONFIG.author.role}
        </motion.p>

        {/* 2-Line Headline Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-lg mb-8"
        >
          Building enterprise AI systems, high-performance computer vision pipelines, and domain-specific RAG copilots.
        </motion.p>

        {/* Interactive Verified Affiliations Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-3 mb-8 flex-wrap"
        >
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">Verified Affiliations:</span>

          <div
            onMouseEnter={() => { soundFX.playHoverBlip(); setActiveCard("apple"); }}
            onMouseLeave={() => setActiveCard(null)}
            className="cursor-pointer"
          >
            <BrandLogo name="Apple" size="md" />
          </div>

          <div
            onMouseEnter={() => { soundFX.playHoverBlip(); setActiveCard("ongc"); }}
            onMouseLeave={() => setActiveCard(null)}
            className="cursor-pointer"
          >
            <BrandLogo name="ONGC" size="md" />
          </div>

          <div
            onMouseEnter={() => { soundFX.playHoverBlip(); setActiveCard("srm"); }}
            onMouseLeave={() => setActiveCard(null)}
            className="cursor-pointer"
          >
            <BrandLogo name="SRMIST" size="md" />
          </div>
        </motion.div>

        {/* Floating Spotlight Card on Hover */}
        <div className="h-28 relative mb-8">
          <AnimatePresence mode="wait">
            {activeCard === "apple" && (
              <motion.div
                key="apple"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 rounded-2xl border border-cyan-400/40 bg-[#070712]/95 p-4 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,240,255,0.25)] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold mb-1">
                    <BrandLogo name="Apple" size="sm" showText={false} />
                    <span>APPLE iOS STUDENT DEVELOPER PROGRAM</span>
                  </div>
                  <p className="text-xs text-slate-300">Selected for Apple iOS Student Developer Program. Native Swift 5.9 &amp; SwiftUI mobile UI architecture.</p>
                </div>
                <div className="font-mono text-xs text-cyan-300 font-bold px-3 py-1 bg-cyan-500/10 rounded-lg border border-cyan-500/30">SELECTION</div>
              </motion.div>
            )}

            {activeCard === "ongc" && (
              <motion.div
                key="ongc"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 rounded-2xl border border-amber-400/40 bg-[#070712]/95 p-4 backdrop-blur-2xl shadow-[0_0_30px_rgba(251,191,36,0.25)] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold mb-1">
                    <BrandLogo name="ONGC" size="sm" showText={false} />
                    <span>OIL AND NATURAL GAS CORPORATION</span>
                  </div>
                  <p className="text-xs text-slate-300">Software Engineering Intern. Industrial seismic data processing workflows &amp; AI-assisted interpretation.</p>
                </div>
                <div className="font-mono text-xs text-amber-300 font-bold px-3 py-1 bg-amber-500/10 rounded-lg border border-amber-500/30">INTERNSHIP</div>
              </motion.div>
            )}

            {activeCard === "srm" && (
              <motion.div
                key="srm"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 rounded-2xl border border-purple-400/40 bg-[#070712]/95 p-4 backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.25)] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-purple-400 font-bold mb-1">
                    <BrandLogo name="SRM" size="sm" showText={false} />
                    <span>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</span>
                  </div>
                  <p className="text-xs text-slate-300">Third Year B.Tech Student. Computer Science Engineering with Artificial Intelligence &amp; Machine Learning.</p>
                </div>
                <div className="font-mono text-xs text-purple-300 font-bold px-3 py-1 bg-purple-500/10 rounded-lg border border-purple-500/30">3RD YEAR</div>
              </motion.div>
            )}

            {!activeCard && (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 text-xs text-slate-500 font-mono italic"
              >
                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                <span>Hover over verified brand logos to trigger interactive spotlight card</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <button
            onClick={() => {
              soundFX.playChapterSweep();
              onNextChapter();
            }}
            onMouseEnter={() => soundFX.playHoverBlip()}
            className="group flex items-center gap-3 rounded-full btn-primary-glow px-8 py-4 font-mono text-sm font-bold text-black tracking-wide transition-all duration-300 hover:scale-105"
          >
            <span>Enter the Artifacts</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
