"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./loyalty.module.scss";

export default function LoyaltyPage() {
  return (
    <main className={styles.loyaltyPage}>
      {/* Hero Section */}
      <section className={styles.container + " " + styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroContent}
        >
          <div className={styles.badge}>
            <span className={styles.badgeText}>SaaS Platforms</span>
          </div>

          <h1 className={styles.heroTitle}>
            Loyalty{" "}
            <span className={styles.gradientText}>
              Platforms
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Advanced reward engines designed to drive customer retention and engagement. 
            Build loyalty programs that keep customers coming back.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.primaryButton}
              >
                Talk to Sales
              </motion.button>
            </Link>

            <Link href="/">
              <button className={styles.secondaryButton}>
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.featureGrid}
        >
          {[
            {
              title: "Points Management",
              description: "Flexible points systems with custom rules",
            },
            {
              title: "Reward Catalog",
              description: "Curated rewards that customers actually want",
            },
            {
              title: "Gamification",
              description: "Boost engagement with challenges and tiers",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={styles.featureCard}
            >
              <h3 className={styles.featureTitle}>
                {feature.title}
              </h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Placeholder Section */}
      <section className={styles.container}>
        <div className={styles.placeholderSection}>
          <h2 className={styles.placeholderTitle}>
            Transform customer relationships with loyalty
          </h2>
          <p className={styles.placeholderDescription}>
            Reduce churn, increase lifetime value, and build lasting customer relationships 
            with powerful loyalty programs.
          </p>
          <Link href="/contact">
            <button className={styles.ctaButton}>
              Schedule a Demo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
