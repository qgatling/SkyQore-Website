"use client";

import { motion } from "framer-motion";
import { X, Check, AlertTriangle, FileSpreadsheet, Mail, MessageSquare, Clock } from "lucide-react";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "Your 'system' is a 200-row spreadsheet with 47 tabs",
    body: "One person knows how it works. When they're out, everything stops.",
  },
  {
    icon: Mail,
    title: "Status updates live in email threads and Slack messages",
    body: "Nothing is tracked, nothing is visible, and the same questions get asked daily.",
  },
  {
    icon: AlertTriangle,
    title: "Manual data entry happens across 3 different tools every morning",
    body: "Hours of copying, pasting, and hoping nothing gets mis-keyed.",
  },
  {
    icon: Clock,
    title: "New hires take weeks to learn 'how things work around here'",
    body: "Because the process lives in people's heads — not in the software.",
  },
  {
    icon: MessageSquare,
    title: "You can't get real-time reporting without building a manual summary",
    body: "Leadership asks for a report and someone spends half their day pulling it together.",
  },
];

const gains = [
  "Automated workflows that route work to the right person every time",
  "A single platform where your team tracks everything, in real time",
  "Data synchronized automatically across every tool you use",
  "New hires productive within days, not weeks",
  "Live dashboards built for your exact reporting needs",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PainPoints() {
  return (
    <section id="pain" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">
            Sound Familiar?
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            Most businesses are one broken
            <br />
            spreadsheet away from chaos.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            You started with a workaround. Then another. Now your entire operation runs on
            duct tape — and everyone knows it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Pain list */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 text-sm font-bold text-red-500 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
                <X size={14} strokeWidth={3} />
                BEFORE SkyQore
              </span>
            </div>
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex gap-4 p-5 bg-red-50/60 border border-red-100 rounded-2xl group hover:bg-red-50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <pain.icon size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-1 text-sm leading-snug">
                    {pain.title}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">{pain.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* After state */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 text-sm font-bold text-green-600 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">
                <Check size={14} strokeWidth={3} />
                AFTER SkyQore
              </span>
            </div>
            <div className="space-y-4 mb-8">
              {gains.map((gain, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="flex gap-4 p-5 bg-green-50/60 border border-green-100 rounded-2xl hover:bg-green-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <Check size={20} className="text-green-600" strokeWidth={2.5} />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm leading-snug self-center">
                    {gain}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Callout card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-7 text-white shadow-xl shadow-blue-500/20"
            >
              <p className="text-3xl font-extrabold mb-2">23 hours</p>
              <p className="text-blue-100 text-sm font-medium mb-4">
                Average time saved per week per team after deploying a SkyQore solution.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Calculate Your Savings →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
