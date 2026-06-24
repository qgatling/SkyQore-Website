"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Building2, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    icon: Zap,
    price: "$4,997",
    period: "one-time build",
    monthly: "+ $249/mo support",
    tagline: "Perfect for a single high-impact workflow or tool.",
    popular: false,
    color: "slate",
    cta: "Start with Starter",
    features: [
      "Single workflow or operational tool",
      "Up to 15 users",
      "Integration with 2 existing systems",
      "Admin dashboard & basic reporting",
      "2 rounds of revision during build",
      "3 months post-launch support",
      "Team onboarding & training session",
      "1-week response SLA",
    ],
    notIncluded: [
      "Multi-process platforms",
      "Advanced analytics dashboards",
      "Dedicated account manager",
    ],
  },
  {
    name: "Growth",
    icon: Sparkles,
    price: "$14,997",
    period: "one-time build",
    monthly: "+ $699/mo support",
    tagline: "Built for teams ready to transform an entire department.",
    popular: true,
    color: "blue",
    cta: "Start with Growth",
    features: [
      "Multi-process platform (3–6 workflows)",
      "Up to 75 users",
      "Integration with up to 5 existing systems",
      "Real-time dashboards & advanced reporting",
      "Unlimited revisions during build phase",
      "6 months post-launch support",
      "Full team training & documentation",
      "48-hour response SLA",
      "Dedicated project manager",
      "Monthly performance reviews",
    ],
    notIncluded: ["Custom enterprise SLAs", "On-premise deployment"],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "scoped to your needs",
    monthly: "Dedicated support contract",
    tagline: "For businesses ready to transform operations at scale.",
    popular: false,
    color: "slate",
    cta: "Book a Custom Consultation",
    features: [
      "Full operations platform (unlimited workflows)",
      "Unlimited users & roles",
      "Unlimited system integrations",
      "Executive analytics & BI dashboards",
      "On-premise or private cloud deployment",
      "12+ months dedicated support",
      "Dedicated engineering team",
      "4-hour critical response SLA",
      "Quarterly roadmap planning",
      "Custom SLAs & contracts",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            Transparent pricing.
            <br />
            No surprises.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            You know the cost before we write a line of code. And your investment pays for itself —
            usually within 90 days of launch.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              className={`relative rounded-3xl flex flex-col ${
                tier.popular
                  ? "bg-gradient-to-b from-blue-600 to-violet-700 text-white shadow-2xl shadow-blue-500/30 scale-105"
                  : "bg-white border border-slate-200 text-slate-900 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles size={12} className="fill-white" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon & name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tier.popular
                        ? "bg-white/20"
                        : "bg-gradient-to-br from-blue-600 to-violet-600"
                    }`}
                  >
                    <tier.icon
                      size={20}
                      className={tier.popular ? "text-white" : "text-white"}
                    />
                  </div>
                  <span
                    className={`font-extrabold text-xl ${
                      tier.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {tier.name}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className={`text-4xl font-extrabold ${
                      tier.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span
                      className={`text-sm ml-2 ${
                        tier.popular ? "text-blue-200" : "text-slate-400"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm font-medium mb-1 ${
                    tier.popular ? "text-blue-200" : "text-slate-500"
                  }`}
                >
                  {tier.monthly}
                </p>
                <p
                  className={`text-sm mb-7 mt-3 ${
                    tier.popular ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {tier.tagline}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl w-full transition-all duration-200 mb-8 ${
                    tier.popular
                      ? "bg-white text-blue-700 hover:bg-blue-50"
                      : "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01]"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>

                {/* Divider */}
                <div
                  className={`border-t mb-6 ${
                    tier.popular ? "border-blue-500/40" : "border-slate-100"
                  }`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          tier.popular ? "bg-white/20" : "bg-green-100"
                        }`}
                      >
                        <Check
                          size={12}
                          strokeWidth={3}
                          className={tier.popular ? "text-white" : "text-green-600"}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          tier.popular ? "text-blue-100" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 text-sm mb-2">
            All builds include a fixed-scope contract, weekly progress updates, and IP ownership
            transferred to you on delivery.
          </p>
          <p className="text-slate-400 text-sm">
            Not sure which tier fits?{" "}
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">
              Book a free 30-minute consultation
            </a>{" "}
            and we'll scope it for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
