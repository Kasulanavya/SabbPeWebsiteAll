import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { BigDataHero } from "./components/BigDataHero";
import { DataProcessing } from "./components/DataProcessing";
import { DataFlowVisualization } from "./components/DataFlowVisualization";
import { AnalyticsCapabilities } from "./components/AnalyticsCapabilities";
import { DataInsights } from "./components/DataInsights";
import { BigDataCTASection } from "./components/BigDataCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function BigDataAnalyticsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <BigDataHero />
        <DataProcessing />
        
        {/* 🎨 ANIMATION ZONE: Data Pipeline Visualization */}
        <AnimationPlaceholder 
          id="bigdata-pipeline-demo"
          title="Data Pipeline Animation"
          description="Show real-time data processing - streaming data, batch processing, or analytics dashboard"
          height="450px"
        />
        
        <DataFlowVisualization />
        <AnalyticsCapabilities />
        <DataInsights />
        <BigDataCTASection />
      </main>
      <Footer />
    </div>
  );
}
