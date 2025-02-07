import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './images/the lit nook logo.png'
import './Navigation.css'
import inverted from './images/lit nook logo inverted.png'
import search_icon from './images/search.png'
import search_invert from './images/search-inverted.png'
import { useSelector } from "react-redux";

const Navigation = () => {
    const [logo, setLogo] = useState(inverted)
    const [search, setSearch] = useState(search_invert)
    const [color, setColor] =useState(true)

    const cart = useSelector((state) => state.cart);

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
            onMouseEnter={() => {if(color){
                setLogo(Logo); setSearch(search_icon)}
                else{ setLogo(Logo); setSearch(search_icon)}
            }}
            onMouseLeave={() => {if(color){
                setLogo(inverted); setSearch(search_invert)
            }else{setLogo(Logo); setSearch(search_icon)}}}
        >
            <a>SHOP</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <span>
                <img src={search} alt="search"/>
                <a>SEARCH</a>
            </span>
            <a>ACCOUNT</a>
            <Link to='/cart'>CART ({cart.numOfItems})</Link>
        </div>
    )
}

export default Navigation;