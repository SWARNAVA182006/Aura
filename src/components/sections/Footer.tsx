"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Clock, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#020204] py-12 px-4 text-xs text-slate-400 font-mono">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Brand & Tag */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 font-bold text-cyan-400">
              SS
            </div>
            <span className="font-bold tracking-wider text-slate-200 uppercase text-sm">
              SWARNAVA SARKAR
            </span>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 max-w-sm">
            AI Engineer & Software Architect. Building intelligent systems, deep computer vision pipelines, and luxury web applications.
          </p>
        </div>

        {/* Live IST Clock & Health */}
        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-slate-300">
            <Clock className="h-3.5 w-3.5 text-cyan-400" />
            <span>IST: {istTime || "11:30:00 PM"} (UTC+5:30)</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mx-auto w-full max-w-5xl mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
        <div>© {new Date().getFullYear()} SWARNAVA SARKAR. ALL RIGHTS RESERVED.</div>
        <div>BUILT WITH NEXT.JS 15 • REACT 19 • TAILWIND CSS V4 • THREE.JS</div>
      </div>
    </footer>
  );
}
