"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, CheckCircle, X, Check } from "lucide-react";

const pains = [
  {
    title: "Spreadsheets everywhere:",
    body: "Hard to update, easy to overwrite, and full of outdated data.",
  },
  {
    title: "Missed requests:",
    body: "Customer emails, calls, and texts get lost in the noise.",
  },
  {
    title: "Paper forms:",
    body: "Lost pages, messy writing, and double-entry admin work.",
  },
  {
    title: "Text message chaos:",
    body: "Staff chasing down status updates on private chat threads.",
  },
  {
    title: "Manual follow-up:",
    body: "Team members spending hours copy-pasting emails and tracking dates.",
  },
  {
    title: "Disconnected tools:",
    body: "Jumping back and forth between 5 tabs that do not speak to each other.",
  },
  {
    title: "No clear visibility:",
    body: "Owners cannot see job progress or business metrics without asking.",
  },
  {
    title: "Customers asking for updates:",
    body: "Constant phone interruptions regarding project statuses.",
  },
];

const gains = [
  {
    title: "Custom dashboards:",
    body: "Tailored charts, records, and summaries designed for your business.",
  },
  {
    title: "Service request portals:",
    body: "One central link for all clients to submit requests cleanly.",
  },
  {
    title: "Digital intake forms:",
    body: "Structured web forms that route data directly into your database.",
  },
  {
    title: "Centralized communication:",
    body: "Log updates, notes, and photos inside the job record.",
  },
  {
    title: "Automated workflows:",
    body: "Automatic email notifications when job milestones are met.",
  },
  {
    title: "One simple system:",
    body: "All technicians, clients, and dispatchers on the exact same page.",
  },
  {
    title: "Real-time tracking:",
    body: "Kanban boards and logs showing status at a single glance.",
  },
  {
    title: "Better customer experience:",
    body: "Clients log in, submit information, and view milestones.",
  },
];

export default function WhySkyQore() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt=""
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#0A0F1E]/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Logo on the background */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="SkyQore"
              width={220}
              height={147}
              className="w-48 sm:w-56 h-auto rounded-2xl"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Is your business running on{" "}
            <span className="text-orange-400">too many manual processes?</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Most businesses do not need more apps. They need one better system. If your team is
            chasing updates through spreadsheets, text threads, paper forms, and disconnected tools,
            SkyQore can help turn that chaos into a simple custom software solution.
          </p>
        </motion.div>

        {/* Two-column cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Left — Pain card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-7"
          >
            {/* Card header */}
            <div className="flex items-center gap-2.5 mb-7 pb-4 border-b border-slate-700/60">
              <AlertTriangle size={20} className="text-orange-400 flex-shrink-0" />
              <span className="text-orange-400 font-bold text-base">
                Current Headache (Without Custom Software)
              </span>
            </div>

            {/* Pain list */}
            <ul className="flex flex-col gap-4">
              {pains.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <X size={11} className="text-red-400" strokeWidth={3} />
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-white font-semibold">{item.title}</strong>{" "}
                    {item.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Gain card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-7"
          >
            {/* Card header */}
            <div className="flex items-center gap-2.5 mb-7 pb-4 border-b border-slate-700/60">
              <CheckCircle size={20} className="text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-400 font-bold text-base">
                Better System (Built By SkyQore)
              </span>
            </div>

            {/* Gain list */}
            <ul className="flex flex-col gap-4">
              {gains.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Check size={11} className="text-emerald-400" strokeWidth={3} />
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-white font-semibold">{item.title}</strong>{" "}
                    {item.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-400/40 hover:scale-[1.02] transition-all duration-200 text-base"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
