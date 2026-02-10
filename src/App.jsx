import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import FloatingHearts from './components/FloatingHearts'
import EnvelopeIntro from './components/EnvelopeIntro'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import Reasons from './components/Reasons'
import Gallery from './components/Gallery'
import FinalMessage from './components/FinalMessage'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (envelopeOpened) {
      const timer = setTimeout(() => setShowContent(true), 800)
      return () => clearTimeout(timer)
    }
  }, [envelopeOpened])

  return (
    <div className="app">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {!envelopeOpened ? (
          <EnvelopeIntro key="envelope" onOpen={() => setEnvelopeOpened(true)} />
        ) : (
          showContent && (
            <main key="content" className="content">
              <Hero />
              <LoveLetter />
              <Reasons />
              <Gallery />
              <FinalMessage />
            </main>
          )
        )}
      </AnimatePresence>
      <LanguageSwitcher />
    </div>
  )
}

export default App
