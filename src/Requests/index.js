//NEEDS A BASE URL
const BASE_URL = "https://misfit-toys-test.onrender.com/api"

export const getCartData = async () => {
    try{
        const response = await fetch(
            `${BASE_URL}/cart`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            console.log("GET CART", result);
            return result
        } catch(err) {
            console.error(err);
        }
};

export const addItem = async (shoppingId, productId, quantity) => {
    try{
        console.log("API REQUEST", shoppingId, productId, quantity)
        const response = await fetch(`${BASE_URL}/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    shoppingId,
                    productId,
                    quantity
                )
            });
            const result = await response.json();
            console.log("ADD ITEM", result);
            return result
    } catch(err) {
        console.error(err);
    }
};

export const deleteFromCart = async (productId) => {
    try{
        const response = await fetch(
            `${BASE_URL}/shoppingCart/${productId}`,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const result = await response.json();
            console.log("DELETE FROM CART", result);
            return result 
    } catch (err) {
        console.error(err);
    }
}