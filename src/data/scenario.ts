import type { ScenarioData } from '../types/scenario'

export const scenario: ScenarioData = {
  sender: { name: 'Mia — Bid Manager', company: 'Northline Civil', initials: 'MI' },
  intake: {
    title: 'Tenderfy Story Intake',
    subtitle: 'Project knowledge, captured naturally',
  },
  storyEntries: [
    {
      id: 'm1',
      text: 'We received the North Coast Water Treatment Upgrade tender yesterday. Can we use the Kingscliff project for this one?',
      time: '9:41',
      attachment: {
        id: 'rft',
        name: 'North_Coast_Water_Upgrade_RFT.pdf',
        kind: 'pdf',
        meta: '186 pages · 14.8 MB',
        preview: 'Request for Tender · North Coast Water Treatment Upgrade · Response schedules and technical requirements',
      },
    },
    {
      id: 'm2',
      text: 'Alex ran Kingscliff. I’ve attached the case study, his CV and our current WHS plan.',
      time: '9:43',
      voice: {
        duration: '1:18',
        transcript:
          'The difficult part was keeping the existing system operational while we replaced the pumps. Alex divided the cutover into three controlled stages. We finished two days early and had no unplanned shutdowns. The client specifically praised the communication with operations.',
      },
      attachments: [
        { id: 'case', name: 'Kingscliff_Pump_Station_Case_Study.docx', kind: 'docx', meta: 'Project evidence', preview: 'Kingscliff Pump Station Upgrade · Case study · Delivery methodology and outcomes' },
        { id: 'cv', name: 'Alex_Roberts_CV.docx', kind: 'docx', meta: 'Key personnel', preview: 'Alex Roberts · Project Director · Water infrastructure experience' },
        { id: 'whs', name: 'WHS_Management_Plan_2025.pdf', kind: 'pdf', meta: 'Current policy', preview: 'Work Health & Safety Management Plan · 2025 controlled copy' },
        { id: 'env', name: 'Environmental_Policy.pdf', kind: 'pdf', meta: 'Current policy', preview: 'Environmental Management Policy · Approved company document' },
      ],
    },
    {
      id: 'm3',
      text: 'Our estimator also said the proposed programme is six weeks, but the methodology still says eight. I’m not sure which version is in the current draft.',
      time: '9:46',
    },
  ],
  storyNote: 'This is how tender knowledge actually arrives.',
  processSteps: [
    { title: 'Reading the tender requirements', description: '42 response requirements identified across the supplied RFT.' },
    { title: 'Extracting project evidence', description: 'Project outcomes, delivery methods and client context separated from narrative.' },
    { title: 'Matching people, policies and case studies', description: 'Relevant sources connected to the requirements they can support.' },
    { title: 'Finding gaps and contradictions', description: 'Programme duration differs between the estimator’s note and the current methodology.' },
    { title: 'Building the submission workspace', description: 'Evidence-backed drafts, owners and review actions assembled for the bid team.' },
  ],
  output: {
    title: 'North Coast Water Treatment Upgrade',
    subtitle: 'Story-derived tender workspace',
    status: 'READY FOR TEAM INPUT',
    metrics: [
      { value: 42, label: 'requirements identified' },
      { value: 36, label: 'matched to company evidence' },
      { value: 4, label: 'owner inputs required' },
      { value: 2, label: 'compliance checks' },
      { value: 1, label: 'evidence conflict' },
      { value: 86, suffix: '%', label: 'submission readiness' },
    ],
    note: 'Illustrative concept data',
  },
  readiness: {
    score: 86,
    strong: [
      'Relevant water-infrastructure case study found',
      'Project director experience aligned',
      'Current WHS and environmental policies available',
      'Staged cutover methodology supported by project evidence',
    ],
    attention: [
      'Confirm six-week programme',
      'Add commissioning KPI',
      'Confirm nominated electrical subcontractor',
      'Review environmental incident-response wording',
    ],
    conflict: 'Current methodology says eight weeks. Estimator’s contribution says six weeks.',
    conflictActions: ['Assign to estimator', 'Keep eight weeks', 'Update to six weeks'],
  },
  requirements: [
    { number: '2.1', title: 'Relevant project experience', status: 'Evidence matched', source: 'Kingscliff case study', confidence: 'High', owner: 'Bid team', action: 'Review evidence' },
    { number: '3.2', title: 'Continuity of operations methodology', status: 'Draft created', source: 'Case study + voice note', confidence: 'High', owner: 'Alex Roberts', action: 'Review draft' },
    { number: '4.1', title: 'Key personnel', status: 'Evidence matched', source: 'Alex Roberts CV', confidence: 'High', owner: 'People team', action: 'Confirm availability' },
    { number: '5.3', title: 'Programme', status: 'Conflict', source: 'Methodology + estimator note', confidence: 'Mixed', owner: 'Estimator', action: 'Resolve conflict' },
    { number: '6.1', title: 'WHS management', status: 'Compliance review', source: 'WHS plan 2025', confidence: 'High', owner: 'WHS lead', action: 'Compliance check' },
    { number: '6.4', title: 'Environmental controls', status: 'Owner input needed', source: 'Environmental policy', confidence: 'Medium', owner: 'Environment lead', action: 'Add project detail' },
    { number: '7.2', title: 'Stakeholder communication', status: 'Draft created', source: 'Voice-note contribution', confidence: 'Medium', owner: 'Alex Roberts', action: 'Verify client feedback' },
    { number: '8.1', title: 'Commissioning approach', status: 'Owner input needed', source: 'Partial case study evidence', confidence: 'Medium', owner: 'Commissioning lead', action: 'Add KPI' },
  ],
  evidence: {
    title: 'Kingscliff Pump Station',
    subtitle: 'Matched project evidence',
    matches: [
      'Staged operational cutover',
      'Completed two days early',
      'No unplanned shutdowns',
      'Positive client communication feedback',
    ],
    sources: [
      { label: 'Case study', type: 'Written source' },
      { label: 'Voice-note contribution', type: 'Human contribution' },
      { label: 'Alex Roberts CV', type: 'Written source' },
    ],
    legend: [
      { label: 'Written source', description: 'Directly supported by a supplied document.' },
      { label: 'Human contribution', description: 'Contributed by a named project team member.' },
      { label: 'Inferred connection', description: 'A useful link that still requires human review.' },
      { label: 'Still unverified', description: 'No supporting source has been confirmed yet.' },
    ],
  },
  submission: {
    projectCode: 'NCWTU / RFT 042',
    section: '3.2 Continuity of Operations Methodology',
    status: 'TEAM REVIEW DRAFT',
    paragraphs: [
      'Northline Civil will deliver the pump replacement through a three-stage controlled cutover designed to maintain continuous operation of the existing treatment system.',
      'The methodology is informed by the successful Kingscliff Pump Station upgrade, where staged commissioning enabled completion two days ahead of programme with no unplanned shutdowns. Each transition will be planned with operations, verified against hold points and communicated through a single accountable interface.',
    ],
    metrics: [
      { value: '03', label: 'Controlled stages' },
      { value: '0', label: 'Unplanned shutdowns' },
      { value: '−2d', label: 'Ahead of programme' },
    ],
    sources: ['Kingscliff case study', 'Project manager contribution', 'Programme confirmation required'],
  },
}
