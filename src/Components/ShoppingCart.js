//display items in cart and quantity
//show a total price
//have a remove from cart button
//have a checkout button

//-----------requires api functions and requests that work-------------

function cart() {
    async function handleSubmit(event){
        event.preventDefault();
        alert("Thank you for your patronage");
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