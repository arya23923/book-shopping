import React from "react";
import Navigation from "./Navigation";
import libimage from './images/library-21.jpg'
import './CartItem.css'
import { useSelector, useDispatch } from "react-redux";

import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const IncreaseQuantity = (item) => {
        const updated = {...item};
        updated.quantity++;
        dispatch(updateQuantity(updated));
    }

    const DecreaseQuantity =(item) => {
        const updatedItem = {...item}
        if(updatedItem.quantity == 1){
            dispatch(removeItem(updatedItem));
        }
        else{
            updatedItem.quantity--;
            dispatch(updateQuantity(updatedItem));
        }
    }

    const RemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    const Subtotal = (item) => {
        if(item.quantity >= 1){
            return parseInt(item.cost.replace('$', ''), 10) * item.quantity
        }
        return 0;
    }
    return(
        <div className="cart-items">
            <Navigation />
            <img src={libimage} />
            <h1>Shopping Cart</h1>
            <div className="left">
                {cart.items.map((item, itemID) => (
                    <div className="book-cart" key={itemID}>
                        <div className="left-book">
                            <img src={item.image} />
                        </div>
                        <div className="right-book">
                            <p>{item.name}</p>
                            <p>{item.cost}</p>
                            <div className="increment-decrement">
                                <button onClick={() => IncreaseQuantity(item)}>+</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => DecreaseQuantity(item)}>-</button>
                            </div>
                            <button className="remove" onClick={() => RemoveItem(item)}>Remove</button>
                        </div>
                        <p>Subtotal : {Subtotal(item)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartItem;