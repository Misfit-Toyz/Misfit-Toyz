import React, {useeffect, useState} from "react"

import {BrowserRouter, Routes, Route} from "reaact-router-dom"

import Header from "./Header"

const App = () => {

const [signedIn, setSignedIn] = useState(false)
const [token, setToken] = useState("")



return (
    <>
    <BrowserRouter>
        <Header signedIn={signedIn}/>
    
    <Routes>
    <Route exact path="/"/>
    <Route exact path="/products"/>
    <Route exact path="/shoppingcart"/>
    <Route exact path="signup"/>
    <Route exact path="login"/>
    <Route exact path="profile"/>
    </Routes>
    </BrowserRouter>
    </>
)

}