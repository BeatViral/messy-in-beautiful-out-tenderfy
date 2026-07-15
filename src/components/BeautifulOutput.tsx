import { AlertTriangle, CheckCircle2, FileText, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ScenarioData } from '../types/scenario'

interface BeautifulOutputProps {
  scenario: ScenarioData
  productName: string
  complete: boolean
}

export function BeautifulOutput({ scenario, productName, complete }: BeautifulOutputProps) {
  const metrics = [
    ['42', 'requirements mapped'],
    ['36', 'evidence matches found'],
    ['5', 'gaps identified'],
    ['✓', 'tender draft ready'],
  ]

  return (
    <motion.article className={`beautiful-output ${complete ? 'output-created' : 'output-waiting'}`} id="beautiful-output" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      <header className="simple-output-topbar">
        <div><span className="output-mark"><Sparkles size={15} /></span><b>{productName}</b></div>
        <span>{complete ? 'TENDER WORKSPACE READY' : 'STORY INTAKE'}</span>
      </header>
      <div className="simple-output-body">
        <p className="mono-label">NORTH COAST WATER TREATMENT UPGRADE</p>
        <h2>Tender workspace ready</h2>
        <div className="simple-metrics">
          {metrics.map(([value, label], index) => <motion.div key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: complete ? 1 : 0.42, y: 0 }} transition={{ delay: complete ? index * 0.09 : 0 }}><b>{value}</b><span>{label}</span></motion.div>)}
        </div>
        <div className="simple-conflict"><AlertTriangle size={16} /><p><b>Programme conflict:</b> estimator says six weeks; current methodology says eight.</p></div>
        <section className="simple-document">
          <div className="simple-document-head"><span><FileText size={13} />TENDER RESPONSE / 3.2</span><b>TEAM REVIEW DRAFT</b></div>
          <h3>3.2 Continuity of Operations</h3>
          <p>Northline Civil will deliver the pump replacement through a controlled three-stage cutover designed to maintain continuous operation throughout the works.</p>
          <div className="source-labels">
            <span>Kingscliff case study</span>
            <span>Project manager voice note</span>
            <span>Programme confirmation required</span>
          </div>
        </section>
        <p className="illustrative-note"><CheckCircle2 size={13} />Illustrative concept data</p>
      </div>
    </motion.article>
  )
}
