import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: "Bob", age: 25},
            {name: "Mike", age: 50},
            {name: "Monique", age: 21},
        ],
        counter: 0,
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 25},
                {name: "Mike", age: 50},
                {name: "Monique", age: 21},
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Bob", age: 25},
                {name: event.target.value, age: 50},
                {name: "Monique", age: 21},
            ]
        });
    };

    toggleShowPersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        const style = {
            backgroundColor: '#333',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Yo</h1>
                {
                  this.state.showPersons ?
                <div>
                  <Person
                      click={this.switchNameHandler.bind(this, 'Alex')}
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}
                  />
                  <Person
                      click={this.switchNameHandler.bind(this, 'Bob')}
                      nameChangedHandler={this.nameChangedHandler}
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                  />
                  <Person
                      // click={this.switchNameHandler}
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}
                  />
                </div>
                : null
              }
                {/*<p>{this.state.counter}</p>*/}
                <button style={style} onClick={this.toggleShowPersonsHandler}>Switch Names</button>
            </div>
        );
    }
}

export default App;
