"use client";

import { useState } from "react";
import { personalInfo, projectTypes, budgetRanges } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { sendContactEmail } from "@/actions/resend";
import {
  Mail,
  Phone,
  Send,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web Application",
    budget: "Flexible / Not sure yet",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: "Please enter your name." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        loading: false,
        success: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({
        loading: false,
        success: false,
        error: "Please share a few details about your project (at least 10 characters).",
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await sendContactEmail(formData);

      if (response?.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
        });
        setFormData({
          name: "",
          email: "",
          projectType: "Full-Stack Web Application",
          budget: "Flexible / Not sure yet",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error:
            response?.error ||
            "Unable to send your inquiry at this moment. Please try again or email directly.",
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || "A network error occurred. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070b16]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Project in Mind?{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Let&apos;s Build Together
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Have a new application idea, need to expand an existing codebase, or want to integrate AI capabilities? Send an inquiry and let&apos;s start the conversation.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Availability Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Contact Card */}
            <div className="p-8 rounded-3xl bg-[#0c1222]/85 border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-6">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Let&apos;s Discuss Your Vision
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                I assist clients, startups, and companies in designing, developing, and deploying modern web applications and AI workflows.
              </p>

              {/* Contact Info List */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all text-slate-200 text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                    <span className="font-medium text-xs sm:text-sm">{personalInfo.socials.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.socials.phoneRaw || "+919026840092"}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all text-slate-200 text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Phone / WhatsApp</span>
                    <span className="font-medium text-xs sm:text-sm">{personalInfo.socials.phone || "+91 9026840092"}</span>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all text-slate-200 text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">LinkedIn Profile</span>
                    <span className="font-medium text-xs sm:text-sm">linkedin.com/in/pranjalsingh</span>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all text-slate-200 text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">GitHub Repositories</span>
                    <span className="font-medium text-xs sm:text-sm">github.com/pranjalsingh</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Status Pill Card */}
            <div className="p-6 rounded-2xl bg-[#090f1e]/70 border border-white/5 backdrop-blur-sm flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Typical response time: Under 24 hours</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1222]/85 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Fill in the details below and I&apos;ll get back to you promptly with next steps.
              </p>

              {/* Success Notification */}
              {status.success && (
                <div className="mb-6 p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 text-sm flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Thank you for your inquiry!</p>
                    <p className="text-xs text-cyan-200 mt-1">
                      Your message has been captured. I will review your requirements and reply to your email address shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status.error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p>{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-slate-900 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Project Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and any key requirements..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
