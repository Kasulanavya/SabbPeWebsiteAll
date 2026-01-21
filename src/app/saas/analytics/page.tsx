"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./analytics.module.scss";

export default function AnalyticsPage() {
  return (
    <main className={styles.analyticsPage}>
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
            Analytics{" "}
            <span className={styles.gradientText}>
              Dashboards
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Real-time insights and comprehensive transaction reporting. Make data-driven 
            decisions with powerful analytics and visualization tools.
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
              title: "Real-time Insights",
              description: "Live transaction data and performance metrics",
            },
            {
              title: "Custom Reports",
              description: "Generate detailed reports on demand",
            },
            {
              title: "Predictive Analytics",
              description: "Forecast trends and identify opportunities",
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
            Unlock the power of data-driven decisions
          </h2>
          <p className={styles.placeholderDescription}>
            Gain comprehensive visibility into your business metrics with intuitive 
            dashboards and actionable insights.
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
