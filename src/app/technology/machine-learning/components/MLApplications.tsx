"use client";

import { motion } from "framer-motion";
import styles from "./MLApplications.module.css";

const applications = [
  {
    title: "Security That Learns",
    description: "Every time you make a payment, SabbPe learns what 'normal' looks like for you. After weeks of watching your habits, it can instantly recognize when something unusual happens—like a payment from a new location or an unexpected large amount—and protect you automatically."
  },
  {
    title: "Insights That Matter",
    description: "Machine Learning doesn't just track your spending—it understands it. The app notices patterns you might miss, like spending more on weekends or subscriptions adding up. These observations help you make smarter decisions about your money based on your actual behavior."
  },
  {
    title: "Payments That Work Better",
    description: "Every successful payment teaches the app something useful—which methods work best for you, which merchants are fastest, what times have fewer issues. Over months of learning, your payments become more reliable and faster without you doing anything differently."
  }
];

export function MLApplications() {
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
          <h2 className={styles.title}>What This Means for You</h2>
          <p className={styles.subtitle}>
            Real benefits you'll experience as the app learns
          </p>
        </motion.div>

        <div className={styles.grid}>
          {applications.map((application, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{application.title}</h3>
              <p className={styles.cardDescription}>{application.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
