import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Gabriel', age: 24 },
      { name: 'Guilherme', age: 21 },
      { name: 'Marcelo', age: 32 },
    ],
    otherState: 'Some other value',
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'João', age: 24 },
        { name: 'Guilherme', age: 22 },
        { name: 'Marcelo', age: 32 },
      ],
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'João', age: 24 },
        { name: event.target.value, age: 22 },
        { name: 'Marcelo', age: 32 },
      ],
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}
        >
            My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
