import React from "react";
import "./Header.css";
import logo from '../../assets/images/logo2.svg';
const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>
                Post Box
            </h1>

        </header>
    );
};
export default Header;