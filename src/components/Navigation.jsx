import React from "react";
import { Link } from "react-router-dom";
import logo from './images/the lit nook logo.png'
import './Navigation.css'

const Navigation = () => {
    return(
        <nav>
            <a>SHOP</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
            <a><img src={logo} /></a>
            <a>SEARCH</a>
            <a>ACCOUNT</a>
            <a>CART</a>
        </nav>
    )
}

export default Navigation;