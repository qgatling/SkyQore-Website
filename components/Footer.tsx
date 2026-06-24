"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const links = {
  Solutions: [
    "Workflow Automation",
    "Data Management",
    "Client Portals",
    "Reporting & Analytics",
    "System Integrations",
    "Operations Software",
  ],
  Company: ["About SkyQore", "Our Team", "Careers", "Blog", "Press", "Partners"],
  Resources: ["Case Studies", "Documentation", "API Reference", "Security", "Status", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security Policy"],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-block mb-5 w-fit">
              <Image
                src="/logo.png"
                alt="SkyQore — Building the Future. Together."
                width={160}
                height={107}
                className="w-40 h-auto rounded-lg"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              We build custom software that replaces manual work, reduces costly errors, and unlocks
              sustainable growth for modern businesses.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5 mb-6 text-sm">
              <a
                href="mailto:hello@skyqore.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-slate-500" />
                hello@skyqore.com
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-slate-500" />
                1-800-555-1234
              </a>
              <span className="flex items-center gap-2 text-slate-500">
                <MapPin size={14} />
                Remote-first · Serving North America
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-colors group"
                >
                  <s.icon
                    size={16}
                    className="text-slate-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="col-span-1">
              <p className="text-white font-bold text-sm mb-4">{category}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div>
              <p className="font-bold text-white text-sm mb-1">
                Get our Process Automation newsletter
              </p>
              <p className="text-slate-400 text-xs">
                Real-world case studies and ROI guides. Monthly. No fluff.
              </p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 sm:w-64 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SkyQore Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span>All systems operational</span>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Status Page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
