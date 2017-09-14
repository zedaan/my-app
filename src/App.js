import React, { Component } from 'react';

import Header from './pages/Header.js';
import About from './pages/About.js';
import Footer from './pages/Footer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
