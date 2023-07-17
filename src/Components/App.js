import {Routes, Route} from "react-router-dom";
import { Cart, Header } from "./index";

const App = () => {

return (
    <>
    <Header/>
    <Routes>
        {/* <Route 
        path="/"
        />
        <Route 
        path="/products"
        /> */}
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