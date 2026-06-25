import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" style={{ padding: "7rem 0" }}>
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div
          className="glass-card"
          style={{
            padding: "5rem 3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            borderRadius: 20,
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              height: "60%",
              background: "radial-gradient(circle, rgba(56,182,255,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="section-tag-pill">Ready to Fix Your Process?</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                fontWeight: 900,
                marginBottom: "1rem",
              }}
            >
              Stop Losing Time to Manual Work
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#8A9ABB",
                maxWidth: 560,
                margin: "0 auto 2.5rem",
                lineHeight: 1.7,
              }}
            >
              Tell us what&apos;s slowing your team down. We&apos;ll identify exactly where custom
              software can save you the most time and money — and give you a clear plan to build it.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              <Link href="#contact" className="btn-sky">Book a Free Consultation →</Link>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#4A5568" }}>
              No commitment required — just a conversation about your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
