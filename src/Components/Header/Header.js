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
            </div>
        );
    }
}
