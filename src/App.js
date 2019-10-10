import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {

    state = {
        persons: [
            {id: '101', name: "Bob", age: 25},
            {id: '102', name: "Mike", age: 50},
            {id: '103', name: "Monique", age: 21},
        ],
        counter: 0,
        showPersons: false
    };

    deletePersonHandler = (index) => {
        let persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === personId;
        });

        // copying the person and assigning new value
        let person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        // copying the list and updating with new person
        let persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    toggleShowPersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            clickDeleteHandler={() => this.deletePersonHandler(index)}
                            nameChangedHandler={(event) => this.nameChangedHandler(event, person.id)}
                            />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'lightcoral',
                color: 'black'
            }
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('gray');
        }
        if (this.state.persons.length <= 1) {
            classes.push('italic');
        }
        if (this.state.persons.length === 0) {
            classes = [];
        }

        return (
            <div className="App">
                <h1>Yo, this is react App.</h1>
                <p className={classes.join(' ')}>those are my classes</p>
                <button style={style} onClick={this.toggleShowPersonsHandler}>Toggle Persons</button>
                { persons }
            </div>
        );
    }
}

export default Radium(App);
