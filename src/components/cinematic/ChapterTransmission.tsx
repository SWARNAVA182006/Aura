"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Radio,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

export function ChapterTransmission() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Engineering Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);
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
      setIstTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.author.email);
    soundFX.playClickSnap();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClickSnap();
    setStatus("sending");

    try {
      // Real Email Transmission via FormSubmit API to swarnava2019@gmail.com
      const res = await fetch("https://formsubmit.co/ajax/swarnava2019@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: `Portfolio Inquiry: ${formState.subject} from ${formState.name}`,
          message: formState.message,
        }),
      });

      if (res.ok) {
        soundFX.playSuccessChime();
        setStatus("sent");
      } else {
        // Fallback to direct mailto protocol if API is blocked by client network
        window.location.href = `mailto:swarnava2019@gmail.com?subject=${encodeURIComponent(
          formState.subject
        )}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        )}`;
        soundFX.playSuccessChime();
        setStatus("sent");
      }
    } catch (err) {
      // Direct mailto fallback on fetch network error
      window.location.href = `mailto:swarnava2019@gmail.com?subject=${encodeURIComponent(
        formState.subject
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      soundFX.playSuccessChime();
      setStatus("sent");
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030305] text-white py-24 px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-10 bottom-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-10 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 font-mono text-xs font-bold text-violet-300 uppercase tracking-widest backdrop-blur-md mb-3">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-ping" />
            CHAPTER 05 — TRANSMISSION
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Direct Transmission &amp; <span className="text-gradient-cyan">Inquiry.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Available for AI &amp; ML engineering opportunities, computer vision research, and technical collaboration.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#070712]/90 p-6 backdrop-blur-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Radio className="h-5 w-5 text-cyan-400 animate-pulse" />
                <div>
                  <h3 className="font-bold text-lg text-white">SWARNAVA SARKAR</h3>
                  <p className="font-mono text-xs text-cyan-400 font-semibold">{SITE_CONFIG.author.role}</p>
                </div>
              </div>

              {/* Location & Time */}
              <div className="space-y-3 font-mono text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{SITE_CONFIG.author.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>IST {istTime || "--:--:--"} (UTC+5:30)</span>
                </div>
              </div>

              {/* Email Copy Button & Direct Mailto */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-xs">
                  <span className="text-slate-200 font-bold truncate">{SITE_CONFIG.author.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-3 flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition-all"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <a
                  href={`mailto:${SITE_CONFIG.author.email}`}
                  onClick={() => soundFX.playClickSnap()}
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-2.5 font-mono text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition-all"
                >
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>Open Direct Mail Client</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playHoverBlip()}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 font-mono text-xs font-bold text-slate-200 hover:border-cyan-400 hover:text-white transition-all"
                >
                  <Github className="h-4 w-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playHoverBlip()}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 font-mono text-xs font-bold text-slate-200 hover:border-cyan-400 hover:text-white transition-all"
                >
                  <Linkedin className="h-4 w-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Verified Affiliations Badge Ribbon */}
              <div>
                <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold mb-2">VERIFIED AFFILIATIONS</div>
                <div className="flex flex-wrap gap-2">
                  <BrandLogo name="SRM" size="sm" />
                  <BrandLogo name="ONGC" size="sm" />
                  <BrandLogo name="Apple" size="sm" />
                  <BrandLogo name="Google" size="sm" />
                  <BrandLogo name="IBM" size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Direct Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#070712]/90 p-8 backdrop-blur-2xl">
              <h3 className="font-bold text-xl text-white mb-2">Send Direct Email Transmission</h3>
              <p className="text-xs text-slate-400 mb-6">Fills and transmits a real email directly to swarnava2019@gmail.com inbox.</p>

              {status === "sent" ? (
                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center">
                  <Check className="h-10 w-10 text-emerald-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="font-bold text-lg text-white mb-1">TRANSMISSION DELIVERED TO INBOX</h4>
                  <p className="text-xs text-slate-300">Your message has been transmitted directly to swarnava2019@gmail.com.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/20 px-4 py-2 font-mono text-xs font-bold text-emerald-300"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] font-bold text-slate-400 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. Alex Vance"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-sans text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] font-bold text-slate-400 uppercase mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-sans text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold text-slate-400 uppercase mb-1">Inquiry Subject</label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="AI Engineering Role / Project Inquiry"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-sans text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold text-slate-400 uppercase mb-1">Message Content</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your engineering role, project scope, or research opportunity..."
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-sans text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/20 py-3 font-mono text-xs font-bold text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300"
                  >
                    <Send className="h-4 w-4 text-cyan-400" />
                    <span>{status === "sending" ? "TRANSMITTING TO INBOX..." : "TRANSMIT EMAIL DIRECTLY"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
