import { motion } from 'framer-motion'
import { useInView } from './useInView'

const moments = [
  { emoji: '🥰', title: 'İlk Bakışımız', text: 'Gözlerine ilk baktığım an kalbim durdu' },
  { emoji: '💑', title: 'İlk Buluşmamız', text: 'O gün dünya durmuş gibiydi' },
  { emoji: '💕', title: 'İlk "Seni Seviyorum"', text: 'Kalbimden dökülen en güzel kelimeler' },
  { emoji: '🌙', title: 'Geç Saatlere Kadar Konuşmalar', text: 'Saatler seninle durmuyor' },
  { emoji: '🎉', title: 'Birlikte Güldüğümüz Anlar', text: 'Kahkahalarımız müzik gibi' },
  { emoji: '🌅', title: 'Şu An ve Sonsuza Kadar', text: 'Her gün seni daha çok seviyorum' },
]

function Gallery() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section className="gallery-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Bizim <span className="highlight">Hikayemiz</span> 💫
      </motion.h2>

      <div className="timeline">
        <motion.div
          className="timeline-line"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {moments.map((moment, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -60 : 60,
            }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.3 + i * 0.25,
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <motion.div
              className="timeline-card"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 15px 40px rgba(255, 105, 135, 0.25)',
              }}
            >
              <motion.span
                className="timeline-emoji"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  delay: i * 0.3,
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {moment.emoji}
              </motion.span>
              <h3 className="timeline-title">{moment.title}</h3>
              <p className="timeline-text">{moment.text}</p>
            </motion.div>
            <div className="timeline-dot">
              <motion.div
                className="timeline-dot-inner"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
