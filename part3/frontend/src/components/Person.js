import React from 'react';

const Person = (props) => {
    return (
      <div>
        <p>
        {props.person.name} {props.person.number} <button onClick={props.deletehandler}>delete</button> 
        </p>
        </div>   
    )
  }

export default Person