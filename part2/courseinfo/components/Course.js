import React from 'react';
import Header from './Header';
import Part from './Part';


const Course = ({ course }) => {

    const sum = course.parts.reduce((acc,item) => {
      return acc += item.exercises
    },0 )

    return (
      <div>
        <Header course={course} />
        {course.parts.map(element => <Part part={element} key={element.id} />)}
        <p><b>Total number of exercises {sum}</b></p>
      </div>
    )
  }

  export default Course