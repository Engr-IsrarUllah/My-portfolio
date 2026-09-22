"use client";
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/80 pt-16 pb-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
            Israr<span className="text-blue-500">.dev</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
            Engineering robust web products, scalable backend APIs, and applied AI systems with modern architecture.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/Engr-IsrarUllah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-zinc-800/60 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-zinc-300 transition-colors mt-4 md:mt-0 font-medium"
        >
          Back to Top <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
