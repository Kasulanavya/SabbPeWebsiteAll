"use client";

import { motion } from "framer-motion";
import styles from "./MetaverseApplications.module.css";

const applications = [
  {
    title: "Retail AR Showrooms",
    description: "Merchants create augmented reality showrooms where customers can virtually place furniture in their homes, try on clothes using their phone camera, or see how products look in real-world settings. When ready to buy, payment happens instantly through SabbPe without leaving the AR experience—creating a seamless journey from discovery to purchase."
  },
  {
    title: "Metaverse Marketplaces",
    description: "Virtual worlds host complete marketplaces where businesses sell both digital and physical goods. A virtual storefront in the metaverse lets customers browse, interact with 3D products, and make purchases that ship to their real-world address—or deliver instantly to their digital wallet if they're buying virtual items."
  },
  {
    title: "VR Training and Certification",
    description: "Professional training programs in VR require payment for courses, certifications, or specialized equipment within the virtual environment. SabbPe enables businesses to monetize VR education, allowing students to enroll and pay for programs without leaving the immersive learning experience."
  }
];

export function MetaverseApplications() {
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
          <h2 className={styles.title}>Business in Virtual Spaces</h2>
          <p className={styles.subtitle}>
            How companies use AR/VR for commerce
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
