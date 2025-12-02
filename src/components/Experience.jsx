"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 border-l-4 border-blue-600 pl-4">
          Professional Experience
        </h2>

        <div className="space-y-12 border-l-2 border-slate-800 ml-4 pl-8 relative">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

              <h3 className="text-2xl font-bold text-white">{job.role}</h3>
              <div className="text-blue-400 mb-3 font-medium text-lg">
                {job.company} <span className="text-slate-600">|</span>{" "}
                {job.duration}
              </div>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
