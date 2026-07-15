import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import type { DemoPhase } from '../hooks/useDemoSequence'
import type { ProcessStepData } from '../types/scenario'

interface TransformationEngineProps {
  phase: DemoPhase
  activeStep: number
  steps: ProcessStepData[]
}

export function TransformationEngine({ phase, activeStep, steps }: TransformationEngineProps) {
  const active = phase === 'processing'
  const currentStep = steps[Math.max(0, activeStep)]?.title ?? 'Understanding the project story'
  return (
    <div className={`engine simple-engine ${active ? 'engine-processing' : ''}`} aria-live="polite">
      <p>MESSY IN</p>
      <motion.div className="simple-flow" animate={active ? { opacity: [0.45, 1, 0.45], x: [0, 10, 0] } : undefined} transition={{ repeat: Infinity, duration: 1.2 }}>
        <i /><i /><i />
        <ArrowRight className="desktop-flow-arrow" size={25} />
        <ArrowDown className="mobile-flow-arrow" size={25} />
      </motion.div>
      <p>BEAUTIFUL OUT</p>
      {active && <span className="finding-state"><Sparkles size={13} />{currentStep}…</span>}
    </div>
  )
}
