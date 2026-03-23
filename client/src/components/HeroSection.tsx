/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Hero: Full-viewport, cinematic. Background image with overlay.
 * Animated word-by-word headline. Single strong CTA.
 * Typography: Playfair Display headline, DM Sans body, Space Grotesk CTA.
 */

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const headlineWords = [
    "Stop",
    "Wasting",
    "Hours.",
    "Start",
    "Running",
    "a",
    "Self‑Managing",
    "Business."
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/85 via-[#0D1B2A]/70 to-[#0D1B2A]/95" />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-accent text-[#C87941] text-sm sm:text-base tracking-[0.2em] uppercase mb-6 sm:mb-8"
        >
          Small Business Automation • Done-With-You
        </motion.p>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F5F3] leading-[1.1] mb-6 sm:mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className={`inline-block mr-3 sm:mr-4 ${
                word === "Business." ? "text-[#C87941] italic" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-[#F7F5F3]/70 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light"
        >
          Most business owners lose 10–20 hours every week to repetitive admin.
          I help you automate the work that drains your time — so your business
          runs smoother, faster, and with far less effort.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://calendly.com/bisonblu-info/15-minute-automation-exploration-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent text-base font-semibold px-8 py-4 bg-[#C87941] text-[#0D1B2A] rounded hover:bg-[#d4894f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C87941]/25 hover:-translate-y-0.5"
          >
            Get Your Free Automation Audit
          </a>

          <a
            href="#lead-magnet"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#lead-magnet")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-accent text-base font-medium px-8 py-4 border border-[#C87941]/40 text-[#C87941] rounded hover:bg-[#C87941]/10 transition-all duration-300"
          >
            See 5 Automations You Can Implement Today
          </a>
        </motion.div>

        {/* Name Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="font-accent text-sm text-[#F7F5F3]/40 mt-12 tracking-wide"
        >
          Charl Breytenbach — Efficiency Architect
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#C87941]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
