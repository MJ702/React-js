import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
        const [personsState, setPersonState ] = useState({
            persons : [
                { name: 'MEET', age: 25},
                { name: 'Krishna', age: 23},
                { name: 'RADHA', age: 34}
            ]
        })

        const switchNameHandler = () => {
            setPersonState({
                persons : [
                    { name: 'Meetkasodiya', age:25},
                    { name: 'Radha', age: 14},
                    { name: 'Krishna', age: 28}
                ]
            })
        }
        return (
            <div className="App">
                <h1>I'm React developer </h1>
                <p>This is really working!</p>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies : love Krisha </Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
            </div>
        );



}

export default App;
