import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BeautifulOutput } from './components/BeautifulOutput'
import { BuilderFooter } from './components/BuilderFooter'
import { CompanyOpportunity } from './components/CompanyOpportunity'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { NotChatbot, ProductInsight } from './components/ProductInsight'
import { StoryPhone } from './components/StoryPhone'
import { TransformationEngine } from './components/TransformationEngine'
import { company } from './config/company'
import { scenario } from './data/scenario'
import { useDemoSequence } from './hooks/useDemoSequence'

function App() {
  const demo = useDemoSequence(scenario.storyEntries.length, scenario.processSteps.length)
  const [mobileView, setMobileView] = useState<'messy' | 'beautiful'>('messy')

  useEffect(() => {
    if (demo.phase === 'complete') setMobileView('beautiful')
  }, [demo.phase])

  const startStory = () => {
    setMobileView('messy')
    demo.startStory()
    window.setTimeout(() => document.querySelector('#story-demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const reset = () => {
    setMobileView('messy')
    demo.reset()
  }

  return (
    <div className="app-shell">
      <Header company={company} onReset={reset} />
      <main>
        <Hero company={company} scenario={scenario} onStart={startStory} />
        <ProductInsight insight={company.insight} />

        <section className="demo-section" id="story-demo">
          <div className="section-shell demo-heading">
            <div><p className="eyebrow"><span />THE STORY DEMONSTRATION</p><h2>Tell the story.<br /><span>Let the structure emerge.</span></h2></div>
            <p>One realistic contribution. A tender’s worth of useful context.</p>
          </div>
          <div className="mobile-demo-tabs" role="tablist" aria-label="Demo view">
            <button role="tab" type="button" aria-selected={mobileView === 'messy'} onClick={() => setMobileView('messy')}>Messy In</button>
            <button role="tab" type="button" aria-selected={mobileView === 'beautiful'} onClick={() => setMobileView('beautiful')}>Beautiful Out</button>
          </div>
          <div className={`section-shell demo-workbench mobile-${mobileView}`}>
            <div className="messy-column">
              <div className="object-label"><span>01 / RAW CONTRIBUTION</span><i /></div>
              <StoryPhone scenario={scenario} visibleMessages={demo.visibleMessages} completed={demo.phase === 'processing' || demo.phase === 'complete'} />
              {demo.phase === 'idle' && <button className="start-story-button" type="button" onClick={demo.startStory}>Play the conversation <ArrowRight size={16} /></button>}
            </div>
            <div className="engine-column">
              <div className="object-label"><span>02 / TRANSFORMATION</span><i /></div>
              <TransformationEngine phase={demo.phase} steps={scenario.processSteps} activeStep={demo.activeStep} onTransform={demo.transform} onSkip={demo.skip} />
            </div>
          </div>
        </section>

        <div className={`mobile-output-wrap mobile-${mobileView}`}>
          <BeautifulOutput scenario={scenario} productName={company.companyName} newlyCreated={demo.phase === 'complete'} />
        </div>
        <CompanyOpportunity opportunity={company.opportunity} />
        <NotChatbot notChatbot={company.notChatbot} />
        <BuilderFooter company={company} />
      </main>
      <button className="mobile-sticky-cta" type="button" onClick={startStory}>See the transformation <ArrowRight size={16} /></button>
    </div>
  )
}

export default App
