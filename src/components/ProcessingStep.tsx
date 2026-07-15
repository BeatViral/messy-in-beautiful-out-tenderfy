import { Check, Circle } from 'lucide-react'
import type { ProcessStepData } from '../types/scenario'

interface ProcessingStepProps {
  data: ProcessStepData
  index: number
  activeStep: number
}

export function ProcessingStep({ data, index, activeStep }: ProcessingStepProps) {
  const state = index < activeStep ? 'complete' : index === activeStep ? 'active' : 'pending'
  return (
    <li className={`processing-step step-${state}`} aria-current={state === 'active' ? 'step' : undefined}>
      <span className="step-icon">{state === 'complete' ? <Check size={15} /> : <Circle size={13} />}</span>
      <div><span>{String(index + 1).padStart(2, '0')}</span><b>{data.title}</b><p>{data.description}</p></div>
    </li>
  )
}
