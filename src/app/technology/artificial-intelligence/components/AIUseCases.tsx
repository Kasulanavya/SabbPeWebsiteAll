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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(37, 99, 235, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Step number indicator - shows this is a sequential process */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(37, 99, 235, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#60a5fa"
                }}
              >
                {index + 1}
              </motion.div>
              
              {/* Title slides in from left - shows flow direction */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {useCase.title}
              </motion.h3>
              
              {/* Description appears word by word effect */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2 + 0.4,
                  duration: 0.8
                }}
              >
                {useCase.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
