import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './Char/Char.css';

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
      text: event.target.value,
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
            <p>Characer Count: {this.state.length}</p>
            {characters}
            <div className="assignmentDetails">
              <code>
                <ol>
                  <li>
                    Create an input field (in App component) with a change
                    listener which outputs the length of the entered text below
                    it (e.g. in a paragraph).
                  </li>
                  <li>
                    Create a new component (=> ValidationComponent) which
                    receives the text length as a prop
                  </li>
                  <li>
                    Inside the ValidationComponent, either output "Text too
                    short" or "Text long enough" depending on the text length
                    (e.g. take 5 as a minimum length)
                  </li>
                  <li>
                    Create another component (=> CharComponent) and style it as
                    an inline box (=> display: inline-block, padding: 16px,
                    text-align: center, margin: 16px, border: 1px solid black).
                  </li>
                  <li>
                    Render a list of CharComponents where each CharComponent
                    receives a different letter of the entered text (in the
                    initial input field) as a prop.
                  </li>
                  <li>
                    When you click a CharComponent, it should be removed from
                    the entered text.
                  </li>
                </ol>
              </code>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
