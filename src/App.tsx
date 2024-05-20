import React from 'react'
import { Button } from './components';
import Card from './components/Card';
import ProgressMeter from './components/ProgressMeter/ProgressMeter';
type Props = {}

const App = (props: Props) => {
  return (
    <>
    <Button label='Hi'/>
    <Card>
        <h2>hi</h2>
    </Card>
    <ProgressMeter progressSubtitles={["Low","Medium"]}/>
    </>

  )
}

export default App