import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';


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
        let btnClass = ''
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
            btnClass = classes.Red

        }

        const assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold)
        }

        return (

            <div className={classes.App}>
                <h1>I'm React developer </h1>
                <p className={assignedClasses.join(" ")}>This is really working!</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonHandler}>Switch Name
                </button>
                {person}
            </div>

        );
    }


}

export default App;
