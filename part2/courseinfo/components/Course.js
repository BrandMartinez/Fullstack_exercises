import React from 'react';
import Header from './Header';
import Part from './Part';


const Course = ({ course }) => {

    const list = []

    const sum = course.parts.reduce((acc,item) => {
      list.push(<Part part={item} key={item.id} />)
      return acc += item.exercises
    },0 )

    return (
      <div>
        <Header course={course} />
        {list}
        <p><b>Total number of exercises {sum}</b></p>
      </div>
    )
  }

  export default Course