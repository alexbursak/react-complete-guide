import React from 'react';

const Person = () => {
    return (
        <div>
            <p>I am a Person and I am a {Math.floor(Math.random() * 100)} years old.</p>
        </div>
    );
};

export default Person;