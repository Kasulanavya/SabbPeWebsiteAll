"use client";

import { motion } from "framer-motion";
import styles from "./PWAFeatures.module.css";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Pages load instantly, transitions are smooth, and everything responds immediately—just like a native app installed on your phone."
  },
  {
    icon: "📴",
    title: "Works Offline",
    description: "Lost your internet connection? No problem. PWAs save important information so you can view recent transactions and navigate the app even when offline."
  },
  {
    icon: "🏠",
    title: "Add to Home Screen",
    description: "Save SabbPe to your phone's home screen like any regular app. It looks and feels identical to apps from the app store, but takes almost no storage space."
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description: "Get instant alerts about payments, transaction confirmations, and account activity—just like notifications from traditional apps."
  },
  {
    icon: "🔄",
    title: "Auto-Updates",
    description: "Always get the latest version automatically when you open it. No manual updates to download, no 'Update Required' messages blocking your way."
  },
  {
    icon: "💾",
    title: "Minimal Storage",
    description: "PWAs use a fraction of the space traditional apps need. No more deleting photos to make room for app updates—everything stays in the cloud."
  }
];

export function PWAFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Why PWAs Feel Like Magic</h2>
          <p className={styles.subtitle}>
            App-like experience without traditional app limitations
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{feature.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
