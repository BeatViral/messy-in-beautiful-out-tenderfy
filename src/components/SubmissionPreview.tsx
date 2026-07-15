import { CircleAlert, FileText } from 'lucide-react'
import type { ScenarioData } from '../types/scenario'

interface SubmissionPreviewProps {
  submission: ScenarioData['submission']
  companyName: string
}

export function SubmissionPreview({ submission, companyName }: SubmissionPreviewProps) {
  return (
    <div className="submission-stage">
      <div className="document-shadow" />
      <article className="tender-document">
        <header className="document-header"><span>{companyName.toUpperCase()} / TECHNICAL RESPONSE</span><b>{submission.projectCode}</b></header>
        <div className="document-title-row">
          <div><p>DELIVERY METHODOLOGY</p><h2>{submission.section}</h2></div>
          <span>{submission.status}</span>
        </div>
        <div className="document-rule" />
        <div className="document-body">
          <main>
            <span className="drop-number">3.2</span>
            {submission.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="cutover-diagram" aria-label="Three-stage controlled cutover">
              {['Isolate', 'Replace', 'Commission'].map((step, index) => <div key={step}><span>{index + 1}</span><b>{step}</b>{index < 2 && <i />}</div>)}
            </div>
            <aside className="document-callout"><b>Operational continuity</b><p>Live-system interfaces are protected by verified hold points and an agreed rollback plan at every stage.</p></aside>
          </main>
          <aside className="document-margin">
            <p className="mono-label">PROJECT EVIDENCE</p>
            {submission.metrics.map((metric) => <div className="document-metric" key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}
            <div className="margin-note"><CircleAlert size={15} /><span>Six-week programme requires estimator confirmation.</span></div>
          </aside>
        </div>
        <footer className="document-footer">
          <div><FileText size={13} />{submission.sources.map((source, index) => <span key={source}><sup>{index + 1}</sup>{source}</span>)}</div>
          <b>17</b>
        </footer>
      </article>
    </div>
  )
}
