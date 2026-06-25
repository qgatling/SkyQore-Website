"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  "SaaS Web Applications",
  "Mobile App Engineering",
  "DevOps & Cloud",
  "Client & Staff Portals",
  "AI & Automation",
  "UI/UX & Brand Design",
];

const company = [
  { label: "Why SkyQore", href: "#why" },
  { label: "How It Works", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#020408", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "5rem 0 2rem" }}>
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 0.9fr 0.9fr 1.2fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="#hero" className="flex items-center gap-3" style={{ marginBottom: "0.5rem" }}>
              <Image src="/logo.png" alt="SkyQore Logo" width={38} height={38} className="object-contain" />
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
            <p style={{ fontSize: "0.9rem", color: "#8A9ABB", lineHeight: 1.65 }}>
              Next-generation software engineering for businesses that are done losing time to manual
              processes. Custom-built. Fully owned. Built to scale.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8A9ABB",
                    transition: "all 0.35s",
                  }}
                  className="hover:bg-[#38B6FF] hover:text-white hover:border-[#38B6FF]"
                >
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "1rem", fontWeight: 700, color: "#F0F4FF", marginBottom: "1.4rem" }}>
              Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    style={{ fontSize: "0.875rem", color: "#8A9ABB", transition: "all 0.18s" }}
                    className="hover:text-[#38B6FF] hover:pl-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "1rem", fontWeight: 700, color: "#F0F4FF", marginBottom: "1.4rem" }}>
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "0.875rem", color: "#8A9ABB", transition: "all 0.18s" }}
                    className="hover:text-[#38B6FF] hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "1rem", fontWeight: 700, color: "#F0F4FF" }}>
              Stay Updated
            </h4>
            <p style={{ fontSize: "0.875rem", color: "#8A9ABB", lineHeight: 1.6 }}>
              Get quarterly insights on modern tech stacks, engineering best practices, and cloud cost savings.
            </p>
            <form style={{ display: "flex", gap: "0.5rem" }} onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); }}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Newsletter Email"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: "0.7rem 1rem",
                  color: "#F0F4FF",
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                  outline: "none",
                  flexGrow: 1,
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  background: "linear-gradient(135deg, #38B6FF 0%, #0052FF 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  width: 42,
                  height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "all 0.35s",
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "0.8rem", color: "#4A5568" }}>
            &copy; {new Date().getFullYear()} SkyQore Systems, Inc. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.75rem", fontSize: "0.8rem", color: "#4A5568", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Security SLA"].map((item) => (
              <Link key={item} href="#contact" className="hover:text-[#38B6FF] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
