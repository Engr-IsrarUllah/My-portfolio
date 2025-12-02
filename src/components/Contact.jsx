"use client";
import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Copy, Check, Send, Loader2, Phone } from "lucide-react";

import { sendEmail } from "@/app/actions";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(event.currentTarget);

    const result = await sendEmail(formData);

    if (result.success) {
      setFormStatus("success");
      event.target.reset();

      setTimeout(() => {
        setFormStatus("idle");
      }, 4000);
    } else {
      setFormStatus("error");
      alert("Failed to send email. Please try again.");

      setTimeout(() => {
        setFormStatus("idle");
      }, 4000);
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's work <br />
            <span className="text-blue-500">together.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <MapPin size={20} className="text-blue-400" />
              </div>
              <span className="text-lg">{personalInfo.location}</span>
            </div>

   <div className="flex items-center gap-4">
      <div className="p-3 bg-white/5 rounded-full border border-white/10">
        <Mail size={20} className="text-blue-400" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg text-gray-300">
          {personalInfo.email}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-400 hover:text-white"
          title="Copy Email"
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>
    </div>
 
    
    <div className="flex items-center gap-4">
      <div className="p-3 bg-white/5 rounded-full border border-white/10">
        <Phone size={20} className="text-blue-400" /> 
      </div>
      <div className="flex items-center gap-3">
        <a 
          href={`https://wa.me/${personalInfo.phone.replace(/[\s-]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-300 hover:text-green-400 transition-colors"
          title="Chat on WhatsApp"
        >
          {personalInfo.displayPhone || personalInfo.phone} 
        </a>
  
        <a
          href={`tel:${personalInfo.phone.replace(/[\s-]/g, "")}`}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-400 hover:text-white"
          title="Call Directly"
        >
          <Phone size={16} />
        </a>
      </div>
    </div>
       </div>
        </div>

        {/* Right Side: Professional Form */}
        <div className="glass p-8 rounded-3xl border border-white/10 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@example.com"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                formStatus === "success"
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {formStatus === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Sending...
                </>
              ) : formStatus === "success" ? (
                <>
                  Message Sent <Check size={20} />
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
