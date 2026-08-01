"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Sparkles, ChevronRight, Activity, Info } from "lucide-react";
import { IDENTITY_DATA } from "@/config/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

interface ChapterArchitectProps {
  onNextChapter: () => void;
}

export function ChapterArchitect({ onNextChapter }: ChapterArchitectProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredAffiliation, setHoveredAffiliation] = useState<string | null>(null);

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

  const activeAffiliationObj = IDENTITY_DATA.affiliations.find(
    (a) => a.name.toLowerCase() === hoveredAffiliation?.toLowerCase()
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030305] text-white flex flex-col justify-center">
      {/* Static Bright Editorial Right Half Image Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: "transform 0.05s ease-out",
        }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[52vw] pointer-events-none z-0"
      >
        <div className="relative h-full w-full">
          <Image
            src="/assets/me.jpg"
            alt="Swarnava Sarkar — AI & ML Engineer"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
            style={{
              objectPosition: "center 25%",
              filter: "brightness(1.06) contrast(1.02)",
            }}
          />

          {/* Clean Soft Blend Gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #030305 0%, rgba(3,3,5,0.4) 35%, transparent 75%, #030305 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #030305 0%, transparent 15%, transparent 80%, #030305 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* ── Left Editorial Identity Layout ── */}
      <div className="relative z-10 flex flex-col justify-center px-6 pt-24 pb-16 lg:px-16 xl:px-24 max-w-[58vw] w-full">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>CHAPTER 01 — THE ARCHITECT</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>{IDENTITY_DATA.location}</span>
          </div>
        </motion.div>

        {/* Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1
            className="font-black tracking-tight text-white leading-[0.88]"
            style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
          >
            SWARNAVA<br />
            <span className="text-gradient-cyan">SARKAR.</span>
          </h1>
        </motion.div>

        {/* Role & Institution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-6"
        >
          <p className="font-mono text-sm lg:text-base font-bold text-cyan-400 tracking-widest uppercase mb-1">
            {IDENTITY_DATA.role}
          </p>
          <p className="font-sans text-base lg:text-lg text-slate-200 flex items-center gap-2 font-medium">
            <GraduationCap className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
            <span>{IDENTITY_DATA.university}</span>
          </p>
        </motion.div>

        {/* 1-Sentence Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="rounded-2xl border border-cyan-500/30 bg-[#070712]/90 p-5 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,240,255,0.15)] mb-6"
        >
          <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>ONE-LINE MISSION</span>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-white leading-tight">
            &ldquo;{IDENTITY_DATA.mission}&rdquo;
          </p>
        </motion.div>

        {/* Currently Building Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 backdrop-blur-md mb-6"
        >
          <div className="font-mono text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            <span>CURRENTLY BUILDING</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {IDENTITY_DATA.currentlyBuildingList.map((item, i) => (
              <span key={i} className="rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Verified Affiliations Bar with Zero-Layout-Shift Floating Popover */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">
            <Info className="h-3.5 w-3.5 text-cyan-400" />
            <span>VERIFIED AFFILIATIONS (HOVER TO SEE DETAILS):</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {IDENTITY_DATA.affiliations.map((aff) => (
              <div
                key={aff.name}
                onMouseEnter={() => {
                  soundFX.playHoverBlip();
                  setHoveredAffiliation(aff.name);
                }}
                onMouseLeave={() => setHoveredAffiliation(null)}
                className="relative"
              >
                <BrandLogo name={aff.name} logoSrc={aff.logoSrc} size="md" glow={false} />
              </div>
            ))}
          </div>

          {/* Absolute Floating Popover Overlay (No Layout Shift) */}
          <AnimatePresence>
            {activeAffiliationObj && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-0 mb-2 w-80 max-w-full rounded-xl border border-cyan-400/50 bg-[#090918]/98 p-3.5 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,240,255,0.3)] z-30 pointer-events-none"
              >
                <div className="font-mono text-xs font-bold text-cyan-300 mb-1">{activeAffiliationObj.name}</div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">{activeAffiliationObj.details}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Next Chapter Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <button
            onClick={() => { soundFX.playClickSnap(); onNextChapter(); }}
            className="group flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-mono text-xs font-bold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]"
          >
            <span>PROCEED TO CHAPTER 02 — THE ARTIFACTS</span>
            <ChevronRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
