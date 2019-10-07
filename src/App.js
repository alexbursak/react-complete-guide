import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: "Bob", age: 25},
            {name: "Mike", age: 50},
            {name: "Monique", age: 21},
        ],
        counter: 0
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 25},
                {name: "Mike", age: 50},
                {name: "Monique", age: 21},
            ]
        });
        console.log("Was clicked")
    };

    render() {
        return (
            <div className="App">
                <h1>Yo</h1>
                {/*{console.log(this.state)}*/}
                <Person
                    click={this.switchNameHandler.bind(this, 'Alex')}
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    click={this.switchNameHandler.bind(this, 'Bob')}
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                />
                <Person
                    // click={this.switchNameHandler}
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
                <p>{this.state.counter}</p>
                {/*<button onClick={this.incCounterHandler}>Switch Names</button>*/}
            </div>
        );
    }
}

export default App;
