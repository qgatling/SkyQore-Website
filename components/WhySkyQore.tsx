const checks = [
  "Affordable custom solutions",
  "Built specifically for your business",
  "Streamlined workflows and automation",
  "Scalable architecture for future growth",
  "Ongoing support and enhancements",
];

export default function WhySkyQore() {
  return (
    <section id="why" style={{ padding: "7rem 0", background: "rgba(6,9,22,0.5)" }}>
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 5rem auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span className="section-tag-pill">Why SkyQore</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.75px",
            }}
          >
            Built Around <span className="text-gradient">How You Work</span>
          </h2>
        </div>

        {/* Content card */}
        <div
          className="glass-card"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "4rem",
            padding: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#F0F4FF",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Most software forces businesses to adapt their processes to fit the software.
            </p>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#38B6FF",
                lineHeight: 1.3,
              }}
            >
              At SkyQore, we do the opposite.
            </p>
            <p style={{ fontSize: "0.975rem", color: "#8A9ABB", lineHeight: 1.75 }}>
              We learn how your business operates, identify bottlenecks and inefficiencies, and build
              software around your existing workflows. The result is a solution that your team can
              adopt quickly while improving productivity and reducing operational friction.
            </p>
          </div>

          {/* Right checklist */}
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
              paddingLeft: "3rem",
            }}
            className="border-l-0 pl-0 md:border-l md:pl-12"
          >
            {checks.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.975rem",
                  fontWeight: 500,
                  color: "#F0F4FF",
                  listStyle: "none",
                }}
              >
                <span style={{ color: "#38B6FF", fontSize: "1rem", flexShrink: 0 }}>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
