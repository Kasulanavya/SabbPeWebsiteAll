"use client";

import { motion } from "framer-motion";
import styles from "./CloudHero.module.css";

export function CloudHero() {
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
            <span className={styles.badgeIcon}>☁️</span>
            <span className={styles.badgeText}>Cloud Computing</span>
          </motion.div>

          <h1 className={styles.title}>
            Always On, Always Reliable
          </h1>
          
          <p className={styles.subtitle}>
            Cloud computing is what keeps SabbPe running smoothly 24/7, no matter how many people are using it. Instead of relying on physical servers that can break down or run out of space, we use cloud technology that automatically adapts to handle thousands of payments at once. Think of it like electricity—you don't need to worry about where it comes from or how it works, you just know it'll be there when you flip the switch. That's how cloud computing powers your payments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
