import React, { Component } from 'react';

import Header from './components/Header';
import Shots from './components/Shots';

import './App.css';
import {name, year} from './data/author';


//Agregar estilos desde la API e JS

const styles = {
//elemento jsx(React) propiedades style={}en JS}p style={ styles }
  textAlign: 'center',
  margin: '35px 0',
  fontSize: '13px',
  color: '#AAA',
  background: 'gray'
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Shots />
      <p style={ styles }>Written by {name}. {year}.</p>
      </div>
    );
  }
}

export default App;
