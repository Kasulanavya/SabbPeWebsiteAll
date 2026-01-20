"use client";

import { motion } from "framer-motion";
import styles from "./MetaverseHero.module.css";

export function MetaverseHero() {
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
            <span className={styles.badgeIcon}>🥽</span>
            <span className={styles.badgeText}>Metaverse & AR/VR</span>
          </motion.div>

          <h1 className={styles.title}>
            Payments in Virtual Worlds
          </h1>
          
          <p className={styles.subtitle}>
            The Metaverse, Augmented Reality (AR), and Virtual Reality (VR) are creating new digital spaces where people shop, socialize, and do business. SabbPe brings payments into these immersive experiences—imagine trying on virtual clothes in AR and buying them with a gesture, or purchasing virtual land in the metaverse with the same ease as online shopping. These technologies blend the digital and physical worlds, and payments need to work seamlessly across both. No typing card numbers in virtual reality—just natural interactions that feel like the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
