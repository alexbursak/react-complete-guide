import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    // return React.createElement('div', null, 'h1', 'sup babe? I am an FBI agent. Beep beep');
  return (
    <div className="App">
        <h1>Yo</h1>
        <Person />
    </div>
  );
}

export default App;
