"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "What We Build", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why SkyQore", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: 70,
        background: "#03050C",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 1px 12px rgba(0,0,0,0.4)",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="SkyQore Logo"
            width={38}
            height={38}
            className="object-contain"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,182,255,0.25))" }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "1.45rem",
              fontWeight: 900,
              letterSpacing: "-0.5px",
              color: "#F0F4FF",
              lineHeight: 1,
            }}
          >
            SKY<span className="text-gradient">Q</span>ORE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#8A9ABB",
                padding: "0.45rem 0.9rem",
                borderRadius: 8,
                transition: "all 0.18s",
              }}
              className="hover:text-[#F0F4FF] hover:bg-white/[0.06]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#38B6FF",
              padding: "0.45rem 0.9rem",
              borderRadius: 8,
              border: "1px solid rgba(56,182,255,0.25)",
              transition: "all 0.18s",
            }}
            className="hover:bg-[rgba(56,182,255,0.1)] hover:border-[rgba(56,182,255,0.5)]"
          >
            Enter Portal
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link href="#contact" className="btn-sky text-sm">
            Book a Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            color: "#F0F4FF",
            fontSize: "1.6rem",
            cursor: "pointer",
            padding: "0.4rem",
          }}
          aria-label="Toggle Navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 70,
            left: 0,
            width: "100%",
            height: "calc(100vh - 70px)",
            background: "#04060F",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            zIndex: 999,
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{ fontSize: "1rem", fontWeight: 500, color: "#8A9ABB", padding: "0.75rem 0" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-sky mt-4 w-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
