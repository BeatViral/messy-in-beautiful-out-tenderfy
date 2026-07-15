import { useEffect, useState } from 'react'
import { BeautifulOutput } from './components/BeautifulOutput'
import { BuilderFooter } from './components/BuilderFooter'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { StoryPhone } from './components/StoryPhone'
import { TransformationEngine } from './components/TransformationEngine'
import { company } from './config/company'
import { projectStories } from './data/scenario'
import { useDemoSequence } from './hooks/useDemoSequence'

function App() {
  const [selectedStoryId, setSelectedStoryId] = useState(projectStories[0]!.id)
  const activeStory = projectStories.find((story) => story.id === selectedStoryId) ?? projectStories[0]!
  const activeScenario = activeStory.scenario
  const demo = useDemoSequence(activeScenario.storyEntries.length, activeScenario.processSteps.length)
  const [started, setStarted] = useState(false)

  const startDemo = () => {
    setStarted(true)
    demo.startStory()
    window.setTimeout(() => document.querySelector('#story-demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 70)
  }

  const selectStory = (storyId: string) => {
    if (storyId === selectedStoryId) return
    demo.reset(false)
    setSelectedStoryId(storyId)
    setStarted(true)
    window.setTimeout(demo.startStory, 80)
  }

  useEffect(() => {
    if (demo.phase !== 'story' || demo.visibleMessages !== activeScenario.storyEntries.length) return
    const timer = window.setTimeout(demo.transform, 420)
    return () => window.clearTimeout(timer)
  }, [activeScenario.storyEntries.length, demo.phase, demo.transform, demo.visibleMessages])

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
              <div className="story-switcher">
                <p>TRY ANOTHER PROJECT STORY</p>
                <div role="group" aria-label="Choose a fictional project story">
                  {projectStories.map((story) => <button type="button" key={story.id} onClick={() => selectStory(story.id)} aria-pressed={story.id === selectedStoryId}>{story.label}</button>)}
                </div>
              </div>
              <p className="object-label"><span>MESSY IN / THE TEAM STORY</span><i /></p>
              <StoryPhone key={activeStory.id} scenario={activeScenario} visibleMessages={demo.visibleMessages} completed={demo.phase === 'processing' || demo.phase === 'complete'} />
              {!started && <button className="start-story-button" type="button" onClick={startDemo}>Play the story</button>}
            </div>
            <TransformationEngine phase={demo.phase} activeStep={demo.activeStep} steps={activeScenario.processSteps} />
            <div className="output-column">
              <p className="object-label"><i /><span>BEAUTIFUL OUT / TENDER WORK</span></p>
              <BeautifulOutput key={activeStory.id} scenario={activeScenario} productName={company.companyName} complete={demo.phase === 'complete'} />
            </div>
          </div>
        </section>
        <section className="closing-insight section-shell">
          <h2>Your strongest tender evidence may not be in the content library yet.<br /><span>It may still be inside the people who delivered the work.</span></h2>
          <p>Let them tell the story. Tenderfy turns it into evidence the bid team can use.</p>
        </section>
        <BuilderFooter company={company} />
      </main>
    </div>
  )
}

export default App
