import { ExternalLink, RotateCcw } from 'lucide-react'
import type { CompanyConfig } from '../types/company'

interface HeaderProps {
  company: CompanyConfig
  onReset: () => void
}

export function Header({ company, onReset }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Back to top">
        <span className="wordmark-full">{company.conceptName}</span>
        <span className="wordmark-short">M → B</span>
      </a>
      <nav className="header-links" aria-label="Primary navigation">
        <a href={company.links.founderLab} target="_blank" rel="noreferrer">
          Founder Lab <ExternalLink size={12} aria-hidden="true" />
        </a>
        <a href={company.links.github} target="_blank" rel="noreferrer">
          GitHub <ExternalLink size={12} aria-hidden="true" />
        </a>
        <button type="button" onClick={onReset}>
          <RotateCcw size={14} aria-hidden="true" /> Restart demo
        </button>
      </nav>
    </header>
  )
}
