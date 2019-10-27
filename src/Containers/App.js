import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

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
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    deletePersonHandler={this.deletePersonHandler}
                    nameChangedHandler={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.appTitle}
                    personsListLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    toggleShowPersonsHandler={this.toggleShowPersonsHandler} />

                { persons }
            </div>
        );
    }
}

export default App;
