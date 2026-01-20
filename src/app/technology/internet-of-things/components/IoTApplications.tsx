"use client";

import { motion } from "framer-motion";
import styles from "./IoTApplications.module.css";

const applications = [
  {
    title: "Merchant IoT Integration",
    description: "Retail stores and restaurants can deploy IoT-enabled payment terminals, smart POS systems, and connected inventory that automatically processes transactions. When a customer pays through any connected device—phone, watch, or card—the merchant's IoT system instantly records the sale, updates inventory, and sends confirmation—all without manual intervention."
  },
  {
    title: "Fleet and Logistics Payments",
    description: "Delivery vehicles and transport fleets can handle payments autonomously. A delivery truck automatically pays tolls, fuel, and parking as it goes. The driver focuses on delivery while the vehicle handles all financial transactions securely, creating detailed expense reports without paperwork."
  },
  {
    title: "Usage-Based Billing",
    description: "IoT devices enable pay-as-you-go models. Electric vehicle charging stations bill exactly for power consumed, co-working spaces charge for time actually used, and equipment rentals automatically calculate costs based on real usage—all tracked and billed through connected sensors without manual meter reading."
  }
];

export function IoTApplications() {
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
          <h2 className={styles.title}>Business Applications</h2>
          <p className={styles.subtitle}>
            How businesses use IoT for smarter payments
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
