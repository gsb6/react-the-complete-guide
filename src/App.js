import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
  padding: 8px;
  background-color: ${props => props.alt ? 'red' : 'green'};
  border: 1px solid blue;
  color: white;
  font: inherit;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Gabriel', age: 24 },
      { id: 'def', name: 'Guilherme', age: 21 },
      { id: 'fsdd', name: 'Marcelo', age: 32 },
    ],
    otherState: 'Some other value',
    showPersons: true,
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
  
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <ErrorBoundary key={person.id}>
              <Person
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
              />
            </ErrorBoundary>
          ))}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
