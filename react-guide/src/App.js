import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            { name: 'MEET', age: 25},
            { name: 'Krishna', age: 23},
            { name: 'RADHA', age: 34}
        ]
    }

    switchNameHandler = () => {
        this.setState({
            persons : [
                { name: 'Meetkasodiya', age:25},
                { name: 'Radha', age: 14},
                { name: 'Krishna', age: 28}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>I'm React developer </h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies : love Krisha </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }


}

export default App;
