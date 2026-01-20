import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { CloudHero } from "./components/CloudHero";
import { CloudCapabilities } from "./components/CloudCapabilities";
import { CloudUseCases } from "./components/CloudUseCases";
import { CloudBenefits } from "./components/CloudBenefits";
import { CloudCTASection } from "./components/CloudCTASection";
import styles from "./page.module.css";

export default function CloudComputingPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <CloudHero />
        <CloudCapabilities />
        <CloudUseCases />
        <CloudBenefits />
        <CloudCTASection />
      </main>
      <Footer />
    </div>
  );
}
