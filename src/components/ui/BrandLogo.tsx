"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  name: string;
  className?: string;
  showText?: boolean;
  logoSrc?: string;
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

export function BrandLogo({
  name,
  className,
  showText = true,
  logoSrc,
  size = "md",
  glow = true,
}: BrandLogoProps) {
  const cleanName = name.toLowerCase().trim();

  // Asset image mapping for all verified logos inside public/assets/
  const getAssetImagePath = (): string | null => {
    if (logoSrc) return logoSrc;
    if (cleanName.includes("srm")) return "/assets/srm.png";
    if (cleanName.includes("ongc") || cleanName.includes("oil and natural gas")) return "/assets/ongc.png";
    if (cleanName.includes("google")) return "/assets/google.png";
    if (cleanName.includes("aicte")) return "/assets/aicte.png";
    if (cleanName.includes("apple") || cleanName.includes("ios")) return "/assets/ios.jpg";
    if (cleanName.includes("studai")) return "/assets/studai.jpg";
    if (cleanName.includes("guidewire")) return "/assets/guidewire.jpg";
    if (cleanName.includes("ibm")) return "/assets/ibm.jpg";
    if (cleanName.includes("openai")) return "/assets/openai.jpg";
    if (cleanName.includes("urop")) return "/assets/urop.jpg";
    if (cleanName.includes("eduskills")) return "/assets/eduskills.png";
    if (cleanName.includes("nptel")) return "/assets/nptel.jpg";
    if (cleanName.includes("infosys")) return "/assets/infosys.jpg";
    if (cleanName.includes("techforce")) return "/assets/techforce.webp";
    if (cleanName.includes("cognitive")) return "/assets/cognitive.png";
    if (cleanName.includes("placfvs")) return "/assets/placfvs.jpg";
    return null;
  };

  const assetImg = getAssetImagePath();

  // Dimension presets
  const dims = {
    sm: { box: "h-6 w-6", img: "20px", text: "text-[10px]", pad: "px-2 py-1" },
    md: { box: "h-8 w-8", img: "28px", text: "text-xs", pad: "px-3 py-1.5" },
    lg: { box: "h-10 w-10", img: "36px", text: "text-sm", pad: "px-4 py-2" },
    xl: { box: "h-12 w-12", img: "44px", text: "text-base", pad: "px-5 py-2.5" },
  }[size];

  // SVG Fallbacks
  const renderSvgFallback = () => {
    if (cleanName.includes("pytorch")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.5 5.5L12 9L8.5 5.5L12 2Z" fill="#EE4C2C" />
          <path d="M15.5 5.5C18 8 18 12 15.5 14.5L12 18L8.5 14.5C6 12 6 8 8.5 5.5" stroke="#EE4C2C" strokeWidth="2" />
        </svg>
      );
    }
    if (cleanName.includes("python")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2c-4.2 0-3.9 1.8-3.9 1.8v1.9h4V6h-5.6S3.5 5.8 3.5 10c0 4.2 1.6 4 1.6 4h1v-1.4c0-1.6 1.4-2.9 3-2.9h5.1c1.5 0 2.7-1.3 2.7-2.8V4.8C16.9 3.2 15.3 2 11.8 2z" fill="#3776AB" />
          <path d="M12.2 22c4.2 0 3.9-1.8 3.9-1.8v-1.9h-4V18h5.6s2.8.2 2.8-4c0-4.2-1.6-4-1.6-4h-1v1.4c0 1.6-1.4 2.9-3 2.9h-5.1c-1.5 0-2.7 1.3-2.7 2.8v2.1c0 1.6 1.6 2.8 5.1 2.8z" fill="#FFD43B" />
        </svg>
      );
    }
    if (cleanName.includes("typescript") || cleanName.includes("ts")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 16.5h-2v-6h-2v-1.5h6v1.5h-2v6zm6.5-1.2c-.3.4-.8.7-1.4.9-.6.2-1.2.3-1.9.3-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-1-1.7l1.4-.6c.1.4.3.8.6 1 .3.2.7.4 1.2.4.4 0 .8-.1 1-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.6-.3-1.2-.5l-.8-.2c-.7-.2-1.3-.5-1.7-.8-.4-.4-.6-.9-.6-1.5 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.4-.6.8 0 1.5.2 2.1.5.6.3 1 .8 1.2 1.4l-1.4.6c-.1-.4-.3-.6-.6-.8-.3-.2-.7-.3-1.1-.3-.4 0-.7.1-.9.2-.2.1-.3.3-.3.5 0 .2.1.4.3.5.2.1.5.3 1.1.4l.8.2c.8.2 1.4.5 1.8.9.4.4.6.9.6 1.6 0 .8-.3 1.5-.9 1.9z" fill="#FFF" />
        </svg>
      );
    }
    if (cleanName.includes("react") || cleanName.includes("r3f")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    }

    return (
      <div className={`flex ${dims.box} items-center justify-center rounded-xl bg-cyan-500/20 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-500/40`}>
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  };

  // Image badge icon
  const renderIconBox = () => {
    if (assetImg) {
      const isJpg = assetImg.endsWith(".jpg") || assetImg.endsWith(".webp");
      return (
        <div className={`relative ${dims.box} shrink-0 overflow-hidden rounded-xl bg-[#090916] border border-white/20 p-1 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/60`}>
          <Image
            src={assetImg}
            alt={name}
            fill
            sizes={dims.img}
            className={isJpg ? "object-cover rounded-lg" : "object-contain p-0.5"}
          />
        </div>
      );
    }
    return renderSvgFallback();
  };

  // Standalone Icon Mode (showText === false)
  if (!showText) {
    return (
      <div
        className={`group relative inline-flex items-center justify-center cursor-pointer transition-all duration-300 ${className || ""}`}
        title={name}
      >
        {renderIconBox()}
      </div>
    );
  }

  // Pill Mode with Text (showText === true)
  return (
    <span
      className={`group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#070712]/90 ${dims.pad} font-mono ${dims.text} text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 ${
        glow ? "hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:scale-105" : ""
      }`}
    >
      {renderIconBox()}
      <span className="font-semibold tracking-wide text-slate-200 group-hover:text-white">{name}</span>
    </span>
  );
}
