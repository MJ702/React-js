import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};    
    color: white
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }

`;

class App extends Component {
    state = ({
        persons: [
            {id: '01', name: 'MEET', age: 25},
            {id: '02', name: 'Krishna', age: 23},
            {id: '03', name: 'RADHA', age: 34}
        ],
        showPerson: false
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

    deletePersonHandler = (personIndex) => {
        const person = [...this.state.persons]
        person.splice(personIndex, 1)
        this.setState({persons: person});
    }
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {...this.state.persons[personIndex]}

        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons: persons})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson
        this.setState({showPerson: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ":hover": {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let person = null
        if (this.state.showPerson) {
            person = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            )
            // style.backgroundColor = 'red';
            //
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            //
            // }

        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }

        return (

            <div className="App">
                <h1>I'm React developer </h1>
                <p className={classes.join(" ")}>This is really working!</p>
                <StyledButton
                    alt = {this.state.showPerson}
                    onClick={this.togglePersonHandler}>Switch Name
                </StyledButton>
                {person}
            </div>

        );
    }


}

export default App;
