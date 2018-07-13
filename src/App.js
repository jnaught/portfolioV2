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
                    <nav className="nav">
                        <li>Home</li>
                        <li>Auto Sales</li>
                        <li>Business</li>
                        <li>Ecommerce</li>
                        <li>Fitness</li>
                        <li>Gaming</li>
                        <li>Photography</li>
                        <li>RealEstate</li>
                        <li>ReminderApp</li>
                        <li>Restaurant</li>
                        <li>SocialMedia</li>
                        <li>Technology</li>
                        <li>TodoApp</li>
                        <li>Travel</li>
                    </nav>
                </header>
                <Restaurant />
            </div>
        );
    }
}

export default App;
