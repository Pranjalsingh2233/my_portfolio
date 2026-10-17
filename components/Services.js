"use client";

import { servicesData } from "@/data/portfolio";
import {
  Layers,
  Layout,
  Server,
  Sparkles,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const iconMap = {
    Layers: Layers,
    Layout: Layout,
    Server: Server,
    Sparkles: Sparkles,
    Wrench: Wrench,
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
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
    <section id="services" className="py-24 relative overflow-hidden bg-[#060913]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/3 w-[550px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span>SERVICES OFFERED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Web Solutions For{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Engineering robust digital products designed for high performance, seamless user engagement, and measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-md relative ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#0e162b] via-[#090f1f] to-[#070b16] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    : "bg-[#0b101f]/85 border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
                }`}
              >
                <div>
                  {/* Service Icon & Tagline */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300/80 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Card CTA */}
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 group-hover:translate-x-1 transition-all pt-2 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}

          {/* Call to action highlight card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 border border-cyan-500/35 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-6">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Have a Custom Scope?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Every project has unique requirements. Whether you need an end-to-end web platform or specialized AI features, let's architect a solution that fits your exact goals.
              </p>
            </div>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
