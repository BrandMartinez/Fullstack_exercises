import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statistic = props => {
  return(
    <tr>
      <td>{props.text}</td><td>{props.value} {props.aftertext}</td>
    </tr>
  )
}

const Statistics = props => {
  if ((props.good + props.neutral + props.bad)===0)
  {
    return(
      <div>
        <p>No feedback</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral}/>
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="all" value={props.good + props.neutral + props.bad}/>
        <Statistic text="average" value={(props.good  - props.bad)/(props.good + props.neutral + props.bad)}/>
        <Statistic text="positive" value={(props.good/(props.good + props.neutral + props.bad))*100} aftertext="%"/>
      </tbody>
    </table>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

