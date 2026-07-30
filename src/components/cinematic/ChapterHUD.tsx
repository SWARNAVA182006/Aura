"use client";

import { motion } from "framer-motion";
import { Command, Volume2, VolumeX, Sparkles, ChevronUp, ChevronDown } from "lucide-react";
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
  const activeChapterData = CHAPTERS[currentChapter] || CHAPTERS[0];

  const handleChapterClick = (idx: number) => {
    soundFX.playClickSnap();
    onSelectChapter(idx);
  };

  const handleMuteClick = () => {
    soundFX.toggleMute();
    onToggleMute();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 pointer-events-none select-none">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between pointer-events-auto">
        {/* Brand Emblem */}
        <a
          href="#"
          onMouseEnter={() => soundFX.playHoverBlip()}
          onClick={(e) => {
            e.preventDefault();
            handleChapterClick(0);
          }}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#070712]/80 px-3 py-2 backdrop-blur-2xl transition hover:border-cyan-500/40 shadow-xl"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 font-mono font-bold text-cyan-400">
            SS
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold tracking-wider text-slate-100 uppercase">
              SWARNAVA SARKAR
            </span>
            <span className="font-mono text-[10px] text-cyan-400">
              AI ENGINEER & ARCHITECT
            </span>
          </div>
        </a>

        {/* Floating Chapter Navigation Pills */}
        <div className="hidden md:flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#070712]/80 p-1.5 backdrop-blur-2xl shadow-xl">
          {CHAPTERS.map((ch) => {
            const isActive = currentChapter === ch.index;
            return (
              <button
                key={ch.id}
                onMouseEnter={() => soundFX.playHoverBlip()}
                onClick={() => handleChapterClick(ch.index)}
                className={`group relative flex items-center gap-2 rounded-xl px-3 py-1.5 font-mono text-xs transition ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] font-bold"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-[10px] text-cyan-400">{ch.number}</span>
                <span className="hidden xl:inline">{ch.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Command Menu + Audio Toggle + Navigation Controls */}
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#070712]/80 p-1.5 backdrop-blur-2xl shadow-xl">
          {/* Mute Toggle */}
          <button
            onMouseEnter={() => soundFX.playHoverBlip()}
            onClick={handleMuteClick}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
            title={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-cyan-400 animate-pulse" />}
          </button>

          {/* Cmd+K Palette */}
          <button
            onMouseEnter={() => soundFX.playHoverBlip()}
            onClick={() => {
              soundFX.playClickSnap();
              onOpenCommand();
            }}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-[10px]">⌘K</span>
          </button>

          {/* Up/Down Chapter Navigation Arrows */}
          <div className="flex items-center border-l border-white/10 pl-2">
            <button
              onMouseEnter={() => soundFX.playHoverBlip()}
              onClick={() => handleChapterClick(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="rounded-lg p-1.5 text-slate-400 transition hover:text-cyan-400 disabled:opacity-30 disabled:hover:text-slate-400"
              title="Previous Chapter (Up Arrow)"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              onMouseEnter={() => soundFX.playHoverBlip()}
              onClick={() => handleChapterClick(Math.min(CHAPTERS.length - 1, currentChapter + 1))}
              disabled={currentChapter === CHAPTERS.length - 1}
              className="rounded-lg p-1.5 text-slate-400 transition hover:text-cyan-400 disabled:opacity-30 disabled:hover:text-slate-400"
              title="Next Chapter (Down Arrow)"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Indicator Bar */}
      <div className="mx-auto mt-3 flex w-full max-w-7xl justify-between items-center px-1 font-mono text-[10px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-300 font-bold">
            CHAPTER {activeChapterData.number}: {activeChapterData.title}
          </span>
          <span className="hidden sm:inline text-slate-500">• {activeChapterData.subtitle}</span>
        </div>
        <div className="hidden lg:flex items-center gap-3 text-slate-500">
          <span>PRESS [1-5] TO JUMP CHAPTERS</span>
          <span>•</span>
          <span>[↑ / ↓] TO NAVIGATE</span>
        </div>
      </div>
    </header>
  );
}
