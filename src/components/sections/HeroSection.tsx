"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, ChevronDown, Sparkles } from "lucide-react";
import { HERO_DATA } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { NeuralCanvas } from "@/components/3d/NeuralCanvas";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-4 pt-28 pb-16 overflow-hidden">
      {/* 3D WebGL Backdrop */}
      <NeuralCanvas />

      {/* Ambient Radial Gradients */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="mx-auto w-full max-w-5xl">
        {/* Top Monogram / Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span className="font-mono text-xs font-medium tracking-wide text-cyan-300">
            PERSONAL DIGITAL IDENTITY • SWARNAVA SARKAR
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]"
        >
          Engineering <span className="text-gradient-cyan">Intelligent</span> Systems & Software Craft.
        </motion.h1>

        {/* Sub-headline / Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg md:text-xl leading-relaxed"
        >
          {HERO_DATA.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#works">
            <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Explore Case Studies
            </Button>
          </a>
          <a href="#philosophy">
            <Button variant="secondary" size="lg" icon={<Terminal className="h-4 w-4" />}>
              Engineering Philosophy
            </Button>
          </a>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {SITE_CONFIG.metrics.map((metric: { label: string; value: string; subtext: string }, idx: number) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A14]/70 p-4 backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-[#0E0E20]/90"
            >
              <div className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
                <span className="text-gradient-cyan">{metric.value}</span>
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-200">{metric.label}</div>
              <div className="mt-1 text-[10px] text-slate-400 font-mono">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-cyan-400"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">SCROLL TO DISCOVER</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
