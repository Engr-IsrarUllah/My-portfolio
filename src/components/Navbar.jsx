"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal, Sun, Moon } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
        <div className="relative flex items-center justify-between px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/80">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="p-1.5 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
              <Terminal size={16} className="text-blue-400" />
            </div>
            <span className="font-bold text-zinc-100 tracking-tight text-sm">
              Israr<span className="text-blue-500">.dev</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 -translate-x-1/2 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions (Socials + Mobile Toggle) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block px-4 py-1.5 text-xs font-semibold text-zinc-950 dark:text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-sm"
            >
              Hire Me
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white dark:hover:text-white hover:bg-zinc-800/60 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
              title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={17} className="text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon size={17} className="text-blue-500 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Divider */}
            <div className="hidden md:block w-px h-5 bg-zinc-800"></div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 text-zinc-300 hover:text-white"
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
          className="fixed top-24 inset-x-4 z-90 p-5 rounded-2xl bg-zinc-950/95 border border-zinc-800 backdrop-blur-2xl md:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2.5 border-b border-zinc-800/80"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
              <span className="text-sm font-medium text-zinc-300">Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 text-xs font-medium text-zinc-200"
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={14} className="text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={14} className="text-blue-400" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-center mt-2 px-4 py-3 bg-white text-zinc-950 font-semibold rounded-xl text-sm"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
