import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className="person">
      <p> I'm {props.name}, I am {props.age} years old</p>
      <p>{props.children}</p>
      {props.click &&
       <button onClick={props.click}>hue</button>
      }
        {props.changed &&
        <input type="text" onChange={props.changed} value={props.name}/>
      }
    </div>
  )
}

export default person