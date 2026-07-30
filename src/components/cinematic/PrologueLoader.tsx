"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Terminal, Shield, Sparkles, Cpu, Radio, Activity } from "lucide-react";
import { soundFX } from "@/lib/sound";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface PrologueProps {
  onComplete: () => void;
}

export function PrologueLoader({ onComplete }: PrologueProps) {
  const [progress, setProgress] = useState(0);
  const [bootLog, setBootLog] = useState("INITIALIZING HIGH-TECH KERNEL...");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const logs = [
      "INITIALIZING HIGH-TECH KERNEL...",
      "LOADING AI VISION & SEISMIC SEGMENTATION PIPELINES...",
      "COMPILING HPCC COPILOT & ECL RAG ENGINE...",
      "FETCHING ONGC INDUSTRIAL GEOPHYSICAL DATASETS...",
      "VERIFYING FIRST-PRINCIPLES ARCHITECTURE...",
      "SWARNAVA SARKAR DIGITAL EXPERIENCE READY",
    ];

    // 100 steps * 42ms = 4.2 seconds minimum loading time
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        const logIndex = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
        setBootLog(logs[logIndex]);

        if (next === 25 || next === 60) {
          soundFX.playSciFiHover();
        }

        if (next >= 100) {
          clearInterval(timer);
          soundFX.playBootPowerUp();
          setTimeout(() => {
            setCompleted(true);
            setTimeout(onComplete, 600);
          }, 500);
          return 100;
        }
        return next;
      });
    }, 42);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020204] text-white px-4 select-none"
        >
          {/* Ambient Background Glow */}
          <div className="pointer-events-none absolute h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[170px]" />
          <div className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[170px]" />

          {/* High-Tech Cybernetic Dual-Ring Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center p-6 sm:p-8 rounded-3xl border border-cyan-500/40 bg-[#070712]/90 shadow-[0_0_80px_rgba(0,240,255,0.25)] backdrop-blur-2xl max-w-md w-full"
          >
            {/* Dual Rotating Cyber Ring Overlay */}
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] border border-cyan-500/20 opacity-40 animate-spin" style={{ animationDuration: '25s' }} />
            <div className="pointer-events-none absolute -inset-8 rounded-[48px] border border-purple-500/20 opacity-30 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

            {/* Top Diagnostic HUD Header */}
            <div className="flex w-full items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-cyan-400">
              <div className="flex items-center gap-1.5 font-bold">
                <Radio className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
                <span>BOOT SEQUENCE • 4.2S CALIBRATED</span>
              </div>
              <span className="text-slate-400 font-mono">SYS v2.4</span>
            </div>

            {/* High-Tech Photo Preview Card with Scanlines */}
            <div className="relative mt-6 flex h-36 w-36 items-center justify-center rounded-2xl overflow-hidden border border-cyan-500/40 bg-black/70 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <Image
                src="/assets/me.jpg"
                alt="Swarnava Sarkar"
                fill
                priority
                className="object-cover opacity-90 filter contrast-110"
              />

              {/* Animated Scanline Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scanline" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070712] via-transparent to-transparent opacity-80" />

              {/* Monogram emblem watermark */}
              <div className="absolute bottom-2 font-mono font-bold text-gradient-cyan text-xl tracking-wider">
                SS
              </div>
            </div>

            {/* Brand Logo Telemetry Badges */}
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              <BrandLogo name="ONGC" showText={false} className="h-3.5 w-3.5" />
              <BrandLogo name="PyTorch" showText={false} className="h-3.5 w-3.5" />
              <BrandLogo name="TypeScript" showText={false} className="h-3.5 w-3.5" />
              <BrandLogo name="React" showText={false} className="h-3.5 w-3.5" />
              <BrandLogo name="Next.js" showText={false} className="h-3.5 w-3.5" />
              <BrandLogo name="Docker" showText={false} className="h-3.5 w-3.5" />
            </div>

            {/* Title */}
            <h1 className="mt-4 font-mono text-base tracking-[0.4em] text-white font-extrabold uppercase text-center">
              SWARNAVA SARKAR
            </h1>
            <p className="mt-1 font-mono text-[10px] text-cyan-400 tracking-widest uppercase">
              HIGH-TECH DIGITAL IDENTITY
            </p>

            {/* Progress Bar & Percentage */}
            <div className="mt-6 w-full">
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1.5">
                <span className="flex items-center gap-1">
                  <Activity className="h-3 w-3 text-cyan-400 animate-pulse" />
                  INITIALIZING MODULES
                </span>
                <span className="text-cyan-400 font-bold font-mono">{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Telemetry Log Stream */}
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-mono text-slate-300 w-full">
              <Terminal className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{bootLog}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
