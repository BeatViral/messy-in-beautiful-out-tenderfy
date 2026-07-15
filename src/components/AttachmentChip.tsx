import { FileText, Image, X } from 'lucide-react'
import { useState } from 'react'
import type { Attachment } from '../types/scenario'

interface AttachmentChipProps {
  attachment: Attachment
  compact?: boolean
}

export function AttachmentChip({ attachment, compact = false }: AttachmentChipProps) {
  const [open, setOpen] = useState(false)
  const Icon = attachment.kind === 'photo' ? Image : FileText

  return (
    <>
      <button className={`attachment-chip ${compact ? 'attachment-compact' : ''}`} type="button" onClick={() => setOpen(true)} aria-label={`Preview ${attachment.name}`}>
        <span className={`file-icon file-${attachment.kind}`}><Icon size={15} aria-hidden="true" /></span>
        <span><b>{attachment.name}</b><small>{attachment.meta}</small></span>
      </button>
      {open && (
        <div className="attachment-modal" role="dialog" aria-modal="true" aria-label={`Preview of ${attachment.name}`} onClick={() => setOpen(false)}>
          <div className="attachment-preview" onClick={(event) => event.stopPropagation()}>
            <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close attachment preview"><X size={17} /></button>
            <span className={`preview-file-mark file-${attachment.kind}`}><Icon size={22} /> {attachment.kind.toUpperCase()}</span>
            <p className="mono-label">LOCAL DEMO PREVIEW</p>
            <h3>{attachment.name}</h3>
            <p>{attachment.preview}</p>
            <small>{attachment.meta} · Illustrative document</small>
          </div>
        </div>
      )}
    </>
  )
}
