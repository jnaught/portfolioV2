import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <header className="Portfolio-header">
          <h1 className="App-title">AaronNacua.com</h1>
          <nav className="nav">
            <li>Home</li>
            <li>Re-usable Components</li>
            <li> Restaurant App</li>
          </nav>
        </header>
      </div>
    );
  }
}
