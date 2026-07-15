import { useEffect, useState } from 'react'
import { BeautifulOutput } from './components/BeautifulOutput'
import { BuilderFooter } from './components/BuilderFooter'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { StoryPhone } from './components/StoryPhone'
import { TransformationEngine } from './components/TransformationEngine'
import { company } from './config/company'
import { scenario } from './data/scenario'
import { useDemoSequence } from './hooks/useDemoSequence'

function App() {
  const demo = useDemoSequence(scenario.storyEntries.length, scenario.processSteps.length)
  const [started, setStarted] = useState(false)

  const startDemo = () => {
    setStarted(true)
    demo.startStory()
    window.setTimeout(() => document.querySelector('#story-demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 70)
  }

  useEffect(() => {
    if (demo.phase !== 'story' || demo.visibleMessages !== scenario.storyEntries.length) return
    const timer = window.setTimeout(demo.transform, 420)
    return () => window.clearTimeout(timer)
  }, [demo.phase, demo.transform, demo.visibleMessages])

  const reset = () => {
    setStarted(false)
    demo.reset()
  }

  return (
    <div className="app-shell simplified-app">
      <Header company={company} onReset={reset} />
      <main>
        <Hero company={company} onStart={startDemo} />
        <section className="demo-section" id="story-demo">
          <div className="section-shell demo-workbench">
            <div className="messy-column">
              <p className="object-label"><span>MESSY IN / THE TEAM STORY</span><i /></p>
              <StoryPhone scenario={scenario} visibleMessages={demo.visibleMessages} completed={demo.phase === 'processing' || demo.phase === 'complete'} />
              {!started && <button className="start-story-button" type="button" onClick={startDemo}>Play the story</button>}
            </div>
            <TransformationEngine phase={demo.phase} />
            <div className="output-column">
              <p className="object-label"><i /><span>BEAUTIFUL OUT / TENDER WORK</span></p>
              <BeautifulOutput scenario={scenario} productName={company.companyName} complete={demo.phase === 'complete'} />
            </div>
          </div>
        </section>
        <section className="closing-insight section-shell">
          <h2>Don’t make every expert become a tender writer.<br /><span>Let them tell the story only they know.</span></h2>
          <p>Tenderfy turns that knowledge into structured tender work.</p>
        </section>
        <BuilderFooter company={company} />
      </main>
    </div>
  )
}

export default App
