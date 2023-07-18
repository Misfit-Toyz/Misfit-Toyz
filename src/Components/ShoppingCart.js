import React, { useEffect, useState } from 'react';
import { getCartData, deleteFromCart, addItem } from "../Requests";

//display items in cart and quantity
//show a total price
//have a remove from cart button
//have a checkout button

//-----------requires api functions and requests that work-------------

const Cart = () => {

    const [cart, setCart] = useState([]);

    const getCart = async () => {
        const results = await getCartData();
        console.log("CART RESULT", results);
        setCart(results)
    }

    const add = async (shoppingId, productId, quantity) => {
        getCart();
        const results = await addItem(shoppingId, productId, quantity);
        console.log("ADD RESULT", results);
    };

    useEffect(() => {
        getCart();
        add();
    }, []);

    async function handleSubmit(event){
        event.preventDefault();
        alert("Thank you for your patronage");
        add(1, 1, 1);
        //delete everything from the cart using an api from Requests
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <button type='submit'>Checkout</button>
        </form>
    )

    //put a button on each item that removes only it from the shopping cart

    //have a display that adds the total price of the items

    //display the items in the cart on this page
}

export default Cart;