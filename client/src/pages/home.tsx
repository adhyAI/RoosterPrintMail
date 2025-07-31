import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import FeaturesSection from "@/components/features-section";
import ComparisonSection from "@/components/comparison-section";
import IndustriesSection from "@/components/industries-section";
import RoiCalculator from "@/components/roi-calculator";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ComparisonSection />
      <IndustriesSection />
      <RoiCalculator />
      <CtaSection />
      <Footer />
    </div>
  );
}
