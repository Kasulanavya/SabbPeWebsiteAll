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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 12px 40px rgba(37, 99, 235, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Transformation indicator - raw data → insights */}
              <motion.div
                className={styles.transformIndicator}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut"
                }}
              />

              {/* Title with reveal animation */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {capability.title}
              </motion.h3>
              
              {/* Description follows */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {capability.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
