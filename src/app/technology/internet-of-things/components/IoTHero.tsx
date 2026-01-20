"use client";

import { motion } from "framer-motion";
import styles from "./IoTHero.module.css";

export function IoTHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeIcon}>📡</span>
            <span className={styles.badgeText}>Internet of Things</span>
          </motion.div>

          <h1 className={styles.title}>
            Devices That Talk to Your Payments
          </h1>
          
          <p className={styles.subtitle}>
            Internet of Things (IoT) connects everyday devices to the internet so they can communicate and make smart decisions. Imagine your smartwatch approving a payment, your car paying for fuel automatically, or a vending machine processing transactions without you touching your phone. IoT makes payments happen seamlessly through connected devices, creating experiences where money moves as naturally as information—all while keeping your financial data secure and under your control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
