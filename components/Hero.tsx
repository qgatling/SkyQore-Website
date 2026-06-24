"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, TrendingUp, Clock } from "lucide-react";

const animatedWords = [
  "manual approvals",
  "data entry",
  "status tracking",
  "client onboarding",
  "invoice processing",
  "report building",
];

const recentActivity = [
  { label: "Invoice #2847 approved", dept: "Finance", time: "2m ago", done: true },
  { label: "Q3 Sales Report generated", dept: "Operations", time: "8m ago", done: true },
  { label: "Client onboarding complete", dept: "Sales", time: "15m ago", done: true },
  { label: "Contract renewal queued", dept: "Legal", time: "1h ago", done: false },
];

const kpis = [
  { label: "Tasks Automated", value: "2,847", delta: "+18%", color: "blue", icon: CheckCircle },
  { label: "Hours Saved", value: "312 hrs", delta: "this month", color: "violet", icon: Clock },
  { label: "Revenue On Track", value: "$1.2M", delta: "↑ 24% YoY", color: "green", icon: TrendingUp },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % animatedWords.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="SkyQore — Elevating Innovation"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer dark overlay: darken the image enough to read text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A]/85 via-[#060D1A]/75 to-[#060D1A]/90" />
        {/* Subtle blue tint to match brand */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-violet-900/20" />
      </div>

      {/* Animated glow orbs (subtle on dark bg) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-violet-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Trusted by 500+ businesses across North America
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-5 drop-shadow-lg">
          Stop Running Your
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Business on Spreadsheets.
          </span>
        </h1>

        {/* Sub-headline with animated word */}
        <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
          We build custom software that eliminates{" "}
          <span
            style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}
            className={`inline-block font-bold text-blue-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {animatedWords[wordIndex]}
          </span>{" "}
          — freeing your team to focus on what actually grows the business.
        </p>

        {/* Social proof line */}
        <p className="text-sm text-white/55 mb-10">
          Clients save an average of{" "}
          <strong className="text-white font-bold">23 hours per week</strong> within 60 days
          of going live.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 sm:mb-20">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-lg px-9 py-4 rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-200"
          >
            Get a Free Assessment
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <Link
            href="/#results"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg px-9 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200"
          >
            See Client Results
          </Link>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent blur-2xl rounded-3xl pointer-events-none" />

          <div className="relative rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden bg-white">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-3 bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs text-slate-400 text-left">
                app.skyqore.com/dashboard
              </div>
              <div className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Live
              </div>
            </div>

            {/* App layout */}
            <div className="flex h-[380px] sm:h-[440px]">
              {/* Sidebar with actual logo */}
              <aside className="hidden sm:flex w-52 bg-[#060D1A] flex-col p-4 gap-1">
                <div className="mb-3 px-1 pt-1">
                  <Image
                    src="/logo.png"
                    alt="SkyQore"
                    width={150}
                    height={100}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest px-2 mb-1 font-semibold">
                  Main
                </p>
                {["Dashboard", "Workflows", "Approvals", "Reports", "Clients", "Settings"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                        i === 0
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          i === 0 ? "bg-blue-300" : "bg-slate-600"
                        }`}
                      />
                      {item}
                    </div>
                  )
                )}
              </aside>

              {/* Main content */}
              <div className="flex-1 bg-slate-50 p-5 overflow-auto text-left">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="font-bold text-slate-800 text-base">Operations Overview</h2>
                    <p className="text-slate-400 text-xs">Updated in real time</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-500 font-medium">
                      Jun 2025
                    </span>
                    <span className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium">
                      Export
                    </span>
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {kpis.map((k) => (
                    <div
                      key={k.label}
                      className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                    >
                      <p className="text-[11px] text-slate-400 font-medium mb-1">{k.label}</p>
                      <p className="text-xl font-extrabold text-slate-800">{k.value}</p>
                      <p
                        className={`text-[11px] font-bold mt-0.5 ${
                          k.color === "green"
                            ? "text-green-500"
                            : k.color === "blue"
                            ? "text-blue-500"
                            : "text-violet-500"
                        }`}
                      >
                        {k.delta}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-600">Monthly Goal Progress</span>
                    <span className="text-xs font-bold text-blue-600">78%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>

                {/* Recent activity */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Recent Activity
                    </span>
                    <span className="text-xs text-blue-500 font-medium cursor-pointer">View all</span>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-2.5">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            item.done ? "bg-green-400" : "bg-amber-400"
                          }`}
                        />
                        <span className="text-xs text-slate-700 flex-1 font-medium">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-slate-400 hidden sm:inline">
                          {item.dept}
                        </span>
                        <span className="text-[11px] text-slate-300">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#060D1A] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs text-white/70">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
