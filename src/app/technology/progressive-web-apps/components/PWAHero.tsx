"use client";

import { motion } from "framer-motion";
import styles from "./PWAHero.module.css";

export function PWAHero() {
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
            <span className={styles.badgeIcon}>📱</span>
            <span className={styles.badgeText}>Progressive Web Apps</span>
          </motion.div>

          <h1 className={styles.title}>
            App Experience Without the App Store
          </h1>
          
          <p className={styles.subtitle}>
            Progressive Web Apps (PWAs) give you the best of both worlds—the convenience of a website you can access from any browser, combined with the smooth, fast experience of a native mobile app. No downloads from app stores, no updates to manage, and no storage space eaten up on your phone. Just visit SabbPe through your browser and it feels like a dedicated app, working even when your internet connection drops. It's the future of mobile experiences without the traditional hassle of apps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
