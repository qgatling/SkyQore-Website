"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    company: "Regional CPA Firm",
    industry: "Professional Services",
    challenge:
      "A 60-person accounting firm ran month-end close entirely on a 47-tab Excel workbook. One analyst owned the process and the firm was blocked when they were unavailable.",
    solution:
      "We built a custom month-end close platform with automated task routing, real-time status tracking, and manager dashboards.",
    metrics: [
      { value: "87%", label: "Reduction in close time", icon: Clock },
      { value: "3 hrs", label: "Month-end down from 3 days", icon: TrendingUp },
      { value: "100%", label: "Team visibility, zero calls", icon: Users },
    ],
    quote:
      '"We were completely dependent on one person. Now anyone on the team can run close. It changed our entire operating model."',
    person: "Sarah M., COO",
    color: "blue",
  },
  {
    company: "Crestline Logistics",
    industry: "Transportation & Logistics",
    challenge:
      "Dispatch coordinators manually entered route and driver data into three separate systems every morning — a process taking 3 hours and producing frequent errors.",
    solution:
      "A unified dispatch operations platform that automatically syncs route data, generates driver manifests, and produces instant status reports.",
    metrics: [
      { value: "3 FTEs", label: "Worth of manual work eliminated", icon: Users },
      { value: "$240K", label: "Saved annually on labor", icon: DollarSign },
      { value: "99.2%", label: "Data accuracy (up from 91%)", icon: TrendingUp },
    ],
    quote:
      '"The software paid for itself in 11 weeks. Our coordinators now handle twice the routes with the same team."',
    person: "Marcus T., VP Operations",
    color: "violet",
  },
  {
    company: "Apex Financial Group",
    industry: "Financial Services",
    challenge:
      "Sales managers spent 6+ hours weekly manually compiling pipeline reports from individual reps. Leadership made decisions on data that was always 5 days old.",
    solution:
      "Real-time sales intelligence platform pulling from their CRM and external data sources, with automated executive dashboards delivered every morning.",
    metrics: [
      { value: "40%", label: "Increase in sales capacity", icon: TrendingUp },
      { value: "6 hrs", label: "Saved per manager per week", icon: Clock },
      { value: "Live", label: "Pipeline data, always current", icon: DollarSign },
    ],
    quote:
      '"We went from gut-feel pipeline reviews to data-driven decisions. Our close rate improved 18% in one quarter."',
    person: "James R., VP Sales",
    color: "emerald",
  },
];

const colorMap: Record<
  string,
  { bg: string; badge: string; accent: string; metric: string; border: string }
> = {
  blue: {
    bg: "from-blue-600 to-blue-800",
    badge: "bg-blue-100 text-blue-700",
    accent: "text-blue-400",
    metric: "bg-blue-50 border-blue-100",
    border: "border-blue-100",
  },
  violet: {
    bg: "from-violet-600 to-violet-900",
    badge: "bg-violet-100 text-violet-700",
    accent: "text-violet-400",
    metric: "bg-violet-50 border-violet-100",
    border: "border-violet-100",
  },
  emerald: {
    bg: "from-emerald-600 to-emerald-900",
    badge: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-400",
    metric: "bg-emerald-50 border-emerald-100",
    border: "border-emerald-100",
  },
};

export default function Results() {
  return (
    <section id="results" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">
            Client Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            Real outcomes for
            <br />
            real businesses.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We don't measure success by lines of code shipped. We measure it by the hours your
            team gets back and the revenue you unlock.
          </p>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-8">
          {caseStudies.map((cs, i) => {
            const colors = colorMap[cs.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-5">
                  {/* Left: gradient panel */}
                  <div
                    className={`lg:col-span-2 bg-gradient-to-br ${colors.bg} p-8 text-white flex flex-col justify-between`}
                  >
                    <div>
                      <span className="inline-block bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                        {cs.industry}
                      </span>
                      <h3 className="text-2xl font-extrabold mb-3">{cs.company}</h3>
                      <p className="text-white/75 text-sm leading-relaxed mb-6">
                        <strong className="text-white">Challenge:</strong> {cs.challenge}
                      </p>
                      <p className="text-white/75 text-sm leading-relaxed">
                        <strong className="text-white">Solution:</strong> {cs.solution}
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-white/90 text-sm italic mb-2">{cs.quote}</p>
                      <p className="text-white/60 text-xs font-semibold">— {cs.person}</p>
                    </div>
                  </div>

                  {/* Right: metrics */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                        Measurable Impact
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        {cs.metrics.map((m, j) => (
                          <div
                            key={j}
                            className={`p-5 rounded-2xl border ${colors.metric} text-center`}
                          >
                            <p className="text-3xl font-extrabold text-slate-900 mb-1">
                              {m.value}
                            </p>
                            <p className="text-xs text-slate-500 font-medium leading-snug">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline indicators */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <span className="w-2 h-2 bg-slate-300 rounded-full" />
                        Discovery & build: 8 weeks
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        ROI achieved: within 90 days
                      </div>
                      <a
                        href="#contact"
                        className="flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 transition-colors ml-auto"
                      >
                        Read full story
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
