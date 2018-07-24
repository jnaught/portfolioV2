import React from "react";
import "./Menu.css";
import menuimage from "../RestaurantAssets/menuimage.jpg";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu-main">
                <div className="menubg">
                    <p>Hello World I am the Menu</p>
                    <div className="main">
                        <div className="menuitems">
                            <p> Surf and Turf</p>
                            <div className="menu-container">
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                            </div>
                            <p>Pasta</p>
                            <div className="menu-container">
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                            </div>
                            <p>Salads</p>
                            <div className="menu-container">
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                                <div className="row col">
                                    <p>menu items here</p>
                                    <img
                                        src={menuimage}
                                        className="menuimgsize"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
