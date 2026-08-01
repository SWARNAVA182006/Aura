"use client";

import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  chapterIndex?: number;
}

// Per-chapter dual moving color palettes
const CHAPTER_AURORA = [
  // 0: Architect (Cyan + Indigo + Electric Purple)
  { c1: "rgba(0, 240, 255, 0.22)", c2: "rgba(99, 102, 241, 0.18)", c3: "rgba(168, 85, 247, 0.14)" },
  // 1: Artifacts (Emerald + Electric Cyan + Deep Teal)
  { c1: "rgba(0, 229, 153, 0.20)", c2: "rgba(0, 240, 255, 0.16)", c3: "rgba(5, 213, 232, 0.12)" },
  // 2: Expedition (Indigo + Neon Violet + Blue)
  { c1: "rgba(129, 140, 248, 0.22)", c2: "rgba(192, 132, 252, 0.18)", c3: "rgba(0, 240, 255, 0.12)" },
  // 3: Journal (Rose + Magenta + Purple)
  { c1: "rgba(244, 114, 182, 0.20)", c2: "rgba(168, 85, 247, 0.16)", c3: "rgba(129, 140, 248, 0.14)" },
  // 4: Transmission (Electric Violet + Neon Pink + Cyan)
  { c1: "rgba(168, 85, 247, 0.22)", c2: "rgba(236, 72, 153, 0.18)", c3: "rgba(0, 240, 255, 0.14)" },
];

export function AuroraBackground({ chapterIndex = 0 }: AuroraBackgroundProps) {
  const palette = CHAPTER_AURORA[chapterIndex] ?? CHAPTER_AURORA[0];

  return (
    <>
      {/* Noise Grain Film Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Dual Moving Fluid Color Nodes Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
        style={{ mixBlendMode: "screen" }}
      >
        {/* Node 1 — Primary Fluid Gradient Orb */}
        <motion.div
          animate={{
            backgroundColor: palette.c1,
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "5%",
            top: "15%",
            width: "60vw",
            height: "60vw",
            maxWidth: "950px",
            maxHeight: "950px",
            borderRadius: "50%",
            background: palette.c1,
            filter: "blur(90px)",
            animation: "aurora-drift-1 16s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Node 2 — Counter-Drifting Secondary Fluid Orb */}
        <motion.div
          animate={{
            backgroundColor: palette.c2,
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: "0%",
            bottom: "10%",
            width: "55vw",
            height: "55vw",
            maxWidth: "850px",
            maxHeight: "850px",
            borderRadius: "50%",
            background: palette.c2,
            filter: "blur(100px)",
            animation: "aurora-drift-2 20s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Node 3 — Diffuse Atmosphere Accent */}
        <motion.div
          animate={{
            backgroundColor: palette.c3,
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "35%",
            top: "-15%",
            width: "65vw",
            height: "65vw",
            maxWidth: "800px",
            maxHeight: "800px",
            borderRadius: "50%",
            background: palette.c3,
            filter: "blur(110px)",
            animation: "aurora-drift-3 24s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </div>
    </>
  );
}
