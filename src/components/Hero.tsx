import { ArrowDownRight, ArrowRight, FileCheck2, MessageSquareText } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CompanyConfig } from '../types/company'
import type { ScenarioData } from '../types/scenario'

interface HeroProps {
  company: CompanyConfig
  scenario: ScenarioData
  onStart: () => void
}

export function Hero({ company, scenario, onStart }: HeroProps) {
  const scrollToOutput = () => document.querySelector('#beautiful-output')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span />{company.hero.eyebrow}</p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span>{company.hero.title[0]}</span>
          <span className="hero-accent">{company.hero.title[1]}</span>
        </motion.h1>
        <p className="hero-statement">{company.hero.statement}</p>
        <p className="hero-question">{company.hero.question}</p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={onStart}>
            {company.hero.primaryCta}<ArrowDownRight size={18} aria-hidden="true" />
          </button>
          <button className="button button-secondary" type="button" onClick={scrollToOutput}>
            {company.hero.secondaryCta}<ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="hero-annotation"><span className="annotation-dot" />{company.hero.annotation}</p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <motion.div className="hero-phone-preview" initial={{ opacity: 0, x: 35, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <div className="mini-phone-top"><span /><span /></div>
          <div className="mini-chat-head"><MessageSquareText size={18} /> <div><b>Story Intake</b><small>Knowledge, captured naturally</small></div></div>
          <div className="mini-bubble wide" />
          <div className="mini-file"><span>PDF</span><i /></div>
          <div className="mini-bubble" />
          <div className="mini-wave">{Array.from({ length: 16 }).map((_, index) => <i key={index} />)}</div>
        </motion.div>
        <motion.div className="hero-output-preview" initial={{ opacity: 0, x: -28, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
          <div className="mini-output-head"><span>{scenario.submission.projectCode}</span><b>{scenario.readiness.score}%</b></div>
          <h3>{scenario.output.title}</h3>
          <p>{scenario.output.subtitle}</p>
          <div className="mini-score"><i style={{ width: '86%' }} /></div>
          <div className="mini-output-row"><FileCheck2 size={16} /><span><b>{scenario.output.metrics[1]?.value}</b> evidence matches</span></div>
          <div className="mini-output-row warning"><span>!</span><i>{scenario.output.metrics[4]?.value} conflict needs review</i></div>
        </motion.div>
      </div>

      <div className="transformation-line" aria-label={company.hero.flow.join(' to ')}>
        {company.hero.flow.map((item, index) => (
          <div className="flow-stage" key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>{item}
            {index < company.hero.flow.length - 1 && <ArrowRight size={14} aria-hidden="true" />}
          </div>
        ))}
        <i className="flow-pulse" />
      </div>
    </section>
  )
}
