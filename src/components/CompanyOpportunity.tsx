import { ArrowDownRight, Check, X } from 'lucide-react'
import type { CompanyConfig } from '../types/company'

interface CompanyOpportunityProps {
  opportunity: CompanyConfig['opportunity']
}

export function CompanyOpportunity({ opportunity }: CompanyOpportunityProps) {
  return (
    <section className="company-opportunity section-shell">
      <header><p className="eyebrow"><span />{opportunity.eyebrow}</p><h2><span>{opportunity.heading[0]}</span><span>{opportunity.heading[1]}</span></h2></header>
      <div className="comparison-grid">
        <article className="comparison-today"><div className="comparison-label"><span>01</span><b>Today</b></div><ul>{opportunity.today.map((item) => <li key={item}><X size={15} />{item}</li>)}</ul></article>
        <div className="comparison-arrow"><ArrowDownRight size={24} /></div>
        <article className="comparison-future"><div className="comparison-label"><span>02</span><b>Story-first</b></div><ul>{opportunity.future.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></article>
      </div>
      <blockquote>{opportunity.quote}</blockquote>
    </section>
  )
}
