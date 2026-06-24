"use client";

import { motion } from "framer-motion";
import { Search, Cpu, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    color: "blue",
    title: "Discovery",
    subtitle: "We map your current process",
    body: "We spend time with your team to understand exactly how work flows today — where the bottlenecks are, where errors happen, and what 'fixed' actually looks like for your business. No generic assessments. Real conversations.",
    detail: "Typical timeline: 1–2 weeks",
    deliverable: "Process map + solution blueprint",
  },
  {
    number: "02",
    icon: Cpu,
    color: "violet",
    title: "Build",
    subtitle: "We engineer your custom solution",
    body: "Our team designs and develops your platform from the ground up — built around your exact workflow, not a general template. You see progress every week. We iterate based on your feedback before we ship a single feature.",
    detail: "Typical timeline: 4–12 weeks",
    deliverable: "Fully tested, ready-to-launch software",
  },
  {
    number: "03",
    icon: Rocket,
    color: "green",
    title: "Launch & Scale",
    subtitle: "We deploy, train, and stay on",
    body: "We handle the rollout, train your team, and monitor performance after go-live. As your business grows, we're there to refine and expand — so your software never becomes the thing holding you back.",
    detail: "Ongoing support & iteration",
    deliverable: "Team trained + system live",
  },
];

const colorMap: Record<string, { ring: string; icon: string; num: string; line: string }> = {
  blue: {
    ring: "ring-blue-200 bg-blue-50",
    icon: "bg-blue-600",
    num: "text-blue-200",
    line: "from-blue-200 to-violet-200",
  },
  violet: {
    ring: "ring-violet-200 bg-violet-50",
    icon: "bg-violet-600",
    num: "text-violet-200",
    line: "from-violet-200 to-green-200",
  },
  green: {
    ring: "ring-emerald-200 bg-emerald-50",
    icon: "bg-emerald-600",
    num: "text-emerald-200",
    line: "",
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            From "we need something better"
            <br />
            to live in 90 days.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We've built a repeatable process that delivers fast, keeps you in control, and produces
            software your team will actually use.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const colors = colorMap[step.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15, duration: 0.55, ease: "easeOut" }}
                  className="relative flex flex-col"
                >
                  {/* Step icon */}
                  <div className="relative flex items-center mb-8">
                    <div
                      className={`relative z-10 w-28 h-28 rounded-2xl ${colors.ring} ring-4 flex items-center justify-center`}
                    >
                      {/* Big number background */}
                      <span
                        className={`absolute text-7xl font-black ${colors.num} select-none leading-none`}
                      >
                        {step.number}
                      </span>
                      {/* Icon */}
                      <div
                        className={`relative z-10 w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center shadow-lg`}
                      >
                        <step.icon size={26} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Step {step.number}
                    </p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-4">{step.subtitle}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{step.body}</p>

                    {/* Meta */}
                    <div className="flex flex-col gap-2.5 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-slate-300 flex-shrink-0" />
                        <span className="text-slate-500">{step.detail}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span className="font-semibold text-slate-700">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center sm:text-left">
            <p className="font-bold text-xl mb-1">Our commitment to you</p>
            <p className="text-slate-400 text-sm max-w-lg">
              Weekly progress updates. No black boxes. You'll see exactly what's being built every
              step of the way — and we don't invoice the next phase until you're satisfied with the
              last.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 group flex items-center gap-2 bg-white text-slate-900 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Start Your Discovery
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
