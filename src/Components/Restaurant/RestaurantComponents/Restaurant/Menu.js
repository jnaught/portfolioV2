import React from "react";
import "./Menu.css";
import menuimage from "../RestaurantAssets/menuimage.jpg";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu-main">
                <div className="menubg">
                    <p>Menu</p>
                    <div className="main">
                        <div className="menuitems">
                            <p> Surf and Turf</p>
                            <div className="menu-container">
                                <div className="row col">
                                    <p>item name</p>
                                    <div className="menuinfo">
                                        <div className="items">
                                            <div>
                                                <img
                                                    src={menuimage}
                                                    className="menuimgsize"
                                                />
                                            </div>
                                            <div className="description">
                                                <p> item description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                            </div>
                            <p>Pasta</p>
                            <div className="menu-container">
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                            </div>
                            <p>Salads</p>
                            <div className="menu-container">
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                                <div className="row col">
                                    <p>item name</p>
                                    <div>
                                        <img
                                            src={menuimage}
                                            className="menuimgsize"
                                        />
                                    </div>
                                    <div className="description">
                                        <p> item description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
