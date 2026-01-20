"use client";

import { motion } from "framer-motion";
import styles from "./AICapabilities.module.css";

const capabilities = [
  {
    icon: "🛡️",
    title: "Payment Protection",
    description: "AI watches every transaction like a security guard, instantly flagging anything unusual while you go about your day worry-free."
  },
  {
    icon: "📊",
    title: "Smart Spending Insights",
    description: "Your AI assistant learns your spending habits and provides helpful insights - like noticing you spend more on coffee than you realized."
  },
  {
    icon: "🎯",
    title: "Faster Payments",
    description: "Behind the scenes, AI picks the quickest route for your payments, ensuring your money reaches its destination fast every time."
  },
  {
    icon: "💬",
    title: "24/7 Chat Support",
    description: "Get instant answers to your payment questions anytime. Our AI chatbot understands what you're asking and helps immediately."
  },
  {
    icon: "🔍",
    title: "Pattern Learning",
    description: "The more you use SabbPe, the smarter it gets - learning your patterns to make your experience more personalized and secure."
  },
  {
    icon: "⚡",
    title: "Background Optimization",
    description: "AI works behind the scenes to make your app faster and smoother - you just notice everything works better."
  }
];

export function AICapabilities() {
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
          <h2 className={styles.title}>What AI Does for You</h2>
          <p className={styles.subtitle}>
            Simple ways AI makes your payment experience better
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{capability.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
