import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { MetaverseHero } from "./components/MetaverseHero";
import { MetaverseCapabilities } from "./components/MetaverseCapabilities";
import { MetaverseApplications } from "./components/MetaverseApplications";
import { MetaverseBenefits } from "./components/MetaverseBenefits";
import { MetaverseCTASection } from "./components/MetaverseCTASection";
import styles from "./page.module.css";

export default function MetaverseARVRPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <MetaverseHero />
        <MetaverseCapabilities />
        <MetaverseApplications />
        <MetaverseBenefits />
        <MetaverseCTASection />
      </main>
      <Footer />
    </div>
  );
}
