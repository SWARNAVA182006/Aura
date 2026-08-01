"use client";

import { motion } from "framer-motion";
import { Command, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react";
import { CHAPTERS } from "@/config/content";
import { soundFX } from "@/lib/sound";

interface HUDProps {
  currentChapter: number;
  onSelectChapter: (index: number) => void;
  onOpenCommand: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export function ChapterHUD({
  currentChapter,
  onSelectChapter,
  onOpenCommand,
  isMuted,
  onToggleMute,
}: HUDProps) {
  const handleChapterClick = (idx: number) => {
    soundFX.playClickSnap();
    onSelectChapter(idx);
  };

  const handleMuteClick = () => {
    soundFX.toggleMute();
    onToggleMute();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5 pointer-events-none select-none">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between pointer-events-auto">
        {/* Brand Emblem Logo */}
        <a
          href="#"
          onMouseEnter={() => soundFX.playHoverBlip()}
          onClick={(e) => {
            e.preventDefault();
            handleChapterClick(0);
          }}
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#070712]/80 font-mono font-black text-cyan-400 text-sm backdrop-blur-xl shadow-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            SS
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-widest text-white uppercase">
              SWARNAVA SARKAR
            </span>
            <span className="font-mono text-[9px] text-cyan-400 tracking-wider font-bold">
              AI &amp; ML ENGINEER
            </span>
          </div>
        </a>

        {/* Floating Minimal 5-Chapter Pill Navigation Bar */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-[#070712]/80 px-4 py-2 backdrop-blur-2xl shadow-2xl">
          {CHAPTERS.map((ch) => {
            const isActive = currentChapter === ch.index;
            return (
              <button
                key={ch.id}
                onMouseEnter={() => soundFX.playHoverBlip()}
                onClick={() => handleChapterClick(ch.index)}
                className={`group relative flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                <span className={isActive ? "text-cyan-400 font-extrabold" : "text-slate-500"}>
                  {ch.number}
                </span>
                <span className="hidden lg:inline tracking-wider uppercase text-[11px] font-bold">
                  {ch.title.replace("THE ", "")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#070712]/80 p-1.5 backdrop-blur-2xl shadow-2xl">
          {/* Mute Toggle */}
          <button
            onMouseEnter={() => soundFX.playHoverBlip()}
            onClick={handleMuteClick}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />}
          </button>

          {/* Command Menu */}
          <button
            onMouseEnter={() => soundFX.playHoverBlip()}
            onClick={() => {
              soundFX.playClickSnap();
              onOpenCommand();
            }}
            className="flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 font-mono text-[10px] font-bold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <Command className="h-3 w-3" />
            <span className="hidden sm:inline">⌘K</span>
          </button>

          {/* Up/Down Chapter Navigation Arrows */}
          <div className="flex items-center border-l border-white/10 pl-1">
            <button
              onMouseEnter={() => soundFX.playHoverBlip()}
              onClick={() => handleChapterClick(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="rounded-full p-1 text-slate-400 transition hover:text-cyan-400 disabled:opacity-20"
              title="Previous Chapter"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
            <button
              onMouseEnter={() => soundFX.playHoverBlip()}
              onClick={() => handleChapterClick(Math.min(CHAPTERS.length - 1, currentChapter + 1))}
              disabled={currentChapter === CHAPTERS.length - 1}
              className="rounded-full p-1 text-slate-400 transition hover:text-cyan-400 disabled:opacity-20"
              title="Next Chapter"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
