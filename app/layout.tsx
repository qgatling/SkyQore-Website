import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkyQore | Custom Software Built Around Your Business",
  description:
    "SkyQore builds affordable custom software, AI-powered apps, portals, dashboards, CRMs, and workflow tools that help businesses save time, make money, and eliminate headaches.",
  keywords: [
    "SkyQore",
    "custom software",
    "business software",
    "SaaS development",
    "workflow automation",
    "AI integration",
    "custom CRM",
    "client portal",
    "dashboard development",
  ],
  openGraph: {
    title: "SkyQore | Custom Software Built Around Your Business",
    description:
      "Custom software built around how your business actually works.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
