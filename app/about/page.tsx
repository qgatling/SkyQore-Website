import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const AboutContent = dynamic(() => import("@/components/AboutContent"), { ssr: false });

export const metadata: Metadata = {
  title: "About SkyQore | Our Story, Mission & Team",
  description:
    "Learn how SkyQore was built to help businesses replace manual work with custom software — and meet the team behind it.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
