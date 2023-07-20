import { Link } from "react-router-dom"

const Header = ({setIsLoggedIn, isLoggedIn, setToken}) => {

    function logout() {
        setToken('');
        setIsLoggedIn(false);
        window.localStorage.removeItem('token');
        alert('You have been logged out');
    }

    return (
        <>
        <div>
            <h1 style={{padding: "1px 40px", fontSize: "40px", color: "white", alignItems: "center"}}>Misfit Toys</h1>

            <nav style={{alignItems: "center"}}>
            <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}}><Link to="/">Home</Link></button>
            <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}}><Link to="/products">Toys</Link></button>
                
                
    
                {!isLoggedIn ? (
                    <>
                    
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}}><Link to="/signup">Sign Up</Link></button>
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}}><Link to="/login">Log In</Link></button>
                    
                    </>
                ) : (
                    <>
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}}><Link to="/profile">Profile</Link></button>
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}} onClick={logout}>Log Out</button>
                    </>
                    )}
                
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px", color: "white"}}><Link to="/shoppingcart">Cart</Link></button>
            </nav>
        </div>
        </>
    )
}

export default Header;