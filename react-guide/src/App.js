import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    return (
        <div className="App">
            <h1>I'm React developer </h1>
            <p>This is really working!</p>
            <Person name={'Meet'} age={26}/>
            <Person name={'Radha'} age={29}> My hobbies : love Krisha </Person>
            <Person name={'Mit'} age={19}/>

        </div>
    );
}

export default App;
