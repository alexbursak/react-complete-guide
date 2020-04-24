import React from 'react';
import classes from './Person.css';
import Aux from "../../../hoc/Aux";

const Person = (props) => {
    const spanStyle = {
        cursor: 'pointer',
        marginLeft: '15px',
        fontWeight: 'bold'
    };

    return (
        // <div className={classes.Person} >
        <Aux>
            <p>I am a {props.name} and I am a {props.age} years old.
                <span style={spanStyle} onClick={props.clickDeleteHandler}>X</span>
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </Aux>
        // </div>
    );
};

export default Person;