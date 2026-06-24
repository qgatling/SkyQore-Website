"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Workflow,
  Database,
  Globe,
  BarChart3,
  Plug,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

const solutions = [
  {
    id: "workflow",
    icon: Workflow,
    color: "blue",
    title: "Workflow Automation",
    tagline: "Replace every manual approval chain and handoff.",
    description:
      "Your team shouldn't spend their day chasing people for approvals, forwarding documents, or manually updating statuses. We build automated workflows that route work to the right person at the right time — every time, without reminders.",
    features: [
      "Multi-step approval routing with conditional logic",
      "Automated notifications and escalations",
      "Real-time status tracking for all stakeholders",
      "Audit trails for every decision and action",
      "Integration with email, Slack, and existing tools",
      "Mobile-friendly — approve from anywhere",
    ],
    useCases: ["Invoice approvals", "Contract routing", "HR request management", "Project sign-offs", "Compliance workflows"],
    stat: "87%",
    statLabel: "average reduction in approval cycle time",
    bgColor: "from-blue-600 to-blue-800",
  },
  {
    id: "data",
    icon: Database,
    color: "violet",
    title: "Data Management Platforms",
    tagline: "One source of truth for your entire operation.",
    description:
      "Scattered data across spreadsheets, email threads, and siloed systems costs your team hours every week and leads to costly errors. We build centralized data platforms that give everyone in your organization access to clean, current, accurate information.",
    features: [
      "Unified data model across all your systems",
      "Role-based access control and permissions",
      "Data validation and cleaning workflows",
      "Version history and change tracking",
      "Import tools for existing data migration",
      "Export to Excel, CSV, or directly to your BI tool",
    ],
    useCases: ["Client record management", "Inventory tracking", "Vendor databases", "Employee directories", "Asset management"],
    stat: "99.2%",
    statLabel: "data accuracy after migration",
    bgColor: "from-violet-600 to-violet-900",
  },
  {
    id: "portals",
    icon: Globe,
    color: "indigo",
    title: "Customer & Client Portals",
    tagline: "Give clients a self-service experience they'll love.",
    description:
      "Your clients shouldn't have to email you to check a project status, find a document, or submit a request. A custom client portal puts them in control — reducing your team's admin burden while increasing client satisfaction.",
    features: [
      "Branded portal with your own domain and logo",
      "Secure document upload and download",
      "Project and ticket status tracking",
      "Client request submission and tracking",
      "Message threading and file sharing",
      "Invoice viewing and payment integration",
    ],
    useCases: ["Professional services firms", "Agency project management", "Legal document portals", "Property management", "Contractor communication"],
    stat: "40%",
    statLabel: "reduction in client support emails",
    bgColor: "from-indigo-600 to-indigo-900",
  },
  {
    id: "reporting",
    icon: BarChart3,
    color: "cyan",
    title: "Reporting & Analytics",
    tagline: "Dashboards that update themselves.",
    description:
      "If getting a report requires someone to spend half their day pulling data, formatting spreadsheets, and emailing summaries — you're flying blind most of the time. We build live analytics platforms that give leadership instant visibility into what matters most.",
    features: [
      "Real-time dashboards connected to live data",
      "Scheduled reports delivered by email",
      "Custom KPI tracking for your specific metrics",
      "Drill-down capability from summary to detail",
      "Multi-location or multi-team roll-up views",
      "Export to PDF for board presentations",
    ],
    useCases: ["Executive dashboards", "Sales pipeline reporting", "Operations metrics", "Financial performance", "Team productivity tracking"],
    stat: "6 hrs",
    statLabel: "saved per manager per week on reporting",
    bgColor: "from-cyan-600 to-cyan-900",
  },
  {
    id: "integrations",
    icon: Plug,
    color: "emerald",
    title: "System Integrations & APIs",
    tagline: "Make every tool in your stack work together.",
    description:
      "Double-entry is a tax on your team's time and a reliable source of errors. We build the integrations and middleware that connect your existing tools — so data flows automatically and your team only has to enter it once.",
    features: [
      "Bi-directional sync between any two systems",
      "Real-time webhooks and event-driven pipelines",
      "Transformation and data mapping logic",
      "Error handling and alerting",
      "Integration with 100+ common platforms",
      "Custom API endpoints for your specific needs",
    ],
    useCases: ["CRM to accounting sync", "eCommerce to ERP", "HR to payroll", "Marketing to CRM", "Project tool to billing"],
    stat: "100+",
    statLabel: "platforms integrated across client projects",
    bgColor: "from-emerald-600 to-emerald-900",
  },
  {
    id: "operations",
    icon: Users,
    color: "orange",
    title: "Operations Software",
    tagline: "Purpose-built for your exact process.",
    description:
      "Some business processes are too unique — or too complex — for any off-the-shelf tool to handle properly. We build the software that fills the gap between what generic tools offer and what your business actually needs.",
    features: [
      "Built around your exact operational workflow",
      "Role-based interfaces for every team member",
      "Configurable rules and business logic",
      "Onboarding flows for new team members",
      "Process documentation built into the software",
      "Evolves as your business grows",
    ],
    useCases: ["Dispatch and scheduling", "Quote and proposal management", "Compliance tracking", "Field team coordination", "Custom ERP modules"],
    stat: "3×",
    statLabel: "faster new hire onboarding",
    bgColor: "from-orange-500 to-orange-700",
  },
];

