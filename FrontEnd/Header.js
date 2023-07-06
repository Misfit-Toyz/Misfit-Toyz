import { Link } from "react-router-dom"



const Header = ({signedIn}) => {

    return (
        <>
        <div>
            <h1>Misfit Toys</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Toys</Link>
    
                {!signedIn ? (
                    <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                    </>
                ) : (
                    <Link to="/logout">Log Out</Link>
                )}
                <Link to="/shoppingcart">Cart</Link>
            </nav>
        </div>
        </>
    )
}

export default Header;