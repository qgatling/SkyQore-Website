"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Database,
  Globe,
  BarChart3,
  Plug,
  Users,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    color: "blue",
    title: "Workflow Automation",
    body: "Replace approval chains, document routing, and status tracking with automated flows that run themselves — 24/7, without reminders.",
    outcomes: ["90% fewer approval delays", "Zero missed handoffs"],
  },
  {
    icon: Database,
    color: "violet",
    title: "Data Management Platforms",
    body: "Centralize data scattered across spreadsheets and siloed tools into a single source of truth with clean dashboards built for your team.",
    outcomes: ["One version of the truth", "Real-time visibility"],
  },
  {
    icon: Globe,
    color: "indigo",
    title: "Customer & Client Portals",
    body: "Give clients a branded, self-service experience to submit requests, track project progress, and access documents — on their schedule.",
    outcomes: ["40% fewer support emails", "Higher client satisfaction"],
  },
  {
    icon: BarChart3,
    color: "cyan",
    title: "Reporting & Analytics",
    body: "Turn raw operational data into executive-ready dashboards that update in real time — no more building manual summaries before every board meeting.",
    outcomes: ["Live reporting in seconds", "Better decisions, faster"],
  },
  {
    icon: Plug,
    color: "emerald",
    title: "Integrations & APIs",
    body: "Connect your existing tools and eliminate double-entry across systems. We build the middleware that makes your software stack actually work together.",
    outcomes: ["Eliminate duplicate data entry", "Every tool in sync"],
  },
  {
    icon: Users,
    color: "orange",
    title: "Operations Software",
    body: "Replace generic tools that almost fit with purpose-built software designed around your exact process — the way your business actually works.",
    outcomes: ["Built for your workflow", "Faster team adoption"],
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string; border: string }> = {
  blue: {
    bg: "from-blue-50 to-blue-100/60",
    icon: "bg-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    border: "border-blue-100 hover:border-blue-200",
  },
  violet: {
    bg: "from-violet-50 to-violet-100/60",
    icon: "bg-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    border: "border-violet-100 hover:border-violet-200",
  },
  indigo: {
    bg: "from-indigo-50 to-indigo-100/60",
    icon: "bg-indigo-600",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
    border: "border-indigo-100 hover:border-indigo-200",
  },
  cyan: {
    bg: "from-cyan-50 to-cyan-100/60",
    icon: "bg-cyan-600",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-100",
    border: "border-cyan-100 hover:border-cyan-200",
  },
  emerald: {
    bg: "from-emerald-50 to-emerald-100/60",
    icon: "bg-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    border: "border-emerald-100 hover:border-emerald-200",
  },
  orange: {
    bg: "from-orange-50 to-orange-100/60",
    icon: "bg-orange-500",
    badge: "bg-orange-50 text-orange-700 border-orange-100",
    border: "border-orange-100 hover:border-orange-200",
  },
};

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            Software that replaces the work,{" "}
            <br className="hidden sm:block" />
            not just the tool.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Off-the-shelf software was built for someone else's business. We build for yours.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => {
            const colors = colorMap[sol.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-2xl p-7 border ${colors.border} shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center shadow-sm`}>
                  <sol.icon size={22} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{sol.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{sol.body}</p>
                </div>

                {/* Outcomes */}
                <div className="flex flex-wrap gap-2">
                  {sol.outcomes.map((o) => (
                    <span
                      key={o}
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.badge}`}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <a
                  href="#contact"
                  className="group flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
                >
                  Learn more
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4 text-sm">
            Don't see your exact use case? We've built for industries from healthcare to logistics.
          </p>
          <a href="#contact" className="btn-primary">
            Tell Us What You Need
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
