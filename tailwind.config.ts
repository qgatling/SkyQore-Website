import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1D4ED8",
          indigo: "#4F46E5",
          violet: "#7C3AED",
          orange: "#F97316",
          amber: "#F59E0B",
        },
        dark: {
          DEFAULT: "#0A0F1E",
          card: "#111827",
          muted: "#1E293B",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)",
        "gradient-subtle":
          "linear-gradient(180deg, #F0F4FF 0%, #FAFAFA 100%)",
      },
      animation: {
        blob: "blob 8s infinite ease-in-out",
        "blob-slow": "blob 12s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        ticker: "ticker 30s linear infinite",
        shimmer: "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "count-up": "countUp 1s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.25)",
        "glow-blue": "0 0 40px rgba(29, 78, 216, 0.3)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
