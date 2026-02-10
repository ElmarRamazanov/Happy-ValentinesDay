import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { useLanguage } from '../context/LanguageContext'

const emojis = ['😊', '🤗', '💪', '🌟', '🎵', '🧡', '🌈', '🔥', '🦋']

function Reasons() {
  const [ref, isInView] = useInView(0.1)
  const { t } = useLanguage()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 12,
      },
    },
  }

  return (
    <section className="reasons-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {t.reasons.title} <span className="highlight">{t.reasons.count}</span> 💝
      </motion.h2>

      <motion.div
        className="reasons-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {t.reasons.items.map((text, i) => (
          <motion.div
            key={i}
            className="reason-card"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: '0 20px 60px rgba(255, 105, 135, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="reason-emoji"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                delay: i * 0.2 + 1,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              {emojis[i]}
            </motion.span>
            <p className="reason-text">{text}</p>
            <span className="reason-number">{i + 1}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Reasons
