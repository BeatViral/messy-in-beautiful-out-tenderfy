import type { ProjectStory, ScenarioData } from '../types/scenario'

interface StorySeed {
  sender: ScenarioData['sender']
  note: string
  message: string
  voice: string
  attachment: ScenarioData['storyEntries'][number]['attachments']
  project: string
  documented: string[]
  humanContribution: string
  verification: string
  requirement: string
  paragraph: string
  sourceName: string
}

function makeScenario(seed: StorySeed): ScenarioData {
  return {
    sender: seed.sender,
    intake: { title: 'Tenderfy Story Intake', subtitle: 'Project knowledge, captured naturally' },
    storyEntries: [
      { id: 'message', text: seed.message, time: '9:41' },
      { id: 'voice', text: 'I’ve sent a short voice note and the supporting project record.', time: '9:43', voice: { duration: '0:38', transcript: seed.voice }, attachments: seed.attachment },
    ],
    storyNote: seed.note,
    processSteps: [
      { title: 'Understanding the project story', description: 'Operational context is separated from informal project recollection.' },
      { title: 'Extracting measurable evidence', description: 'Delivery outcomes and methodology are identified from the contribution.' },
      { title: 'Connecting claims to supplied sources', description: 'Documented outcomes are kept distinct from the expert’s contribution.' },
      { title: 'Identifying what still needs verification', description: 'Any unsupported claim is clearly marked for confirmation.' },
      { title: 'Matching the evidence to a tender requirement', description: 'Tender-ready material is prepared for bid-manager review.' },
      { title: 'Preparing material for bid-manager review', description: 'Evidence is presented with clear provenance.' },
    ],
    output: { title: 'NEW PROJECT EVIDENCE CAPTURED', subtitle: seed.project, status: 'READY FOR BID-MANAGER REVIEW', metrics: [], note: 'Illustrative concept data' },
    readiness: { score: 100, strong: seed.documented, attention: [seed.verification], conflict: seed.verification, conflictActions: ['Assign to project expert'] },
    requirements: [{ number: seed.requirement.split(' ')[0] ?? '3.2', title: seed.requirement.replace(/^\S+\s/, ''), status: 'Draft created', source: seed.sourceName, confidence: 'High', owner: 'Bid manager', action: 'Review tender-ready material' }],
    evidence: {
      title: seed.project,
      subtitle: 'New project evidence captured',
      matches: [...seed.documented, seed.humanContribution],
      sources: [{ label: seed.sourceName, type: 'Written source' }, { label: seed.sender.name, type: 'Human contribution' }],
      legend: [
        { label: 'Supported by document', description: 'Directly supported by the supplied project record.' },
        { label: 'Human contribution', description: 'Contributed by the operational project expert.' },
        { label: 'Verification required', description: 'Needs confirmation before it is used in a submission.' },
        { label: 'Illustrative concept data', description: 'Fictional demonstration content only.' },
      ],
    },
    submission: { projectCode: 'PROJECT EVIDENCE', section: seed.requirement, status: 'READY FOR BID-MANAGER REVIEW', paragraphs: [seed.paragraph], metrics: [], sources: [seed.sourceName, seed.sender.name, seed.verification] },
  }
}

