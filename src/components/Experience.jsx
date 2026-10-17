"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#09090b]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
            Professional roles where I contributed to production web platforms, API integrations, and database design.
          </p>
        </motion.div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-zinc-800">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-10 group"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-1.5 top-6 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-500 ring-4 ring-slate-100 dark:ring-[#09090b] transition-transform group-hover:scale-125" />

              {/* Job Card */}
              <div className="p-6 md:p-7 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-400 dark:hover:border-zinc-700 shadow-sm dark:shadow-none transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {job.role}
                    </h3>
                    <span className="text-slate-600 dark:text-zinc-300 font-medium text-sm">
                      {job.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 text-xs font-medium text-slate-700 dark:text-zinc-300 self-start sm:self-auto">
                    <Calendar size={13} className="text-slate-500 dark:text-zinc-400" />
                    {job.duration}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
