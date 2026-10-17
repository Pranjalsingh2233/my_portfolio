import { projectsData } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";
import {
  Users,
  ShoppingBag,
  Bot,
  ArrowUpRight,
  Sparkles,
  Download,
  CheckCircle2,
  RefreshCw,
  Search,
  ExternalLink,
} from "lucide-react";

export default function Projects() {
  const getProjectPreview = (type, title) => {
    switch (type) {
      case "leadgen":
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-900 flex flex-col justify-between p-5 overflow-hidden rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Lead Intelligence</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Scraping</span>
              </span>
            </div>

            {/* Lead Gen UI Mockup Elements */}
            <div className="relative z-10 bg-slate-900/85 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800/80 px-2 py-1 rounded-md border border-white/5 flex-1">
                  <Search className="w-3 h-3 text-cyan-400" />
                  <span className="truncate">SaaS Companies • United States</span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono font-semibold">
                  Export CSV
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] p-1 rounded bg-slate-800/40">
                  <span className="text-white font-medium">Acme Cloud Inc.</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-1 rounded bg-slate-800/40">
                  <span className="text-white font-medium">Apex Marketing Labs</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Ambient Background Grid & Glow */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />
          </div>
        );

      case "shopify":
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 flex flex-col justify-between p-5 overflow-hidden rounded-2xl border border-white/5 group-hover:border-emerald-500/30 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>Shopify Scraper & Sync</span>
              </span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                <span>AI Enriched</span>
              </span>
            </div>

            {/* Shopify Importer UI Mockup Elements */}
            <div className="relative z-10 bg-slate-900/85 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-white">Bulk Product Editor</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Store Connected
                </span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-1 mb-2">
                URL Scrape → AI Descriptions & SEO → Bulk Import to Store
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  Bulk Edit
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 flex items-center gap-1">
                  <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Auto-Sync
                </span>
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full" />
          </div>
        );

      case "chatgpt":
      default:
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 flex flex-col justify-between p-5 overflow-hidden rounded-2xl border border-white/5 group-hover:border-sky-500/30 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-500/30">
                <Bot className="w-3.5 h-3.5 text-sky-400" />
                <span>Conversational AI</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded">
                OpenAI API
              </span>
            </div>

            {/* ChatGPT UI Mockup Elements */}
            <div className="relative z-10 bg-slate-900/85 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-xs font-bold text-white">Streaming Assistant</span>
              </div>
              <div className="p-2 rounded bg-slate-950/80 border border-white/5 font-mono text-[10px] text-cyan-300">
                <code>{`// AI Response: Generating solution...`}</code>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                  Chat History
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                  Code Highlighting
                </span>
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070b16]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span>PORTFOLIO & WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A showcase of full-stack web applications, AI automation tools, and e-commerce platforms engineered for real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl bg-[#0c1222]/85 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-300 p-6 backdrop-blur-md"
            >
              <div>
                {/* Visual Preview Graphic */}
                <div className="mb-6 overflow-hidden rounded-2xl">
                  {getProjectPreview(project.previewType, project.title)}
                </div>

                {/* Category & Title */}
                <div className="mb-3">
                  <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all"
                  title="View Project"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-white/10 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
