import React, { Component } from "react";
import "./Restaurant.css";
import { Link } from "react-router-dom";
import restaurantRoutes from "./restaurantRoutes";

export default class Restaurant extends Component {
    render() {
        return (
            <div className="restaurant-main">
                <div className="bg">
                    <header className="restaurant-header">
                        <nav className="restaurant-nav">
                            <li className="list">
                                <a href="#">HOME</a>
                            </li>
                            <li className="list">
                                <a href="#">RESTAURANT</a>
                            </li>
                            <li className="list">
                                <Link to="/Menu" className="menu">
                                    MENU
                                </Link>
                            </li>
                            <li className="list">
                                <a href="#">TEAM</a>
                            </li>
                        </nav>
                    </header>
                    <div className="title">
                        <p>Tay Stee's</p>
                        <div className="restaurant-subtitle">
                            Gourmet Restaurant
                        </div>
                        <div>{restaurantRoutes}</div>
                    </div>
                </div>
            </div>
        );
    }
}
