import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import { Cart, Header, Products, Home, Signup, Login, Profile } from "./index";
import { myData } from "../Requests";

const App = () => {

        const [LoggedIn, setLoggedIn] = useState(false);
       
        const [token, setToken] = useState('');

        const navigate = useNavigate();

        function tokenCheck() {
            if (window.localStorage.getItem('token')) {
                setToken(window.localStorage.getItem('token'));
            }
        }
    
    
    
    
        async function getMyData() {
            const results = await myData(token);
            if (!results) {
                console.log("NO RESULT FROM GET DATA")
            } else {
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
    <Header
        setToken={setToken} 
        setIsLoggedIn={setLoggedIn} 
        isLoggedIn={LoggedIn} />
    <Routes>
        <Route 
        path="/"
        element={<Home/>}
        />
        <Route 
        path="/products"
        element={<Products/>}
        />
        <Route 
        path="/shoppingcart"
        element={<Cart/>}
        />
        <Route
        path='/signup'
        element={<Signup setToken={setToken} navigate={navigate} />} 
        />
        <Route
        path='/login'
        element={<Login setToken={setToken} navigate={navigate}/>} 
        />
        <Route
        path='/profile'
        element={<Profile token={token}  />}
        />
    </Routes>
    </>
)

}

export default App;