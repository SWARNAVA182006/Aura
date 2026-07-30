"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EntranceLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030305] text-white"
        >
          {/* Monogram emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-2xl"
          >
            <span className="font-mono text-3xl font-bold tracking-tighter text-gradient-cyan">
              SS
            </span>
            <div className="absolute -inset-0.5 rounded-2xl border border-cyan-500/20 opacity-50 animate-pulse-slow" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-mono text-xs tracking-[0.3em] text-slate-400 uppercase"
          >
            SWARNAVA SARKAR
          </motion.h1>

          {/* Progress bar */}
          <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 font-mono text-[10px] tracking-widest text-slate-500">
            INITIALIZING SYSTEM • {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
