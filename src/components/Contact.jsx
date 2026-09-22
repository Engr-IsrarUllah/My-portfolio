"use client";
import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2,
  Phone,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");
  const [fallbackMailto, setFallbackMailto] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("submitting");
    setStatusMessage("");
    setFallbackMailto("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setFormStatus("success");
        setStatusMessage("Message sent successfully! I will reply to you as soon as possible.");
        form.reset();
        setTimeout(() => {
          setFormStatus("idle");
          setStatusMessage("");
        }, 6000);
      } else {
        setFormStatus("error");
        setStatusMessage(
          result.error || "Failed to deliver email through server. You can send directly using the button below."
        );
        if (result.fallbackMailto) {
          setFallbackMailto(result.fallbackMailto);
        }
      }
    } catch (err) {
      setFormStatus("error");
      setStatusMessage("An unexpected connection error occurred. Please use direct email.");
    }
  }

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#09090b] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side: Info */}
        <div>
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Let&apos;s build something <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-100 via-zinc-300 to-zinc-400">
              exceptional.
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mb-10 leading-relaxed">
            I am currently open to full-time engineering roles, technical contracting, and consulting on distributed web platforms or AI systems.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <div className="p-2.5 bg-zinc-800/80 rounded-xl text-zinc-300">
                <MapPin size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Location</div>
                <span className="text-sm font-medium text-zinc-200">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-zinc-800/80 rounded-xl text-zinc-300">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-zinc-200 hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 transition-colors border border-zinc-700/60 text-zinc-400 hover:text-white cursor-pointer"
                title="Copy Email"
              >
                {copied ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-zinc-800/80 rounded-xl text-zinc-300">
                  <Phone size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Phone & WhatsApp</div>
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[\s-]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.displayPhone || personalInfo.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/[\s-]/g, "")}`}
                className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 transition-colors border border-zinc-700/60 text-zinc-400 hover:text-white"
                title="Direct Call"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Form */}
        <div className="p-8 md:p-9 rounded-3xl bg-zinc-900/70 border border-zinc-800/80 shadow-2xl shadow-black/50 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. John Doe"
                  required
                  className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Describe your project, timeline, or inquiry..."
                required
                className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Status Messages */}
            {formStatus === "success" && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <Check size={16} className="shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {formStatus === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-zinc-300 text-xs space-y-2.5">
                <div className="flex items-start gap-2 text-red-400 font-medium">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
                {fallbackMailto && (
                  <div className="pt-2 border-t border-red-500/20">
                    <a
                      href={fallbackMailto}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-colors"
                    >
                      <Mail size={13} />
                      Send via Email Client directly
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                formStatus === "success"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-zinc-950 hover:bg-zinc-200"
              }`}
            >
              {formStatus === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" size={17} /> Sending Message...
                </>
              ) : formStatus === "success" ? (
                <>
                  Message Sent <Check size={17} />
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
