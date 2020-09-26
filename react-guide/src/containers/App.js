import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from  '../components/Cockpit/Cockpit';


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
        let person = null
        if (this.state.showPerson) {
            person = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked = {this.deletePersonHandler}
                        changed = {this.nameChangedHandler}
                    />
                </div>
            )

        }



        return (

            <div className={classes.App}>
                <Cockpit
                    showPerson = {this.state.showPerson}
                    persons = {this.state.persons}
                    clicked = {this.togglePersonHandler}
                />
                {person}
            </div>

        );
    }


}

export default App;
