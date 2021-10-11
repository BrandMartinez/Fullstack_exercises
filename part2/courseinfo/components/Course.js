import React from 'react';
import Header from './Header';
import Part from './Part';


const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} />
      </div>
    )
  }

  export default Course