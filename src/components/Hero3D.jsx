"use client";
import React from "react";
import { Terminal } from "lucide-react";

// Official Tech SVGs
const TechIcons = {
  Nextjs: () => (
    <svg viewBox="0 0 180 180" className="w-5 h-5 text-white fill-current">
      <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm48.877 127.323l-45.922-59.08v59.08H78.85V52.677h14.105l45.922 59.184V52.677h14.105v74.646h-14.105zM58.91 52.677v74.646H44.805V52.677H58.91z" />
    </svg>
  ),
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61dafb] fill-current">
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5">
      <path fill="#3178C6" d="M0 0h128v128H0z" />
      <path fill="#FFF" d="m66.2 73.8 11.2-6.5c3.3 5.4 7.4 9 14.1 9 6.2 0 10.3-3.1 10.3-7.5 0-5.2-4.2-7.1-11.8-10.4-13.6-5.8-22.5-12.8-22.5-27.1 0-14.2 10.9-24.9 27.6-24.9 11.9 0 20.5 4.5 26.5 15.2l-10.8 6.9c-3.1-5.1-6.7-7.4-15.6-7.4-6.3 0-9.8 3.1-9.8 7.1 0 4.9 3.9 6.8 11.8 10.2 15.2 6.5 22.8 13.4 22.8 27.6 0 16.3-12.6 25.5-29.3 25.5-16.3 0-26.6-7.7-32.5-20.7zM24 23.5h52.7v12.7H51.4v75.4H36.3V36.2H24z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5">
      <path fill="#3776AB" d="M63.7 3.3c-13.9 0-23.2 6.1-23.2 17.8v13.3h23.7v3.3H20.7C9 37.7 0 46.9 0 60.8c0 14.1 7.6 22.7 20.7 22.7h7.2v-10c0-13.7 11.7-25.5 25.5-25.5h23.4v-4.3c0-11.5-9.7-20.4-23.7-20.4zm-11.9 8.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
      <path fill="#FFD43B" d="M64.3 124.7c13.9 0 23.2-6.1 23.2-17.8V93.6H63.8v-3.3h43.5c11.7 0 20.7-9.2 20.7-23.1 0-14.1-7.6-22.7-20.7-22.7h-7.2v10c0 13.7-11.7 25.5-25.5 25.5H51.2v4.3c0 11.5 9.7 20.4 23.7 20.4zm11.9-8.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  ),
  OpenAI: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#10a37f] fill-current">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.771-4.209 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.746-7.07zm-9.022 12.608a4.475 4.475 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zm-9.66-4.524a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-2.045zM2.34 8.908a4.485 4.485 0 0 1 2.365-1.98v5.679a.795.795 0 0 0 .392.68l5.823 3.372-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.908zm16.597 3.855l-5.833-3.387L15.119 8.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.674 8.105v-5.679a.79.79 0 0 0-.409-.654zm2.72-4.325l-.142-.085-4.779-2.759a.776.776 0 0 0-.785 0L10.108 8.963V6.636a.08.08 0 0 1 .038-.063l4.84-2.795a4.504 4.504 0 0 1 6.21 4.537zM12 14.072l-2.616-1.51 2.616-1.51 2.616 1.51L12 14.072z" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2496ed] fill-current">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.186.186.186m5.894 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m21.758 1.144c-.38-.276-1.528-.426-2.612-.222-.19-.482-.472-.9-.81-1.246l-.27-.267-.282.253a4.05 4.05 0 00-1.328 2.378c-.76-.08-1.92.176-2.585.666-.372.274-.635.65-.776 1.108H.478a.478.478 0 00-.478.479c.074 1.83 1.05 6.643 6.61 6.643 4.887 0 8.528-3.328 10.37-6.52.888.082 2.656-.05 3.513-.934.343-.35.485-.805.474-1.248-.009-.344-.12-.76-.474-1.036" />
    </svg>
  ),
  FastAPI: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#05998b] fill-current">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.92 18.77l-4.22-7.3 5.14.01-1.84 7.29zm6.06-6.28h-3.3l1.84-7.29 4.22 7.29h-2.76z" />
    </svg>
  ),
  LangGraph: () => (
    <div className="w-5 h-5 flex items-center justify-center rounded bg-gradient-to-tr from-emerald-500 to-teal-400 text-black font-mono font-black text-[10px]">
      LG
    </div>
  ),
  Qdrant: () => (
    <div className="w-5 h-5 flex items-center justify-center rounded bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-mono font-bold text-[9px]">
      QD
    </div>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#38bdf8] fill-current">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
};

