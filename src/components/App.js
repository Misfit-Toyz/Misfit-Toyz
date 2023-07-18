import React, { useEffect, useState } from "react"
import Login from './login'
import Signup from "./signup";
import Profile from "./profile"
import { myData } from '../ajax-requests'
import {  Routes, Route } from 'react-router-dom';



// import Header from "./Header"

export const App = () => {

    const [LoggedIn, setLoggedIn] = useState(false);
   
    const [token, setToken] = useState('');


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
            
                {/* <Header signedIn={signedIn} /> */}
                <Routes>

                   
                    <Route
                        path='/signup'
                    element={<Signup setToken={setToken} />} 
                    />
                    <Route
                        path='/login'
                    element={<Login setToken={setToken} />} 
                    />
                <Route
                    path='/profile'
                    element={<Profile token={token}  />}
                />
                    {/* <Route
                        path='/shopping-cart'
                        
                    />
                  
                    <Route
                        path='/profile'
                        element={<Home />}
                    />
                    <Route
                        path='/'
                        element={<Message />}
                    />
                    <Route
                        path='/products'
                    /> */}
                </Routes>
            
        </>
    )

}

export default App;