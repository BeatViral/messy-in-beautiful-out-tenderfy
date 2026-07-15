import { ArrowUpRight, CircleHelp, FileText, Link2, MessageSquareQuote, ShieldCheck } from 'lucide-react'
import type { ScenarioData } from '../types/scenario'

interface EvidencePanelProps {
  evidence: ScenarioData['evidence']
}

const typeIcon = (type: string) => type === 'Human contribution' ? MessageSquareQuote : FileText

export function EvidencePanel({ evidence }: EvidencePanelProps) {
  return (
    <div className="evidence-layout">
      <article className="evidence-project">
        <header><div><p className="mono-label">PRIMARY PROJECT EVIDENCE</p><h3>{evidence.title}</h3><p>{evidence.subtitle}</p></div><span><ShieldCheck size={15} />4 matches</span></header>
        <div className="evidence-diagram">
          <div className="evidence-core"><span>{evidence.title.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span><b>{evidence.title}</b></div>
          {evidence.matches.map((match, index) => <div className={`evidence-node node-${index + 1}`} key={match}><Link2 size={13} /><span>{match}</span></div>)}
        </div>
        <div className="source-list">
          {evidence.sources.map((source) => {
            const Icon = typeIcon(source.type)
            return <button type="button" key={source.label}><span><Icon size={16} /></span><div><b>{source.label}</b><small>{source.type}</small></div><ArrowUpRight size={15} /></button>
          })}
        </div>
      </article>
      <aside className="evidence-legend">
        <p className="mono-label">EVIDENCE INTEGRITY</p>
        <h3>Every claim keeps its source.</h3>
        <p>Generated language does not silently become verified evidence.</p>
        <ul>
          {evidence.legend.map((item, index) => <li key={item.label}><span className={`evidence-type type-${index + 1}`}>{index < 2 ? <ShieldCheck size={14} /> : <CircleHelp size={14} />}</span><div><b>{item.label}</b><p>{item.description}</p></div></li>)}
        </ul>
      </aside>
    </div>
  )
}
