import Link from "next/link";

const services = [
  {
    title: "Service Request App",
    desc: "Let customers submit requests, upload photos, track status, and receive automatic updates without calling your office.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "currentColor" }}>
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    title: "Work Order System",
    desc: "Assign jobs, manage field technicians, track checklist completion, attach photos, and reduce missed tasks across your team.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "currentColor" }}>
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v13H0v3h14v-3H4V6zm20 2h-8c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-6v-7h6v7z" />
      </svg>
    ),
  },
  {
    title: "Client Portal",
    desc: "Give customers one secure place to submit project information, check progress, sign off, and communicate with your team.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "currentColor" }}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Custom CRM",
    desc: "Track incoming leads, customers, custom quotes, automated follow-ups, and customer payments — all in one place built for your workflow.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "currentColor" }}>
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
  {
    title: "Business Dashboard",
    desc: "See the numbers, jobs, active requests, team progress, and operational activity that matter most to your business — in real time.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "currentColor" }}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
  {
    title: "Custom AI Workflow Tools",
    desc: "Use AI to automatically summarize requests, route alerts to your team, draft email responses, and eliminate repetitive manual admin work.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "currentColor" }}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="services" style={{ padding: "7rem 0", background: "rgba(6,9,22,0.5)" }}>
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 5rem auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.75px",
              marginBottom: "1rem",
            }}
          >
            What We Can <span className="text-gradient">Build For You</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8A9ABB", lineHeight: 1.7 }}>
            If your business has a repeatable process, we can help turn it into a simple custom app
            or software system.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((svc, i) => (
            <article
              key={i}
              className="glass-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                background: "rgba(10,14,36,0.75)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 10,
                  background: "rgba(56,182,255,0.08)",
                  border: "1px solid rgba(56,182,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38B6FF",
                  marginBottom: "1.4rem",
                  flexShrink: 0,
                }}
              >
                {svc.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  color: "#F0F4FF",
                }}
              >
                {svc.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#8A9ABB", lineHeight: 1.68, flexGrow: 1, marginBottom: "1.75rem" }}>
                {svc.desc}
              </p>
              <Link
                href="#contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.875rem", fontWeight: 600, color: "#38B6FF", marginTop: "auto", transition: "all 0.18s" }}
                className="hover:text-white hover:gap-2"
              >
                Book a Consultation About This ›
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
