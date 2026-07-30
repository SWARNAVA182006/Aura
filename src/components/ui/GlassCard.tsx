"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: "none" | "cyan" | "purple";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  glow = "none",
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A14]/70 p-6 backdrop-blur-xl transition-all duration-300",
        hoverEffect && "hover:border-cyan-500/30 hover:bg-[#0E0E1F]/90 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1",
        glow === "cyan" && "shadow-[0_0_30px_rgba(0,240,255,0.12)] border-cyan-500/40",
        glow === "purple" && "shadow-[0_0_30px_rgba(168,85,247,0.12)] border-purple-500/40",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />
      {children}
    </div>
  );
}
