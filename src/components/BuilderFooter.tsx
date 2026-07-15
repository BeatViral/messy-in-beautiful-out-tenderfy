import { ArrowUp, ExternalLink, Mail } from 'lucide-react'
import type { CompanyConfig } from '../types/company'

interface BuilderFooterProps {
  company: CompanyConfig
}

export function BuilderFooter({ company }: BuilderFooterProps) {
  return (
    <>
      <section className="builder-section section-shell">
        <div className="builder-copy"><p className="mono-label">INDEPENDENT PRODUCT THOUGHT</p><h2>Built by Mahmood Matloob</h2><p>I specialise in turning messy human and business input into clear, useful and beautifully finished output.</p></div>
        <div className="builder-links">
          {company.builder.links.map((link, index) => <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" key={link.label}>{link.label}{index === 2 ? <Mail size={16} /> : <ExternalLink size={15} />}</a>)}
        </div>
      </section>
      <footer className="site-footer section-shell">
        <div><b>{company.conceptName}</b><p>Independent product concept. Not affiliated with or endorsed by Tenderfy. Demonstration content and metrics are illustrative.</p></div>
        <nav aria-label="Footer navigation"><a href={company.companyUrl} target="_blank" rel="noreferrer">{company.companyName} website</a><a href={company.links.founderLab} target="_blank" rel="noreferrer">Founder Lab</a><a href={company.links.github} target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top <ArrowUp size={13} /></a></nav>
      </footer>
    </>
  )
}
