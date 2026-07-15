import { AlertCircle, ArrowUpRight, CheckCircle2, ChevronDown, FileCheck2, ShieldAlert, UserRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Requirement, RequirementStatus } from '../types/scenario'

interface RequirementMapProps {
  requirements: Requirement[]
}

const statusIcons: Record<RequirementStatus, typeof CheckCircle2> = {
  'Evidence matched': CheckCircle2,
  'Draft created': FileCheck2,
  'Owner input needed': UserRound,
  Conflict: AlertCircle,
  'Compliance review': ShieldAlert,
}

export function RequirementMap({ requirements }: RequirementMapProps) {
  const filters: Array<'All' | RequirementStatus> = ['All', 'Evidence matched', 'Draft created', 'Owner input needed', 'Conflict', 'Compliance review']
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [expanded, setExpanded] = useState<string | null>(requirements[0]?.number ?? null)
  const filtered = useMemo(() => filter === 'All' ? requirements : requirements.filter((item) => item.status === filter), [filter, requirements])

  return (
    <div className="requirements-panel">
      <div className="requirement-filters" aria-label="Filter requirements">
        {filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
      </div>
      <div className="requirements-table" role="table" aria-label="Tender requirement map">
        <div className="requirement-row requirement-header" role="row">
          <span>Requirement</span><span>Status</span><span>Matched source</span><span>Confidence</span><span>Owner / action</span>
        </div>
        {filtered.map((requirement) => {
          const Icon = statusIcons[requirement.status]
          const isOpen = expanded === requirement.number
          return (
            <div className={`requirement-row-wrap ${isOpen ? 'is-open' : ''}`} key={requirement.number}>
              <button className="requirement-row" type="button" role="row" onClick={() => setExpanded(isOpen ? null : requirement.number)} aria-expanded={isOpen}>
                <span className="requirement-name"><i>{requirement.number}</i><b>{requirement.title}</b></span>
                <span className={`status-pill status-${requirement.status.toLowerCase().replaceAll(' ', '-')}`} title={`Status: ${requirement.status}`}><Icon size={14} />{requirement.status}</span>
                <span>{requirement.source}</span>
                <span><i className={`confidence-dot confidence-${requirement.confidence.toLowerCase()}`} />{requirement.confidence}</span>
                <span><b>{requirement.owner}</b><ChevronDown className="row-chevron" size={16} /></span>
              </button>
              {isOpen && <div className="requirement-detail"><span>Next best action</span><p>{requirement.action}</p><button type="button">Open requirement <ArrowUpRight size={14} /></button></div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
