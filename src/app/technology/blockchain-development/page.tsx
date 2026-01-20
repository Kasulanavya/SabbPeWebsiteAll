import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { BlockchainHero } from "./components/BlockchainHero";
import { BlockchainFeatures } from "./components/BlockchainFeatures";
import BlockCreationFlow from "./components/BlockCreationFlow";
import { BlockchainApplications } from "./components/BlockchainApplications";
import { BlockchainBenefits } from "./components/BlockchainBenefits";
import { BlockchainCTASection } from "./components/BlockchainCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function BlockchainPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <BlockchainHero />
        <BlockchainFeatures />
        
        {/* 🎨 ANIMATION ZONE: Blockchain Network */}
        <AnimationPlaceholder 
          id="blockchain-network-demo"
          title="Blockchain Network Animation"
          description="Show decentralized network - nodes connecting, consensus mechanism, or smart contract execution"
          height="450px"
        />
        
        <BlockCreationFlow />
        <BlockchainApplications />
        <BlockchainBenefits />
        <BlockchainCTASection />
      </main>
      <Footer />
    </div>
  );
}
