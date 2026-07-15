import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export type DemoPhase = 'idle' | 'story' | 'processing' | 'complete'

export function useDemoSequence(messageCount: number, stepCount: number) {
  const reduceMotion = useReducedMotion()
  const [phase, setPhase] = useState<DemoPhase>('idle')
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [activeStep, setActiveStep] = useState(-1)
  const timers = useRef<number[]>([])

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const startStory = useCallback(() => {
    clearTimers()
    setPhase('story')
    setActiveStep(-1)
    if (reduceMotion) {
      setVisibleMessages(messageCount)
      return
    }
    setVisibleMessages(0)
    Array.from({ length: messageCount }).forEach((_, index) => {
      const timer = window.setTimeout(() => setVisibleMessages(index + 1), 220 + index * 680)
      timers.current.push(timer)
    })
  }, [clearTimers, messageCount, reduceMotion])

  const complete = useCallback(() => {
    clearTimers()
    setVisibleMessages(messageCount)
    setActiveStep(stepCount - 1)
    setPhase('complete')
  }, [clearTimers, messageCount, stepCount])

  const transform = useCallback(() => {
    clearTimers()
    setVisibleMessages(messageCount)
    setPhase('processing')
    setActiveStep(0)
    if (reduceMotion) {
      complete()
      return
    }
    Array.from({ length: stepCount }).forEach((_, index) => {
      const timer = window.setTimeout(() => setActiveStep(index), index * 240)
      timers.current.push(timer)
    })
    timers.current.push(window.setTimeout(complete, stepCount * 240 + 280))
  }, [clearTimers, complete, messageCount, reduceMotion, stepCount])

  const reset = useCallback((scrollToTop = true) => {
    clearTimers()
    setPhase('idle')
    setVisibleMessages(0)
    setActiveStep(-1)
    if (scrollToTop) window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [clearTimers, reduceMotion])

  return { phase, visibleMessages, activeStep, startStory, transform, skip: complete, reset }
}
