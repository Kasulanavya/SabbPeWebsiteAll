"use client";

import { motion } from "framer-motion";
import styles from "./AIHero.module.css";

export function AIHero() {
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
            <span className={styles.badgeIcon}>🤖</span>
            <span className={styles.badgeText}>Artificial Intelligence</span>
          </motion.div>

          <h1 className={styles.title}>
            Your App's Intelligent Guardian
          </h1>
          
          <p className={styles.subtitle}>
            Think of artificial intelligence as the invisible brain working behind every tap and swipe in the SabbPe app. While you see a clean, simple interface on your phone, AI is constantly analyzing, learning, and protecting your payments in real-time. It's like having a personal financial assistant that never sleeps, always watching over your money and making your payment experience smoother with every transaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
