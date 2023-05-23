import React, { Component } from 'react';
import './libreria/css/estilos.css'
import Marcadeaguatxt from './libreria/Layout/Marcadeaguatxt';
import Header from './libreria/Layout/Header';
import Home from './libreria/Layout/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Marcadeaguatxt conten="Y" conten2="J" color="blue" color2="aqua" tamaño="1.8em" grosor="900" left="5%" top="2%"/>
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
