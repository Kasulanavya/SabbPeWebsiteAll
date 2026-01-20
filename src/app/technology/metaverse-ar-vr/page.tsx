import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { MetaverseHero } from "./components/MetaverseHero";
import { MetaverseCapabilities } from "./components/MetaverseCapabilities";
import MetaversePaymentFlow from "./components/MetaversePaymentFlow";
import { MetaverseApplications } from "./components/MetaverseApplications";
import { MetaverseBenefits } from "./components/MetaverseBenefits";
import { MetaverseCTASection } from "./components/MetaverseCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function MetaverseARVRPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <MetaverseHero />
        <MetaverseCapabilities />
        
        {/* 🎨 ANIMATION ZONE: Virtual World Experience */}
        <AnimationPlaceholder 
          id="metaverse-vr-demo"
          title="Virtual World Animation"
          description="3D visualization - avatar interaction, virtual spaces, AR overlay, or gesture controls"
          height="450px"
        />
        
        <MetaversePaymentFlow />
        <MetaverseApplications />
        <MetaverseBenefits />
        <MetaverseCTASection />
      </main>
      <Footer />
    </div>
  );
}
