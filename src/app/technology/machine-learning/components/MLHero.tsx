"use client";

import { motion } from "framer-motion";
import styles from "./MLHero.module.css";

export function MLHero() {
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
            <span className={styles.badgeIcon}>🧠</span>
            <span className={styles.badgeText}>Machine Learning</span>
          </motion.div>

          <h1 className={styles.title}>
            Learning from Every Transaction
          </h1>
          
          <p className={styles.subtitle}>
            Machine Learning is like the difference between following a recipe exactly every time versus getting better at cooking through practice. While AI is the brain that powers your app's smart features, Machine Learning is what makes that brain smarter with every payment you make. It's the technology that helps SabbPe remember patterns, spot trends, and continuously improve how it serves you—without you ever having to teach it anything manually.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
