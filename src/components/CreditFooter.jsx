import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const GITHUB_URL = 'https://github.com/ElmarRamazanov/happyvalentinesday'

function CreditFooter() {
  const { t } = useLanguage()

  return (
    <motion.footer
      className="credit-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="credit-divider" />
      <p className="credit-text">
        {t.credit.madeWith}{' '}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="credit-link"
        >
          {t.credit.by}
        </a>
      </p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="credit-star"
      >
        {t.credit.starText}
      </a>
    </motion.footer>
  )
}

export default CreditFooter
