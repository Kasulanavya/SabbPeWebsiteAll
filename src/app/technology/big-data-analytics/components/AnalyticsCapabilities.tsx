"use client";

import { motion } from "framer-motion";
import styles from "./AnalyticsCapabilities.module.css";

const capabilities = [
  {
    title: "Understanding What Your Customers Do",
    description: "Discover when your customers are most active, which features they use, and how their behavior changes over time. See patterns you'd never spot manually, helping you make decisions based on real evidence instead of guesswork."
  },
  {
    title: "Insights That Help You Grow",
    description: "Should you offer a weekend promotion? Is your loyalty program working? Which products sell together? Analytics answers these questions by showing actual customer behavior, giving you confidence to make smart business moves."
  },
  {
    title: "Complete Visibility Into Your Payments",
    description: "Track exactly where your money is, when settlements arrive, and why any payment was flagged. No more wondering or waiting—just clear, transparent information about your financial operations whenever you need it."
  }
];

export function AnalyticsCapabilities() {
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
          <h2 className={styles.title}>Smart Decisions Based on Real Behavior</h2>
          <p className={styles.subtitle}>
            How analytics helps you understand and grow your business
          </p>
        </motion.div>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
