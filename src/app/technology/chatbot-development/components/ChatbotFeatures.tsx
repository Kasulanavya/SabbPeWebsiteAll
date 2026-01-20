"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotFeatures.module.css";

const features = [
  {
    icon: "🗣️",
    title: "Natural Conversations",
    description: "Chat in plain language just like texting a friend. The bot understands what you mean, not just exact keywords, making help feel natural and easy."
  },
  {
    icon: "⚡",
    title: "Instant Responses",
    description: "Get answers immediately without waiting in queue or listening to hold music. The chatbot responds in seconds, solving simple issues on the spot."
  },
  {
    icon: "🌍",
    title: "Multiple Languages",
    description: "Communicate in your preferred language. The chatbot can switch between languages seamlessly, helping more customers feel comfortable getting support."
  },
  {
    icon: "🧠",
    title: "Learns From Interactions",
    description: "Every conversation makes the bot smarter. It remembers common questions, learns better answers, and continuously improves its helpfulness."
  },
  {
    icon: "🔄",
    title: "Seamless Handoffs",
    description: "Complex issues automatically connect you to a human agent, and the bot shares the conversation history so you don't repeat yourself."
  },
  {
    icon: "📊",
    title: "Personalized Help",
    description: "The chatbot recognizes you and your account, giving relevant answers based on your transaction history and preferences without asking basic details repeatedly."
  }
];

export function ChatbotFeatures() {
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
          <h2 className={styles.title}>What Makes Our Chatbots Smart</h2>
          <p className={styles.subtitle}>
            Features that create helpful, human-like conversations
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{feature.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
