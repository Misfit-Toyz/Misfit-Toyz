import React, { useeffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Products from "./Components/Products";
import Create from "./Components/Create";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [token, setToken] = useState("");

  return (
    <>
      <BrowserRouter>
        <Header signedIn={signedIn} />

        <Routes>
          <Route exact path="/" />
          <Route
            exact
            path="/products"
            element={<Products signedIn={signedIn} />}
          />
          <Route exact path="/shoppingcart" />
          <Route exact path="/signup" />
          <Route exact path="/login" />
          <Route exact path="/profile" />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<App />);
