import React, { useEffect, useState } from 'react';
import { getCartData, deleteFromCart, addItem } from "../Requests";

//display items in cart and quantity
//show a total price
//have a remove from cart button
//have a checkout button

//-----------requires api functions and requests that work-------------
//query for shopping cart table
//query on cart items that match the shopping cart id
    //inner join products table where the item id matches the product id
    //map over query to display the products, and the cartItems
    
    const Cart = () => {
        
        const [cart, setCart] = useState([]);
        
    const getCart = async () => {
        const results = await getCartData(1);
        //^make this dynamic
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
    }, []);

    async function handleSubmit(ev){
        ev.preventDefault();
        alert("Thank you for your patronage");
    }

    return (
            <>
               <h1 className="pagetitle">Cart</h1>
               <div className="cartItems">
                {cart.map((cartItem) => (
                    <div key={cartItem.id} className="cartItem">
                    <div className="itemTitle">
                        <h3>{cartItem.title}</h3>
                    </div>
                    <div className="itemDescription">
                        <h3>{cartItem.description}</h3>
                    </div>
                   <div className="itemPrice">
                        <h3>${cartItem.price}</h3>
                   <button className="remove" onClick={()=>deleteFromCart(1)}>Remove From Cart</button>
                   </div>
                    </div>
                     ))}
        <form onSubmit={handleSubmit}>
            <button className="checkout" type='submit'>Checkout</button>
        </form>
               </div>
             </>
);
}

export default Cart;