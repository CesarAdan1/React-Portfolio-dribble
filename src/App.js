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

/*const shapes ={
  background: '',
};
const shapesli ={
};
const shapesul ={
};
const a = {
},*/

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <nav className='filters'>
          <ul>
            <li>
              <a href='#'>All <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Popular <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Recent <i className='fa fa-chevron-down' /></a>
            </li>
            <li>
              <a href='#'>Debut <i className='fa fa-chevron-down' /></a>
            </li>
          </ul>
        </nav>
        <Shots />
        <p style={ styles }>Writen by { name }. { year } .</p>
      </div>
    );
  }
}

export default App;
