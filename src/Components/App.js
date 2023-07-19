import {Routes, Route} from "react-router-dom";
import { Cart, Header, Products, Home } from "./index";

const App = () => {

return (
    <>
    <Header/>
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
        {/* <Route 
        path="signup"
        />
        <Route 
        path="login"
        />
        <Route
         path="profile"
         /> */}
    </Routes>
    </>
)

}

export default App;