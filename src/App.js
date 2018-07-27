import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import routes from "../src/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-fixed">
          <Header />
        </div>
        <div className="routes"> {routes} </div>
      </div>
    );
  }
}

export default App;
