import React, { Component } from 'react';
import './App.css';
import Marcadeaguatxt from './Components/Marcadeaguatxt';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Marcadeaguatxt conten="Y" conten2="J" color="blue" color2="aqua" tamaño="1.8em" grosor="900" left="5%" top="2%"/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
