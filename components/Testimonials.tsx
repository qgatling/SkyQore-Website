"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were running our entire operation on a Google Sheet with 47 tabs. SkyQore built us a platform that took something that took 3 hours every end-of-month and cut it down to 11 minutes.",
    name: "Sarah M.",
    title: "COO",
    company: "Regional CPA Firm",
    initials: "SM",
    color: "blue",
    stars: 5,
  },
  {
    quote:
      "The ROI on our client portal paid for itself in 8 weeks. Our sales team's capacity went up 40% because they stopped doing admin work and started actually selling.",
    name: "James R.",
    title: "VP Sales",
    company: "Apex Financial Group",
    initials: "JR",
    color: "violet",
    stars: 5,
  },
  {
    quote:
      "We'd tried three different off-the-shelf products. None of them fit our process. SkyQore built exactly what we needed and delivered it two weeks early. It's been running flawlessly for 18 months.",
    name: "Priya S.",
    title: "Director of Operations",
    company: "Crestline Logistics",
    initials: "PS",
    color: "emerald",
    stars: 5,
  },
  {
    quote:
      "Before SkyQore, every new hire took 6 weeks to get productive. Now they're up and running in 4 days because the software guides them through every step of our process.",
    name: "David K.",
    title: "CEO",
    company: "Ironveil Technologies",
    initials: "DK",
    color: "orange",
    stars: 5,
  },
  {
    quote:
      "I was skeptical about custom software because of stories about projects going over budget and over time. SkyQore delivered exactly on scope, on time, and on budget. They've become a genuine extension of our team.",
    name: "Lisa T.",
    title: "CFO",
    company: "Novara Health Systems",
    initials: "LT",
    color: "cyan",
    stars: 5,
  },
  {
    quote:
      "Our dispatch team used to dread Monday mornings. Now it's their favorite day of the week — everything is automated, routes are pre-assigned, and reports generate themselves overnight.",
    name: "Marcus T.",
    title: "VP Operations",
    company: "Summit Freight",
    initials: "MT",
    color: "indigo",
    stars: 5,
  },
];

const colorMap: Record<string, { avatar: string; quote: string }> = {
  blue: { avatar: "from-blue-500 to-blue-700", quote: "text-blue-400" },
  violet: { avatar: "from-violet-500 to-violet-700", quote: "text-violet-400" },
  emerald: { avatar: "from-emerald-500 to-emerald-700", quote: "text-emerald-400" },
  orange: { avatar: "from-orange-500 to-orange-700", quote: "text-orange-400" },
  cyan: { avatar: "from-cyan-500 to-cyan-700", quote: "text-cyan-400" },
  indigo: { avatar: "from-indigo-500 to-indigo-700", quote: "text-indigo-400" },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
            What Clients Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            The results speak for themselves.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We've helped businesses across every industry replace manual work with software that
            just works.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const colors = colorMap[t.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-7 flex flex-col gap-5 hover:border-slate-600 transition-colors"
              >
                {/* Quote icon */}
                <Quote size={28} className={`${colors.quote} opacity-60`} />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>

                {/* Person */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/50">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.avatar} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/80 border border-slate-700 rounded-2xl px-8 py-5">
            <div className="flex -space-x-2">
              {["blue", "violet", "emerald", "orange", "cyan"].map((c, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${colorMap[c].avatar} border-2 border-slate-800 flex items-center justify-center`}
                >
                  <span className="text-white text-[10px] font-bold">★</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">4.97 / 5.0 average rating</p>
              <p className="text-slate-400 text-xs">Based on 200+ client reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
