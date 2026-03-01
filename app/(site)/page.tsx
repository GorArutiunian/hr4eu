import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import SectionSeparator from "@/components/SectionSeparator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionSeparator variant="line" background="white" lineColor="default" />
      <ServiceCards />
      <SectionSeparator variant="center-accent" background="orange" lineColor="orange" />
      <HowItWorks />
      <SectionSeparator variant="accent-line" background="white" lineColor="accent" />
      <BenefitsSection />
      <SectionSeparator variant="center-accent" background="orange" lineColor="accent" />
      <Testimonials />
      <SectionSeparator variant="double" background="warm" lineColor="accent" />
      <CTASection />
    </>
  );
}
