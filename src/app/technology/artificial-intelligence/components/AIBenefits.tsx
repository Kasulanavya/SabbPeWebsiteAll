"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./AIBenefits.module.css";

const benefits = [
  {
    title: "Better Protection",
    metric: "98%",
    description: "Fraud detected and stopped automatically"
  },
  {
    title: "Lightning Fast",
    metric: "<50ms",
    description: "Instant payment approvals"
  },
  {
    title: "Save Money",
    metric: "60%",
    description: "Lower costs with smart automation"
  },
  {
    title: "Less Hassle",
    metric: "85%",
    description: "Fewer false payment blocks"
  }
];

export function AIBenefits() {
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
          <h2 className={styles.title}>The Results Speak for Themselves</h2>
          <p className={styles.subtitle}>
            Real numbers showing how AI makes payments better
          </p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
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
                <AnimatedCounter value={benefit.metric} />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
