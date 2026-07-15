export interface LinkItem {
  label: string
  href: string
}

export interface CompanyConfig {
  conceptName: string
  companyName: string
  companyUrl: string
  conceptLabel: string
  hero: {
    eyebrow: string
    title: [string, string]
    statement: string
    question: string
    primaryCta: string
    secondaryCta: string
    annotation: string
    flow: string[]
  }
  insight: {
    kicker: string
    title: string
    body: string
    quote: string
  }
  opportunity: {
    eyebrow: string
    heading: [string, string]
    today: string[]
    future: string[]
    quote: string
  }
  notChatbot: {
    heading: [string, string]
    inputs: string[]
    outputs: string[]
  }
  principle: {
    heading: string
    paragraphs: string[]
    items: Array<{ title: string; body: string }>
  }
  builder: {
    heading: string
    paragraphs: string[]
    name: string
    role: string
    links: LinkItem[]
  }
  links: {
    founderLab: string
    github: string
  }
  footerDisclaimer: string
}
