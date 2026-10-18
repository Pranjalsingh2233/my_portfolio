"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { Mail, Phone, Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#05070e] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle cyan ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  {personalInfo.name}
                </span>
                <span className="block text-[11px] font-medium tracking-wider uppercase text-cyan-400 -mt-0.5">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Building modern, responsive, and scalable web applications from frontend interfaces to reliable backend systems with AI capabilities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.socials.phoneRaw || "+919026840092"}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                aria-label="Call or WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-cyan-400 transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
