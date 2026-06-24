"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Calendar,
  ArrowRight,
  MessageSquare,
  Zap,
} from "lucide-react";

const channels = [
  {
    icon: Calendar,
    title: "Book a Strategy Session",
    desc: "45 minutes. Free. Walk away with a clear picture of what's possible for your business.",
    cta: "Book on Calendly",
    href: "#",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Us Directly",
    desc: "For general inquiries, partnership requests, or if you prefer written communication.",
    cta: "hello@skyqore.com",
    href: "mailto:hello@skyqore.com",
    color: "violet",
  },
  {
    icon: Phone,
    title: "Call Our Team",
    desc: "Available Monday–Friday, 9am–6pm ET. We're real people who pick up the phone.",
    cta: "1-800-555-1234",
    href: "tel:+18005551234",
    color: "emerald",
  },
];

const guarantees = [
  "We respond within 2 business hours",
  "No sales scripts — real conversations",
  "You'll leave with clear next steps",
  "Zero obligation to move forward",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-400/10 rounded-full blur-[80px]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Let's Talk
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
              Start with a conversation.
              <br />
              <span className="text-gradient">Not a proposal.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Book a free 45-minute session with one of our process engineers. No pitch deck.
              No sales pressure. Just a real look at what's slowing your business down and
              what we can do about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Channels */}
      <section className="pb-8 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5 mb-4">
            {channels.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex flex-col gap-3 p-6 rounded-2xl border shadow-sm hover:shadow-card-hover transition-all group ${
                  c.color === "blue"
                    ? "border-blue-100 hover:border-blue-200 bg-blue-50/40"
                    : c.color === "violet"
                    ? "border-violet-100 hover:border-violet-200 bg-violet-50/40"
                    : "border-emerald-100 hover:border-emerald-200 bg-emerald-50/40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    c.color === "blue"
                      ? "bg-blue-600"
                      : c.color === "violet"
                      ? "bg-violet-600"
                      : "bg-emerald-600"
                  }`}
                >
                  <c.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">{c.title}</p>
                  <p className="text-slate-500 text-sm mb-3">{c.desc}</p>
                  <span
                    className={`text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all ${
                      c.color === "blue"
                        ? "text-blue-600"
                        : c.color === "violet"
                        ? "text-violet-600"
                        : "text-emerald-600"
                    }`}
                  >
                    {c.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main form section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-5">
                What happens in your strategy session.
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                {[
                  {
                    step: "01",
                    title: "We listen first",
                    desc: "Tell us about your business, your team, and the manual work that's slowing you down. No agenda — just discovery.",
                  },
                  {
                    step: "02",
                    title: "We map it out",
                    desc: "We'll sketch the current process and identify where automation would have the highest impact.",
                  },
                  {
                    step: "03",
                    title: "We show you what's possible",
                    desc: "You'll see examples of similar solutions we've built and get a realistic sense of scope, timeline, and cost.",
                  },
                  {
                    step: "04",
                    title: "You decide",
                    desc: "If it makes sense to move forward, we send a detailed proposal. No obligation. No hard sell.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-black">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 mb-0.5">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-blue-600" />
                  <p className="font-bold text-slate-800 text-sm">Our commitment to you</p>
                </div>
                <div className="flex flex-col gap-2">
                  {guarantees.map((g, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-slate-600 text-sm">{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-slate-400 text-xs">
                <Clock size={13} />
                <span>Average response time: 1.4 business hours</span>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                    You're on the calendar!
                  </h3>
                  <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                    Check your email for a confirmation and a Calendly link to pick your
                    preferred time. We're looking forward to it.
                  </p>
                  <a
                    href="/"
                    className="btn-secondary inline-flex"
                  >
                    Back to Home
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Book Your Free Strategy Session
                  </h3>
                  <p className="text-slate-500 text-sm mb-7">
                    45 minutes. No pitch. Just a real look at your biggest operational bottleneck.
                  </p>

                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Mitchell"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@yourcompany.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Corp"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                          Company Size
                        </label>
                        <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors bg-white">
                          <option value="">Select…</option>
                          <option>1–10 employees</option>
                          <option>11–50 employees</option>
                          <option>51–200 employees</option>
                          <option>201–500 employees</option>
                          <option>500+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                        What's the biggest manual process slowing you down? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="e.g., We manually copy client data between our CRM and accounting software every morning. It takes 2 hours and someone always makes a mistake…"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                        How did you hear about us?
                      </label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-colors bg-white">
                        <option value="">Select…</option>
                        <option>Google search</option>
                        <option>LinkedIn</option>
                        <option>Referral from a colleague</option>
                        <option>Existing client</option>
                        <option>Blog / article</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 btn-primary py-4 text-base mt-2"
                    >
                      <Calendar size={18} />
                      Book My Free Strategy Session
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-slate-400 text-xs">
                      We'll respond within 2 business hours with available times. Your information
                      is never shared or sold.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
