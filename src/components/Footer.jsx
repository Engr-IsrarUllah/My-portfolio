"use client";
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            Israr<span className="text-blue-500">.Dev</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Building scalable, intelligent web applications with the latest tech
            stack. Open for freelance and full-time opportunities.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-500 hover:bg-white/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/Engr-IsrarUllah"
            target="_blank"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-green-500 hover:bg-white/10 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Israr Ullah. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-blue-400 transition-colors mt-4 md:mt-0 font-medium"
        >
          Back to Top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
