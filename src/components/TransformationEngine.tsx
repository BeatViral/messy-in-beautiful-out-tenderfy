import { ArrowRight, FastForward, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { DemoPhase } from '../hooks/useDemoSequence'
import type { ProcessStepData } from '../types/scenario'
import { ProcessingStep } from './ProcessingStep'

interface TransformationEngineProps {
  phase: DemoPhase
  steps: ProcessStepData[]
  activeStep: number
  onTransform: () => void
  onSkip: () => void
}

export function TransformationEngine({ phase, steps, activeStep, onTransform, onSkip }: TransformationEngineProps) {
  const processing = phase === 'processing'
  const complete = phase === 'complete'
  const progress = processing ? ((activeStep + 1) / steps.length) * 100 : complete ? 100 : 0

  return (
    <div className={`engine ${processing ? 'engine-processing' : ''} ${complete ? 'engine-complete' : ''}`}>
      <div className="engine-beam" aria-hidden="true"><i /><i /><i /></div>
      <div className="engine-heading">
        <p className="mono-label">STORY → STRUCTURE</p>
        <h3>{complete ? 'Tender workspace created' : processing ? 'Building tender work' : 'Turn this story into tender work'}</h3>
        <p>{complete ? 'The bid team can now review evidence, resolve gaps and move the response forward.' : 'Connect the conversation to the requirements, evidence and work it can support.'}</p>
      </div>

      {phase !== 'idle' && phase !== 'story' ? (
        <AnimatePresence>
          <motion.div className="processing-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="progress-meta"><span>{complete ? 'Complete' : `Stage ${activeStep + 1} of ${steps.length}`}</span><span>{Math.round(progress)}%</span></div>
            <div className="process-progress"><i style={{ width: `${progress}%` }} /></div>
            <ol className="processing-list" aria-live="polite">
              {steps.map((step, index) => <ProcessingStep data={step} index={index} activeStep={activeStep} key={step.title} />)}
            </ol>
            {processing && <button className="skip-button" type="button" onClick={onSkip}><FastForward size={15} /> Skip sequence</button>}
            {complete && <a className="button button-primary engine-result-link" href="#beautiful-output">Explore the result <ArrowRight size={17} /></a>}
          </motion.div>
        </AnimatePresence>
      ) : (
        <button className="transform-button" type="button" onClick={onTransform}>
          <span><Sparkles size={20} /></span>
          <b>Turn this story into tender work</b>
          <ArrowRight size={20} />
        </button>
      )}
      <p className="engine-note">Local demonstration · No data is uploaded or processed</p>
    </div>
  )
}
