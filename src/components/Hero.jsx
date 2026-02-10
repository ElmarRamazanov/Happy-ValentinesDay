import { motion } from 'framer-motion'

function Hero() {
  const title = "Sevgililer Günün Kutlu Olsun"

  return (
    <section className="hero-section">
      <motion.div
        className="hero-badge"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.2 }}
      >
        <span className="hero-date">14</span>
        <span className="hero-month">Şubat</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            className="hero-letter"
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              delay: 0.8 + i * 0.04,
              type: 'spring',
              stiffness: 150,
              damping: 12,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        className="hero-heart-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
      >
        <span className="divider-line"></span>
        <motion.span
          className="divider-heart"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          💖
        </motion.span>
        <span className="divider-line"></span>
      </motion.div>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        Seni seviyorum, bugün ve her gün... 💕
      </motion.p>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 3.5 },
          y: { delay: 3.5, duration: 1.5, repeat: Infinity },
        }}
      >
        <span>Aşağı kaydır</span>
        <span className="scroll-arrow">↓</span>
      </motion.div>
    </section>
  )
}

export default Hero
