"use client";
import React from "react";
import Image from "next/image"; // <--- Import Next.js Image
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-black relative">
      {/* Background gradient splash */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Selected Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/20 transition-colors flex flex-col"
            >
              {/* --- IMAGE SECTION (UPDATED) --- */}
              <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay to make text readable if image is bright (Optional) */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* The GitHub Link Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group/link"
                  >
                    <Github size={18} />
                    View Source Code
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
