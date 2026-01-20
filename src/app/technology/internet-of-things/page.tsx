import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { IoTHero } from "./components/IoTHero";
import { IoTCapabilities } from "./components/IoTCapabilities";
import { IoTApplications } from "./components/IoTApplications";
import { IoTBenefits } from "./components/IoTBenefits";
import { IoTCTASection } from "./components/IoTCTASection";
import styles from "./page.module.css";

export default function InternetOfThingsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <IoTHero />
        <IoTCapabilities />
        <IoTApplications />
        <IoTBenefits />
        <IoTCTASection />
      </main>
      <Footer />
    </div>
  );
}
