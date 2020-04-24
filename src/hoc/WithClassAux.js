import React from 'react';

const WithClassAux = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default WithClassAux;