import { motion } from 'framer-motion'
import { useInView } from './useInView'

function LoveLetter() {
  const [ref, isInView] = useInView(0.2)

  return (
    <section className="letter-section" ref={ref}>
      <motion.div
        className="letter-card"
        initial={{ opacity: 0, y: 80, rotateX: 15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="letter-stamp"
          initial={{ rotate: -15, scale: 0 }}
          animate={isInView ? { rotate: -12, scale: 1 } : {}}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          💌
        </motion.div>

        <motion.h2
          className="letter-greeting"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Canım Benim,
        </motion.h2>

        <div className="letter-body">
          {[
            "Seninle geçirdiğim her an, hayatımın en güzel anları oldu.",
            "Gülüşün güneş gibi aydınlatıyor dünyamı, bakışlarınla kayboluyorum. Her gün seninle uyanmak, seninle uyumak istiyorum.",
            "Sen benim en güzel rüyam, en derin nefesim, en sıcak kucaklaşmamsın.",
            "Bu özel günde sana söylemek istediğim tek şey var: Seni çok ama çok seviyorum. 💗",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="letter-paragraph"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.3, duration: 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.p
          className="letter-signature"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, type: 'spring', stiffness: 100 }}
        >
          Sonsuza kadar senin 💕
        </motion.p>

        <div className="letter-decorations">
          <span className="letter-deco letter-deco-1">🌹</span>
          <span className="letter-deco letter-deco-2">✨</span>
          <span className="letter-deco letter-deco-3">🦋</span>
        </div>
      </motion.div>
    </section>
  )
}

export default LoveLetter
