import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Pokedex pokenumber={15}/>
      </header>
    </div>
  );


}

export default App