import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
      console.log('test 1212121');
      return (
      <div className="App">
          <Header/>
          <Container/>
          <Footer/>
      </div>
    );
  }
}

export default App;
