"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Sparkles, Layers, Cpu, Terminal, Radio } from "lucide-react";
import { projects } from "@/lib/data";

// Custom Spotlight Card with subtle radial glow on cursor move (No jarring 3D tilt)
function ProjectCard({ project, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative h-full rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/90 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-blue-500/5"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Mouse-Following Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.18), transparent 70%)`
            : "none",
        }}
      />

      {/* Top Browser / Window Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-zinc-900/60 z-20">
        {/* Window dots & Index */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-zinc-600 font-mono text-[11px] ml-2">
            PROJ_{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Category Pill */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-[11px] font-medium text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {project.category}
        </span>
      </div>

      {/* Preview Image Showcase */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

      </div>

      {/* Project Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 z-20">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-zinc-800/80">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900/80 text-zinc-300 border border-zinc-800 font-mono tracking-tight hover:border-zinc-700 hover:text-white transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between pt-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group/link"
            >
              <Github size={15} className="text-zinc-400 group-hover/link:text-white" />
              <span>Explore Repository</span>
              <ArrowUpRight
                size={13}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-zinc-500 group-hover/link:text-blue-400"
              />
            </a>
          ) : (
            <span className="text-xs text-zinc-500 font-mono">Internal Production</span>
          )}

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> */}
            {/* <span>Deployed</span> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "ai", label: "AI & GenAI", count: projects.filter(p => p.category.toLowerCase().includes("ai") || p.title.toLowerCase().includes("ai")).length },
    { id: "fullstack", label: "Full-Stack & SaaS", count: projects.filter(p => p.category.toLowerCase().includes("full stack") || p.category.toLowerCase().includes("commerce") || p.category.toLowerCase().includes("saas")).length },
    { id: "bots", label: "Bots & Automation", count: projects.filter(p => p.category.toLowerCase().includes("bot") || p.category.toLowerCase().includes("assistant")).length },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    const cat = project.category.toLowerCase();
    const title = project.title.toLowerCase();
    if (filter === "ai") return cat.includes("ai") || title.includes("ai");
    if (filter === "fullstack") return cat.includes("full stack") || cat.includes("commerce") || cat.includes("saas");
    if (filter === "bots") return cat.includes("bot") || cat.includes("assistant") || cat.includes("fintech") || cat.includes("voice");
    return true;
  });

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#09090b] relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
              Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
              Real-world systems engineered across Autonomous AI Agents, Voice Telephony, FinTech Trading Bots, and Distributed Full-Stack Architectures.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {categories.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${active
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-md shadow-white/10"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                    }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${active ? "bg-zinc-300 text-zinc-900" : "bg-zinc-800 text-zinc-500"
                      }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
