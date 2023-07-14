
import {Routes, Route} from "react-router-dom"

const App = () => {

return (
    <>
    
    <Routes>
        <Route 
        path="/"
        />
        <Route 
        path="/products"
        />
        <Route 
        path="/shoppingcart"
        element={<ShoppingCart/>}
        />
        <Route 
        path="signup"
        />
        <Route 
        path="login"
        />
        <Route
         path="profile"
         />
    </Routes>
    </>
)

}

export default App;