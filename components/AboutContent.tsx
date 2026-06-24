"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Shield,
  Heart,
} from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    title: "CEO & Co-Founder",
    bio: "Former operations director who got tired of watching brilliant teams drown in spreadsheets. Built SkyQore to give every business the software it deserves.",
    initials: "AC",
    color: "blue",
  },
  {
    name: "Morgan Patel",
    title: "CTO & Co-Founder",
    bio: "10 years engineering enterprise platforms at Fortune 500 companies. Now applies that same rigor to businesses that need custom solutions but not enterprise prices.",
    initials: "MP",
    color: "violet",
  },
  {
    name: "Jordan Kim",
    title: "Head of Design",
    bio: "Believes great business software should be as intuitive as a consumer app. Leads UX research and product design across every SkyQore build.",
    initials: "JK",
    color: "indigo",
  },
  {
    name: "Sam Rivera",
    title: "Head of Client Success",
    bio: "Ensures every client goes live on time, gets their team trained, and sees measurable ROI within 90 days. The person clients call first.",
    initials: "SR",
    color: "emerald",
  },
  {
    name: "Taylor Brooks",
    title: "Lead Engineer",
    bio: "Full-stack engineer with deep expertise in workflow orchestration and system integrations. Has connected over 80 different platforms to SkyQore builds.",
    initials: "TB",
    color: "cyan",
  },
  {
    name: "Casey Nguyen",
    title: "Solutions Architect",
    bio: "Spends discovery calls in the weeds of your actual process, then designs the software architecture that maps to it exactly.",
    initials: "CN",
    color: "orange",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcomes over outputs",
    body: "We don't count lines of code or features shipped. We measure the hours your team gets back and the revenue you unlock.",
  },
  {
    icon: Users,
    title: "Build with, not for",
    body: "Our best solutions come from deep collaboration — not from taking a brief and disappearing for 3 months.",
  },
  {
    icon: Lightbulb,
    title: "Process-first thinking",
    body: "We learn how your business actually works before we touch a keyboard. The software is the answer, not the starting point.",
  },
  {
    icon: Shield,
    title: "Radical transparency",
    body: "Fixed prices, weekly updates, and no technical jargon. You always know exactly what's being built and why.",
  },
];

const colorMap: Record<string, { avatar: string }> = {
  blue: { avatar: "from-blue-500 to-blue-700" },
  violet: { avatar: "from-violet-500 to-violet-700" },
  indigo: { avatar: "from-indigo-500 to-indigo-700" },
  emerald: { avatar: "from-emerald-500 to-emerald-700" },
  cyan: { avatar: "from-cyan-500 to-cyan-700" },
  orange: { avatar: "from-orange-500 to-orange-600" },
};

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-400/10 rounded-full blur-[80px]" />
        </div>
        <div className="container-max section-padding pt-0 pb-0 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              About SkyQore
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              We started because we were
              <br />
              <span className="text-gradient">sick of the workaround.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
              SkyQore was founded by operators who spent years watching talented teams waste half
              their day on manual work that software should handle. We built the company we wished
              existed.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link href="/#results" className="btn-secondary">
                See Our Results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
                Our Story
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                The spreadsheet that broke the camel's back.
              </h2>
              <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
                <p>
                  In 2019, our co-founder Alex was running operations for a 120-person logistics
                  company. The "system" was a 94-tab Excel file maintained by one person — and
                  when that person went on vacation, the company nearly missed a major client
                  deadline.
                </p>
                <p>
                  They looked at every available SaaS solution. None fit. Custom software
                  agencies quoted 18-month timelines and six-figure retainers. So they built it
                  in-house, and it worked.
                </p>
                <p>
                  Three years later, SkyQore was founded with one goal: make enterprise-grade
                  custom software accessible to businesses that need it — with transparent pricing,
                  fast delivery, and real accountability.
                </p>
                <p>
                  Today we've helped 500+ businesses across North America replace their manual
                  work with software built exactly for them.
                </p>
              </div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "2019", label: "Year Founded", color: "blue" },
                { value: "500+", label: "Businesses Served", color: "violet" },
                { value: "98%", label: "Client Retention", color: "indigo" },
                { value: "2.5M+", label: "Hours Automated", color: "emerald" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-7 flex flex-col gap-1"
                >
                  <span
                    className={`text-4xl font-extrabold ${
                      s.color === "blue"
                        ? "text-blue-600"
                        : s.color === "violet"
                        ? "text-violet-600"
                        : s.color === "indigo"
                        ? "text-indigo-600"
                        : "text-emerald-600"
                    }`}
                  >
                    {s.value}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3 block">
              Our Values
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              What we believe about building software.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-4 shadow-sm">
                  <v.icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Meet the Team
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Operators who became engineers.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Everyone on the SkyQore team has lived the pain of bad business software. That's
              not an accident — it's our hiring criteria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => {
              const colors = colorMap[member.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-card-hover transition-shadow"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.avatar} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <span className="text-white font-extrabold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-3">{member.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Hiring CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl"
          >
            <Heart size={20} className="text-pink-500" />
            <p className="text-slate-600 text-sm font-medium">
              We're always looking for operators-turned-engineers.{" "}
              <a href="mailto:careers@skyqore.com" className="text-blue-600 font-bold hover:underline">
                careers@skyqore.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="container-max text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="SkyQore"
              width={160}
              height={107}
              className="w-36 h-auto rounded-xl opacity-90"
            />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to build something that actually works?
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
            Book a free strategy session. We'll map your process, find the bottlenecks, and
            show you exactly what's possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-9 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-lg"
          >
            Book a Free Session <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
