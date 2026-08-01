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

  // Asset image mapping for verified logos inside public/assets/
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

  // Larger dimension presets for prominent visibility
  const dims = {
    sm: { box: "h-8 w-8", img: "32px", text: "text-xs", pad: "px-3 py-1.5" },
    md: { box: "h-11 w-11", img: "44px", text: "text-sm", pad: "px-4 py-2" },
    lg: { box: "h-14 w-14", img: "56px", text: "text-base", pad: "px-5 py-2.5" },
    xl: { box: "h-16 w-16", img: "64px", text: "text-lg", pad: "px-6 py-3" },
  }[size];

  // SVG Tech Icons for every single tool and language
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
    if (cleanName.includes("opencv")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="4" stroke="#EE2A24" strokeWidth="2" />
          <circle cx="16" cy="8" r="4" stroke="#00A859" strokeWidth="2" />
          <circle cx="12" cy="16" r="4" stroke="#0071BC" strokeWidth="2" />
        </svg>
      );
    }
    if (cleanName.includes("tensorflow")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5L4 7v10l3.5-2V9.5L12 6.5l4.5 3v5.5L20 17V7l-8-4.5z" fill="#FF6F00" />
          <path d="M12 11.5L8.5 13.5v4l3.5 2 3.5-2v-4L12 11.5z" fill="#FF6F00" />
        </svg>
      );
    }
    if (cleanName.includes("fastapi")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#009688" />
          <path d="M12 4L6 14h5v6l6-10h-5V4z" fill="#FFF" />
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
    if (cleanName.includes("javascript") || cleanName.includes("js")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M11.7 17.6c0 1.5-.9 2.1-2.2 2.1-1.3 0-2.1-.7-2.4-1.6l1.3-.8c.2.5.5.8 1.1.8.6 0 .9-.3.9-1.1V10h1.3v7.6zm5.8.1c.3 0 .7-.1 1-.3.3-.2.5-.5.5-.9 0-1.2-1.7-1.4-2.7-1.8-1-.4-2-.9-2-2.3 0-1.3 1-2.3 2.7-2.3 1.2 0 2 .5 2.4 1.4l-1.2.8c-.2-.4-.6-.7-1.2-.7-.6 0-1 .3-1 .8 0 1 1.7 1.2 2.7 1.6 1.1.5 2.1 1 2.1 2.5 0 1.5-1.2 2.5-3.1 2.5-1.6 0-2.6-.7-3.1-1.6l1.3-.8c.3.5.8.9 1.6.9z" fill="#000" />
        </svg>
      );
    }
    if (cleanName.includes("react") || cleanName.includes("next")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    }
    if (cleanName.includes("swift")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <path d="M19.8 12.3c-.6.8-1.5 1.5-2.5 2.1 1.4-1.8 2.2-4.1 2.2-6.5C19.5 4.7 16.8 2 13.6 2c-3 0-5.6 2.3-5.9 5.2 1-.5 2.2-.8 3.5-.8 3.6 0 6.6 2.9 6.6 6.5 0 1.2-.3 2.3-.9 3.3.7-.6 1.4-1.3 2-2.1.3-.6.6-1.2.9-1.8z" fill="#FA7343" />
        </svg>
      );
    }
    if (cleanName.includes("docker")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <path d="M13.9 11.2h2v1.9h-2zm-3.1 0h2v1.9h-2zm-3.2 0h2v1.9h-2zm9.4 0h2v1.9h-2zm-6.3-3.1h2V10h-2zm-3.1 0h2V10h-2zm6.2 0h2V10h-2zm-3.1-3.1h2v1.9h-2zm12.3 8.1c-.3-.2-.9-.4-1.6-.3-.5.1-1.1.4-1.6.8-.7-.6-1.7-.9-2.7-.9H1v2.5c0 3 2.4 5.4 5.4 5.4h9.3c3 0 5.4-2.4 5.4-5.4 0-.7-.2-1.4-.6-2.1z" fill="#2496ED" />
        </svg>
      );
    }
    if (cleanName.includes("postgres")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#336791" />
        </svg>
      );
    }
    if (cleanName.includes("cuda") || cleanName.includes("gpu")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#76B900" />
          <path d="M7 8h10v8H7z" fill="#000" />
          <path d="M9 10h6v4H9z" fill="#76B900" />
        </svg>
      );
    }
    if (cleanName.includes("esp32") || cleanName.includes("esp8266") || cleanName.includes("arduino") || cleanName.includes("embedded") || cleanName.includes("iot")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00979D" />
          <circle cx="8" cy="12" r="2.5" stroke="#FFF" strokeWidth="1.5" />
          <circle cx="16" cy="12" r="2.5" stroke="#FFF" strokeWidth="1.5" />
          <path d="M10.5 12h3" stroke="#FFF" strokeWidth="1.5" />
        </svg>
      );
    }
    if (cleanName.includes("lora") || cleanName.includes("gps")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="1.5">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <circle cx="12" cy="12" r="2" fill="#00F0FF" />
        </svg>
      );
    }
    if (cleanName.includes("c++") || cleanName.includes("c")) {
      return (
        <svg className={dims.box} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00599C" />
          <path d="M8.5 14.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c.9 0 1.7.5 2.1 1.2l-1.3.7c-.2-.4-.5-.6-.8-.6-.6 0-1 .4-1 1s.4 1 1 1c.3 0 .6-.2.8-.6l1.3.7c-.4.7-1.2 1.2-2.1 1.2zm6.5-4h1v1.5h1.5v1H16.5V15h-1v-1.5H14v-1h1.5v-1.5zm4 0h1v1.5h1.5v1H20.5V15h-1v-1.5H18v-1h1.5v-1.5z" fill="#FFF" />
        </svg>
      );
    }

    return (
      <div className={`flex ${dims.box} items-center justify-center rounded-xl bg-cyan-500/20 font-mono text-xs font-bold text-cyan-400 border border-cyan-500/40`}>
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  };

  // Image badge icon
  const renderIconBox = () => {
    if (assetImg) {
      const isJpg = assetImg.endsWith(".jpg") || assetImg.endsWith(".webp");
      return (
        <div className={`relative ${dims.box} shrink-0 overflow-hidden rounded-xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/80`}>
          <Image
            src={assetImg}
            alt={name}
            fill
            sizes={dims.img}
            className={isJpg ? "object-cover" : "object-contain p-1"}
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
      className={`group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-[#090916]/95 ${dims.pad} font-mono ${dims.text} text-slate-200 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/80 hover:bg-cyan-500/15 ${
        glow ? "hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:scale-105" : ""
      }`}
    >
      {renderIconBox()}
      <span className="font-bold tracking-wide text-slate-100 group-hover:text-white">{name}</span>
    </span>
  );
}
