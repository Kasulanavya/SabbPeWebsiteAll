"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./gift-cards.module.scss";

export default function GiftCardsPage() {
  return (
    <main className={styles.giftCardsPage}>
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
            Gift Card{" "}
            <span className={styles.gradientText}>
              Systems
            </span>
          </h1>

          <p className={styles.heroDescription}>
            End-to-end issuance and redemption management. Build customer loyalty and 
            increase revenue with powerful gift card solutions.
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
              title: "Easy Issuance",
              description: "Create and manage gift cards in minutes",
            },
            {
              title: "Flexible Redemption",
              description: "Multi-channel redemption options for customers",
            },
            {
              title: "Full Analytics",
              description: "Comprehensive insights into gift card usage",
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
            Launch your gift card program today
          </h2>
          <p className={styles.placeholderDescription}>
            Increase customer lifetime value and drive repeat purchases with 
            intelligent gift card management.
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
