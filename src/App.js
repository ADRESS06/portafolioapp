import React, { Component } from 'react';
import Marcadeaguatxt from './libreria/Layout/Marcadeaguatxt';
import Header from './libreria/Layout/Header';
import Home from './libreria/Layout/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Marcadeaguatxt conten="Y" conten2="J" color="blue" color2="aqua" tamaño="1.8em" grosor="900" left="5%" top="2%"/>
        <Header/>
        <Home bg="rgb(13, 50, 94)" width="100vw" height="88vh"/>
      </div>
    );
  }
}

export default App;
