import { Link } from "react-router-dom";

const Header = ({ signedIn }) => {
  return (
    <>
      <div className="header">
        <h1 className="title">Misfit Toyz</h1>

        <nav id="links" className="links">
          <Link to="/" id="link1">
            Home
          </Link>
          <Link to="/products" id="link2">
            Toyz
          </Link>

          {!signedIn ? (
            <>
              <Link to="/signup" id="link1">
                Sign Up
              </Link>
              <Link to="/login" id="link2">
                Log In
              </Link>
              <Link to="/create" id="link2"> {/* TEMPORARY */}
                Create
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" id="link1">
                Profile
              </Link>
              {/* <Link to="/create" id="link2">Create</Link> */}
              <Link to="/logout" id="link1">
                Log Out
              </Link>
            </>
          )}
          <Link to="/shoppingcart" id="link3">
            <i class="fa fa-shopping-cart"></i>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
