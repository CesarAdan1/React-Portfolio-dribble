import React, { Component } from 'react';

import Header from './components/Header';
import Shots from './components/Shots';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Shots />
      </div>
    );
  }
}

export default App;
