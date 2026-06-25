import Link from "next/link";

const steps = [
  {
    num: "1",
    title: "Book a Consultation",
    desc: "We talk through your business, your current process, and the specific bottlenecks you need solved.",
  },
  {
    num: "2",
    title: "We Build a Demo",
    desc: "You see a practical, interactive working concept of the app or software before committing to a full build.",
  },
  {
    num: "3",
    title: "We Launch and Improve It",
    desc: "Once approved, we help your team onboard, collect user feedback, and continue improving the system over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" style={{ padding: "7rem 0", background: "rgba(6,9,22,0.5)" }}>
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
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8A9ABB", lineHeight: 1.7 }}>
            You do not need to know exactly what software you need. We help you figure that out.
          </p>
        </div>

        {/* Steps */}
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Number badges + connecting line */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : undefined }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(8,14,35,0.95)",
                    border: "2px solid rgba(56,182,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: "#F0F4FF",
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(56,182,255,0.12)",
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, height: 2, background: "linear-gradient(to right, #38B6FF, #0052FF)", opacity: 0.3 }} />
                )}
              </div>
            ))}
          </div>

          {/* Labels */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              textAlign: "center",
            }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {steps.map((step, i) => (
              <div key={i}>
                {/* Mobile number */}
                <div
                  className="md:hidden flex items-center justify-center mb-4"
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(8,14,35,0.95)",
                      border: "2px solid rgba(56,182,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      color: "#F0F4FF",
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    marginBottom: "0.85rem",
                    color: "#F0F4FF",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#8A9ABB", lineHeight: 1.7, maxWidth: 260, margin: "0 auto" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link href="#contact" className="btn-sky">Start With a Free Consultation</Link>
        </div>
      </div>
    </section>
  );
}
