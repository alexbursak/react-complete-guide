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

    deletePersonHandler = (index) => {
        let persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
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

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            clickDeleteHandler={this.deletePersonHandler.bind(this, index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Yo, this is react App.</h1>
                <button style={style} onClick={this.toggleShowPersonsHandler}>Toggle Persons</button>
                { persons }
            </div>
        );
    }
}

export default App;
