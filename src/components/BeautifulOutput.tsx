import { CheckCircle2, LayoutDashboard, ShieldCheck, Sparkles } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { ScenarioData } from '../types/scenario'
import { EvidencePanel } from './EvidencePanel'
import { ReadinessPanel } from './ReadinessPanel'
import { RequirementMap } from './RequirementMap'
import { SubmissionPreview } from './SubmissionPreview'

interface BeautifulOutputProps {
  scenario: ScenarioData
  productName: string
  newlyCreated: boolean
}

type TabId = 'readiness' | 'requirements' | 'evidence' | 'submission'

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 'readiness', label: 'Readiness' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'submission', label: 'Submission Preview' },
]

function MetricValue({ value, suffix = '', active }: { value: number; suffix?: string; active: boolean }) {
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!active || reduceMotion) {
      if (active) setDisplay(value)
      return
    }
    let frame = 0
    const started = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - started) / 800, 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [active, reduceMotion, value])

  return <>{display}{suffix}</>
}

export function BeautifulOutput({ scenario, productName, newlyCreated }: BeautifulOutputProps) {
  const [activeTab, setActiveTab] = useState<TabId>('readiness')
  const metricRef = useRef<HTMLDivElement>(null)
  const inView = useInView(metricRef, { once: true, amount: 0.35 })

  const handleTabKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1
    const next = tabs[nextIndex]
    if (!next) return
    setActiveTab(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }

  return (
    <section className={`beautiful-output ${newlyCreated ? 'output-created' : ''}`} id="beautiful-output">
      <div className="output-chrome">
        <div className="output-topbar">
          <div className="output-product"><span><LayoutDashboard size={18} /></span><div><b>{productName}</b><small>Submission workspace</small></div></div>
          <div className="workspace-switcher">{scenario.sender.company} <span>{scenario.sender.company.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span></div>
        </div>
        <div className="output-main">
          <header className="output-heading">
            <div><p className="mono-label">ACTIVE TENDER / {scenario.submission.projectCode}</p><h2>{scenario.output.title}</h2><p>{scenario.output.subtitle}</p></div>
            <span className="output-status" title="The workspace has been structured and is waiting for human review"><CheckCircle2 size={16} />{scenario.output.status}</span>
          </header>
          <div className="metric-grid" ref={metricRef}>
            {scenario.output.metrics.map((metric, index) => (
              <motion.div className={`metric-card metric-${index + 1}`} key={metric.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <div><b><MetricValue value={metric.value} suffix={metric.suffix} active={inView} /></b>{index === 5 && <Sparkles size={14} />}</div>
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="output-note"><ShieldCheck size={14} />{scenario.output.note}</div>
          <div className="output-tabs" role="tablist" aria-label="Tender workspace views">
            {tabs.map((tab, index) => (
              <button id={`tab-${tab.id}`} role="tab" type="button" aria-selected={activeTab === tab.id} aria-controls={`panel-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => setActiveTab(tab.id)} onKeyDown={(event) => handleTabKey(event, index)} key={tab.id}>{tab.label}</button>
            ))}
          </div>
          <div className="output-tab-panel" id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {activeTab === 'readiness' && <ReadinessPanel readiness={scenario.readiness} />}
            {activeTab === 'requirements' && <RequirementMap requirements={scenario.requirements} />}
            {activeTab === 'evidence' && <EvidencePanel evidence={scenario.evidence} />}
            {activeTab === 'submission' && <SubmissionPreview submission={scenario.submission} companyName={scenario.sender.company} />}
          </div>
        </div>
      </div>
    </section>
  )
}
