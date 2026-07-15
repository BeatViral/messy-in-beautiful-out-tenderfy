import { ChevronLeft, MessageSquareText, MoreVertical, ShieldCheck } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { ScenarioData } from '../types/scenario'
import { StoryMessage } from './StoryMessage'

interface StoryPhoneProps {
  scenario: ScenarioData
  visibleMessages: number
  completed: boolean
}

export function StoryPhone({ scenario, visibleMessages, completed }: StoryPhoneProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = scrollRef.current
    if (element) element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' })
  }, [visibleMessages])

  return (
    <div className={`phone-wrap ${completed ? 'phone-completed' : ''}`}>
      <div className="phone-side phone-side-left"><i /><i /></div>
      <div className="phone-side phone-side-right"><i /></div>
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="phone-status"><span>9:47</span><span className="status-icons">● ◒ ▮</span></div>
          <div className="dynamic-island"><i /></div>
          <div className="chat-header">
            <ChevronLeft size={20} aria-hidden="true" />
            <div className="contact-avatar">{scenario.sender.initials}</div>
            <div className="contact-copy"><b>{scenario.intake.title}</b><small>{scenario.intake.subtitle}</small></div>
            <MessageSquareText size={19} aria-hidden="true" />
            <MoreVertical size={18} aria-hidden="true" />
          </div>
          <div className="chat-context">
            <span>{scenario.sender.name}</span>
            <i />
            <span>{scenario.sender.company}</span>
          </div>
          <div className="chat-scroll" ref={scrollRef}>
            <div className="chat-date"><span>Today</span></div>
            <AnimatePresence>
              {scenario.storyEntries.slice(0, visibleMessages).map((entry) => <StoryMessage entry={entry} key={entry.id} />)}
            </AnimatePresence>
            {visibleMessages > 0 && visibleMessages < scenario.storyEntries.length && (
              <motion.div className="typing-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} aria-label={`${scenario.sender.name} is typing`}>
                <i /><i /><i />
              </motion.div>
            )}
            {visibleMessages === scenario.storyEntries.length && (
              <motion.p className="story-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <ShieldCheck size={14} />{scenario.storyNote}
              </motion.p>
            )}
          </div>
          <div className="chat-composer" aria-hidden="true"><span>+</span><div>Message</div><i>›</i></div>
        </div>
      </div>
      {completed && (
        <motion.div className="phone-complete-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <ShieldCheck size={15} /> Story captured
        </motion.div>
      )}
    </div>
  )
}
