"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotHero.module.css";

export function ChatbotHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeIcon}>💬</span>
            <span className={styles.badgeText}>Chatbot Development</span>
          </motion.div>

          <h1 className={styles.title}>
            Your 24/7 Digital Assistant
          </h1>
          
          <p className={styles.subtitle}>
            A chatbot is like having a customer service representative who never sleeps, never takes breaks, and can talk to thousands of people at once. In SabbPe, chatbots answer payment questions instantly, help users track transactions, resolve issues, and guide people through services—all through natural conversation. Think of it as texting with a helpful friend who knows everything about your payments and is always ready to assist, whether it's 3 PM or 3 AM.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
