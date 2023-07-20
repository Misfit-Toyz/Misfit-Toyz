//NEEDS A BASE URL
const BASE_URL = "http://localhost:3002/api"

// ---------------Cart requests------------

export const getCartData = async (userId) => {
    try{
        const response = await fetch(
            `${BASE_URL}/cart/${userId}`, {
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
      console.log("DELETE FROM CART STARTING")
        const response = await fetch(
            `${BASE_URL}/cart/${productId}`,{
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
};


// ---------------Products requests------------

export const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
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

// ---------------Users requests------------

  export const registerUser = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                user
        ),
        });
        const result = await response.json();
        console.log("REGISTER RESULT", result)
        return result
    } catch (err) {
        console.log(err);
    }
};

  export const assignCart = async (userId) => {

    try {
        const response = await fetch(`${BASE_URL}/cart/${userId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId
        })
        });
        const result = await response.json();
        console.log("ASSIGN CART RESULT", result)
        return result.cartId
    } catch (err) {
        console.log(err);
    }
}



export const login = async (user) => {
      
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          user,
      )
    });
    const result = await response.json();
    console.log("LOGIN RESULT", result);
    return result
  } catch (err) {
    console.error(err);
  }
};

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