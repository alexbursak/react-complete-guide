import React, {useEffect, useRef, useContext} from 'react';
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    // different (better) way of accessing context
    const context = useContext(AuthContext);

    // alternative to componentDidMount
    // runs only for first time component initialised is empty array passed
    useEffect(() => {
        console.log('[Cockpit.js] useEffect - initial');
        toggleBtnRef.current.click();
    }, []);

    // gets triggered when the passed parameter changes. `props.personsListLength`
    // can have multiple field you depend on.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect - personsListLength changed');
    }, [props.personsListLength]);

    // alternative to componentWillUnmount - cleanup work
    // by returning a function we can achieve similar effect as componentWillUnmount
    // useEffect(() => {
    //     return () => {
    //         console.log('[Cockpit.js] useEffect - cleanup');
    //     };
    // }, []);

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
                onClick={toggleShowPersonsHandler}
                ref={toggleBtnRef}>
                Toggle Persons
            </button>
            <button
                onClick={context.login}>
                Log in
            </button>
        </div>
    );
};

export default Cockpit;