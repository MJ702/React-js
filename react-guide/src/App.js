import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = ({
        persons: [
            {name: 'MEET', age: 25},
            {name: 'Krishna', age: 23},
            {name: 'RADHA', age: 34}
        ]
    })

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 25},
                {name: 'Radha', age: 14},
                {name: 'Krishna', age: 28}
            ]
        })
    }

    nameChangedHandler = (el) => {
        this.setState({
            persons: [
                {name: 'MeetKasodiya', age: 25},
                {name: el.target.value , age: 14},
                {name: 'Krishna', age: 28}
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>I'm React developer </h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Meetkasodiya!!!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'stupid')}
                        changed={this.nameChangedHandler}
                > My hobbies : love Krisha </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }


}

export default App;
