import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/common/header/Header';
import Slider from './components/slider/Slider';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer'

class App extends Component {
  render() {
    return (
      <>
      <Slider/>
      <Header />
      <Home />
      <Footer />
      </>
    )
  }
}

export default App;
