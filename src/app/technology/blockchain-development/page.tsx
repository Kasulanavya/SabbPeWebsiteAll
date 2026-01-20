import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { BlockchainHero } from "./components/BlockchainHero";
import { BlockchainFeatures } from "./components/BlockchainFeatures";
import { BlockchainApplications } from "./components/BlockchainApplications";
import { BlockchainBenefits } from "./components/BlockchainBenefits";
import { BlockchainCTASection } from "./components/BlockchainCTASection";
import styles from "./page.module.css";

export default function BlockchainPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <BlockchainHero />
        <BlockchainFeatures />
        <BlockchainApplications />
        <BlockchainBenefits />
        <BlockchainCTASection />
      </main>
      <Footer />
    </div>
  );
}
