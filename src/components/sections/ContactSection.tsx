"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 800));
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
    });
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#030305]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
            <Mail className="h-3.5 w-3.5" />
            <span>11 • CONNECT & INITIATE CONVERSATION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Let's build something <span className="text-gradient-cyan">exceptional together</span>.
          </h2>
          <p className="mt-2 text-xs text-slate-400 max-w-2xl">
            Whether you are a recruiter, engineering manager, research lab lead, or founder—I am always open to discussing senior AI engineering, software architecture, and technology leadership roles.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Digital Business Card & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <GlassCard className="p-6 border-cyan-500/30 bg-[#0C0C1A]/90">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 font-mono font-bold text-cyan-400 text-xl">
                  SS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">SWARNAVA SARKAR</h3>
                  <p className="text-xs text-slate-400 font-mono">AI Engineer & Software Architect</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>{SITE_CONFIG.author.location}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="text-slate-300 truncate">{SITE_CONFIG.author.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-cyan-400 hover:bg-cyan-500/20"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 border-white/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Message Transmitted Successfully!</h3>
                  <p className="mt-2 text-xs text-slate-400 max-w-md">
                    Thank you for reaching out to Swarnava Sarkar. I will respond to your message promptly.
                  </p>
                  <Button variant="secondary" size="sm" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send Another Message
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
                      placeholder="AI Architecture / Systems Role"
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
                    {isSubmitting ? "Transmitting..." : "Send Message to Swarnava"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
