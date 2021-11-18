import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [number, setNumber] = useState<number>(5); // don't need to define as inferred

  const changeNumber = () => {
    setNumber(10);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
