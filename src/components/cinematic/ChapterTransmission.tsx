"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import {
  Mail, Github, Linkedin, Twitter,
  Copy, Check, Send, MapPin, Clock,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { FUTURE_VISION } from "@/config/content";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { soundFX } from "@/lib/sound";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Field component — shared styling
function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase">
        {label}
      </label>
      {children}
      {error && (
        <span className="font-mono text-[10px] text-red-400">{error}</span>
      )}
    </div>
  );
}

const INPUT_CLASS =
  "w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-slate-600 " +
  "focus:border-violet-500/50 focus:outline-none focus:bg-white/5 focus:shadow-[0_0_0_1px_rgba(168,85,247,0.3)] " +
  "transition-all duration-300 backdrop-blur-md";

export function ChapterTransmission() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [istTime, setIstTime] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  useEffect(() => {
    const update = () => {
      setIstTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const handleCopyEmail = () => {
    soundFX.playClickSnap();
    navigator.clipboard.writeText(SITE_CONFIG.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    soundFX.playSuccessChime();
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 } });
    setSubmitted(true);
    reset();
  };

  return (
    <section id="chapter-transmission" className="relative min-h-screen w-full overflow-hidden bg-[#030305]">
      {/* Violet/magenta world atmosphere — Transmission's unique identity */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(168,85,247,0.14) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 75% 20%, rgba(236,72,153,0.10) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-10">

        {/* Chapter badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center justify-between"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/6 px-4 py-1.5 font-mono text-[11px] font-semibold tracking-widest text-violet-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-ping" />
            05 — TRANSMISSION
          </div>
          <span className="hidden md:block font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            Future Vision · Direct Contact
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10"
        >
          <h2
            className="font-black tracking-tight text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
          >
            Open for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connection.
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400 leading-relaxed">
            {FUTURE_VISION.statement}
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* Left column: Identity card + social + vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {/* Identity panel */}
            <div
              className="relative overflow-hidden rounded-3xl border p-6 backdrop-blur-2xl"
              style={{
                background: "rgba(7,7,18,0.85)",
                borderColor: "rgba(168,85,247,0.25)",
              }}
            >
              {/* Violet radial highlight */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 10%, rgba(168,85,247,0.10) 0%, transparent 60%)",
                }}
              />

              <div className="relative flex items-center gap-4 mb-5">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border font-mono font-black text-xl shadow-lg"
                  style={{
                    borderColor: "rgba(168,85,247,0.35)",
                    background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.08))",
                    color: "#A855F7",
                    boxShadow: "0 0 24px rgba(168,85,247,0.2)",
                  }}
                >
                  SS
                </div>
                <div>
                  <h3 className="font-black text-white text-base tracking-tight">SWARNAVA SARKAR</h3>
                  <p className="font-mono text-[11px] text-violet-400 mt-0.5">{SITE_CONFIG.author.role}</p>
                </div>
              </div>

              {/* Location + time */}
              <div className="flex flex-col gap-2 font-mono text-xs mb-5">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-violet-400" />
                  <span>{SITE_CONFIG.author.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-violet-400" />
                  <span>IST {istTime || "--:--:-- --"} (UTC+5:30)</span>
                </div>
              </div>

              {/* Email copy */}
              <div
                className="flex items-center justify-between rounded-xl border px-4 py-3 font-mono text-xs mb-5"
                style={{
                  borderColor: "rgba(168,85,247,0.2)",
                  background: "rgba(168,85,247,0.05)",
                }}
              >
                <span className="text-slate-300 truncate">{SITE_CONFIG.author.email}</span>
                <button
                  onMouseEnter={() => soundFX.playHoverBlip()}
                  onClick={handleCopyEmail}
                  className="ml-3 flex flex-shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-[10px] font-semibold transition-all duration-300"
                  style={{
                    borderColor: copied ? "rgba(16,185,129,0.4)" : "rgba(168,85,247,0.35)",
                    background: copied ? "rgba(16,185,129,0.1)" : "rgba(168,85,247,0.1)",
                    color: copied ? "#10B981" : "#A855F7",
                  }}
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Social links */}
              <div className="flex gap-2 mb-5">
                {[
                  { href: SITE_CONFIG.social.github, Icon: Github, label: "GitHub" },
                  { href: SITE_CONFIG.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => soundFX.playHoverBlip()}
                    onClick={() => soundFX.playClickSnap()}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/7 bg-white/3 text-slate-400 transition-all duration-300 hover:border-violet-500/40 hover:text-violet-300 hover:bg-violet-500/6"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Affiliations */}
              <div className="border-t border-white/7 pt-4">
                <p className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2.5">Verified Affiliations</p>
                <div className="flex flex-wrap gap-2">
                  {["SRM", "ONGC", "Apple", "Google", "IBM", "Guidewire", "StudAI", "AICTE", "EduSkills", "UROP"].map((b) => (
                    <BrandLogo key={b} name={b} size="sm" />
                  ))}
                </div>
              </div>
            </div>

            {/* Future vision goals */}
            <div
              className="rounded-3xl border p-5 backdrop-blur-2xl"
              style={{
                background: "rgba(7,7,18,0.7)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <h4
                className="font-mono text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "#A855F7" }}
              >
                Future Engineering Vision
              </h4>
              <ul className="flex flex-col gap-2">
                {FUTURE_VISION.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span
                      className="mt-0.5 flex-shrink-0 font-mono font-bold"
                      style={{ color: "#A855F7" }}
                    >
                      ▸
                    </span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div
              className="relative overflow-hidden rounded-3xl border p-7 backdrop-blur-2xl shadow-2xl"
              style={{
                background: "rgba(7,7,18,0.9)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              {/* Top accent glow */}
              <div
                className="pointer-events-none absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.5) 40%, rgba(236,72,153,0.5) 70%, transparent 100%)",
                }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-4"
                  >
                    <div
                      className="flex h-18 w-18 items-center justify-center rounded-full border"
                      style={{
                        borderColor: "rgba(16,185,129,0.4)",
                        background: "rgba(16,185,129,0.1)",
                        color: "#10B981",
                        height: "4.5rem",
                        width: "4.5rem",
                      }}
                    >
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-black text-white">Transmission Received</h3>
                    <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                      Thank you for reaching out. I will respond to your transmission promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      onMouseEnter={() => soundFX.playHoverBlip()}
                      className="mt-2 rounded-full border border-white/10 bg-white/4 px-6 py-2.5 font-mono text-xs text-slate-300 transition hover:border-violet-500/30 hover:text-violet-300"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5">Send a Direct Message</h3>
                      <p className="font-mono text-[10px] text-slate-600">AI engineering · Architecture consultation · Collaboration</p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field label="Your Name" error={errors.name?.message}>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="Dr. Alex Vance"
                          className={INPUT_CLASS}
                        />
                      </Field>
                      <Field label="Your Email" error={errors.email?.message}>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="alex@enterprise.com"
                          className={INPUT_CLASS}
                        />
                      </Field>
                    </div>

                    <Field label="Subject" error={errors.subject?.message}>
                      <input
                        {...register("subject")}
                        type="text"
                        placeholder="AI Engineering / Architecture Consultation"
                        className={INPUT_CLASS}
                      />
                    </Field>

                    <Field label="Message" error={errors.message?.message}>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Hello Swarnava, I reviewed your SeisVision AI and HPCC Copilot case studies..."
                        className={INPUT_CLASS + " resize-none"}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={() => soundFX.playHoverBlip()}
                      className="group flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 font-mono text-sm font-bold tracking-wide text-black transition-all duration-300 disabled:opacity-60"
                      style={{
                        background: isSubmitting
                          ? "rgba(168,85,247,0.5)"
                          : "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                        boxShadow: "0 0 30px rgba(168,85,247,0.25), 0 0 60px rgba(236,72,153,0.12)",
                      }}
                    >
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      {isSubmitting ? "Transmitting..." : "Send Transmission"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/7 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-violet-500" />
            <span>SWARNAVA SARKAR · AI &amp; ML ENGINEER · SYSTEM ARCHITECT</span>
          </div>
          <div>© {new Date().getFullYear()} SWARNAVA SARKAR. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </section>
  );
}
