"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Command, Sparkles, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { CommandMenu } from "@/components/ui/CommandMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#works" },
    { name: "Architecture", href: "#architecture" },
    { name: "Journey", href: "#timeline" },
    { name: "Stack", href: "#stack" },
    { name: "Journal", href: "#writing" },
  ];

  return (
    <>
      <CommandMenu isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border border-white/10 bg-[#090912]/80 backdrop-blur-2xl shadow-2xl shadow-black/50"
              : "border border-white/5 bg-transparent"
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 font-mono text-sm font-semibold tracking-tight text-white transition hover:text-cyan-400"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner transition group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
              <span className="text-gradient-cyan font-bold">SS</span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-xs font-bold tracking-wider text-slate-100 uppercase">
                SWARNAVA SARKAR
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                AI Engineer & Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Controls: Availability Badge + Cmd+K + Contact CTA */}
          <div className="flex items-center gap-3">
            {/* Status Pill */}
            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="hidden xl:inline">Available for Opportunities</span>
              <span className="xl:hidden">Available</span>
            </div>

            {/* Cmd+K Trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
              title="Command Palette (Cmd+K)"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="hidden font-mono text-[10px] sm:inline">⌘K</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="hidden rounded-xl bg-cyan-400 px-3.5 py-1.5 text-xs font-semibold text-black transition hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] sm:block"
            >
              Connect
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 z-30 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#090912] p-4 backdrop-blur-2xl lg:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-center text-sm font-semibold text-black"
          >
            Connect with Swarnava
          </a>
        </motion.div>
      )}
    </>
  );
}
