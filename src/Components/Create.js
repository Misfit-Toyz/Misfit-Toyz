import React from "react";
import { useState, useEffect } from "react";
import { createProduct } from "../Requests/Products";

import { useNavigate } from "react-router-dom";

const Create = ({}) => {
  let nav = useNavigate("");

  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");

  const handleCreate = (event) => {
    event.preventDefault();
    try {
      const newProduct = {
        title: newProductTitle,
        price: newProductPrice,
        description: newProductDescription,
      };
      createProduct(newProduct);
      nav("/products");
    } catch (error) {
      console.error("Error Creating Product", error);
    }
  };

  return (
    <>
      <div className="create">
        <h1 className="title">Build a Toy</h1>
        <form onSubmit={handleCreate} className="createForm">
          <input
            placeholder="New Product Title"
            type="text"
            value={newProductTitle}
            onChange={(event) => setNewProductTitle(event.target.value)}
            className="createInput"
          ></input>
          <input
            placeholder="New Product Price"
            type="text"
            value={newProductPrice}
            onChange={(event) => setNewProductPrice(event.target.value)}
            className="createInput"
          ></input>
          <input
            placeholder="New Product Description"
            type="text"
            value={newProductDescription}
            onChange={(event) => setNewProductDescription(event.target.value)}
            className="createInput"
          ></input>
          <button type="submit" className="createButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
