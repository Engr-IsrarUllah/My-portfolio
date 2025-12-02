"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black w-full h-full">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[30px_30px]" />
        {/* Radial Fade */}
        <div className="absolute inset-0 bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Glowing Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for hire
          </span>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-blue-600">
              Future Web.
            </span>
          </h1>

          <div className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed h-auto min-h-[100px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(18)
                  .typeString(
                    `I'm <strong>${personalInfo.name}</strong>, a ${personalInfo.title}. `
                  )
                  .typeString(
                    "I leverage the power of the MERN stack and Next.js to engineer scalable, high-speed solutions. "
                  )
                  .typeString(
                    "From complex backend logic to pixel-perfect interfaces, I deliver complete web products."
                  )
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                cursor: "|",
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-black border border-gray-800 text-white rounded-full font-bold hover:bg-gray-900 transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
