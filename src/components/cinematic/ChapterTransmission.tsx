"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, Sparkles, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { FUTURE_VISION } from "@/config/content";
import { Button } from "@/components/ui/Button";
import { soundFX } from "@/lib/sound";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ChapterTransmission() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [istTime, setIstTime] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

  const handleCopyEmail = () => {
    soundFX.playClickSnap();
    navigator.clipboard.writeText(SITE_CONFIG.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    soundFX.playSuccessChime();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
    reset();
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-4 pt-28 pb-16 overflow-hidden bg-[#020204]">
      {/* Radial ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Chapter Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 font-mono text-xs text-cyan-300">
              <Mail className="h-3.5 w-3.5" />
              <span>CHAPTER 05 • TRANSMISSION</span>
            </div>
            <span className="font-mono text-xs text-slate-400">CONNECT & LEADERSHIP</span>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Future Vision & <span className="text-gradient-cyan">Direct Transmission</span>.
          </h1>
        </div>

        {/* 2-Column Split: Future Vision & Digital Card on Left, Contact Form on Right */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Vision & Card */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-3xl border border-cyan-500/30 bg-[#090914]/90 p-6 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 font-mono font-bold text-cyan-400 text-xl">
                  SS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">SWARNAVA SARKAR</h3>
                  <p className="text-xs text-slate-400 font-mono">AI Engineer & Systems Architect</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                {FUTURE_VISION.statement}
              </p>

              {/* Digital Business Info */}
              <div className="mt-6 flex flex-col gap-2.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>{SITE_CONFIG.author.location}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="text-slate-300 truncate text-[11px]">{SITE_CONFIG.author.email}</span>
                  <button
                    onMouseEnter={() => soundFX.playHoverBlip()}
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-cyan-400 hover:bg-cyan-500/20 text-[10px]"
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 border-t border-white/10 pt-4 flex gap-3">
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#090914]/90 p-8 backdrop-blur-2xl shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Transmission Received</h3>
                  <p className="mt-2 text-xs text-slate-400 max-w-md">
                    Thank you for reaching out to Swarnava Sarkar. I will respond to your transmission promptly.
                  </p>
                  <Button variant="secondary" size="sm" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-xs text-slate-300">Your Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Dr. Alex Vance"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name.message}</span>}
                    </div>

                    <div>
                      <label className="font-mono text-xs text-slate-300">Your Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="alex@enterprise.com"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-slate-300">Subject</label>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="AI Engineering / Systems Leadership Role"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                    />
                    {errors.subject && <span className="text-[10px] text-red-400 mt-1 block">{errors.subject.message}</span>}
                  </div>

                  <div>
                    <label className="font-mono text-xs text-slate-300">Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Hello Swarnava, I reviewed your SeisVision AI and HPCC Copilot case studies..."
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none resize-none"
                    />
                    {errors.message && <span className="text-[10px] text-red-400 mt-1 block">{errors.message.message}</span>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="h-4 w-4" />}
                    className="mt-2"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Transmission to Swarnava"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-cyan-400" />
            <span>IST: {istTime || "11:30:00 PM"} (UTC+5:30)</span>
          </div>
          <div>© {new Date().getFullYear()} SWARNAVA SARKAR. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </section>
  );
}
