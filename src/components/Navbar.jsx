"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Smart Hide: Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 inset-x-0 mx-auto z-100 max-w-2xl px-4"
      >
        <div className="relative flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl shadow-black/50">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30 group-hover:border-blue-500 transition-colors">
              <Terminal size={18} className="text-blue-500" />
            </div>
            <span className="font-bold text-gray-200 tracking-tight text-sm">
              Israr<span className="text-blue-500">.Dev</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-4 left-1/2 w-0 h-0.5 bg-blue-500 -translate-x-1/2 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions (Socials + Mobile Toggle) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block px-4 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/5 rounded-full transition-all"
            >
              Hire Me
            </a>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-white/10"></div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              className="hidden md:block text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 inset-x-4 z-90 p-4 rounded-2xl bg-black/90 border border-white/10 backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-blue-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-center mt-2 px-4 py-3 bg-blue-600 text-white font-bold rounded-xl"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
