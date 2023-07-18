import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Products from "./Components/Products";
import Create from "./Components/Create";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";

import { myData } from "./Requests/Index";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const [token, setToken] = useState("");

  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
        setToken(window.localStorage.getItem('token'));

    }
}

async function getMyData() {
  const results = await myData(token);
  if (results.success) {
      setUser(results.data);
  }
}

useEffect(() => {
  tokenCheck();
}, [])

useEffect(() => {
  if (token) {
      getMyData();
      setLoggedIn(true);
  }
}, [token])


  return (
    <>
      <BrowserRouter>
        <Header loggedIn={loggedIn} />

        <Routes>
          <Route exact path="/" />
          <Route
            exact
            path="/products"
            element={<Products loggedIn={loggedIn} />}
          />
          <Route exact path="/shoppingcart" />
          <Route exact path="/signup"  element={<Signup setToken={setToken} />}/>
          <Route exact path="/login" element={<Login setToken={setToken} />} />
          <Route exact path="/profile" element={<Profile token={token}  />}/>
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<App />);
