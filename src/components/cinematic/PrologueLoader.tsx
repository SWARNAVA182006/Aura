"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, ShieldCheck, Terminal, Sparkles } from "lucide-react";
import { soundFX } from "@/lib/sound";

interface PrologueProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "Initializing Digital Identity...",
  "Loading Engineering Timeline...",
  "Verifying Academic Records (SRMIST CSE AI & ML)...",
  "Connecting GitHub (SWARNAVA182006)...",
  "Loading Industrial Experience (ONGC, StudAI, Apple)...",
  "Loading Research & AI Systems...",
  "Loading Vision & Future Roadmap...",
];

function SplitText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "inline-flex", overflow: "hidden" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function PrologueLoader({ onComplete }: PrologueProps) {
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<"ready" | "scan" | "iris" | "dim" | "type" | "rule" | "done">("ready");
  const [logIndex, setLogIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startedRef = useRef(false);

  const startSequence = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setStarted(true);

    soundFX.playBootSubBass();

    const t = (ms: number, fn: () => void) => setTimeout(fn, ms);

    const timers = [
      t(400, () => {
        soundFX.playScanBeam();
        setPhase("iris");
      }),
      t(1400, () => setPhase("dim")),
      t(2000, () => {
        soundFX.playBootPowerUp();
        setPhase("type");
      }),
      t(3200, () => setPhase("rule")),
      t(4000, () => {
        soundFX.playChapterSweep();
        setExiting(true);
        setTimeout(onComplete, 600);
      }),
    ];

    return () => timers.forEach(clearTimeout);
  };

  // Cycle boot logs
  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(interval);
  }, [started]);

  // Auto-start fallback after 2.5s if user hasn't clicked
  useEffect(() => {
    const autoTimer = setTimeout(() => {
      startSequence();
    }, 2500);
    return () => clearTimeout(autoTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="prologue"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          onClick={startSequence}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#030305",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {/* Ambient glow blobs */}
          <div className="pointer-events-none absolute h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[180px] animate-pulse" />
          <div className="pointer-events-none absolute right-10 bottom-10 h-[550px] w-[550px] rounded-full bg-purple-600/15 blur-[180px]" />

          {/* Hairline Scan beam */}
          <AnimatePresence>
            {(phase === "ready" || phase === "scan" || phase === "iris") && (
              <motion.div
                key="scanline"
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: "100%", opacity: [0, 0.9, 0.9, 0] }}
                transition={{ duration: 0.8, ease: "linear", times: [0, 0.05, 0.9, 1] }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #00f0ff, transparent)",
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.9)",
                  pointerEvents: "none",
                  zIndex: 30,
                }}
              />
            )}
          </AnimatePresence>

          {/* Full-viewport photo — iris aperture reveal */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
            animate={{
              clipPath: phase === "ready" ? "circle(0% at 50% 38%)" : "circle(120% at 50% 38%)",
              opacity: ["ready", "scan", "iris"].includes(phase) ? 1 : 0.14,
            }}
            transition={{
              clipPath: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <Image
              src="/assets/me.jpg"
              alt="Swarnava Sarkar"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center 30%",
                transform: phase === "iris" ? "scale(0.88)" : "scale(0.82)",
                transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
                filter: "saturate(0.95) contrast(1.08)",
              }}
            />

            {/* Color grade overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,240,255,0.08) 0%, transparent 50%)",
                mixBlendMode: "screen",
              }}
            />
          </motion.div>

          {/* Deep vignette */}
          <motion.div
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            animate={{
              background: ["dim", "type", "rule"].includes(phase)
                ? "radial-gradient(ellipse at 50% 38%, transparent 0%, rgba(3,3,5,0.95) 65%)"
                : "radial-gradient(ellipse at 50% 38%, transparent 0%, rgba(3,3,5,0.7) 100%)",
            }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />

          {/* Top and Bottom gradient fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(3,3,5,0.7) 0%, transparent 30%, transparent 55%, rgba(3,3,5,0.98) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* High-Tech Tap to Enter Badge */}
          {!started && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-30 flex items-center gap-3 rounded-full border border-cyan-400/50 bg-[#070712]/95 px-8 py-4 font-mono text-xs font-bold text-cyan-300 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,240,255,0.35)] animate-pulse"
            >
              <Play className="h-4 w-4 fill-cyan-400 text-cyan-400" />
              <span>INITIALIZING DIGITAL IDENTITY... TAP TO ENTER</span>
            </motion.div>
          )}

          {/* Streaming Classified Boot Logs */}
          {started && phase !== "ready" && (
            <div className="absolute top-10 left-10 z-30 font-mono text-xs text-cyan-400/80 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-lg border border-cyan-500/30 backdrop-blur-md">
              <Terminal className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span>{BOOT_LOGS[logIndex]}</span>
            </div>
          )}

          {/* Typography — appears after "type" phase */}
          <AnimatePresence>
            {["type", "rule", "done"].includes(phase) && (
              <motion.div
                key="typography"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "relative",
                  zIndex: 10,
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                {/* Main name */}
                <div
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    lineHeight: 0.92,
                    color: "#ffffff",
                    fontSize: "clamp(3.5rem, 9vw, 9rem)",
                  }}
                >
                  <div style={{ overflow: "hidden", display: "block" }}>
                    <SplitText text="SWARNAVA" delay={0} />
                  </div>
                  <div style={{ overflow: "hidden", display: "block" }}>
                    <SplitText
                      text="SARKAR"
                      delay={0.25}
                      className="text-gradient-cyan"
                    />
                  </div>
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                  style={{
                    marginTop: "1.25rem",
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.25em",
                    color: "rgba(0, 240, 255, 0.9)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  WELCOME · AI &amp; ML ENGINEER · CLASSIFIED PROFILE
                </motion.p>

                {/* Horizontal rule */}
                {phase === "rule" && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      marginTop: "1.5rem",
                      height: 1,
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.6) 30%, rgba(168,85,247,0.5) 70%, transparent 100%)",
                      transformOrigin: "left center",
                      width: "min(360px, 65vw)",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
