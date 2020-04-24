import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    // used to improve performance
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        // make sure that persons updates only if persons has been changed.
        // persons is an array, so make sure we update persons correctly (create a copy)
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {payload: 'some text'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    // Used to cleanup stuff
    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount")
    }

    render() {
        return (
            <div>
                {this.props.persons.map((person, index) => {
                    return <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clickDeleteHandler={() => this.props.deletePersonHandler(index)}
                        nameChangedHandler={(event) => this.props.nameChangedHandler(event, person.id)}
                    />
                })}
            </div>
        );
    }
}

export default Persons;