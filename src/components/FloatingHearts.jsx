import { useEffect, useState } from 'react'

const heartEmojis = ['❤️', '💕', '💖', '💗', '💘', '💝', '💓', '💞', '🌹', '✨']

function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random()
      const heart = {
        id,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8,
        duration: Math.random() * 4 + 6,
        delay: Math.random() * 2,
        sway: (Math.random() - 0.5) * 100,
      }
      setHearts(prev => [...prev, heart])
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id))
      }, (heart.duration + heart.delay) * 1000)
    }

    const interval = setInterval(createHeart, 800)
    // Create initial batch
    for (let i = 0; i < 8; i++) {
      setTimeout(createHeart, i * 200)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--sway': `${heart.sway}px`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  )
}

export default FloatingHearts
