import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
      return (
      <div className="App">
          <Header/>
          {/*<Container/>*/}
          {/*<Footer/>*/}
      </div>
    );
  }
}

export default App;

