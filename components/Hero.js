"use client";

import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  Code2,
  Cpu,
  Database,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>FULL-STACK DEVELOPER</span>
            </div>

            {/* Main Title & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Building Powerful{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Web Experiences,
              </span>
              <br />
              <span className="text-slate-200">From Frontend to Backend.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {personalInfo.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-850 transition-all cursor-pointer"
              >
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Connect:
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="p-2 rounded-lg bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.socials.phoneRaw || "+919026840092"}`}
                className="p-2 rounded-lg bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                aria-label="Call or WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Tech Showcase (matching the 3D cyan floating cards in reference) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft radiant ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-teal-500/10 to-transparent blur-3xl rounded-3xl" />

            <div className="relative w-full max-w-md p-6 rounded-3xl bg-[#090e1c]/80 border border-cyan-500/25 shadow-[0_0_50px_rgba(6,182,212,0.2)] backdrop-blur-xl">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">pranjal.fullstack.ts</span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Ready
                </span>
              </div>

              {/* High-Tech Showcase Cards */}
              <div className="space-y-3.5">
                {/* Card 1: Frontend */}
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Frontend Architecture</h4>
                      <p className="text-xs text-slate-400">React.js, Next.js, Modern UI/UX</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Card 2: Backend */}
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-emerald-400/40 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Backend & Databases</h4>
                      <p className="text-xs text-slate-400">Node.js, Express, MongoDB, MySQL</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Card 3: AI Integration */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900/80 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-semibold text-white">AI Capabilities</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono">
                          API
                        </span>
                      </div>
                      <p className="text-xs text-cyan-200/80">Intelligent Features & Automation</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
                </div>
              </div>

              {/* Quick Status Bar */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for New Projects</span>
                </span>
                <span className="text-cyan-400 font-mono text-[11px]">Full-Stack Eng.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Counter Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0a0f1e]/60 border border-white/5 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Logo Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-semibold">
            Core Technologies & Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-80">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Docker",
              "AI APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
