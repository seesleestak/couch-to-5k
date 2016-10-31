import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <Button />
      </div>
    );
  }
}

export default App;
