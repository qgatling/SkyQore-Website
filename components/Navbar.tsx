"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const solutionItems = [
  { label: "Workflow Automation", desc: "Automate approvals & routing", href: "/solutions#workflow" },
  { label: "Data Management", desc: "One source of truth", href: "/solutions#data" },
  { label: "Client Portals", desc: "Branded self-service experiences", href: "/solutions#portals" },
  { label: "Reporting & Analytics", desc: "Live dashboards, zero effort", href: "/solutions#reporting" },
  { label: "System Integrations", desc: "Connect every tool you use", href: "/solutions#integrations" },
  { label: "Operations Software", desc: "Purpose-built for your process", href: "/solutions#operations" },
];

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Results", href: "/#results" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isLight = !scrolled && pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="h-10 rounded-xl overflow-hidden flex-shrink-0 shadow-sm" style={{ width: 130, background: "#060D1A" }}>
              <Image
                src="/logo.png"
                alt="SkyQore"
                width={200}
                height={134}
                className="h-full w-auto object-cover object-top"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Solutions dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setSolutionsOpen((v) => !v)}
                className="flex items-center gap-1 px-4 py-2 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors rounded-lg hover:bg-blue-50"
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                        {item.label}
                      </span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 mt-1 border-t border-slate-100">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 px-3 py-2"
                    >
                      View all solutions <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 font-medium text-sm transition-colors rounded-lg hover:bg-blue-50 ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className="text-slate-700" />
            ) : (
              <Menu size={22} className="text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-5 flex flex-col gap-1">
          {/* Solutions expandable */}
          <button
            onClick={() => setMobileSolutionsOpen((v) => !v)}
            className="flex items-center justify-between text-slate-700 font-medium py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Solutions
            <ChevronDown
              size={16}
              className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileSolutionsOpen && (
            <div className="pl-4 flex flex-col gap-1 mb-1">
              {solutionItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 text-sm py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-700 font-medium py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 pt-3 border-t border-slate-100">
            <Link href="/contact" className="btn-primary w-full justify-center text-sm">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
