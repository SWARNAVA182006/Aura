"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, Cpu, Code2, BookOpen, Mail, X, Command, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null; // Toggle hander managed by parent
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    {
      label: "Selected AI Projects & Architecture",
      icon: Cpu,
      shortcut: "G P",
      action: () => {
        document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      label: "Interactive AI Agent Sandbox",
      icon: Terminal,
      shortcut: "G A",
      action: () => {
        document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      label: "Engineering Stack & Skill Radar",
      icon: Code2,
      shortcut: "G S",
      action: () => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      label: "Engineering Journey & Timeline",
      icon: Command,
      shortcut: "G T",
      action: () => {
        document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      label: "Technical Essays & Publications",
      icon: BookOpen,
      shortcut: "G E",
      action: () => {
        document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      label: "Copy Email (contact@swarnavasarkar.dev)",
      icon: Mail,
      shortcut: "C E",
      action: () => {
        navigator.clipboard.writeText(SITE_CONFIG.author.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#090912] shadow-2xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-white/10 px-4 py-3">
              <Search className="mr-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="px-4 py-8 text-center text-xs text-slate-500">
                  No matching commands found
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400">
                          {item.shortcut}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Dialog Footer */}
            <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.02] px-4 py-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px]">
                  ESC
                </span>
                <span>to close</span>
              </div>
              {copied && <span className="text-cyan-400">Copied email to clipboard!</span>}
              <div className="flex items-center gap-1 font-mono text-[10px] text-slate-400">
                <span>SWARNAVA SARKAR COMMAND ENGINE</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