export const projectStories: ProjectStory[] = [
  {
    id: 'live-operations',
    label: 'Live operations',
    scenario: makeScenario({
      sender: { name: 'Alex — Project Manager', company: 'Northline Civil · Kingscliff Pump Station', initials: 'AR' },
      note: 'This knowledge had never been written as tender evidence.',
      message: 'Mia asked me for the strongest example of how we kept a live facility operating during construction. Kingscliff is probably the best one.',
      voice: 'We divided the cutover into three controlled stages so the plant could remain operational throughout the works. We completed the changeover two days ahead of programme and had no unplanned shutdowns. The client praised how closely we communicated with operations, but that was verbal, so Mia may want to verify it before using it.',
      attachment: [{ id: 'completion', name: 'Kingscliff_Project_Completion_Summary.pdf', kind: 'pdf', meta: 'Project completion record', preview: 'Kingscliff Pump Station Upgrade · Completion summary · Delivery outcomes and close-out record' }],
      project: 'Kingscliff Pump Station Upgrade',
      documented: ['Three-stage controlled cutover', 'Existing treatment system remained operational', 'No unplanned shutdowns', 'Completed two days ahead of programme'],
      humanContribution: 'Client communication outcome identified',
      verification: 'Confirm the client-feedback statement before submission',
      requirement: '3.2 Continuity of Operations Methodology',
      paragraph: 'Northline Civil delivered the Kingscliff Pump Station upgrade through a controlled three-stage cutover that maintained operation of the existing treatment system throughout the works. The project was completed two days ahead of programme with no unplanned shutdowns. This experience provides a directly relevant delivery model for works requiring continuity of critical operations.',
      sourceName: 'Kingscliff Project Completion Summary',
    }),
  },
  {
    id: 'programme-recovery',
    label: 'Programme recovery',
    scenario: makeScenario({
      sender: { name: 'Priya — Project Engineer', company: 'Northline Civil · River Link Upgrade', initials: 'PE' },
      note: 'The recovery approach was known by the project team, not the content library.',
      message: 'We recovered three weeks of delay by changing the staging and running two work fronts.',
      voice: 'We re-sequenced the work around the constrained access zone and ran civil and services crews in parallel. The updated programme and progress reports show the recovery and final completion date. We also believe the change avoided a significant cost, but that saving has not been financially documented.',
      attachment: [{ id: 'programme', name: 'Programme_Recovery_Evidence_Pack.pdf', kind: 'pdf', meta: 'Updated programme · progress report', preview: 'River Link Upgrade · Updated programme, progress reports and completion record' }],
      project: 'River Link Upgrade',
      documented: ['Staging changed', 'Two work fronts delivered', 'Three weeks recovered', 'Completion date recorded'],
      humanContribution: 'Potential cost saving identified',
      verification: 'Confirm any claimed saving unless financially documented',
      requirement: '4.1 Programme and Delivery Methodology',
      paragraph: 'Northline Civil recovered a three-week programme delay on the River Link Upgrade by re-sequencing constrained works and operating two coordinated work fronts. Updated programme and progress records demonstrate the revised staging approach and confirmed completion outcome.',
      sourceName: 'Programme Recovery Evidence Pack',
    }),
  },
  {
    id: 'safety-improvement',
    label: 'Safety improvement',
    scenario: makeScenario({
      sender: { name: 'Jordan — Site Supervisor', company: 'Northline Civil · Port Access Works', initials: 'JS' },
      note: 'The safety improvement came from observation on site.',
      message: 'We changed the lifting sequence after noticing a risk the original methodology had missed.',
      voice: 'At the pre-start, the crew identified a clash between the lift path and the exclusion zone. We stopped, revised the lifting sequence and recorded it in the SWMS and toolbox talk. The incident summary shows zero incidents after the change. The client was pleased, but any client praise should be verified before it is used.',
      attachment: [{ id: 'safety', name: 'Safety_Improvement_Evidence_Pack.pdf', kind: 'pdf', meta: 'Revised SWMS · toolbox record', preview: 'Port Access Works · Revised SWMS, toolbox record and incident summary' }],
      project: 'Port Access Works',
      documented: ['Revised lifting sequence', 'Risk control recorded in SWMS', 'Toolbox record completed', 'Zero incidents recorded'],
      humanContribution: 'Client safety response identified',
      verification: 'Verify any claimed client praise before submission',
      requirement: '6.1 WHS Management and Continuous Improvement',
      paragraph: 'Northline Civil identified and controlled an unforeseen lifting-interface risk during the Port Access Works. The team paused the activity, revised the lifting sequence, updated the SWMS and briefed the crew through a documented toolbox talk, with zero incidents recorded after implementation.',
      sourceName: 'Safety Improvement Evidence Pack',
    }),
  },
  {
    id: 'stakeholder-management',
    label: 'Stakeholder management',
    scenario: makeScenario({
      sender: { name: 'Elena — Community Liaison Manager', company: 'Northline Civil · Eastfield Renewal', initials: 'EC' },
      note: 'The relationship work was captured in day-to-day communication, not tender language.',
      message: 'The works were beside homes and a school, so we changed delivery times and communication methods.',
      voice: 'We moved deliveries outside school arrival and pickup periods, issued weekly notifications and gave residents a direct contact channel. The complaints register and notification records show fewer complaints after the changes. Some residents gave positive feedback directly, but that needs verification before we cite it.',
      attachment: [{ id: 'community', name: 'Community_Engagement_Evidence_Pack.pdf', kind: 'pdf', meta: 'Complaints register · notification records', preview: 'Eastfield Renewal · Community notifications, delivery schedule and complaints register' }],
      project: 'Eastfield Renewal',
      documented: ['Delivery times changed', 'Notification records issued', 'Complaints register monitored', 'Reduced complaints recorded'],
      humanContribution: 'Resident feedback identified',
      verification: 'Verify resident feedback before submission',
      requirement: '7.2 Stakeholder and Community Management',
      paragraph: 'Northline Civil adapted delivery timing and communication methods for works adjacent to homes and a school on the Eastfield Renewal. Documented notifications, a direct resident contact channel and adjusted delivery windows supported a measured reduction in recorded complaints.',
      sourceName: 'Community Engagement Evidence Pack',
    }),
  },
]

export const scenario = projectStories[0]!.scenario
