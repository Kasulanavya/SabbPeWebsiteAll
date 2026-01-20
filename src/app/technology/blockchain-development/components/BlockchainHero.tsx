"use client";

import { motion } from "framer-motion";
import styles from "./BlockchainHero.module.css";

export function BlockchainHero() {
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
            <span className={styles.badgeIcon}>🔗</span>
            <span className={styles.badgeText}>Blockchain Development</span>
          </motion.div>

          <h1 className={styles.title}>
            Records That Can't Be Changed
          </h1>
          
          <p className={styles.subtitle}>
            Blockchain is like a digital ledger that everyone can see but no one can alter. Every transaction in SabbPe gets recorded in a chain of information blocks that are permanently locked and verified by multiple sources. Think of it as writing in permanent ink across many notebooks at once—if someone tries to change one copy, everyone else's copy proves what really happened. This creates trust without needing a middleman to verify everything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
