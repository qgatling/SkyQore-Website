import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ContactContent = dynamic(() => import("@/components/ContactContent"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact SkyQore | Book a Free Strategy Session",
  description:
    "Book a free 45-minute strategy session with SkyQore. We'll map your process, find your highest-ROI automation opportunities, and give you a clear scope and price.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
