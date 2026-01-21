"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./payment-platforms.module.scss";

export default function PaymentPlatformsPage() {
  return (
    <main className={styles.paymentPlatformsPage}>
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
            SaaS Payment{" "}
            <span className={styles.gradientText}>
              Platforms
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Integrated billing and invoicing solutions built for banks and NBFCs. Scale your 
            payment infrastructure with enterprise-grade reliability and security.
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
              title: "Integrated Billing",
              description: "Seamless billing management with automated invoicing",
            },
            {
              title: "Recurring Payments",
              description: "Subscription engine for recurring revenue models",
            },
            {
              title: "Real-time Settlement",
              description: "Instant fund settlement with transparent reporting",
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
            Ready to transform your payment infrastructure?
          </h2>
          <p className={styles.placeholderDescription}>
            Join leading banks and NBFCs leveraging SabbPe's SaaS payment platforms 
            to scale and innovate.
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
