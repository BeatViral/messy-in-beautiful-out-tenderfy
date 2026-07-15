export type AttachmentKind = 'pdf' | 'docx' | 'photo'

export interface Attachment {
  id: string
  name: string
  kind: AttachmentKind
  meta: string
  preview: string
}

export interface VoiceNote {
  duration: string
  transcript: string
}

export interface StoryEntry {
  id: string
  text?: string
  time: string
  attachment?: Attachment
  attachments?: Attachment[]
  voice?: VoiceNote
}

export type RequirementStatus =
  | 'Evidence matched'
  | 'Draft created'
  | 'Owner input needed'
  | 'Conflict'
  | 'Compliance review'

export interface Requirement {
  number: string
  title: string
  status: RequirementStatus
  source: string
  confidence: string
  owner: string
  action: string
}

export interface Metric {
  value: number
  suffix?: string
  label: string
}

export interface ProcessStepData {
  title: string
  description: string
}

export interface ScenarioData {
  sender: { name: string; company: string; initials: string }
  intake: { title: string; subtitle: string }
  storyEntries: StoryEntry[]
  storyNote: string
  processSteps: ProcessStepData[]
  output: {
    title: string
    subtitle: string
    status: string
    metrics: Metric[]
    note: string
  }
  readiness: {
    score: number
    strong: string[]
    attention: string[]
    conflict: string
    conflictActions: string[]
  }
  requirements: Requirement[]
  evidence: {
    title: string
    subtitle: string
    matches: string[]
    sources: Array<{ label: string; type: string }>
    legend: Array<{ label: string; description: string }>
  }
  submission: {
    projectCode: string
    section: string
    status: string
    paragraphs: string[]
    metrics: Array<{ value: string; label: string }>
    sources: string[]
  }
}
