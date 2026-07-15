import { ArrowDown, FileStack, MessageSquareMore, Mic2, NotebookPen } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CompanyConfig } from '../types/company'

interface ProductInsightProps { insight: CompanyConfig['insight'] }

export function ProductInsight({ insight }: ProductInsightProps) {
  return (
    <section className="product-insight section-shell">
      <div className="insight-index">01</div>
      <div><p className="eyebrow"><span />{insight.kicker}</p><h2>{insight.title}</h2></div>
      <div><p>{insight.body}</p><blockquote>{insight.quote}</blockquote></div>
    </section>
  )
}

export function NotChatbot({ notChatbot }: { notChatbot: CompanyConfig['notChatbot'] }) {
  const inputIcons = [MessageSquareMore, Mic2, FileStack, NotebookPen]
  return (
      <section className="not-chatbot section-shell">
        <header><p className="mono-label">NOT ANOTHER CHATBOT</p><h2><span>{notChatbot.heading[0]}</span><span>{notChatbot.heading[1]}</span></h2></header>
        <div className="transformation-map">
          <div className="map-inputs">
            {notChatbot.inputs.map((item, index) => { const Icon = inputIcons[index] ?? FileStack; return <div key={item}><Icon size={18} /><span>{item}</span></div> })}
          </div>
          <motion.div className="map-engine" whileInView={{ scale: [0.95, 1.04, 1] }} viewport={{ once: true }}>
            <div className="engine-rings"><i /><i /><i /></div><span>M → B</span><ArrowDown size={19} />
          </motion.div>
          <div className="map-outputs">
            {notChatbot.outputs.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b></div>)}
          </div>
        </div>
      </section>
  )
}
