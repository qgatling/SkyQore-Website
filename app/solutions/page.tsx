import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const SolutionsContent = dynamic(() => import("@/components/SolutionsContent"), { ssr: false });

export const metadata: Metadata = {
  title: "Solutions | SkyQore Custom Software",
  description:
    "Explore SkyQore's custom software solutions — from workflow automation and data management to client portals, reporting dashboards, and system integrations.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <SolutionsContent />
      <Footer />
    </main>
  );
}
