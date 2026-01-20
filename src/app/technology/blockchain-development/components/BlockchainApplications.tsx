"use client";

import { motion } from "framer-motion";
import styles from "./BlockchainApplications.module.css";

const applications = [
  {
    title: "Tamper-Proof Transaction History",
    description: "Every payment, refund, and settlement gets permanently recorded on the blockchain. If there's ever a dispute about a transaction, the blockchain provides undeniable proof of what happened, when it happened, and who was involved—protecting both merchants and customers from fraudulent claims."
  },
  {
    title: "Smart Contract Automation",
    description: "Certain payment conditions can trigger automatically when met. For example, a loyalty reward might release instantly when you hit a spending milestone, or a merchant payment might settle the moment goods are delivered—all handled automatically by blockchain without manual intervention."
  },
  {
    title: "Transparent Audit Trails",
    description: "For businesses and regulators, blockchain creates a complete, unchangeable audit trail of every financial transaction. This simplifies compliance, reduces accounting errors, and makes financial audits straightforward—everything is already documented and verified on the blockchain."
  }
];

export function BlockchainApplications() {
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
          <h2 className={styles.title}>Real-World Applications</h2>
          <p className={styles.subtitle}>
            How blockchain solves payment challenges
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