// Skill Nodes Configuration
const innerSkills = [
  { name: "OpenAI / LLMs", icon: TechIcons.OpenAI, color: "#10a37f" },
  { name: "LangGraph", icon: TechIcons.LangGraph, color: "#10b981" },
  { name: "React 19", icon: TechIcons.React, color: "#61dafb" },
  { name: "TypeScript", icon: TechIcons.TypeScript, color: "#3178C6" },
];

const outerSkills = [
  { name: "Next.js 16", icon: TechIcons.Nextjs, color: "#ffffff" },
  { name: "Python", icon: TechIcons.Python, color: "#facc15" },
  { name: "FastAPI", icon: TechIcons.FastAPI, color: "#05998b" },
  { name: "Docker", icon: TechIcons.Docker, color: "#2496ed" },
  { name: "Qdrant Vector DB", icon: TechIcons.Qdrant, color: "#c084fc" },
  { name: "Tailwind CSS", icon: TechIcons.Tailwind, color: "#38bdf8" },
];

export default function Hero3D({ className = "" }) {
  return (
    <div className={`relative w-full flex items-center justify-center overflow-visible select-none py-4 ${className}`}>
      {/* Soft Ambient Radial Backdrop Glow */}
      <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/5 to-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Orbiting System Container */}
      <div className="orbit-container relative flex items-center justify-center w-[380px] h-[380px] overflow-visible">
        
        {/* Concentric Orbital Track: Outer Ring */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-zinc-800/40 pointer-events-none" />
        <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-cyan-500/15 pointer-events-none" />

        {/* Concentric Orbital Track: Inner Ring */}
        <div className="absolute w-[220px] h-[220px] rounded-full border border-zinc-800/50 pointer-events-none" />
        <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-blue-500/20 pointer-events-none" />

        {/* Centerpiece: Developer Core Badge */}
        <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-zinc-950/70 border border-white/10 shadow-[0_0_35px_rgba(56,189,248,0.2)] backdrop-blur-xl group hover:border-cyan-400/50 transition-all duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Terminal size={20} className="stroke-[2.5]" />
          </div>

          <div className="mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[9px] text-zinc-300 font-semibold tracking-wider uppercase">
              Israr.dev
            </span>
          </div>
        </div>

        {/* ================= INNER ORBIT TRACK (4 Skills, CCW) ================= */}
        <div className="orbit-track-inner absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
          {innerSkills.map((skill, index) => {
            const total = innerSkills.length;
            const angle = (360 / total) * index;
            // Radius: 110px
            return (
              <div
                key={skill.name}
                className="absolute flex items-center justify-center overflow-visible"
                style={{
                  transform: `rotate(${angle}deg) translateY(-110px)`,
                }}
              >
                {/* Counter-rotation to keep icon facing upright */}
                <div className="counter-inner pointer-events-auto">
                  <div
                    className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-cyan-400/50 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md hover:scale-115 transition-all duration-300 cursor-pointer"
                    title={skill.name}
                  >
                    {/* Hover Glow */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div className="relative flex items-center justify-center">
                      <skill.icon />
                    </div>

                    {/* Skill Tooltip Badge */}
                    <div className="absolute -bottom-6 px-2 py-0.5 rounded-md bg-zinc-950/90 border border-zinc-700/80 text-[10px] font-mono font-medium text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-30">
                      {skill.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= OUTER ORBIT TRACK (6 Skills, CW) ================= */}
        <div className="orbit-track-outer absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
          {outerSkills.map((skill, index) => {
            const total = outerSkills.length;
            const angle = (360 / total) * index;
            // Radius: 180px
            return (
              <div
                key={skill.name}
                className="absolute flex items-center justify-center overflow-visible"
                style={{
                  transform: `rotate(${angle}deg) translateY(-180px)`,
                }}
              >
                {/* Counter-rotation to keep icon facing upright */}
                <div className="counter-outer pointer-events-auto">
                  <div
                    className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-cyan-400/50 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md hover:scale-115 transition-all duration-300 cursor-pointer"
                    title={skill.name}
                  >
                    {/* Hover Glow */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div className="relative flex items-center justify-center">
                      <skill.icon />
                    </div>

                    {/* Skill Tooltip Badge */}
                    <div className="absolute -bottom-6 px-2 py-0.5 rounded-md bg-zinc-950/90 border border-zinc-700/80 text-[10px] font-mono font-medium text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-30">
                      {skill.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
