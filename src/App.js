import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Shelfie
          </p>
          <div className="buttonsDiv">
          <Button />
          <Button />
          </div>
          <img className="App-logo" src="iconmonstr-eyedropper-12-240.png"></img>
        </header>
      </div>
    );
  }
}

export default App;
