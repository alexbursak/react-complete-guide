import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I am a {props.name} and I am a {props.age} years old.</p>
            <p>{props.children}</p>
            <button onClick={props.click}>Change</button>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </div>
    );
};

export default Person;