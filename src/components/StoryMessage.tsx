import { CheckCheck, Pause, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { StoryEntry } from '../types/scenario'
import { AttachmentChip } from './AttachmentChip'

interface StoryMessageProps {
  entry: StoryEntry
}

export function StoryMessage({ entry }: StoryMessageProps) {
  const [voicePlaying, setVoicePlaying] = useState(false)
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const toggleVoice = () => {
    setVoicePlaying((current) => !current)
    setTranscriptOpen(true)
  }

  return (
    <motion.article className="story-entry" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35 }}>
      {entry.text && (
        <div className="message-bubble">
          <p>{entry.text}</p>
          <span className="message-time">{entry.time}<CheckCheck size={13} aria-label="Delivered" /></span>
        </div>
      )}
      {entry.attachment && <AttachmentChip attachment={entry.attachment} />}
      {entry.voice && (
        <div className="voice-note">
          <button type="button" onClick={toggleVoice} aria-label={voicePlaying ? 'Pause voice note' : 'Play voice note'}>
            {voicePlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
          </button>
          <div className={`waveform ${voicePlaying ? 'is-playing' : ''}`} aria-hidden="true">
            {[8, 16, 11, 24, 18, 31, 12, 20, 27, 15, 34, 22, 12, 28, 17, 8, 23, 13, 30, 18, 10, 21].map((height, index) => <i key={index} style={{ height }} />)}
          </div>
          <span>{entry.voice.duration}</span>
        </div>
      )}
      {transcriptOpen && entry.voice && (
        <motion.div className="voice-transcript" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
          <p className="mono-label">VOICE NOTE TRANSCRIPT</p>
          <p>{entry.voice.transcript}</p>
        </motion.div>
      )}
      {entry.attachments && (
        <div className="attachment-stack">
          {entry.attachments.map((attachment) => <AttachmentChip attachment={attachment} compact key={attachment.id} />)}
        </div>
      )}
    </motion.article>
  )
}
