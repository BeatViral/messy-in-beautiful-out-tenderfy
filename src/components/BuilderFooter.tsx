import { ArrowUp, ExternalLink, Mail } from 'lucide-react'
import type { CompanyConfig } from '../types/company'

interface BuilderFooterProps {
  company: CompanyConfig
}

export function BuilderFooter({ company }: BuilderFooterProps) {
  return (
    <>
      <section className="principle-section">
        <div className="section-shell principle-inner">
          <div className="principle-copy"><p className="mono-label">THE MESSY IN → BEAUTIFUL OUT PRINCIPLE</p><h2>{company.principle.heading}</h2>{company.principle.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="principle-list">
            {company.principle.items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="builder-section section-shell">
        <div className="builder-mark" aria-hidden="true">M<span>→</span>B</div>
        <div className="builder-copy"><p className="mono-label">FOUNDER LAB / PRODUCT THOUGHT 001</p><h2>{company.builder.heading}</h2>{company.builder.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="builder-profile"><span>MM</span><div><h3>{company.builder.name}</h3><p>{company.builder.role}</p></div></div>
        <div className="builder-links">
          {company.builder.links.map((link, index) => <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" key={link.label}>{link.label}{index === 2 ? <Mail size={16} /> : <ExternalLink size={15} />}</a>)}
        </div>
      </section>
      <footer className="site-footer section-shell">
        <div><b>{company.conceptName}</b><p>{company.footerDisclaimer}</p></div>
        <nav aria-label="Footer navigation"><a href={company.companyUrl} target="_blank" rel="noreferrer">{company.companyName} website</a><a href={company.links.founderLab} target="_blank" rel="noreferrer">Founder Lab</a><a href={company.links.github} target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top <ArrowUp size={13} /></a></nav>
      </footer>
    </>
  )
}
