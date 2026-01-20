import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { ChatbotHero } from "./components/ChatbotHero";
import { ChatbotFeatures } from "./components/ChatbotFeatures";
import ChatConversationFlow from "./components/ChatConversationFlow";
import { ChatbotUseCases } from "./components/ChatbotUseCases";
import { ChatbotBenefits } from "./components/ChatbotBenefits";
import { ChatbotCTASection } from "./components/ChatbotCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function ChatbotDevelopmentPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <ChatbotHero />
        <ChatbotFeatures />
        
        {/* 🎨 ANIMATION ZONE: Live Chatbot Demo */}
        <AnimationPlaceholder 
          id="chatbot-conversation-demo"
          title="Live Chatbot Demo Animation"
          description="Interactive chatbot conversation - typing indicators, NLP processing, or sentiment analysis"
          height="450px"
        />
        
        <ChatConversationFlow />
        <ChatbotUseCases />
        <ChatbotBenefits />
        <ChatbotCTASection />
      </main>
      <Footer />
    </div>
  );
}
