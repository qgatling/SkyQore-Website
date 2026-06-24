"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How is custom software different from buying a SaaS tool?",
    a: "SaaS tools are built for the average business — so they fit everyone imperfectly. Custom software is built for exactly how your team works today. There's no 'work around the software' — the software works around you. And unlike SaaS, you pay once and own it outright with no monthly licensing fees forever.",
  },
  {
    q: "How long does it take to build?",
    a: "A single-workflow tool typically takes 4–6 weeks. A multi-process platform runs 8–14 weeks. We scope every project specifically before giving you a timeline — and we've delivered 96% of projects on or ahead of schedule.",
  },
  {
    q: "What does it actually cost?",
    a: "Starter projects begin at $4,997 for the build, plus $249/month for ongoing support. Growth platforms start at $14,997. Enterprise projects are scoped individually. Every engagement gets a fixed-price contract — you'll never receive a surprise invoice.",
  },
  {
    q: "Do we own the software once it's built?",
    a: "Yes, completely. We transfer all source code, assets, and IP rights to you on delivery. You can host it, modify it, or hand it to another developer — no strings attached. We don't retain any licensing rights.",
  },
  {
    q: "What if our needs change after we launch?",
    a: "All support plans include an allocation of monthly development hours for changes and improvements. As your business grows, your software grows with it. Most clients expand their platform within the first 6 months as they discover new opportunities to automate.",
  },
  {
    q: "Do you work with businesses outside of North America?",
    a: "Yes. We operate primarily on North American time zones but work with clients globally. We've built platforms for businesses in the UK, Australia, and the EU. If your team is distributed, we accommodate your preferred meeting times.",
  },
  {
    q: "What if we already have some software — can you integrate with it?",
    a: "Almost always. We've integrated with Salesforce, HubSpot, QuickBooks, Xero, Shopify, Microsoft 365, Google Workspace, NetSuite, and dozens of other platforms. If it has an API, we can connect to it.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 45-minute strategy session. We'll map your current process, identify the highest-impact automation opportunities, and give you a clear scope and quote — with no obligation to move forward.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span className="font-semibold text-slate-800 text-base group-hover:text-blue-700 transition-colors pr-4">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          {isOpen ? (
            <Minus size={16} className="text-blue-600" />
          ) : (
            <Plus size={16} className="text-slate-500 group-hover:text-blue-600" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-5 pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">
              FAQ
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
              Questions we
              <br />
              get all the time.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Still have questions? Book a free strategy session — we'll answer everything in
              plain English.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex"
            >
              Talk to a Human
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-2">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <FAQItem
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
