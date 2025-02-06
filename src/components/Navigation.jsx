import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Logo from './images/the lit nook logo.png'
import './Navigation.css'
import inverted from './images/lit nook logo inverted.png'
import search_icon from './images/search.png'
import search_invert from './images/search-inverted.png'

const Navigation = () => {
    const [logo, setLogo] = useState(inverted)
    const [search, setSearch] = useState(search_invert)
    const [color, setColor] =useState(true)

    const changeNavigation = () => {
        if (window.scrollY >= 200){
            setColor(false)
            setLogo(Logo)
            setSearch(search_icon)
        }
        else{
            setColor(true)
            setLogo(inverted)
            setSearch(search_invert)
        }
    }

    window.addEventListener('scroll', changeNavigation)

    return(
        <div className={color? 'nav' : 'inverted'}
            onMouseEnter={() => {setLogo(Logo); setSearch(search_icon)}}
            onMouseLeave={() => {setLogo(inverted); setSearch(search_invert)}}
        >
            <a>SHOP</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
            <a><img src={logo} /></a>
            <span>
                <img src={search} />
                <a>SEARCH</a>
            </span>
            <a>ACCOUNT</a>
            <a>CART ()</a>
        </div>
    )
}

export default Navigation;