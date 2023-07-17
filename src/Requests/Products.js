const BASE_URL = "";

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
