"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import Hero3D from "@/components/Hero3D";

export default function Hero() {
  const quickSkills = [
    { label: "Full-Stack + GenAI", icon: Sparkles, color: "text-blue-400" },
    { label: "LangGraph & RAG", icon: Cpu, color: "text-emerald-400" },
    { label: "Next.js & Node.js", icon: Layers, color: "text-indigo-400" },
    { label: "High-Throughput APIs", icon: Zap, color: "text-amber-400" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Lighting & Grid Ambiance */}
      <div className="absolute inset-0 bg-[#09090b] w-full h-full pointer-events-none -z-20">
        <div className="absolute inset-0 bg-grid-white opacity-20" />
        {/* Dual Ambient Glows for Executive Depth */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[350px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 translate-x-1/4 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Value Proposition & Professional Intro (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status & Engineering Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for new opportunities
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-xs font-mono">
                <Terminal size={12} className="text-blue-400" />
                Full-Stack AI Developer
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
              Engineering Scalable Systems &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Intelligent Products.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-6 leading-relaxed font-normal">
              I&apos;m <span className="text-zinc-100 font-semibold">{personalInfo.name}</span>, a{" "}
              <span className="text-zinc-200 font-medium">Full-Stack AI Developer</span>. I build distributed backend architectures, autonomous agentic workflows (LangGraph & RAG pipelines), and modern reactive web applications engineered for speed, high concurrency, and production reliability.
            </p>

            {/* Quick Specialization Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {quickSkills.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800/80 bg-slate-100 dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 text-xs font-medium backdrop-blur-xs hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    <IconComponent size={13} className={item.color} />
                    {item.label}
                  </span>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 hover:text-slate-950 dark:hover:text-white text-slate-700 dark:text-zinc-300 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm active:scale-95 cursor-pointer"
              >
                Explore Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-zinc-800 hover:text-slate-950 dark:hover:text-white transition-all flex items-center justify-center gap-2 text-sm active:scale-95"
              >
                <Mail size={16} /> Contact Me
              </a>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-slate-100 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm"
                  title="GitHub Profile"
                >
                  <Github size={16} />
                  <span className="hidden md:inline">GitHub</span>
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-slate-100 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
              )}
            </div>

            {/* Metrics & Architecture Strip */}
            <div className="w-full pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Full-Stack</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">End-to-End MERN & Next.js</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-400 tracking-tight">Autonomous</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">AI Agents & RAG Pipelines</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">Production</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">High-Availability Architectures</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Frameless Orbiting Skills System (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex items-center justify-center overflow-visible"
          >
            {/* Ambient Back Glow that seamlessly blends into the page */}
            <div className="absolute -inset-12 bg-radial from-blue-600/15 via-cyan-500/8 to-transparent blur-3xl pointer-events-none" />

            {/* Frameless Scene */}
            <div className="relative w-full flex items-center justify-center overflow-visible">
              <Hero3D />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
