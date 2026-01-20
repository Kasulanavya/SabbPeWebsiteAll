"use client";

import { motion } from "framer-motion";
import styles from "./PWAApplications.module.css";

const applications = [
  {
    title: "Cross-Platform Payments",
    description: "Use SabbPe seamlessly across all your devices—phone, tablet, laptop—without downloading different versions. The same experience works everywhere, and your sessions sync automatically so you can start a payment on your phone and complete it on your computer without missing a beat."
  },
  {
    title: "Low-Bandwidth Friendly",
    description: "PWAs are optimized to work well even on slow internet connections. The app loads critical features first and streams the rest in the background, ensuring you can always access your payment essentials even in areas with poor connectivity. Perfect for users in regions with unreliable networks."
  },
  {
    title: "Instant Access for Merchants",
    description: "Merchants don't need to install anything to start accepting payments through SabbPe. Just visit the merchant portal in any browser, add it to your home screen, and you have a full-featured point-of-sale system that works on any device—phone, tablet, or computer—with zero downloads required."
  }
];

export function PWAApplications() {
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
          <h2 className={styles.title}>Where PWAs Shine</h2>
          <p className={styles.subtitle}>
            Real advantages in everyday payment scenarios
          </p>
        </motion.div>

        <div className={styles.grid}>
          {applications.map((application, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{application.title}</h3>
              <p className={styles.cardDescription}>{application.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
