import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { AIHero } from "./components/AIHero";
import { AICapabilities } from "./components/AICapabilities";
import { AIProcessFlow } from "./components/AIProcessFlow";
import { AIUseCases } from "./components/AIUseCases";
import { AIBenefits } from "./components/AIBenefits";
import { AICTASection } from "./components/AICTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function ArtificialIntelligencePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <AIHero />
        <AICapabilities />
        
        {/* 🎨 ANIMATION ZONE: AI in Action */}
        <AnimationPlaceholder 
          id="ai-custom-demo"
          title="AI Feature Animation"
          description="Add custom AI visualization - fraud detection, image recognition, or chatbot interaction"
          height="450px"
        />
        
        <AIProcessFlow />
        <AIUseCases />
        <AIBenefits />
        <AICTASection />
      </main>
      <Footer />
    </div>
  );
}
