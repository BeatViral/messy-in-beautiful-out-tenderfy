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
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span>Your team tells the story.</span>
          <span className="hero-accent">Tenderfy builds the tender.</span>
        </motion.h1>
        <p className="hero-statement">Messages, voice notes and documents in. Submission-ready work out.</p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={onStart}>
            See it work<ArrowDownRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
