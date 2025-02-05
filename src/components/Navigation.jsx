import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './images/the lit nook logo.png'
import './Navigation.css'
import inverted from './images/lit nook logo inverted.png'

const Navigation = () => {
    const [logo, setLogo] = useState(inverted)
    return(
        <nav
            onMouseEnter={() => (setLogo(Logo))}
            onMouseLeave={() => (setLogo(inverted))}>
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