import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { PWAHero } from "./components/PWAHero";
import { PWAFeatures } from "./components/PWAFeatures";
import PWAInstallFlow from "./components/PWAInstallFlow";
import { PWAApplications } from "./components/PWAApplications";
import { PWABenefits } from "./components/PWABenefits";
import { PWACTASection } from "./components/PWACTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function ProgressiveWebAppsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <PWAHero />
        <PWAFeatures />
        
        {/* 🎨 ANIMATION ZONE: PWA Features Demo */}
        <AnimationPlaceholder 
          id="pwa-features-demo"
          title="PWA Features Animation"
          description="Show offline mode, push notifications, add-to-home-screen, or service worker in action"
          height="450px"
        />
        
        <PWAInstallFlow />
        <PWAApplications />
        <PWABenefits />
        <PWACTASection />
      </main>
      <Footer />
    </div>
  );
}
