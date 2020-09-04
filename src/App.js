import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './Char/Char.css';
import Assignment from './Assignment/Assignment';
import './Assignment/Assignment.css';

class App extends Component {
  state = {
    text: '',
    length: 0,
    textArray: [],
  };

  textCountHandler = (event) => {
    const text = event.target.value;
    const length = text.length;
    const textArray = text.split('');
    this.setState({
      text: text,
      length: length,
      textArray: textArray,
    });
  };

  deleteCharHandler = (letterIndex) => {
    const textArray = [...this.state.textArray];
    textArray.splice(letterIndex, 1);
    const text = textArray.join('');
    const length = text.length;
    this.setState({
      text: text,
      length: length,
      textArray: textArray,
    });
  };

  render() {
    const style = {
      margin: '1rem 0 .5rem',
    };

    const lettersWrapper = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: '1.2rem',
    };

    let characters = (
      <div style={lettersWrapper}>
        {this.state.textArray.map((letter, index) => {
          return (
            <Char
              key={index}
              letter={letter}
              click={() => this.deleteCharHandler(index)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <input
              style={style}
              onChange={(event) => this.textCountHandler(event)}
              type="text"
              value={this.state.text}
              placeholder="Enter some text..."
            />
            <Validation length={this.state.length} />
            <p>Character Count: {this.state.length}</p>
            {characters}
            <Assignment />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
