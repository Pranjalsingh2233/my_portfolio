import { personalInfo } from "@/data/portfolio";
import {
  Code,
  Server,
  Database,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Engineering",
      description:
        "Building responsive, pixel-accurate, and accessible user interfaces using React.js and Next.js that delight users on desktop, tablet, and mobile devices.",
      badge: "React & Next.js",
    },
    {
      icon: Server,
      title: "Scalable Backend & APIs",
      description:
        "Designing modular Node.js and Express.js architectures, high-performance RESTful APIs, and secure authentication flows built for real-world traffic.",
      badge: "Node.js & Express",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "Designing efficient document and relational schemas with MongoDB and MySQL, guaranteeing data integrity, smooth queries, and fast throughput.",
      badge: "MongoDB & MySQL",
    },
    {
      icon: Sparkles,
      title: "AI & Workflow Integration",
      description:
        "Integrating cutting-edge AI APIs into web platforms, enabling smart features, automated workflows, and conversational assistants that drive business value.",
      badge: "AI APIs & Automation",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b16]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Full-Stack Expertise{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              With AI Integration
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.aboutIntroduction}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-[#0c1222]/80 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 backdrop-blur-md relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-medium text-cyan-300/80 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Principles Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-wrap items-center justify-around gap-6 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="font-medium">High Performance & Fast Loading</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span className="font-medium">Maintainable & Clean Code</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span className="font-medium">Scalable Software Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
