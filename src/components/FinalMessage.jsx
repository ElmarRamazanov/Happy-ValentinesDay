import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { useState } from 'react'

function FinalMessage() {
  const [ref, isInView] = useInView(0.2)
  const [showSurprise, setShowSurprise] = useState(false)

  return (
    <section className="final-section" ref={ref}>
      <div className="final-glow" />

      <motion.div
        className="final-content"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="big-heart"
          initial={{ scale: 0 }}
          animate={isInView ? {
            scale: [0, 1.2, 1],
          } : {}}
          transition={{ delay: 0.3, duration: 1, type: 'spring' }}
        >
          <motion.span
            animate={{
              scale: [1, 1.15, 1],
              filter: [
                'drop-shadow(0 0 20px rgba(255,105,135,0.5))',
                'drop-shadow(0 0 40px rgba(255,105,135,0.8))',
                'drop-shadow(0 0 20px rgba(255,105,135,0.5))',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'inline-block', fontSize: '5rem' }}
          >
            ❤️
          </motion.span>
        </motion.div>

        <motion.h2
          className="final-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Seni Çok Seviyorum
        </motion.h2>

        <motion.p
          className="final-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Sen benim dünyamsın, yıldızımsın, her şeyimsin.
          <br />
          Seninle her gün Sevgililer Günü. 💞
        </motion.p>

        <motion.button
          className="surprise-btn"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255,105,135,0.5)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowSurprise(true)}
        >
          Sürprizin Var! 🎁
        </motion.button>

        {showSurprise && (
          <motion.div
            className="surprise-reveal"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            <div className="surprise-emojis">
              {['🥰', '💐', '🍫', '💝', '🌹', '💋'].map((emoji, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="surprise-emoji"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
            <p className="surprise-text">
              Bugün ve her gün sadece senin için yaşıyorum!
              <br />
              <span className="surprise-highlight">İyi ki varsın, iyi ki benimlesin! 💗</span>
            </p>
            <motion.div
              className="confetti-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(30)].map((_, i) => (
                <motion.span
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    '--hue': Math.random() * 60 + 320,
                    '--size': `${Math.random() * 8 + 4}px`,
                  }}
                  initial={{ y: -20, opacity: 1 }}
                  animate={{
                    y: 300,
                    opacity: 0,
                    x: (Math.random() - 0.5) * 200,
                    rotate: Math.random() * 720,
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1.5,
                    delay: Math.random() * 0.5,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      <motion.p
        className="footer-text"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.5 }}
      >
        Sonsuz sevgilerimle ❤️ 14 Şubat 2026
      </motion.p>
    </section>
  )
}

export default FinalMessage
