import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import AuthoritySection from "@/components/AuthoritySection";
import ExamSection from "@/components/ExamSection";
import BenefitsSection from "@/components/BenefitsSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import CtaSection from "@/components/CtaSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <>
    <HeroSection />
    <ProblemsSection />
    <AuthoritySection />
    <ExamSection />
    <BenefitsSection />
    <ResultsSection />
    <TestimonialsSection />
    <UrgencySection />
    <CtaSection />
    <footer className="bg-foreground py-6 text-center">
      <p className="font-body text-sm text-primary-foreground/50">
        © 2025 Dra. Rafaela Coimbra · Biomédica Especialista em Tricologia · Av. Fleming, Belo Horizonte
      </p>
    </footer>
    <FloatingWhatsApp />
  </>
);

export default Index;
