import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { MLHero } from "./components/MLHero";
import { MLModels } from "./components/MLModels";
import { MLLearningFlow } from "./components/MLLearningFlow";
import { MLApplications } from "./components/MLApplications";
import { MLMetrics } from "./components/MLMetrics";
import { MLCTASection } from "./components/MLCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function MachineLearningPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <MLHero />
        <MLModels />
        
        {/* 🎨 ANIMATION ZONE: ML Training Visualization */}
        <AnimationPlaceholder 
          id="ml-training-demo"
          title="ML Training Animation"
          description="Visualize model training process - neural networks, accuracy improvement, or prediction demo"
          height="450px"
        />
        
        <MLLearningFlow />
        <MLApplications />
        <MLMetrics />
        <MLCTASection />
      </main>
      <Footer />
    </div>
  );
}
