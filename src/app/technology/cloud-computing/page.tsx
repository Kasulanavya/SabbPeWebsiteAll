import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { CloudHero } from "./components/CloudHero";
import { CloudCapabilities } from "./components/CloudCapabilities";
import CloudScalingFlow from "./components/CloudScalingFlow";
import { CloudUseCases } from "./components/CloudUseCases";
import { CloudBenefits } from "./components/CloudBenefits";
import { CloudCTASection } from "./components/CloudCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function CloudComputingPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <CloudHero />
        <CloudCapabilities />
        
        {/* 🎨 ANIMATION ZONE: Cloud Infrastructure */}
        <AnimationPlaceholder 
          id="cloud-infrastructure-demo"
          title="Cloud Infrastructure Animation"
          description="Visualize cloud scalability - server provisioning, load balancing, or multi-region deployment"
          height="450px"
        />
        
        <CloudScalingFlow />
        <CloudUseCases />
        <CloudBenefits />
        <CloudCTASection />
      </main>
      <Footer />
    </div>
  );
}
