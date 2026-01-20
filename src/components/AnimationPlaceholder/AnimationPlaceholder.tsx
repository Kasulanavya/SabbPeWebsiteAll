'use client';

import { motion } from 'framer-motion';
import styles from './AnimationPlaceholder.module.css';

interface AnimationPlaceholderProps {
  id: string;
  title: string;
  description?: string;
  height?: string;
}

/**
 * Animation Placeholder Component
 * 
 * This is a placeholder where your team can add custom animations.
 * Each placeholder has a unique ID for easy identification.
 * 
 * To add your animation:
 * 1. Find this component by its ID
 * 2. Replace the content inside <motion.div> with your animation
 * 3. Keep the same structure or customize as needed
 * 4. Use Framer Motion for animations (already imported)
 */
export function AnimationPlaceholder({ 
  id, 
  title, 
  description,
  height = "300px" 
}: AnimationPlaceholderProps) {
  return (
    <section className={styles.placeholder} style={{ minHeight: height }}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>Animation Zone: {id}</div>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
          
          {/* 👇 ADD YOUR CUSTOM ANIMATION HERE 👇 */}
          <div className={styles.animationArea}>
            <motion.div
              className={styles.placeholder}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className={styles.icon}>✨</span>
              <p>Your custom animation goes here</p>
            </motion.div>
          </div>
          {/* 👆 ADD YOUR CUSTOM ANIMATION ABOVE 👆 */}
          
          <div className={styles.instructions}>
            <p>💡 <strong>Team Instructions:</strong></p>
            <ul>
              <li>This zone is ready for your custom animations</li>
              <li>Use Framer Motion (imported) for smooth animations</li>
              <li>Reference: AI/ML/BigData flow components for examples</li>
              <li>Keep animations smooth (0.6-0.8s transitions)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
