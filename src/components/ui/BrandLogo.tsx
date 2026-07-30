"use client";

import React from "react";

interface BrandLogoProps {
  name: string;
  className?: string;
  showText?: boolean;
}

export function BrandLogo({ name, className = "h-4 w-4", showText = true }: BrandLogoProps) {
  const cleanName = name.toLowerCase().trim();

  // Render SVG icons for all skills & companies across the project
  const renderLogoIcon = () => {
    // ONGC (Oil and Natural Gas Corporation - Official Flame & Shield Vector)
    if (cleanName.includes("ongc") || cleanName.includes("oil and natural gas")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#B22222" />
          <path d="M12 4c-1.5 2.5-3 5-3 7.5 0 2.5 1.5 4.5 3 4.5s3-2 3-4.5C15 9 13.5 6.5 12 4z" fill="#FFD700" />
          <path d="M12 9c-.8 1.2-1.5 2.5-1.5 3.8 0 1.2.7 2.2 1.5 2.2s1.5-1 1.5-2.2C13.5 11.5 12.8 10.2 12 9z" fill="#FF4500" />
        </svg>
      );
    }

    // Guidewire Software
    if (cleanName.includes("guidewire")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0052CC" />
          <path d="M7 8h10v2.5H9.5v3H16V16H7V8z" fill="#FFF" />
        </svg>
      );
    }

    // PyTorch
    if (cleanName.includes("pytorch")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.5 5.5L12 9L8.5 5.5L12 2Z" fill="#EE4C2C" />
          <path d="M15.5 5.5C18 8 18 12 15.5 14.5L12 18L8.5 14.5C6 12 6 8 8.5 5.5" stroke="#EE4C2C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // Python
    if (cleanName.includes("python")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2c-4.2 0-3.9 1.8-3.9 1.8v1.9h4V6h-5.6S3.5 5.8 3.5 10c0 4.2 1.6 4 1.6 4h1v-1.4c0-1.6 1.4-2.9 3-2.9h5.1c1.5 0 2.7-1.3 2.7-2.8V4.8C16.9 3.2 15.3 2 11.8 2z" fill="#3776AB" />
          <path d="M12.2 22c4.2 0 3.9-1.8 3.9-1.8v-1.9h-4V18h5.6s2.8.2 2.8-4c0-4.2-1.6-4-1.6-4h-1v1.4c0 1.6-1.4 2.9-3 2.9h-5.1c-1.5 0-2.7 1.3-2.7 2.8v2.1c0 1.6 1.6 2.8 5.1 2.8z" fill="#FFD43B" />
        </svg>
      );
    }

    // TypeScript
    if (cleanName.includes("typescript") || cleanName.includes("ts")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 16.5h-2v-6h-2v-1.5h6v1.5h-2v6zm6.5-1.2c-.3.4-.8.7-1.4.9-.6.2-1.2.3-1.9.3-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-1-1.7l1.4-.6c.1.4.3.8.6 1 .3.2.7.4 1.2.4.4 0 .8-.1 1-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.6-.3-1.2-.5l-.8-.2c-.7-.2-1.3-.5-1.7-.8-.4-.4-.6-.9-.6-1.5 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.4-.6.8 0 1.5.2 2.1.5.6.3 1 .8 1.2 1.4l-1.4.6c-.1-.4-.3-.6-.6-.8-.3-.2-.7-.3-1.1-.3-.4 0-.7.1-.9.2-.2.1-.3.3-.3.5 0 .2.1.4.3.5.2.1.5.3 1.1.4l.8.2c.8.2 1.4.5 1.8.9.4.4.6.9.6 1.6 0 .8-.3 1.5-.9 1.9z" fill="#FFF" />
        </svg>
      );
    }

    // React / R3F
    if (cleanName.includes("react") || cleanName.includes("r3f")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    }

    // Next.js
    if (cleanName.includes("next")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000" stroke="#FFF" strokeWidth="1.5" />
          <path d="M8 8v8l8-8v8" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    // Docker
    if (cleanName.includes("docker")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zM7 8h2v2H7V8zm-3 0h2v2H4V8zm9-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm6.7 1.5c-.3-.2-.9-.3-1.6-.2-.3-.5-.8-.8-1.4-1-.5 0-.9.2-1.3.4-.6-.4-1.5-.7-2.4-.7h-.1v3.2c0 .8.6 1.4 1.4 1.4h5.2c.4 0 .7-.3.7-.7 0-1-.3-1.9-.5-2.4z" />
        </svg>
      );
    }

    // OpenCV
    if (cleanName.includes("opencv")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="6" r="3.5" stroke="#FF0000" strokeWidth="2" />
          <circle cx="6" cy="16" r="3.5" stroke="#00FF00" strokeWidth="2" />
          <circle cx="18" cy="16" r="3.5" stroke="#0000FF" strokeWidth="2" />
        </svg>
      );
    }

    // TensorFlow
    if (cleanName.includes("tensorflow")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF6F00">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.2l6.2 3.4-6.2 3.4-6.2-3.4L12 5.2zM5.5 9.7l5.5 3v6.6l-5.5-3.1V9.7zm13 6.5l-5.5 3.1v-6.6l5.5-3v6.5z" />
        </svg>
      );
    }

    // PostgreSQL
    if (cleanName.includes("postgres")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#336791">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5c-3 0-5.5-1.5-6.5-4 1-1.5 3-2.5 5.5-2.5s4.5 1 5.5 2.5c-1 2.5-3.5 4-6.5 4zm4-6.5c-1-1-2.5-1.5-4-1.5s-3 .5-4 1.5c.5-3 2.5-5 5-5s4.5 2 5 5z" />
        </svg>
      );
    }

    // Redis
    if (cleanName.includes("redis")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#DC382D">
          <path d="M3 6l9-3 9 3-9 3-9-3zm0 6l9-3 9 3-9 3-9-3zm0 6l9-3 9 3-9 3-9-3z" />
        </svg>
      );
    }

    // Java
    if (cleanName.includes("java") && !cleanName.includes("script")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#5382A1">
          <path d="M8.8 19.3c0 0-1.1.2-1.9.2-2.3 0-3.3-1.1-2.2-2.2 0 0 .9-.9 2.5-.9 1.6 0 2.8.5 2.8.5s-1.2-1-3.2-1c-2.4 0-4.3 1.2-3 2.6 1.1 1.2 3.6 1.1 5 1 .9-.1 2.2-.2 2.2-.2zM12 2c-1.5 3-3 4.5-3 6.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2-1.5-3.5-3-6.5h-3z" />
        </svg>
      );
    }

    // Rust
    if (cleanName.includes("rust")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#DEA584" stroke="#000" strokeWidth="1">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10M8.5 8.5l7 7M15.5 8.5l-7 7" />
        </svg>
      );
    }

    // FastAPI
    if (cleanName.includes("fastapi")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#009688">
          <circle cx="12" cy="12" r="10" />
          <path d="M13 4L6 14h5l-1 6 7-10h-5l1-6z" fill="#FFF" />
        </svg>
      );
    }

    // C++ / C
    if (cleanName.includes("c++") || cleanName === "c") {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00599C">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" />
          <path d="M9.5 14.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5c.8 0 1.4.3 1.8.8l-1 1c-.2-.3-.5-.4-.8-.4-.7 0-1.2.5-1.2 1.1s.5 1.1 1.2 1.1c.3 0 .6-.1.8-.4l1 1c-.4.5-1 1-1.8 1zm5.5-3h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1zm3 0h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1z" fill="#FFF" />
        </svg>
      );
    }

    // Qdrant / VectorDB
    if (cleanName.includes("qdrant") || cleanName.includes("vector")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#DC2626">
          <rect width="24" height="24" rx="5" fill="#1E293B" />
          <path d="M7 7h10v10H7V7z" fill="#00F0FF" />
          <path d="M10 10h4v4h-4v-4z" fill="#7000FF" />
        </svg>
      );
    }

    // LangChain
    if (cleanName.includes("langchain")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1C3C3C">
          <rect width="24" height="24" rx="5" fill="#00A884" />
          <path d="M7 12h10M12 7v10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // Three.js
    if (cleanName.includes("three")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    }

    // Tailwind CSS
    if (cleanName.includes("tailwind")) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.3-1.6 2.7-2.2 4.4-1.6 1 1 2.3 2.3 4.2 2.3 3.3 0 5.5-1.6 6.6-4.9-1.3 1.6-2.7 2.2-4.4 1.6-1-1-2.3-2.3-4.2-2.3zm-6.6 6c-3.3 0-5.5 1.6-6.6 4.9 1.3-1.6 2.7-2.2 4.4-1.6 1 1 2.3 2.3 4.2 2.3 3.3 0 5.5-1.6 6.6-4.9-1.3 1.6-2.7 2.2-4.4 1.6-1-1-2.3-2.3-4.2-2.3z" />
        </svg>
      );
    }

    // Default fallback icon
    return (
      <div className="flex h-4 w-4 items-center justify-center rounded-md bg-cyan-500/20 font-mono text-[9px] font-bold text-cyan-400">
        #{name.slice(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-200 transition hover:border-cyan-500/40 hover:bg-cyan-500/10">
      {renderLogoIcon()}
      {showText && <span>{name}</span>}
    </span>
  );
}
