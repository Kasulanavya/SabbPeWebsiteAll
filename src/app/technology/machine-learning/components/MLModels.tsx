"use client";

import { motion } from "framer-motion";
import styles from "./MLModels.module.css";

const models = [
  {
    icon: "🛡️",
    title: "Learning Your Normal",
    description: "The app watches your typical spending habits—favorite stores, usual amounts, regular times—so it can instantly spot when something doesn't fit your pattern."
  },
  {
    icon: "📊",
    title: "Smarter Over Time",
    description: "Every payment you make teaches the app something new. The more you use SabbPe, the better it understands what's normal for you and what's suspicious."
  },
  {
    icon: "🎯",
    title: "Personalized Insights",
    description: "Based on what it's learned about your habits, the app can give you meaningful spending insights that actually make sense for your lifestyle."
  },
  {
    icon: "⚡",
    title: "Better Payment Routes",
    description: "The app learns which payment paths work best for you and automatically uses them, making your transactions faster and more reliable over time."
  },
  {
    icon: "🔍",
    title: "Spotting the Unusual",
    description: "When a payment looks different from everything the app has learned about you—wrong location, odd amount, strange merchant—it notices immediately."
  },
  {
    icon: "💡",
    title: "Adapting to You",
    description: "Your home screen, shortcuts, and suggestions evolve based on how you actually use the app, creating an experience that feels custom-built for you."
  }
];

export function MLModels() {
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
          <h2 className={styles.title}>How Your App Gets Smarter</h2>
          <p className={styles.subtitle}>
            Simple ways Machine Learning improves with every transaction
          </p>
        </motion.div>

        <div className={styles.grid}>
          {models.map((model, index) => (
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
                <div className={styles.icon}>{model.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <p className={styles.cardDescription}>{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
