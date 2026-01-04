import Hero from "@/components/Hero";
import PsychologistCard from "@/components/PsychologistCard";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ConnectSection from "@/components/ConnectSection";
import InterestForm from "@/components/InterestForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PsychologistCard />
      <PricingSection />
      <FAQSection />
      <ConnectSection />
      <InterestForm />
    </>
  );
}
