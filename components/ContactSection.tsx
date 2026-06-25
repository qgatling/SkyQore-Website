"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 6000);
    }, 1500);
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 8,
    padding: "0.85rem 1rem",
    color: "#F0F4FF",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.18s, box-shadow 0.18s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#8A9ABB",
    display: "block",
    marginBottom: "0.45rem",
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "rgba(6,9,22,0.5)" }}>
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 5rem auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span className="section-tag-pill">Start a Project</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.75px",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build Something Together
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8A9ABB", lineHeight: 1.7 }}>
            Ready to replace manual chaos with clean, custom software? Fill in your details and
            we&apos;ll be in touch within 4 hours.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{ display: "grid", gap: "4rem", alignItems: "start" }}
          className="grid-cols-1 md:grid-cols-[1fr_1.4fr]"
        >
          {/* Info column */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
            <div style={{ display: "flex", gap: "1.1rem" }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38B6FF",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    color: "#F0F4FF",
                  }}
                >
                  Email Us
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#8A9ABB" }}>
                  <a href="mailto:hello@skyqore.com" className="hover:text-[#38B6FF] transition-colors">
                    hello@skyqore.com
                  </a>
                </p>
                <p style={{ fontSize: "0.9rem", color: "#8A9ABB" }}>
                  <a href="mailto:partnerships@skyqore.com" className="hover:text-[#38B6FF] transition-colors">
                    partnerships@skyqore.com
                  </a>
                </p>
              </div>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "2.5rem" }}>
              {[
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
              ].map((s) => (
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
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: "3rem" }}>
            {submitted && (
              <div
                style={{
                  background: "rgba(39,174,96,0.1)",
                  border: "1px solid rgb(39,174,96)",
                  color: "#2ecc71",
                  padding: "1rem 1.25rem",
                  borderRadius: 8,
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  marginBottom: "1.25rem",
                }}
              >
                <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor", flexShrink: 0 }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div>
                  <strong>Message received!</strong> We&apos;ll be in touch within 4 hours. Let&apos;s build.
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.4rem",
              }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              <div>
                <label htmlFor="name" style={labelStyle}>Full Name *</label>
                <input id="name" type="text" placeholder="e.g. Sarah Connor" required style={inputStyle}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "#38B6FF"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(56,182,255,0.25)"; }}
                  onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Work Email *</label>
                <input id="email" type="email" placeholder="e.g. sarah@company.com" required style={inputStyle}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "#38B6FF"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(56,182,255,0.25)"; }}
                  onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="company" style={labelStyle}>Company Name</label>
                <input id="company" type="text" placeholder="e.g. Acme Corp" style={inputStyle}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "#38B6FF"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(56,182,255,0.25)"; }}
                  onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="message" style={labelStyle}>What process do you need help with? *</label>
                <textarea
                  id="message"
                  placeholder="Describe what you want to build, what's slowing your team down, or what you'd like to automate..."
                  required
                  style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
                  onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = "#38B6FF"; (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(56,182,255,0.25)"; }}
                  onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.target as HTMLTextAreaElement).style.boxShadow = "none"; }}
                />
              </div>
              <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
                <button type="submit" className="btn-sky" style={{ width: "100%", opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
                  {submitting ? "Sending…" : "Send My Project Details →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
