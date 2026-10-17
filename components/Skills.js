import { skillsData } from "@/data/portfolio";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Skills() {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Database: Database,
    Cpu: Cpu,
    Sparkles: Sparkles,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#060913]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span>TECH STACK & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & Technologies Powering{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Scalable Systems
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A comprehensive, modern technology stack spanning frontend interfaces, backend engines, persistent databases, and intelligent AI integrations.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryItem, idx) => {
            const Icon = iconMap[categoryItem.icon] || Layout;
            const isAI = categoryItem.category === "AI Integration";

            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl transition-all duration-300 relative group flex flex-col justify-between ${
                  isAI
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0e162b] to-[#0a1020] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    : "bg-[#0b101f]/80 border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {categoryItem.category}
                        </h3>
                        <span className="text-xs text-slate-400">Production Ready</span>
                      </div>
                    </div>
                    {isAI && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30">
                        Specialization
                      </span>
                    )}
                  </div>

                  {/* Category Description */}
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {categoryItem.description}
                  </p>
                </div>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                  {categoryItem.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all cursor-default"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
