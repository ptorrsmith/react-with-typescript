import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

// define types for people (an array of objects with attribute types)
interface iState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  // const [number, setNumber] = useState<number>(5); // don't need to define as inferred

  // const changeNumber = () => {
  //   setNumber(10);
  // }

  const [people, setPeople] = useState<iState["people"]>([
    {
      name: "Peter",
      age: 30,
      url: "https://peter.torr.smith/",
      note: "I am a programmer"
    },
    {
      name: "Mary",
      age: 33,
      url: "https://peter.torr.smith/",
      note: "I am not a programmer"
    }
  ]) // defines the type (iState["people"]) for our people local state

  // people.map(person => {
  //   person.note
  // })



  return (
    <div className="App">
      <h1>People invited to the gig</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
