import React from 'react'
import { Button } from './components';
import Card from './components/Card';
import ProgressMeter from './components/ProgressMeter/ProgressMeter';
import { CardHeight, CardWidth } from './types';
type Props = {}

const App = (props: Props) => {
  const PromptWorkflow = [{
    title: 'Zero Shot Prompting',
    description: 'Use AI without any context, the most common approach.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ["None", 'Result Improvement'],
      progress: 0
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ["None", "Time Effort Required"],
      progress: 0
    }
  },
  {
    title: 'Few Shot Prompting',
    description: 'Give AI some examples for before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ["None", 'Result Improvement'],
      progress: 70
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ["None", "Time Effort Required"],
      progress: 18
    }
  },
  {
    title: 'Chain Of Thought',
    description: 'Give AI thought processes for 1 or more examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ["None", 'Result Improvement'],
      progress: 90
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ["None", "Time Effort Required"],
      progress: 48
    }
  },
  {
    title: 'Automatic Chain Of Thought',
    description: 'Automate giving AI thought processes for 1 or more examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ["None", 'Result Improvement'],
      progress: 90
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ["None", "Time Effort Required"],
      progress: 22
    }
  },
  {
    title: 'Tree Of Thought',
    description: 'Give AI branched logic examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ["None", 'Result Improvement'],
      progress: 10
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ["None", "Time Effort Required"],
      progress: 68
    }
  },
  {
    title: 'Directional Stimulus',
    description: 'Give AI thought processes for 1 or more examples before asking your question.',
    progressMeterOneDetails: {
      progressMeterOneSubtitles: ["None", 'Result Improvement'],
      progress: 50
    },
    progressMeterTwoDetails: {
      progressMeterTwoSubtitles: ["None", "Time Effort Required"],
      progress: 8
    }
  }
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
  gap: '6rem',
  padding: '0 5rem',
  placeItems: 'center'
};

  return (
    <>
     <h2 style={{ textAlign: 'center', color: 'white', marginTop: '2rem', fontWeight: 400 }}>Create New Prompt Workflow</h2>
      <div style={gridStyle}>
        {PromptWorkflow.map((workFlow, index) => (
          <Card style={{border:'2px solid red'}} key={index} width={CardWidth.Default} height={CardHeight.FitContent}>
            <div style={{padding:'1rem',display:"flex"}}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ color: 'white', fontSize: '16px',margin:'0' }}>{workFlow.title}</h2>
                <p style={{ color: '#B0B0B0', fontSize: '13px' }}>{workFlow.description}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>

              <ProgressMeter progress={workFlow.progressMeterOneDetails.progress} progressSubtitles={workFlow.progressMeterOneDetails.progressMeterOneSubtitles as [string, string]} />
              <ProgressMeter progress={workFlow.progressMeterTwoDetails.progress} progressSubtitles={workFlow.progressMeterTwoDetails.progressMeterTwoSubtitles as [string, string]} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>

  )
}

export default App