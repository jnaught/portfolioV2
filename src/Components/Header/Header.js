import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <header className="Portfolio-header">
          <h1 className="App-title">AaronNacua.com</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <li>Re-usable Components</li>
            <Link to="restaurant"> Restaurant App</Link>
          </nav>
        </header>
      </div>
    );
  }
}
