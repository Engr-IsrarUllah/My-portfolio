"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Zap } from "lucide-react";
import { skills } from "@/lib/data";

// Reusable Bento Card
const BentoCard = ({ title, children, className }) => (
  <div
    className={`p-6 rounded-3xl glass border border-white/10 bg-black/40 ${className}`}
  >
    <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
      {title}
    </h3>
    {children}
  </div>
);

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // 2. The Item: "Buttery Smooth" Easing
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-32 px-6 relative bg-black selection:bg-blue-500/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            I don't just write code; I{" "}
            <span className="text-blue-400 font-semibold">
              engineer solutions
            </span>
            . With a background in Software Engineering and a focus on Fullstack
            Development, I bridge the gap between complex backend logic and
            beautiful frontend interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Skill Block */}
          <BentoCard className="md:col-span-2">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer transition-colors"
                >
                  <div className="text-blue-400/80 group-hover:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </BentoCard>

          {/* Stats / Highlight Block */}
          <BentoCard className="md:col-span-1 bg-linear-to-br from-blue-950/30 to-purple-950/30">
            <div className="flex flex-col justify-center h-full gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-all duration-300">
                  <Cpu size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none mb-1">
                    Engineering
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Degree
                  </div>
                </div>
              </motion.div>

              {/* Highlight 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-all duration-300">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none mb-1">
                    Fast
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Performance
                  </div>
                </div>
              </motion.div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
