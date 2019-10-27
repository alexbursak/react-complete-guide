import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        console.log(nextProps, nextState, nextContext);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        console.log({payload: 'some text'}, prevProps, prevState);
        return {payload: 'some text'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(prevProps, prevState, snapshot);
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
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