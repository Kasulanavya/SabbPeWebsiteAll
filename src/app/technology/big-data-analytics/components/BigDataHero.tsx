"use client";

import { motion } from "framer-motion";
import styles from "./BigDataHero.module.css";

export function BigDataHero() {
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
            <span className={styles.badgeIcon}>📊</span>
            <span className={styles.badgeText}>Big Data & Analytics</span>
          </motion.div>

          <h1 className={styles.title}>
            Turning Millions of Transactions into Clear Answers
          </h1>
          
          <p className={styles.subtitle}>
            Big Data & Analytics is like having a crystal-clear view of everything happening in your payments world. Every day, SabbPe processes thousands of payments from users and merchants—each one creating information about spending habits, payment success rates, popular times, and user behavior. Big Data means we can handle all this information without getting overwhelmed, and Analytics means we can turn those millions of data points into simple, useful answers that help you make better business decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
