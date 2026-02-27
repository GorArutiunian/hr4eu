import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <HowItWorks />
      <BenefitsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
