import Link from "next/link";

const rows = [
  {
    process: "Customer updates",
    bad: "Constant calls & emails back and forth",
    good: "Automated status portal — clients check themselves",
  },
  {
    process: "Job & task tracking",
    bad: "Sticky notes, spreadsheets, missed handoffs",
    good: "One dashboard — every task assigned & tracked",
  },
  {
    process: "Data & reporting",
    bad: "Manual exports, outdated numbers, blind spots",
    good: "Live dashboards with real-time metrics, always current",
  },
  {
    process: "Onboarding clients",
    bad: "PDFs emailed, data re-entered, hours wasted",
    good: "Branded intake forms that feed directly into your system",
  },
  {
    process: "Team communication",
    bad: "Group chats, missed messages, no paper trail",
    good: "In-app notifications & threads tied to each job",
  },
];

export default function PainPoints() {
  return (
    <section id="problem" style={{ padding: "7rem 0" }}>
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 5rem auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span className="section-tag-pill">The Real Cost of Manual Processes</span>
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
            Sound Familiar?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8A9ABB", lineHeight: 1.7 }}>
            Most growing businesses hit the same wall. These bottlenecks quietly cost you hours,
            clients, and revenue every single week.
          </p>
        </div>

        {/* Table */}
        <div className="glass-card" style={{ overflow: "hidden", borderRadius: 20 }}>
          {/* Header row – desktop */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: "1fr 1.4fr 1.4fr",
              background: "rgba(56,182,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "1rem 2rem",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: 700, color: "#8A9ABB", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Process
            </div>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.3rem 0.85rem", borderRadius: 50, fontSize: "0.8rem", fontWeight: 700, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#F87171" }}>
                ✕ Without SkyQore
              </span>
            </div>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.3rem 0.85rem", borderRadius: 50, fontSize: "0.8rem", fontWeight: 700, background: "rgba(56,182,255,0.1)", border: "1px solid rgba(56,182,255,0.25)", color: "#38B6FF" }}>
                ✓ With SkyQore
              </span>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "0 2rem" }}>
            {rows.map((row, i) => (
              <div key={i}>
                {/* Desktop row */}
                <div
                  className="hidden md:grid"
                  style={{
                    gridTemplateColumns: "1fr 1.4fr 1.4fr",
                    gap: "1rem",
                    padding: "1.2rem 0",
                    borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    alignItems: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  <div style={{ fontWeight: 600, color: "#8A9ABB" }}>{row.process}</div>
                  <div style={{ color: "#F87171" }}>{row.bad}</div>
                  <div style={{ color: "#38B6FF" }}>{row.good}</div>
                </div>
                {/* Mobile row */}
                <div
                  className="md:hidden"
                  style={{
                    padding: "1.25rem 0",
                    borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#F0F4FF", marginBottom: "0.5rem", fontSize: "0.9rem" }}>{row.process}</p>
                  <p style={{ color: "#F87171", fontSize: "0.85rem", marginBottom: "0.35rem" }}>✕ {row.bad}</p>
                  <p style={{ color: "#38B6FF", fontSize: "0.85rem" }}>✓ {row.good}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <Link href="#contact" className="btn-sky">Fix My Process →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
