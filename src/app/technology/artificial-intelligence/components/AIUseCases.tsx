"use client";

import { motion } from "framer-motion";
import styles from "./AIUseCases.module.css";

const useCases = [
  {
    title: "Keeping Your Money Safe",
    description: "Every time you make a payment, AI examines your spending patterns in a split second. If something looks off - like a purchase from a country you've never visited - it flags it instantly, keeping your money protected without you lifting a finger."
  },
  {
    title: "Understanding Your Spending",
    description: "AI quietly tracks where your money goes and spots interesting patterns. It might notice you're spending more on subscriptions than you think, or that most of your money goes to groceries on weekends. These insights help you make smarter money decisions."
  },
  {
    title: "Getting Help When You Need It",
    description: "Got a question about a payment at 2 AM? Our AI chatbot is always ready to help. Just ask in plain English and it'll understand what you need - whether that's tracking a payment, understanding a charge, or fixing an issue."
  }
];

export function AIUseCases() {
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
          <h2 className={styles.title}>Real Benefits You'll Notice</h2>
          <p className={styles.subtitle}>
            How AI improves your daily payment experience
          </p>
        </motion.div>

        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{useCase.title}</h3>
              <p className={styles.cardDescription}>{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
