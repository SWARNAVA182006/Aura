"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold hover:from-cyan-300 hover:to-blue-500 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:-translate-y-0.5",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20 backdrop-blur-md",
    glass:
      "bg-[#0A0A16]/80 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]",
    outline:
      "border border-white/20 text-slate-200 hover:border-white hover:text-white hover:bg-white/5",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs font-semibold gap-2",
    lg: "px-7 py-3.5 text-sm font-semibold gap-2.5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {icon && iconPosition === "left" && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-block">{icon}</span>}
    </button>
  );
}
