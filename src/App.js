import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Components/Restaurant/Restaurant";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AaronNacua.com</h1>
        </header>
        <p className="App-intro">Work Portfolio</p>
        <Restaurant />
      </div>
    );
  }
}

export default App;
