"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrologueLoader } from "@/components/cinematic/PrologueLoader";
import { ChapterHUD } from "@/components/cinematic/ChapterHUD";
import { CinematicCanvas } from "@/components/3d/CinematicCanvas";
import { ChapterArchitect } from "@/components/cinematic/ChapterArchitect";
import { ChapterArtifacts } from "@/components/cinematic/ChapterArtifacts";
import { ChapterExpedition } from "@/components/cinematic/ChapterExpedition";
import { ChapterJournal } from "@/components/cinematic/ChapterJournal";
import { ChapterTransmission } from "@/components/cinematic/ChapterTransmission";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { CHAPTERS } from "@/config/content";

export function ChapterController() {
  const [booted, setBooted] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState<string>("seisvision");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const totalChapters = CHAPTERS.length;

  const goToChapter = useCallback((index: number) => {
    if (index >= 0 && index < totalChapters) {
      setChapterIndex(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [totalChapters]);

  const nextChapter = useCallback(() => {
    goToChapter(Math.min(totalChapters - 1, chapterIndex + 1));
  }, [chapterIndex, goToChapter, totalChapters]);

  const prevChapter = useCallback(() => {
    goToChapter(Math.max(0, chapterIndex - 1));
  }, [chapterIndex, goToChapter]);

  // Keyboard Shortcuts Listener (1-5, Arrows) with Input Guard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (cmdOpen) return;

      const target = e.target as HTMLElement | null;
      const isInputTarget =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (isInputTarget) return;

      if (e.key === "1") goToChapter(0);
      if (e.key === "2") goToChapter(1);
      if (e.key === "3") goToChapter(2);
      if (e.key === "4") goToChapter(3);
      if (e.key === "5") goToChapter(4);

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        nextChapter();
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevChapter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cmdOpen, goToChapter, nextChapter, prevChapter]);

  if (!booted) {
    return <PrologueLoader onComplete={() => setBooted(true)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#030305] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
      {/* Magnetic Cursor */}
      <CursorFollower />

      {/* Living aurora background */}
      <AuroraBackground chapterIndex={chapterIndex} />

      {/* 3D WebGL Scene backdrop with World Shift Engine */}
      <CinematicCanvas chapterIndex={chapterIndex} activeProjectId={chapterIndex === 1 ? activeProjectId : undefined} />

      {/* Floating HUD Bar */}
      <ChapterHUD
        currentChapter={chapterIndex}
        onSelectChapter={goToChapter}
        onOpenCommand={() => setCmdOpen(true)}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
      />

      {/* Cmd+K Command Menu */}
      <CommandMenu isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Active Chapter Stage Rendering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={chapterIndex}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {chapterIndex === 0 && <ChapterArchitect onNextChapter={nextChapter} />}
          {chapterIndex === 1 && (
            <ChapterArtifacts
              onNextChapter={nextChapter}
              selectedProjectId={activeProjectId}
              onSelectProjectId={setActiveProjectId}
            />
          )}
          {chapterIndex === 2 && <ChapterExpedition onNextChapter={nextChapter} />}
          {chapterIndex === 3 && <ChapterJournal onNextChapter={nextChapter} />}
          {chapterIndex === 4 && <ChapterTransmission />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
