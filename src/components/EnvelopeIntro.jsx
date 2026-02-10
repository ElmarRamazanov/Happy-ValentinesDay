import { motion } from 'framer-motion'
import { useState } from 'react'

function EnvelopeIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(onOpen, 1200)
  }

  return (
    <motion.div
      className="envelope-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="sparkle-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="sparkle-dot"
            style={{ '--i': i }}
          >
            ✦
          </span>
        ))}
      </motion.div>

      <motion.div
        className="envelope-container"
        initial={{ scale: 0, rotate: -10 }}
        animate={{
          scale: isOpening ? [1, 1.1, 0] : 1,
          rotate: isOpening ? [0, 0, 5] : 0,
          y: isOpening ? [0, -20, -100] : 0,
        }}
        transition={{
          duration: isOpening ? 1.2 : 0.8,
          type: isOpening ? 'tween' : 'spring',
          stiffness: 200,
          damping: 15,
        }}
        onClick={handleOpen}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`envelope ${isOpening ? 'opening' : ''}`}>
          <div className="envelope-flap"></div>
          <div className="envelope-body">
            <div className="envelope-heart">💌</div>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="envelope-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -20 : 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Sana özel bir mesajım var... 💕
      </motion.p>

      <motion.p
        className="envelope-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpening ? 0 : [0, 1, 0.5, 1] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
      >
        Zarfa dokun ✨
      </motion.p>
    </motion.div>
  )
}

export default EnvelopeIntro
