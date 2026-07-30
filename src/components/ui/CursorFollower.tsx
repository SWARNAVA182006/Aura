"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with fine pointers
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button" ||
        target.hasAttribute("data-cursor-expand");

      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-cyan-400 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.1 }}
      />
      {/* Outer reactive ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 h-8 w-8 rounded-full border border-cyan-400/40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.3)",
          backgroundColor: isPointer ? "rgba(0, 240, 255, 0.05)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
}
