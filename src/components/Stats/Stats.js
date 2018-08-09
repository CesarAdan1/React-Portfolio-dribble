import React, { Component } from 'react';
/*import './Stats.css';


class Stats extends Component {
  constructor(){//inicializar estado
    super(); //Apuntar a COmponent, para que no marque error this
    //Parecido a crear una variable, siempre debe ser un objeto
    this.state = {
      likes: 0
    };
  }
  //llamada del state
  //<li><i className='fa fa-heart' />{ this.state.likes }</li> 
  //addeventlister(calback)
  // a href="#" onClick={}

  //declara la funcion y manipular el estado(this function)solo con estados

  //Mostrar a traves del estado
  incremenLikes = (e) => { //Definicion del callback
    e.preventDefault();//no aparecera el '#' en la URL al presionar likes.
    //console.log(parseInt(this.state.likes) +1)
    this.setState({//objeto                    
      likes: parseInt(this.state.likes)+1

    })

  }
  render() {

    return (
      <div className='shots__stats'>
        <ul className='shots__list'>
          <li><i className='fa fa-eye' />{ this.props.v }</li>
          <li><i className='fa fa-comment' />{ this.props.c }</li>
          <li>< a href="#" onClick={this.incrementLikes}><i className='fa fa-heart' />{ this.state.likes }</a></li> 
        </ul>
      </div>
    );
  }
}
export default Stats;*/

import './Stats.css';

class Stats extends Component {
  constructor(props) {
    super();
    this.state = {
      likes: props.l,
      liked: false

    };
  }

  incrementLikes = (e) => {
    e.preventDefault();
    if(this.state.liked === false){
      this.setState({ //Objeto
        likes: parseInt(this.state.likes)+1,
        liked: true
      })
    }else {
      this.setState({//objeto, no se puede imprimir
        likes: parseInt(this.state.likes)-1,
        liked: false
      })
    }
    //this.setState({
      //likes: parseInt(this.state.likes) + 1)};
  }
  //<li><a className= {(this.state.liked === true)? 'Liked':''} 
  //llamar para mostrar la condicion de forma automatica y solo se pinte un like y mostrar el css
  render() {
    //JSX(Maquetado). Despues del return
    return (
      <div className='shots__stats'>
        <ul className='shots__list'>
          <li><i className='fa fa-eye' />{ this.props.v }</li>
          <li><i className='fa fa-comment' />{ this.props.c }</li>
          <li><i className='fa fa-heart' />{ this.props.l }</li>
          <li><a className= {(this.state.liked === true)? 'Liked':''} href='#' onClick={ this.incrementLikes } ><i className='fa fa-heart' />{ this.state.likes }</a></li>
      
        </ul>
      </div>
    );
  }
}

export default Stats;
