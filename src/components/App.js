import React, { Component } from 'react';
import './App.css';
import Headers from './Section1/Headers/Header';
import Mode from './Section2/Mode/Mode';

class App extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Mode/>
      </div>
    );
  }
}

export default App;
