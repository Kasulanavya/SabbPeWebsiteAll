import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { PWAHero } from "./components/PWAHero";
import { PWAFeatures } from "./components/PWAFeatures";
import { PWAApplications } from "./components/PWAApplications";
import { PWABenefits } from "./components/PWABenefits";
import { PWACTASection } from "./components/PWACTASection";
import styles from "./page.module.css";

export default function ProgressiveWebAppsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <PWAHero />
        <PWAFeatures />
        <PWAApplications />
        <PWABenefits />
        <PWACTASection />
      </main>
      <Footer />
    </div>
  );
}
