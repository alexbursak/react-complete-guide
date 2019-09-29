import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Yo</h1>
        <Person name="Bob" age="25"/>
        <Person name="Mike" age="50">My hobbies are: Games</Person>
        <Person />
    </div>
  );
}

export default App;
