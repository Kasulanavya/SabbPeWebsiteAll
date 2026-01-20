"use client";

import { motion } from "framer-motion";
import styles from "./CloudUseCases.module.css";

const useCases = [
  {
    title: "Scaling for Growth",
    description: "As more people join SabbPe, the cloud seamlessly adds more capacity without you ever experiencing slowdowns. Whether you have 100 users or 100,000, the system handles growth automatically, letting you focus on business instead of worrying about infrastructure."
  },
  {
    title: "Disaster Recovery",
    description: "If something unexpected happens—a power outage, natural disaster, or technical issue—your data and services instantly switch to backup systems in different locations. You keep making payments while the cloud handles the problem behind the scenes."
  },
  {
    title: "Cost Efficiency",
    description: "Instead of buying expensive servers that sit idle most of the time, you only use what you need when you need it. During quiet periods, costs stay low. During busy times, capacity increases. It's like paying for electricity—you only pay for what you actually use."
  }
];

export function CloudUseCases() {
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
          <h2 className={styles.title}>Real Business Benefits</h2>
          <p className={styles.subtitle}>
            How cloud technology solves everyday payment challenges
          </p>
        </motion.div>

        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{useCase.title}</h3>
              <p className={styles.cardDescription}>{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
