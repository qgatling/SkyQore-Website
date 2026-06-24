import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkyQore | Replace Manual Work. Scale What Matters.",
  description:
    "SkyQore builds custom software that eliminates manual processes, reduces costly errors, and unlocks growth for modern businesses. Used by 500+ companies across North America.",
  keywords: [
    "custom software development",
    "workflow automation",
    "business process automation",
    "custom CRM",
    "operations software",
  ],
  openGraph: {
    title: "SkyQore | Replace Manual Work. Scale What Matters.",
    description:
      "Custom software that eliminates manual work and drives business growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
