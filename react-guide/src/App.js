import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            { name: 'MEET', age: 25},
            { name: 'AMISHA', age: 23},
            { name: 'RADHA', age: 34}
        ]
    }


    render() {
        return (
            <div className="App">
                <h1>I'm React developer </h1>
                <p>This is really working!</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies : love Krisha </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }


}

export default App;
