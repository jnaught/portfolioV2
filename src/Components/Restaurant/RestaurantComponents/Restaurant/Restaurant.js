import React, { Component } from "react";
import "./Restaurant.css";
import Button from "../../../ReusableAssets/Button";
import { Link } from "react-router-dom";
import restaurantRoutes from "./restaurantRoutes";
import SiteTitle from "../../../ReusableAssets/SiteTitle";

export default class Restaurant extends Component {
  render() {
    const btn = "Button Name";
    const title = {
      name: "Tay Stee'z",
      style: {
        color: "white",
        fontSize: 100
      }
    };
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
                <Link to="/restaurant/Menu" className="menu">
                  MENU
                </Link>
              </li>
              <li className="list">
                <a href="#">TEAM</a>
              </li>
            </nav>
          </header>

          <div className="restaurant-logo">
            <div className="title">
              <SiteTitle props={title} />
              <div className="restaurant-subtitle">Gourmet Restaurant</div>
              <div>{restaurantRoutes}</div>
              <Button props={btn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