const colorMap: Record<string, { icon: string; badge: string; stat: string }> = {
  blue: { icon: "bg-blue-600", badge: "bg-blue-50 text-blue-700 border-blue-100", stat: "text-blue-600" },
  violet: { icon: "bg-violet-600", badge: "bg-violet-50 text-violet-700 border-violet-100", stat: "text-violet-600" },
  indigo: { icon: "bg-indigo-600", badge: "bg-indigo-50 text-indigo-700 border-indigo-100", stat: "text-indigo-600" },
  cyan: { icon: "bg-cyan-600", badge: "bg-cyan-50 text-cyan-700 border-cyan-100", stat: "text-cyan-600" },
  emerald: { icon: "bg-emerald-600", badge: "bg-emerald-50 text-emerald-700 border-emerald-100", stat: "text-emerald-600" },
  orange: { icon: "bg-orange-500", badge: "bg-orange-50 text-orange-700 border-orange-100", stat: "text-orange-600" },
};

export default function SolutionsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[80px]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              What We Build
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Six ways we replace
              <br />
              <span className="text-gradient">manual work with software.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
              Every SkyQore engagement starts with your process — not a product catalog. But these
              are the six categories of solutions we build most often, and the outcomes they deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {solutions.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution details */}
      <div className="bg-white">
        {solutions.map((sol, i) => {
          const colors = colorMap[sol.color];
          const isEven = i % 2 === 0;
          return (
            <section
              key={sol.id}
              id={sol.id}
              className={`section-padding ${isEven ? "bg-white" : "bg-slate-50"} scroll-mt-16`}
            >
              <div className="container-max">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className={!isEven ? "lg:col-start-2" : ""}
                  >
                    <div className={`inline-flex items-center gap-2 mb-5`}>
                      <div className={`w-10 h-10 rounded-xl ${colors.icon} flex items-center justify-center`}>
                        <sol.icon size={20} className="text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Solution 0{i + 1}
                      </span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                      {sol.title}
                    </h2>
                    <p className={`text-lg font-semibold ${colors.stat} mb-5`}>{sol.tagline}</p>
                    <p className="text-slate-500 leading-relaxed mb-8">{sol.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        What's included
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {sol.features.map((f, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-slate-600 text-sm">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary inline-flex">
                      Discuss This Solution <ArrowRight size={16} />
                    </Link>
                  </motion.div>

                  {/* Stats card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    {/* Big stat */}
                    <div className={`bg-gradient-to-br ${sol.bgColor} rounded-3xl p-10 text-white mb-5 shadow-xl`}>
                      <p className="text-7xl font-black mb-3 leading-none">{sol.stat}</p>
                      <p className="text-white/80 text-base font-medium">{sol.statLabel}</p>
                      <div className="mt-8 pt-6 border-t border-white/20">
                        <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-3">
                          Common use cases
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sol.useCases.map((uc) => (
                            <span
                              key={uc}
                              className="text-xs font-semibold bg-white/15 text-white px-3 py-1.5 rounded-full"
                            >
                              {uc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💡</span>
                      </div>
                      <p className="text-slate-600 text-sm">
                        <strong className="text-slate-900">Not sure this fits your situation?</strong>{" "}
                        Book a free call — we'll tell you honestly if this is the right solution.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-max text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Don't see your exact use case?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            We've built for industries from healthcare to real estate to manufacturing. If your
            process can be mapped, we can build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-9 py-4 rounded-xl shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all text-lg"
          >
            Tell Us What You Need <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
