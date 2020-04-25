import React, { Component } from 'react';
import classes from './Person.css';
import WithClassAux from "../../../hoc/WithClassAux";
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus()
    }

    render() {
        const spanStyle = {
            cursor: 'pointer',
            marginLeft: '15px',
            fontWeight: 'bold'
        };

        return (
            <WithClassAux classes={classes.Person} >
                <p>I am a {this.props.name} and I am a {this.props.age} years old.
                    <span style={spanStyle} onClick={this.props.clickDeleteHandler}>X</span>
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.nameChangedHandler}
                    value={this.props.name}
                />
            </WithClassAux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;