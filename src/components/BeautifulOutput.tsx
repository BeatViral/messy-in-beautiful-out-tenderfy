import { CheckCircle2, FileText, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ScenarioData } from '../types/scenario'

interface BeautifulOutputProps {
  scenario: ScenarioData
  productName: string
  complete: boolean
}

export function BeautifulOutput({ scenario, productName, complete }: BeautifulOutputProps) {
  const evidence = scenario.evidence.matches
  const sourceRows = [
    { heading: 'SUPPORTED BY DOCUMENT', items: evidence.slice(0, 4), icon: ShieldCheck },
    { heading: 'HUMAN CONTRIBUTION', items: [evidence[4] ?? 'Client communication outcome identified'], icon: UserRoundCheck },
    { heading: 'VERIFICATION REQUIRED', items: ['Confirm the client-feedback statement before submission'], icon: CheckCircle2 },
  ]

  return (
    <motion.article className={`beautiful-output evidence-output ${complete ? 'output-created' : 'output-waiting'}`} id="beautiful-output" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      <header className="simple-output-topbar">
        <div><span className="output-mark"><Sparkles size={15} /></span><b>{productName}</b></div>
        <span>{complete ? scenario.output.status : 'STORY INTAKE'}</span>
      </header>
      <div className="simple-output-body">
        <p className="mono-label">{scenario.output.title}</p>
        <h2>{scenario.output.subtitle}</h2>
        <div className="evidence-capture-list">
          {sourceRows.map((row, index) => {
            const Icon = row.icon
            return <motion.section className={`evidence-capture-row evidence-capture-${index + 1}`} key={row.heading} initial={{ opacity: 0, y: 8 }} animate={{ opacity: complete ? 1 : 0.42, y: 0 }} transition={{ delay: complete ? index * 0.1 : 0 }}>
              <h3><Icon size={14} />{row.heading}</h3>
              <ul>{row.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </motion.section>
          })}
        </div>
        <div className="matched-requirement"><span>MATCHED TENDER REQUIREMENT</span><b>{scenario.submission.section}</b><p>{scenario.output.status}</p></div>
        <section className="simple-document">
          <div className="simple-document-head"><span><FileText size={13} />TENDER-READY MATERIAL / 3.2</span><b>{scenario.submission.status}</b></div>
          <h3>{scenario.submission.section}</h3>
          <p>{scenario.submission.paragraphs[0]}</p>
          <div className="source-labels">
            {scenario.submission.sources.map((source) => <span key={source}>{source}</span>)}
          </div>
        </section>
        <p className="illustrative-note"><CheckCircle2 size={13} />{scenario.output.note}</p>
      </div>
    </motion.article>
  )
}
