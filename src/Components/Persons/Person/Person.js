import React from 'react';
import classes from './Person.css';
import WithClassAux from "../../../hoc/WithClassAux";
import PropTypes from 'prop-types';

const Person = (props) => {
    const spanStyle = {
        cursor: 'pointer',
        marginLeft: '15px',
        fontWeight: 'bold'
    };

    return (
        <WithClassAux classes={classes.Person} >
            <p>I am a {props.name} and I am a {props.age} years old.
                <span style={spanStyle} onClick={props.clickDeleteHandler}>X</span>
            </p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.nameChangedHandler}
                value={props.name}
            />
        </WithClassAux>
    );
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;