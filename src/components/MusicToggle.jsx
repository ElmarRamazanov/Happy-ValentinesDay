import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create a simple romantic melody using Web Audio API
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    audioRef.current = ctx

    return () => {
      if (ctx.state !== 'closed') {
        ctx.close()
      }
    }
  }, [])

  const playNote = (ctx, freq, startTime, duration) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = freq
    osc.type = 'sine'
    gain.gain.setValueAtTime(0, startTime)
    gain.gain.linearRampToValueAtTime(0.08, startTime + 0.05)
    gain.gain.linearRampToValueAtTime(0, startTime + duration)
    osc.start(startTime)
    osc.stop(startTime + duration)
  }

  const toggleMusic = () => {
    if (!isPlaying && audioRef.current) {
      const ctx = audioRef.current
      if (ctx.state === 'suspended') ctx.resume()

      // Simple romantic melody
      const notes = [523, 587, 659, 698, 784, 698, 659, 587, 523, 659, 784, 880]
      const now = ctx.currentTime
      notes.forEach((note, i) => {
        playNote(ctx, note, now + i * 0.4, 0.35)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.button
      className="music-toggle"
      onClick={toggleMusic}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Müzik"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isPlaying ? 'on' : 'off'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
        >
          {isPlaying ? '🎵' : '🔇'}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export default MusicToggle
