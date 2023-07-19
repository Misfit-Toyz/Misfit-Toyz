import React, { useEffect, useState } from 'react';

import { fetchProducts, updateProduct, deleteProduct, addItem, createProduct } from "../Requests/index";
const Products = ({ LoggedIn }) => {
  const [products, setProducts] = useState([]);
  const [editProductTitle, setEditProductTitle] = useState("");
  const [editProductPrice, setEditProductPrice] = useState("");
  const [editProductDescription, setEditProductDescription] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.error("error fetching products", error);
      }
    };
    getProducts();
  }, []);

  const add = async (shoppingId, productId, quantity) => {
    const results = await addItem(shoppingId, productId, quantity);
    console.log("ADD RESULT", results);
  };

  async function handleSubmit(event){
    event.preventDefault();
    alert("Item Added");
      add(1, 2, 1);
      //delete everything from the cart using an api from Requests
    }
  
  return (
    <>

        <h1 className="pagetitle">Toys</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="addtocart" onClick={handleSubmit}>Add to Cart</button>
          </div>
      ))}
      </div>
     </>
  );
};

export default Products;