import React from 'react';
import classes from "./Cockpit.css";

const Cockpit = (props) => {
    const personsListLength = props.personsListLength;
    const showPersons = props.showPersons;
    const toggleShowPersonsHandler = props.toggleShowPersonsHandler;
    const appTitle = props.appTitle;

    let inlineClasses = [];
    if (personsListLength <= 2) {
        inlineClasses.push(classes.gray);
    }
    if (personsListLength <= 1) {
        inlineClasses.push(classes.italic);
    }
    if (personsListLength === 0) {
        inlineClasses = [];
    }

    let btnClass = '';
    if (showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{appTitle}</h1>
            <p className={inlineClasses.join(' ')}>those are my classes</p>
            <button
                className={btnClass}
                onClick={toggleShowPersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;