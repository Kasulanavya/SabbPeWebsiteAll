"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./DataInsights.module.css";

const insights = [
  {
    title: "Handling Volume",
    metric: "10M+",
    description: "Payments analyzed every day"
  },
  {
    title: "Complete History",
    metric: "5 PB",
    description: "Transaction records stored"
  },
  {
    title: "Instant Answers",
    metric: "<2s",
    description: "Get insights from millions of records"
  },
  {
    title: "Always Current",
    metric: "Real-Time",
    description: "Information updates as it happens"
  }
];

export function DataInsights() {
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
          <h2 className={styles.title}>Scale That Works Behind the Scenes</h2>
          <p className={styles.subtitle}>
            How we handle massive payment volumes reliably
          </p>
        </motion.div>

        <div className={styles.grid}>
          {insights.map((insight, index) => (
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
                <AnimatedCounter value={insight.metric} />
              </div>
              <h3 className={styles.cardTitle}>{insight.title}</h3>
              <p className={styles.cardDescription}>{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
