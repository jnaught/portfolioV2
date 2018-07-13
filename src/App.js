import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Components/Restaurant/RestaurantComponents/Restaurant";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="Portfolio-header">
                    <h1 className="App-title">AaronNacua.com</h1>
                    <nav>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </nav>
                </header>
                <Restaurant />
            </div>
        );
    }
}

export default App;
