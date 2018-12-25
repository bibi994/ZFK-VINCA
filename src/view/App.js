import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/common/header/Header'
import Slider from './components/slider/Slider';
class App extends Component {
  render() {
    return (
      <>
      <Slider/>
      <Header />
      </>
    )
  }
}

export default App;
