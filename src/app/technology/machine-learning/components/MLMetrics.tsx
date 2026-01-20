"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./MLMetrics.module.css";

const metrics = [
  {
    title: "Learning Accuracy",
    metric: "96%",
    description: "Correctly identifies your patterns"
  },
  {
    title: "Continuous Updates",
    metric: "2 hrs",
    description: "App learns from new transactions"
  },
  {
    title: "Instant Decisions",
    metric: "<10ms",
    description: "Real-time protection checks"
  },
  {
    title: "Data Points Tracked",
    metric: "500+",
    description: "Patterns analyzed per transaction"
  }
];

export function MLMetrics() {
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
          <h2 className={styles.title}>The Numbers Behind the Learning</h2>
          <p className={styles.subtitle}>
            How Machine Learning delivers better results
          </p>
        </motion.div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.metric}>
                <AnimatedCounter value={metric.metric} />
              </div>
              <h3 className={styles.cardTitle}>{metric.title}</h3>
              <p className={styles.cardDescription}>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
