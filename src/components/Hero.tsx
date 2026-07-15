import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CompanyConfig } from '../types/company'

interface HeroProps {
  company: CompanyConfig
  onStart: () => void
}

export function Hero({ company, onStart }: HeroProps) {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span />{company.hero.eyebrow}</p>
        <p className="hero-diagnosis">{company.hero.question}</p>
        <p className="hero-opportunity">{company.hero.annotation}</p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span>{company.hero.title[0]}</span>
          <span className="hero-accent">{company.hero.title[1]}</span>
        </motion.h1>
        <p className="hero-statement">{company.hero.statement}</p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={onStart}>
            {company.hero.primaryCta}<ArrowDownRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
