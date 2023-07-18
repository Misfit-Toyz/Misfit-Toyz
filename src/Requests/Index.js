

const BASE_URL = "https://misfit-toys-test.onrender.com/api"

// Shopping Cart 

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
                body: JSON.stringify({
                    shoppingId,
                    productId,
                    quantity
                })
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

// Products 

export const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error, "Error @ fetchProducts");
    }
  };
  
  export const createProduct = async (newProduct) => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newProduct.title,
          price: newProduct.price,
          description: newProduct.description,
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error, "Error @ createProduct");
    }
  };
  
  export const updateProduct = async (
    productId,
    editProductTitle,
    editProductPrice,
    editProductDescription
  ) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editProductTitle,
          price: editProductPrice,
          description: editProductDescription,
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error, "Error @ updateProduct");
    }
  };
  
  export const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error, "Error @ deleteProduct");
    }
  };

  // Users

  export const registerUser = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user

        }),
        });
        const result = await response.json();

        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }
}

export const login = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user,
        })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}
export const myData = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const results = await response.json();
        return results;

    } catch (error) {
        console.log(error)
    }
}