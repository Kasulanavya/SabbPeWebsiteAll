import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { IoTHero } from "./components/IoTHero";
import { IoTCapabilities } from "./components/IoTCapabilities";
import IoTConnectionFlow from "./components/IoTConnectionFlow";
import { IoTApplications } from "./components/IoTApplications";
import { IoTBenefits } from "./components/IoTBenefits";
import { IoTCTASection } from "./components/IoTCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function InternetOfThingsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <IoTHero />
        <IoTCapabilities />
        
        {/* 🎨 ANIMATION ZONE: IoT Ecosystem */}
        <AnimationPlaceholder 
          id="iot-ecosystem-demo"
          title="IoT Ecosystem Animation"
          description="Show connected devices - smart home network, sensor data flow, or device-to-cloud communication"
          height="450px"
        />
        
        <IoTConnectionFlow />
        <IoTApplications />
        <IoTBenefits />
        <IoTCTASection />
      </main>
      <Footer />
    </div>
  );
}
