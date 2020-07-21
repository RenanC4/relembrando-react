import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const app = props => {
  const [personsState, setPersonsState] = useState(
    { persons: [
      {name: 'Renan', age: 24},
      {name: 'manu', age: 29},
      {name: 'Ste', age: 26}
    ],
  }
  )

  const [otherState, setOtherState] = useState('Suga Minha Rola')
  const [userNameState, setUserNameState] = useState('Renan lindao')
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Renan Lindao', age: 24},
        {name: 'manu gordona', age: 29},
        {name: 'Ste depressiva', age: 26}
      ]
    })
  }
  const referenceTest = () => {
    console.log('APP.JS Binded')
  }
  const nameChangedHandler = e => {
    setPersonsState({
      persons: [
        {name: 'Renan Lindao', age: 24},
        {name: 'manu gordona', age: 29},
        {name: e.target.value, age: 26}
      ]
    })
  }

  const userNameChangedHandler = e =>{
    setUserNameState(e.target.value)
  }

    return (
      <div className="App">
       <h1>Hi, sou o Renan lindao</h1>
       <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
      >
        Meus Hobbies são jogar video game e praticar crossfit
      </Person>
      <Person name={personsState.persons[1].name} 
              age={personsState.persons[1].age}
              click={referenceTest}
      />
      <Person name={personsState.persons[2].name} 
              age={personsState.persons[2].age}
              changed = {nameChangedHandler}
      />
      <button onClick={switchNameHandler}>Switch Name</button>
      <hr />
      <UserInput changed={userNameChangedHandler} userName={userNameState}/>
      <UserOutput userName={userNameState}/>
      </div>
    );
  }

export default app;
