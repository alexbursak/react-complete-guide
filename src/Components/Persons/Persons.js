import React from 'react';
import Person from "./Person/Person";

const Persons = (props) => {
    return (
        <div>
            {props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clickDeleteHandler={() => props.deletePersonHandler(index)}
                    nameChangedHandler={(event) => props.nameChangedHandler(event, person.id)}
                />
            })}
        </div>
    );
};

export default Persons;