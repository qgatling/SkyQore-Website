import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: "calc(100vh - 70px)", display: "flex", alignItems: "center", padding: "5rem 0 4rem" }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-[1.15fr_0.85fr] grid-cols-1"
        >
          {/* Left content */}
          <div>
            {/* Tagline pill */}
            <div className="flex items-center gap-2 mb-6" style={{ width: "fit-content" }}>
              <span className="section-tag-pill">Custom Software for Growing Businesses</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                marginBottom: "1.5rem",
              }}
            >
              Custom Business Software{" "}
              <span className="text-gradient">Built Around</span> How You Work
            </h1>

            {/* Belief quote */}
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(240,244,255,0.75)",
                maxWidth: 520,
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontStyle: "italic",
                borderLeft: "3px solid #38B6FF",
                paddingLeft: "1rem",
              }}
            >
              At SkyQore, we believe there are no ceilings. We build software that removes barriers,
              streamlines operations, and gives businesses the freedom to reach new heights.
            </p>

            {/* Sub */}
            <p style={{ fontSize: "1.15rem", color: "#8A9ABB", maxWidth: 540, lineHeight: 1.75, marginBottom: "2.25rem" }}>
              SkyQore builds custom applications, portals, dashboards, CRMs, and workflow systems
              that help businesses replace manual processes, automate complex tasks, and scale with
              confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#contact" className="btn-sky">Book a Free Consultation</Link>
              <Link href="#services" className="btn-sky-outline">See What We Build →</Link>
            </div>

            {/* Trust line */}
            <p style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "#4A5568", borderLeft: "2px solid #38B6FF", paddingLeft: "0.85rem", lineHeight: 1.5, maxWidth: 500 }}>
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#38B6FF", flexShrink: 0 }}>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              Trusted by founders &amp; enterprise teams — 99% client satisfaction across 50+ shipped products.
            </p>
          </div>

          {/* Right visual */}
          <div style={{ animation: "float 6s ease-in-out infinite", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                width: "80%",
                height: "80%",
                background: "radial-gradient(circle, rgba(56,182,255,0.25) 0%, rgba(0,82,255,0.25) 40%, transparent 70%)",
                filter: "blur(50px)",
                zIndex: 0,
              }}
            />
            {/* Frame */}
            <div
              className="glass-card"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2.5rem 2rem 0",
                boxShadow: "0 20px 50px -12px rgba(0,0,0,0.8), 0 0 20px rgba(56,182,255,0.18)",
              }}
            >
              <Image
                src="/skyqore-logo-full.png"
                alt="SkyQore"
                width={340}
                height={200}
                className="w-full"
                style={{ maxWidth: 340, height: "auto", mixBlendMode: "screen", filter: "drop-shadow(0 0 30px rgba(56,182,255,0.3))" }}
              />
              {/* Stats bar */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(3,5,12,0.75)",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  marginTop: "1.5rem",
                  padding: "1.25rem 1rem",
                  gap: 0,
                }}
              >
                {[
                  { num: "50+", lbl: "Products Shipped" },
                  { num: "10M+", lbl: "Active Users" },
                  { num: "99%", lbl: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", flex: i < 2 ? "1 1 auto" : undefined }}>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.2rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          background: "linear-gradient(135deg, #38B6FF 0%, #0052FF 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          lineHeight: 1,
                        }}
                      >
                        {stat.num}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "#4A5568", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                        {stat.lbl}
                      </span>
                    </div>
                    {i < 2 && (
                      <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.07)", flexShrink: 0 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
