import React, { Component } from 'react';
import './App.css';
import body from "./Components/body/body";
import Header from "./Components/body/Header/Header";
import Container from "./Components/body/Container/Container";
import Footer from "./Components/body/Footer/Footer";

class App extends Component {
  render() {
      return (
      <div className="App">
          <body>
            <Header/>
            <Container/>
            <div className="clear"></div>
            <Footer/>
          </body>
      </div>
    );
  }
}

export default App;

