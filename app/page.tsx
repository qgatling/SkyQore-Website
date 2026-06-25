import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const PainPoints = dynamic(() => import("@/components/PainPoints"), { ssr: false });
const Solutions = dynamic(() => import("@/components/Solutions"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const WhySkyQore = dynamic(() => import("@/components/WhySkyQore"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Solutions />
      <HowItWorks />
      <WhySkyQore />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
