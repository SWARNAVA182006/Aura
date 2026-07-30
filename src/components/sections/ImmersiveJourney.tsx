"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ArrowRight, ChevronDown, Orbit, Sparkles } from "lucide-react";
import { ENGINEERING_PHILOSOPHY, FUTURE_VISION, HERO_DATA, PROJECTS, TIMELINE_JOURNEY } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { NeuralCanvas } from "@/components/3d/NeuralCanvas";

const chapterLinks = [
  { label: "Arrival", href: "#arrival" },
  { label: "Identity", href: "#identity" },
  { label: "Engineer", href: "#engineer" },
  { label: "Builder", href: "#builder" },
  { label: "Journey", href: "#journey" },
  { label: "Future", href: "#future" },
];

export function ImmersiveJourney() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;

    const rafLoop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(rafLoop);
    };

    raf = requestAnimationFrame(rafLoop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".reveal-slice", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.05,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030305] text-slate-100">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `radial-gradient(500px circle at ${pointer.x}px ${pointer.y}px, rgba(0, 240, 255, 0.16), transparent 38%)`,
        }}
      />

      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
        <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-xl">
          <a href="#arrival" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
              SS
            </span>
            <span className="hidden sm:inline">Swarnava</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {chapterLinks.map((chapter) => (
              <a key={chapter.href} href={chapter.href} className="rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-slate-400 transition hover:bg-white/5 hover:text-cyan-300">
                {chapter.label}
              </a>
            ))}
          </div>

          <a href="#future" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300">
            Let’s build
          </a>
        </nav>
      </header>

      <section id="arrival" className="relative flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,240,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(138,43,226,0.16),transparent_35%)]" />
          <div className="absolute inset-0 opacity-60"><NeuralCanvas /></div>
        </div>

        <motion.div style={{ y: heroParallax }} className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-400/8 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.35em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Immersive digital identity
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="reveal-slice mt-8 max-w-4xl text-5xl font-semibold leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            I build systems that feel inevitable.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="reveal-slice mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {HERO_DATA.bio}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#builder" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-cyan-300">
              Explore the work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#engineer" className="rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300">
              Read the philosophy
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {SITE_CONFIG.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">{metric.subtext}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-16 flex justify-center">
            <a href="#identity" className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-slate-400">
              Scroll deeper <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="identity" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-2xl flex-1">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Chapter 02 / Identity</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Curiosity is the core of how I build.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {ENGINEERING_PHILOSOPHY.overview}
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">A possible line of thought</p>
              <p className="mt-4 text-2xl leading-relaxed text-white">
                “Software is one of the few mediums where a single engineer can turn an idea into an instrument that changes how people think, work, and create.”
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="flex-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-black/40 to-purple-500/15 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="A cinematic portrait of a creative technologist"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 max-w-xs rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-300">Research-led systems</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">I make the invisible visible through architecture, motion, and thoughtful tooling.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="engineer" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Chapter 03 / The engineer</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              I think in systems, not features.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {ENGINEERING_PHILOSOPHY.whyAi}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {ENGINEERING_PHILOSOPHY.principles.map((principle, index) => (
              <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} key={principle.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-slate-500">{principle.number}</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                    <Orbit className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{principle.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="builder" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Chapter 04 / The builder</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Each project is a world worth entering.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5">
            {PROJECTS.filter((project) => project.featured).map((project, index) => (
              <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-7 backdrop-blur-xl">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-slate-500">{project.year} • {project.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-lg leading-8 text-slate-300">{project.tagline}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm text-slate-300">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Impact</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.impactMetrics.map((metric) => (
                        <span key={metric.label} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">{metric.value} {metric.label}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">{tech}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Chapter 05 / The journey</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              The path has always been motion.
            </h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {TIMELINE_JOURNEY.map((entry, index) => (
              <motion.article key={entry.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className="rounded-[2rem] border border-white/10 bg-black/25 p-7 backdrop-blur-xl">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-300">{entry.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{entry.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{entry.organization}</p>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-300">{entry.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="future" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-purple-500/10 p-8 sm:p-12 backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Chapter 06 / Future vision</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {FUTURE_VISION.headline}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{FUTURE_VISION.statement}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mt-10 flex flex-wrap gap-3">
            {[
              "AI-native systems",
              "Research-led products",
              "Apple-grade polish",
              "Enterprise software with empathy",
            ].map((focus) => (
              <span key={focus} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200">{focus}</span>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mx-auto mt-12 flex max-w-6xl flex-col items-start gap-6 rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-slate-500">Final chapter</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Let’s design something that lasts.</h3>
          </div>
          <a href="mailto:contact@swarnavasarkar.dev" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
