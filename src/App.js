import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Restaurant from "./Components/Restaurant/RestaurantComponents/Restaurant/Restaurant";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header-fixed">
                    <Header />
                </div>
                <div className="siteroutes">
                    <Restaurant />
                </div>
            </div>
        );
    }
}

export default App;
