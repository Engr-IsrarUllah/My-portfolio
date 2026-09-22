"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Cloud, 
  Code2, 
  Layers, 
  Zap, 
  ShieldCheck 
} from "lucide-react";
import { skillCategories } from "@/lib/data";

const categoryIcons = {
  "AI / GenAI": <Brain size={18} className="text-blue-400" />,
  "Frontend Development": <Layout size={18} className="text-sky-400" />,
  "Backend Development": <Server size={18} className="text-emerald-400" />,
  "Databases": <Database size={18} className="text-cyan-400" />,
  "Machine Learning & Deep Learning": <Cpu size={18} className="text-purple-400" />,
  "DevOps & Deployment": <Cloud size={18} className="text-amber-400" />,
  "Programming Languages": <Code2 size={18} className="text-zinc-300" />,
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
            Core Profile
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technical Expertise & Skills
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed">
            A comprehensive matrix of technologies, modern frameworks, and AI workflows I leverage to build scalable, resilient web architectures.
          </p>
        </motion.div>

        {/* Engineering Standards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <Layers size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Stack & Backend Systems</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Scalable distributed applications built with TypeScript, Node.js, Express, FastAPI, PostgreSQL, and MongoDB.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Agentic AI & Machine Learning</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                LangGraph workflows, RAG with Qdrant & Pinecone, MCP server integrations, and deep learning with PyTorch & TensorFlow.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">DevOps & Cloud Reliability</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Containerized pipelines with Docker, automated GitHub Actions CI/CD, Linux servers, and secure high-availability deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Skill Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="h-full"
            >
              <div className="h-full p-6 md:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 group hover:-translate-y-1">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 shrink-0 group-hover:border-zinc-600 transition-colors">
                        {categoryIcons[cat.title] || <Code2 size={18} className="text-zinc-300" />}
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 shrink-0">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Skill Pills (Flex wrap ensures 100% responsiveness without any overlapping) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs md:text-sm px-3 py-1.5 rounded-xl bg-zinc-800/50 border border-zinc-700/60 text-zinc-200 font-medium hover:border-blue-500/50 hover:text-white hover:bg-zinc-800 transition-all duration-200 shadow-xs cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
