import React from "react";
import { useState, useEffect } from "react";


import { fetchProducts, updateProduct, deleteProduct, addItem } from "../Requests/Index";

const Products = ({ signedIn }) => {
  const [products, setProducts] = useState([]);
  const [editProductTitle, setEditProductTitle] = useState("");
  const [editProductPrice, setEditProductPrice] = useState("");
  const [editProductDescription, setEditProductDescription] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result);
      } catch (error) {
        console.error("error fetching products", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <h1 className="title">Toyz</h1>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={addItem(product.id, 1)}>Add to Cart</button>
            {signedIn ? (
              <>
                <button
                  onClick={
                    <form
                      onSubmit={updateProduct(
                        product.id,
                        editProductTitle,
                        editProductPrice,
                        editProductDescription
                      )}
                    >
                      <input
                        placeholder="Edit Title"
                        value={editProductTitle}
                        onChange={(event) => setEditProductTitle}
                      ></input>
                      <input
                        placeholder="Edit Price"
                        value={editProductPrice}
                        onChange={(event) => setEditProductPrice}
                      ></input>
                      <input
                        placeholder="Edit Description"
                        value={editProductDescription}
                        onChange={(event) => setEditProductDescription}
                      ></input>
                    </form>
                  }
                >
                  Edit
                </button>
                <button onClick={deleteProduct(product.id)}>Delete</button>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>

    // test data
    // <>
    //   <h1 className="pagetitle">Toyz</h1>
    //   <div className="products">
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //     <div className="product">
    //       <h3>Test title</h3>
    //       <p>test description</p>
    //       <p>$$$</p>
    //       <p className="addtocart">Add to Cart</p>
    //     </div>
    //   </div>
    // </>
  );
};

export default Products;
