import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Display = props => {
  return(
  <div>
    {props.text} {props.value} {props.aftertext}
  </div>
  )
}

const Statistics = props => {
  if ((props.good + props.neutral + props.bad)===0)
  {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
  <div>
    <Display text="good" value={props.good}></Display>
    <Display text="neutral" value={props.neutral}></Display>
    <Display text="bad" value={props.bad}></Display>
    <Display text="all" value={props.good + props.neutral + props.bad}></Display>
    <Display text="average" value={(props.good  - props.bad)/(props.good + props.neutral + props.bad)}></Display>
    <Display text="positive" value={(props.good/(props.good + props.neutral + props.bad))*100} aftertext="%"></Display>

  </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
