import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer'

import About from './components/about/About';
import Team from './components/team/Team';
import Staff from './components/staff/Staff';
import News from './components/news/News';
import Results from './components/results/Results';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import SinglePost from './components/singlePost/SinglePost'

class App extends Component {
  render() {
      console.log(this.props)
    return (
      <>
      <Header />
        <main>
            <Switch>
                <Route path="/post/:postId" component={SinglePost} />
                <Route path="/kontakt" component={Contact} />
                <Route path="/galerija" component={Gallery} />
                <Route path="/rezultati" component={Results} />
                <Route path="/vesti" component={News} />
                <Route path="/strucni-stab" component={Staff} />
                <Route path="/tim" component={Team} />
				<Route path="/o-klubu" component={About} />
				<Route path="/" component={Home} />
			</Switch>
        </main>
      <Footer />
      </>
    )
  }
}

export default App;
