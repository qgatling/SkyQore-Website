"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, CheckCircle } from "lucide-react";

const points = [
  "We'll map your current process in detail",
  "Identify the highest-ROI automation opportunities",
  "Give you a clear scope, timeline, and fixed price",
  "No obligation. No pushy sales calls.",
];

export default function CTASection() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0D1B4B] via-[#111827] to-[#0A0F1E]"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(29,78,216,0.12),transparent)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Free Strategy Session
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Ready to stop working{" "}
              <span className="text-gradient">around</span> your
              <br />
              software?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free 45-minute strategy session with one of our process engineers. We'll
              show you exactly what's possible — with no obligation and no PowerPoint slides.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-slate-300 text-sm font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex -space-x-2">
                {["blue", "violet", "emerald", "orange"].map((c, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-slate-800 flex items-center justify-center text-[10px] font-bold text-white ${
                      c === "blue"
                        ? "bg-blue-600"
                        : c === "violet"
                        ? "bg-violet-600"
                        : c === "emerald"
                        ? "bg-emerald-600"
                        : "bg-orange-500"
                    }`}
                  >
                    {["SM", "JR", "PS", "DK"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-bold">500+ businesses served</p>
                <p className="text-slate-400 text-xs">Average ROI within 90 days of launch</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Book Your Free Strategy Session
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              45 minutes. No pitch. Just a clear picture of what's possible.
            </p>

            <form className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sarah"
                    className="w-full bg-white/10 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mitchell"
                    className="w-full bg-white/10 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="sarah@yourcompany.com"
                  className="w-full bg-white/10 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full bg-white/10 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                  What's the biggest manual process slowing you down?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., We manually copy data between 3 systems every morning and it takes 2 hours..."
                  className="w-full bg-white/10 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01] transition-all duration-200"
              >
                <Calendar size={18} />
                Book My Free Session
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-center text-slate-500 text-xs">
                We respond within 2 business hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
