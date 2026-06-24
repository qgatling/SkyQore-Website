import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const LogoStrip = dynamic(() => import("@/components/LogoStrip"), { ssr: false });
const PainPoints = dynamic(() => import("@/components/PainPoints"), { ssr: false });
const Solutions = dynamic(() => import("@/components/Solutions"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const WhySkyQore = dynamic(() => import("@/components/WhySkyQore"), { ssr: false });
const Results = dynamic(() => import("@/components/Results"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <PainPoints />
      <Solutions />
      <HowItWorks />
      <WhySkyQore />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
