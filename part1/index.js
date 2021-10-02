import React from 'react'
import ReactDOM from 'react-dom'




const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

const Header = ({course}) => 
{
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({part1,part2,part3}) =>
{
  return(
    <div>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </div>
  )
}

const Part = ({part}) => 
{
  return(
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Total = ({exercises}) => 
{
  return(
    <div>
      <p>Number of exercises {exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
