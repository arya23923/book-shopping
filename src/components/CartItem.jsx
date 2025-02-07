import React from "react";
import Navigation from "./Navigation";
import libimage from './images/library-21.jpg'

const CartItem = () => {
    return(
        <div className="cart-items">
            <Navigation />
            <img src={libimage} />
            <h1>Shopping Cart</h1>
            
        </div>
    )
}

export default CartItem;