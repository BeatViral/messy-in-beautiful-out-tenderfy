import { AlertTriangle, Check, CheckCircle2, Clock3 } from 'lucide-react'
import { useState } from 'react'
import type { ScenarioData } from '../types/scenario'

interface ReadinessPanelProps {
  readiness: ScenarioData['readiness']
}

export function ReadinessPanel({ readiness }: ReadinessPanelProps) {
  const [resolution, setResolution] = useState<string | null>(null)

  return (
    <div className="readiness-layout">
      <div className="readiness-score-card">
        <div className="score-ring" style={{ '--score': `${readiness.score * 3.6}deg` } as React.CSSProperties}>
          <div><b>{readiness.score}%</b><span>ready</span></div>
        </div>
        <p>Most evidence is ready. Four targeted inputs will make the submission stronger.</p>
        <div className="score-legend"><span><i className="legend-ready" />Ready</span><span><i className="legend-gap" />Needs input</span></div>
      </div>
      <div className="readiness-columns">
        <section className="check-group check-strong">
          <h4><CheckCircle2 size={17} /> Strong</h4>
          <ul>{readiness.strong.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
        </section>
        <section className="check-group check-attention">
          <h4><Clock3 size={17} /> Needs attention</h4>
          <ul>{readiness.attention.map((item) => <li key={item}><span />{item}</li>)}</ul>
        </section>
      </div>
      <section className={`conflict-card ${resolution ? 'conflict-resolved' : ''}`}>
        <div className="conflict-title"><AlertTriangle size={18} /><div><span>CONFLICT DETECTED</span><p>{resolution ? `Resolution selected: ${resolution}. The bid team can review this decision before publishing.` : readiness.conflict}</p></div></div>
        <div className="conflict-actions">
          {readiness.conflictActions.map((action) => (
            <button type="button" key={action} onClick={() => setResolution(action)} aria-pressed={resolution === action}>{resolution === action && <Check size={14} />}{action}</button>
          ))}
        </div>
      </section>
    </div>
  )
}
