import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

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
      url: "http://www.ptorrsmith.com/assets/Peter_20190121_202047-a661886ab704a79803577637a4a225367f7f675e55eeecb77f14bd84ad176bf8.jpg",
      note: "I am a programmer"
    },
    {
      name: "Mary",
      age: 33,
      url: "https://content.latest-hairstyles.com/wp-content/uploads/hairstyles-for-oval-faces.jpg",
      note: "I am not a programmer"
    },
    {
      name: "Ari",
      age: 32,
      url: "https://www.verywellmind.com/thmb/JmTki9UferU_g6jfS76TuZ-mrP4=/1412x1412/smart/filters:no_upscale()/happy-relaxed-man-wearing-glasses-ee2f1576532643e0845952e209bad8ee.jpg",
      note: "I am something else"
    }
  ]) // defines the type (iState["people"]) for our people local state

  // people.map(person => {
  //   person.note
  // })



  return (
    <div className="App">
      <h1>People invited to the gig</h1>
      <List people={people}/>
      <AddToList />
    </div>
  );
}

export default App;
