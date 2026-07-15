import type { ScenarioData } from '../types/scenario'

export const scenario: ScenarioData = {
  sender: { name: 'Alex — Project Manager', company: 'Northline Civil · Kingscliff Pump Station', initials: 'AR' },
  intake: {
    title: 'Tenderfy Story Intake',
    subtitle: 'Project knowledge, captured naturally',
  },
  storyEntries: [
    {
      id: 'm1',
      text: 'Mia asked me for the strongest example of how we kept a live facility operating during construction. Kingscliff is probably the best one.',
      time: '9:41',
    },
    {
      id: 'm2',
      text: 'The difficult part was replacing the pumps without interrupting the existing treatment system.',
      time: '9:43',
      voice: {
        duration: '1:18',
        transcript: 'We divided the cutover into three controlled stages so the plant could remain operational throughout the works. We completed the changeover two days ahead of programme and had no unplanned shutdowns. The client specifically praised how closely we communicated with their operations team. I have attached the completion summary, but that client feedback was given verbally, so Mia may want to verify it before using it.',
      },
      attachments: [
        { id: 'completion', name: 'Kingscliff_Project_Completion_Summary.pdf', kind: 'pdf', meta: 'Project completion record', preview: 'Kingscliff Pump Station Upgrade · Project completion summary · Delivery outcomes and close-out record' },
        { id: 'photo', name: 'Kingscliff_Cutover_Photo.jpg', kind: 'photo', meta: 'Site evidence', preview: 'Kingscliff Pump Station · Controlled cutover works · Site evidence image' },
      ],
    },
  ],
  storyNote: 'This knowledge had never been written as tender evidence.',
  processSteps: [
    { title: 'Understanding the project story', description: 'Operational context is separated from informal project recollection.' },
    { title: 'Extracting measurable evidence', description: 'Delivery outcomes and methodology are identified from the contribution.' },
    { title: 'Connecting claims to supplied sources', description: 'Documented outcomes are kept distinct from Alex’s contribution.' },
    { title: 'Identifying what still needs verification', description: 'The verbal client-feedback statement is marked for confirmation.' },
    { title: 'Matching the evidence to a tender requirement', description: 'Continuity-of-operations material is prepared for bid-manager review.' },
    { title: 'Preparing material for bid-manager review', description: 'Tender-ready evidence is presented with clear provenance.' },
  ],
  output: {
    title: 'NEW PROJECT EVIDENCE CAPTURED',
    subtitle: 'Kingscliff Pump Station Upgrade',
    status: 'READY FOR BID-MANAGER REVIEW',
    metrics: [
      { value: 3, label: 'controlled cutover stages' },
      { value: 0, label: 'unplanned shutdowns' },
      { value: 2, label: 'days ahead of programme' },
    ],
    note: 'Illustrative concept data',
  },
  readiness: {
    score: 100,
    strong: ['Three-stage controlled cutover documented', 'No unplanned shutdowns recorded', 'Completion outcome supported by a supplied document'],
    attention: ['Verify the verbal client-feedback statement'],
    conflict: 'Client-feedback statement requires confirmation before submission.',
    conflictActions: ['Assign to project manager'],
  },
  requirements: [
    { number: '3.2', title: 'Continuity of Operations Methodology', status: 'Draft created', source: 'Completion summary + Alex contribution', confidence: 'High', owner: 'Bid manager', action: 'Review tender-ready material' },
  ],
  evidence: {
    title: 'Kingscliff Pump Station Upgrade',
    subtitle: 'New project evidence captured',
    matches: ['Three-stage controlled cutover', 'Existing treatment system remained operational', 'No unplanned shutdowns', 'Completed two days ahead of programme', 'Client communication outcome identified'],
    sources: [
      { label: 'Kingscliff Project Completion Summary', type: 'Written source' },
      { label: 'Alex Roberts, Project Manager', type: 'Human contribution' },
      { label: 'Kingscliff Cutover Photo', type: 'Written source' },
    ],
    legend: [
      { label: 'Supported by document', description: 'Directly supported by the supplied completion record.' },
      { label: 'Human contribution', description: 'Contributed by Alex Roberts, Project Manager.' },
      { label: 'Verification required', description: 'Needs confirmation before it is used in a submission.' },
      { label: 'Illustrative concept data', description: 'Fictional demonstration content only.' },
    ],
  },
  submission: {
    projectCode: 'KPS / EVIDENCE 03.2',
    section: '3.2 Continuity of Operations Methodology',
    status: 'READY FOR BID-MANAGER REVIEW',
    paragraphs: ['Northline Civil delivered the Kingscliff Pump Station upgrade through a controlled three-stage cutover that maintained operation of the existing treatment system throughout the works. The project was completed two days ahead of programme with no unplanned shutdowns. This experience provides a directly relevant delivery model for works requiring continuity of critical operations.'],
    metrics: [
      { value: '03', label: 'Controlled stages' },
      { value: '0', label: 'Unplanned shutdowns' },
      { value: '−2d', label: 'Ahead of programme' },
    ],
    sources: ['Kingscliff Project Completion Summary', 'Alex Roberts, Project Manager', 'Client-feedback statement requires verification'],
  },
}
