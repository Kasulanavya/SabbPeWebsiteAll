"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotUseCases.module.css";

const useCases = [
  {
    title: "Transaction Support",
    description: "Need to check if a payment went through? The chatbot instantly pulls up your recent transactions, shows their status, and explains any holds or delays—all without waiting for an agent. You can also dispute charges, request refunds, or get receipts sent to your email, all through simple conversation."
  },
  {
    title: "Account Assistance",
    description: "Forgot your PIN? Need to update your phone number? Want to know your card balance? The chatbot handles routine account tasks securely, verifying your identity through simple questions before making changes. It can also explain features, activate services, or guide you through security settings step-by-step."
  },
  {
    title: "Payment Guidance",
    description: "Not sure how to send money internationally? Confused about BNPL terms? The chatbot walks you through payment processes with clear instructions, showing exactly what to tap and what information you need. It answers follow-up questions until you feel confident completing the task yourself."
  }
];

export function ChatbotUseCases() {
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
          <h2 className={styles.title}>How Chatbots Help You</h2>
          <p className={styles.subtitle}>
            Real scenarios where instant support makes a difference
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
