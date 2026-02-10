import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { supportedLanguages, translations } from '../i18n/translations'

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lang-switcher">
      <motion.button
        className="lang-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        title="Change language"
      >
        <span className="lang-flag">{translations[lang].flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {supportedLanguages.map((code) => (
              <motion.button
                key={code}
                className={`lang-option ${code === lang ? 'active' : ''}`}
                onClick={() => {
                  setLang(code)
                  setIsOpen(false)
                }}
                whileHover={{ x: 4, backgroundColor: 'rgba(255, 107, 138, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="lang-option-flag">{translations[code].flag}</span>
                <span className="lang-option-name">{translations[code].name}</span>
                {code === lang && <span className="lang-check">✓</span>}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
